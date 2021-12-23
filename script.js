const $ = (q) => document.querySelector(q)
const text = $("#text")

const rateSelection = $("#rate")
const genderSelection = $("#gender")
const pitchSelection = $("#pitch")

const voiceSelection = $("#voice")

const resetButton = $("#reset")

const femaleVoiceIndexes = [2, 3, 4, 5, 7, 8, 9]
const maleVoiceIndexes = [1, 6]


$("#start").addEventListener("click", sayIt)
resetButton.addEventListener("click", resetSettings)
window.addEventListener("keydown", function (event) {
    if (event.keyCode == "13") { 
        sayIt()
        resetSettings()
        }
})

genderSelection.addEventListener("change", function() {
    updateVoiceIndexes(genderSelection.value)
    console.log(`Changed voice gender to ${genderSelection.value}.`);
})

function resetSettings() {
    text.value = ""
    text.focus()
    rateSelection.value = 1
    pitchSelection.value = 1
}

//Used for talking in the console
function talk(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance)
}

function updateVoiceIndexes(gender) {
    if (gender == "female") {
        voiceSelection.value = 5
        //Remove the male list indexes from the options.

        //Set the lists of female indexes into the options.
        
    } 
    else if (gender == "male") {
        voiceSelection.value = 6
        //Remove the female list indexes from the options.

        //Set the lists of male indexes into the options.

    } 
    else {

    }
    console.log(`Updated voice gender listings to ${gender}`)
}

function sayIt() {
    const message = text.value
    const voiceIndex = parseInt(voiceSelection.value)
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = rateSelection.value
    utterance.pitch = pitchSelection.value
    utterance.voice = speechSynthesis.getVoices()[voiceIndex]
    speechSynthesis.speak(utterance)
    console.log(`Said:  ${message}`)
}

talk("hi")

/*
document.getElementById("start").addEventListener("click", function () {
    sayIt("Deputy Hawkins is extremely handsome.")
})
*/
