function showsMapper(shows) {
  return shows.filter(function(element) {
    return element.drm === true;
  }).map(function(element) {
    var image = element.image.showImage;
    var slug = element.slug;
    var title = element.title;
    return {image: image, slug: slug, title: title};
  });
}

module.exports = showsMapper;
