app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
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
  console.log(src_image);
  $(this).find('.big-img').css( "background-image", 'url(' + src_image + ')');
  
})