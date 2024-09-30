document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.haptic-link').forEach(link => {
      link.addEventListener('click', () => {
        // Vibration for Android devices
        if (navigator.vibrate) {
          navigator.vibrate([30]); // Short vibration
        }
      });
    });
  });