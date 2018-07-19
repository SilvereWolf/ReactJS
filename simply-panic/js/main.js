// VARIABLES
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

// const signInButton = document.getElementById('sign-in');

const loginButton = document.getElementById('login');
const closeloginModalButton = document.getElementById('close-login-modal');
const loginModal = document.getElementById('login-modal');
const modalOverlay = document.getElementById('modal-overlay');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);


// EVENT LISTENERS
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

// signInButton.addEventListener("click", signIn);
// signOutButton.addEventListener("click", signOut);

loginButton.addEventListener("click", showLoginModal);
closeloginModalButton.addEventListener("click", hideLoginModal);


// FUNCTIONS
function showLoginModal(){
    loginModal.removeAttribute("hidden");
    modalOverlay.removeAttribute("hidden");
}

function hideLoginModal(){
    loginModal.setAttribute("hidden", "true");
    modalOverlay.setAttribute("hidden", "true");
    
}


function signIn() {
    FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
  
function signOut() {
    FIREBASE_AUTH.signOut();
}

function handleAuthStateChanged(user) {
    if (user) {
      // User is signed in
      console.log(user);
      signInButton.setAttribute("hidden", "true");
      signOutButton.removeAttribute("hidden");
    } else {
      // User is not signed in
      console.log("user is not signed in");
      signOutButton.setAttribute("hidden", "true");
      signInButton.removeAttribute("hidden");
    }
  }