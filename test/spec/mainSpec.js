describe("Mosaiclizer", function() {
  var mosaiclizer,
    myarray = [],
    columns,
    images,
    i;


  beforeEach(function() {
    columns = 3;
    myarray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    images =   myarray;
    mosaiclizer = new Mosaiclizer(columns, images);
    i = images.length;


  });

  it("Mosaiclizer exist", function() {
    expect(mosaiclizer).toBeDefined();

  });

  it("Checking parameters", function() {
    expect(mosaiclizer._columns).toEqual(columns);
    expect(mosaiclizer._images).toEqual(images);
    expect(mosaiclizer.imgNumber).toEqual(images.length);

  });

  it("Checking method setColumnWidth", function() {
    expect(mosaiclizer.setColumnWidth).toBeDefined();
    expect(typeof mosaiclizer.setColumnWidth()).toEqual('string');
    expect(mosaiclizer.setColumnWidth()).toEqual(100 / columns + '%');


  });

  it("Checking method setColumns", function() {
    expect(mosaiclizer.setColumns).toBeDefined();
    expect(typeof mosaiclizer.setColumns()).toEqual('string');
    expect(mosaiclizer.setColumns()).toContain('<div id="photos1" class="mosaic"></div>');


  });

  it("Checking method setImages", function() {
    expect(mosaiclizer.setImages).toBeDefined();
    expect(typeof mosaiclizer.setImages()).toEqual('string');
    expect(mosaiclizer.setImages(i)).toContain('<img src="./images/'+ images[i] + '" />');


  });




});

describe("Mosaiclizer spy: setImages, appendImages, loadImages", function() {

  beforeEach(function () {
    spyOn(mosaiclizer, 'setImages');
    mosaiclizer.setImages(1);

    spyOn(mosaiclizer, 'appendImages');
    mosaiclizer.appendImages();

    spyOn(mosaiclizer, 'loadImages');
    mosaiclizer.loadImages();
  });


  it("Checking method setImages ", function() {
    expect(mosaiclizer.setImages).toHaveBeenCalled();
    expect(mosaiclizer.setImages).toHaveBeenCalledWith(1);

  });

  it("Checking method appendImages ", function() {
    expect(mosaiclizer.appendImages).toHaveBeenCalled();

  });

  it("Checking method loadImages ", function() {
    expect(mosaiclizer.loadImages).toHaveBeenCalled();

  });

});
