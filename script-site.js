let sec = document.querySelector('section')
let op = 'O'
function exibir(){
    let jogo = []
    let jogadas = 0
    sec.innerText = ''
    for(let cont = 0; cont < 9; cont++){
        let eletd = document.createElement('input')
        eletd.setAttribute('id',`${cont}`)
        

        function escolher() {
            if(eletd.value.length < 1 && jogo[9] != 'win'){
                eletd.value = op
                jogo[eletd.id] = op
                op == 'X' ? op = 'O': op = 'X';
                jogadas++  
            }else if(eletd.value != 'X' && eletd.value != 'O'){
                eletd.value = null

            }
            let  resultado = (i, m, f)=>{
                if(jogo[i] != undefined && jogo[9] != 'win'){
                    if(jogo[i] == jogo[m] && jogo[i] == jogo[f]){
                        let op1 = window.document.getElementById(`${i}`)
                        let op2 = window.document.getElementById(`${m}`)
                        let op3 = window.document.getElementById(`${f}`)
                        op1.style.background = 'green'
                        op2.style.background = 'green'
                        op3.style.background = 'green'
                        sec.appendChild(document.createTextNode(`${jogo[i]} Venceu!!!`))
                        jogo[9] = 'win'
                        zerar()
                        return 'win'
                    }
                }    
              }
            switch('win'){
                case resultado(0,3,6):
                    break 
                case resultado(1,4,7):
                    break
                case resultado(2,5,8):
                    break
                case resultado(2,4,6):
                    break
                case resultado(0,4,8):
                    break
                case resultado(6,7,8):
                    break
                case resultado(3,4,5):
                    break
                case resultado(0,1,2):
                    break
                default:
                    if(jogadas == 9){
                        if(jogo[9] != 'win'){
                            sec.appendChild(document.createTextNode(`Empatou!!!`))
                            jogo[9] = 'win'
                            zerar()
                        }
                    }
                    break
            }
        }
        function zerar(){
            newgame = document.createElement('input')
            newgame.setAttribute('type', 'button')
            newgame.setAttribute('value','Novo Jogo')
            newgame.style.height = '50px'
            newgame.style.fontSize = '15px'
            newgame.onclick = exibir
            sec.appendChild(newgame)
        }

        function enter() {
            eletd.placeholder = op
        }

        function out() {
            eletd.removeAttribute('placeholder');   
        }
        
        eletd.onclick = escolher
        eletd.onmouseenter = enter
        eletd.onmouseout = out
        sec.appendChild(eletd)
        if (cont == 2 || cont == 5 || cont == 8){
            let b = document.createElement('br')
            sec.appendChild(b)
        }
    }
}
exibir();



