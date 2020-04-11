let jogoo = ()=>{  
    let montar = (cont)=>{
  
      let out = ()=> {
        if(eletd.value == `${op} 1`){
          eletd.value = null;   
        }
      }; 
  
      let enter = ()=> {
        if(eletd.value.length < 1){
          eletd.value = `${op} 1`;
        }
      };
  
      let click = ()=> {
          if(eletd.value == `${op} 1` && jogo[9] != 'fim'){
            eletd.value = op;
            jogo[eletd.id] = op;
            op = (op == 'X') ? 'O': 'X';
            jogadas++;  
          }else if(eletd.value != 'X' && eletd.value != 'O'){
            eletd.value = null;
          }
          switch('fim'){
            case resultado(0,3,6):
              break; 
            case resultado(1,4,7):
              break;
            case resultado(2,5,8):
              break;
            case resultado(2,4,6):
              break;
            case resultado(0,4,8):
              break;
            case resultado(6,7,8):
              break;
            case resultado(3,4,5):
              break;
            case resultado(0,1,2):
              break;
            default:
              if(jogadas == 9){
                if(jogo[9] != 'fim'){
                  sec.appendChild(document.createTextNode(`Empatou!!!`));
                  jogo[9] = 'fim';
                  zerar();
                }
              }
              break;
          }
      };
  
      let  resultado = (i, m, f)=>{
        if(jogo[i] != undefined && jogo[9] != 'fim'){
          if(jogo[i] == jogo[m] && jogo[i] == jogo[f]){
            let op1 = window.document.getElementById(`${i}`);
            let op2 = window.document.getElementById(`${m}`);
            let op3 = window.document.getElementById(`${f}`);
            op1.style.background = 'green';
            op2.style.background = 'green';
            op3.style.background = 'green';
            sec.appendChild(document.createTextNode(`${jogo[i]} Venceu!!!`));
            jogo[9] = 'fim';
            zerar();
            return 'fim';
          }
        }    
      };
  
      let zerar = ()=>{
                newgame = document.createElement('input');
                newgame.setAttribute('type', 'button');
                newgame.setAttribute('value','Novo Jogo');
                newgame.style.height = '50px';
                newgame.style.fontSize = '15px';
                newgame.onclick = jogoo;
                sec.appendChild(newgame);
      };
  
      let eletd = document.createElement('input');
      let sec = document.querySelector('section');
      eletd.onclick = click;
      eletd.onmouseenter = enter;
      eletd.onmouseout = out;
      eletd.setAttribute('type', 'button');
      eletd.setAttribute('id',`${cont}`);
      sec.appendChild(eletd);
      if (cont == 2 || cont == 5 || cont == 8){
        let b = document.createElement('br');
        sec.appendChild(b);
      }
    };  
    
    let exibir = ()=>{
        for(let cont = 0;cont < 9; cont++){
           montar(cont);
  
        }
    };
    
    document.querySelector('section').innerText = '';
    let op = 'O';
    let jogo = [];
    let jogadas = 0;
    exibir();
  };
  jogoo();
  
  