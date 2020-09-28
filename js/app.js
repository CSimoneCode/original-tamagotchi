let initialTime = 0;
let shortDelay = 2000;
let longDelay = 5000;
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
    function delay(){
        setTimeout(function () {
            $('.screen').removeClass('dark');
            $('#petGraphic').css('opacity', function(){
                return 1;
            })
        }, 5000);
    }
    delay()
}

    class Pet {
        constructor(name = "your pet") {
            this.name = name;
            this.age = 0;
            this.hunger = 0;
            this.sleepy = 0;
            this.bored = 0;
        }
        hatch() {
            let $egg = $('.g0');
            animation($egg, 'fadeout')
            function delay(){
            setTimeout(function () {
                let $trapinch = $('.g1')
                animation($trapinch, 'fadein')
                $(".g0").replaceWith('<img id="petGraphic" class="pet g1" src="http://pixelartmaker.com/art/088a06fb5670ae9.png" alt="pixellated trapinch pokemon">');
            }, 2500)
         }
         delay()
        }
        evolvePet() {
            if (this.age === 4) {
                let $img = $('.g1')
                animation($img, 'fadeout')
            }
            if (this.age === 5) {
                $('.g1').replaceWith('<img id="petGraphic" class="pet g2" src="http://pixelartmaker.com/art/899a587bd92292b.png" alt="pixellated vibrava pokemon">');
                let $gra = $('.g2')
                animation($gra, 'fadein')
                function delay(){
                    setTimeout(function () {
                        $('.g2').removeClass("fadein");
                    }, 3000);
                }
                delay()
            }
            if (this.age === 8) {
                let $img = $('.g2')
                animation($img, 'fadeout')
            }
            if (this.age === 9) {
                $(".g2").replaceWith('<img id="petGraphic" class="pet g3" src="http://pixelartmaker.com/art/0134c80d93a76f2.png" alt="pixellated flygon pokemon">');
                let $gra = $('.g3')
                animation($gra, 'fadein')
                function delay(){
                    setTimeout(function () {
                        $('#petGraphic').removeClass("fadein");
                    }, 3000);
                }
                delay()
            }
        }
        gameTimer() {
            let self = this;
            this.timer = setInterval(function () {
                setTimeout(function () {
                    initialTime++;
                    self.evolvePet();
                    self.howBored();
                    self.howHungry();
                    self.howOld();
                    self.howSleepy();
                    $('#timer').text(`timer: ${initialTime}s`)
                }, 2500)
            }, 1000)
        }
        gameOver(){
            alert('Game over!')
            newPet.end(gameTimer());
        }
        getPetName() {
            let self = this;
            name = prompt(`What will you call your pet?`)
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

            console.log(self.name)
        };
        howOld() {
            let self = this;
            if (initialTime === 0) {
                setInterval(function () {
                    self.age++
                    $('#age').text(`Age: ${self.age}`)
                }, shortInc)
            }
        }
        howHungry() {
            if (this.hunger < 10) {
                let self = this;
                setInterval(function () {
                    self.hunger++
                    $('#hungry').text(`Hunger: ${self.hunger}`)
                }, longDelay);
            } else {
                self.gameOver();
                console.log(`Sad day! ${Pet.name} has died of hunger!`);
            }
        }
        howSleepy() {
            if (this.sleepy < 10) {
                let self = this;
                setInterval(function () {
                    self.sleepy++
                    $('#sleepy').text(`Sleepiness: ${self.sleepy}`)
                }, longDelay)
            } else {
                self.gameOver();
                console.log(`Sad day! ${Pet.name} has died of fatigue!`);
            }
        }
        howBored() {
            if (this.bored < 10) {
                let self = this;
                setInterval(function () {
                    self.bored++
                    $('#bored').text(`Boredom: ${self.bored}`)
                }, longDelay);
            } else {
                self.gameOver();
                console.log(`Sad day! ${Pet.name} has died of boredom!`);
            }
        }
    }

    const newPet = new Pet();

    $('document').ready( function(){
        $('.g0').css('animation', function(){
            return 'slidein 2s 1'
        })
    })


    $('#startButton').click(function () {
        $('#startButton').remove()
        $('#gameStart').remove()
        $('p').remove()
        $('.g0').css('animation', function(){
            return ''
        })
        $('#actionButtons').css("display", function () {
            return "flex"
        });
        $('#statsDisplay').css("display", function () {
            return "flex"
        });
        newPet.getPetName()
        newPet.gameTimer()
        newPet.hatch()
        console.log(newPet.age)
        console.log(newPet.bored)
        console.log(newPet.hunger)
        console.log(newPet.sleepy)
    });

    $('#hungerButton').click(function () {
        if (newPet.hunger > 0) {
            newPet.hunger--;
            let $eat = $('#petGraphic');
            animation($eat, 'growshrink')
            $('#hungerButton').attr('disabled', 'true')
            function delay(){
                setTimeout(function(){
                    $eat.removeClass('growshrink')
                    console.log('first eat done')
                },3000)
            setTimeout(function(){
                    $('#hungerButton').removeAttr('disabled')
                    console.log('second eat done')
                },10000)
            }
            delay()
            $('#hungry').text(`Hunger: ${newPet.hunger}`)
            console.log(`${newPet.name} has been fed and had their hunger reduced by one!`);
        }
    });

    $('#sleepButton').click(function () {
        if (newPet.sleepy > 0) {
            newPet.sleepy--;
            nap();
            $('#sleepButton').attr('disabled', 'true')
            function delay(){
                setTimeout(function(){
                    $('#sleepButton').removeAttr('disabled')
                    console.log('sleep done')
                },10000)
            }
            delay()
        }
        $('#sleepy').text(`Sleepiness: ${newPet.sleepy}`)
        console.log(`${newPet.name} has taken a nap and had their sleepiness reduced by one!`);
    });


    $('#playButton').click(function () {
        if (newPet.bored > 0) {
            newPet.bored--;
            let $play = $('#petGraphic');
            $play.css('animation', function(){
                return 'none'
            })
            animation($play, 'burst');
            $('#playButton').attr('disabled', 'true')
            function delay(){
                setTimeout(function(){
                    $play.removeClass('burst')
                    console.log('first play done')
                },3000)
                setTimeout(function(){
                    $('#playButton').removeAttr('disabled')
                    console.log('second play done')
                },10000)
            }
            delay()
            $('#bored').text(`Boredom: ${newPet.bored}`);
            console.log(`${newPet.name} had fun playing and had their boredom reduced by one!`);
        }
    }) 
   