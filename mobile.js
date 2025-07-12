function suggestSong() {
  const mood = document.getElementById("mood-input").value.toLowerCase();
  const result = document.getElementById("song-result");

  let songSuggestion = "";

  if (mood.includes("angry") || mood.includes("rebellious")) {
    songSuggestion = "🎵 *American Idiot* – A loud punk anthem for the misfits and rule-breakers.";
  } else if (mood.includes("sad") || mood.includes("lonely")) {
    songSuggestion = "🎵 *Wake Me Up When September Ends* – A soft, emotional ballad full of nostalgia and pain.";
  } else if (mood.includes("pumped") || mood.includes("energetic") || mood.includes("hyped")) {
    songSuggestion = "🎵 *Holiday* – A fast-paced, defiant celebration of freedom and chaos.";
  } else if (mood.includes("in love") || mood.includes("romantic") || mood.includes("crush")) {
    songSuggestion = "🎵 *When It's Time* – A heartfelt love song that’s raw and real.";
  } else {
    songSuggestion = "🎵 *Boulevard of Broken Dreams* – For when you're wandering through your feels.";
  }

  result.textContent = songSuggestion;
}
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    alert("Welcome to the Green Day fan zone! 🎸 Ready to rock?");
  }
});

