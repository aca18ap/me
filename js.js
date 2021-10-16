window.onload = function() {
    let today = new Date();
    let time = today.getHours();
    let greeting;
    print(time)
    if (time > 4 && time < 12) {
        greeting = 'Good Morning Human!'
    } else if (time > 12 && time < 19) {
        greeting = "Good Afternoon Human!"
    } else if (time > 19 || time < 4) {
        greeting = "Good Evening Human!"
    }
    document.getElementById('greeting').innerHTML = greeting
}