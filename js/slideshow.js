var image_index = 0;
slide_show();

function slide_show(){
    var images = document.getElementsByClassName("slide-images");
    // console.log(images.length);
    //make all images invisible
    for(var i=0; i<images.length; i++){
        images[i].style.display = "none";
    }

    if(image_index >= images.length){
        image_index = 0;
    }
    images[image_index].style.display = "block";
    image_index++;
    console.log(image_index);


    setTimeout(slide_show, 2000); // durtion 2 secs
}
