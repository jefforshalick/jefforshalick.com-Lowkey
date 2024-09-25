document.addEventListener('DOMContentLoaded', function() {
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    const notificationBar = document.getElementById('notification-bar');

    mailtoLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default mailto behavior
            const emailAddress = link.getAttribute('href').replace('mailto:', '');

            // Copy the email address to the clipboard
            navigator.clipboard.writeText(emailAddress).then(function() {
                // Show the notification bar
                showNotification();

                // Hide the notification bar after 3 seconds
                setTimeout(hideNotification, 3000);
            }).catch(function(error) {
                console.error('Could not copy email address: ', error);
            });
        });
    });

    // Function to show the notification
    function showNotification() {
        notificationBar.classList.remove('hidden', 'opacity-0');
        notificationBar.classList.add('opacity-100');
    }

    // Function to hide the notification
    function hideNotification() {
        notificationBar.classList.remove('opacity-100');
        notificationBar.classList.add('opacity-0');
        setTimeout(function() {
            notificationBar.classList.add('hidden');
        }, 300); // Extra delay to allow opacity transition to complete
    }
});