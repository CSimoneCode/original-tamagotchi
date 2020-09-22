console.log("hello") 
//universal vars/funcs
const initialAge = 0;
const initialHunger = 0;
const initialSleep = 0;
const initialHappy = 0;

//game class
class Game {
    constructor(){
//var for objects
    //pet(s)
    this.pet = getPetName();
//methods for objects 
    //user prompts
    getPetName() {
        name = prompt(`What will you call ${this.pet}`)
        return name; 
    }
    //display stats
    //buttons (feed, sleep, play)

    //start game
    startNewGame() {

    }
    //parameters for win/lose (Want an alert for game over)
}


//pet class   
class Pet {
    constructor(name = "your pet", type = "dragon"){
//var for objects/attributes
    //name (user input)
    this.name = name; 
    //type (give list of options)
    this.type = type; 
    //age 
    this.age = howOld();
    //hunger 
    this.hunger = howHungry();
    //tiredness 
    this.tired = howSleepy();
    //boredom
    this.happy = howBored();
    }
    //methods
    //eat - hungry boolean
    //sleep - tired boolean
    //play - bored boolean
    //age - start at 0
    //incrementation of hunger, tiredness, boredom, age
    //heath check/isDead

}





//instance of pet
    //
    