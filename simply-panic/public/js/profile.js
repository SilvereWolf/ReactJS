// CLASSES

// VARIABLES
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_STORAGE = firebase.storage().ref();

// const signInButton = document.getElementById('sign-in');

const signoutButton = document.getElementById('signout');
const profileImage = document.getElementById('profile-img');
const displayNameInput = document.getElementById('display-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const IDImage = document.getElementById('id-img');
const IDImageInput = document.getElementById('id-input');
const editButton = document.getElementById('edit');
const saveButton = document.getElementById('save');
const saveLoader = document.getElementById('save-loader');

var user = {
    IDimageUrl: 'n/a',
    displayName: 'n/a',
    email: 'n/a',
    geoLocation: {
        latitude: 0,
        longitude: 0
    },
    level: 1,
    photoURL: 'n/a',
    phone: 'n/a'
}

// EVENT LISTENERS
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

signoutButton.addEventListener("click", signOut);
editButton.addEventListener("click", prepareEdit);
saveButton.addEventListener("click", saveEdits);

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

function getUserData(){
    FIREBASE_DATABASE.ref('users/' + FIREBASE_AUTH.currentUser.uid).once('value').then((snapshot) => {
        if ( snapshot.val() ) {
            user = snapshot.val();
          setUserCredentials(user)
        } else {
          console.log("nothing");
        }
      });
}

function setUserCredentials(user){
    if(user.photoURL){
        profileImage.src = user.photoURL;
    }
    displayNameInput.value = user.displayName;
    emailInput.value = user.email;
    if(user.phone){
        phoneInput.value = user.phone
    }
    latitudeInput.value = user.geoLocation.latitude;
    longitudeInput.value = user.geoLocation.longitude;
    if(user.IDimageUrl != 'n/a'){
        IDImage.src = user.IDimageUrl;
    }
}


function prepareEdit(){
    displayNameInput.removeAttribute("readonly");
    phoneInput.removeAttribute("readonly");
    longitudeInput.removeAttribute("readonly");
    latitudeInput.removeAttribute("readonly");
    IDImage.setAttribute("hidden", "true");
    IDImageInput.style.display = 'block';
    editButton.setAttribute("hidden", "true");
    saveButton.removeAttribute("hidden");
}

function endEdit(){
    displayNameInput.setAttribute("readonly", "true");
    phoneInput.setAttribute("readonly", "true");
    longitudeInput.setAttribute("readonly", "true");
    latitudeInput.setAttribute("readonly", "true");
    IDImage.removeAttribute("hidden");
    IDImageInput.style.display = 'none';
    editButton.removeAttribute("hidden");
    saveButton.setAttribute("hidden", "true");
}

function saveEdits(){
    if(IDImageInput.files.length > 0){
        uploadImage(IDImageInput.files[0]);
    }else{
        updateUser();
    }
}

function updateUser(IDimageUrl = null){
    saveLoader.removeAttribute("hidden");

    if(displayNameInput.value != ""){
        user.displayName = displayNameInput.value;
    }else{
        user.displayName = FIREBASE_AUTH.currentUser.displayName;
    }

    if(phoneInput.value != ""){
        user.phone = phoneInput.value;
    }

    if(latitudeInput.value != "0"){
        user.geoLocation.latitude = latitudeInput.value;
    }
    if(latitudeInput.value != "0"){
        user.geoLocation.longitude = longitudeInput.value;
    }
    if(IDimageUrl){
        user.IDimageUrl = IDimageUrl;
    }

    user.photoURL = FIREBASE_AUTH.currentUser.photoURL;
    user.email = FIREBASE_AUTH.currentUser.email;

    var updates = {};
    updates['/users/' + FIREBASE_AUTH.currentUser.uid] = user;

    return FIREBASE_DATABASE.ref().update(updates, function(error) {
        if (error) {
          alert("something went wrong");
        } else {
            alert("data saved succesfully");
            getUserData();
            endEdit();
            saveLoader.setAttribute("hidden", "true");
        }
    });
}

function uploadImage(file){
    saveLoader.removeAttribute("hidden");
    
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
        contentType: file.type
    };

    const task = FIREBASE_STORAGE.child('id-images/' + name).put(file, metadata);

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
        console.log(url);
        updateUser(url);
    })
    .catch(console.error);
}
