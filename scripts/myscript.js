let Home=document.getElementById("Home");
let About=document.getElementById("About");
let Education=document.getElementById("Education");
let Publications=document.getElementById("Publications");
function onlydisplay(elem)
{
    Home.style.display="none";
    About.style.display="none";
    Education.style.display="none";
    Publications.style.display="none";
    let e=document.getElementById(elem);
    e.style.display="block";
}
setInterval( function changedate()
{
    let d=document.getElementById("date");
    var timestamp=new Date();
    d.innerText=timestamp;
},950);