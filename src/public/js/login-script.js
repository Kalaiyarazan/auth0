gapi.load("auth2", () => {
  const auth2 = gapi.auth2.init({
    clientId:
      "397945946748-d7m0984io2dpgsa20c3qitrqe6u2odrp.apps.googleusercontent.com"
  });

  document.querySelector("#login").addEventListener("click", () => {
    auth2.signIn();
  });

  document.querySelector("#logout").addEventListener("click", function() {
    auth2.signOut();
  });

  auth2.isSignedIn.listen(status => {
    console.log(status ? "User logged in" : "User not logged in");
  });

  auth2.currentUser.listen(user => {
    const profile = user.getBasicProfile();

    console.log(profile.getName());
    console.log(profile.getEmail());
    console.log(profile.getImageUrl());
  });
});
