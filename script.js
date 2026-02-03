function validateInput() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const zipCode = document.getElementById("zipCode").value;
    const status = document.getElementById("statusUpdate");
    const secret = document.getElementById("secretMessage");

    // Clear previous success or error states
    secret.style.display = "none";
    status.style.color = "red";

   
    const fullName = firstName + " " + lastName;

    // CHECK 1: Ensure both names are entered 
    if (firstName.length === 0 || lastName.length === 0) {
        status.innerHTML = "Error: Please enter both a first and last name.";
        return false;
    }

    // CHECK 2: length input limiting command
    if (fullName.length > 20) {
        status.innerHTML = "Warning: Full name (" + fullName.length + " chars) cannot be longer than 20 characters!";
        return false;
    }

    // CHECK 3: zip Code digit limitations
    if (zipCode.length !== 5 || isNaN(zipCode)) {
        status.innerHTML = "Error: Zip Code must be exactly 5 digits.";
        return false;
    }

    // successful message area
    status.style.color = "green";
    status.innerHTML = "Validation Successful!";
    secret.style.display = "block";
    return false;
}