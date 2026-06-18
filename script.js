// 1. EFEK KURSOR KOSTUM (Custom Cursor)
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

// Menggerakkan kursor mengikuti mouse
document.addEventListener('mousemove', function(e){
    // Cursor utama (Lingkaran besar lambat)
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Efek Membesar saat Hover Menu
const hoverTriggers = document.querySelectorAll('.hover-trigger');

hoverTriggers.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('expand'); 
        cursor2.style.opacity = "0";    
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand'); 
        cursor2.style.opacity = "1";    
    });
});

// 2. EFEK MENGETIK (Typewriter Effect)
const textElement = document.querySelector('.typing-text');

const words = ["Information Systems Student", "Operations Administrator", "Customer Service Specialist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Menghapus huruf
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Mengetik huruf
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Kecepatan mengetik
    let typeSpeed = 100;
    if (isDeleting) typeSpeed = 50; 

    // Jika kata selesai diketik
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Tunggu 2 detik sebelum menghapus
        isDeleting = true;
    } 
    // Jika kata selesai dihapus
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0; // Ulangi dari awal
        }
    }

    setTimeout(typeEffect, typeSpeed);
}

// Jalankan fungsi mengetik saat halaman dimuat
document.addEventListener('DOMContentLoaded', typeEffect);

// 3. EFEK PARALLAX PADA BACKGROUND
document.addEventListener('mousemove', (e) => {
    const letter = document.getElementById('parallax-letter');
    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;
    
    letter.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});