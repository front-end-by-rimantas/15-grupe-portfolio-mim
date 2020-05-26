'use strict';

document.getElementById("fBtn").addEventListener("click", function(){
    checkForm();
  });
  
function checkForm() {
    const name = document.getElementById('name');
    const mail = document.getElementById('email');
    const text = document.getElementById('message');

    let alertName = document.getElementById('alert-name');
    let alertMail = document.getElementById('alert-mail');
    let alertText = document.getElementById('alert-text');
    let alertInfo = document.getElementById('alert-info');
    let loaderBtn = document.getElementById('loader');

    let msg = 'The field is required.';
    let alertBox = false;

    alertName.innerHTML = '';
    alertMail.innerHTML = '';
    alertText.innerHTML = '';
    alertInfo.innerHTML = '';

    loaderBtn.classList.add("loader");

    setTimeout(
      function() {

    loaderBtn.classList.remove("loader");

    if ( name.value.trim().length === 0 ) {
      alertName.innerHTML = msg;
      alertBox = true;
    }

    if ( mail.value.trim().length === 0 ) {
      alertMail.innerHTML = msg;
      alertBox = true;
    }

    if ( text.value.length === 0 ) {
      alertText.innerHTML = msg;
      alertBox = true;
    }

    if( mail.value.trim().length > 0 && ! mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
      alertMail.innerHTML = 'The e-mail address entered is invalid.';
      alertBox = true;
    }

    if ( alertBox )
    {
      alertInfo.innerHTML = '<p class="message-error">One or more fields have an error. Please check and try again.</p>';
    }
    else {   
      name.value = '';
      mail.value = '';
      text.value = '';  
      alertInfo.innerHTML = '<p class="message-ok">Thank you for your message. It has been sent.</p>';
    }

  }, 1000);
}