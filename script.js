const roles = [
    "Python Developer",
    "Graphic Designer",
    "UI/UX Designer"
    
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.getElementById("role");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else {

        setTimeout(() => {

            roleElement.textContent = "";
            charIndex = 0;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

            typeEffect();

        }, 1500);

    }
}

typeEffect();