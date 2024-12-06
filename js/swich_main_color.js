// استهداف العناصر
let toggleColor = document.querySelector('.toggle-colors');
let colorContainer = document.querySelector('.swich-color');

// إضافة حدث عند النقر على toggleColor
toggleColor.addEventListener("click", function (event) {
  // التبديل بين إظهار وإخفاء الـ colorContainer عند النقر على toggleColor
  colorContainer.classList.toggle('show');
});

// إضافة حدث للنقر في أي مكان آخر خارج الـ toggleColor لإخفاء الـ colorContainer
document.addEventListener("click", function (event) {
  // التحقق مما إذا كانت النقرة خارج toggleColor و colorContainer
  if (!toggleColor.contains(event.target) && !colorContainer.contains(event.target)) {
    colorContainer.classList.remove('show'); // إخفاء الـ colorContainer
  }
});

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    // set in color in local
    let mainColors = localStorage.getItem("color_option");

    // إذا كانت القيمة موجودة في localStorage
    if (mainColors !== null) {
      document.documentElement.style.setProperty(
        "--main-color",
        mainColors
      );

      // إزالة الكلاس "active" من جميع العناصر
      document.querySelectorAll(".swich-color li").forEach((element) => {
        element.classList.remove("active");
        // إضافة الكلاس "active" على اللون المحدد
        if (element.dataset.color === mainColors) {
          element.classList.add("active");
        }
      });
    }

    let colorList = document.querySelectorAll(".swich-color .color");
    
    // تعيين الحدث عند النقر على اللون
    colorList.forEach((element) => {
      element.onclick = function () {
        // إزالة الكلاس "active" من جميع العناصر
        this.parentNode.querySelectorAll("li").forEach((element) => {
          element.classList.remove("active");
        });
        // إضافة الكلاس "active" على العنصر الذي تم النقر عليه
        this.classList.add("active");
        let dataColor = this.dataset.color;
        document.documentElement.style.setProperty("--main-color", dataColor);
        localStorage.setItem("color_option", dataColor);
      };
    });

    // تعيين الحدث لاختيار اللون من المدخل (input)
    let input_color = document.querySelector("#color");
    if (input_color) {
      input_color.onchange = function () {
        let dataColor = input_color.value;
        document.documentElement.style.setProperty("--main-color", dataColor);
        localStorage.setItem("color_option", dataColor);
      };

      // إضافة حدث عند النقر على مدخل اللون
      input_color.onclick = function () {
        let dataColor = input_color.value;
        document.documentElement.style.setProperty("--main-color", dataColor);
      };

      // تعيين القيمة الأولية لمدخل اللون
      input_color.value = mainColors;
    }
  })();
});
