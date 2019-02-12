let txt = "00-00-2019<br>woonplaats 73";

function aan() {
    document.getElementById('button').value = "Minder details";
    document.getElementById('demo').innerHTML = txt;
    document.getElementById('button').onclick = uit;
}

function uit() {
    document.getElementById('button').value = "Meer details";
    document.getElementById('demo').innerHTML = "";
    document.getElementById('button').onclick = aan;
}

window.onload = function () {
    document.getElementById('button').onclick = aan;
}