import './../../bundle';

// Code libs and plugins
import { globalEventone } from '../../Plugins/eventone.js';

globalEventone();

$(document).ready(() => {
   const inputChanges = [];
   const $saveButton = $('#save-button');

   const $inputs = $('input:not([type="password"])');
   const inputsLen = $inputs.length;

   for (let i = 0; i < inputsLen; i++)
      inputChanges[i] = false;

   $inputs
      .each((i, input) => {
         input.startValue = input.value;
         input.index = i;
      })
      .on('keyup', action('keyup: input', e => {
         inputChanges[e.target.index] = e.target.value != e.target.startValue;
         const some = inputChanges.some(ch => ch);
         const enable = () => $saveButton.removeAttr('disabled');
         const disable = () => $saveButton.attr('disabled', 'disabled');

         if (passOk === null) {
            if (some) enable();
            else disable();
         } else {
            if (passOk) enable();
            else disable();
         }
      }));

   const [firstPass, secondPass] = $('input[type="password"]');
   const passOkLabel = $('#passwords-ok');
   let passOk = null;

   $(firstPass).on('keyup', action('keyup: first pass field'));
   $(secondPass).on('keyup', action('keyup: second pass field'));

   when(['keyup: first pass field', 'keyup: second pass field'], e => {
      if (firstPass.value != secondPass.value) {
         passOkLabel.removeClass('dn');
         passOk = false;
      } else {
         passOkLabel.addClass('dn');
         passOk = firstPass.value == '' ? null : true;
      }
      $inputs.first().trigger('keyup');
   });
});