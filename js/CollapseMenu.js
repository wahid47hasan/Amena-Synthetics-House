var isMenuOpen = false;

function collapseButtonActive(){
    var navBar = document.getElementById("navbar");
    var icon = document.getElementById("collapse-able-icon");
    if(isMenuOpen){
        navBar.style.display = "none";
        icon.innerHTML = "&#9776";
        console.log("menu close");
        isMenuOpen = false;
    }else{
        navBar.style.display = "block";
        icon.innerHTML = "&#9886;"
        console.log("menu open");
        isMenuOpen = true;
    }
}

function CollapseButtonDeactive(){
    var windowWidth = window.outerWidth;
    var navBar = document.getElementById("navbar");
    var icon = document.getElementById("collapse-able-icon");
    if(windowWidth > 480){
        navBar.style.display = "block";
        isMenuOpen = false;
    }
    else{
        navBar.style.display = "none";
        icon.innerHTML = "&#9776";
        isMenuOpen = false;
    }
}
