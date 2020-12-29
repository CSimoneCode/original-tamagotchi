let initialTime = 0;
let shortDelay = 2000;
let longDelay = 5000;
let shortInc = 20000;
let medInc = 40000;
let longInc = 60000;
let $petVar = $('#petGraphic')

function nap() {
    $('.screen').addClass('dark');
    $('#petGraphic').css('opacity', function () {
        return 0.6;
    })

    function delay() {
        setTimeout(function () {
            $('.screen').removeClass('dark');
            $('#petGraphic').css('opacity', function () {
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

        function delay() {
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

            function delay() {
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

            function delay() {
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
                self.howOld();
                self.evolvePet();
                self.howBored();
                self.howHungry();
                self.howSleepy();
                $('#timer').text(`timer: ${initialTime}s`)
            }, 2500)
        }, 1000)
    }
    gameOver() {
        // <<<<<<< cleanSlate
        //             if ( this.bored >9 || this.sleepy >9 || this.hunger > 9){ 
        //             newPet.end(howSleepy());
        //             newPet.end(howBored());
        //             newPet.end(howHungry());
        //             newPet.end(gameTimer());
        //             alert('Game over!')
        //=======
        let self = this;
        if (self.sleepy >= 10 || self.hungry >= 10 || self.bored >= 10) {
            clearInterval(this.gameTimer())
            clearInterval(this.howBored)
            clearInterval(this.howHungry())
            clearInterval(this.howSleepy())
            clearInterval(this.howOld())
            // .end(this.gameTimer())
            // .end(this.howBored)
            // .end(this.howHungry())
            // .end(this.howSleepy())
            // .end(this.howOld())
            alert('Game over!');
            console.log('game over');
            // >>>>>>> master
        }
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
            self.gameOver();;
        }
    }
    howSleepy() {
        let self = this;
        console.log(self.sleepy)
        if (self.sleepy < 10) {
            setInterval(function () {
                self.sleepy++
                $('#sleepy').text(`Sleepiness: ${self.sleepy}`)
            }, longDelay)
            self.gameOver();
        }
    }
    howBored() {
        let self = this;
        console.log(self.bored)
        if (self.bored < 10) {
            setInterval(function () {
                self.bored++
                $('#bored').text(`Boredom: ${self.bored}`)
            }, longDelay);
            self.gameOver();
        }
    }
}

const newPet = new Pet(0, 0, 0, 0);
$('document').ready(function () {
    $('.g0').css('display', function () {
        return 'none';
    })
    setTimeout(function () {
        console.log('load animation');
        $('#petGraphic').addClass('slidein');
        $('.g0').css('display', function () {
            return 'flex';
        })
    }, 2100);
});


$('#startButton').click(function () {
    $('#startButton').remove()
    $('#gameStart').remove()
    $('p').remove()
    $('.g0').css('animation', function () {
        return ''
    })
    $('#actionButtons').css("display", function () {
        return "flex"
    });
    $('#statsDisplay').css("display", function () {
        return "flex"
    });
    $('#petGraphic').css({
        animation: ''
    });
    newPet.getPetName()
    newPet.gameTimer()
    newPet.howOld()
    newPet.hatch()
    newPet.howSleepy();
    newPet.howBored();
    newPet.howHungry();
    console.log(newPet.age)
    console.log(newPet.bored)
    console.log(newPet.hunger)
    console.log(newPet.sleepy)
});


$('#hungerbutton').click(function () {
    if (newPet.hunger > 0) {
        newPet.hunger--;
        let $eat = $('#petGraphic');
        $eat.css('animation', function () {
            return 'none'
        })
        $eat.css('animation', function () {
            return 'growshrink 2s 1'
        })
        $('#hungerButton').attr('disabled', 'true')

        function delay() {
            setTimeout(function () {
                $eat.css('animation', function () {
                    return ''
                })
                console.log('first eat done')
            }, 2500)
            setTimeout(function () {
                $('#hungerButton').removeAttr('disabled')
                console.log('second eat done')
            }, 10000)
        }
        delay()
        $('#hungry').text(`Hunger: ${newPet.hunger}`)
        console.log(`${newPet.name} has been fed and had their hunger reduced by one!`);
    }
});
let $sleep = $('#sleepButton')
$sleep.click(function () {
    if (newPet.sleepy > 0) {
        newPet.sleepy--;
        nap();
        $('button').attr('disabled', 'true')

        function delay() {
            setTimeout(function () {
                $('button').removeAttr('disabled')
                console.log('sleep done')
            }, 5000)
        }
        delay()
    }
    $('#sleepy').text(`Sleepiness: ${newPet.sleepy}`)
    console.log(`${newPet.name} has taken a nap and had their sleepiness reduced by one!`);
});
let $play = $('#playButton');
$('#playButton').click(function () {
    if (newPet.bored > 0) {
        newPet.bored--;

        let $play = $('#petGraphic');
        $play.css('animation', function () {
            return 'none'
        })
        $play.css('animation', function () {
            return 'bounce 2s 1'
        })
        $('#playButton').attr('disabled', 'true')

        function delay() {
            setTimeout(function () {
                $play.css('animation', function () {
                    return 'none'
                })
                console.log('first play done')
            }, 2500)
            setTimeout(function () {
                $('#playButton').removeAttr('disabled')
                console.log('second play done')
            }, 10000)
        }
        delay()
        $('#bored').text(`Boredom: ${newPet.bored}`);
        console.log(`${newPet.name} had fun playing and had their boredom reduced by one!`);
    }
})
