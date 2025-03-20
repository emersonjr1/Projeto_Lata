let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

//count a quantidade de paginas
// começa no 0, 1 ,2 

let count = list.length;
let active = 0;



next.onclick = () => {
    console.log("Next")
    let naoAtivo = document.querySelector(".active")
    naoAtivo.classList.remove("active")
    
    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')

};

prev.onclick = () => {
    console.log("Prev")
    let naoAtivo = document.querySelector(".active")
    naoAtivo.classList.remove("active")

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active')
};

 