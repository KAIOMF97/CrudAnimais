let listaDeAnimais = [];

function inserir() {
    const id = parseInt(document.getElementById ("id").value);
    const especie = document.getElementById("especie").value;
    const nome = document.getElementById("nome").value;
    const cor = document.getElementById("cor").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("pesoKg").value);
    const perigo = document.getElementById("nivelPerigo").value
    const alimentacao = document.getElementById("tipoAlimentacao").value;

    if (!id || !especie || !nome || !cor || !dataNascimento || !sexo || isNaN(peso) || !perigo || !alimentacao) {
        alert("Por favor, preencha todos os campos antes de inserir um animal.");
        return;
    }
    let animal = new Animais(id, especie, nome, cor, dataNascimento, sexo, peso, perigo, alimentacao);
    listaDeAnimais.push(animal);
    alert("Animal Inserido Com SUCESSO")
    limparCampos();
}


function listar() {
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

    if (listaDeAnimais.length === 0) {
        saida.innerHTML = "Nenhum animal cadastrado.";
        return;
    }
    
    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]

        saida.innerHTML +=
            (i + 1) + "º | " +
            "Id: " + animais.id + " - "
            "Especie: " + animais.especie + " - "+
            "Nome: " + animais.nome + " - " +
            "Cor: " + animais.cor + " - " +
            "Data Nascimento: " + animais.dataNascimento + " - " +
            "Sexo: " + animais.sexo + " - " +
            "Peso(Em KG): " + animais.pesoKg + " - " +
            "Nível de Perigo: " + animais.nivelPerigo + " - " +
            "Tipo de Alimentação: " + animais.alimentacao + "<br>";
            alert("O(s) Animal(is) foi(ram) Listado(s)")
           

    }
}

function limparCampos() {
    document.getElementById ("id").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("pesoKg").value = "";
    document.getElementById("nivelPerigo").value = "";
    document.getElementById("tipoAlimentacao").value = "";
}

function buscarEspecie() {
    let inputEspecie = document.getElementById("especie").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

    
    if (inputEspecie === "") {
        alert("Insira um animal na lista OU Preencha o campo ESPÉCIE para poder procurar os animais");
        return;  
    }

    let encontrado = false;

    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i];
        if (inputEspecie.toLowerCase() === listaDeAnimais[i].especie.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Id: " + animais.id + " - "
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
            encontrado = true; 
        }
    }

    
    if (!encontrado) {
        alert("Nenhum animal encontrado com a Espécie: " + inputEspecie);
    }
}


function buscarNome() {
    let inputNome = document.getElementById("nome").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

    if(inputNome === ""){
        alert("Insira um animal na lista OU Preencha o campo NOME para poder procurar os animais");
        return;  
    }

    let encontrado = false;

    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]
        if (inputNome.toLowerCase() === listaDeAnimais[i].nome.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
                encontrado = true;
        }
    }
    
    if (!encontrado) {
        alert("Nenhum animal encontrado com o Nome: " + inputNome);
    }
    }



function buscarCor() {
    let inputCor = document.getElementById("cor").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

    if(inputCor === ""){
        alert("Insira um animal na lista OU Preencha o campo COR para poder procurar os animais");
        return;  
    }

    let encontrado = false;

    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]
        if (inputCor.toLowerCase() === listaDeAnimais[i].cor.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Id: " + animais.id + " - "
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
                encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Nenhum animal encontrado com a Cor: " + inputCor);
    }
}


function buscarSexo() {
    let inputSexo = document.getElementById("sexo").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";


    let encontrado = false;

    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]
        if (inputSexo.toLowerCase() === listaDeAnimais[i].sexo.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Id: " + animais.id + " - "
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
                encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Nenhum animal encontrado com a Sexo: " + inputSexo);
    }
}

function buscarPerigo(){
    let inputPerigo = document.getElementById("nivelPerigo").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

   let encontrado = false;

    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]
        if (inputPerigo.toLowerCase() === listaDeAnimais[i].nivelPerigo.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Id: " + animais.id + " - "
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
                encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Nenhum animal encontrado com o Nível de Perigo: " + inputPerigo);
    }
}

function buscarAlimentacao(){
    let inputAlimentacao = document.getElementById("tipoAlimentacao").value;
    let saida = document.getElementById("outputListaAnimais");
    saida.innerHTML = "";

    if(inputAlimentacao === ""){
        alert("Insira um animal na lista OU Preencha o campo TIPO DE ALIMENTAÇÃO para poder procurar os animais");
        return;  
    }

    let encontrado = false;
    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animais = listaDeAnimais[i]
        if (inputAlimentacao.toLowerCase() === listaDeAnimais[i].alimentacao.toLowerCase()) {
            saida.innerHTML +=
                (i + 1) + "º | " +
                "Id: " + animais.id + " - "
                "Especie: " + animais.especie + " - " +
                "Nome: " + animais.nome + " - " +
                "Cor: " + animais.cor + " - " +
                "Data Nascimento: " + animais.dataNascimento + " - " +
                "Sexo: " + animais.sexo + " - " +
                "Peso(Em KG): " + animais.pesoKg + " - " +
                "Nível de Perigo: " + animais.nivelPerigo + " - " +
                "Tipo de Alimentação: " + animais.alimentacao + "<br>";
                encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Nenhum animal encontrado com o Tipo de Alimentação: " + inputAlimentacao);
    }
}