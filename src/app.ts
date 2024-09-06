function reverse<T>(arr: readonly T[]): T[] { // readonly pour indiquer que la propriété n'est pas modifiable 
    return [...arr].reverse(); // On ne modifie pas le tableau original on crée un nouveau tableau 
}

class A {
    private a = 3; // propriété privée, la propriété n'est accessible que dans la classe, elle accessible dans les méthodes de la classe
    protected b = 4; // Un peu comme private mais accessible dans les classes qui héritent de la classe
    public c = 5; // accessible partout
    #d = 6; // propriété privé au sens propre du terme étant donné que private n'est pas vraiment privé 
    
    log() {
        console.log(this.a);
    }
}


class B extends A {
    log() {
        console.log(this.b);
    }
}

class C{
    constructor (
        public a: number
    ) {
        
    }
}

class Collection<T> {
    constructor (private items: T[]) {

    }

    first (): T | null {
        return this.items[0] || null;
    }

    add (item: T) {
        this.items.push(item)
        return this
    }

    isEqual(a: this) {
        return a.items === this.items 
    }
}

class SubCollection<T> extends Collection<T> {
    a = 3
}

const a = new SubCollection(["azer",2,3]);
const b = new Collection([1, 2, 3]);
// a.isEqual(b) 
// const b = a.first()

// const c = new C(5);
// const aInstance = new A();
// console.log(aInstance.c);

class Subscriber {
    on = (name: string, cb: Function) => {  // this ne réprésente plus l'intance de la classe Subscriber mais l'instance de HTMLInputElement
        
    }
}


/* Comparaison entre les classes */

class Point {
    x = 0;
    y = 0;
}

class Geometrie {
    x = 0 
    y = 0
    surface = 0 
}

function getX(p: Point) {
    return p.x
}
getX(new Geometrie());  // Doctyping getx s'attend à quelque chose qui a une proprité x et y

/* Abstraion */

abstract class Polygone {
    static 
    x = 0;
    y = 0;
    abstract surface (): number;
}

class Triangle extends Polygone { // la classe qui hérite d'une classe abstraite doit obligatoirement implémenter ses méthodes abstraites
    x = 2;
    y = 2;
    surface() {
        return this.x * this.y / 2
    }
}


/* Si l'on a des méthode qui reçoivent en paramètre des noms de classes et qui font certaines opérations il est intéréssant de créer
des types Instatiable... pour pouvoir correspondre les classes qui auraient des formes différentes mais qui ont des méthodes qu'on attend 
*/
class Rectangle {
    constructor (x:number, y:number) {

    }
    surface() {
        return 3
    }
}

type InstantiableShape = {
    new (x: number , y: number): {
        surface: () => number
    
    }
}

function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
    return new shapeType(x, y).surface() // On peut utiliser shapeType comme une fonction constructeur
}

shapeGenerator(Triangle, 2, 3)