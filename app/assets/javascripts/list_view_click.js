$(document).ready(function() {
  $('.show-list').click(function() {
  $( ".school-list" ).show();
  $( ".search-map" ).hide();
  $( ".show-list" ).addClass('active');
  $( ".show-map" ).removeClass('active');
  $( ".pagination" ).removeClass('none');
  });
  $('.show-map').click(function() {
  $( ".school-list" ).hide();
  $( ".search-map" ).show();
  $( ".show-map" ).addClass('active');
  $( ".show-list" ).removeClass('active');
  $( ".pagination" ).addClass('none');
  });
})