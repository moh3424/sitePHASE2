var couleur = prompt("veuillez indiquer votre couleur préférer");

// if(couleur == "bleu" ){
//     document.getElementById("bgColor").style.backgroundColor="blue";
//     document.getElementsByTagName("container").style.backgroundColor="white";
// }else if (couleur == "rose"){ 
//     document.getElementById("bgColor").style.backgroundColor="pink";
// }
var changement = document.getElementById("bgColor");
var element = document.getElementById('mSelection');
var choix = couleur;
switch (choix) {
    case 'orange':
    changement.style.backgroundColor = "Orange";
    element.setAttribute("style", "color:blue; border: 1px solid blue;");
    break;
    case 'bleu':
    changement.style.backgroundColor = "Blue";
    element.setAttribute("style", "font-size:20px; color:gray; border: 1px solid blue;");
    break;
    case 'rose':
    document.getElementById("bgColor").style.backgroundColor="Pink";
    break;
    case 'jaune':
    document.getElementById("bgColor").style.backgroundColor="Yellow";
    break;
    // case 'vert':
    // document.getElementsById("bgColor").style.backgroundColor="Green";
    // break;
    // case 'blanc':
    // document.getElementById("bgColor").style.backgroundColor="White";
    // break;
    case 'violet':
    document.getElementById("bgColor").style.backgroundColor="Purple";
    break;
    default:
    document.getElementById("bgColor").style.backgroundColor="red";
    // console.log('Sorry, we are out of ' + expr + '.');
    alert ("les couleur sont: bleu, vert, orange")
  }
  
  
