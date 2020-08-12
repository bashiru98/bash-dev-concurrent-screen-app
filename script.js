const videoElement = document.getElementById("video");

const button = document.getElementById("button");

// prompt alert to choose media stream, instantiate it and play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start image in image
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});
// on  request fetch
selectMediaStream();
