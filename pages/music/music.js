const CONTENT = `I started being into music very early on in my life. At age 7 I started getting piano lessons in the local music school, 
            before attending the Conservatory of Cagliari until the age of 13.
            After moving to the Middle East I resumed my studies and by age 18 I had completed my ABRSM Grade 8 Piano and Grade 5 Theory.
            Once at University, I decided it was time for me to pivot away from classical music and start learning modern jazz piano. 
            After joining the University Blues Band, I became the band coordinator for the years 21-22 and 22-23. 
            I worked with an amazing group of musician, with which I still play around in various bands and open mic events around Sheffield
            Music continues to be a big part of my life, with currently two albums in the making with two different projects.
            You can also catch me playing with Mapping Street Collective, a big 12 piece cover band that brings songs everybody loves in venues around the city.
`
async function introduction() {
    await executeCommand('sh music.sh', CONTENT, true);
}
    

async function main() {
    await introduction();
    enableInput();
}

main();