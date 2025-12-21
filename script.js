function openMailto(event){
  event.preventDefault();
  const form = event.target;
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const msg = encodeURIComponent(form.message.value.trim());

  const subject = `Portfolio contact from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${msg}`;

  // Replace with your real email address in index.html too:
  window.location.href = `mailto:dieselmech148@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

document.getElementById("year").textContent = new Date().getFullYear();
