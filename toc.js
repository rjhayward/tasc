/* Highlight the contents entry for the section currently being read */
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.ltx_page_navbar');
  if (!nav) return;
  var links = {};
  nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
    links[decodeURIComponent(a.getAttribute('href').slice(1))] = a;
  });
  var sections = Array.prototype.filter.call(
    document.querySelectorAll('section[id]:not(.ltx_paragraph)'),
    function (s) { return links[s.id]; }
  );
  var active = null, ticking = false;
  function update() {
    ticking = false;
    var current = null;
    var line = window.innerHeight * 0.25;
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s;
    });
    var link = current ? links[current.id] : null;
    if (link === active) return;
    if (active) active.classList.remove('active');
    active = link;
    if (!link) return;
    link.classList.add('active');
    var r = link.getBoundingClientRect(), n = nav.getBoundingClientRect();
    if (r.top < n.top || r.bottom > n.bottom) {
      nav.scrollTop += r.top - n.top - n.height / 2;
    }
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
});
