//Função para inserir o número no campo
function inserir(valor){
    var valor1 = document.getElementById("numero1").value;
    var valor2 = document.getElementById("numero2").value;

    if(valor1 == ""){
        document.getElementById("numero1").value = valor;
    }else if (valor2 == ""){
        document.getElementById("numero2").value = valor;
    }
}

// Função para corrigir os números
function corrigir(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}

// Função para votar
function votar(){
    var valor1 = parseInt(document.getElementById("numero1").value);
    var valor2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("final").innerHTML="";
    var candidato = (valor1 * 10)+valor2;
    if(sessionStorage.getItem(candidato) != null){
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato,votos);
    }else{
        sessionStorage.setItem(candidato,1);
    }
    //alert("voto confirmado no candidato cujo o número eh " + candidato);
    document.getElementById("final").innerHTML += "FIM";
    const audio = new Audio('audio.mp3');
    audio.play();

    document.getElementById("numero1").style.display = 'none';
    document.getElementById("numero2").style.display = 'none';

}

// função para resultado
function resultado(){
    document.getElementById('resultado').innerHTML="";
    for(i=0;i<100;i++){
        if(sessionStorage.getItem(i) != null){
            //alert(i);
            document.getElementById("resultado").innerHTML += "Candidato " +i+ " tem "
            +sessionStorage.getItem(i)+ " votos<hr/>";
        }
    }
} 