var form = document.getElementById('sheetdb-form');
		  
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(form.action, { 
    method: 'POST',
    body: new FormData(document.getElementById("sheetdb-form")),
}).then(
    response => alert("Thank you! your message send successfully." )
    ).then((html) => {  
        window.location.reload(); 
    })
	// .catch(error => console.error('Error!', error.message))
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};  
// <-----------------------Active------------------------>
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    // <---------------------Navbar---------------------->

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-right, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-left, .allskill, .project, .contacts form', { origin: 'bottom' });
ScrollReveal().reveal('.home-right h1, .about-left', { origin: 'left' });
ScrollReveal().reveal('.home-right h4, .about-right', { origin: 'right' });

const typed = new Typed('#typing',  {
    strings: ['Student','Web Developer'],
    typeSpeed: 100,
    // backSpeed: 100,
    // backDelay: 1000,
    loop: true
  });