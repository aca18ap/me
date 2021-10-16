window.onload = function() {
    let today = new Date();
    let time = today.getHours();
    let greeting;
<<<<<<< HEAD
    console.log(time)
=======
>>>>>>> 5295fbd8be9d1cb4359b818a9c960b08116b5535
    if (time > 4 && time < 12) {
        greeting = 'Good Morning Human!'
    } else if (time > 12 && time < 19) {
        greeting = "Good Afternoon Human!"
    } else if (time > 19 || time < 4) {
        greeting = "Good Evening Human!"
    }
    document.getElementById('greeting').innerHTML = greeting
}
