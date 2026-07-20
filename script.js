const robot = document.getElementById("robot");
const verifyBtn = document.getElementById("verifyBtn");
const message = document.getElementById("message");
const camera = document.getElementById("camera");
const snapshot = document.getElementById("snapshot");
const ctx = snapshot.getContext("2d");
const resultText = document.getElementById("resultText");

verifyBtn.addEventListener("click", () => {
  if (robot.checked) {
    message.textContent = "✅ Capturing photo...";
    message.style.color = "lime";

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        camera.style.display = "block";
        camera.srcObject = stream;

        // কিছু সময় পরে ছবি তোলা হবে
        setTimeout(() => {
          ctx.drawImage(camera, 0, 0, snapshot.width, snapshot.height);
          snapshot.style.display = "block";
          resultText.textContent = "🤖 You are a Robot!";
          resultText.style.display = "block";
        }, 3000); // ৩ সেকেন্ড পরে ছবি তুলবে
      })
      .catch(err => {
        message.textContent = "❌ Camera access denied!";
        message.style.color = "red";
      });

  } else {
    message.textContent = "❌ Please confirm you are a Robot!";
    message.style.color = "orange";
    camera.style.display = "none";
    snapshot.style.display = "none";
    resultText.style.display = "none";
  }
});
