const imageElement=document.querySelector(".image-container");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let x=0;
function updateGallery(){
    imageElement.style.transform= `perspective(1000px) rotateY(${x}deg)`; 

    timer=setTimeout(()=>{
        x=x-45;
        updateGallery();
    },3000)
}
updateGallery();
prev.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();
})

next.addEventListener("click",()=>{
     x=x+45;
    clearTimeout(timer);
    updateGallery();
})
const choti=document.getElementById("choti");
const content=document.getElementById("hoverchoti");

choti.addEventListener("mouseenter",()=>{
    generateContent();
});
choti.addEventListener("mouseleave",()=>{
    clearContent();
});
function generateContent()
{
    content.innerHTML='<p>By Profession She is a <b style="color:#EE4E4E">Software Engineer</b>.But She is very lazy.Her nickname is Kaalibili😅.<i style="color:yellow;">(गुस्सा मत होना)</i>.She is the only girl in our house which gets angry very quickly.But whatever she is, she is my dear choti sister.<b style="color:pink">CHHOTI😊</b></p>';
}
function clearContent(){
content.innerHTML=' ';
}



//didi details starts here......................
const didi=document.getElementById("didi");
const dicontent=document.getElementById("hoverdidi");
didi.addEventListener("mouseenter",()=>{
    generatediContent();
});
didi.addEventListener("mouseleave",()=>{
    cleardiContent();
});
function generatediContent()
{
    dicontent.innerHTML='<p>By Profession She is a <b style="color:#D10363">Senior Teacher</b>,And She is such a girl in the house who guides every child as to what to do in future, also,She can handle any problem in any situation with cool mind .But whatever she is, she is my dear elder sister.<b style="color:pink">DIDI😊</b></p>';
}
function cleardiContent(){
dicontent.innerHTML=' ';
}


//jiju details starts here...................
const jiju=document.getElementById("jiju");
const jicontent=document.getElementById("hoverjiju");
jiju.addEventListener("mouseenter",()=>{
    generatejiContent();
});
jiju.addEventListener("mouseleave",()=>{
    clearjiContent();
});
function generatejiContent()
{
    jicontent.innerHTML='<p>By Profession He is a <b style="color:#D10363">Senior Civil Engineer</b>,Also He is a architecture who designs 2D and 3D designs of the houses.But he is a cool minded <b style="color:#E90074">JIJU😍</b> of our family.Together we have made so many memories in Jamshedpur.He also solves our problems faced in daily life according to the situations.</p>';
}
function clearjiContent(){
jicontent.innerHTML=' ';
}

//chotu details......................
const chotu=document.getElementById("chotu");
const chcontent=document.getElementById("hoverchotu");
chotu.addEventListener("mouseenter",()=>{
    generatechContent();
});
chotu.addEventListener("mouseleave",()=>{
    clearchContent();
});
function generatechContent()
{
    chcontent.innerHTML='<p>This is myself.I am an <b style="color:#FC4100">Aspiring Software Developer</b> passionate about creating efficient and innovative solutions.Proficient in <i style="color:#FF004D;">Java,Advance Java,Jee,Jdbc,Html,Css,Javascript,Database as well as Data Structure and Algorithms.</i> I enjoy diving into coding challenges and learning new technologies.With a strong foundation in computer science, I am dedicated to honing my skills and contributing to impactful projects that push the boundaries of technology.</p>';
}
function clearchContent(){
chcontent.innerHTML=' ';
}
//details of mapa......
const mapa=document.getElementById("mapa");
const mapacontent=document.getElementById("hovermapa");
mapa.addEventListener("mouseenter",()=>{
    generatemapaContent();
});
mapa.addEventListener("mouseleave",()=>{
    clearmapaContent();
});
function generatemapaContent()
{
    mapacontent.innerHTML='<p><b style="color:#FF0000">Mummy&Papa</b>❤️❤️जो हम पर सच्चा प्यार बरसाए है वो है हमारी माँ ,जो हर पल हमारा हौसला बढ़ाये वो है हमारे पापा,ये हर लम्हा अपने बच्चों की फिक्र किया करते है,अपने बच्चो के लिए दुनिया के हर गम सहते है </p>';
}
function clearmapaContent(){
mapacontent.innerHTML=' ';
}
//full familly details start here .............
const full=document.getElementById("full");
const fucontent=document.getElementById("hoverfull");
full.addEventListener("mouseenter",()=>{
    generatefullContent();
});
full.addEventListener("mouseleave",()=>{
    clearfullContent();
});
function generatefullContent()
{
    fucontent.innerHTML='<p><b style="color:#FF0080">Full Family..</b>💞💞💞💞💞Family is the most priceless treasure, in which love and respect reside every moment.</b></p>';
}
function clearfullContent(){
fucontent.innerHTML=' ';
}


const obj=document.getElementById("dijiju");
const djcontent=document.getElementById("hoverdto");
obj.addEventListener("mouseenter",()=>{
    generatedijijuContent();
});
obj.addEventListener("mouseleave",()=>{
    cleardijijuContent();
});
function generatedijijuContent()
{
    djcontent.innerHTML='<p><b style="color:#FF0080">DIDI❤️JIJU</b>💞💞खुशियों की बगिया हरी रहे,ये जोड़ी हमेशा करीब रहे।सौ सालों तक मिले दोनों को एक दूसरे का प्यार,यही कामना हम करते हैं हजार बार।</p>';
}
function cleardijijuContent(){
djcontent.innerHTML=' ';
}

