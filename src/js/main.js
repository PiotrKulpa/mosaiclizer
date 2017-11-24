function Mosaiclizer (columns, images) {
  this._columns = columns;
  this._images = images;
  this.imgNumber = this._images.length;
};

Mosaiclizer.prototype.setColumnWidth = function () {
  return 100 / this._columns + '%';
};

Mosaiclizer.prototype.setColumns = function () {
  var _columnsHtml = '';
  for (var c = 1; c <= this._columns; c++) {
         _columnsHtml += '<div id="photos' + c + '" class="mosaic"></div>';

       };
       return _columnsHtml;
};

Mosaiclizer.prototype.appendColumns = function () {
  var that = this;
  $('.container').append(that.setColumns());
  $('.mosaic').css('width', that.setColumnWidth());

};

Mosaiclizer.prototype.loadImages = function () {
  var _imgs = [],
      remaining = this.imgNumber,
      that = this;

  for (var a = 0; a < this.imgNumber; a++) {
    _imgs[a] = new Image();
    _imgs[a].onload = function () {
           --remaining;
           if (remaining <= 0) {
             that.appendColumns();
             that.appendImages();
           }
       };
    _imgs[a].src = './images/' + this._images[a];
  }
};

Mosaiclizer.prototype.setImages = function (i) {
  return '<img src="./images/' + this._images[i] + '" />';
};

Mosaiclizer.prototype.appendImages = function () {
  var _imgHtml = '',
      j = 0;

  for (var i = 0; i < this.imgNumber; i++) {
    _imgHtml = this.setImages(i);
    j++;
    $('#photos' + j).append(_imgHtml);
    _imgHtml = ''

    if (j === this._columns) {
      j = 0;
    };

       };
       $('.container').append('<hr>');

};

var imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
var mosaiclizer = new Mosaiclizer(4, imgArray);
mosaiclizer.loadImages();
