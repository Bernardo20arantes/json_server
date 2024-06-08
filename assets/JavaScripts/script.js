document.addEventListener('DOMContentLoaded', () => {
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Verifique se os dados estão sendo retornados corretamente
      const container = document.getElementById('data-container');
      let userHTML = '';
      data.usuarios.forEach(usuario => {
        userHTML += `
          <div class="usuario">
            <p><strong>ID:</strong> ${usuario.id}</p>
            <p><strong>Nome:</strong> ${usuario.nome}</p>
            <p><strong>Telefone:</strong> ${usuario.telefone}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Cidade:</strong> ${usuario.cidade}</p>
          </div>
        `;
      });
      container.innerHTML = userHTML;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
