var text1 = document.getElementById('text1'),

   text2 = document.getElementById('text2'),

   texts = document.getElementsByClassName('text');

function permutation() {

   if (text1 == texts[0]) {

      text2 = text2.parentNode.removeChild(text2);

      document.body.insertBefore(text2, text1);

}

   else {

      text1 = text1.parentNode.removeChild(text1);

      document.body.insertBefore(text1, text2);

}

}

var input = document.createElement("input");
input.setAttribute("value", "test1");
input.setAttribute("type", "text");
document.body.appendChild(input);

var input2 = document.createElement("input");
input2.setAttribute("value", "test2");
input2.setAttribute("type", "text");
document.body.appendChild(input2);

var btn = document.createElement("BUTTON");        
var t = document.createTextNode("permuttation");       
btn.appendChild(t);       
btn.setAttribute("onclick", "switched();");                      
document.body.appendChild(btn);

function switched(){
   var value = input.value;
   switch (value) {
      case "test1":
         input2.value = "test1";
         input.value = "test2"; 
         break;
            case "test2":
               input1.value = "test2";
               input.value = "test1"; 
               break;
      default:
         break;
         
   }
}