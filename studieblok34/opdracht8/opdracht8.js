
document.getElementById("button").addEventListener("click", function () {

    var person = prompt("Please enter a name", "Enter a name");
    var person2 = prompt("Please an other name", "Enter a name");

    if (person != null) {
        document.getElementById("demo").innerHTML = person + ", " + person2;
    }

});




