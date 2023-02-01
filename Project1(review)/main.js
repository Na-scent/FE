let target = document.querySelector('#dynamic');

function blink(){
  target.classList.toggle('active');
}

function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr)}, 80);
  }
  else{
    setTimeout(resetTyping, 3000);
  }
}

function resetTyping(){
  target.textContent = ""
  dynamic(randomString());
}

function randomString(){
  let stringArr = ['Learn to JavaScritp', 'Learn to CSS', 'Learn to HTML']
  let selectString = stringArr[Math.floor(stringArr.length * Math.random())]
  let selectStringArr = selectString.split("");
  return selectStringArr
}

dynamic(randomString());
setInterval(blink, 500);