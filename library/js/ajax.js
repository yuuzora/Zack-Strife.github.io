$(document).ready(function(){
// process the form
  var $contactForm = $('#contact-form');
  $contactForm.submit(function(e) {
      e.preventDefault();
      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      // var formData = {
      //     // 'firstName'         : $('input[name=firstName]').val(),
      //     // 'lastName'          : $('input[name=lastName]').val(),
      //     '_replyto'          : $('input[name=_replyto]').val(),
      //     'body'              : $('textarea#textarea1').val() + $('input[name=firstName]').val() + $('input[name=lastName]').val(),
      //     '_subject'          : $('input[name=_subject]')
      // };
      // process the form
      $.ajax({
        url: "https://formspree.io/hugo.capezzone@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success:function(data) {
          console.log(data);
          Materialize.toast('Mail sent', 4000);
        },
        error: function(data) {
          Materialize.toast('Mail not sent', 4000);
        }
      })
    
  });
});