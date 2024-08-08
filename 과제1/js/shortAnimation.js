//더보기를 눌렀을때 간략히로 바뀌며 height 를 늘려줌
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
//간략히를 눌렀을때 더보기로 바뀌며 height 를 줄여줌
line2.addEventListener("click", () =>{
    line2.style.display = "none";
    line.style.display = "block";
    document.getElementById("shortShow").style.height = "400px";
    line.style.transition = "0.5s";
    line.style.bottom = "0px";
    document.getElementById("line").style.bottom = "20px";
})