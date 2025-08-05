# 🎬 GhibliVerse - Studio Ghibli Fan Portal

A beautiful, interactive web application dedicated to Studio Ghibli films. Explore the magical world of Ghibli movies, search through the collection, and create your personalized favorites list with ratings.

<img width="1460" height="847" alt="image" src="https://github.com/user-attachments/assets/a872c9cc-20c1-463a-929a-cfa9e6af85d0" /> <img width="1457" height="838" alt="image" src="https://github.com/user-attachments/assets/4bcf56db-0943-4e30-af8c-da47fd34ba93" />
 <img width="1461" height="849" alt="image" src="https://github.com/user-attachments/assets/f16f53c5-e4a3-4803-b55b-04e0ea983e22" />
<img width="1457" height="838" alt="image" src="https://github.com/user-attachments/assets/0a610b6c-a555-4682-ba67-6db95cc2ea15" />
<img width="1460" height="848" alt="image" src="https://github.com/user-attachments/assets/9e9b1451-df07-46c5-a305-ec413f43c88c" />
<img width="1456" height="828" alt="image" src="https://github.com/user-attachments/assets/660c5beb-4868-4d32-83be-ed2d3b20e101" />


## ✨ Features

- **🎭 Film Exploration**: Browse through the complete Studio Ghibli film collection
- **🔍 Smart Search**: Find films by title with real-time filtering
- **⭐ Personal Favorites**: Add films to your favorites with custom ratings (1-5 stars)
- **💾 Persistent Storage**: Your favorites are saved in a PostgreSQL database
- **🌙 Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Beautiful UI**: Clean, modern interface inspired by Studio Ghibli's aesthetic

## 🛠️ Tech Stack

### Frontend
- **HTML5** & **CSS3** with custom CSS variables for theming
- **Vanilla JavaScript** for dark mode toggle and AJAX interactions
- **EJS** templating engine for server-side rendering
- **Responsive Grid Layout** for film cards

### Backend
- **Node.js** with **Express.js** framework
- **PostgreSQL** database for storing user favorites
- **Axios** for external API calls
- **RESTful API** endpoints for favorites management

### External APIs
- **Studio Ghibli API** (ghibliapi.vercel.app) for film data

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krutarthpatel28/DCxGDG_Task_KrutarthPatel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your database credentials:
   ```env
   PORT=3000
   NODE_ENV=development
   DB_USER=your_db_username
   DB_HOST=localhost
   DB_NAME=User_fav
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   GHIBLI_API_URL=https://ghibliapi.vercel.app/films
   SESSION_SECRET=your-super-secret-key
   ```

4. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE User_fav;
   ```
   
   The application will automatically create the required tables on startup.

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
ghibliverse/
├── public/                 # Static files
│   ├── style/
│   │   └── styles.css     # Main stylesheet with CSS variables
│   └── js/
│       └── darkmode.js    # Dark mode toggle functionality
├── views/                 # EJS templates
│   ├── partials/
│   │   └── navbar.ejs     # Navigation component
│   ├── index.ejs          # Homepage
│   ├── explore.ejs        # Film exploration page
│   └── favorite.ejs       # User favorites page
├── index.js               # Main server file
├── package.json           # Dependencies and scripts
├── .env.example           # Environment variables template
└── README.md             # Project documentation
```

## 🎯 API Endpoints

### Web Routes
- `GET /` - Homepage
- `GET /explore` - Film exploration page with search
- `GET /favorite` - User favorites page

### API Routes
- `POST /api/favorite` - Add film to favorites
- `DELETE /api/favorite/:id` - Remove film from favorites

## 🎨 Features in Detail

### Film Exploration
- Browse all Studio Ghibli films with beautiful card layouts
- High-quality movie banners and descriptions
- Real-time search functionality
- Responsive grid that adapts to screen size

### Favorites System
- Rate films from 1-5 stars
- Persistent storage in PostgreSQL database
- Duplicate prevention
- Easy removal of favorites
- Beautiful favorites gallery page

### Dark Mode
- System-wide dark theme toggle
- CSS variables for seamless theme switching
- Persistent theme selection
- Optimized colors for readability

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized navigation for mobile devices
- Touch-friendly interface elements

## 🔧 Development

### Available Scripts
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (if implemented)

### Database Schema
```sql
CREATE TABLE favorite_films (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    rating TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Deployment

### Environment Setup for Production
1. Set `NODE_ENV=production` in your environment variables
2. Update database credentials for your production database
3. Set a strong `SESSION_SECRET`
4. Configure your hosting platform's environment variables

### Hosting Options
- **Heroku**: Easy deployment with PostgreSQL add-on
- **Railway**: Modern platform with built-in PostgreSQL
- **Vercel**: For static deployments (requires serverless functions)
- **DigitalOcean**: VPS hosting with full control

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation if needed

## 🐛 Known Issues & Future Features

### Current Limitations
- No user authentication (all favorites are shared)
- Limited film metadata display
- No film reviews or comments system

### Planned Features
- [ ] User authentication and personal accounts
- [ ] Film reviews and ratings system
- [ ] Advanced filtering (by year, director, genre)
- [ ] Watchlist functionality
- [ ] Social features (sharing favorites)
- [ ] Film recommendations
- [ ] Mobile app version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Studio Ghibli** for creating amazing films that inspire this project
- **Ghibli API** creators for providing free access to film data
- **Open source community** for the tools and libraries used
- **Contributors** who help improve this project

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ghibliverse/issues) page
2. Create a new issue with detailed information
3. Reach out to the maintainers

## 🌟 Show Your Support

If you like this project, please consider:
- ⭐ Starring the repository
- 🍴 Forking the project
- 📢 Sharing with friends
- 🐛 Reporting bugs
- 💡 Suggesting new features

---


**Happy exploring the magical world of Studio Ghibli! 🏰✨**
