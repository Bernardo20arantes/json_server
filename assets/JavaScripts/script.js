document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  fetch('/data')
    .then(response => {
      console.log('Response received:', response);
      return response.json();
    })
    .then(data => {
      console.log('Data parsed:', data);
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
