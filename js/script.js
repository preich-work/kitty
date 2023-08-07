var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);
button.addEventListener("click", function () 
{
  //console.log("It's working!");
  if (cat.classList.contains("show"))
  { cat.classList.remove("show");
button.innerText = "Wait! Come back!";
button.classList.add("disappear");}
  //console.log("Yes");}

  else {//console.log("No");
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
button.classList.remove("disappear");
}});
