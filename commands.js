// Commands
const commands = {
    'help': function() {
        const helpText = `
    Available commands:
    - help           Displays this help text.

    - dir            Lists directories and files.
    - cd             Changes the current directory.
    - cls            Clears the screen.

    - run            Executes a program.
    - open           Opens a file.
    - floppy         Loads content from a floppy disk.
    - eject          Ejects the floppy disk.

    - date           Displays the current date and time.
    - echo           The void looks back.
    - corrupt        [CORRUPT ME...]

    Note:
    - Include the file extension (e.g., '.TXT') when specifying files or programs.
    - Use 'run' to execute programs (e.g., 'run PROGRAM1.EXE').
    - Use 'open' to open files (e.g., 'open NOTES.TXT').
    - Use 'cd' to change directories (e.g., 'cd ARCHIVE'). Use 'cd ..' to go back.
        `;
        displayOutput(helpText);
    },
// commands.js

    'dir': function() {
        const dirData = currentDirectory;
        let dirText = `Volume in drive ${dirData.volume} is ${dirData.volume}
    Directory of ${dirData.directory}

    `;

        dirData.files.forEach(file => {
            const isDir = file.attributes === 'DIR';
            const sizeStr = isDir ? '<DIR>'.padStart(10) : file.size.toLocaleString().padStart(10);
            const fileType = isDir ? 'DIR' : (file.type || 'FILE').toUpperCase();

            dirText += `${file.name.padEnd(15)} ${fileType.padEnd(12)} ${sizeStr}  ${file.date}\n`;
            // Removed the time column
        });

        let freeSpaceStr = '';
        if (dirData.freeSpace !== undefined) {
            freeSpaceStr = dirData.freeSpace <= 0
                ? `0 bytes free (Disk capacity exceeded!)`
                : `${dirData.freeSpace.toLocaleString()} bytes free`;
        }

        dirText += `\n${dirData.fileCount} File(s)   ${dirData.totalSize.toLocaleString()} bytes\n${freeSpaceStr}`;
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

        // Find the file in the current directory
        const file = currentDirectory.files.find(f => f.name.toUpperCase() === fileNameInput && f.attributes !== 'DIR');

        if (file) {
            // File type handling
            const fileType = file.type.toUpperCase();

            // If the file is an application, remind the user to use 'run' instead
            if (['APPLICATION', 'EXECUTABLE', 'COM', 'EXE'].includes(fileType)) {
                displayOutput(`To execute a program, use the 'run' command. Example: run ${file.name}`);
                return;
            }

            if (fileType === 'IMAGE') {
                displayImage(file.name);
            } else if (fileType === 'AUDIO') {
                displayOutput("Opening " + file.name + "...");
                // Handle audio file (implement your logic)
            } else if (['TEXT', 'DATA', 'SYSTEM', 'DOCUMENT', 'BINARY'].includes(fileType)) {
                // Treat these types as text files for the purpose of display
                displayTextFile(file.name);
            } else {
                displayOutput(`Cannot open ${fileNameInput}: Unsupported file type.`);
            }
        } else {
            displayOutput(`Error: File '${fileNameInput}' not found in the current directory. Use 'dir' to list files.`);
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


    // 'cd' command to the commands object
    'cd': function(args) {
    if (args.length === 0) {
        displayOutput("Error: No directory specified. Usage: cd [directory name]. Example: cd ARCHIVE");
        return;
    }

    let dirNameInput = args.join(' ').toUpperCase();

    if (dirNameInput === '..') {
        // handle moving to parent directory
        if (currentDirectory.parentDirectory) {
            currentDirectory = currentDirectory.parentDirectory;
            updatePrompt();
            commands['dir']();
        } else {
            displayOutput("You are already at the root directory.");
        }
        return;
    }

    // Find the directory in currentDirectory.files (Take note of case sensitivity)
    const dirEntry = currentDirectory.files.find(f => f.attributes === 'DIR' && f.name.toUpperCase() === dirNameInput);

    if (dirEntry) {
        // Check if subdirectory data exists
        const subDirName = dirEntry.name; // Original name from dirEntry, possibly in mixed case
        const subDirKey = Object.keys(currentDirectory.subdirectories).find(key => key.toUpperCase() === subDirName.toUpperCase());

        if (subDirKey) {
            // Set parent directory reference
            currentDirectory.subdirectories[subDirKey].parentDirectory = currentDirectory;

            // Move to the new directory
            currentDirectory = currentDirectory.subdirectories[subDirKey];
            updatePrompt();
            commands['dir']();
        } else {
            displayOutput(`Error: Directory data for '${dirNameInput}' not found.`);
        }
    } else {
        displayOutput(`Error: Directory '${dirNameInput}' not found. Use 'dir' to list directories.`);
    }
    },
    //Displays current directory
    'pwd': function() {
        displayOutput(currentDirectory.directory);
    },
};