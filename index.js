
$("h2").click(function(){

  var userClick = $(this).attr("id");
  boldText (userClick);
  toggleHidden (userClick);
  toggleButton (userClick);

});



function boldText (name){
  var text = $("h2#" + name);
  text.toggleClass("bold");
}

function toggleHidden (name){
  var par = document.querySelector(".q" + name + " p");
  par.classList.toggle("hidden");
}

function toggleButton (name){
  var img = document.querySelector(".q" + name + " img");
  img.classList.toggle("rotate");
}
