const menuMobile = document.querySelector(".menu-icon-container");
const header = document.querySelector(".header-container");
const nav = document.querySelector(".links-container");
const menuBurger = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-icon-close");

const features = document.getElementById("features");
const company = document.getElementById("company");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown2 = document.querySelector(".arrow-down2");
const arrowUp2 = document.querySelector(".arrow-up2");
const subMenuFeatures = document.querySelector(".subMenu-features");
const subMenuCompany = document.querySelector(".subMenu-company");

menuMobile.addEventListener("click", (e) => {
  e.preventDefault();

  header.classList.toggle("sidebar-open");
  nav.classList.toggle("hidden");
  menuBurger.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});

features.addEventListener("click", () => {
  console.log(features);
  arrowDown.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  subMenuFeatures.classList.toggle("hidden");
});

company.addEventListener("click", () => {
  arrowDown2.classList.toggle("hidden");
  arrowUp2.classList.toggle("hidden");
  subMenuCompany.classList.toggle("hidden");
});

// desktop

const featuresDesktop = document.getElementById("features-desktop");
const companyDesktop = document.getElementById("company-desktop");
const arrowDownDesktop = document.querySelector(".arrow-down-desktop");
const arrowUpDesktop = document.querySelector(".arrow-up-desktop");
const arrowDown2Desktop = document.querySelector(".arrow-down2-desktop");
const arrowUp2Desktop = document.querySelector(".arrow-up2-desktop");
const subMenuFeaturesDesktop = document.querySelector(
  ".subMenu-features-desktop"
);
const subMenuCompanyDesktop = document.querySelector(
  ".subMenu-company-desktop"
);

featuresDesktop.addEventListener("click", () => {
  arrowDownDesktop.classList.toggle("hidden");
  arrowUpDesktop.classList.toggle("hidden");
  subMenuFeaturesDesktop.classList.toggle("hidden");
});

companyDesktop.addEventListener("click", () => {
  arrowDown2Desktop.classList.toggle("hidden");
  arrowUp2Desktop.classList.toggle("hidden");
  subMenuCompanyDesktop.classList.toggle("hidden");
});
