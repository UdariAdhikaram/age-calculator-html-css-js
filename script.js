function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const currentDate = new Date();

    // Check if the birth date is greater than the current date
    if (dob > currentDate) {
        // Clear any existing age display
        document.getElementById("year").innerHTML = "-";
        document.getElementById("month").innerHTML = "-";
        document.getElementById("day").innerHTML = "-";

        // Display error message
        document.getElementById("error").innerHTML = "Invalid input. Birth date cannot be in the future.";
        
        return; // Exit the function
    }
    // Clear any previous error message
    document.getElementById("error").innerHTML = "";        

    const ageinMS = Date.now() - dob.getTime();
    const ageDate = new Date(ageinMS);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    // Display the age
    document.getElementById("year").innerHTML = age;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;

    // Show the age elements
    document.getElementById("age").style.display = "block";
}
