let jogoo = ()=>{  
  document.querySelector('section').innerText = '';
  let op = 'O';
  let jogo = [];
  let jogadas = 0;

  let out = (event)=> {
    if(event.target.value == `${op} 1`){
      event.target.value = null;   
    }
  }; 

  let enter = (event)=> {
    if(event.target.value.length < 1){
      event.target.value = `${op} 1`;
    }
  };
  
  let click = (event)=> {
      if(event.target.value == `${op} 1` && jogo[9] != 'fim'){
        event.target.value = op;
        jogo[event.target.id] = op;
        op = (op == 'X') ? 'O': 'X';
        jogadas++;  
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
          if(jogadas == 9 && jogo[9] != 'fim'){
            document.querySelector('section').appendChild(document.createTextNode(`Empatou!!!`));
            jogo[9] = 'fim';
            zerar();
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
        document.querySelector('section').appendChild(document.createTextNode(`${jogo[i]} Venceu!!!`));
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
            document.querySelector('section').appendChild(newgame);
  };

  let montar = (()=>{
    for(let cont = 0;cont < 9; cont++){
      let inputEle = document.createElement('input');
      inputEle.setAttribute('type', 'button');
      inputEle.setAttribute('id',`${cont}`);
      inputEle.addEventListener('mouseenter',enter, false);
      inputEle.addEventListener('mouseout', out, false);
      inputEle.addEventListener('click', click, false);
      document.querySelector('section').appendChild(inputEle);
      if (cont == 2 || cont == 5 || cont == 8){
        let b = document.createElement('br');
        document.querySelector('section').appendChild(b);
      }
    } 
  })();

};
jogoo();
