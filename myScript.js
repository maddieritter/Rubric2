function introduce(first, last)
{
  var full;
  full = first + last;
  return full;
}

function secondFunction()
{
  var result;
  result = "My name is, chka-chka  " + introduce('Slim ', 'Shady');
  document.getElementById("slim").innerHTML = result;
}



  function fairytale () 
  {
    var temp = prompt("How did Goldilocks like her porridge?");

    switch(temp){
      case "just right":
        alert ("Correct! Your prize is a bit of wisdom: Goldilocks is the REAL bad guy in the story.")
        break;
      case "hot":
        alert ("Incorrect!")
        break;
      case "cold":
        alert ("Nobody likes it that way!")
        break;
      default:
        alert ("Did you even read the book?")
        break;
    }
  }



