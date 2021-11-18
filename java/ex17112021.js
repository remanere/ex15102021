console.log("ceci est un test");

var divimg = document.createElement("div");
divimg.setAttribute("class","classimg");
divimg.setAttribute("onClick", "test1()");

var body = document.getElementsByTagName("body");
document.body.appendChild(divimg);

var btn = document.createElement("BUTTON");        
var t = document.createTextNode("CLICK ME");       
btn.appendChild(t);                               
document.body.appendChild(btn);                    

function test1(){
  
    divimg.setAttribute("class", "classnewimg");

}

var divrond = document.createElement("div");
divrond.setAttribute("class","classrond");
document.body.appendChild(divrond);

function test(){
  
    divrond
  
}

var sectioncontent = document.createElement("section");
sectioncontent.setAttribute("class","classcontent");
document.body.appendChild(sectioncontent);

function test(){
  
    sectioncontent
  
}

var els = document.createElement("h1");
var contenu = document.createTextNode("ceci est un test h1");

els.appendChild(contenu);
document.body.appendChild(els);





