document.addEventListener('DOMContentLoaded', function() {
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    const notificationBar = document.getElementById('notification-bar');

    mailtoLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default mailto behavior
            const emailAddress = link.getAttribute('href').replace('mailto:', '');

            navigator.clipboard.writeText(emailAddress).then(function() {
                showNotification();

                setTimeout(hideNotification, 2000);
            }).catch(function(error) {
                console.error('Could not copy email address: ', error);
            });
        });
    });

    function showNotification() {
        notificationBar.classList.remove('hidden', 'opacity-0');
        notificationBar.classList.add('opacity-100');
    }

    function hideNotification() {
        notificationBar.classList.remove('opacity-100');
        notificationBar.classList.add('opacity-0');
        setTimeout(function() {
            notificationBar.classList.add('hidden');
        }, 300); 
    }
});