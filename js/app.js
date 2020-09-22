console.log("hello") 
//universal vars/funcs
const initialAge = 0;
const initialHunger = 0;
const initialSleepy = 0;
const initialBoredom = 0;
const $feedPet = $('#hunger-button')
const $lightOff = $('#sleep-button')
const $playPet = $('#play-button')

//game class
class Game {
    constructor(){
//var for objects
    //pet(s)
    this.pet = getPetName();
    }
//methods for objects 
    //user prompts
    getPetName() {
        name = prompt(`What will you call ${this.pet}`)
        return name; 
    };
    //buttons (feed, sleep, play) // <<<<<Look into a way to turn the button off for 10s after each click
    $('#hunger-button').on('click', function feedPet(){
        //happy animation
        this.hunger--;
        return `${this.pet} has been fed and had their hunger reduced by one!`
    });
    $('#sleep-button').on('click', function petSleep(){
        //happy animation
        this.sleepy--;
        return `${this.pet} has taken a nap and had their sleepiness reduced by one!`
    });
    $('#play-button').on('click', function playWithPet(){
        //happy animation
        this.boredom--;
        return `${this.pet} had fun playing and had their boredom reduced by one!`
    });
        //click reduces hunger/tired/happy var by 1
    //start game
    $('#start-button').on('click', function startNewGame(){
        //time starts for age and attribute intervals
    howHungry();
    howSleepy();
    howBored();
    howOld();
    //hatch/wakeup animation
    });
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
    this.sleepy = howSleepy();
    //boredom
    this.bored = howBored();
    }
    //methods
    howHungry(){
        if (hungry < 10){
        const hungry = setInterval(function(){
            initialHunger++
        }, 15000);
        return hungry; 
        }else{
            return `Sad day! ${this.name} has died!`
        }
    }
    //sleep - tired 
    howSleepy(){
        if (sleepy < 10){
        const sleepy = setInterval(function(){
            initialSleepy++
        }, 15000) //increment +1 every 15 seconds
        return sleepy; 
        }else {
            return `Sad day! ${this.name} has died!`
        }
    }
    //play - bored 
    howBored() {
        if (boredom < 10){
        const boredom = setInterval(function(){
            initialBoredom++
        },15000)
        return boredom;
        }else{
            return `Sad day! ${this.name} has died!`
        }
    }
    //age - start at 0
    howOld(){
        if (this.isDead() == false){
            const age = setInterval(function(){
                initialAge++
            }, 30000)
            return age;
        }else{
            break;
        }
    }
    //heath check/isDead
    isDead(){
        if (this.hunger==10 || this.tired==10 || this.bored ==10){
            return true;
        }else{
            return false;
        }
    }
}

//instance of pet
    //var - myPet
    