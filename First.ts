// let ourTuple: readonly [string, number, boolean] = ["name", 12, true];
// let theC: string = "name";
// let sampleOne: number = 21;
// console.log(ourTuple);

const car: { name: string, model: string, year: number } = {
    name: "maruti",
    model: "89Ab",
    year: 2020
}

const car2={
    name:"Jaruti",
    model:'324',
    year:3002
}

const cars3:{name:string,model:string,year:number,owner?:string}={
    name:"BMW",
    model:'80A',
    year:2009
}

const nameAgeMap:{[index:string]:number}={
    "Sahsi":23,
    "Mashi":32
}
console.log(nameAgeMap)

let name2:string|number;

const jingalbell=(greet:string|number|boolean)=>{
    console.log(`Hello ${greet}`);
}

jingalbell(false)


function getTime():string{
    
    return "Helo"

}