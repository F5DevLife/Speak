const $ = (q) => document.querySelector(q)
const text = $("#text")

const genderSelection = $("#gender")


const resetButton = $("#reset")


const voiceSelection = $("#voice")


const femaleVoiceIndexes = [2, 3, 4, 5, 7, 8, 9]


$("#start").addEventListener("click", sayIt)
resetButton.addEventListener("click", resetText)
window.addEventListener("keydown", function (event) {
    if (event.keyCode == "13") { 
        sayIt()
        resetText()
        }
})

genderSelection.addEventListener("change", function() {
    console.log(`Changed voice gender to ${genderSelection.value}.`);
})

function resetText() {
    text.value = ""
    text.focus()
}

//Used for talking in the console
function talk(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance)
}

function sayIt() {
    //const femVoiceIndex
    const message = text.value
    const voiceNum = parseInt(voiceSelection.value)
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1
    utterance.voice = speechSynthesis.getVoices()[voiceNum]
    speechSynthesis.speak(utterance)
    console.log(`Said:  ${message}`)
}

talk("hi")

/*
document.getElementById("start").addEventListener("click", function () {
    sayIt("Deputy Hawkins is extremely handsome.")
})
*/
