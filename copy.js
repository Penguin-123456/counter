var inputElem   = document.getElementsByName('textarea')[0],
    copyBtnElem = document.getElementsByTagName('button')[0];

copyBtnElem.addEventListener('click', function() {
	if (document.execCommand) {
		inputElem.focus();
		inputElem.select();

		var result = document.execCommand('copy');

		if (result) {

		} else {
			alert('コピーに失敗しました。');
		}
	} else {
		alert('お使いのブラウザはコピー機能に対応していません。');
	}
}, false);
btn.addEventListener('click', () => {
      btn.textContent = 'コピーしました!';
});
