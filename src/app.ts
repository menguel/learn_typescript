const a: string = "hello world"
const n: number = 10
const b: boolean = true
const d: null = null
const arr: any[] = ['aze', 'aa', 3]
const user: {firstname: string, [key: string] : string} = {firstname: 'John', lastname: 'Doe'} // Pour utiliser une infinité de clé 
const data : Date = new Date(); // Pour de type spécifique 

const cb: (e: MouseEvent)=> void = (e: MouseEvent) : number => { // typage de fonctions +
    return 3 
}

// const compteur = document.querySelector('#compteur') as HTMLButtonElement // Pour attribuer un type à Element 

function printId(id: number | string) : void { // usage de l'union des types 
    console.log(id.toString());
}


const compteur = document.querySelector('#compteur')
let i = 0; // let pour initialier des variable qui vont être incrémentées

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span') 
    if (span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment)


/* Type Narrowing */

function printId2(id: number | string) : void {
    if (typeof id === "number") {
        console.log((id * 3).toString()); // Tailwin dévine directement que l'on traite avec des nombres
    } else {
        console.log(id.toUpperCase());
    }
}

/* Alias et Generics */

type User = {firstname: string, lastname: string} // On crée un type user au préalable 
type DateString = string
type Id = number | string

const date: DateString = "2022-01-01"
const id1 : Id = 123
const users : User = {firstname: "John", lastname: "Doe"}


function identity<ArgType>(arg : ArgType): ArgType { // Définir le type d'élément à retourner en fonction du paramètre 
    return arg
}

function fisrt<Type>(arg: Type[]): Type { // Définir le type d'élément à retourner en fonction du paramètre
    return arg[0]
}

function consoleSize <Type extends {length: number}>(arg: Type): Type { // extend est une contrainte, elles permettent de forcer le type de retour. Dans ce cas l'élément de retour dois avoir un attribut length
    console.log(arg.length);
    return arg
}

type Username = User['firstname'] // Le type hérite d'un autre type. si l'on modifie le type de firtname celui de Username sera aussi modifier 
type Usernames = keyof User // Hérite de tout les types des clés de User

const aa1 = consoleSize([1,2,3])

const a1 = identity<number>(3);