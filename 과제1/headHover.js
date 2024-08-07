document.getElementById("voice").addEventListener("mouseover", function(){
    document.getElementById("subText-voice").style.display = "block";
});
document.getElementById("voice").addEventListener("mouseleave", function(){
    document.getElementById("subText-voice").style.display = "none";
});
document.getElementById("alarm").addEventListener("mouseover", function(){
    document.getElementById("subText-bell").style.display = "block";
});
document.getElementById("alarm").addEventListener("mouseleave", function(){
    document.getElementById("subText-bell").style.display = "none";
});

document.getElementById("video").addEventListener("mouseover", function(){
    document.getElementById("subText-video").style.display = "block";
});
document.getElementById("video").addEventListener("mouseleave", function(){
    document.getElementById("subText-video").style.display = "none";
});

document.getElementById("searchButton").addEventListener("mouseover", function(){
    document.getElementById("subText-search").style.display = "block";
});
document.getElementById("searchButton").addEventListener("mouseleave", function(){
    document.getElementById("subText-search").style.display = "none";
});