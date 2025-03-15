console.log("надеюсь вам понравилась моя работа:)")

document.querySelector('.nav__mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__mobile').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  const mobileMenuBtn = document.querySelector('.nav__mobile-menu');
  const mobileMenu = document.querySelector('.nav__mobile');

  // Фиксация шапки при скролле
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });

  // Мобильное меню
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('nav__mobile-menu--active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Закрытие мобильного меню при клике на ссылку
    const mobileLinks = mobileMenu.querySelectorAll('.nav__link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('nav__mobile-menu--active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
});

// Плавный скролл к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;  
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return; 
    
    const navHeight = document.querySelector('.nav').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});