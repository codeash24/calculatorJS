let buffer='0';
const screen = document.querySelector('.screen');


function buttonClick (value) {
  if (isNaN(parseInt(value))){
    handleSymbol(value);
  }else{
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  if(buffer==='0'){
    buffer =  number;
  }
  else{
    buffer += number;
  }
  console.log(buffer);
}

function handleSymbol(symbol){

}

function init(){
  console.log('hi');
  document
  .querySelector('.calc-buttons')
    .addEventListener("click", function(event){
      buttonClick(event.target.innerText);
    });
}

function rerender(){
  screen.innerText=buffer;
}

init();