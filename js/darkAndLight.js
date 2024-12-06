let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let activeClass = true;

function removeClass() {
  // إزالة الفئة النشطة من جميع الأيقونات
  document.querySelectorAll(".dark-light-icons i").forEach((element) => {
    element.classList.remove("active");
  });
}

// إخفاء أيقونة الداكنة أو الفاتحة عند بدء التحميل
dark.style.display = "inline-block"; // إخفاء الأيقونة الداكنة في البداية
light.style.display = "none"; // إظهار أيقونة الفاتحة في البداية

dark.onclick = (e) => {
  removeClass();
  // إضافة الفئة النشطة على أيقونة الداكنة
  dark.classList.add("active");
  let datacolor = dark.dataset.color;
  let databackground = dark.dataset.background;
  document.documentElement.style.setProperty("--main-background", databackground);
  document.documentElement.style.setProperty("--global-color", datacolor);
  
  // تخزين البيانات في التخزين المحلي
  localStorage.setItem("dark_light_color", datacolor);
  localStorage.setItem("dark_light_background", databackground);
  localStorage.setItem("active_class", true);

  // إخفاء الأيقونة الفاتحة
  light.style.display = "inline-flex";
  // إظهار الأيقونة الداكنة
  dark.style.display = "none";
};

light.onclick = (e) => {
  removeClass();
  // إضافة الفئة النشطة على أيقونة الفاتحة
  light.classList.add("active");
  let datacolor = light.dataset.color;
  let databackground = light.dataset.background;
  document.documentElement.style.setProperty("--main-background", databackground);
  document.documentElement.style.setProperty("--global-color", datacolor);
  
  // تخزين البيانات في التخزين المحلي
  localStorage.setItem("dark_light_color", datacolor);
  localStorage.setItem("dark_light_background", databackground);
  localStorage.setItem("active_class", false);

  // إخفاء الأيقونة الداكنة
  dark.style.display = "inline-flex";
  // إظهار الأيقونة الفاتحة
  light.style.display = "none";
};

// استرجاع القيم من التخزين المحلي عند تحميل الصفحة
let dark_light_color = localStorage.getItem("dark_light_color");
let dark_light_background = localStorage.getItem("dark_light_background");
if (dark_light_color !== "" && dark_light_background !== "") {
  document.documentElement.style.setProperty("--main-background", dark_light_background);
  document.documentElement.style.setProperty("--global-color", dark_light_color);
}

// استرجاع حالة الفئة النشطة من التخزين المحلي
if (localStorage.getItem("active_class") === "false") {
  light.classList.add("active");
  dark.classList.remove("active");
  light.style.display = "none";
  dark.style.display = "inline-flex";
} else {
  light.classList.remove("active");
  dark.classList.add("active");
  light.style.display = "inline-flex";
  dark.style.display = "none";
}
