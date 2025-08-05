import express from "express";
import axios from "axios";
import pkg from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Create the table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS favorite_films (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    rating TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;
pool.query(createTableQuery)
  .then(() => console.log("favorite_films table ready"))
  .catch(err => console.error("Error creating table", err));


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/explore", async (req, res) => {
  const query = (req.query.q || "").toLowerCase();
  try {
    
    const { data: films } = await axios.get(process.env.GHIBLI_API_URL);
    const filtered = query
      ? films.filter(f => f.title.toLowerCase().includes(query))
      : films;
    res.render("explore", { films: filtered, query });
  } catch (err) {
    console.error("Error fetching films:", err.message);
    res.render("explore", { films: [], query });
  }
});

app.get("/favorite", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM favorite_films ORDER BY id DESC');
    res.render("favorite", { favorites: result.rows });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.render("favorite", { favorites: [] });
  }
});


app.post('/api/favorite', async (req, res) => {
  const { title, rating } = req.body;
  if (!title || !rating) {
    return res.status(400).json({ message: 'Missing title or rating' });
  }

  try {
    const existingFilm = await pool.query('SELECT id FROM favorite_films WHERE title = $1', [title]);
    
    if (existingFilm.rows.length > 0) {
      return res.status(409).json({ message: 'Film already in favorites!' });
    }

    await pool.query('INSERT INTO favorite_films (title, rating) VALUES ($1, $2)', [title, rating]);
    res.status(201).json({ message: '🎉 Favorite film saved successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Failed to save favorite film' });
  }
});

app.delete('/api/favorite/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM favorite_films WHERE id = $1', [id]);
    
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    
    res.json({ message: 'Favorite removed successfully!' });
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).json({ message: 'Failed to remove favorite' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});