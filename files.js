// transforma links de compartilhamento do drive em links para embed de arquivos
function fromDrive(link) {
  let originalUrl = link;
  originalUrl = originalUrl.replace("/view?usp=sharing", "");
  const [, id] = originalUrl.split("file/d/");

  const baseUrl = "https://drive.google.com/uc?export=download&id=";
  console.log(`${id}`);
  return `${baseUrl}${id}`;
}

var files = [
  {
    type: "vid",
    url: fromDrive(
      "https://drive.google.com/file/d/1DeKj4Xy6MJw0XMt8Hykd_-zV7loz8zzH/view?usp=sharing"
    ),
    name: "Video 01",
    id: "1",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/12G0iue9d1KNJB0zl0WYT28pr2J2Wr8ma/view?usp=sharing"
    ),
    name: "Áudio 0.52",
    id: "9",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1gO8UeUrXbVo8LT-woLWyawReQ-DVJPu2/view?usp=sharing"
    ),
    name: "Áudio 1.36",
    id: "10",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1SfWP50WLmFmznE98hmj3ESNK0yYIMvGq/view?usp=sharing"
    ),
    name: "Áudio 1.37",
    id: "11",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1knvYOlBZDkIChWaeEnSrh2Z2mkEj8oZF/view?usp=sharing"
    ),
    name: "Áudio 1.49",
    id: "12",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1XTgH1uuvfL8ZO8y60uR7yhCsJ6K2fmFo/view?usp=sharing"
    ),
    name: "Áudio 3.47",
    id: "13",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1_QOt9FyHEXXI_j8AGAdoHzIOjw-3KbxR/view?usp=sharing"
    ),
    name: "Áudio 4.29",
    id: "14",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1a_IvF43a0neTxdW-6fgxrLSJjsmH6SI_/view?usp=sharing"
    ),
    name: "Áudio 5.07",
    id: "15",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1iIecXdjVY02QTYMKOB6m-ZYyI47Vo2kI/view?usp=sharing"
    ),
    name: "Áudio 7.03",
    id: "16",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1NpBWqtIza8GuX5QvGBlotKNQ_krSVKvk/view?usp=sharing"
    ),
    name: "Áudio 10.29",
    id: "17",
  },
  {
    type: "audio",
    url: fromDrive(
      "https://drive.google.com/file/d/1C_pjTJHCJ7XUdMmgivjRlWsP_NE4hhuo/view?usp=sharing"
    ),
    name: "Áudio 11.02",
    id: "18",
  },
  // Arquivos muito longos para serem carregados do Google Drive
  {
    type: "audio",
    url: "./files/Áudio grande amplificado.mp3",
    name: "Áudio grande amplificado",
    id: "19",
  },
  {
    type: "audio",
    url: "./files/2016, tortura com agressões físicas, psicológicas e ameaças.m4a",
    name: "Confissão, ameaças, agressões, rejeição filha, apropriação indébita, coerção e manipulação mental",
    id: "20",
  },
];
