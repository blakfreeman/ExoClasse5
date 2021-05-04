// ## EXO1

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

class Lieux {
  constructor(nom,personnes){  
    this.nom = nom;
    this.personnes = personnes;

}
}


let MolenGeek = new Lieux ("Molem",[]);
let snacknGeek = new Lieux ("Snack Sympa",[]);
let Maison = new Lieux("Maison",[]);
class Personne {
  constructor(nom, prenom,argent) {
    this.nom = nom;
    this.prenom = prenom;
    this.argent = argent;
  }
  seDeplacer(x,y) {

  }
}

let Anthony = new Personne ("Pemba", "Anthony",5000)

class Bus {
  constructor(personnes,caisse){
    this.personnes =personnes;
    this.caisse = caisse;
  }
    embarquer(x,y) {

    }
    
  
}


let bus = new Bus()

console.log(bus);

Maison.personnes.push(Anthony);
console.log(Maison);


//Exo1
class Lieu {
  constructor(nom , personnes){
      this.nom = nom,
      this.personnes = personnes
  }
}

let molengeek = new Lieu("Molengeek", []);
let snack = new Lieu("snack", []);
let maison = new Lieu("maison", []);

class Personne {
  constructor(nom, prenom, argent){
      this.nom = nom,
      this.prenom = prenom,
      this.argent = argent
  }
  seDeplacer(depart, arrivee, locomotion, gars){
      locomotion.embarquer(depart, arrivee, gars);
  }
}

let junior = new Personne("Silva", "Junior", 42);

class Bus {
  constructor(personnes, caisse){
      this.personnes = personnes,
      this.caisse = caisse
  }
  embarquer(depart, arrivee, gars){
      if (gars.argent >= 2.80) {
          gars.argent = gars.argent - 2.8;
          this.caisse = this.caisse + 2.8;
          depart.personnes.splice(depart.personnes.indexOf(gars), 1);
          arrivee.personnes.push(gars);
      } else {
          console.log("cheh tu n'as pas assez d'argent");
      }
  }
}

let stib = new Bus([], 50);
//08h00
maison.personnes.push(junior);
console.log(maison.personnes);
//08h30
junior.seDeplacer(maison, molengeek, stib, junior);
//08h45
console.log(molengeek.personnes);
//12h45
junior.seDeplacer(molengeek, snack, stib, junior);
console.log(snack.personnes);
//13h30
snack.personnes.splice(snack.personnes.indexOf(junior), 1);
molengeek.personnes.push(junior);
console.log(molengeek.personnes);
//17h10
junior.seDeplacer(molengeek, maison, stib, junior);
console.log(maison.personnes);

console.log(junior.argent.toFixed(2));
console.log(stib.caisse.toFixed(2));