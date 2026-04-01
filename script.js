// This makes the buttons interactive
function contact(serviceName) {
    alert("Thank you for your interest in " + serviceName + "!");
    const email = prompt("Please enter your email so we can send you a menu:");
    if (email) {
        console.log("Lead captured for " + serviceName + ": " + email);
        alert("Check your inbox soon!");
    }
}