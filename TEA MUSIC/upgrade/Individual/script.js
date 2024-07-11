// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buy1Button = document.getElementById('buy1');
    const buy2Button = document.getElementById('buy2');
    const buy3Button = document.getElementById('buy3');
    const buy4Button = document.getElementById('buy4');
    const buy5Button = document.getElementById('buy5');
    const popup = document.getElementById('popup');
    const qrImage = document.getElementById('qrImage');
    const close = document.getElementsByClassName('close')[0];

    buy1Button.addEventListener('click', function() {
        qrImage.src = 'buy1.jpg'; // Replace with the path to your QR code image for 1 week
        popup.style.display = 'block';
    });

    buy2Button.addEventListener('click', function() {
        qrImage.src = 'buy2.jpg'; // Replace with the path to your QR code image for 1 day
        popup.style.display = 'block';
    });

    buy3Button.addEventListener('click', function() {
        qrImage.src = 'buy3.jpg'; // Replace with the path to your QR code image for 1 day
        popup.style.display = 'block';
    });

    buy4Button.addEventListener('click', function() {
        qrImage.src = 'buy4.jpg'; // Replace with the path to your QR code image for 1 day
        popup.style.display = 'block';
    });

    buy5Button.addEventListener('click', function() {
        qrImage.src = 'buy5.jpg'; // Replace with the path to your QR code image for 1 day
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