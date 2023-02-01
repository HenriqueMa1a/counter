const btn = document.querySelectorAll('button')
const btnList = Array.from(btn)
let contador = document.querySelector('.container span')


btnList[0].onclick = function (e) {
    contador.textContent>0 ? contador.textContent-- : contador.textContent=5
}


btnList[1].onclick = function (e) {
    contador.textContent = 5
}

btnList[2].onclick = function (e) {
    contador.textContent++
}

btnList[3].onclick = ()=>{
    setInterval(()=>{
        if(contador.textContent>0)
        contador.textContent--
    }, 1000)
    clearInterval()
}