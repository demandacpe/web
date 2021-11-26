// transforma links de compartilhamento do drive em links para embed de arquivos
function parseUrlFromGoogleDrive(link) {
  let originalUrl = link;
  originalUrl = originalUrl.replace("/view?usp=sharing", "");
  const [, id] = originalUrl.split("file/d/");

  const baseUrl = "https://drive.google.com/uc?export=download&id=";

  return `${baseUrl}${id}`;
}

function parseUrlFromDropbox(link) {
  return link.replace("dl=0", "raw=1");
}

var files = [
  {
    type: "vid",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/5jetz4pn9bv95xp/1%20-%20Prepara%C3%A7%C3%A3o%20para%20tentar%20criar%20falsa%20situa%C3%A7%C3%A3o%20de%20aliena%C3%A7%C3%A3o%20parental?dl=0"
    ),
    name: "1 - Preparação para tentar criar falsa situação de alienação parental",
    id: "1",
  },
  {
    type: "vid",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/8yjatp7aao022jv/2%20-%20Utiliza%C3%A7%C3%A3o%20da%20PMMG%20para%20tentar%20coagir%20a%20irm%C3%A3%20do%20representante%20e%20os%20demais%20familiares.mp4?dl=0"
    ),
    name: "2 - Utilização da PMMG para tentar coagir a irmã do representante e os demais familiares",
    id: "2",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/95azw1jyzeyn2vq/3%20-%20%C3%81udio%20de%202016%20com%20agress%C3%B5es%2C%20viol%C3%AAncias%2C%20desest%C3%ADmulos%2C%20tentativa%20de%20aliena%C3%A7%C3%A3o%20parental%20da%20irm%C3%A3%20do%20Autor%20com%20agress%C3%A3o%20do%20Autor%20e%20da%20fam%C3%ADlia%20dele.mp4?dl=0"
    ),
    name: "3 - Áudio de 2016 com agressões, violências, desestímulos, tentativa de alienação parental da irmã do Autor com agressão do Autor e da família dele",
    id: "3",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/3pdutcttlvz3ucw/4%20-%20%C3%81udio%202016%20-%20Agress%C3%B5es%20f%C3%ADsicas%2C%20psicol%C3%B3gicas%2C%20xingamentos%20e%20humilha%C3%A7%C3%B5es%20%28escutar%20principalmente%20a%20partir%20de%201%3A05%3A58%29.mp3?dl=0"
    ),
    name: "4 - Áudio 2016 - Agressões físicas, psicológicas, xingamentos e humilhações (escutar principalmente a partir de 1:05:58)",
    id: "4",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/y8amfh389i5jc2m/5%20-%20Confiss%C3%B5es%3A%20N%C3%A3o%20gosta%20da%20irm%C3%A3%20do%20Autor%20e%20vai%20se%20vingar%20dela%20em%20at%C3%A9%2018%20anos%2C%20pois%20vai%20agir%20com%20temperan%C3%A7a%20e%20jamais%20esquecer%C3%A1%20de%20se%20vingar%3B%20N%C3%A3o%20quer%20as%20filhas%20vinculadas%20ou%20parecidas%20com%20a%20m%C3%A3e.mpeg?dl=0"
    ),
    name: "5 - Confissões: Não gosta da irmã do Autor e vai se vingar dela em até 18 anos, pois vai agir com temperança e jamais esquecerá de se vingar; Não quer as filhas vinculadas ou parecidas com a mãe",
    id: "5",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/sp5631jeyflmw8g/6%20-%20Amea%C3%A7as%20para%20que%20a%20irm%C3%A3%20do%20Autor%20n%C3%A3o%20entre%20com%20determinados%20fatos%20no%20processo%20de%20div%C3%B3rcio%20e%20tentativa%20de%20aliena%C3%A7%C3%A3o%20parental%20da%20m%C3%A3e%20com%20total%20imposi%C3%A7%C3%A3o%20da%20vontade%20do%20Representado.mpeg?dl=0"
    ),
    name: "6 - Ameaças para que a irmã do Autor não entre com determinados fatos no processo de divórcio e tentativa de alienação parental da mãe com total imposição da vontade do Representado",
    id: "6",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/r6h6o2f7jgm29j3/7%20-%20Auto-vangloria%C3%A7%C3%A3o%20do%20Representado%20e%20minora%C3%A7%C3%A3o%20da%20irm%C3%A3%20do%20Autor.ogg?dl=0"
    ),
    name: "7 - Auto-vangloriação do Representado e minoração da irmã do Autor",
    id: "7",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/jkwgosz0ng6lhk2/8%20-%20Proibi%C3%A7%C3%A3o%20pelo%20Representado%20de%20que%20a%20irm%C3%A3%20do%20Autor%20contasse%20a%20hist%C3%B3ria%20real%20para%20as%20pessoas.mpeg?dl=0"
    ),
    name: "8 - Proibição pelo Representado de que a irmã do Autor contasse a história real para as pessoas",
    id: "8",
  },
  {
    type: "audio",
    url: parseUrlFromDropbox(
      "https://www.dropbox.com/s/n1o5t1nv47k0qhs/9%20-%20Viol%C3%AAncia%20psicol%C3%B3gica%2C%20desvincula%C3%A7%C3%A3o%20com%20a%20filha%20Sophia%2C%20minimiza%C3%A7%C3%A3o%20da%20irm%C3%A3%20do%20Autor%20e%20prepara%C3%A7%C3%A3o%20da%20vingan%C3%A7a.mpeg?dl=0"
    ),
    name: "9 - Violência psicológica, desvinculação com a filha Sophia, minimização da irmã do Autor e preparação da vingança",
    id: "9",
  },
];
