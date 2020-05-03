var cameraOpts;

window.onload = function(){
  this.document.addEventListener('deviceready', init, false);
  //this.init();
}

/** init()
 * Create object out of the btnCam
 * - Set the style display to block
 * - First display the camera button and sets the options that we pass to the phone's camera.
 *  • quality: sets the quality of the picture, from 0 to 100.
 *  • destinationType: determines what the camera will return —in this case, it will return an absolute URI to the picture’s location.
 *  • sourceType: sets the source of the picture. Instead of the camera, the source can be the device’s built-in photo library.
 *  • allowEdit: determines whether or not the image can be edited before it is selected.
 *  • encodingType: chooses the encoding of the returned image, either JPEG or PNG.
 * - for more options check PhoneGap API
 *
 */
function init() {
  var btnCam = document.getElementById('btnCam');
  btnCam.style.display = "block";

  cameraOpts = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: false,
    encodingType: Camera.EncodingType.JPEG,
  };
}

/** takePic()
 * calls the getPicture() to launch native camera app w/ the set camera options.
 * If the picture is successful then cameraSuccess() is called if not the cameraFail()
 * -- The camera plug-in’s getPicture() method either returns a photo if it is successful or an error message if it is not 
 * successful. When we call the getPicture() method, we need to instruct the application what to do if it either 
 * succeeds or fails. The cameraSuccess() function handles success, and the cameraFail() function handles failure. --
 */
function takePic() {
  navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOpts);
}

/** cameraSuccess(imageData)
 * sets the picture as the source of resultImg <img> element
 * 
 * @param {*} imageData 
 */
function cameraSuccess(imageData){
  var result = document.getElementById('resultImg');
  result.src = imageData;
}

/** cameraFail(message)
 * displays the failure message in an alert window
 * 
 * @param {*} message 
 */
function cameraFail(message){
  alert("Error: " + message);
}