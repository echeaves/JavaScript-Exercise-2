function operation(){
  let firstOperand = Number(document.getElementById('firstOperand').value);

  let secondOperand = Number(document.getElementById('secondOperand').value);

  let operators = document.getElementById('operators').value;

  let result = document.getElementById('result');

  let total = null;

  switch (operators){
    case '+':
      total = firstOperand + secondOperand;
      result.innerHTML = total
      break;

    case '-':
      total = firstOperand - secondOperand;
      result.innerHTML = total
      break;

    case '*':
      total = firstOperand * secondOperand;
      result.innerHTML = total
      break;

    case '/':
      total = firstOperand / secondOperand;
      result.innerHTML = total
      break;
    case '**':
      total = Math.pow(firstOperand, secondOperand);
      result.innerHTML = total
      break;
    case '%':
        total = firstOperand % secondOperand;
        result.innerHTML = total
        break;

      case '<':
        total = firstOperand < secondOperand;
      result.innerHTML = total
      break;
      case '>':
        total = firstOperand > secondOperand;
      result.innerHTML = total
      break;
      case '!==':
        total = firstOperand !== secondOperand;
      result.innerHTML = total
      break;
      case '===':
        total = firstOperand === secondOperand;
      result.innerHTML = total
      break;
    default:
      console.log('No Operator found!');
      
      break;
  }
}
let button = document.getElementById('button');

button.addEventListener("click", operation);