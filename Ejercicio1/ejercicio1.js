const form = document.getElementsByTagName('form')[0];
const inputs = document.getElementsByTagName('input');
const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

   
function validateForm(event){
for(let i = 0; i < inputs.length; i++){
    event.preventDefault();
        let leter = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        let valor = inputs[i].value;

        if(!leter.test(valor)){
            inputs[i].style.backgroundcolor = "red";
        }else{
            inputs[i].style.backgroundcolor = "";
        }
    }
};

form.addEventListener('submit', (event) => validateForm(event));
