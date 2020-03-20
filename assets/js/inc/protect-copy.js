document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode === 123) {
		//alert('No F-12');
		return false;
	}
};
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode === 123) {
		//alert('No F-keys');
		return false;
	}
};
document.onkeydown = function (event) {
	event = (event || window.event);
	if (event.keyCode === 123) {
		//alert('No F-keys');
		return false;
	}
};

function contentprotector() {
	return false; //initialize the function return false
}

function contentprotectors() {
	return false; //initialize the function return false
}
document.oncontextmenu = contentprotector; //calling the false function in contextmenu
//document.onmouseup = contentprotector; //calling the false function in mouseup event
var isCtrl = false;
var isAlt = false;
var isCmd = false;
var isShift = false;
var isPrint = false;
window.onkeyup = function (e) {
	if (e.which === 17)
		isCtrl = false; // make the condition when ctrl key is pressed no action has performed.

	if ((e.which === 93) || (e.which === 91) || (e.which === 224))
		isCmd = false; // make the condition when ctrl key is pressed no action has performed.
};
window.onkeydown = function (e) {
	if (e.which === 17)
		isCtrl = true; //if onkeydown event is triggered then ctrl with possible copying keys are disabled.


	if ((e.which === 85) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 80) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 65) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 88) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 67) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 86) && (isCtrl === true)) {
		return false;
	}
	if ((e.which === 83) && (isCtrl === true)) {
		return false;
	}


	if (e.which === 16) {
		isShift = true;
	}
	if (isCtrl === true && isShift === true && e.which === 73) { // for ctlr+shift+i key combination in Windows
		return false;
	}

	if ((e.which === 93) || (e.which === 91) || (e.which === 224))
		isCmd = true; //if onkeydown event is triggered then ctrl with possible copying ke
	//
	//ys are disabled.

	if ((e.which === 85) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 80) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 65) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 88) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 67) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 86) && (isCmd === true)) {
		return false;
	}
	if ((e.which === 83) && (isCmd === true)) {
		return false;
	}



	if (e.which === 18) {
		isAlt = true;
	}
	if (isCmd === true && isAlt === true && e.which === 73) { // for cmd+alt+i key combination in mac
		return false;
	}


	// Mac OS Print screen function

	if (isCmd === true && isShift === true && e.which === 51) { // for cmd+shift+3 key combination in mac
		//alert('clicked');
		return false;

	}
	if (isCmd === true && isShift === true && e.which === 52) { // for cmd+shift+4 key combination in mac
		//alert('clicked');
		return false;
	}

	if (isCmd === true && isCtrl === true && isShift === true && e.which === 51) { // for Cmd+Ctrl+Shift+3 key combination in mac
		//alert('clicked');
		return false;

	}
	if (isCmd === true && isShift === true && e.which === 52 && e.which === 32) { // for Cmd+Shift+4+hit Space bar combination in mac
		//alert('clicked');
		return false;
	}

	// End of Mac OS Printscreen

};
isCtrl = false;
isCmd = false;
document.ondragstart = contentprotector; // Dragging for Image is also Disabled(By Making Condition as false)
