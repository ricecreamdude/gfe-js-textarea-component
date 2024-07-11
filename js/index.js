// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const textAreaEl = document.getElementById("textarea")
const charactersUsedEl = document.getElementById("characters-used");

textAreaEl.addEventListener("keyup", () => {
    charactersUsedEl.innerHTML = textAreaEl.value.length.toString() + "/500";
})
