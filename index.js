let arenas = document.querySelector(".arenas")
let randomButton = document.querySelector(".button")

const player1 = {
     player: 1,
     name: "Jon",
     hp: 80,
     img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
     weapon: ["knife", "gun"],
     attack()
     {
          console.log(name + "Fight...")
     }
}

const player2 = {
     player: 2,
     name: "Max",
     hp: 60,
     img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
     weapon: ["knife", "gun"],
     attack()
     {
          console.log(name + "Fight...")
     }
}

function createElement(tag, className)
{
     const $tag = document.createElement(tag, className)
     if (className) {
          $tag.classList.add(className);
     }

     return $tag;
}

function createPlayer(playerObj)
{
     let player = createElement("div", "player" + playerObj.player)
     let progressBar = createElement("div", "progressbar")
     let character = createElement("div", "character")

     let life = createElement("div", "life")
     life.style.width = `${playerObj.hp}%`
     life.classList.add("life")

     let img = createElement("img",)
     img.src = playerObj.img

     let name = createElement("div", "name")
     name.innerText = playerObj.name

     player.appendChild(progressBar)
          .appendChild(life)
          .appendChild(name)
     player.appendChild(character)
          .appendChild(img)

     return player
}
function randomDamage()
{
     let randomNumber = Math.floor(Math.random() * 20)
     return randomNumber
}

function changeHP(player)
{
     const playerLife = document.querySelector(".player" + player.player + " .life");
     player.hp -= randomDamage();
     playerLife.style.width = player.hp + "%";

     if (player.hp < 0) {
          arenas.appendChild(playerLose(player.name))
          player.hp = 0
     }
}

function playerLose(name)
{
     const loseTitle = createElement('div', 'loseTitle');
     loseTitle.innerText = name + ' lose';

     return loseTitle
}

randomButton.addEventListener("click", function ()
{
     changeHP(player1);
     changeHP(player2);
})

arenas.appendChild(createPlayer(player1))
arenas.appendChild(createPlayer(player2))


