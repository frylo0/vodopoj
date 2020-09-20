$(document).ready(() => {
  $('.post').click(action('click: post'));
  $('.post a').click(action('click: any post button'));

  when('click: post', e => {
    $(e.target).parents('.post')
      .toggleClass('post__actions-toggle_pressed')
      .find('.post__more')
      .slideToggle('fast');
  });
  when('click: any post button', e => {
    e.stopPropagation();
  });
});