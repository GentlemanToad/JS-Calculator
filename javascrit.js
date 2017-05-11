var mulitplyBtn = document.getElementById('multiplyBtn');
var divideBtn = document.getElementById('divideBtn');

mulitplyBtn.onclick = multiplyNum;
divideBtn.onclick = divideNum;

function multiplyNum(){
  var firstNum = document.getElementById('firstNum').value;
  var secondNum = document.getElementById('secondNum').value;
  var answer = firstNum * secondNum;
  document.getElementById('answer').innerText = answer;
}

function divideNum(){
  var firstNum = document.getElementById('firstNum').value;
  var secondNum = document.getElementById('secondNum').value;
  var answer = firstNum / secondNum;
  document.getElementById('answer').innerText = answer;
}
