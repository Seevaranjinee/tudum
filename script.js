window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("tudum");
  audio.volume = 0.8;
  audio.play().catch(err => console.log("Autoplay blocked:", err));

  // After the intro ends, redirect or show main content
  setTimeout(() => {
    document.body.style.background = "#000";
    document.getElementById("container").style.display = "none";
    window.location.href = "home.html"; // redirect to your portfolio main page
  }, 4500);
});
