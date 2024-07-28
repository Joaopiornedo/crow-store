var foote = document.getElementById("foot")
var git = document.getElementById("gith");
var link = document.getElementById("linkd");
var instagram = document.getElementById("inst");

function addgit() {

    git.src = "../image/github-2.png";
    git.style.transition = "0.5s"
}

function addlink() {
    
    link.src = "../image/linkedin-2.png";
    link.style.transition = "0.5s"
}

function addinsta() {
   
    instagram.src = "../image/instagram-2.png";
    instagram.style.transition = "0.5s"
}
function remove() {
    git.src = "../image/github-1.png";
    link.src =  "../image/linkedin-1.png";
    instagram.src =  "../image/instagram-1.png";
}

