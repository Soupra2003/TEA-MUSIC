// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buy1Button = document.getElementById('buy1');
    const buy2Button = document.getElementById('buy2');
    const popup = document.getElementById('popup');
    const qrImage = document.getElementById('qrImage');
    const close = document.getElementsByClassName('close')[0];

    buy1Button.addEventListener('click', function() {
        qrImage.src = '1week.jpg'; // Replace with the path to your QR code image for 1 week
        popup.style.display = 'block';
    });
            
    buy2Button.addEventListener('click', function() {
        qrImage.src = '1day.jpg'; // Replace with the path to your QR code image for 1 day
        popup.style.display = 'block';
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
