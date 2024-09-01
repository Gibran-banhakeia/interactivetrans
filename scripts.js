// Matrix Effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('matrix').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Customize the message to be displayed in the matrix effect
const message = "Welcome to Gibran BANHAKEIA ";
const matrixChars = message.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ccff';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Intro Fade Out
setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('matrix').style.display = 'none';
}, 9000);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show Translation Services when "Explore Services" is clicked
document.getElementById('exploreServicesButton').addEventListener('click', function () {
    // Hide the main services section with a smooth transition
    document.getElementById('services').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('services').style.display = 'none';
        document.getElementById('translationServices').style.display = 'block';
        document.getElementById('translationServices').style.opacity = '1';
    }, 500);
});

// Transformation Effects
function startTransformation() {
    const transformations = [
        { bg: 'linear-gradient(135deg, #ffffff 25%, #e0f7ff)', color: '#003366' },
        { bg: 'linear-gradient(135deg, #003300 25%, #000000)', color: '#00cc00' },
        { bg: 'linear-gradient(135deg, #ff0000 25%, #0000ff)', color: '#00ffff' },
        { bg: 'linear-gradient(135deg, #0000ff 25%, #ffff00)', color: '#003366' },
    ];

    transformations.forEach((t, i) => {
        setTimeout(() => transformWebsite(t.bg, t.color), i * 5000);
    });

    setTimeout(resetWebsite, transformations.length * 5000);
}

function transformWebsite(bgColor, textColor) {
    document.body.style.background = bgColor;
    document.body.style.color = textColor;

    document.querySelectorAll('header, nav, section, footer').forEach(el => {
        el.style.backgroundColor = bgColor;
        el.style.color = textColor;
    });

    document.querySelectorAll('nav a, .button-3d').forEach(el => {
        el.style.color = textColor;
        el.style.backgroundColor = bgColor;
    });

    document.querySelector('.photo-container img').style.boxShadow = `0 0 30px ${textColor}, 0 0 60px rgba(255, 255, 255, 0.3)`;
}

function resetWebsite() {
    document.body.style.background = '';
    document.body.style.color = '';

    document.querySelectorAll('header, nav, section, footer').forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
    });

    document.querySelectorAll('nav a, .button-3d').forEach(el => {
        el.style.color = '';
        el.style.backgroundColor = '';
    });

    document.querySelector('.photo-container img').style.boxShadow = '';
}

// Robotika Mode
function activateRobotikaMode() {
    document.body.classList.toggle('robotika-mode');
}
