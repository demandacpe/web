var accordionContainer = document.getElementById("accordion");

window.onload = initPage();

function initPage() {
  initModal();
  generateItems();
}

function pauseVideos() {
  const videos = Array.from(document.getElementsByTagName("video"));
  videos.forEach((video) => video.pause());
}

function initModal() {
  const modal = window.document.getElementById("my-modal");
  const modalContent = window.document.getElementById("modal-content");
  modalContent.onclick = (e) => e.stopPropagation();
  modal.onclick = closeModal;
  modal.classList.add("hidden");
}

function closeModal(e) {
  const modal = window.document.getElementById("my-modal");
  modal.classList.add("hidden");

  pauseVideos();
}

function openModal() {
  const modal = window.document.getElementById("my-modal");
  modal.classList.remove("hidden");

  pauseVideos();
}

function showInModal(e) {
  e.preventDefault();

  const modalContent = window.document.getElementById("modal-content");
  modalContent.innerHTML = "";

  const originalTarget = e.target;
  const targetCopy = originalTarget.cloneNode(true);
  targetCopy.id = "in-modal-content";

  modalContent.appendChild(targetCopy);
  openModal();
}

function generateItems() {
  for (file of files) {
    const card = document.createElement("div");
    card.classList.add("card");

    // header
    content = generateContent(file);
    const header = window.document.createElement("div");
    header.classList.add("img-card-top");
    header.appendChild(content);
    header.onclick = (e) => showInModal(e);

    // body
    const body = document.createElement("div");
    body.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    const titleText = document.createTextNode(file.name);
    title.appendChild(titleText);

    body.appendChild(title);

    card.appendChild(header);
    card.appendChild(body);

    accordionContainer.appendChild(card);
  }
}

function generateContent(file) {
  let content;
  switch (file.type) {
    case "vid":
      content = generateVideo(file.url);
      break;
    case "img":
      content = generateImage(file.url);
      break;
    case "audio":
      content = generateAudio(file.url);
      break;
    case "pdf":
      content = generatePdf(file.url);
      break;
    default:
      content = document.createTextNode("Tipo de arquivo não suportado");
      break;
  }

  return content;
}

function generateVideo(url) {
  const video = document.createElement("video");
  video.src = url;
  video.className = "video";
  video.setAttribute("controls", "true");
  return video;
}

function generateImage(url) {
  const image = document.createElement("img");
  image.src = url;
  image.className = "image";
  return image;
}

function generateAudio(url) {
  const audio = document.createElement("audio");
  audio.src = url;
  audio.className = "audio";
  audio.setAttribute("controls", "true");
  return audio;
}

function generatePdf(url) {
  const container = document.createElement("div");
  container.style.background = "antiquewhite";

  const pdf = document.createElement("iframe");
  pdf.src = `${url}#view=fitH`;
  pdf.title = "pdf";
  pdf.className = "pdf";
  pdf.height = "80%";
  pdf.width = "100%";

  const button = document.createElement("button");
  button.onclick = (e) => showInModal({ ...e, target: container });

  const text = window.document.createTextNode("Abrir pdf");

  container.appendChild(pdf);
  container.appendChild(text);

  return container;
}
