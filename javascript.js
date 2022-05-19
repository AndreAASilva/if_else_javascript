/*function resultado(){

    let res = document.getElementById("aulaifelse")

    
    res.innerHTML = "Selecionado uma pessoa Juridica"
    
}*/

//A função recebe o nome do botão (ONCLICK)
function resultado(){

    let res = document.getElementById("aulaifelse")//Aqui a variável foi criada com outro nome mas ela é identificada no HTML como o ID de onde o innerHTML será inscrito
    let res2 = "juridica"

    if(res2 === "juridica"){

        res.innerHTML="Ele é pessoa juridica<br>"
        res.innerHTML+="Ele tem CNPJ"

    }else{
        res.innerHTML="Ele é um pessoa física<br>"
        res.innerHTML+="Ele tem CPF"
    }
}

