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
let medInc = 40000;
let longInc = 60000;

function animation($petVar, $classVar) {
    $petVar.removeClass($classVar);
    let $newVar = $petVar.clone(true);
    $newVar.addClass(`${$classVar}`);
    $petVar.before($newVar);
    $petVar.remove();
    void $petVar.offsetWidth;
    $petVar.addClass(`${$classVar}`);
}

function nap() {
    $('.screen').addClass('dark');
    $('#petGraphic').css('opacity', function(){
        return 0.6;
    })
    setTimeout(function () {
        $('.screen').removeClass('dark');
        $('#petGraphic').css('opacity', function(){
            return 1;
        })
    }, 5000);
}

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
        hatch() {
            let $egg = $('g0');
            animation($egg, 'fadeout')
            // let y = $('#morph');
            // animation(y, 'burst');
            setTimeout(function () {
                let $trapinch = $('g1')
                animation($trapinch, 'fadein')
                $(".g0").replaceWith('<img id="petGraphic" class="pet g1" src="http://pixelartmaker.com/art/088a06fb5670ae9.png" alt="pixellated trapinch pokemon">');
            }, 2000)

        }
        evolvePet() {
            //evolution animation? evolve every 5 minutes, age ++ every minute
            //Could I make and array of pet attributes and details and move to the next array item eith each evolution? Do research...
            if (this.age === 4) {
                let $img = $('.g1')
                animation($img, 'fadeout')
                // $('#morph').css('display', function(){
                //     return "flex";
                // })
                // let y = $('#morph')
                // animation(y, 'burst')
                // setTimeout(function(){
                //     $('#morph').removeClass('burst');
                //     $('#morph').css('display', function(){
                //     return "none";
                // })
                // }, 3000);
            }
            if (this.age === 5) {
                $('.g1').replaceWith('<img id="petGraphic" class="pet g2" src="http://pixelartmaker.com/art/899a587bd92292b.png" alt="pixellated vibrava pokemon">');
                let $gra = $('.g2')
                animation($gra, 'fadein')
                setTimeout(function () {
                    $('.g2').removeClass("fadein");
                }, 3000);
                //sub trapinch picture for the vibrava picture
            }
            if (this.age === 8) {
                let $img = $('.g2')
                animation($img, 'fadeout')
                // $('#morph').css('display', function(){
                //     return "flex";
                // })
                // let y = $('#morph')
                // animation(y, 'burst')
                // setTimeout(function(){
                //     $('#morph').css('display', function(){
                //         return "none";
                //     })
                // }, 3000);
            }
            if (this.age === 9) {
                $(".g2").replaceWith('<img id="petGraphic" class="pet g3" src="http://pixelartmaker.com/art/0134c80d93a76f2.png" alt="pixellated flygon pokemon">');
                let $gra = $('.g3')
                animation($gra, 'fadein')
                setTimeout(function () {
                    $('#petGraphic').removeClass("fadein");
                }, 3000);
                //sub vibrava picture for the flygon picture
            }
        }
        gameTimer() {
            let self = this;
            this.timer = setInterval(function () {
                setTimeout(function () {
                    initialTime++;
                    self.evolvePet();
                    $('#timer').text(`timer: ${initialTime}s`)
                }, 2500)
            }, 1000)
        }
        getPetName() {
            name = prompt(`What will you call your pet?`)
            //return name; 
            const $namePlace = $('h1')
            const $displayName = $(`<div>"My pet is named ${name}"</div>`)
            $displayName.addClass = $('name')
            $displayName.css("font-size", function () {
                return '28px';
            });
            $displayName.css("font-family", function () {
                return 'Arial';
            });
            $displayName.css("padding-top", function () {
                return '20px';
            });
            $displayName.css("opacity", function () {
                return 0.7;
            })
            $displayName.css("display", function () {
                return "flex";
            })
            $displayName.css("justify-content", function () {
                return "center"
            })
            $namePlace.append($displayName);
        };
        //incrementing functions 
        howOld() {
            if (initialTime === 0) {
                let self = this;
                setInterval(function () {
                    self.age++
                    $('#age').text(`Age: ${self.age}`)
                }, longDelay)
            }
            this.age++
        }
        //hunger
        howHungry() {
            //let $justTags = $fullHeartGauge.join('')
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

    const newPet = new Pet();
    // let $pG = $('#petGraphic');
    // $pG.load(animation($pG, 'bounce'));
    $('#startButton').click(function () {
        // animation($pG, null)
        $('#startButton').remove()
        $('#gameStart').remove()
        $('p').remove()
        $('#actionButtons').css("display", function () {
            return "flex"
        });
        $('#statsDisplay').css("display", function () {
            return "flex"
        });
        newPet.getPetName()
        newPet.gameTimer()
        newPet.howBored()
        newPet.howHungry()
        newPet.howOld()
        newPet.howSleepy()
        newPet.hatch()
        console.log(newPet.age)
        console.log(newPet.bored)
        console.log(newPet.hunger)
        console.log(newPet.sleepy)
    });
    //buttons (feed, sleep, play) // <<<<<Look into a way to turn the button off for 10s after each click

    $('#hungerButton').click(function () {
        if (newPet.hunger > 0) {
            //nom animation
            newPet.hunger--;
            $('#hungerButton').attr('disabled', 'true')
            let $eat = $('#petGraphic');
            $eat.css('animation', function(){
            return 'growshrink ease-in-out 2s 1'
            });
            setTimeout(function(){
                    $eat.removeClass('growshrink')
                    console.log('first done')
                },3000)
            setTimeout(function(){
                    $('hungerButton').removeAttr('disabled')
                    console.log('second done')
                },10000)
            //animation($eat, 'growshrink')
            $('#hungry').text(`Hunger: ${newPet.hunger}`)
            //happy animation
            return `${newPet.name} has been fed and had their hunger reduced by one!`;
        }
        console.log(newPet.age)
    });

    $('#sleepButton').click(function () {
        if (newPet.sleepy > 0) {
            //darken screen for 3s
            newPet.sleepy--;
            $('#sleepy').text(`Sleepiness: ${newPet.sleepy}`)
            nap();
        }
        // //happy animation
        // //toggle or time limit text bubble
        // let $bubble = $('<img src="./text-bubble.png" alt="pixellated text bubble">')
        // let $statement = $(`<span>${newPet} has taken a nap and had their sleepiness reduced by one!</span>`)
        // $('#bubble').append($bubble)
        //$statement.css('z-index', function(){
        //    return 1;
        //});
        // $bubble.append($statement)
        // $('#bubble').css('animation', function(){
        //     return "3s fadeinout"
        // })
        // $('#bubble').css('display', function(){
        //     return "none";
        // })
        return `${newPet.name} has taken a nap and had their sleepiness reduced by one!`;
    });


    $('#playButton').click(function () {
        if (newPet.bored > 0) {
            //play animation
            newPet.bored--;
            let play = $('#petGraphic');
            animation(play, 'bounce');
            $('#bored').text(`Boredom: ${newPet.bored}`);
            //happy animation
            return `${newPet.name} had fun playing and had their boredom reduced by one!`;
        }
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
  