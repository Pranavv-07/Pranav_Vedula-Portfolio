document.addEventListener('DOMContentLoaded', () => {

    // --- 1. RANDOM ALPHABETS (HACKER) EFFECT ---
    const letters = "abcdemnorstuvwxzPV";
    const header = document.querySelector(".hacker-text");

    if(header) {
        function scrambleText(element) {
            let iteration = 0;
            const originalText = element.dataset.value;
            
            clearInterval(element.interval);

            element.interval = setInterval(() => {
                element.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if(iteration >= originalText.length) { 
                    clearInterval(element.interval);
                }

                iteration += 1 / 3;
            }, 50);
        }

        // Run on Load
        setTimeout(() => {
            scrambleText(header);
        }, 100);    
    }

    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. MOBILE MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });
    }
});