// RR Teen Set Solution - site script
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    // Close nav after clicking a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Simple lightbox for gallery images
  var galleryImgs = document.querySelectorAll('.gallery-item img');
  if (galleryImgs.length) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<img src="" alt="">';
    overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(10,20,35,0.92);z-index:2000;align-items:center;justify-content:center;padding:24px;cursor:zoom-out;';
    overlay.querySelector('img').style.cssText = 'max-width:90vw;max-height:90vh;border-radius:6px;box-shadow:0 20px 60px rgba(0,0,0,0.5);';
    document.body.appendChild(overlay);
    overlay.style.display = 'none';
    overlay.style.display = '';
    overlay.style.setProperty('display', 'none');

    galleryImgs.forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        overlay.querySelector('img').src = img.src;
        overlay.querySelector('img').alt = img.alt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
    overlay.addEventListener('click', function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Simple contact form (static hosting - mailto fallback)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var phone = form.querySelector('#phone') ? form.querySelector('#phone').value.trim() : '';
      var message = form.querySelector('#message').value.trim();
      var subject = encodeURIComponent('Website Enquiry from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message
      );
      window.location.href = 'mailto:rrtinshed@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
