const btn = document.getElementById("Dark_light");
const toggleIcon = document.getElementById("toggle-icon");

if (btn && toggleIcon) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            toggleIcon.src = 'pngs/sun.png';
        } else {
            toggleIcon.src = 'pngs/moon.png';
        }

    });
}
