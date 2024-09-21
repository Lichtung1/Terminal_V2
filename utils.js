// utils.js
// Function to display output to the terminal
function displayOutput(text, isHTML = false, isASCIIArt = false) {
    const outputElement = document.getElementById('output');

    if (isASCIIArt) {
        // Create a pre element for ASCII art
        const preElement = document.createElement('pre');
        preElement.className = 'ascii-art';
        preElement.textContent = text;
        outputElement.appendChild(preElement);
    } else {
        const outputLine = document.createElement('div');

        if (isHTML) {
            outputLine.innerHTML = text;
        } else {
            outputLine.textContent = text;
        }

        outputElement.appendChild(outputLine);
    }

    scrollToBottom();
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