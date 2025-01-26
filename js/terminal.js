const terminalBody = document.getElementById('terminalBody');
const WAIT = 1000;
let LOCATION = '~';

const SH = {
    introduction: () => { location.replace('/')},
    software: () => { location.replace('/software')},
    music: () => { location.replace('/music')},
    aviation: () => { location.replace('/aviation')},
    photos: () => { location.replace('/photos')},
    contact: () => { location.replace('/contact')}
}


const VALID_COMMANDS = [
    'ls', 'ls -l', 
    'sh introduction.sh', 'sh software.sh', 
    'sh music.sh', 'sh photos.sh',
    'sh aviation.sh', 'sh contact.sh',
    'help', 'clear'
];

const HELP_TEXT = `
Available commands:
    ls              List files
    ls -l          List files with details
    sh <file>      Execute shell script
    help           Show this help
    clear          Clear terminal
`;


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function writeTerminal(text) {
    return new Promise(resolve => {
        let i = 0;
        let interval = setInterval(() => {
            terminalBody.innerHTML += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, 30);
    });
}

function writeTerminalInstant(text) {
    terminalBody.innerHTML += text;
}

function clearTerminal() {
    terminalBody.innerHTML = '';
}

function writeTerminalInput(text) {
    return new Promise(resolve => {
        let i = 0;
        let interval = setInterval(() => {
            terminalInput.innerHTML += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, 50);
    });
}

function newline() {
    writeTerminalInstant('<br>');
}

async function getFileContent(filename) {
    try {
        const response = await fetch(`./assets/${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        return content;
    } catch (error) {
        console.error('Error loading file:', error);
        return 'Error loading introduction text.';
    }
}


function enableInput() {
    terminalHistory = terminalBody.innerHTML;
    updateCurrentLine();
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keydown', handleSpecialKeys);
}

function updateCurrentLine() {
    terminalBody.innerHTML = terminalHistory + 
        `<span class="terminal-prompt">alberto@pia:${LOCATION}$ </span>` + 
        currentInput;
}

async function handleKeyPress(e) {
    if (e.key === 'Enter') {
        // Prevent default to avoid double newlines
        e.preventDefault();
        return;
    }
    
    currentInput += e.key;
    updateCurrentLine();
}

async function handleSpecialKeys(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Add command to history
        terminalHistory += `<span class="terminal-prompt">alberto@pia:${LOCATION}$ </span>${currentInput}<br>`;
        const command = currentInput;
        currentInput = '';
        await executeUserCommand(command);
        updateCurrentLine();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        currentInput = currentInput.slice(0, -1);
        updateCurrentLine();
    }
}

async function executeUserCommand(command) {
    terminalBody.innerHTML += '<br>';
    if (!VALID_COMMANDS.includes(command)) {
        terminalHistory += (`Command not found: ${command}\nType 'help' for available commands.<br>`);
        return;
    }

    switch(command) {
        case 'ls':
            writeTerminalInstant('introduction.sh  software.sh  music.sh  photos.sh  aviation.sh  contact.sh<br>');
            break;
        case 'ls -l':
            writeTerminalInstant(`
-rw-r--r--  1 alberto  staff  introduction.sh
-rw-r--r--  1 alberto  staff  software.sh
-rw-r--r--  1 alberto  staff  music.sh
-rw-r--r--  1 alberto  staff  photos.sh
-rw-r--r--  1 alberto  staff  aviation.sh
-rw-r--r--  1 alberto  staff  contact.sh<br>`);
            break;
        case 'help':
            writeTerminalInstant(HELP_TEXT);
            break;
        case 'clear':
            clearTerminal();
            break;
        default:
            if (command.startsWith('sh ')) {
                const file = command.split(' ')[1];
                const contentKey = file.split('.')[0];
                if (CONTENT[contentKey]) {
                    await writeTerminal(CONTENT[contentKey] + '<br>');
                } else {
                    writeTerminalInstant(`Error: ${file} not found<br>`);
                }
            }
    }
}

/** ************************************************* */


async function executeCommand(command, output, typedOutput = false) {
    writeTerminalInstant(`<span class="terminal-prompt">alberto@pia:${LOCATION}$ </span>`)
    await wait(WAIT);
    await writeTerminal(command)
    writeTerminalInstant('<br>');
    
    await wait(WAIT);

    if (typedOutput) {
        await writeTerminal(output);
        writeTerminalInstant('<br>');
    } else {
        writeTerminalInstant(output)
        writeTerminalInstant('<br>');
    }
    
}
