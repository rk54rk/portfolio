app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) { 
  $http.get('../content/index.json').success(function(data) {
    $scope.data = data;
    document.title = data.title;
  });
}]);

//appointing image to #modal-image
$('#modal-image').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var project = button.data('project'); // Extract info from data-* attributes
  var imageid = button.data('imageid'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  src_image="content/projects/" + project + "/" + project + "_" + imageid + "_l.jpg";
  $(this).find('.bigimg').css( "background-image", 'url(' + src_image + ')');
});


//define "project" directive, set height of .caption div to equal the row height
app.directive("project", function($timeout) {
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      $timeout(function () {
        var rowHeight = elem[0].offsetHeight;
        console.log(rowHeight);
        //$(elem).find('.caption').css('height', rowHeight);
        scope.height = rowHeight + "px";
      });
    }
  }
});