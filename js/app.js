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
let $fullHeartGauge = 
['<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',
'<img class="hearts" src="./full-heart.png" alt="pixel art full red heart">',];
let $emptyHeartGauge = 
['<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">',
'<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">'];



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
            $("#petGraphic").replaceWith('<img id="petGraphic" class="g2" src="http://pixelartmaker.com/art/899a587bd92292b.png" alt="pixellated vibrava pokemon">');
            $("#petGraphic").css("animation", function(){
                return "5s infinite alternate fadein;"            
            });
            //sub trapinch picture for the vibrava picture
        }
        if (this.age === 10) {
            const $petImg = "#petGraphic"
            $("#petGraphic").replaceWith('<img id="petGraphic" class="g3" src="http://pixelartmaker.com/art/0134c80d93a76f2.png" alt="pixellated flygon pokemon">');
            $("#petGraphic").css("animation", function(){
                return "5s infinite alternate fadein;"            
            });
            //sub vibrava picture for the flygon picture
        }

    }
    //$( "div.example" ).css( "width", function( index ) {
//   return index * 50;
// });
    getPetName() {
        name = prompt(`What will you call your pet?`)
        //return name; 
        const $namePlace = $('h1')
        const $displayName = $(`<div>"My pet is named ${name}"</div>`)
        $displayName.addClass = $('name')
        $displayName.css("font-size", function(){
            return '28px';
        });
        $displayName.css("font-family", function(){
            return 'Arial';
        });
        $displayName.css("padding-top", function(){
            return '20px';
        });
        $displayName.css("opacity", function(){
            return 0.7;
        })
        $namePlace.append($displayName);
        console.log(name)
    };
    // updateFullHeartGauge(){
    //     $fullHeartGauge.shift()
    //     $fullHeartGauge.push('<img class="hearts" src="./empty-heart.png" alt="pixel art empty heart">')
    //}
    //incrementing functions 
    howOld() {
        if (initialTime === 0) {
            let self = this;
            setInterval(function () {
                self.age++
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
                //$('#hungry').text(updateFullHeartGauge(${fullHeartGauge}));
                $('#hungry').text(`Hunger: ${self.hunger}`);
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
    $('#startButton').remove()
    $('#gameStart').remove()
    $("#petGraphic").replaceWith('<img id="petGraphic" class="g1" src="http://pixelartmaker.com/art/088a06fb5670ae9.png" alt="pixellated trapinch pokemon">');
    $("#petGraphic").css("animation", function(){
        return "5s infinite alternate fadein;"});
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
    //buttons (feed, sleep, play) // <<<<<Look into a way to turn the button off for 10s after each click

$('#hungerButton').click(function () {
    if (newPet.hunger > 0) {
        //nom animation
        newPet.hunger--;
        $('#hungry').text(`Hunger: ${newPet.hunger}`)
        //happy animation
        return `${this.pet} has been fed and had their hunger reduced by one!`;
    }
});

$('#sleepButton').click(function () {
    if (newPet.sleepy > 0) {
        //darken screen for 3s
        newPet.sleepy--;
        $('#sleepy').text(`Sleepiness: ${newPet.sleepy}`)
        //happy animation
        // new bubble = $('<img src=""')
        // new statement = $('<span>`${this.pet} has taken a nap and had their sleepiness reduced by one!`</span>')
        return `${this.pet} has taken a nap and had their sleepiness reduced by one!`;
    }
});

$('#playButton').click(function () {
    if (newPet.bored > 0) {
        //play animation
        newPet.bored--;
        $('#bored').text(`Boredom: ${newPet.bored}`)
        //happy animation
        return `${this.pet} had fun playing and had their boredom reduced by one!`;
    }
});
})





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
  