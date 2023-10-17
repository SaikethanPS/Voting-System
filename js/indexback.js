$(document).ready(function() {
    // Handle form submission on button click
    $('#login').on('click', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        
        // Get the values from the form
        var username = $('#username').val();
        var password = $('#password').val();
        
        // Perform validation on the form values
        if (username.trim() == '') {
            alert('Please enter your username.');
            return;
        }
        if (password.trim() == '') {
            alert('Please enter your password.');
            return;
        }
        
        // Perform login using an AJAX request
        $.ajax({
            url: 'login.php', // Replace with your login endpoint
            method: 'POST',
            data: { username: username, password: password },
            success: function(response) {
                if (response == 'success') {
                    // Login successful, redirect to dashboard
                    window.location.href = 'dashboard.php'; // Replace with your dashboard URL
                } else {
                    // Login failed, show error message
                    alert('Invalid username or password.');
                }
            },
            error: function() {
                // Error occurred during login, show error message
                alert('An error occurred during login. Please try again later.');
            }
        });
    });
});
