const form = document.querySelector(".form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");

const loginUser = (username, email) => {
  return new Promise((resolve, reject) => {
    if (email !== "user@gmail.com") {
      reject(new Error("invalid login"));
    }

    resolve({ username, email });
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  loginUser(usernameInput.value, emailInput.value)
    .then((user) => {
      alert(`Bem vindo (a) ${user.username}\nSeu email é: ${user.email}`);
    })
    .catch((error) => {
      alert(error);
    });
});
