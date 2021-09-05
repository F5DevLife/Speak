const femaleVoiceIndexes = [2, 3, 4, 5, 7, 8, 9]


function talk(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance)
}

const sayIt = (message, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = rate
    utterance.voice = speechSynthesis.getVoices()[4]
    speechSynthesis.speak(utterance)
}

sayIt("hi")


document.getElementById("start").addEventListener("click", function () {
    sayIt("Deputy Hawkins is extremely handsome.")
})

