
function buttonClick (value) {
console.log(value);
  if (value==isNaN(parseInt)){
    handleSymbol(value);
  }else{
    handleSymbol(value);
  }
}

function handleNumbers (number) {
  console.log('Is a number');
}

function handleSymbol(symbol){
  console.log('is a symbol');
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