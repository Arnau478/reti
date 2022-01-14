const { ipcRenderer } = require("electron");

var pressedKeys = [];

window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('keydown', (event) => {
        pressedKeys[event.code] = true;
        checkKeyCombinations(event);
    });

    window.addEventListener('keyup', (event) => {
        pressedKeys[event.code] = false;
        checkKeyCombinations(event);
    });
});

function charCode(c){
    return c.charCodeAt(0);
}

function checkKeyCombinations(e){
    switch(true){
        case (pressedKeys["F1"]): {
            // TODO: Open command palette
            e.preventDefault();
            return;
        }
    }
}