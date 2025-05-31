document.getElementById("certForm").onsubmit = function(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const params = new URLSearchParams();
  for (const [key, value] of form.entries()) {
    params.append(key, value);
  }
  const certURL = `${window.location.origin}/BIRTH_CERTIFICATE/cert.html?${params.toString()}`;
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), certURL);
};
