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
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');

// EVENT LISTENERS
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

signoutButton.addEventListener("click", signOut);
level1.addEventListener("click", addLevel1);
level2.addEventListener("click", function() {
    window.location = 'panic_level_2.html';
});
level3.addEventListener("click", addLevel3);

// FUNCTIONS
function signOut() {
    FIREBASE_AUTH.signOut();
}

function handleAuthStateChanged(user) {
    if (user) {
        document.getElementById("uid").innerHTML = user.uid;
        // User is signed in
        displayName.innerHTML = user.displayName;
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

function addLevel3() {
    var uid = document.getElementById("uid").innerHTML;
    var number = prompt("Vul uw telefoon nummer in:", "");
    var address = prompt("Vul uw adres in:", "");

    if (number != null || number != "") {
        FIREBASE_DATABASE.ref('reports/' + uid).set({
            number: number,
            address: address,
            level: '1',
            imgUrl: 'null'
        });
        alert("Er zal een uitroep team van de dichtbijzijnste buurtwacht ingeschakeld worden en indien nodig ook de politie.");
    }
}