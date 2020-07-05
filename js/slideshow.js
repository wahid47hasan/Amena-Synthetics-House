var image_index = 0;
slide_show();

function slide_show(){
    var images = document.getElementsByClassName("slide-images");
    var dots = document.getElementsByClassName("dots");
    // console.log(images.length);
    //make all images invisible
    for(var i=0; i<images.length; i++){
        images[i].style.display = "none";
    }
    //making default
    for(var i=0; i<dots.length; i++){
        // dots[i].style.background = "blueviolet"
        dots[i].className = dots[i].className.replace(" dots-active", "");
    }

    if(image_index >= images.length){
        image_index = 0;
    }

    images[image_index].style.display = "block";
    // dots[image_index].style.background = "red";
    dots[image_index].className += " dots-active";
    image_index++;
    console.log(image_index);


    setTimeout(slide_show, 2000); // durtion 2 secs
}

function OnDotPressed(dotIndex){
    console.log("Dot Pressed");
    dotClicked = true;
    image_index = dotIndex;
}
