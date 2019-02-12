var details = "00-00-2019<br>woonplaats 73";
var toon = false;

window.addEventListener("load", function () {
    document.getElementById('button').addEventListener("click", function () {
        if (toon) {
            document.getElementById('button').value = "Meer details";
            document.getElementById('demo').innerHTML = "";
        } else {
            document.getElementById('button').value = "Minder details";
            document.getElementById('demo').innerHTML = details;
        }
        toon = !toon;
    })
});

window.addEventListener("load", function () {
    alert('geladen');
});



// document.getElementById("button").addEventListener("click", myFunction);

// function myFunction() {
//     console.log("klik");
// }


// window.onload = function () {
//     alert('load function');
// };

// window.onload = function () {
//     document.getElementById('button').onclick = function () {
//         if (toon) {
//             document.getElementById('button').value = "Meer details";
//             document.getElementById('demo').innerHTML = "";
//         } else {
//             document.getElementById('button').value = "Minder details";
//             document.getElementById('demo').innerHTML = details;
//         }
//         toon = !toon;
//     };
// };


