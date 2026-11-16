'use strict';
// The run-boxes: every lesson example and the playground.
// A run always starts with fresh papers and the book's own
// argument words, Ada and Byron — the same shape the book's
// proofs use, so a box answers what the book says it answers.
function showResult(outEl, result) {
  outEl.hidden = false;
  if (result.error) {
    outEl.textContent = (result.output || '') + result.errorOutput;
    outEl.classList.add('err');
  } else {
    outEl.textContent = result.output || '';
    outEl.classList.remove('err');
  }
}
function runSource(code, outEl) {
  try {
    var result = Nifla.run(code, { args: ['Ada', 'Byron'], files: {} });
    showResult(outEl, result);
  } catch (e) {
    outEl.hidden = false;
    outEl.textContent = 'The interpreter itself stumbled: ' + e.message;
    outEl.classList.add('err');
  }
}
document.querySelectorAll('.runbox').forEach(function (box) {
  var btn = box.querySelector('.runbtn');
  var code = box.querySelector('textarea.code');
  var out = box.querySelector('.out');
  if (!btn || !code || !out) return;
  btn.addEventListener('click', function () { runSource(code.value, out); });
});
var tryBtn = document.getElementById('try-run');
if (tryBtn) {
  tryBtn.addEventListener('click', function () {
    runSource(document.getElementById('try-code').value, document.getElementById('try-out'));
  });
}
