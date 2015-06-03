
//appointing image to #modal-image on modal popup
$('#modal-image').on('show.bs.modal', function (event) {
  changeImg(event.relatedTarget);
});

//changing image when clicked prev/next buttons
function changeImg(from_elem){
  
  var elem = $(from_elem);
  var project = elem.data('project');
  var imageid = elem.data('imageid');
  var imagecount = elem.data('imagecount');
  
  var current_image="content/projects/" + project + "/" + project + "_" + imageid + "_l.jpg";
  $(document).find('#bigimg').css( "background-image", 'url(' + current_image + ')');
  
  if ((imageid + 1) <= imagecount){
    var next_image = "content/projects/" + project + "/" + project + "_" + (imageid + 1) + "_l.jpg";
    $(document).find('#bigimg-next').css( "background-image", 'url(' + next_image + ')');
  }
  if ((imageid - 1) > 0){
    var prev_image = "content/projects/" + project + "/" + project + "_" + (imageid - 1) + "_l.jpg";
    $(document).find('#bigimg-prev').css( "background-image", 'url(' + prev_image + ')');
  }
  
  $(document).find('#bigimg-select-prev').data('project', project);
  $(document).find('#bigimg-select-next').data('project', project);
  $(document).find('#bigimg-select-prev').data('imageid', imageid - 1);
  $(document).find('#bigimg-select-next').data('imageid', imageid + 1);
  $(document).find('#bigimg-select-prev').data('imagecount', imagecount);
  $(document).find('#bigimg-select-next').data('imagecount', imagecount);
  $(document).find('#bigimg-page-current').html(imageid);
  $(document).find('#bigimg-page-total').html(imagecount);
  
  if ($(document).find('#bigimg-select-prev').data('imageid') < 1){
    $("#bigimg-select-prev").css("display", "none");
  } else {
    $("#bigimg-select-prev").css("display", "block");
  }
  if ($(document).find('#bigimg-select-next').data('imageid') > imagecount){
    $("#bigimg-select-next").css("display", "none");
  } else {
    $("#bigimg-select-next").css("display", "block");
  }
}

//init scrollIt for keyboard scrolling
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 300,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});
$(function(){
  $.scrollIt();
});