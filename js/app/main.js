function getImg(){

var allImages = "";
var j = 1;

for (var i = 1; i < 21; i++) {
  allImages = '<img src="./images/' + i + '.jpg">';
  $('#photos' + j).append(allImages);
var timer =  setTimeout(function(){
  $('[src="./images/' + i + '.jpg"]').fadeOut(5000);

}, 1000);
  j++;
  if(j>3){j=1;}
}
var h1 = 0

// For each .box element
  $('#photos1').each(function() {
    // Set up the variables
    var $this = $(this);

    h1 = $this.find('img').height(); // Height of the image inside .box
    h2 = $this.height(); // Set width and height of .box to match image

  });
//alert(h2);
$('.container').css('height', h1);
$('img').fadeOut(5000);

}
