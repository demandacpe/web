// transforma links de compartilhamento do drive em links para embed de arquivos
function fromDrive(link) {
  let originalUrl = link;
  originalUrl = originalUrl.replace("/view?usp=sharing", "");
  const [, id] = originalUrl.split("file/d/");

  const baseUrl = "https://drive.google.com/uc?export=view&id=";
  console.log(`${id}`);
  return `${baseUrl}${id}`;
}

var files = [
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/12G0iue9d1KNJB0zl0WYT28pr2J2Wr8ma/view?usp=sharing"
    ),
    name: "Audio 1",
    id: "1",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1gO8UeUrXbVo8LT-woLWyawReQ-DVJPu2/view?usp=sharing"
    ),
    name: "Audio 2",
    id: "2",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1SfWP50WLmFmznE98hmj3ESNK0yYIMvGq/view?usp=sharing"
    ),
    name: "Audio 3",
    id: "3",
  },
  {
    type: "pdf",
    url: fromDrive(
      "https://drive.google.com/file/d/1wzZrZkjCmPNgtnNIXamiXvNS9mXHFJao/view?usp=sharing"
    ),
    name: "Pdf(em branco)",
    id: "4",
  },
  {
    type: "vid",
    url: fromDrive(
      "https://drive.google.com/file/d/1DeKj4Xy6MJw0XMt8Hykd_-zV7loz8zzH/view?usp=sharing"
    ),
    name: "Video 1",
    id: "5",
  },
  {
    type: "img",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FrFRofxQihQMPS99PmOF0.g--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxMy4wNDM0NzgyNjA4Njk2%2Fhttps%3A%2F%2Fmedia-mbst-pub-ue1.s3.amazonaws.com%2Fcreatr-uploaded-images%2F2020-06%2Fe0e0a050-b722-11ea-ab75-8a3069ba59e1&f=1&nofb=1",
    name: "Imagem",
    id: "6",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1SfWP50WLmFmznE98hmj3ESNK0yYIMvGq/view?usp=sharing"
    ),
    name: "Audio",
    id: "7",
  },
  {
    type: "img",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FrFRofxQihQMPS99PmOF0.g--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxMy4wNDM0NzgyNjA4Njk2%2Fhttps%3A%2F%2Fmedia-mbst-pub-ue1.s3.amazonaws.com%2Fcreatr-uploaded-images%2F2020-06%2Fe0e0a050-b722-11ea-ab75-8a3069ba59e1&f=1&nofb=1",
    name: "Imagem",
    id: "8",
  },
];
