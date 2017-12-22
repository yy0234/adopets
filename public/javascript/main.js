// Toggle Function
$('.toggle').click(function(){
  //Switch text
  //$('.toggle').toggle();
  // Switches the forms  
$('.form').animate({
     height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
     opacity: "toggle"
  }, "slow");
});
