// Tag filter for the blog and project lists.
// Progressive enhancement: without JS the full list stays visible.
document.querySelectorAll('.filter button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter button').forEach(function (b) {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    var tag = btn.dataset.filter;
    document.querySelectorAll('.post-list > li').forEach(function (li) {
      li.hidden = tag !== 'all' && !li.classList.contains(tag);
    });
  });
});
