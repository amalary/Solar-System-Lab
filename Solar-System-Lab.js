const solarSystem = [
{name: "Mercury", ringSystem: false, moons: [] },
{ name: "Venus", ringSystem: false, moons: [] },
{ name: "Earth", ringSystem: false, moons: ["TheMoon"] }, 
{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
{ name:"Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
{ name:"Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] }, 
{ name:"Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }]; 

console.log(solarSystem[0].ringSystem);  


// Question 1 

console.log(solarSystem[4].moons);

// Question 2 

console.log(solarSystem[7].moons[1]); 

// Question 3 



// Question 4 

solarSystem.push({name: 'Pluto', ringSystem:false, moons:["Charon"]}); 

console.log(solarSystem);

// Question 5 

solarSystem[2].diameter = '7,917.5'

console.log(solarSystem)


