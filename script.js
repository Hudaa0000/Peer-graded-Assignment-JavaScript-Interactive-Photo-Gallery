function upDate(previewPic) {
  console.log('upDate triggered:', previewPic);
  var imageDiv = document.getElementById('image');
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  console.log('undo triggered');
  var imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
}

document.addEventListener('DOMContentLoaded', function() {
  var thumbs = document.querySelectorAll('.preview');
  thumbs.forEach(function(img) {
    img.addEventListener('mouseover', function() { upDate(img); });
    img.addEventListener('mouseout', undo);
  });
});
