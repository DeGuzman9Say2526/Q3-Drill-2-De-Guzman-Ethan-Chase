function calculateArea(rad) {
var rad = Number(document.getElementById("rad").value);
var area = Math.PI * (rad ** 2);
document.getElementById("area").value = area;
}