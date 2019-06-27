

var stringN = "Имя";
var n = 0;

function func()
{
  var nm = document.getElementById("name");

  for (var i = 0; i < stringN.length +1; ++i){
    console.log(stringN.substring(0, i))
    nm.value = stringN.substring(0, i);
    setTimeout(func, 1000);
  }
  
  document.getElementById("num").value+= n++;
  setTimeout(func, 300);
}