
class Pokemon {
    constructor(id, nombre, tipo, vida, ataque) {
        this.id = id //Mi propiedad id es igual al id del parametro
        this.nombre = nombre
        this.tipo = tipo
        this.vida = vida
        this.ataque = ataque
        this.nivel = 1
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y te estoy saludando`)
    }

}

export class Pikachu extends Pokemon { //Relacion es un
    constructor(id, nombre, tipo, vida, ataque, atkImpactrueno) {
        super(id, nombre, tipo, vida, ataque) //Llamo al constructor de la superclase (clase padre)
        this.atkImpactrueno = atkImpactrueno //Atributo propio de la clase
    }

    impactrueno() {
        console.log(`${this.nombre} lanzo impactrueno con daño de ${this.atkImpactrueno}`)
    }
}

//export default Pikachu //Esto si tengo un solo elemento a exportar