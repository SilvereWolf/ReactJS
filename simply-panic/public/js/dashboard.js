// CLASSES
function PanicUser(user){
    this.user = user;
    this.level = 1;
    this.geoLocation = {
        latitude: 0,
        longitude: 0,
    };
    this.IDimageUrl = 'n/a';
}

// VARIABLES
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

// const signInButton = document.getElementById('sign-in');

const signoutButton = document.getElementById('signout');
const displayName = document.getElementById('display-name');
const createLevel = document.getElementById('level1');
const level2 = document.getElementById('level2');
// const displayName = document.getElementById('display-name');

// EVENT LISTENERS
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

signoutButton.addEventListener("click", signOut);
createLevel.addEventListener("click", addLevel1);
level2.addEventListener("click", function() {
    window.location = 'panic_level_2.html';
});

// FUNCTIONS
function signOut() {
    FIREBASE_AUTH.signOut();
}

function handleAuthStateChanged(user) {
    if (user) {
        // User is signed in
        displayName.innerHTML = user.displayName;
        document.getElementById("uid").innerHTML = user.uid;
        writeUserData(user);
    }else{
        console.log("user signed out");
        window.location.href = 'index.html';
    }
}

function writeUserData(user) {
    var panicUser = new PanicUser(user);

    FIREBASE_DATABASE.ref('users/' + panicUser.user.uid).set({
      displayName: panicUser.user.displayName,
      email: panicUser.user.email,
      photoURL : panicUser.user.photoURL,
      level: panicUser.level,
      geoLocation: panicUser.geoLocation,
      IDimageUrl: panicUser.IDimageUrl
    });
    
}

function addLevel1() {
    var uid = document.getElementById("uid").innerHTML;
    var number = prompt("Vul uw telefoon nummer in zodat een medewerker contact met u kunt maken", "");

    if (number != null || number != "") {
        FIREBASE_DATABASE.ref('reports/' + uid).set({
            number: number,
            level: '1',
            imgUrl: 'null'
        });
        alert("U zal door een meldkamer medewerker worden opgebeld en zo verder verhelpen worden.");
    } 
}