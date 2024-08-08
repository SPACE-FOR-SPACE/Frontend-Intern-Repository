
//웹이 500px 이하로 줄었을때 검색 아이콘이 생긴다, 그 아이콘을 눌렀을때 생기는 검색창과 사라지는 다른 아이콘들 구현
//검색창이 생길때
document.getElementById("searchButton").addEventListener("click", function(){
    document.getElementById("bar").style.display = "block";
    document.getElementById("voice").style.display = "none";
    document.getElementById("iconBox").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    List.style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("back").style.display = "block";
});
//검색창을 치울때
document.getElementById("back").addEventListener("click", () => {
    document.getElementById("bar").style.display = "none";
    document.getElementById("voice").style.display = "flex";
    document.getElementById("iconBox").style.display = "flex";
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
//사이드바를 클릭하여 youtube.css 의 아이디 youtubeStyle 의 상태에따라 바꾼다
List.addEventListener("click", () =>{
    const youtubeStyle = document.getElementById("youtubeStyle");
    const videoStyle = document.getElementById("videoStyle");
    const sideStyle = document.getElementById("sideStyle");
    const headerStyle = document.getElementById("headerStyle");
    if(youtubeStyle.getAttribute('href') === 'css/youtube.css'){
        youtubeStyle.setAttribute('href', 'css/youtube(side_v).css');
        videoStyle.setAttribute('href', 'css/video(side_v).css');
        sideStyle.setAttribute('href', 'css/sideBar(side_v).css');
        headerStyle.setAttribute('href', 'css/nav(side_v).css');
    }
    else{
        youtubeStyle.setAttribute('href', 'css/youtube.css');
        videoStyle.setAttribute('href', 'css/video.css');
        sideStyle.setAttribute('href', 'css/sideBar.css');
        headerStyle.setAttribute('href', 'css/nav.css');
    }
});