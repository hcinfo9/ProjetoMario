const formulario = document.querySelector('.formulario');
const mascara = document.querySelector('.mascara-formulario');
const nossosServicos = document.querySelector('.nossos-servicos');




function chamaFormulario() {
   formulario.style.left = '50%';
   formulario.style.transform = 'translateX(-50%)';
   mascara.style.visibility = "visible";
}


function escondeFormulario() {
   mascara.style.visibility = "hidden";
   formulario.style.left = "-100%";
   formulario.style.transform = 'translateX(0%)';
}

function encerraServico() {
   nossosServicos.style.visibility = 'hidden';
   formulario.style.left = '50%';
   formulario.style.transform = 'translateX(-50%)';
   mascara.style.visibility = "visible";

   document.querySelector('.mascara-formulario').addEventListener('click', function () {
      window.location.href = 'index.html';
   });
}


