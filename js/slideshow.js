var slide_index = 0;
slide_show();

function slide_show(){
    var images = document.getElementsByClassName("slide-images");
    // console.log(images.length);
    //make all images invisible
    for(var i=0; i<images.length; i++){
        images[i].style.display = "none";
    }

    if(slide_index >= images.length){
        slide_index = 0;
    }
    images[slide_index].style.display = "block";
    slide_index++;
    console.log(slide_index);


    setTimeout(slide_show, 2000); // durtion 2 secs
}