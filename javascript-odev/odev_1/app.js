var fullName = prompt('Lütfen adinizi giriniz', 'lütfen sadece kelime giriniz');

document.getElementById('myClock').innerHTML = fullName;


function tarihSaat() {
    var currentdate = new Date().toLocaleString();

    document.getElementById('myClock').innerHTML = currentdate;
}

setInterval(tarihSaat, 1000);