
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół
  // if(e.which==38)
  // {
  //   red+=10;
  //   green+=10;
  //   blue+=10;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // }
  // if(e.which==40)
  // {
  //   red-=10;
  //   green-=10;
  //   blue-=10;
  //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // }
  switch(e.which){
    case 38:
    
    red+=10;
    green+=10;
    blue+=10;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    break;

    case 40:
        red-=10;
          green-=10;
          blue-=10;
          document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  }

}

window.addEventListener('keydown', changeColor)