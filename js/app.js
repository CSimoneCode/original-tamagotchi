let initialTime = 0;
let shortDelay = 2000;
let longDelay = 3000;
let shortInc = 20000;
let medInc = 40000;
let longInc = 60000;
let $petVar = $('#petGraphic')

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

    class Pet {
        constructor(name = "your pet", age, hunger, sleepiness, boredom) {
            this.name = this.getPetName();
            this.age = age;
            this.hunger = hunger;
            this.sleepy = sleepiness;
            this.bored = boredom;
        }
        hatch() {
            let $egg = $('.g0')
            $('#petGraphic').css('animation', function(){
                return ''
            })
            $egg.css('animation', function(){
                return 'fadeout ease-out 2s 1'
            })
            $egg.css('display', function(){
                return 'none'
            })
            setTimeout(function () {
                let $trapinch = $('g1')
                $egg.css('animation', function(){
                    return ''
                })
                $(".g0").replaceWith('<img id="petGraphic" class="pet g1" src="http://pixelartmaker.com/art/088a06fb5670ae9.png" alt="pixellated trapinch pokemon">');
                $trapinch.css('display',function(){
                    return 'flex'
                });
                $trapinch.css('animation',function(){
                    return 'fadein ease-in 2s 1'
                });
            }, 2500);
        }
        evolvePet() {
            if (this.age === 3) {
                let $trapinch = $('g1')
                $trapinch.css('animation',function(){
                    return ''
                });
                $trapinch.css('animation', function(){
                    return 'fadeout ease-out 2s 1'
                })
                $trapinch.css('display', function(){
                    return 'none'
                })
                setTimeout(function () {
                    let $vibrava = $('g2')
                    $trapinch.css('animation',function(){
                        return ''
                    });
                    $('.g1').replaceWith('<img id="petGraphic" class="pet g2" src="http://pixelartmaker.com/art/899a587bd92292b.png" alt="pixellated vibrava pokemon">');
                    $vibrava.css('display',function(){
                        return 'flex'
                    });
                    $vibrava.css('animation',function(){
                        return 'fadein ease-in 2s 1'
                    });
                }, 4000);
            }
            if (this.age === 6) {
                $vibrava.css('animation',function(){
                    return ''
                });
                $vibrava.css('animation', function(){
                    return 'fadeout ease-out -2s 1'
                })
                $vibrava.css('display',function(){
                    return 'none'
                });
                setTimeout(function () {
                    let $flygon = $('g3')
                    $vibrava.css('animation',function(){
                        return ''
                    });
                    $(".g2").replaceWith('<img id="petGraphic" class="pet g3" src="http://pixelartmaker.com/art/0134c80d93a76f2.png" alt="pixellated flygon pokemon">');
                    $flygon.css('display',function(){
                        return 'flex'
                    });
                    $flygon.css('animation',function(){
                        return 'fadein ease-in 2s 1'
                    });
                }, 4000);
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
        gameOver(){
            let self = this;
            if (self.sleepy >=10 || self.hungry >=10 || self.bored >=10 ) {
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
            }
        }
        getPetName() {
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
        };
        howOld() {
            let self = this;
            if (initialTime === 0) {
                setInterval(function () {
                    self.age++
                    $('#age').text(`Age: ${self.age}`)
                }, shortInc)
            }
            this.age++
        }
        howHungry() {
            let self = this;
            if (self.hunger < 10) {
                setInterval(function () {
                    self.hunger++
                    $('#hungry').text(`Hunger: ${self.hunger}`)
                }, shortInc);
            } else {
                self.gameOver();
                console.log('hunger over')
            }
        }
        howSleepy() {
            let self = this;
            console.log(self.sleepy)
            if (self.sleepy < 10) {
                setInterval(function () {
                    self.sleepy++
                    $('#sleepy').text(`Sleepiness: ${self.sleepy}`)
                }, shortInc);
            } else {
                self.gameOver();
                console.log('sleep over')
            }
        }
        howBored() {
            let self = this;
            console.log(self.bored)
            if (self.bored < 10) {
                setInterval(function () {
                    self.bored++
                    $('#bored').text(`Boredom: ${self.bored}`)
                }, shortInc);
            } else {
                self.gameOver();
                console.log('bored over')
            }
        }
    }


    const newPet = new Pet(0,0,0,0);
    $('document').ready(function(){
        $('.g0').css('display', function(){
            return 'none';
        })
        setTimeout(function(){
            console.log('load animation');
            $('#petGraphic').addClass('slidein');
            $('.g0').css('display', function(){
                return 'flex'; 
            })
        },2100);
    });


    $('#startButton').click(function () {
        $('#startButton').remove()
        $('#gameStart').remove()
        $('p').remove()
        $('#actionButtons').css("display", function () {
            return "flex"
        });
        $('#statsDisplay').css("display", function () {
            return "flex"
        });
        $('#petGraphic').css({animation: ''});
        newPet.getPetName()
        newPet.gameTimer()
        newPet.howOld()
        newPet.hatch()
        console.log(newPet.age)
        console.log(newPet.bored)
        console.log(newPet.hunger)
        console.log(newPet.sleepy)
    });


    $('#hungerbutton').click(function () {
        if (newPet.hunger > 0) {
            newPet.hunger--;
            $('#petGraphic').css({animation: ''});
            console.log(`hunger - ${newPet.hunger}`)
            $('#petGraphic').attr({animation: 'growshrink ease-in-out 2s 1'});
            //$petVar.addClass('.growshrink')
            $('#hungerbutton').attr('disabled', 'true')
            function delayedActions(){
                setTimeout(function(){
                    //$petVar.removeClass('.growshrink')
                    $('#petGraphic').css({animation: ''})
                        console.log('eat first done')
                    },2100)
                setTimeout(function(){
                    $('#hungerbutton').removeAttr('disabled')
                        console.log('eat second done')
                    },10000)
                };
            delayedActions();
            $('#hungry').text(`Hunger: ${newPet.hunger}`)
            console.log(`${newPet.name} has been fed and had their hunger reduced by one!`) ;
            console.log(newPet.age)
            console.log(newPet.bored)
            console.log(newPet.hunger)
            console.log(newPet.sleepy)
        }
    });
    let $sleep = $('#sleepButton')
    $sleep.click(function () {
        if (newPet.sleepy > 0) {
            newPet.sleepy--;
            nap();
            $('button').attr('disabled', 'true')
            function delayedActions(){
                setTimeout(function(){
                    $('button').removeAttr('disabled')
                        console.log('sleep done')
                    },5000)
                };
            delayedActions();
            $('#sleepy').text(`Sleepiness: ${newPet.sleepy}`)
        }
        console.log(`${newPet.name} has taken a nap and had their sleepiness reduced by one!`);
    });
    let $play = $('#playButton');
    $('#playButton').click(function () {
        if (newPet.bored > 0) {
            newPet.bored--;
            $('#petGraphic').css({animation: ''});
            $('#petGraphic').css('animation:', function(){
                return 'bounce 2s 1'
                });
                $play.attr('disabled', 'true')
                function delayedActions(){
                    setTimeout(function(){
                        $('#petGraphic').css({animation: ''});
                            console.log('play first done')
                        },2100)
                    setTimeout(function(){
                        $play.removeAttr('disabled')
                            console.log('play second done')
                        },10000)
                    };
                delayedActions();
            $('#bored').text(`Boredom: ${newPet.bored}`);
            console.log(`${newPet.name} had fun playing and had their boredom reduced by one!`);
        }
    })
   