
function buttonClick (value) {
console.log(value);
  if (value==isNaN(parseInt)){
    handleSymbol(value);
  }else{
    handleSymbol(value);
  }
}

function handleNumbers (number) {
  console.log('number');
}

function handleSymbol(symbol){
  console.log(symbol);
}

function init(){
  document
  .querySelector('.calc-buttons')
    .addEventListener("Click", function(event){
      buttonClick(event.target.innerText);
    });
}

init();