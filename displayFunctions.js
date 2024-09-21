// Function to display text file content (assuming text files are also in data folder)
async function displayTextFile(fileName) {
    try {
        const possibleFileNames = [
            `data/${fileName}`,
            `data/${fileName}.txt`,
            `data/${fileName.toUpperCase()}`,
            `data/${fileName.toUpperCase()}.txt`,
            `data/${fileName.toLowerCase()}`,
            `data/${fileName.toLowerCase()}.txt`
        ];

        let response;
        let found = false;

        // Try each possible file name
        for (let i = 0; i < possibleFileNames.length; i++) {
            try {
                response = await fetch(possibleFileNames[i]);
                if (response.ok) {
                    found = true;
                    break;
                }
            } catch (err) {
                continue; // If fetch throws an error, try the next one
            }
        }

        if (!found) {
            throw new Error('Failed to load file.');
        }

        const textContent = await response.text();
        displayOutput(textContent);
    } catch (error) {
        displayCorruptedHint(`Error: ${error.message}`);
    }
}

// Function to display images (as before)
function displayImage(fileName) {
    const outputElement = document.getElementById('output');

    // Normalize file name to uppercase for consistent comparison
    const upperFileName = fileName.toUpperCase();

    // Map of expected image file names to their actual paths
    const imageMap = {
        'IMAGE1_RESULT.JPG': 'data/photo1_result.jpg',
        'IMAGE2_RESULT.JPG': 'data/photo2_result.jpg',
        'IMAGE3_RESULT.JPG': 'data/photo3_result.jpg',
        'IMAGE4_RESULT.JPG': 'data/photo4_result.jpg',        
        'IMAGE1.JPG': 'data/photo1.jpg',
        'IMAGE2.JPG': 'data/photo2.jpg',
        'IMAGE3.JPG': 'data/photo3.jpg',
        'IMAGE4.JPG': 'data/photo4.jpg'
    };

    const imageSrc = imageMap[upperFileName];

    if (imageSrc) {
        // Create image element
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = fileName;
        img.className = 'displayed-image';

        // Append image to output
        outputElement.appendChild(img);

        // Wait for the image to load before scrolling
        img.onload = () => {
            // Scroll to bottom
            scrollToBottom();
        };
    } else {
        displayOutput(`Cannot display ${fileName}: File not found.`);
    }
}