// utils.js

// Function to display output to the terminal
function displayOutput(text, isHTML = false, isASCIIArt = false) {
    const outputElement = document.getElementById('output');

    // Handle ASCII art separately as before
    if (isASCIIArt) {
        const preElement = document.createElement('pre');
        preElement.className = 'ascii-art output-line'; 
        preElement.textContent = text;
        outputElement.appendChild(preElement);
    } else {
        const outputLine = document.createElement('div');
        outputLine.className = 'output-line'; 

        if (isHTML) {
            outputLine.innerHTML = text;
        } else {
            outputLine.textContent = text;
        }

        outputElement.appendChild(outputLine);
    }

    // Scroll to bottom
    scrollToBottom();

    // Refocus the input field
    const inputField = document.getElementById('command-input');
    inputField.focus();
}

// Function to scroll the output to the bottom
function scrollToBottom() {
    const outputElement = document.getElementById('output');

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