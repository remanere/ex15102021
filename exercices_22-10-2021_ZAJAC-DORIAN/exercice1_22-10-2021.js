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