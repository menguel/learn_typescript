"use strict";
function reverse(arr) {
    return [...arr].reverse(); // On ne modifie pas le tableau original on crée un nouveau tableau 
}
class A {
    a = 3; // propriété privée, la propriété n'est accessible que dans la classe, elle accessible dans les méthodes de la classe
    b = 4; // Un peu comme private mais accessible dans les classes qui héritent de la classe
    c = 5; // accessible partout
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
class C {
    a;
    constructor(a) {
        this.a = a;
    }
}
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    first() {
        return this.items[0] || null;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    isEqual(a) {
        return a.items === this.items;
    }
}
class SubCollection extends Collection {
    a = 3;
}
const a = new SubCollection(["azer", 2, 3]);
const b = new Collection([1, 2, 3]);
// a.isEqual(b) 
// const b = a.first()
// const c = new C(5);
// const aInstance = new A();
// console.log(aInstance.c);
class Subscriber {
    on = (name, cb) => {
    };
}
/* Comparaison entre les classes */
class Point {
    x = 0;
    y = 0;
}
class Geometrie {
    x = 0;
    y = 0;
    surface = 0;
}
function getX(p) {
    return p.x;
}
getX(new Geometrie()); // Doctyping getx s'attend à quelque chose qui a une proprité x et y
/* Abstraion */
class Polygone {
    static x = 0;
    y = 0;
}
class Triangle extends Polygone {
    x = 2;
    y = 2;
    surface() {
        return this.x * this.y / 2;
    }
}
/* Si l'on a des méthode qui reçoivent en paramètre des noms de classes et qui font certaines opérations il est intéréssant de créer
des types Instatiable... pour pouvoir correspondre les classes qui auraient des formes différentes mais qui ont des méthodes qu'on attend
*/
class Rectangle {
    constructor(x, y) {
    }
    surface() {
        return 3;
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y).surface(); // On peut utiliser shapeType comme une fonction constructeur
}
shapeGenerator(Triangle, 2, 3);
