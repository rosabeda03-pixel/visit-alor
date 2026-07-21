// ======================================
// VISIT ALOR
// JavaScript
// ======================================

// Pesan Selamat Datang
window.addEventListener("load", function () {
    setTimeout(() => {
        alert("🌴 Selamat Datang di Website Pariwisata Kabupaten Alor!");
    }, 500);
});

// ===============================
// Efek Scroll Navbar
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});

// ===============================
// Tombol Back To Top
// ===============================

const btnTop = document.createElement("button");

btnTop.innerHTML = "⬆";

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#0d6efd";
btnTop.style.color = "white";
btnTop.style.fontSize = "20px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Efek Hover Card
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0px)";

});

});

// ===============================
// Jam Digital
// ===============================

function tampilJam(){

const waktu=new Date();

let jam=waktu.getHours();

let menit=waktu.getMinutes();

let detik=waktu.getSeconds();

if(jam<10) jam="0"+jam;

if(menit<10) menit="0"+menit;

if(detik<10) detik="0"+detik;

const teks=jam+":"+menit+":"+detik;

const jamBox=document.getElementById("jam");

if(jamBox){

jamBox.innerHTML=teks;

}

}

setInterval(tampilJam,1000);

// ===============================
// Salam Otomatis
// ===============================

function salam(){

const h=new Date().getHours();

let s="";

if(h<11){

s="🌞 Selamat Pagi";

}

else if(h<15){

s="☀ Selamat Siang";

}

else if(h<18){

s="🌅 Selamat Sore";

}

else{

s="🌙 Selamat Malam";

}

const box=document.getElementById("salam");

if(box){

box.innerHTML=s;

}

}

salam();

// ===============================
// Form Kontak
// ===============================

function kirimPesan(){

const nama=document.getElementById("nama").value;

const email=document.getElementById("email").value;

const pesan=document.getElementById("pesan").value;

if(nama==="" || email==="" || pesan===""){

alert("Semua data harus diisi.");

return false;

}

alert("Terima kasih "+nama+"! Pesan Anda berhasil dikirim.");

return true;

}