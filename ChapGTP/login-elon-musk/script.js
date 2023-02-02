function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var id_token = googleUser.getAuthResponse().id_token;
  
    // Send the token to your server for verification
    // ...
  
    // Handle the response from your server
    // ...
  }
  