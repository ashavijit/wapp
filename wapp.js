var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?"));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_2_1wd copyable-text selectable-text")[1]; // select the class from inspect mode in whatsapp web (@div class="")
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_1E0Oz")[0].click(); // select the button class from whatsapp web ( id = "button " @div class ="")
}
