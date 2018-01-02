$(".button-collapse").sideNav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens
});

$('select').material_select();

$('.btn-large').click(function() {
  $(this).toggleClass('active');
});

$('.scrollspy').scrollSpy(function() {
  $(this).toggleClass('hidden');
});
