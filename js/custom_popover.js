$(document).ready(function(){
  $('#custom_pop').popover({
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});
