
// - The game begins when the user clicks start. At that time the timers begin for countdowns on each of the attributes as well as for the age of the pet. A "hatch" animation gets the user started and prompts them to name their pet. 
// - Every 15 seconds, the hunger/sleepiness/boredom counters increment by 1. The user can click the "Play", "Lights out", or "Feed" buttons to initiate any of those actions and decrease the total on those attributes by 1. The attribute buttons can each only be clicked once every 10 seconds.
// - At 5 minutes the pet morphs/evolves into it's second stage/form and at 10 minutes it evolves into its final stage/form
// - If at any point the hunger/sleepiness/boredom counter reaches 10, the pet dies. The game can be restarted with a new pet at that point. 
// - If the user keeps the pet alive and healthy for 15 minutes, they win!
// -------Necessary Elements ----------------
//Buttons: start, input, play, feed, lightsout
//classes: game, pet 
//methods: gamestart, prompt for name, eat, play, sleep, age, timer, evolve, isDead gameover(win/lose)



//global vars/funcs
let initialAge = 0;
let initialHunger = 0;
let initialSleepy = 0;
let initialBoredom = 0;
let initialTime =0;

function gameTimer(){
timer = setInterval(function(){
        initialTime++;
        $('#timer').text(`timer: ${initialTime}s`)
}, 1000)
}
//pet class   
class Pet {
    constructor(name = "your pet") {
//var for objects/attributes
    //name (user input)
    this.name = name; 
    //age 
    this.age = initialAge;
    //hunger 
    this.hunger = initialHunger;
    //tiredness 
    this.sleepy = initialSleepy;
    //boredom
    this.bored = initialBoredom;
    }
//methods    
    evolvePet() {
        //evolution animation? evolve every 5 minutes, age ++ every minute
        //Could I make and array of pet attributes and details and move to the next array item eith each evolution? Do research...
        if (initialAge===5) {
            $("#petGraphic").replaceWith("<img src='http://pixelartmaker.com/art/899a587bd92292b.png'>")
            alert('morph1')
            //sub trapinch picture for the vibrava picture
        }if (initialAge===10) {
            $("#petGraphic").replaceWith("<img src='http://pixelartmaker.com/art/0134c80d93a76f2.png'>")
            alert('morph2')
            //sub vibrava picture for the flygon picture
        }
    
    }
}


//})//time starts for age and attribute intervals
//hatch/wakeup animation
$('#startButton').click(function(){
gameTimer();
const newPet = new Pet(getPetName());
howBored()
howHungry()
howOld()
howSleepy()
newPet.evolvePet()
console.log(newPet.age)
console.log(newPet.bored)
console.log(newPet.hunger)
console.log(newPet.sleepy)
})

function gameOver(){

}
function getPetName() {
    name = prompt(`What will you call your pet?`)
    //return name; 
    const $namePlace = $('#actionButtons')
    const $displayName = $(`<div>"My pet is named ${name}"</div>`)
    $displayName.addClass = $('name')
    $namePlace.append($displayName);
    console.log(name)
};
    //incrementing functions 
function howOld(){
    if (initialTime >=0){
        setInterval(function(){
            initialAge++
            $('#age').text(`Age: ${initialAge}`)
        }, 60000)
    }
}

    //hunger
function howHungry(){
        if (initialHunger <10) {
            setInterval(function(){
                initialHunger++
                $('#hungry').text(`Hunger: ${initialHunger}`)
            },15000);
        }else{
        gameOver();
        return `Sad day! ${Pet.name} has died of hunger!`;
        }
}
//sleep - tired 
function howSleepy(){
        if (initialSleepy <10) {
            setInterval(function(){
                initialSleepy++
                $('#sleepy').text(`Sleepiness: ${initialSleepy}`)
            },15000)
        }else{
        gameOver();
        return `Sad day! ${Pet.name} has died of fatigue!`;
        }   
}
//play - bored 
function howBored() {
        if (initialBoredom <10) {
            setInterval(function(){
                initialBoredom++
                $('#bored').text(`Boredom: ${initialBoredom}`)
            },15000);
        }else{
        gameOver();
        return `Sad day! ${Pet.name} has died of boredom!`;
        }
}
//buttons (feed, sleep, play) // <<<<<Look into a way to turn the button off for 10s after each click

$('#hungerButton').click(function(){
    if (initialHunger>0){
    //nom animation
        initialHunger--;
        $('#hungry').text(`Hunger: ${initialHunger}`)
    //happy animation
        return `${this.pet} has been fed and had their hunger reduced by one!`;
    }
});

$('#sleepButton').click(function(){
    if (initialSleepy>0){
    //darken screen for 3s
        initialSleepy--;
        $('#sleepy').text(`Sleepiness: ${initialSleepy}`)
    //happy animation
        return `${this.pet} has taken a nap and had their sleepiness reduced by one!`;
    }
});

$('#playButton').click(function() {
    if (initialBoredom >0){
    //play animation
        initialBoredom--;
        $('#bored').text(`Boredom: ${initialBoredom}`)
    //happy animation
        return `${this.pet} had fun playing and had their boredom reduced by one!`;
    }
});
 