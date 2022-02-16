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




