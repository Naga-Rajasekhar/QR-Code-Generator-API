let input = document.querySelector(".data");
let generateButton = document.querySelector(".submit");
let outputImage = document.querySelector("#img");

generateButton.addEventListener("click", () => {
  qrData = input.value;
  fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${qrData}`).then(
    (response) => {
      outputImage.setAttribute("src", response.url);
      outputImage.style.display = "inline";
    }
  );
});
