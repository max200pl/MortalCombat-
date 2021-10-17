const player1 = {
     name: "Jon",
     hp: 50,
     img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
     weapon: ["knife", "gun"],
     attack()
     {
          console.log(name + "Fight...")
     }
}

const player2 = {
     name: "Max",
     hp: 20,
     img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
     weapon: ["knife", "gun"],
     attack()
     {
          console.log(name + "Fight...")
     }
}

function createPlayer(className, player)
{
     let player1 = document.createElement("div");
     player1.classList.add("player1");

     let progressBar = document.createElement("div");
     progressBar.classList.add("progressBar");

     let character = document.createElement("div");
     character.classList.add("character");

     let img = document.createElement("img")
     img.src = player.img

     let life = document.createElement("div")
     life.style.width = `${player.hp}%`
     life.style.backgroundColor = "red"
     life.style.height = "4px"
     life.classList.add("life")

     let name = document.createElement("div")
     name.innerText = player.name
     name.classList.add("name")

     player1.appendChild(progressBar)
     player1.appendChild(character)
          .appendChild(img)

     progressBar.appendChild(life)
     progressBar.appendChild(name)

     let root = document.querySelector(".arenas")
     root.appendChild(player1)
}

createPlayer('player1', player1);
createPlayer('player2', player2);

