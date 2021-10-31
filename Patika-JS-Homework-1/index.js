let userName = prompt("Lütfen isminizi giriniz:")

let fname = document.querySelector(".name");
fname.innerHTML = `${userName}!`;

if(userName == "") {
    alert("İsminizi yazmadınız.")
}


function currentTime() {
    const date = new Date();
    let [ hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()]
    let dayName = "";
    switch(day) {
        case 1:
            dayName = "Pazartesi"
            break;
        case 2:
            dayName = "Sali"
            break;
        case 3:
            dayName = "Carsamba"
            break;
        case 4:
            dayName = "Persembe"
            break;
        case 5:
            dayName = "Cuma"
            break;
        case 6:
            dayName = "Cumartesi"
            break;
        case 0:
            dayName = "Pazar"
            break;
    }

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    const timer = `${hour} : ${minute} : ${second} - ${dayName}` // timer değişkenine zaman bilgilerini atadık.
    document.querySelector("#currentDate").innerHTML = timer // timer değişkenini currentDate id'sine sahip html etiketinin içerisine yazdırdık.

    setTimeout(currentTime,1000)  // bir işlemin-fonksiyonun belli bir süre sonunda çalışmasını sağlar.
    //setTimeout(fonksiyon,süre)
}

currentTime();