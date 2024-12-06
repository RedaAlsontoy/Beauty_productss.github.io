// تغيير خلفية landing
var landing = document.querySelector(".landing .image");

if (landing) {
  var srctext = "images/",
    landingImageSrc = Array.from({ length: 15 }, (_, i) => `${srctext}s${i + 1}.webp`); // إنشاء الصور ديناميكيًا
  var landingnum = 0;

  function updateBackground() {
    landing.style.backgroundImage = `url(${landingImageSrc[landingnum]})`;
    localStorage.setItem("background_url", landing.style.backgroundImage);
  }

  function changBackgroundRightClick() {
    landing.classList.add("op-an-left");
    setTimeout(() => {
      landingnum = (landingnum + 1) % landingImageSrc.length;
      updateBackground();
    }, 400);
    setTimeout(() => {
      landing.classList.remove("op-an-left");
    }, 1000);
  }

  function changBackgroundLeftClick() {
    landing.classList.add("op-an-left");
    setTimeout(() => {
      landingnum = (landingnum - 1 + landingImageSrc.length) % landingImageSrc.length;
      updateBackground();
    }, 400);
    setTimeout(() => {
      landing.classList.remove("op-an-left");
    }, 1000);
  }

  // جلب الخلفية المحفوظة من localStorage
  let backgroundUrlItem = localStorage.getItem("background_url");
  if (backgroundUrlItem) {
    landing.style.backgroundImage = backgroundUrlItem;
    landingnum = landingImageSrc.findIndex(
      (src) => `url("${src}")` === backgroundUrlItem
    );
  } else {
    updateBackground();
  }
}
