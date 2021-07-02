var username = document.getElementById('username');
var profileImage = document.getElementById('profile-image');
var password = document.getElementById('password');
var allLanguages = document.getElementsByClassName('language');
var profileList = document.getElementById('profile-list');
var selectedLanguage;
var regExUsername = /\w+$/;

// Validate username input
function checkUsername() {
    isValid = regExUsername.test(username.value);
    if (isValid) {
        username.parentElement.classList.remove("errorInput");
        username.parentElement.classList.add("validInput");
    }
    else {
        username.parentElement.classList.add("errorInput");
        username.parentElement.classList.remove("validInput");
    }
    return isValid;
}

// Validate profile-image input
function checkImage() {
    isValid = profileImage.value.length > 0;
    if (isValid) {
        profileImage.parentElement.classList.remove("errorInput");
        profileImage.parentElement.classList.add("validInput");
    }
    else {
        profileImage.parentElement.classList.add("errorInput");
        profileImage.parentElement.classList.remove("validInput");
    }
    return isValid;
}

function validLanguage() {
    // Get the value of the checked radio button
    for(var i=0; i < allLanguages.length; i++){
        if(allLanguages[i].checked) {
            selectedLanguage = allLanguages[i].value;
            allLanguages[i].parentElement.classList.add("validInput");
            allLanguages[i].parentElement.classList.remove("errorInput");
        }
    }

    // If nothing is checked
    if (selectedLanguage == undefined) {
        allLanguages[0].parentElement.classList.add("errorInput");
    }

    return selectedLanguage;
}

function createProfile() {
    var usernameValid = checkUsername();
    var imageValid = checkImage();
    validLanguage();

    // Append the new profile as innerHTML to the html section
    if (usernameValid && imageValid && selectedLanguage !== undefined) {
        console.log("Everything is valid!");
        profileList.innerHTML += "<div><h2>" + username.value + "</h2><h3>" + username.value + " likes " + selectedLanguage + "</h3><img src=" + profileImage.value + "></div>"
    }
}


function submitForm() {
    var usernameValid = checkUsername();
    var imageValid = checkImage();
    // validLanguage();

    // Append the new profile as innerHTML to the html section
    if (usernameValid && imageValid && selectedLanguage !== undefined) {
        return true;
    }

    return false;   
}