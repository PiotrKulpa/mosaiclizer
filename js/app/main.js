function getImg(){

var allImages = '';
var columns = '';
var j = 0;
var i = 0;
var k = 1;
var imgNumber = 20;
var columnNumber = 3;

for(k=1; k<=columnNumber; k++){
  columns = '<div id="photos' + k + '" class="mosaic"></div>';
  $('.container').append(columns);

}
$('.container').append('<hr>');
var timer =  setInterval(function(){
  myTimer();

}, 100);

function killInterval(){
  clearInterval(timer);
}

function myTimer(){
  i++;
  j++;

  if(j>columnNumber){
    j=1;
  }
  if(i>imgNumber){
    killInterval();
    $('hr').fadeIn();
  }else{
  allImages = '<img src="./images/' + i + '.jpg">';
  $('#photos' + j).append(allImages);
  $('[src="./images/' + i + '.jpg"]').fadeIn(700);
  }
}

}
