let buffer='0';

function buttonClick (value) {
  if (isNaN(parseInt(value))){
    handleSymbol(value);
  }else{
    handleNumber(value);
  }
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

init();