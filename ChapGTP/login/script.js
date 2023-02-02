const form = document.querySelector("#login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // Aqui você pode adicionar sua lógica de autenticaç
