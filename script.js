const taglines = ['This place is not a place of honor', 'No highly esteemed deed is commemorated here', 'Nothing valued is here', 'What is here was dangerous and repulsive to us',
                    'The danger is still present, in your time, as it was in ours', 'The danger is to the body, and it can kill']

const images = ["images/bg/00_spikefield.png", "images/bg/01_spikefield.png", "images/bg/02_spikefield.png", "images/bg/03_landscapeofthorns.png",
                "images/bg/04_landscapeofthorns.png", "images/bg/05_forbiddingblocks.png"]


document.getElementsByClassName("landing")[0].style.background = "url(" + images[Math.floor(Math.random() * images.length)] + ") no-repeat center";
document.getElementById("tagline").innerHTML = taglines[Math.floor(Math.random() * taglines.length)];