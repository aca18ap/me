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
     console.log(hi)
     var w = data[hi]

 }
 setInterval(setTime, 1000)

 /************************************************* */

 var hello = {
     "af": { "language": "Afrikaans", "hello": "hallo" },
     "am": { "language": "Amharic", "hello": "ሰላም" },
     "ar": { "language": "Arabic", "hello": "مرحبا" },
     "az": { "language": "Azerbaijani", "hello": "Salam" },
     "be": { "language": "Belarusian", "hello": "добры дзень" },
     "bg": { "language": "Bulgarian", "hello": "Здравейте" },
     "bn": { "language": "Bengali", "hello": "হ্যালো" },
     "bs": { "language": "Bosnian", "hello": "zdravo" },
     "ca": { "language": "Catalan", "hello": "Hola" },
     "co": { "language": "Corsican", "hello": "Bonghjornu" },
     "cs": { "language": "Czech", "hello": "Ahoj" },
     "cy": { "language": "Welsh", "hello": "Helo" },
     "da": { "language": "Danish", "hello": "Hej" },
     "de": { "language": "German", "hello": "Hallo" },
     "el": { "language": "Greek", "hello": "Γεια σας" },
     "en": { "language": "English", "hello": "Hello" },
     "eo": { "language": "Esperanto", "hello": "Saluton" },
     "es": { "language": "Spanish", "hello": "Hola" },
     "et": { "language": "Estonian", "hello": "Tere" },
     "eu": { "language": "Basque", "hello": "Kaixo" },
     "fa": { "language": "Persian", "hello": "سلام" },
     "fi": { "language": "Finnish", "hello": "Hei" },
     "fr": { "language": "French", "hello": "Bonjour" },
     "ga": { "language": "Irish", "hello": "Dia duit" },
     "gl": { "language": "Galician", "hello": "Ola" },
     "gu": { "language": "Gujarati", "hello": "હેલો" },
     "ha": { "language": "Hausa", "hello": "Sannu" },
     "he": { "language": "Hebrew", "hello": "שלום" },
     "hi": { "language": "Hindi", "hello": "नमस्ते" },
     "hr": { "language": "Croatian", "hello": "zdravo" },
     "hu": { "language": "Hungarian", "hello": "Helló" },
     "hy": { "language": "Armenian", "hello": "Բարեւ" },
     "id": { "language": "Indonesian", "hello": "Halo" },
     "ig": { "language": "Igbo", "hello": "Ndewo" },
     "is": { "language": "Icelandic", "hello": "Halló" },
     "it": { "language": "Italian", "hello": "Ciao" },
     "ja": { "language": "Japanese", "hello": "こんにちは" },
     "jv": { "language": "Javanese", "hello": "Hello" },
     "ka": { "language": "Georgian", "hello": "გამარჯობა" },
     "kk": { "language": "Kazakh", "hello": "Сәлем" },
     "kn": { "language": "Kannada", "hello": "ಹಲೋ" },
     "ko": { "language": "Korean", "hello": "안녕하세요." },
     "ky": { "language": "Kyrgyz", "hello": "салам" },
     "la": { "language": "Latin", "hello": "salve" },
     "lb": { "language": "Luxembourgish", "hello": "Moien" },
     "lt": { "language": "Lithuanian", "hello": "Sveiki" },
     "lv": { "language": "Latvian", "hello": "Labdien!" },
     "mg": { "language": "Malagasy", "hello": "Hello" },
     "mi": { "language": "Maori", "hello": "Hiha" },
     "mk": { "language": "Macedonian", "hello": "Здраво" },
     "ml": { "language": "Malayalam", "hello": "ഹലോ" },
     "mn": { "language": "Mongolian", "hello": "Сайн байна уу" },
     "mr": { "language": "Marathi", "hello": "हॅलो" },
     "ms": { "language": "Malay", "hello": "Hello" },
     "mt": { "language": "Maltese", "hello": "Hello" },
     "ne": { "language": "Nepali", "hello": "नमस्ते" },
     "nl": { "language": "Dutch", "hello": "Hallo" },
     "no": { "language": "Norwegian", "hello": "Hallo" },
     "ny": { "language": "Chichewa", "hello": "Moni" },
     "pl": { "language": "Polish", "hello": "Cześć" },
     "ps": { "language": "Pashto", "hello": "سلام" },
     "pt": { "language": "Portuguese", "hello": "Olá" },
     "ro": { "language": "Romanian", "hello": "Alo" },
     "ru": { "language": "Russian", "hello": "привет" },
     "sd": { "language": "Sindhi", "hello": "هيلو" },
     "sk": { "language": "Slovak", "hello": "ahoj" },
     "sl": { "language": "Slovenian", "hello": "Pozdravljeni" },
     "sm": { "language": "Samoan", "hello": "Talofa" },
     "sn": { "language": "Shona", "hello": "Hello" },
     "sq": { "language": "Albanian", "hello": "Përshëndetje" },
     "sr": { "language": "Serbian", "hello": "Здраво" },
     "su": { "language": "Sundanese", "hello": "halo" },
     "sv": { "language": "Swedish", "hello": "Hallå" },
     "sw": { "language": "Swahili", "hello": "Sawa" },
     "ta": { "language": "Tamil", "hello": "ஹலோ" },
     "te": { "language": "Telugu", "hello": "హలో" },
     "tg": { "language": "Tajik", "hello": "Салом" },
     "th": { "language": "Thai", "hello": "สวัสดี" },
     "tr": { "language": "Turkish", "hello": "Merhaba" },
     "ur": { "language": "Urdu", "hello": "ہیلو" },
     "uz": { "language": "Uzbek", "hello": "Salom" },
     "vi": { "language": "Vietnamese", "hello": "Xin chào" },
     "xh": { "language": "Xhosa", "hello": "Sawubona" },
     "yi": { "language": "Yiddish", "hello": "העלא" },
     "yo": { "language": "Yoruba", "hello": "Kaabo" },
     "zh": { "language": "Chinese", "hello": "您好" },
     "zu": { "language": "Zulu", "hello": "Sawubona" }
 }

 helloGet(hello)