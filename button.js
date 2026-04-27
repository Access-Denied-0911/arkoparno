
        document.addEventListener("DOMContentLoaded", () => {
            const toggleBtn = document.getElementById("themeToggle");

            toggleBtn.addEventListener("click", () => {
                document.body.classList.toggle("light-mode");

                toggleBtn.textContent =
                    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
            });
        });
// Auto-hide splash screen after 2 seconds
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    
    setTimeout(() => {
        // Fade out
        splash.classList.add('hidden-splash');
        
        // Remove from DOM so it doesn't block clicks
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500); 
    }, 2000); // 2000 milliseconds = 2 seconds
});
