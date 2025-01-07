let fuhadShiblu_proSold = document.querySelector('.fuhadShiblu_proSold')
let fuhadShiblu_bestRev = document.querySelector('.fuhadShiblu_bestRev')
let p = 0
let r = 0

let count1 = ()=>{
     p++
     fuhadShiblu_proSold.innerHTML = p
     if(p == fuhadShiblu_proSold.dataset.prosold){
          clearInterval(stopit1)
     }
}

let stopit1 = setInterval(()=>{
     count1()
} , 1)

let count2 = ()=>{
     r++
     fuhadShiblu_bestRev.innerHTML = r
     if(r == fuhadShiblu_bestRev.dataset.bestrev){
          clearInterval(stopit2)
     }
}

let stopit2 = setInterval(()=>{
     count2()
} , 1)