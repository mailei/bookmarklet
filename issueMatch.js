javascript: (function() {
  let total = 0;
  document.querySelectorAll('a[id^="issue_"]').forEach(function(el, index) {
    let num = el.text.match(/(?<=@)(\d*)/g);
    num = parseInt(num);
    total = num + total;
  });
  alert(total);
})();
