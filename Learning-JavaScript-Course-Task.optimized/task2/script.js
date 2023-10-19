const buttons = {
    consoleLog: document.querySelector("#consoleLog"),
    alert: document.querySelector("#alert"),
    confirm: document.querySelector("#confirm"),
    prompt: document.querySelector("#prompt")
};

const methodDescriptions = {
    consoleLog: "Метод для вывода сообщения в консоль браузера",
    alert: "Метод для вывода сообщения пользователю, отображается в браузере",
    confirm: "Метод для подтверждения действия пользователем",
    prompt: "Метод для введения информации пользователем в браузере"
};

const allIds = Object.keys(methodDescriptions);

document.body.addEventListener("click", ({ target }) => {
	if (target.tagName !== "BUTTON") return;
	if (!allIds.includes(target.getAttribute("id"))) return;

	alert(methodDescriptions[target.getAttribute('id')]);
});
