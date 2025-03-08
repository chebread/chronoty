const speechText = (message: string) => {
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(message);
  utter.lang = 'ko-KR';
  utter.pitch = 1;
  utter.rate = 1;
  utter.volume = 1;
  window.speechSynthesis.speak(utter);
};

export default speechText;
