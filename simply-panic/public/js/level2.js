// CLASSES

// VARIABLES
const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();
const FIREBASE_STORAGE = firebase.storage().ref();

// const signInButton = document.getElementById('sign-in');

const signoutButton = document.getElementById('signout');
const phoneInput = document.getElementById('phone');
const IDImage = document.getElementById('id-img');
const IDImageInput = document.getElementById('id-input');
const editButton = document.getElementById('edit');
const saveButton = document.getElementById('save');
const saveLoader = document.getElementById('save-loader');

var user = {
    IDimageUrl: 'n/a',
    level: 2,
    photoURL: 'n/a',
    phone: phoneInput
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
    }else{
        console.log("user signed out");
        window.location.href = 'index.html';
    }
}

function setUserCredentials(user){
    if(user.IDimageUrl != 'n/a'){
        IDImage.src = user.IDimageUrl;
    }
}


function prepareEdit(){
    IDImage.setAttribute("hidden", "true");
    editButton.setAttribute("hidden", "true");
    saveButton.removeAttribute("hidden");
}

function endEdit() {
    IDImage.removeAttribute("hidden");
    IDImageInput.style.display = 'none';
    editButton.removeAttribute("hidden");
    saveButton.setAttribute("hidden", "true");
}

function saveEdits(){
    if(IDImageInput.files.length > 0){
        uploadImage(IDImageInput.files[0]);
    } else{
        updateUser();
    }
}

function updateUser(IDimageUrl = null){
    saveLoader.removeAttribute("hidden");

    if(IDimageUrl){
        user.IDimageUrl = IDimageUrl;
    }

    FIREBASE_DATABASE.ref('reports/' + FIREBASE_AUTH.currentUser.uid).set({
        number: document.getElementById('phone').value,
        level: user.level,
        imgUrl: IDimageUrl
    });
    alert("U zal door een meldkamer medewerker worden opgebeld en zo verder verhelpen worden.");
    endEdit();
    saveLoader.setAttribute("hidden", "true");
}

function uploadImage(file){
    saveLoader.removeAttribute("hidden");
    
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
        contentType: file.type
    };

    const task = FIREBASE_STORAGE.child('id-report-images/' + name).put(file, metadata);

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
        console.log(url);
        updateUser(url);
    })
    .catch(console.error);
}
