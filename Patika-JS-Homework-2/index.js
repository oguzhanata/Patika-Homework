// HTML SAYAFSINDAKİ ELEMENTLERİN SEÇİLMESİ
const ulDom = document.querySelector("#list");
const input = document.querySelector("#task");
const ekleBtn = document.querySelector("#liveToastBtn");
const closeBtn = document.querySelector("#removeItemBtn");


/* LocalStorage da daha önce kayıtlı liste varsa onu alıyor yoksa boş
liste oluşturuyor */
let list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];


/* LocalStorage den gelen elemanları li ler halinde listeye ekliyor */
list.forEach((element) => {
    let itemElementli = document.createElement("li")
    itemElementli.classList.add("list-item")
    itemElementli.addEventListener("click", missionCompleted)
    itemElementli.innerHTML = `${element}<span onclick = "removeItemFromList(event)" class="close">&times;</span> `
    ulDom.append(itemElementli)
});


/* Listeye Eleman Ekliyor */
function addItemToList(item) {
    let task = item
    let itemElementli = document.createElement("li")
    itemElementli.classList.add("list-item")
    itemElementli.addEventListener("click", missionCompleted)
    itemElementli.innerHTML = `${task} <span onclick="removeItemFromList(event)" id="removeItemBtn" class="close">&times;</span>`
    ulDom.append(itemElementli)
    list.push(task)
    saveToLocalStorage(list)
    showToast("Başarılı Bir Şekilde Eklendi.")
    input.value = ""
}


/* Listeden Eleman Siliyor */
function removeItemFromList(e) {
    list = list.filter((x) => x !== e.target.previousSibling.textContent)
    e.target.parentElement.remove()
    saveToLocalStorage(list)
    showToast("Başarılı Bir Şekilde Silindi.")
}


/* Girilen elemanın dolu mu boş mu veya daha önce eklenip eklenmediğini kontrol ediyor her şey okeyse liste ekleme foksiyonuna atama yapıyor */
function newElement(e) {
    if(input.value == "") {
        showToast("Boş Değer Giremezsiniz.")
    }
    else if(isItemsSame(input.value)) {
        showToast("Aynı Değerleri Giremezsiniz.")
    }
    else {
        addItemToList(input.value)
    }
}


/* Tamamlanmış olan elemana checked classını tanımlıyor */
function missionCompleted(event) {
    event.target.classList.toggle("checked")
    console.log(event.target.classList)
}


/* Toastları ve mesajları gösteriyor */
function showToast(message) {
    let option = {
        animation: true,
        delay: 3000
    }

document.querySelector(".toast-body").innerHTML = message;
const toast = document.querySelector("#liveToast")
const toastElement = new bootstrap.Toast(toast, option);
toastElement.show()
}


/* Elemanın daha önce eklenip eklenmediğini kontrol ediyor */
function isItemsSame(item) {
    let ok = list.filter((x) => x==item )
    if( ok.length == 0) {
        return 0;
    }
    else {
        return 1;
    }
}


/* verilen listeyi local storage a ekliyor */
function saveToLocalStorage(list) {
    localStorage.setItem("list", JSON.stringify(list))
}