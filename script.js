window.addEventListener('scroll', reveal);
function reveal(){
let reveals = document.querySelectorAll('.reveal');
for(let i=0;i<reveals.length;i++){
let windowHeight = window.innerHeight;
let revealTop = reveals[i].getBoundingClientRect().top;
let revealPoint = 100;
if(revealTop < windowHeight - revealPoint){
reveals[i].classList.add('active');
}
}
}

window.addEventListener("scroll", function(){
const navbar = document.querySelector("header");
if(window.scrollY > 50){
navbar.style.padding = "6px 24px";
navbar.style.width = "75%";
}else{
navbar.style.padding = "10px 28px";
navbar.style.width = "82%";
}
});

async function getStateFromZip(zipInputId, stateInputId){
const zip = document.getElementById(zipInputId).value;
if(zip.length === 5){
try{
const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
if(!response.ok) throw new Error("Invalid ZIP");
const data = await response.json();
const state = data.places[0]['state abbreviation'];
document.getElementById(stateInputId).value = state;
}
catch(error){
document.getElementById(stateInputId).value = "Invalid ZIP";
}
}
}

document.getElementById("pickupZip")
.addEventListener("blur", function(){
getStateFromZip("pickupZip","pickupState");
});

document.getElementById("dropZip")
.addEventListener("blur", function(){
getStateFromZip("dropZip","dropState");
});

const bookBtn = document.getElementById("bookNowBtn");
const bookingSection = document.getElementById("bookingSection");

bookBtn.addEventListener("click", function(e){
    e.preventDefault();
    bookingSection.style.display = "flex";
    document.body.style.overflow = "hidden";
});

bookingSection.addEventListener("click", function(e){
    if(e.target === bookingSection){
        bookingSection.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

const closeBooking = document.getElementById("closeBooking");
closeBooking.addEventListener("click", function(){
    bookingSection.style.display = "none";
    document.body.style.overflow = "auto";
});

const bookingSubmit = document.getElementById("bookingSubmit");
const termsCheckbox = document.getElementById("termsCheckbox");
const acceptTerms = document.getElementById("acceptTerms");
const termsModal = document.getElementById("termsModal");
const openTerms = document.getElementById("openTerms");
const closeTerms = document.getElementById("closeTerms");
openTerms.addEventListener("click", function(){
    termsModal.style.display = "flex";
});
closeTerms.addEventListener("click", function(){
    termsModal.style.display = "none";
});
acceptTerms.addEventListener("click", function(){
    termsCheckbox.checked = true;
    bookingSubmit.disabled = false;
    termsModal.style.display = "none";
});

termsCheckbox.addEventListener("change", function(){
    if(!termsCheckbox.checked){
        bookingSubmit.disabled = true;
    }
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});