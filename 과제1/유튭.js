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

document.getElementById("serchButton").addEventListener("mouseover", function(){
    document.getElementById("subText-serch").style.display = "block";
});
document.getElementById("serchButton").addEventListener("mouseleave", function(){
    document.getElementById("subText-serch").style.display = "none";
});
document.getElementById("serchButton").addEventListener("click", function(){
    document.getElementById("bar").style.display = "block";
    document.getElementById("voice").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("serchButton").style.display = "none";
    List.style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("back").style.display = "block";
});
document.getElementById("back").addEventListener("click", () => {
    document.getElementById("bar").style.display = "none";
    document.getElementById("voice").style.display = "flex";
    document.getElementById("box1").style.display = "flex";
    document.getElementById("serchButton").style.display = "block";
    List.style.display = "flex";
    document.getElementById("logo").style.display = "block";
    document.getElementById("back").style.display = "none";
});
const sideBar = document.getElementById("sideBar");
let isScrolling;
sideBar.addEventListener("mouseover", ()=> {
    sideBar.classList.remove('hide-scrollbar');
});
sideBar.addEventListener("mouseleave", ()=> {
    sideBar.classList.add('hide-scrollbar');
});
        sideBar.addEventListener('scroll', () => {
        sideBar.classList.remove('hide-scrollbar');
           
           clearTimeout(isScrolling);

            isScrolling = setTimeout(() => {
                sideBar.classList.add('hide-scrollbar');
            }, 1000); // 1초 후에 스크롤바 숨기기
        });

const serch = document.getElementById("serch");

const line = document.getElementById("line-in");
line.addEventListener("click", ()=>{
    line2.style.display = "block";
    line.style.display = "none";
    document.getElementById("shortShow").style.height = "1000px";
    document.getElementById("shortShow").style.transition = "0.5s";
    line2.style.bottom = "-520px";
    document.getElementById("line").style.bottom = "-500px";
})

const line2 = document.getElementById("line-in2");

line2.addEventListener("click", () =>{
    line2.style.display = "none";
    line.style.display = "block";
    document.getElementById("shortShow").style.height = "400px";
    line.style.transition = "0.5s";
    line.style.bottom = "0px";
    document.getElementById("line").style.bottom = "20px";
})

const List = document.getElementById("List");
List.addEventListener("click", () =>{
    const stylesheet = document.getElementById("stylebar");
    const stylesheet2 = document.getElementById("stylebar2");
    if(stylesheet.getAttribute('href') === 'style.css'){
        stylesheet.setAttribute('href', 'style3.css');
        stylesheet2.setAttribute('href', 'style4.css');
    }
    else {
        stylesheet.setAttribute('href', 'style.css');
        stylesheet2.setAttribute('href', 'style2.css');
    }
});