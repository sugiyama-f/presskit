(function () {
  var saved;
  try { saved = localStorage.getItem("presskit-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "").toLowerCase().indexOf("ja") === 0 ? "ja" : "en");
  function apply(l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === l));
    });
    try { localStorage.setItem("presskit-lang", l); } catch (e) {}
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.lang); });
    });
    apply(lang);
  });
})();
