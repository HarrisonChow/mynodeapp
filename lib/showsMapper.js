function showsMapper(shows) {
  return shows.filter(function(element) {
    return element.drm === true && element.episodeCount > 0;
  }).map(function(element) {
    var image = element.image.showImage;
    var slug = element.slug;
    var title = element.title;
    return {image: image, slug: slug, title: title};
  });
}

module.exports = showsMapper;
