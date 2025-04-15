// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Contact form submit handler
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    document.getElementById("contact-form").reset();
});
