function ctaClick() {
    alert('Call-to-action button clicked!');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});