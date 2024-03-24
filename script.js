var fp = false;

function com() {
    let hr = prompt("Qual é a hora?");
    if (hr !== "00" && hr !== "07" && hr !== "14" && hr !== "21") {
        let odd = prompt("Alguma odd over 2,5 maior que 2,59?"); //odd de quebra
        if (odd.toLowerCase() !== "sim") {
            let over25 = prompt("O over 2,5 é igual a 2?"); //falso favorito
            if (over25.toLowerCase() === "sim") {
                let over35 = prompt("O over 3,5 é maior que 3,60?");
                if (over35.toLowerCase() === "sim") {
                    fp = true;
                } else {
                    fp = false;
                }
            } else {
                fp = false;
            }

            let casaMenor2ForaMaior4 = prompt("A casa é menor ou igual que 2 e a fora é menor que 4,5?");
            if (casaMenor2ForaMaior4.toLowerCase() === "sim" && !fp) {
                window.alert("Entrada na quarta casa para over");
            } else {
                window.alert("Entrada na sétima casa");
            }
        } else {
            window.alert("Cancela entrada");
        }
    } else {
        window.alert("Cancela entrada");
    }
}
