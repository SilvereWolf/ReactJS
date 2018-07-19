// CLASSES

// VARIABLES
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

// const signInButton = document.getElementById('sign-in');

const signoutButton = document.getElementById('signout');
const IDImage = document.getElementById('id-img');
const IDImageInput = document.getElementById('id-input');
const editButton = document.getElementById('edit');
const saveButton = document.getElementById('save');

// EVENT LISTENERS
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

signoutButton.addEventListener("click", signOut);
editButton.addEventListener("click", prepareEdit);

// FUNCTIONS
function signOut() {
    FIREBASE_AUTH.signOut();
}

function handleAuthStateChanged(user) {
    if (user) {
        // User is signed in
        console.log(user);
        getUserData();
    }else{
        console.log("user signed out");
        window.location.href = 'index.html';
    }
}

// function getUserData(){
//     FIREBASE_DATABASE.ref('users/' + FIREBASE_AUTH.currentUser.uid).once('value').then((snapshot) => {
//         if ( snapshot.val() ) {
//           setUserCredentials(snapshot.val())
//         } else {
//           console.log("nothing");
//         }
//       });
// }

function setUserCredentials(user){
    if(user.photoURL){
        profileImage.src = user.photoURL;
    }
    // displayNameInput.value = user.displayName;
    // emailInput.value = user.email;
    // latitudeInput.value = user.geoLocation.latitude;
    // longitudeInput.value = user.geoLocation.longitude;
    if(user.IDimageUrl != 'n/a') {
        IDImage.src = user.IDimageUrl;
    }
}

function writeUserData(user) {
    var panicUser = new PanicUser(user);

    FIREBASE_DATABASE.ref('reports/' + panicUser.user.uid).set({
    //   displayName: panicUser.user.displayName,
    //   email: panicUser.user.email,
      photoURL : panicUser.user.photoURL,
      level: panicUser.level,
    //   geoLocation: panicUser.geoLocation,
      IDimageUrl: panicUser.IDimageUrl
    });
}

function prepareEdit(){
    // displayNameInput.removeAttribute("readonly");
    // longitudeInput.removeAttribute("readonly");
    // latitudeInput.removeAttribute("readonly");
    IDImageInput.removeAttribute("hidden");
    editButton.setAttribute("hidden", "true");
    saveButton.removeAttribute("hidden");
}