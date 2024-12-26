let nomeHeroi = "Matheus";
let xpHeroi = 500;

let nivelHeroi = "";

switch (xpHeroi) {
     case xpHeroi >= 0 && xpHeroi <= 1000:
          nivelHeroi = "Ferro";
          break;
     case xpHeroi >= 1001 && xpHeroi <= 2000:
          nivelHeroi = "Bronze";
          break;
     case xpHeroi >= 2001 && xpHeroi <= 3000:
          nivelHeroi = "Prata";
          break;
     case xpHeroi >= 3001 && xpHeroi <= 4000:
          nivelHeroi = "Ouro";
          break;
     case xpHeroi >= 4001 && xpHeroi <= 5000:
          nivelHeroi = "Plantina";
          break;
     case xpHeroi >= 5001 && xpHeroi <= 6000:
          nivelHeroi = "Ascendente";
          break;
     case xpHeroi >= 6001 && xpHeroi <= 7000:
          nivelHeroi = "Imortal";
          break;
     default:
          nivelHeroi = "Desconhecido";
}


console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
