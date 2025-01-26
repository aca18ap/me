const CONTENT = `Hello! I'm Alberto Pia, welcome to my personal website!
I'm a software engineer with a passion for aviation, music, and photography, among other things.
I hope to share some of my interests with you through this website! Thank you for visiting!
Type in help to see the available commands.
`

async function introduction() {
    await executeCommand('ls', 'portfolio');
    await executeCommand('cd portfolio | ls', `
        introduction.sh                 software.sh
        music.sh                        photos.sh    
        aviation.sh                     contact.sh
    `);
    await executeCommand('sh introduction.sh', CONTENT, true);
}
    

async function main() {
    await introduction();
    enableInput();
}

main();