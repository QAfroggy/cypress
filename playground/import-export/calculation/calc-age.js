export default function (birthYear,thisYear){
    return thisYear - birthYear
};

export function fullInfo (fullName, age){

    return 'my name is -->  ' + fullName + ' my age is --> '+ age
   
};

export function numRandom(num){
    return num.Math.floor((Math.random()*100000) + 1);
}