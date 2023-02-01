let target = document.querySelector("#dynamic");


function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift(); //  배열의 앞부터 빼냄 pop
    setTimeout(function(){
      dynamic(randomArr)
    }, 80);
  }
  else{
    setTimeout(resetTyping, 3000);
  }
}

function blink(){
  target.classList.toggle("active"); 
}

function resetTyping(){
  target.textContent = "";
  dynamic(randomString())
}

function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Python"];
  let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

dynamic(randomString())
setInterval(blink, 500);

