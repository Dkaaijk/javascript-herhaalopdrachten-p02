/*opdracht 1
let salary = 2000;
let raise = 0.05;
let result1 = document.querySelector('.salaryRaise');

let result = salary * raise;
result1.textContent = result; //weergeven op de webpagina

//opdracht 2
let price = 400000;
let percentage = 0.025;
let result3 = document.querySelector('.newPrice');

let result2 = price * percentage;
result3.textContent = result2; // weergeven op de webpagina

//opdracht 3
let priceJas = 100;
let btw = 1.21;
let newPrice = document.querySelector('.priceIncBtw');

let newPrice1 = priceJas * btw;
newPrice.textContent = newPrice1; //weergeven op de webpagina

//opdracht 4
let person = prompt();

if (person == 'Docent') {
    console.log('jij bent een docent');
}
else if (person == 'Student') {
    console.log('Jij bent een student');
}
else if (person == 'Directeur') {
    console.log('Jij bent een directeur');
}
else {
    console.log('Jij bent gek!');
}

// oprdacht 5
let BTC = 35050;
let ETH = 1887;
let XRP = 0.7;
let DOG = 0.07;
let SOL = 40.26;

let amount = prompt('vul een bedrag in dollar in');
let dollar = Number(amount);
let coin = prompt('vul in welke coin je wilt bekijken');

if(coin == 'BTC'){
    let result = dollar / BTC
    console.log('het bedrag in Bitcoin is:', result);

} else if(coin == 'ETH'){
    result = dollar / ETH
    console.log('het bedrag in Ethereum is:', result);

} else if(coin == 'XRP'){
    result = dollar / XRP
    console.log('het bedrag in XRP is:', result);

} else if(coin == 'DOG'){
    result = dollar / DOG
    console.log('het bedrag in Dogecoin is:', result);

} else if(coin == 'SOL'){
    result = dollar / SOL
    console.log('het bedrag in Solana is:', result);
}

//opdracht 6

for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i === 9){
        console.log('Einde programma');
    }
    
}*/

// opdracht 7

let x = 0;

while (x <= 20) {
    x++;
    console.log('ik zit op school');
    
    if(x > 10) {
        continue;
    }
    console.log('ik ben vrij');

    }







