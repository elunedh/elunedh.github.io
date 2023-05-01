fetch("js/assets/gallery.json")

// Do something with the response...
.then(function(res) {

  // Get the JSON representation of the response object then...
  res.json().then(function(json) {

    // Loop over each object in our JSON object (array)...
    json.forEach(function(el) {

      // Create a new gallery item container (a link to the image)...
      var galleryItem = document.createElement('a');
      
      // Give this div a class name
      galleryItem.setAttribute('class', 'gallery-item');
      
      // Add the href attribute to the anchor
      galleryItem.setAttribute('href', el.url);
      
      // On click will open the image in a new tab
      galleryItem.setAttribute('target', '_blank');
      
      // Create an image element...
      var image = document.createElement('img');

       // Give attributes to the image.
      image.setAttribute('src', el.url);        // The location of the image/URL
      image.setAttribute('alt', el.caption);    // The text that will appear if image doesn't load
      image.setAttribute('title', el.caption);  // The tooltip
      
      // Create a caption element...
      var caption = document.createElement('caption');
      
      // // To add the caption from the JSON file
      caption.innerText = el.caption;

      // Append the image and caption to our gallery item container
      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      
      // Add the gallery item to the gallery element
      gallery.appendChild(galleryItem);
    });
  });
});