const bannerHelper = document.querySelector(".banner-inner");
const bannerImg = document.querySelector(".banner-image");
const bannerH1 = bannerHelper.querySelector("h1");
const bannerParagh = bannerHelper.querySelector("p");
const bannerBtn = bannerHelper.querySelector(".btn");

const HeaderTL = gsap.timeline({
    scrollTrigger: {
        trigger: '.banner'
    }
})


HeaderTL
    .from(bannerImg, { y: -50, opacity: 0, duration: 0.5 })
    .from(bannerH1, { y: -20, opacity: 0, duration: 0.5 }, "-=0.35")
    .from(bannerParagh, { y: -20, opacity: 0, duration: 0.5 }, "-=0.35")
    .to(bannerBtn, { opacity: 1, duration: 0.2 }, "-=0.5")


const SectionServices = document.querySelector(".Section-Services");
const ServicesTitle = SectionServices.querySelector(".Section-Title-Container h1");
const ServicesUnderline = SectionServices.querySelector(".Section-Title-Container .underline");

const ServicesContentHelper = document.getElementById("ServicesContent");
const ServicesList = ServicesContentHelper.querySelectorAll(".card");

const ServicesTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".Section-Services"
    }
})

ServicesTL
    .from(ServicesTitle, { y: -50, opacity: 0, duration: 0.5 })
    .from(ServicesUnderline, { width: 0, opacity: 0, duration: 0.5 }, "-=0.35")
    .to(ServicesList[0], { opacity: 1, duration: 0.5 }, "-=0.35")
    .to(ServicesList[1], { opacity: 1, duration: 0.5 }, "-=0.35")
    .to(ServicesList[2], { opacity: 1, duration: 0.5 }, "-=0.35")
    .to(ServicesList[3], { opacity: 1, duration: 0.5 }, "-=0.35")



const webIMG = document.getElementById("webIMG");
const WebTextHelper = document.getElementById("WebText");
const webH1 = WebTextHelper.querySelector("h1");
const webParagh = WebTextHelper.querySelector("p");
const webBtn = WebTextHelper.querySelector(".btn-lg");

const webShopIMG = document.getElementById("webShopIMG");
const WebShopTextHelper = document.getElementById("WebShopText");
const webShopH1 = WebShopTextHelper.querySelector("h1");
const webShopParagh = WebShopTextHelper.querySelector("p");
const webShopBtn = WebShopTextHelper.querySelector(".btn-lg");


const ContentTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#webIMG"
    }
})

ServicesTL
    .from(webIMG, { y: -50, opacity: 0, duration: 0.5 })
    .from(webH1, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(webParagh, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25")
    .to(webBtn, { opacity: 1, duration: 0.5 }, "-=0.25")
    .from(webShopIMG, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(webShopH1, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25")
    .from(webShopParagh, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25")
    .to(webShopBtn, { opacity: 1, duration: 0.5 }, "-=0.25")


//const tlTitle = document.getElementById("tlTitle");
//const tlUnderline = document.getElementById("tlUnderline");
//const tlParagh = document.getElementById("tlParagh");
//const timelineGSAP = document.getElementById("timelineGSAP");


//const timelineTL = gsap.timeline({
//scrollTrigger: {
//trigger: "#timeline"}})

//timelineTL.from(tlTitle, { y: -50, opacity: 0, duration: 0.5 }).from(tlUnderline, { width: 0, opacity: 0, duration: 0.5 }, "-=0.25").from(tlParagh, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25").from(timelineGSAP, { y: -50, opacity: 0, duration: 0.5 }, "-=0.25");


const ReferenceTitleHelper = document.getElementById("ReferenceTitle");
const ReferenceH1 = ReferenceTitleHelper.querySelector("h1");
const ReferenceUnderline = ReferenceTitleHelper.querySelector(".underline");
const ReferenceCardsHelper = document.getElementById("ReferenceCards");
const ReferenceCards = ReferenceCardsHelper.querySelectorAll(".card");

const ReferenceTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#Reference"
    }
})

ReferenceTL
    .from(ReferenceH1, { y: -50, opacity: 0, duration: 0.5 })
    .from(ReferenceUnderline, { width: 0, opacity: 0, duration: 0.5 }, "-=0.25")
    .to(ReferenceCards[0], { opacity: 1, duration: 0.5 }, "-=0.25")
    .to(ReferenceCards[1], { opacity: 1, duration: 0.5 }, "-=0.25")
    .to(ReferenceCards[2], { opacity: 1, duration: 0.5 }, "-=0.25");


