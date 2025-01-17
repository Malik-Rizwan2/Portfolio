/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .right', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .left', { origin: 'right' });



/* ========= Stmp ========= */

// function sendEmail() {
//     const userName = document.querySelector('#userName').value;
//     const userEmail = document.querySelector('#userEmail').value;
//     const userPhone = document.querySelector('#userPhone').value;
//     const userSubject = document.querySelector('#userSubject').value;
//     const userMessage = document.querySelector('#userMessage').value;

//     if (userName && userEmail && userPhone && userSubject && userMessage) {
//         Email.send({
//             Host: "smtp.elasticemail.com",
//             Username: "malikrizwan1076@gmail.com",
//             Password: "7C76524F36BE43747A4D1F9ACEF8A8D22A3C",
//             To: 'develping.hut2022@gmail.com',
//             From: "malikrizwan1076@gmail.com",
//             Subject: userSubject,
//             Body: `
//                 Name: ${userName} <br>
//                 Phone #: ${userPhone} <br>
//                 Email: ${userEmail} <br>
//                 Message: ${userMessage}
//             `
//         }).then(
//             message => alert("Mail sent successfully: " + message)
//         ).catch(
//             error => alert("Error sending email: " + error)
//         );
//     } else {
//         alert("Please fill all fields.");
//     }
// }
function sendEmail() {
    // Get form values
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPhone = document.getElementById('userPhone').value;
    const userSubject = document.getElementById('userSubject').value;
    const userMessage = document.getElementById('userMessage').value;

    // Ensure all fields are filled (required attributes are already handling this in the form)
    if (userName && userEmail && userPhone && userSubject && userMessage) {
        // Use SMTP.js to send email
        Email.send({
            SecureToken: "your_secure_token_from_smtpjs",  // Replace with your Secure Token if you are using this
            Host: "smtp.elasticemail.com",                 // Or any other SMTP server
            Username: "malikrizwan1076@gmail.com",         // Your SMTP username
            Password: "7C76524F36BE43747A4D1F9ACEF8A8D22A3C", // Your SMTP password or API key
            To: 'develping.hut2022@gmail.com',             // Receiver's email
            From: "malikrizwan1076@gmail.com",             // Your email
            Subject: userSubject,                          // Subject
            Body: `
                Name: ${userName} <br>
                Phone #: ${userPhone} <br>
                Email: ${userEmail} <br>
                Message: ${userMessage}
            `
        }).then(
            message => alert("Mail sent successfully!")
        ).catch(
            error => alert("Error sending email: " + error)
        );
    } else {
        alert("Please fill all the fields.");
    }
}
