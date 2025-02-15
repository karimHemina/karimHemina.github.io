document.addEventListener('DOMContentLoaded', () => {
    const humburg = document.querySelector('.humburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');

    // Typewriter effect (kept as is)
    const typewriterText = document.querySelector('.typewriter-text');
    const textArray = ["Developer", "Researcher", "Manager", "Teacher"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isTyping = true;

    function typeWriter() {
        if (isTyping) {
            currentText = textArray[textIndex].slice(0, charIndex++);
            typewriterText.textContent = currentText;

            if (charIndex > textArray[textIndex].length) {
                isTyping = false;
                setTimeout(() => {
                    setTimeout(() => {
                        textIndex = (textIndex + 1) % textArray.length;
                        charIndex = 0;
                        isTyping = true;
                    }, 1000); // Pause before changing text
                }, 1000); // Pause at the end of the text
            }
        }
    }

    setInterval(typeWriter, 150); // Adjust speed here (milliseconds)

    // Toggle dropdown visibility when hamburger is clicked
    humburg.addEventListener('click', () => {
        dropdown.style.transform = "translateY(0)";
        humburg.style.opacity = "0"; // Hide hamburger icon
        humburg.style.pointerEvents = "none"; // Disable pointer events on hamburger icon
        cancel.style.opacity = "1"; // Show close icon
        cancel.style.pointerEvents = "visible"; // Enable pointer events on close icon
    });

    // Hide dropdown when close (cancel) icon is clicked
    cancel.addEventListener('click', () => {
        dropdown.style.transform = "translateY(-500px)";
        humburg.style.opacity = "1"; // Show hamburger icon
        humburg.style.pointerEvents = "visible"; // Enable pointer events on hamburger icon
        cancel.style.opacity = "0"; // Hide close icon
        cancel.style.pointerEvents = "none"; // Disable pointer events on close icon
    });
});

(function() {
    emailjs.init("5mrWNeAjylX9InXOD");
})();


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_ydr38e4';
    const templateID = 'template_r4u9ycm';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert('Failed to send message. Error: ' + JSON.stringify(err));
        });
});