let pagina = document.getElementById('pagina')
function entrar() {
  pagina.innerHTML =
    '<h1>Seja bem vindo! \n Escolha uma das opçoes do menu acima!</h1>'
}
function verificarLogin() {
  let usuario = document.getElementById('usuario').value
  let senha = document.getElementById('senha').value
  $.ajax({
    url: 'http://localhost:8484/usuario/' + usuario,
    type: 'get',
    data: {
      usuario: usuario,
    },
    beforeSend: function () {
      $('#mensagem').html('Consultando dados...')
    },
    success: function (msg) {
      $('#mensagem').html(' ')
      if (msg == null) {
        alert('Login não encontrado!')
      } else if (msg.senha == senha) {
        entrar()

        if (msg.nivel == 1) {
          document.getElementById('mainNav').innerHTML = `
          <div class="container menu">
          <div class="item-pag">
            <a class="navbar-brand" id="logo"  onclick="carregarPag('./Produto/index.html')" href="#">
              Produto
            </a>
          </div>
          <div class="item-pag">
            <a class="navbar-brand" id="logo"   onclick="carregarPag('./GrupoDeProduto/index.html')" href="#">
              Grupo de Produto
            </a>
          </div>
          <div class="item-pag">
            <a class="navbar-brand" id="logo"   onclick="carregarPag('./Movimentacao/index.html')" href="#">
              Movimentação
            </a>
          </div>
          <div class="item-pag">
            <a class="navbar-brand" id="logo"  onclick="carregarPag('./Secao/index.html')" href="#">
              Seção
            </a>
          </div>
          <div class="item-pag">
            <a class="navbar-brand" id="logo"  onclick="carregarPag('./Usuario/index.html')" href="#">
              Usuário
            </a>
          </div>
          <button class="btn btn-danger sair" onclick="sair()">Sair</button>
        </div>`
        } else {
          document.getElementById('mainNav').innerHTML = `
          <div class="container menu">
          <div class="item-pag">
            <a class="navbar-brand" id="logo"  onclick="carregarPag('./Produto/index.html')" href="#">
              Produto
            </a>
          </div>
          <div class="item-pag">
            <a class="navbar-brand" id="logo" onclick="carregarPag('./Movimentacao/index.html')" href="#">
              Movimentação
            </a>
          </div>
          <button class="btn btn-danger sair" onclick="sair()">Sair</button>
        </div>`
        }
      } else {
        alert('SENHA ERRADA!')
      }
    },
    error: function (msg) {
      alert('Login não encontrado!' + msg[i].mensagem)
    },
  })
}

function carregarPag(pag) {
  $('#pagina').load(pag)
}
function sair() {
  document.location.href = '/'
}
