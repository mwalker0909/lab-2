'use strict';

function Image(img) {
  this.image_url = img.image_url;
  this.title = img.title;
  this.description = img.description;
  this.keyword = img.keyword;
  this.horns = img.horns;
}

Image.allImages = [];

Image.prototype.render = function() {
  let imageClone = $('#photo-template').clone();
  let $imageClone = $(imageClone[0].content);

  $imageClone.find('h2').text(this.title);
  $imageClone.find('img').attr('src', this.image_url);
  $imageClone.find('p').text(this.hobbies);
  $imageClone.attr('class', this.title);
  $imageClone.appendTo('main');

  $('#form').append(
    $('<option></option>')
      .attr('value', this.keyword)
      .text(this.keyword));
};

Image.getJson = () => {
  $.get('../data/page-1.json')
    .then(data => {
      data.forEach(item => {
        Image.allImages.push(new Image(item))
      });
    })
    .then(Image.loadImages);
};

Image.loadImages = () => {
  Image.allImages.forEach(image => image.render());
}

$(`select[name='images'`).on('change', function() {
  let $selectedImage = $(this).val();
  $('h2').hide();
  $('img').hide();
  Image.allImages.forEach((element) => {
    if ($selectedImage === element.keyword) {
      //TODO: Complete this Feature 2
    }
  })
});

$(() => Image.getJson());