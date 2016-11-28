function getImg(){
  this.allImages = '';
  this.columns= '';
  this.j = 0;
  this.i =0;
  this.k = 1;
  this.imgNumber = 20; //set number of images
  this.columnNumber = 3; //set number of columns
  this.mosaicWidth = function() {return 100 / this.columnNumber + '%'}; //set mosaic class width in %
  this.insertColumns = function() {
    for(this.k = 1; this.k <= this.columnNumber; this.k++){
      this.columns = '<div id="photos' + this.k + '" class="mosaic"></div>';
      $('.container').append(this.columns);
      $('.mosaic').css('width', this.mosaicWidth());
    }
  };
  this.myTimer = function() { // main function
    this.j++;
    this.i++;
    if(this.j > this.columnNumber){
      this.j=1;
    }
    if(this.i > this.imgNumber){
      this.killInterval();
      $('hr').fadeIn();
    }else{
    this.allImages = '<img src="./images/' + this.i + '.jpg">';
    $('#photos' + this.j).append(this.allImages);
    $('[src="./images/' + this.i + '.jpg"]').fadeIn(500);
    }
  };
  this.killInterval = function() { //clears interval
    clearInterval(timer);
  };
  this.insertColumns();
  var timer =  setInterval(this.myTimer, 100);
  $('.container').append('<hr>');
}
