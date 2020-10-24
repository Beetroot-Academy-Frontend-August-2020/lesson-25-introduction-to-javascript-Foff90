km = parseInt(prompt('Enter the distance between Stockholm and Uppsala'));
time = parseInt(prompt('In how many hours do you want to reach Uppsala by your bicycle?'));
speed = km/time;
console.log(`You will need to cycle in ${speed}km/hour to reach Uppsala on time`);