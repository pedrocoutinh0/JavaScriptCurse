function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []

    resultado.innerHTML = ``

    function recebeEventoForm (evento){
        evento.preventDefault()

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura'); 
        const imc = peso.value/(altura.value ** 2)

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
         
        

        pessoas.push(pessoa)

        resultado.innerHTML += `${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}, ${imc} <br/>`
        
    }
    
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo()