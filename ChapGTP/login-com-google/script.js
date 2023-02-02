const googleLoginButton = document.querySelector("#google-login-button");

// Inicializa o SDK do Google
gapi.load("auth2", function() {
  gapi.auth2.init({
    client_id: "YOUR_CLIENT_ID", // Adicione o ID do cliente do Google aqui
    scope: "profile email"
  });
});

googleLoginButton.addEventListener("click", () => {
  // Faz o login com o Google
  gapi.auth2.getAuthInstance().signIn().then(
    function(response) {
      const profile = response.getBasicProfile();
      console.log(`Nome: ${profile.getName()}`);
      console.log(`E-mail: ${profile.getEmail()}`);
      // Aqui você pode adicionar sua lógica de autenticação, como enviar os dados de perfil para o seu servidor, etc.
    },
    function(error) {
      console.error(error);
    }
  );
});
