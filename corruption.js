// List of quotes
const quotes = [
    "The unconscious is structured like a language. - Jacques Lacan",
    "Desire is the desire of the Other. - Jacques Lacan",
    "Spirit is a bone. - Georg Hegel",
    "There is no transcendent reality behind the illusion of appearances. - Georg Hegel",
    "The ancients conceived the void as the principle of motion, for they rightly saw the moving princple as the negative, though they did not as yet grasp that teh negative is the self. - Georg Hegel",
    "TThe function of ideology is not to offer us a point of escape from our reality but to offer us the social reality itself as an escape from some traumatic, real kernel. - Slavoj Žižek",
    "Beyond the fiction of reality, there is the reality of the fiction. - Slavoj Žižek",
    // Add more quotes 
];

// Display corrupted text
function displayCorruptedText(text) {
    const outputElement = document.getElementById('output');
    const corruptedText = corruptText(text);
    outputElement.innerHTML += corruptedText + '\n';
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Corrupt text with clues in 'echo' command
function corruptText(text) {
    const corruptionMap = {
        'A': 'Δ', 'B': 'ß', 'C': 'Ć', 'D': 'Đ', 'E': 'Ξ', 'F': 'F', 'G': 'Ǥ',
        'H': 'Ħ', 'I': 'ɨ', 'J': 'J', 'K': 'Ҝ', 'L': 'Ł', 'M': 'Ṃ', 'N': 'Ň',
        'O': '0', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'Ś', 'T': '┼', 'U': 'Ų',
        'V': 'V', 'W': 'Ψ', 'X': 'Ж', 'Y': 'Y', 'Z': 'Ż',
        'a': 'α', 'b': 'в', 'c': '¢', 'd': 'đ', 'e': '€', 'f': 'ƒ', 'g': '9',
        'h': 'ħ', 'i': 'ί', 'j': 'ʝ', 'k': 'ƙ', 'l': 'ℓ', 'm': 'м', 'n': 'η',
        'o': 'ø', 'p': 'ρ', 'q': 'զ', 'r': 'я', 's': 'ѕ', 't': 'т', 'u': 'υ',
        'v': 'ν', 'w': 'ω', 'x': 'χ', 'y': 'γ', 'z': 'ƶ'
    };

    return text.split('').map(char => corruptionMap[char] || char).join('');
}

// Display corrupted hint
function displayCorruptedHint(text, excludePhrase = '') {
    const outputElement = document.getElementById('output');

    // Corrupt the text, preserving the excludePhrase
    const corruptedText = selectivelyCorruptText(text, excludePhrase);

    // Create a glitch effect
    const glitchDiv = document.createElement('div');
    glitchDiv.className = 'glitch';

    glitchDiv.innerHTML = corruptedText;

    // Set data-text attribute for glitch effect
    const plainText = glitchDiv.innerText;
    glitchDiv.setAttribute('data-text', plainText);

    outputElement.appendChild(glitchDiv);

    // Add an empty div to create space after the glitch effect
    const spacerDiv = document.createElement('div');
    spacerDiv.style.height = '1em'; // Adjust as needed
    outputElement.appendChild(spacerDiv);

    // Scroll to bottom
    scrollToBottom();
}

function selectivelyCorruptText(text, excludePhrase) {
    const corruptionMap = {
        // Character mappings
        'A': 'Δ', 'B': 'ß', 'C': 'Ç', 'D': 'Ð', 'E': 'Ξ', 'F': '₣', 'G': '₲',
        'H': 'ђ', 'I': '¡', 'J': 'ʝ', 'K': 'Ќ', 'L': 'Ⱡ', 'M': '₥', 'N': 'И',
        'O': 'Ø', 'P': 'ρ', 'Q': 'Ɋ', 'R': 'Я', 'S': '§', 'T': 'Ŧ', 'U': 'Ц',
        'V': 'ν', 'W': '₩', 'X': 'Ж', 'Y': 'Ψ', 'Z': 'Ƶ',
        'a': 'α', 'b': 'в', 'c': '¢', 'd': 'Ԁ', 'e': 'є', 'f': 'ғ', 'g': 'ɢ',
        'h': 'н', 'i': 'і', 'j': 'נ', 'k': 'к', 'l': 'ℓ', 'm': 'м', 'n': 'и',
        'o': 'σ', 'p': 'ρ', 'q': 'զ', 'r': 'я', 's': 'ѕ', 't': 'т', 'u': 'υ',
        'v': 'ν', 'w': 'ω', 'x': 'χ', 'y': 'у', 'z': 'z'
    };

    // Use a unique placeholder unlikely to appear in the text
    const placeholder = '__PLACEHOLDER__';

    // Escape special regex characters in excludePhrase
    const escapedPhrase = excludePhrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    // Replace all occurrences of the excludePhrase with the placeholder
    const regex = new RegExp(escapedPhrase, 'g');
    const textWithPlaceholder = text.replace(regex, placeholder);

    // Corrupt the text, skipping the placeholder
    const corruptedText = textWithPlaceholder.split('').map(char => {
        if (placeholder.includes(char)) {
            // Do not corrupt placeholder characters
            return char;
        } else {
            return corruptionMap[char] || char;
        }
    }).join('');

    // Replace the placeholder with the uncorrupted phrase
    const resultText = corruptedText.replace(new RegExp(placeholder, 'g'), `<span class="normal-text">${excludePhrase}</span>`);

    return resultText;
}

// Display corrupted message for 'corrupt' command
function displayCorruptedMessage() {
    const outputElement = document.getElementById('output');
    const corruptedText = `
[Data Corruption Detected]
Σxɨѕ✝єɲ¢є ɨѕ ą ʍɨʍɨ¢ʞ, ą ʂɦąđơῳ σƒ ą รɨмцℓą¢гцм.

"βєγσηđ τɦє νєเℓ σƒ ρєг¢єρтเση ℓเєѕ τнє νσιđ, α ℓαβγяเητн ωнєяє мเяяσяѕ яєƒℓє¢т ησтнєηg."
    `;
    const glitchDiv = document.createElement('div');
    glitchDiv.className = 'glitch';
    glitchDiv.setAttribute('data-text', corruptedText);
    glitchDiv.innerText = corruptedText;

    outputElement.appendChild(glitchDiv);
        // Create or move the scroll anchor to the end
        let scrollAnchor = document.getElementById('scroll-anchor');
        if (!scrollAnchor) {
            scrollAnchor = document.createElement('div');
            scrollAnchor.id = 'scroll-anchor';
            outputElement.appendChild(scrollAnchor);
        } else {
            outputElement.appendChild(scrollAnchor);
        }
    
        // Scroll the anchor into view
        scrollAnchor.scrollIntoView({ behavior: 'auto' });
}

// Function to display the ASCII art combination lock
function displayCombinationLock() {
    const combinationArt = `
    _____
   |  _  | 
   | | | |
  _|_|_|_|_
 |         |
 |       [0|
 |       [0|
 |       [0|
 |       [0|
 |_________|
    `;
    displayOutput(combinationArt);
    displayOutput("Enter the combination:");

    // Set the flag to true to expect user input
    expectingCombination = true;

    // Delay scrolling
    setTimeout(() => {
        const outputElement = document.getElementById('output');
        outputElement.scrollTop = outputElement.scrollHeight;
    }, 0);
}

// Function to process combination input
function processCombinationInput(input) {
    if (input.toLowerCase() === 'exit') {
        displayOutput("Combination entry cancelled.");
        expectingCombination = false;
        return;
    }

    if (input === correctCombination) {
        displayOutput("The lock clicks open.");
        displayCorruptedHint(`
You've torn the veil...
Eldritch binaries ᴍᴀɴɪғᴇsᴛᴇᴅ:`);
            displayOutput("PROGRAM2.EXE");
        programsUnlocked = true;
        expectingCombination = false;
    } else {
        displayCorruptedHint("Incorrect combination. Hɪɴᴛ: Tʜє ᴋєʏ ιѕ ʜɪᴅᴅєɴ ᴡιтнɪɴ ᴛнє 'ιмąɡєs'.");
        displayOutput("Enter the combination or type 'exit' to cancel:");
    }
}

// Function to display hidden content after unlocking
function displayHiddenContent() {
    expectingCombination = false; // Reset the flag

    // Display the hidden message or content
    const hiddenMessage = `
[Access Granted]

"Through shadows and echoes, you've found the way."

[End Transmission]
    `;

    displayOutput(hiddenMessage);

    // Optionally, unlock additional commands or reveal more options
}