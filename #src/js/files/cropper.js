const image = document.getElementById('image');
if (image) {
  const options = {
    background: false,
    modal: true,
    scalable: true,
    zoomable: true,
    zoomOnTouch: true,
    toggleDragModeOnDblclick: true,
    viewMode: 1,
  };
  let cropper;
  cropper = new Cropper(image, options);
}
