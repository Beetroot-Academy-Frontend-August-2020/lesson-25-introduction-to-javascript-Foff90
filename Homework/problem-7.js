let memory = prompt('Enter the amount of memory you have in GB');
let files = memory/0.82;
console.log(`${files.toFixed(0)} (820MB) files can be stored at this flash drive`);

//lade till .tofixed(0) för att få ett svar utan decimaler