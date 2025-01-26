const CONTENT = `

Technology has been a passion of mine since I was a child, since my first console I was fascinated by technology.

I spent years changing phone firmwares, installing custom ROMs and reading XDA threads.
In my last two years of high I took Computer Science at A level and I absolutely loved it, I had found what I to do at University.

I attended the University of Sheffield for four years, where I have completed a MEng in Software Engineering, archieving a First Class Honours degree.

I now work as a Software Engineer at Fathom3, a branch of the A-Safe gorup, where I work on a variety of projects involving IoT devices. 
My main areas of expertise are Node.js with React, but lately I've been doing lots of iOS development with Swift and UIKit!

Call me crazy but my favourite language is Javascript, I love the flexibility and the fact that it is the language of the web. 
I love being able to create something and see it come to life in the browser under my very eyes.

Check out some of my projects below!

`


async function software() {
    await executeCommand('sh software.sh', CONTENT, true);
}

async function main() {
    await software();
    enableInput();
}

main()