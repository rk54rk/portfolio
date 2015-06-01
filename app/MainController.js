app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) { 
  $http.get('../content/index.json').success(function(data) {
    $scope.data = data;
    $scope.current = "";
    document.title = data.title;
  });
}]);

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

//define "project" directive, set height of .caption div to equal the row height
app.directive("project", function($timeout) {
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      $timeout(function () {
        var rowHeight = elem[0].offsetHeight;
        //console.log(rowHeight);
        //$(elem).find('.caption').css('height', rowHeight);
        scope.height = rowHeight + "px";
      });
    }
  }
});
