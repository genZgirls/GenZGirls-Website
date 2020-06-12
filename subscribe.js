var content = $(".content");
var submit = $(".submit-btn");
var facts = $("div");

submit.on("click", surpriseMessage);


function surpriseMessage() {
  event.preventDefault ();
  var name = $('.name').val();
  var lastName = $('.lastName').val();
  var email = $('.email').val();
  content.append(`<p> Thank you <strong>${name} ${lastName}</strong> for subscribing to <span = "girlz">GenZ Girls!</span><p> <p>You will get an email at ${email} within 24 hours to confirm your subscription. Every week, you will receive an online newsletter that talks about inspiring GenZ Girls. Thanks for subscribing! </p>`);
}


