let nomeHeroi = "Matheus";
let xpHeroi = 3500; // Exemplo de XP

let nivelHeroi;

if (xpHeroi >= 0 && xpHeroi <= 1000) {
     nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
     nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 3000) {
     nivelHeroi = "Prata";
} else if (xpHeroi >= 3001 && xpHeroi <= 4000) {
     nivelHeroi = "Ouro";
} else if (xpHeroi >= 4001 && xpHeroi <= 5000) {
     nivelHeroi = "Platina";
} else if (xpHeroi >= 5001 && xpHeroi <= 6000) {
     nivelHeroi = "Ascendente";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
     nivelHeroi = "Imortal";
} else {
     nivelHeroi = "Desconhecido";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
