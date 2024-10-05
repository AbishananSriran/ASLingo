const video = document.getElementById("video");
const captureButton = document.getElementById("captureButton");
const downloadLink = document.getElementById("downloadLink");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    document.write("permission denied");
  });

captureButton.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(blob => {
    const blobURL = URL.createObjectURL(blob);

    // Create a temporary download link
    const downloadLink = document.createElement("a");
    downloadLink.href = blobURL;
    downloadLink.download = "captured_photo.jpg";

    // Simulate a click on the download link
    downloadLink.click();

    // Optionally, revoke the object URL to free up memory
    URL.revokeObjectURL(blobURL);
  }, "image/jpeg");
});