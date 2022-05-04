import './../../bundle';

// Code libs and plugins
import { globalEventone } from '../../Plugins/eventone.js';

globalEventone();

$(document).ready(() => {
   const $registerButton = $('#register-button');
   const $inputs = $('input:not([type="password"])');

   $inputs
      .on('keyup', action('keyup: input', e => {
         const every = $inputs.toArray().every(inp => inp.value);

         const enable = () => $registerButton.removeAttr('disabled');
         const disable = () => $registerButton.attr('disabled', 'disabled');

         if (every && passOk)
            enable();
         else
            disable();
      }));

   const [firstPass, secondPass] = $('input[type="password"]');
   const passOkLabel = $('#passwords-ok');
   let passOk = false;

   $(firstPass).on('keyup', action('keyup: first pass field'));
   $(secondPass).on('keyup', action('keyup: second pass field'));

   when(['keyup: first pass field', 'keyup: second pass field'], e => {
      if (firstPass.value != secondPass.value) {
         passOkLabel.removeClass('dn');
         passOk = false;
      } else {
         passOkLabel.addClass('dn');
         passOk = firstPass.value == '' ? false : true;
      }
      $inputs.first().trigger('keyup');
   });
});