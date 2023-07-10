console.log("Another customer approaching");

fetch('https://randomuser.me/api/?results=1')
    .then(respose => respose.json())
    .then(data => console.log(data));

console.log('Our valued customer, please give me a moment while I get some info back from the Records Dept');