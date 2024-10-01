
function printWelcomeMessage() {
    const messageContainer = document.getElementById('message-container');


    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            const message = document.createElement('p');
            message.textContent = "Добро пожаловать на сайт!";
            messageContainer.appendChild(message);
        }, i * 1000);
    }
}


window.onload = function() {
    printWelcomeMessage();
};
