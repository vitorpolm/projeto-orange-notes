/* MENU LATERAL FUNÇÃO */

$('.btnAbre').click(function(){
    $('.menuLateral').toggleClass('exibe');
});

$('.btnFecha').click(function(){
    $('.menuLateral').toggleClass('exibe');
});


/* VALIDAÇÃO PARA LOGIN */
function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('email')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "orangenotes@orange.com" && senha == "orangenotes") {
      window.location = "index.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }