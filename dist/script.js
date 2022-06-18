// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      header.classList.remove('lg:top-95');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.add('lg:top-95');
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
  
  // Darkmode toggle
  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');
  const toggleDark = document.querySelector('#toggle-dark');
  const toggleLight = document.querySelector('#toggle-light');
  
  darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      toggleLight.classList.remove('hidden');
      toggleDark.classList.add('hidden');
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      toggleLight.classList.add('hidden');
      toggleDark.classList.remove('hidden');
    }
  });
  
  // toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    toggleLight.classList.remove('hidden');
  } else {
    darkToggle.checked = false;
    toggleDark.classList.remove('hidden');
  }