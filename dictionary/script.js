function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}

document.getElementById("word_select").addEventListener("change", word_sentence)

function word_sentence(){
  const menu = document.getElementById("word_select");
  const display = document.getElementById("sentence_display");
  if(menu.selectedIndex>0){
    const selectedOption = menu.options[menu.selectedIndex];
    display.value = selectedOption.dataset.sentence;
  }
  else {
    display.value = "";
  }
  } 

function speak_word(){
  const menu = document.getElementById("word_select");
  if(menu.selectedIndex>0){
    speak(menu.value);
  }
  else{
    alert("Select a word first");
  }
}

function speak_sentence(){
  const display = document.getElementById("sentence_display");
  if(display.value !== ""){
    speak(display.value);
  }
  else{
    alert("Select a word first");
  }
}