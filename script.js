// ASCII Art (Adjusted for mobile display)
const asciiArt = `
                                            @                    @                                           
                                            @@                 @@                  @                         
                        @ @@                  =                 @                  @@                        
                   @@ @@@.@                 @ @      @@@         @                 @ @@ #@@                  
              @@   @@@@@# @@        @@      @ @     @@@ @      @ @       @         @ *@@@@   @@              
            @#   @@-@@@@@  @@@    @+@     @@  @    @@ @  @    @   @   @  @@     @+@  = @@ @@ @  @@           
          @  %@    @@@@@@  @.@   @  @     -@@ @@   @  @@  @   @  @ @ @   @ @    @ @.@ @@@@    @.  @ @        
       @@@  @  @#   @@@@@    @   @  @ @ @@@@@  @ @@   @@   @ @. @@@@@ @  @  @   @  @@@@@@    @  @@  @@@      
      @@ *@ @ @@:    :@@@. @ @@  @  @@ -@@@@  @@@*    @@ @  @@   @@@   .@@  @  @  @@@@@@     @@ . @@ @=      
     @  @@  @ @@ @     @@ @@ %@ @.   @@  @@@  @@@# @  @@ @@    @ +@@ @@ @@  :@ @  @@@@@  @ @#@@  @ @@  @     
    @ .@@   @ @ @@ .@.    @@ +@@@ @@  @@  @@  @@@ @@  @. @@    @ @@  @@@ #@  @ @- @@ #  @@ @@ @ @     @ @    
   @ @       #@@@  @@@  @@@  @@@  @@@. @@  @ @@@ @@@. @% @@@@  @  @  @@@@ @@- @@  @@   @@@  @@@#@      @ @   
  @.@         @ @: +@@ @@@@. @@  @@@@@@  @   @@    @  @@ @@  @@@  @@  @@@  @  .@  @@@  ..@  @ @@         @@  
 @@@            @   @@@@@@@   @@ @@@@@  @@@ @. @@@ @  @: @@.@@@@  @@@  @@ .@@     @@  @@@.  @ @            @ 
@            @@ @  @@@@@@@@. #@@.  @@ .@@@@ @  @@@@@  @@ @@@@#    @@@@   @@@@@@.  @  @@@@@  @ @@            @
            @ @@@  @@@@@@@@@ @@@@@ @ @@@@@@ @@  @  @  @+ @@  @  @ @@@@ @.@  @@@  @@ @@@@@@: @@  @            
          @@  -   .@@@@@@@@= @@@@@@ #@ @@@@  @  @  @  @@ @@  @ @@  @@@@.@@@  @@ @@ .@@@@@@@   -  @@          
         @%      @@@@@@@ @@  @@@@@@@*@ @@@@% @ .   @  @  @   @  @ -@@@.-@@@@    @  @ @@@@@@@       @         
          @   @% @@@@@@  @@ @@@@@@@@ @  @@@  @@ @  @  @@ @   @ @  @@@. @@%@@@@ @@  @   @@@@@  @   @@         
         @@  .@@@@@@@@@ @@@-+ @+@. @@@@ @@@@  @@@   @ @ @   @ @% @@@@@ @ @  % @#  @@@= @@@@@@@@@  #@         
         @   -@@@@@@@@.@@@@@@     %@  @..@@@= @@     @@@    @ @  @@@@ @   @     @@@@@@@@@@@@@@@@   @@        
         @   *@@@@@@@@@@@@@@@  @  @    @  @@@@ @@            @  @@@@ @@   @  @. @@@@@@@@@@@@@@@@   @@        
         @   @@@@@@@@@@@@@@   @@   @   @@. @% .@@@          @@  @@. :@   @-  @@   @@@@@@@@@@@@@@   @         
         @@   @@@@@@@@@@@@@   @@=  @     @.  -@               @  @ @@    @+  @@   @@@@@@@@@@@@@   %@         
          @     @@@@@@@@@@@@  @ @  @@     @ @                   @  @     @  +  =  @@@@@@@@@@@@   +@          
           @@    @@@@@@@@@@   @  @  @     *@                     @@@    @  @@  #  @@@@@@@@@@    @@           
             @@    @@@@@@@@  @@   @  @    @                         @  @  @    @   @@@@@@@    @@@            
              @@*    @@@@@.  @     @%  @                             @  :@     @*  @@@@@@    @@              
                 @@   @@@@  @@       @@@#=@@                     @@@+@@@        @  %@@@   @@@                
                   @@   @.  @@                                                  @  .@@  =@                   
                    @@   .  @                                                    @ @@  +@                    
                      @%    @                                                    @ @: @                      
                        @   @@                                                  @ @: @                       
                         @#  =@                                                @ @@@                         
                           @* @                                               @ @                            
                            @@.@                                              @@                             
`;

// Global Variables
let currentDirectory; // Initialize in the loadNormalDirectory function
let previousDirectory = null;
let programsUnlocked = false;
let expectingCombination = false;
const correctCombination = '4815'; // Replace!!!

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

// Boot-up messages
const bootMessages = [
    { text: "Starting MMOS version 6.6.6...", isHTML: false },
    { text: "Checking spectral integrity...", isHTML: false },
    { text: "Loading occult drivers...", isHTML: false },
    { text: "Initializing metaphysical hardware...", isHTML: false },
    { text: "Boot sequence complete.", isHTML: false },
    { text:"", isHTML: false },
    { text: asciiArt, isHTML: false, isASCIIArt: true }, // ASCII art included here
    { text: "Scream 'help' to see available commands.", isHTML: false },
    { text: "", isHTML: false }
];

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

// Commands
const commands = {
    'help': function() {
    const helpText = `
Available commands:
- help           Displays this help text.
- dir            Lists directories and files.
- cls            Clears the screen.
- run            Executes a program.
- open           Opens a file.
- date           Displays the current date and time.
- echo           The void looks back.
- corrupt        [C0RЯЦP┴ MΣ...]
- floppy          Loads content from a floppy disk.
- eject          Ejects the floppy disk.

Note:
- **Include the file extension** (e.g., '.TXT') when specifying files or programs.
- Example: run PROGRAM1.EXE
- Example: open NOTES.TXT
    `;
    displayOutput(helpText);
},
    'dir': function() {
    const dirData = currentDirectory;
    let dirText = `Volume in drive ${dirData.volume} is ${dirData.volume}
Directory of ${dirData.directory}

`;

    dirData.files.forEach(file => {
        const isDir = file.attributes === 'DIR';
        const sizeStr = isDir ? '<DIR>'.padStart(10) : file.size.toLocaleString().padStart(10);
        const fileType = isDir ? 'DIR' : (file.type || 'FILE').toUpperCase();

        dirText += `${file.name.padEnd(15)} ${fileType.padEnd(12)} ${sizeStr}  ${file.date}  ${file.time}\n`;
    });

    dirText += `\n${dirData.fileCount} File(s)   ${dirData.totalSize.toLocaleString()} bytes\n${dirData.freeSpace.toLocaleString()} bytes free`;
    displayOutput(dirText);
    },
    'cls': async function() {
        const outputElement = document.getElementById('output');

        // Display glitched clue
        const clue = `
            [Transmission Intercepted]
            Ƨєєҡ тнє ςσ∂є вєнιη∂ тнє νєιℓ...
        `;
        const glitchDiv = document.createElement('div');
        glitchDiv.className = 'glitch';
        glitchDiv.setAttribute('data-text', clue);
        glitchDiv.innerText = clue;

        outputElement.appendChild(glitchDiv);
        outputElement.scrollTop = outputElement.scrollHeight;

        // Wait for a short duration
        await new Promise(res => setTimeout(res, 2000)); // 2 seconds

        // Clear the screen
        outputElement.innerHTML = '';
    },
    'run': function(args) {
    if (args.length === 0) {
        displayOutput(`Error: No program specified. Usage: run [program name with extension]. Example: run PROGRAM1.EXE`);
        return;
    }

    let program = args.join(' ').toUpperCase();

    // Check if the program name includes an extension
    if (!program.includes('.')) {
        displayOutput(`Error: Include the program extension. Example: run PROGRAM1.EXE`);
        return;
    }

    // Special handling for PROGRAM1.EXE and PROGRAM2.EXE
    if (program === 'PROGRAM1.EXE') {
        window.open('https://lichtung1.github.io/MoyaMoya/', '_blank');
        displayCorruptedHint(`01001001 01101110 01110110 01101111 01101011 01101001 01101110 01100111 00100000 01110000 01110010 01101111 01100111 01110010 01100001 01101101 00110001 00101110 01100101 01111000 01100101 00101110 00101110 00101110
Iɴᴠᴏᴋɪɴɢ ᴛʜᴇ ғɪʀsᴛ ᴅɪɢɪᴛᴀʟ sɪɢɪʟ: ᴘʀᴏɢʀᴀᴍ1.ᴇxᴇ`);
        return;
    } else if (program === 'PROGRAM2.EXE') {
        if (!programsUnlocked) {
            displayCorruptedHint(`
A¢¢єѕѕ DєиιєԀ: Цɴᴋɴᴏᴡɴ ᴄᴏᴍᴍᴀɴᴅ. Ŧʜᴇ ѕʏѕᴛᴇᴍ ʜᴜɴɢᴇʀѕ ғᴏʀ ᴄᴏʀʀᴜᴘᴛɪᴏɴ...

₩ᴀʀɴɪɴɢ: Eʟᴅʀɪᴛᴄʜ ᴅᴇʙᴜɢ ᴍᴏᴅᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ. Ŧᴏ ɪɴᴠᴏᴋᴇ ᴛʜᴇ ᴄᴜʀѕᴇᴅ ᴘʀᴏᴛᴏᴄᴏʟ, ᴇɴᴛᴇʀ:
>debug
Цѕᴇ ᴀᴛ ʏᴏᴜʀ ᴏᴡɴ ʀɪѕᴋ. Ŧʜᴇ ᴠᴏɪᴅ ᴀᴡᴀɪᴛѕ...
`, '>debug');
            return;
        } else {
            // If unlocked, proceed to run PROGRAM2.EXE
            window.open('https://lichtung1.github.io/MoyaMoyaMaze/', '_blank');
            displayCorruptedHint(`01010011 01110101 01101101 01101101 01101111 01101110 01101001 01101110 01100111 00100000 01110000 01110010 01101111 01100111 01110010 01100001 01101101 00110010 00101110 01100101 01111000 01100101 00101110 00101110 00101110
Mᴀɴɪғᴇsᴛɪɴɢ ᴛʜᴇ sᴇᴄᴏɴᴅ ᴄʏʙᴇʀ ʀɪᴛᴜᴀʟ: ᴘʀᴏɢʀᴀᴍ2.ᴇxᴇ`);
            return;
        }
    }

    // Determine which directory to search (current directory)
    const dirData = currentDirectory;

    // Check if the program exists in the current directory
    const file = dirData.files.find(f => f.name.toUpperCase() === program);

    if (file) {
        const fileType = file.type.toUpperCase();

        // If the file is not an application, remind the user to use 'open' instead
        if (!['APPLICATION', 'EXECUTABLE', 'COM'].includes(fileType)) {
            displayOutput(`To open a file, use the 'open' command. Example: open ${file.name}`);
            return;
        }

        displayOutput(`Error: Unable to run '${program}'. Program not recognized.`);
    } else {
        displayOutput(`Error: Program '${program}' not found. Use 'dir' to list available programs. Example: run PROGRAM1.EXE`);
    }
    },
    'date': function() {
        // Always display a future date
        const futureDate = new Date('June 6, 2066 06:06:06');
        displayOutput(futureDate.toString());
    },
    'echo': function(args) {
        // Return a corrupted version of a random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        displayCorruptedHint(randomQuote);
    },
    'corrupt': function(args) {
        displayCorruptedMessage();
    },
    'debug': function(args) {
        displayCombinationLock();
    },
    'open': function(args) {
    if (args.length === 0) {
        displayOutput(`Error: No file specified. Usage: open [file name with extension]. Example: open NOTES.TXT`);
        return;
    }

    let fileNameInput = args.join(' ').toUpperCase();

    // Check if the filename includes an extension
    if (!fileNameInput.includes('.')) {
        displayOutput(`Error: Include the file extension. Example: open NOTES.TXT`);
        return;
    }

    // Determine which directory to search (current directory)
    const dirData = currentDirectory;

    // Find the file in the current directory
    const file = dirData.files.find(f => f.name.toUpperCase() === fileNameInput);

    if (file) {
        if (file.attributes === "DIR") {
            displayOutput(`Cannot open ${fileNameInput}: Is a directory.`);
        } else {
            // File type handling
            const fileType = file.type.toUpperCase();

            // If the file is an application, remind the user to use 'run' instead
            if (['APPLICATION', 'EXECUTABLE', 'COM'].includes(fileType)) {
                displayOutput(`To execute a program, use the 'run' command. Example: run ${file.name}`);
                return;
            }

            if (fileType === 'IMAGE') {
                displayImage(file.name);
            } else if (fileType === 'AUDIO') {
                displayOutput("Opening " + file.name + "...");
                window.open('https://moyamoyawinnipeg.bandcamp.com/album/demolition-2024', '_blank');
            } else if (['TEXT', 'DATA', 'SYSTEM', 'DOCUMENT', 'BINARY'].includes(fileType)) {
                // Treat these types as text files for the purpose of display
                displayTextFile(file.name);
            } else {
                displayOutput(`Cannot open ${fileNameInput}: Unsupported file type.`);
            }
        }
    } else {
        displayOutput(`Error: File '${fileNameInput}' not found. Use 'dir' to list files. Example: open NOTES.TXT`);
    }
    },
    'floppy': async function() {
        try {
            const response = await fetch('data/floppy.json');
            if (!response.ok) {
                throw new Error('Failed to load floppy data.');
            }
            const floppyData = await response.json();

            // Save the current directory
            previousDirectory = currentDirectory;

            // Update currentDirectory to the floppy directory
            currentDirectory = floppyData;

            displayOutput("Floppy disk loaded successfully.");

            // Inform the user how to exit the floppy drive
            displayOutput('Type "eject" to return to the previous directory.');

            commands['dir'](); // Automatically display the directory contents
        } catch (error) {
            displayCorruptedHint(`Error: ${error.message}`);
        }
    },
'eject': function() {
    if (previousDirectory) {
        currentDirectory = previousDirectory;
        previousDirectory = null; // Reset previousDirectory

        displayOutput("Floppy disk ejected successfully.");
        commands['dir'](); // Display the contents of the current directory
    } else {
        displayOutput("No floppy disk is currently loaded.");
    }
},
};

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

// Function to display images (as before)
function displayImage(fileName) {
    const outputElement = document.getElementById('output');
    const imageMap = {
        'IMAGE1.JPG': 'data/photo1.jpg',
        'IMAGE2.JPG': 'data/photo2.jpg',
        'IMAGE3.JPG': 'data/photo3.jpg',
        'IMAGE4.JPG': 'data/photo4.jpg'
    };

    const imageSrc = imageMap[fileName];

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
        };
    } else {
        displayOutput(`Cannot display ${fileName}: File not found.`);
    }
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

// In your simulateBoot function:
async function simulateBoot() {
    for (const message of bootMessages) {
        await new Promise(res => setTimeout(res, 500));
        displayOutput(message.text, message.isHTML, message.isASCIIArt);
    }
}

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

// Helper function to scroll to the bottom
function scrollToBottom() {
    const outputElement = document.getElementById('output');
    // Only scroll if content overflows
    if (outputElement.scrollHeight > outputElement.clientHeight) {
        outputElement.scrollTop = outputElement.scrollHeight;
    }
}

function displayOutput(text, isHTML = false, isASCIIArt = false) {
    const outputElement = document.getElementById('output');

    if (isASCIIArt) {
        // For ASCII art, create a pre element with the ascii-art class
        const preElement = document.createElement('pre');
        preElement.className = 'ascii-art';
        preElement.textContent = text; // Use textContent to avoid processing HTML
        outputElement.appendChild(preElement);
    } else {
        // Create a new div to hold the output line
        const outputLine = document.createElement('div');

        if (isHTML) {
            outputLine.innerHTML = text;
        } else {
            outputLine.textContent = text;
        }

        // Append the output line to the output element
        outputElement.appendChild(outputLine);
    }

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

// Run the terminal
window.onload = initTerminal;