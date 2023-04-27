let count = 1;

document.getElementById("radioBtn-1").checked = true;

setInterval( function(){
  nextImg();
}, 4000)

function nextImg(){
  count++;
  if(count>3){
    count = 1;
  }
  document.getElementById("radioBtn-" + count).checked = true;
}

