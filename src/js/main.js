/**
 * Represents a mosaic gallery.
 *
 * @constructor
 * @author: p.kulpa@onet.pl
 * @param {number} columns - The number of gallery columns.
 * @param {array} images - The array of source images.
 */
function Mosaiclizer (columns, images) {
  /** @private */ this._columns = columns;
  /** @private */ this._images = images;
  /** @private */ this.imgNumber = this._images.length;
};

/**
 * Calculates the column width of the gallery.
 *
 * @this {Mosaiclizer}
 * @return {string} The width in % of the single column.
 */
Mosaiclizer.prototype.setColumnWidth = function () {
  return 100 / this._columns + '%';
};

/**
 * Creates HTML code of columns with id="photos.
 *
 * @this {Mosaiclizer}
 * @return {string} The HTML code of columns.
 */
Mosaiclizer.prototype.setColumns = function () {
  var _columnsHtml = '';
  for (var c = 1; c <= this._columns; c++) {
         _columnsHtml += '<div id="photos' + c + '" class="mosaic"></div>';

       };
       return _columnsHtml;
};

/**
 * Appends HTML code of columns with id="photos to .container element.
 *
 * @this {Mosaiclizer}
 */
Mosaiclizer.prototype.appendColumns = function () {
  var that = this;
  $('.container').append(that.setColumns());
  $('.mosaic').css('width', that.setColumnWidth());

};

/**
 * Preloads images.
 *
 * @this {Mosaiclizer}
 */
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

/**
 * Creates  images HTML code.
 *
 * @this {Mosaiclizer}
 * @return {string}
 */
Mosaiclizer.prototype.setImages = function (i) {
  return '<img src="./images/' + this._images[i] + '" />';
};

/**
 * Appends HTML code of images to .cointainer.
 *
 * @this {Mosaiclizer}
 */
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
