//Bolt: o super cão, Livre, Aventura (Luly)
//Barbie: moda e magia, Livre, Ficção (Duda)

//Harry Potter e o Cálice de Fogo, 10, Ficção (João)
//Shrek, 10, Animação (Double)

//Velocipastor, 12, Drama (Fernando)
//Gente grande, 12, Comédia (Matheus)

//O Zoológico de Varsóvia, 14, Drama (Duda)
//RebelMoon, 14, Tortura (Fernando)

//Sorria, 16, Terror (Thiago)
//Parasita, 16, Drama (Luly)

//Alien: o 8º passageiro, 18, Suspense (Thiago)
//Monty Python: em busca do Cálice Sagrado, 18, Monty Python (Matheus)

//Imagens: 95 x 145 px

let checkboxes = [];
let generoCheckboxes = [];
let numCheckboxes = 6;
let imagens = [];

let classIndicativa;

function setup() {
  createCanvas(600, 400);

  CarregaImagens();
  CheckboxesIndicacao();
  CheckboxesGenero();
}

function draw() {
  background(229, 217, 242);

  CriaClassificaçãoIndicativa();
  geraFilmes(classIndicativa);
}

function geraFilmes(classificacao) {
  fill(color(165, 148, 249))
  textAlign(CENTER, CENTER)
  textSize(28);
  for (let i = 0; i < numCheckboxes; i++) {
    campoAventura.hide();
    campoFiccao.hide();
    campoAnimacao.hide();
    campoDrama.hide();
    campoComedia.hide();
    campoTortura.hide();
    campoTerror.hide();
    campoSuspense.hide();
    campoMontyPython.hide();

    // Livre
    if (classificacao == 0) {
      campoFiccao.show();
      campoAventura.show();
      if (campoAventura.checked() && campoFiccao.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoAventura.checked()) {
        image(bolt, width/2-70, 10);
        text("Bolt: o super cão", width/2, height/2+40);
      } else if (campoFiccao.checked()) {
        image(barbie, width/2-70, 10);
        text("Barbie: moda e magia", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }

    // 10 anos
    if (classificacao == 1) {
      campoFiccao.show();
      campoAnimacao.show();
      if (campoFiccao.checked() && campoAnimacao.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoFiccao.checked()) {
        image(harry, width/2-70, 10);
        text("Harry Potter e o Cálice de Fogo", width/2, height/2+40);
      } else if (campoAnimacao.checked()) {
        image(shrek, width/2-70, 10);
        text("Shrek", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }

    // 12 anos
    if (classificacao == 2) {
      campoDrama.show();
      campoComedia.show();
      if (campoDrama.checked() && campoComedia.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoDrama.checked()) {
        image(velocipastor, width/2-70, 10);
        text("Velocipastor", width/2, height/2+40);
      } else if (campoComedia.checked()) {
        image(gente, width/2-70, 10);
        text("Gente Grande", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }

    // 14 anos
    if (classificacao == 3) {
      campoDrama.show();
      campoTortura.show();
      if (campoDrama.checked() && campoTortura.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoDrama.checked()) {
        image(varsovia, width/2-70, 10);
        text("O Zoológico de Varsóvia", width/2, height/2+40);
      } else if (campoTortura.checked()) {
        image(rebel, width/2-70, 10);
        text("RebelMoon", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }

    // 16 anos
    if (classificacao == 4) {
      campoTerror.show();
      campoDrama.show();
      if (campoTerror.checked() && campoDrama.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoTerror.checked()) {
        image(sorria, width/2-70, 10);
        text("Sorria", width/2, height/2+40);
      } else if (campoDrama.checked()) {
        image(parasita, width/2-70, 10);
        text("Parasita", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }

    // 18 anos
    if (classificacao == 5) {
      campoSuspense.show();
      campoMontyPython.show();
      if (campoSuspense.checked() && campoMontyPython.checked()) {
        text("Escolha somente um gênero", width/2, height/2+40);
      } else if (campoSuspense.checked()) {
        image(alien, width/2-70, 10);
        text("Alien: o 8º passageiro", width/2, height/2+40);
      } else if (campoMontyPython.checked()) {
        image(monty, width/2-70, 10);
        text("Monty Python: em busca do Cálice Sagrado", width/2, height/2+40);
      } else {
        text("Escolha um gênero", width/2, height/2+40);
      }
    }
  }
}

function CarregaImagens() {
  imgLivre = loadImage("livre.png");
  img10 = loadImage("10.png");
  img12 = loadImage("12.png");
  img14 = loadImage("14.png");
  img16 = loadImage("16.png");
  img18 = loadImage("18.png");
  
  shrek = loadImage("shrek.jpg");
  gente = loadImage("gente.jpg");
  harry = loadImage("harry.jpg");
  monty = loadImage("monty.jpg");
  rebel = loadImage("rebel.jpeg");
  sorria = loadImage("sorria.png");
  bolt = loadImage("bolt.png");
  parasita = loadImage("parasita.png");
  alien = loadImage("alien.png");
  barbie = loadImage("barbie.jpg");
  velocipastor = loadImage("velocipastor.png");

  imagens = [imgLivre, img10, img12, img14, img16, img18];
}

function CheckboxesIndicacao() {
  for (let i = 0; i < numCheckboxes; i++) {
    // Usando uma função anônima regular para garantir que 'this' se refira à checkbox
    checkboxes[i] = createCheckbox("", false);
    checkboxes[i].changed(function () {
      mudaCheckboxClassificacao(i, this); // Passa o índice e a checkbox clicada
    });
  }
}

function CheckboxesGenero() {
  // Cria as checkboxes dos gêneros e as esconde
  campoAventura = createCheckbox("Aventura", false);
  campoFiccao = createCheckbox("Ficção", false);
  campoAnimacao = createCheckbox("Animação", false);
  campoDrama = createCheckbox("Drama", false);
  campoComedia = createCheckbox("Comédia", false);
  campoTortura = createCheckbox("Tortura", false);
  campoTerror = createCheckbox("Terror", false);
  campoSuspense = createCheckbox("Suspense", false);
  campoMontyPython = createCheckbox("Monty Python", false);
  
  generoCheckboxes = [campoAventura,campoFiccao,campoAnimacao,campoDrama,campoComedia,campoTortura,campoTerror,campoSuspense,campoMontyPython];
}

function mudaCheckboxClassificacao(index, checkbox) {
  // Desmarca todas as checkboxes
  for (let i = 0; i < numCheckboxes; i++) {
    checkboxes[i].checked(false);
  }

  // Marca apenas a que foi clicada
  checkbox.checked(true); // Marca a checkbox que foi clicada

  // Aqui você pode realizar ações com base no índice da checkbox
  SelecionaClassificacao(index);
}

function CriaClassificaçãoIndicativa() {
  // Posicionando as imagens e checkboxes
  let x = 90;
  let y = 280;

  for (let i = 0; i < checkboxes.length; i++) {
    image(imagens[i], x, y);
    checkboxes[i].position(x + 75, y + 110);
    x += imgLivre.width + 20;
  }
}

function desmarcaGenero(){
  for (let i = 0; i < generoCheckboxes.length; i++) {
    generoCheckboxes[i].checked(false);
  }
}

function SelecionaClassificacao(index) {
  if (index === 0) {
    // Executa algo se a classificação for Livre
    desmarcaGenero();
    classIndicativa = index;
  } else if (index === 1) {
    // Executa algo se a classificação for 10 anos
    desmarcaGenero();
    classIndicativa = index;
  } else if (index === 2) {
    // Executa algo se a classificação for 12 anos
    desmarcaGenero();
    classIndicativa = index;
  } else if (index === 3) {
    // Executa algo se a classificação for 14 anos
    desmarcaGenero();
    classIndicativa = index;
  } else if (index === 4) {
    // Executa algo se a classificação for 16 anos
    desmarcaGenero();
    classIndicativa = index;
  } else if (index === 5) {
    // Executa algo se a classificação for 18 anos
    desmarcaGenero();
    classIndicativa = index;
  } else {
    // Caso padrão
    console.log("Classificação desconhecida.");
  }
}
