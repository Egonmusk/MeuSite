function sendWhats(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const telephone = "5512982258198";
  const text = `Olá! Me chamo ${name}, ${message}`;
  const msgFormatted = encodeURIComponent(text);
  const url = `https://wa.me/${telephone}?text=${msgFormatted}`;
  window.open(url, "_blank");
}