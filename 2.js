// Cтворюю функцію яка рахує і поверта значення площі;
function square(){
	var a = parseFloat(document.getElementById('LengthA').value),
		b = parseFloat(document.getElementById('WidthB').value),
		c = parseFloat(document.getElementById('HeightH').value),
                d = parseFloat(document.getElementById('HeightD').value),
                e = parseFloat(document.getElementById('HeightE').value),
		s = parseFloat(document.getElementById('sq').value),
		r = ((2*s)/(a+b+c+d+e));
	document.getElementById('result').value = r;
}
// Функція котра при нажатті на кнопку буде змінювати колір тексту	
function getOptionColor() {
    var objColor = document.getElementById("ColorSelect");
	document.getElementById("student").style.color = objColor.options[objColor.selectedIndex].value;
}
// Функція котра при нажатті на кнопку буде змінювати розмір тексту
function getOptionFont() {
    var objFont = document.getElementById("FontSelect");
	document.getElementById("student").style.fontSize = objFont.options[objFont.selectedIndex].value;
}
