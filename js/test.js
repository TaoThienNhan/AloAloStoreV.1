var img = [];
for (var i = 1 ; i < 4 ; i++) {
    img[i] = new Image();
    img[i].style.width = "300px"
    img[i].src = "img/" +i+ ".jpg";
    img[i].style.width = "200px"
}


var index = 1;
function mot(){
    index = 1;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
}

function hai(){
    index = 2;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
}

function ba(){
    index = 3;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
}