document.addEventListener('DOMContentLoaded', () => {
    fetch('/data')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifique se os dados estão sendo retornados corretamente
        const container = document.getElementById('data-container');
        container.innerHTML = `
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Telefone:</strong> ${data.telefone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Cidade:</strong> ${data.cidade}</p>
          <p><strong>Categoria:</strong> ${data.categoria}</p>
          <p><strong>Website:</strong> <a href="http://${data.website}">${data.website}</a></p>
        `;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  