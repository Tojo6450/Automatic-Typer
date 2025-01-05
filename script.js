const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor');

const textArray = ['Awesome!', 'Fun!', 'Powerful!'];
let textArrayIndex = 0; 
let charIndex = 0; 
let typingDelay = 150; 
let erasingDelay = 100;
let newTextDelay = 1000; 

// Function to type characters
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

// Function to erase characters
function erase() {
  if (charIndex > 0) {
    typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length; 
    setTimeout(type, typingDelay + 500); 
  }
}

// Start the typewriter effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, newTextDelay + 250);
});

