var update = setInterval(function() {draw()}, 1);

var UUMatterTotal = 0;
var billion = "1000000000";
var million = "1000000";
var billionString = "1 000 000 000 mB";
var percentage = 0;

var canvasName = "myCanvas";

$.get(url, function(data){alert(data);});

function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

getAjax('http://skiyte.net/fluids/getfluid.php?fluid=UU-Matter', function(data){

    var myArray = data.split(';'); //If i understood your need
    console.log(myArray);
});

function htmlGenerator() {
    document.getElementById("html").innerHTML = "" +
        + "<center>"
            + "<p id='canvas'></p>"
        + "</center>";

    document.getElementById("canvas").innerHTML = "" +
        "<div>" +
            "<canvas class='canvas' id=" + canvasName + " style='border: solid 3px' width='1000' height='50'></canvas>" +
        "</div>"
}

function draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var height = c.height, width = c.width;

    UUMatterTotal += 100000;
    console.log("Total UU-Matter Produced: " + UUMatterTotal);
    percentage = (UUMatterTotal / million * 10);
    console.log("Percentage: " + percentage);

    ctx.font = "30px Arial";
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, width, height);

    var grd=ctx.createLinearGradient(0,0,width,height);
    grd.addColorStop(0,"purple");
    grd.addColorStop(1,"pink");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,UUMatterTotal / million, height);

    ctx.fillStyle = "black";
    ctx.fillText(UUMatterTotal + " / " + billionString, (width / 2) - 60, (height / 2) + 10);
    ctx.fillText(percentage.toFixed(4) + " %",20, height / 2 + 10);
};

