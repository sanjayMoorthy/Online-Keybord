let buttons = document.querySelectorAll("button")
let output = document.querySelector(".inputtext")
let backSpace = document.querySelector(".backspc")
let mic = document.querySelector(".mic")
let emoji = document.querySelector(".Emojis")

for(let i=0; i<buttons.length ; i++){
    buttons[i].addEventListener("click",(e)=>{
       
        if (buttons[i].classList.contains("backspc")) {
            currentOutput = output.value.slice(0, output.value.length - 1)
            output.value = currentOutput
        }
        else if (buttons[i].classList.contains("CapsLock")) {
            // capsLocks(CapsLock)
            e.target.classList.toggle("actives")
            for (let k = 0; k < buttons.length; k++) {
                if (e.target.classList.contains("actives")) {
                    if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                        buttons[k].innerText = buttons[k].innerText.toUpperCase()
                    }
                } else {
                    if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                        buttons[k].innerText = buttons[k].innerText.toLowerCase()
                    }
                }
            }
        }
        else if (buttons[i].classList.contains("Enter")) {
            output.value += "\n"
        }
        else if (buttons[i].classList.contains("Space")) {
            output.value += " "
        }
        else if (buttons[i].classList.contains("tab")) {
            output.value += "    "
        }
        else if (buttons[i].classList.contains("Shift")) {
            let element = e.target
            ShiftcapsLock(element)
        } else if (buttons[i].innerText == "Emojis") {
            output.value += ""
        }
        else {
                output.value += e.target.innerText
        }
    })
}








mic.addEventListener("click",tamilvoice())

function tamilvoice() {
    let speech = "Speeking";
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
   console.log(recognition);
    recognition.interimResults = true;
    recognition.lang = "en-US";


    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

            output.value += transcript
    });

    if (speech == "Speeking") {
        recognition.start();
        recognition.addEventListener('end', recognition.start);
    }

}