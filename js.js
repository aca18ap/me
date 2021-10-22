 function greeting() {
     let today = new Date();
     let time = today.getHours();
     let greeting;
     console.log(time)
     if (time > 4 && time < 12) {
         greeting = 'Good Morning Human!'
     } else if (time > 12 && time < 19) {
         greeting = "Good Afternoon Human!"
     } else if (time > 19 || time < 4) {
         greeting = "Good Evening Human!"
     }
     document.getElementById('greeting').innerHTML = greeting
 }

 function setTime() {
     let today = new Date()
     let hrs = today.getHours()
     let min = today.getMinutes()
     let sec = today.getSeconds()
     let time = (hrs + ':' + min + ":" + sec)
     $("p#time").text(time)
 }

 function btc() {
     $.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(res) {
         var json = JSON.parse(res)
         price = (json.bpi.USD.rate)
         $('p#bitcoin').text('BTC/USD: ' + (price))
     })
 }

 function quote() {
     $.get('https://type.fit/api/quotes', function(res) {
         var data = JSON.parse(res)
         var item = data[Math.floor(Math.random() * data.length)];
         $("h2#quote").text('"' + item.text + '"')
         $("p#quote").text(item.author)

     })
 }

 function helloGet(data) {
     var hi = data[Math.floor(Math.random() * data.length)]
     return (hi.hello)

 }

 function helloCarousel() {
     let hi = helloGet(hello)
     $("#greeting").fadeOut(1000)
     setTimeout(() => {
         $("#greeting").text(hi)

     }, 1000)
     $("#greeting").fadeIn(1000)

 }

 function fortuneGet() {
     $.get(('http://yerkee.com/api/fortune'),
         function(res) {
             var data = JSON.parse(res)
             var item = data[Math.floor(Math.random() * data.length)];
             console.log(item)
         })
 }
 setInterval(setTime, 1000)
 setInterval(helloCarousel, 4000)

 /************************************************* */

 var hello = [
     { "language": "Afrikaans", "hello": "hallo" },
     { "language": "Amharic", "hello": "ሰላም" },
     { "language": "Arabic", "hello": "مرحبا" },
     { "language": "Azerbaijani", "hello": "Salam" },
     { "language": "Belarusian", "hello": "добры дзень" },
     { "language": "Bulgarian", "hello": "Здравейте" },
     { "language": "Bengali", "hello": "হ্যালো" },
     { "language": "Bosnian", "hello": "zdravo" },
     { "language": "Catalan", "hello": "Hola" },
     { "language": "Corsican", "hello": "Bonghjornu" },
     { "language": "Czech", "hello": "Ahoj" },
     { "language": "Welsh", "hello": "Helo" },
     { "language": "Danish", "hello": "Hej" },
     { "language": "German", "hello": "Hallo" },
     { "language": "Greek", "hello": "Γεια σας" },
     { "language": "English", "hello": "Hello" },
     { "language": "Esperanto", "hello": "Saluton" },
     { "language": "Spanish", "hello": "Hola" },
     { "language": "Estonian", "hello": "Tere" },
     { "language": "Basque", "hello": "Kaixo" },
     { "language": "Persian", "hello": "سلام" },
     { "language": "Finnish", "hello": "Hei" },
     { "language": "French", "hello": "Bonjour" },
     { "language": "Irish", "hello": "Dia duit" },
     { "language": "Galician", "hello": "Ola" },
     { "language": "Gujarati", "hello": "હેલો" },
     { "language": "Hausa", "hello": "Sannu" },
     { "language": "Hebrew", "hello": "שלום" },
     { "language": "Hindi", "hello": "नमस्ते" },
     { "language": "Croatian", "hello": "zdravo" },
     { "language": "Hungarian", "hello": "Helló" },
     { "language": "Armenian", "hello": "Բարեւ" },
     { "language": "Indonesian", "hello": "Halo" },
     { "language": "Igbo", "hello": "Ndewo" },
     { "language": "Icelandic", "hello": "Halló" },
     { "language": "Italian", "hello": "Ciao" },
     { "language": "Japanese", "hello": "こんにちは" },
     { "language": "Javanese", "hello": "Hello" },
     { "language": "Georgian", "hello": "გამარჯობა" },
     { "language": "Kazakh", "hello": "Сәлем" },
     { "language": "Kannada", "hello": "ಹಲೋ" },
     { "language": "Korean", "hello": "안녕하세요." },
     { "language": "Kyrgyz", "hello": "салам" },
     { "language": "Latin", "hello": "salve" },
     { "language": "Luxembourgish", "hello": "Moien" },
     { "language": "Lithuanian", "hello": "Sveiki" },
     { "language": "Latvian", "hello": "Labdien!" },
     { "language": "Malagasy", "hello": "Hello" },
     { "language": "Maori", "hello": "Hiha" },
     { "language": "Macedonian", "hello": "Здраво" },
     { "language": "Malayalam", "hello": "ഹലോ" },
     { "language": "Mongolian", "hello": "Сайн байна уу" },
     { "language": "Marathi", "hello": "हॅलो" },
     { "language": "Malay", "hello": "Hello" },
     { "language": "Maltese", "hello": "Hello" },
     { "language": "Nepali", "hello": "नमस्ते" },
     { "language": "Dutch", "hello": "Hallo" },
     { "language": "Norwegian", "hello": "Hallo" },
     { "language": "Chichewa", "hello": "Moni" },
     { "language": "Polish", "hello": "Cześć" },
     { "language": "Pashto", "hello": "سلام" },
     { "language": "Portuguese", "hello": "Olá" },
     { "language": "Romanian", "hello": "Alo" },
     { "language": "Russian", "hello": "привет" },
     { "language": "Sindhi", "hello": "هيلو" },
     { "language": "Slovak", "hello": "ahoj" },
     { "language": "Slovenian", "hello": "Pozdravljeni" },
     { "language": "Samoan", "hello": "Talofa" },
     { "language": "Shona", "hello": "Hello" },
     { "language": "Albanian", "hello": "Përshëndetje" },
     { "language": "Serbian", "hello": "Здраво" },
     { "language": "Sundanese", "hello": "halo" },
     { "language": "Swedish", "hello": "Hallå" },
     { "language": "Swahili", "hello": "Sawa" },
     { "language": "Tamil", "hello": "ஹலோ" },
     { "language": "Telugu", "hello": "హలో" },
     { "language": "Tajik", "hello": "Салом" },
     { "language": "Thai", "hello": "สวัสดี" },
     { "language": "Turkish", "hello": "Merhaba" },
     { "language": "Urdu", "hello": "ہیلو" },
     { "language": "Uzbek", "hello": "Salom" },
     { "language": "Vietnamese", "hello": "Xin chào" },
     { "language": "Xhosa", "hello": "Sawubona" },
     { "language": "Yiddish", "hello": "העלא" },
     { "language": "Yoruba", "hello": "Kaabo" },
     { "language": "Chinese", "hello": "您好" },
     { "language": "Zulu", "hello": "Sawubona" }
 ]

 helloGet(hello)