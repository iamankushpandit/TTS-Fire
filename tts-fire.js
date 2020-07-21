document.body.style.border = "3px solid red";

/*
Reads out the selected text.
*/
function selectionEventAction() {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        var msg = new SpeechSynthesisUtterance(selectedText);
        window.speechSynthesis.speak(msg);
    }
}

/*
Add selectionEventAction() as a listener to mouseup events.
*/
document.addEventListener("mouseup", selectionEventAction);