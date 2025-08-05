let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

function enableDarkmode(){
    document.body.classList.add('darkmode');
    document.getElementById("theme-switch").innerHTML = "Light Mode";
    localStorage.setItem('darkmode', 'active');
}

function disableDarkmode(){
    document.body.classList.remove("darkmode");
    document.getElementById("theme-switch").innerHTML = "Dark Mode";
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})