// Toggle Function
$('.toggle').click(function(){
  //Switch text
  if ($('.toggle').html()=="Register Now")
   $('.toggle').html("Login Now");
  else $('.toggle').html("Register Now");
  // Switches the forms  
$('.form').animate({
     height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
     opacity: "toggle"
  }, "slow");
});
