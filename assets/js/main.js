let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");

let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");

let count = 1;
// let voltar = document.getElementById("voltar");
// let seguir = document.getElementById("seguir");

function check(){
  if(dot1.classList.contains("selected")){

    count = 1;
    img1.style.zIndex = "4";
    img2.style.zIndex = "2";
    img3.style.zIndex = "2";
    img1.style.left = "0%";
    img2.style.left = "-100%";
    img3.style.left = "100%";

  }else if(dot2.classList.contains("selected")){

    img2.style.zIndex = "4";
    img1.style.zIndex = "2";
    img3.style.zIndex = "2";
    img2.style.left = "0%";
    img1.style.left = "100%";
    img3.style.left = "-100%";
    count = 2;

  }else if(dot3.classList.contains("selected")){
    img3.style.zIndex = "4";
    img2.style.zIndex = "2";
    img1.style.zIndex = "2";
    img3.style.left = "0%";
    img3.style.zIndex = "4";
    img1.style.left = "-100%";
    img2.style.left = "100%";
    count = 0;
  }
}

function update(){
  if(count == 0){
    dot1.classList.add("selected");
    dot2.classList.remove("selected");
    dot3.classList.remove("selected");
  }else if(count == 1){
    dot2.classList.add("selected");
    dot3.classList.remove("selected");
    dot1.classList.remove("selected");
  }else if(count == 2){
    dot3.classList.add("selected");
    dot2.classList.remove("selected");
    dot1.classList.remove("selected");
  }
  check();
}

if (location.href.match(/index/)) {
  setInterval(update, 3000);
}

$(window).scroll(function(){
    if ($(this).scrollTop() > 200 ) {

        $('#goTop').fadeIn(200);
    } else {
        $('#goTop').fadeOut(200);
    }
});

$('#goTop').click(function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop: 0}, 300);
});
