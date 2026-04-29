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
// const termsCheckbox = document.getElementById("termsCheckbox");
// const acceptTerms = document.getElementById("acceptTerms");
const termsModal = document.getElementById("termsModal");
const openTerms = document.getElementById("openTerms");
const openTerms2 = document.getElementById("openTerms2");
const closeTerms = document.getElementById("closeTerms");

openTerms.addEventListener("click", function(){
    termsModal.style.display = "flex";
});
openTerms2.addEventListener("click", function(){
    termsModal.style.display = "flex";
});

closeTerms.addEventListener("click", function(){
    termsModal.style.display = "none";
});
// acceptTerms.addEventListener("click", function(){
//     termsCheckbox.checked = true;
//     bookingSubmit.disabled = false;
//     termsModal.style.display = "none";
// });

// termsCheckbox.addEventListener("change", function(){
//     if(!termsCheckbox.checked){
//         bookingSubmit.disabled = true;
//     }
// });

const faqBtn = document.getElementById("faqBtn");
const faqSection = document.getElementById("faqSection");
const closeFaq = document.getElementById("closeFaq");

faqBtn.addEventListener("click", function(e){
e.preventDefault();
faqSection.style.display = "flex";
document.body.style.overflow = "hidden";
});

faqSection.addEventListener("click", function(e){
if(e.target === faqSection){
faqSection.style.display = "none";
document.body.style.overflow = "auto";
}
});

closeFaq.addEventListener("click", function(){
faqSection.style.display = "none";
document.body.style.overflow = "auto";
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", ()=>{
        item.classList.toggle("active");
    });
});

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

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});

const openPrivacy = document.getElementById("openPrivacy");
const openPrivacy2 = document.getElementById("openPrivacy2");
const openPrivacy3 = document.getElementById("openPrivacy3")

if(openPrivacy){
openPrivacy.addEventListener("click", ()=>{
privacySection.style.display = "flex";
});
}

if(openPrivacy2){
openPrivacy2.addEventListener("click", ()=>{
privacySection.style.display = "flex";
});
}

if(openPrivacy3){
openPrivacy3.addEventListener("click", ()=>{
privacySection.style.display = "flex";
});
}

function showSection(section, path) {
    section.style.display = "flex";
    document.body.style.overflow = "hidden";
    window.history.pushState({}, "", path);
}

function hidePolicies() {
    privacySection.style.display = "none";
    refundSection.style.display = "none";
    document.body.style.overflow = "auto";
    window.history.pushState({}, "", "/");
}

const openPrivacyPolicy = document.getElementById("openPrivacyPolicy");
const privacySection = document.getElementById("privacySection");

openPrivacyPolicy.addEventListener("click", function(e){
  e.preventDefault();
  privacySection.style.display = "flex";
  privacyMenu.style.display = "none";
  document.body.style.overflow = "hidden";
});

const openRefundPolicy = document.getElementById("openRefundPolicy");
const refundSection = document.getElementById("refundSection");
const closeRefund = document.getElementById("closeRefund");

openRefundPolicy.addEventListener("click", function(e){
  e.preventDefault();
  refundSection.style.display = "flex";
  privacyMenu.style.display = "none";
  document.body.style.overflow = "hidden";
});

refundSection.addEventListener("click", function(e){
  if(e.target === refundSection){
    refundSection.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

closeRefund.addEventListener("click", function(){
  refundSection.style.display = "none";
  document.body.style.overflow = "auto";
});

closePrivacy.addEventListener("click", function(){
  privacySection.style.display = "none";
  document.body.style.overflow = "auto";
});

document.getElementById("openRefundPolicy").addEventListener("click", function(e) {
    e.preventDefault();
    window.history.pushState({}, "", "/refundpolicy");
});

document.getElementById("openPrivacyPolicy").addEventListener("click", function(e) {
    e.preventDefault();
    window.history.pushState({}, "", "/privacypolicy");
});

closePrivacy?.addEventListener("click", hidePolicies);
closeRefund?.addEventListener("click", hidePolicies);
privacySection?.addEventListener("click", e => { if(e.target === privacySection) hidePolicies(); });
refundSection?.addEventListener("click", e => { if(e.target === refundSection) hidePolicies(); });

function handleRoute() {
    const path = window.location.pathname;
    if (path === "/privacypolicy") {
        showSection(privacySection, path);
    } else if (path === "/refundpolicy") {
        showSection(refundSection, path);
    } else {
        hidePolicies();
    }
}
handleRoute();
window.addEventListener("popstate", handleRoute);

