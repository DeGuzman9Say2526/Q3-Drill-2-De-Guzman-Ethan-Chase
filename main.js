function calculateArea() {
    var rad = Number(document.getElementById("rad").value);
    var area = Math.PI * Math.pow(rad, 2);
    document.getElementById("area").value = area.toFixed(2);
}