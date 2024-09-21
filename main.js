// main.js

// Global Variables
let currentDirectory; 
let previousDirectory = null;
let programsUnlocked = false;
let expectingCombination = false;
const correctCombination = '4815'; 

// Load the normal directory
async function loadNormalDirectory() {
    try {
        const response = await fetch('data/normalDirectory.json');
        if (!response.ok) {
            throw new Error('Failed to load directory data.');
        }
        const directoryData = await response.json();

        // Set the global currentDirectory variable
        currentDirectory = directoryData;
    } catch (error) {
        displayOutput(`Error loading directory: ${error.message}`);
    }
}

// Initialize the terminal
function initTerminal() {
    const inputField = document.getElementById('command-input');

    inputField.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const input = inputField.value;
            processInput(input);
            inputField.value = '';
        }
    });

    // Load the normal directory
    loadNormalDirectory().then(() => {
        // Start the boot sequence after the directory is loaded
        simulateBoot();
    });
}

// Process user input
function processInput(input) {
    const outputElement = document.getElementById('output');
    const fullInput = input.trim();

    // Echo the command
    outputElement.innerHTML += `${currentDirectory.directory}> ${fullInput}\n`;

    if (expectingCombination) {
        processCombinationInput(fullInput);
        return;
    }

    const inputParts = fullInput.split(' ');
    const lowerInput = fullInput.toLowerCase();

    // Check for matching commands starting from the full input
    for (let i = inputParts.length; i > 0; i--) {
        const commandAttempt = inputParts.slice(0, i).join(' ').toLowerCase();
        const args = inputParts.slice(i);

        if (commands.hasOwnProperty(commandAttempt)) {
            commands[commandAttempt](args);
            return;
        }
    }

    // Handle unrecognized commands
    if (lowerInput === 'exit') {
        displayOutput('Shutting down...');
    } else {
        displayOutput(`Error: Command '${fullInput}' not recognized. Type 'help' for a list of available commands.`);
    }
}

function updatePrompt() {
    const promptElement = document.getElementById('prompt');
    promptElement.textContent = `${currentDirectory.directory}> `;
}

// Run the terminal
window.onload = initTerminal;