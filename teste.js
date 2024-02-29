const url = 'https://www.bet365.com/#/AVR/B146/R^1/';

fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elemento = doc.querySelector('span.vrr-HTHTeamDetails_Score');
    if (elemento) {
      const valor = elemento.textContent.trim();
      console.log(valor);
    } else {
      console.log('Elemento não encontrado');
    }
  })
  .catch(error => {
    console.error('Erro ao acessar a página:', error);
  });
