const taglines = ['This place is not a place of honor', 'No highly esteemed deed is commemorated here', 'Nothing valued is here', 'What is here was dangerous and repulsive to us',
                    'The danger is still present, in your time, as it was in ours', 'The danger is to the body, and it can kill']

const images = ["images/bg/00_spikefield.webp", "images/bg/01_spikefield.webp", "images/bg/02_spikefield.webp", "images/bg/03_landscapeofthorns.webp",
                "images/bg/04_landscapeofthorns.webp", "images/bg/05_forbiddingblocks.webp"]


document.getElementsByClassName("landing")[0].style.background = "url(" + images[Math.floor(Math.random() * images.length)] + ") no-repeat center";
document.getElementById("tagline").innerHTML = taglines[Math.floor(Math.random() * taglines.length)];