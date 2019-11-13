$(function() {
  // valide les inputs nom et prénom
  $('#fName, #lName').keyup(function nameCheck() {
    let input = ($(this).val()).trim()
    let pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð.'-]*$/;
    if (pattern.test(input) && input != '') {
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  // valide l'input mail
  $('#mail').keyup(function mailCheck() {
    let input = ($(this).val()).trim();
    let pattern = /^([a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (pattern.test(input) && input != ''){
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
  // valide l'input numéro de téléphone
  $('#phoneNumber').keyup(function phoneCheck() {
    let input = ($(this).val()).trim();
    let pattern = /^[+]*[(]{0,1}[0-9]{0,4}[)]{0,1}[0-9]*$/;
    if (pattern.test(input) && input != ''){
      $(this).css('border', '2px solid green')
    } else {
      $(this).css('border', '3px solid red')
    }
  });
});
