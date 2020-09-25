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

let initialTime = 0;
let shortDelay = 2000;
let longDelay = 3000;
let shortInc = 20000;
let medInc = 40000
let longInc = 60000;


//pet class   
class Pet {
    constructor(name = "your pet") {
        //var for objects/attributes
        //name (user input)
        this.name = name;
        //age 
        this.age = 0;
        //hunger 
        this.hunger = 0;
        //tiredness 
        this.sleepy = 0;
        //boredom
        this.bored = 0;
    }
    //methods    
    gameTimer() {
        this.timer = setInterval(function () {
            initialTime++;
            $('#timer').text(`timer: ${initialTime}s`)
        }, 1000)
    }
    evolvePet() {
        //evolution animation? evolve every 5 minutes, age ++ every minute
        //Could I make and array of pet attributes and details and move to the next array item eith each evolution? Do research...
        if (this.age === 5) {
            const firstAnim = $('#petGraphic').css('animation: 5s infinite alternate fadein;');
            $("#petGraphic").replaceWith('<img id="petGraphic" class="g2" src="http://pixelartmaker.com/art/899a587bd92292b.png">');
            //sub trapinch picture for the vibrava picture
        }
        if (this.age === 10) {
            const secondAnim = $('#petGraphic').css('.5s linear 1s infinite alternate slidein;');
            $("#petGraphic").replaceWith('<img id="petGraphic" class="g3" src="http://pixelartmaker.com/art/0134c80d93a76f2.png">');
            //sub vibrava picture for the flygon picture
        }

    }
    getPetName() {
        name = prompt(`What will you call your pet?`)
        //return name; 
        const $namePlace = $('#actionButtons')
        const $displayName = $(`<div>"My pet is named ${name}"</div>`)
        $displayName.addClass = $('name')
        $namePlace.append($displayName);
        console.log(name)
    };
    //incrementing functions 
    howOld() {
        if (initialTime === 0) {
            let self = this;
            setInterval(function () {
                self.age++
                self.evolvePet()
                $('#age').text(`Age: ${self.age}`)
            }, longDelay)
        }
    }
    //hunger
    howHungry() {
        if (this.hunger < 10) {
            let self = this;
            setInterval(function () {
                self.hunger++
                $('#hungry').text(`Hunger: ${self.hunger}`)
            }, shortDelay);
        } else {
            gameOver();
            return `Sad day! ${Pet.name} has died of hunger!`;
        }
    }
    //sleep - tired 
    howSleepy() {
        if (this.sleepy < 10) {
            let self = this;
            setInterval(function () {
                self.sleepy++
                $('#sleepy').text(`Sleepiness: ${self.sleepy}`)
            }, shortDelay)
        } else {
            gameOver();
            return `Sad day! ${Pet.name} has died of fatigue!`;
        }
    }
    //play - bored 
    howBored() {
        if (this.bored < 10) {
            let self = this;
            setInterval(function () {
                self.bored++
                $('#bored').text(`Boredom: ${self.bored}`)
            }, shortDelay);
        } else {
            gameOver();
            return `Sad day! ${Pet.name} has died of boredom!`;
        }
    }
    //gameOver(){}
}


//})//time starts for age and attribute intervals
//hatch/wakeup animation
$('#startButton').click(function () {
    $('header').remove()
    const newPet = new Pet();
    newPet.getPetName()
    newPet.gameTimer()
    newPet.howBored()
    newPet.howHungry()
    newPet.howOld()
    newPet.howSleepy()
    newPet.evolvePet()
    console.log(newPet.age)
    console.log(newPet.bored)
    console.log(newPet.hunger)
    console.log(newPet.sleepy)
})



//buttons (feed, sleep, play) // <<<<<Look into a way to turn the button off for 10s after each click

$('#hungerButton').click(function () {
    if (initialHunger > 0) {
        //nom animation
        initialHunger--;
        $('#hungry').text(`Hunger: ${initialHunger}`)
        //happy animation
        return `${this.pet} has been fed and had their hunger reduced by one!`;
    }
});

$('#sleepButton').click(function () {
    if (initialSleepy > 0) {
        //darken screen for 3s
        initialSleepy--;
        $('#sleepy').text(`Sleepiness: ${initialSleepy}`)
        //happy animation
        return `${this.pet} has taken a nap and had their sleepiness reduced by one!`;
    }
});

$('#playButton').click(function () {
    if (initialBoredom > 0) {
        //play animation
        initialBoredom--;
        $('#bored').text(`Boredom: ${initialBoredom}`)
        //happy animation
        return `${this.pet} had fun playing and had their boredom reduced by one!`;
    }
});

// function evolvePet() {
//     //evolution animation? evolve every 5 minutes, age ++ every minute
//     //Could I make and array of pet attributes and details and move to the next array item eith each evolution? Do research...
//     if (initialAge>=1) {
//         alert('morph1')
//         //kenny example: $('img[src="/images/test-sites/e-commerce/items/cart2.png"]')
//         $(".petGraphic").replaceWith('<img class="petGraphic" src="http://pixelartmaker.com/art/899a587bd92292b.png">')
//         //sub trapinch picture for the vibrava picture
//     }if (initialAge>=2) {
//         alert('morph2')
//         $(".petGraphic").replaceWith("<img src='http://pixelartmaker.com/art/0134c80d93a76f2.png'>")
//         //sub vibrava picture for the flygon picture
//     }
// }   
  