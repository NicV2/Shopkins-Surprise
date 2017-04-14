$(document).ready(function(){

var oldOpacity =1;


$("#egg").click(function()
  { 
    if(oldOpacity>0.1)
    {
    var newOpacity=oldOpacity-.1;
    $(this).css("opacity", newOpacity);
    oldOpacity=newOpacity;
    }
    //Trying to add sticker to div once done unwrapping- not working
   // else{
     // console.log($(".container").css("background-image"));
     // $(".placeholder-left").prepend('<img src="$(".container").css("background-image")" />');
    //}
   }
);



$("#buttonImage").click(function(){
  var num= Math.floor((Math.random()*10) +1);
  console.log(num);
  $(".container").empty();
  $(".container").prepend("<img id=egg src='images/shopkinsegg.jpeg'>");
  switch(num){
    case 1:
      $(".container").css("background-image", "url(images/cheese.jpg)");
      break;
    case 2:
      $(".container").css("background-image", "url(images/cherries.jpg)");
      break;
    case 3:
      $(".container").css("background-image", "url(images/cookie.jpg)");
      break;
    case 4:
      $(".container").css("background-image", "url(images/corn.jpg)");
      break;
    case 5:
      $(".container").css("background-image", "url(images/cupcake.jpg)");
      break;
    case 6:
      $(".container").css("background-image", "url(images/kleenex.jpg)");
      break;
    case 7:
      $(".container").css("background-image", "url(images/lipstick.jpg)");
      break;
    case 8:
      $(".container").css("background-image", "url(images/peach.jpg)");
      break;
    case 9:
      $(".container").css("background-image", "url(images/purse.jpg)");
      break;
    case 10:
      $(".container").css("background-image", "url(images/wateringcan.jpg");
      break;
    default:
      $(".container").css("background-image", "url(images/apple.jpg)");
  }
  
var resetOpacity= 1;

$("#egg").click(function()
  { 
    var nextOpacity=resetOpacity-.1;
    $(this).css("opacity", nextOpacity);
    resetOpacity= nextOpacity;
     
   });

});




});