let btn = document.querySelector("button");
let voiceSelect = document.querySelector("select");
let textAra = document.querySelector("textarea");
let voices = [];
let speech = new SpeechSynthesisUtterance();

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click", () => {
  if (textAra.value === "") {
    alert("write some text");
  } else {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  }
});
