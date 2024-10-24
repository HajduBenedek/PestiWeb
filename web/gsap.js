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
    .from(ServicesUnderline, { width: 0, opacity: 0, duration: 0.5 })
//.from(ServicesList[0], { y: -50, opacity: 0, duration: 0.5 })