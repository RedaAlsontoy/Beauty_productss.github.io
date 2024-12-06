// Toggle links and menu functionality
(function () {
  // Select elements
  const toggleMenuBtn = document.querySelector('.toggle-menu');
  const links = document.querySelector('#links');
  const overlay = document.createElement('div');
  const header = document.querySelector('.header');

  // Initialize overlay and add to the body
  overlay.classList.add('overlay-all');
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  // Function to show menu
  const showMenu = () => {
    links.classList.add('visible');
    overlay.style.display = 'block';
    header.classList.add('active');
    // Set opacity to 1 when the menu is visible
    setTimeout(() => {
      links.style.opacity = '1';
    }, 10); // Small delay for transition effect
  };

  // Function to hide menu
  const hideMenu = () => {
    links.classList.remove('visible');
    links.style.opacity = '0'; // Fade out to opacity 0
    overlay.style.display = 'none';
    header.classList.remove('active');
  };

  // Show/hide menu on button click
  toggleMenuBtn.addEventListener('click', () => {
    if (links.classList.contains('visible')) {
      hideMenu();
    } else {
      showMenu();
    }
  });

  // Hide menu when clicking on overlay
  overlay.addEventListener('click', hideMenu);

  // Hide menu when clicking any link (on small screens)
  links.addEventListener('click', (e) => {
    if (document.body.clientWidth < 992 && e.target.tagName === 'A') {
      hideMenu();
    }
  });

  // Adjust menu visibility on window resize
  window.addEventListener('resize', () => {
    if (document.body.clientWidth > 992) {
      links.classList.add('visible');
      links.style.opacity = '1'; // Keep opacity 1 on large screens
    } else {
      links.classList.remove('visible');
      links.style.opacity = '0'; // Hide on small screens
    }
    overlay.style.display = 'none';
  });

  // Smooth scroll and active link functionality
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.sections').forEach(section => {
      const sectionId = section.id;
      const link = document.querySelector(`#links a[data-scroll="${sectionId}"]`);
      if (window.scrollY >= section.offsetTop - 130) {
        document.querySelectorAll('#links a').forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  document.querySelectorAll('#links li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(`#${e.target.dataset.scroll}`);
      window.scrollTo({ top: targetSection.offsetTop - 129, behavior: 'smooth' });
      document.querySelectorAll('#links a').forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
})();(function () {
  const searchBtn = document.querySelector('#toggle-sreech'); // أيقونة البحث
  const inputSearch = document.querySelector('#input-sreech');
  const overlay = document.createElement('div');
  const header = document.querySelector('.header');

  // إضافة الـ overlay إلى الـ body
  overlay.classList.add('overlay-all');
  overlay.style.display = 'none';  // مخفي في البداية
  document.body.appendChild(overlay);

  // دالة لإظهار حقل البحث
  const showSearchInput = () => {
    inputSearch.classList.add('visible');
    overlay.style.display = 'block';
    header.classList.add('active');
    setTimeout(() => {
      inputSearch.style.opacity = '1';
    }, 10); // تأخير بسيط لتفعيل التأثير
  };

  // دالة لإخفاء حقل البحث
  const hideSearchInput = () => {
    inputSearch.classList.remove('visible');
    inputSearch.style.opacity = '0'; // التلاشي إلى الشفافية 0
    overlay.style.display = 'none';
    header.classList.remove('active');
  };

  // إظهار حقل البحث عند النقر على الأيقونة
  searchBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // لمنع الحدث من التفاعل مع النقرات الأخرى
    showSearchInput();
  });

  // إخفاء حقل البحث عند النقر على الـ overlay
  overlay.addEventListener('click', hideSearchInput);

  // إخفاء حقل البحث عند النقر على أي مكان في الصفحة (ما عدا الأيقونة أو حقل البحث)
  document.addEventListener('click', (event) => {
    if (!searchBtn.contains(event.target) && !inputSearch.contains(event.target)) {
      hideSearchInput();
    }
  });

})();
