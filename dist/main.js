// Typing effect for professions
const professions = ["Web-Developer", "Cloud Enthusiast (AWS)", "SAP Certified ABAP Developer", "Photographer", "Foss Enthusiast"];
let professionIndex = 0;
let charIndex = 0;

function changeProffessionEffect() {
    const profession = professions[professionIndex];
    const span = document.createElement("span");
    document.getElementsByClassName("changing-profession")[0].appendChild(span);

    const typingTime = profession.length * 100;
    const delay = Math.max(0, 3000 - typingTime);

    const interval = setInterval(() => {
        if (charIndex < profession.length) {
            span.textContent += profession.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                span.remove();
                professionIndex = (professionIndex + 1) % professions.length;
                charIndex = 0;
                changeProffessionEffect();
            }, delay);
        }
    }, 100);
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName("changing-profession")[0].appendChild(changeProffessionEffect());
});


// scroll to merge profile with target image
window.addEventListener('scroll', function () {
    const profileImg = document.querySelector('.top-profile-img');
    const targetImg = document.querySelector('.profile-to-target-img');
    const triggerPoint = 100;

    if (window.scrollY > triggerPoint) {
        // Get target image position relative to document
        const targetRect = targetImg.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetLeft = targetRect.left + scrollLeft;
        const targetTop = targetRect.top + scrollTop;

        // Set profile image to absolute and move it
        profileImg.style.left = `0px`;
        profileImg.style.top = `6rem`;
        profileImg.style.transform = `scale(0.5) translate(${targetLeft}px, ${targetTop}px)`;
        profileImg.style.opacity = '0';
    } else {
        // Reset position and style
        profileImg.style.position = '';
        profileImg.style.left = '';
        profileImg.style.top = '';
        profileImg.style.transform = '';
        profileImg.style.opacity = '';
    }
});

// Custom cursor implementation
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// Dynamic copyright year
function copyrightYear() {
    const yearSpan = document.getElementsByClassName('copyright-year')[0];
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = "© " + currentYear;
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName("copyright-year")[0].appendChild(copyrightYear());
});

// Animate gradient-letter font size in a wave
function animateGradientLetters() {
    const letters = document.querySelectorAll('.gradient-letter');
    let tick = 0;
    setInterval(() => {
        letters.forEach((el, i) => {
            // Create a wave effect
            const size = 3.2 + Math.sin(tick / 4 + i / 2) * 0.7;
            el.style.fontSize = size + 'rem';
        });
        tick++;
    }, 90);
}

window.addEventListener('DOMContentLoaded', function () {
    animateGradientLetters();
});

// Multilingual greetings
const greetings = [
    "Hello !! Friends ..", // English
    "¡Hola amigos!",      // Spanish
    "Bonjour les amis!",  // French
    "Hallo Freunde!",     // German
    "Ciao amici!",        // Italian
    "नमस्ते दोस्तों!",      // Hindi
    "こんにちは、友達！",    // Japanese
    "Привет, друзья!",    // Russian
    "Olá amigos!",        // Portuguese
    "你好，朋友们！"         // Chinese
];
let greetIndex = 0;

function changeGreeting() {
    const greetSpan = document.querySelector('.greet-lang');
    greetSpan.textContent = greetings[greetIndex];
    greetIndex = (greetIndex + 1) % greetings.length;
}

window.addEventListener('DOMContentLoaded', function () {
    changeGreeting();
    setInterval(changeGreeting, 2500);
});


// Form label fly-up effect
function labelFlyUp() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameLabel = document.querySelector('.name-label');
    const emailLabel = document.querySelector('.email-label');
    const messageLabel = document.querySelector('.message-label');

    function handleLabel(input, label, translate) {
        input.addEventListener('focus', function () {
            label.style.transform = translate;
            label.style.backdropFilter = 'blur(10px)';
            label.style.borderRadius = 'var(--border-radius)';
            input.style.outline = 'none';
            input.style.borderColor = '#ff8000ff';
            label.style.padding = '0 0.3rem';
            label.style.transition = 'all 0.3s cubic-bezier(0.77,0,0.175,1)';
        });
        input.addEventListener('blur', function () {
            if (!input.value) {
                label.style.transform = '';
                input.style.borderColor = '';
            }
        });
        input.addEventListener('input', function () {
            if (input.value) {
                label.style.transform = translate;
                input.style.borderColor = '';
            } else if (document.activeElement !== input) {
                label.style.transform = '';
            }
        });
    }

    handleLabel(nameInput, nameLabel, 'translate(0, -30px) scale(0.9)');
    handleLabel(emailInput, emailLabel, 'translate(0, -40px) scale(0.9)');
    handleLabel(messageInput, messageLabel, 'translate(0px, -35px) scale(0.9)');
}

window.addEventListener('DOMContentLoaded', function () {
    labelFlyUp();
});