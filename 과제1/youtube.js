
//웹이 500px 이하로 줄었을때 검색 아이콘이 생긴다, 그 아이콘을 눌렀을때 생기는 검색창과 사라지는 다른 아이콘들 구현
document.getElementById("searchButton").addEventListener("click", function(){
    document.getElementById("bar").style.display = "block";
    document.getElementById("voice").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    List.style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("back").style.display = "block";
});
document.getElementById("back").addEventListener("click", () => {
    document.getElementById("bar").style.display = "none";
    document.getElementById("voice").style.display = "flex";
    document.getElementById("box1").style.display = "flex";
    document.getElementById("searchButton").style.display = "block";
    List.style.display = "flex";
    document.getElementById("logo").style.display = "block";
    document.getElementById("back").style.display = "none";
});


//사이드바의 스크롤바가 일정시간후에 사라진다는것을 구현
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

const search = document.getElementById("search");



//css 파일들을 교체하며 목록아이콘을 눌렀을때 사이드바가 줄어들었다 커졌다하며 영상의 크기도 달라진다.
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