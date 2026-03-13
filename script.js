function login() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Email check
    if (email.trim() === "") {
        message.innerHTML = "Email ID cannot be empty ❌";
        message.style.color = "red";
        return;
    }

    // Username check
    if (username.trim() === "") {
        message.innerHTML = "Username cannot be empty ❌";
        message.style.color = "red";
        return;
    }

    // Password validation
    var digitCount = 0;
    var letterCount = 0;

    for (var i = 0; i < password.length; i++) {
        var ch = password[i];

        if (ch >= '0' && ch <= '9') {
            digitCount++;
        } else if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) {
            letterCount++;
        }
    }

    if (digitCount >= 2 && letterCount >= 3) {
        message.innerHTML = "Login Accepted ✅";
        message.style.color = "green";
    } else {
        message.innerHTML =
            "Password must contain at least 2 digits and 3 letters ❌";
        message.style.color = "red";
    }
}
