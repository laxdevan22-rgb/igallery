var pics = [
    {
        image: "chan 1.webp",
        title: "kazama",
        info: "Kazama is  smart and disciplined friend."
    },
    {
        image: "chan 2.png",
        title: "shinchan",
        info: "Shinchan is a mischievous yet lovable cartoon character."
    },
    {
        image: "chan 3.webp",
        title: "Bho chan",
        info: "Bho chan is innocent friend, loved for his cute expressions and simple nature."
    },
    {
        image: "cah.jpeg",
        title: "Masao",
        info: "Masao is gentle and emotional friend, known for his kindness and easily scared nature.."
    },
    {
        image: "chan 5.png",
        title: "Naini",
        info: "Naini  is bossy yet caring friend, known for her strong attitude and love for playing house."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();