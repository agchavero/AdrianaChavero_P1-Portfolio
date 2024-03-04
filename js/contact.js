// preload background images
function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}
preload_image("../media/images/gradients.png");
preload_image("../media/images/gradients1.png");
preload_image("../media/images/gradients2.png");
preload_image("../media/images/gradients3.png");
preload_image("../media/images/gradients4.png");
preload_image("../media/images/gradients5.png");
preload_image("../media/images/gradients6.png");
preload_image("../media/images/gradients7.png");
preload_image("../media/images/gradients8.png");
preload_image("../media/images/gradients9.png");
preload_image("../media/images/gradients10.png");
preload_image("../media/images/gradients11.png");
preload_image("../media/images/gradients12.png");
preload_image("../media/images/gradients13.png");
preload_image("../media/images/gradients14.png");
preload_image("../media/images/gradients15.png");
preload_image("../media/images/gradients16.png");


// // circles following cursor code
// const cursor = document.querySelector("#cursor");
// const cursorBorder = document.querySelector("#cursor-border");
// const cursorPos = { x: 0, y: 0 };
// const cursorBorderPos = { x: 0, y: 0 };

// document.addEventListener("mousemove", (e) => {
//   cursorPos.x = e.clientX;
//   cursorPos.y = e.clientY;

//   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// requestAnimationFrame(function loop() {
//   const easting = 8;
//   cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
//   cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

//   cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
//   requestAnimationFrame(loop);
// });

// document.querySelectorAll("[data-cursor]").forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     if (item.dataset.cursor === "pointer") {
//       cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
//       cursorBorder.style.setProperty("--size", "30px");
//     }
//   });
//   item.addEventListener("mouseout", (e) => {
//     cursorBorder.style.backgroundColor = "unset";
//     cursorBorder.style.mixBlendMode = "unset";
//     cursorBorder.style.setProperty("--size", "50px");
//   });
// });

//create event listener for the button
// creating a nameless function only happening here
document.getElementById('submit').addEventListener('click',function(event){

    event.preventDefault();
    handleFormSubmit();
    
  
  });
  
  //create a function to handle the form submit
  function handleFormSubmit(){
      let name = document.getElementById('yourName').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
      let tyMessage = ["Thank you for your message " +  name +"!", "Thank you,  " +  name + "! I will get back to you as soon as possible!", "Thank you for reaching out,  " +  name + ". Have a great day!", "Thank you for your inquiry " + name + ". I will get back to you shortly!"];
      
      
  
      let checkValue = document.getElementById('noRobot').checked;
    if(checkValue){
          // add a thank you message to the page
         // Display the variable name on the page as an h2 element 
         document.querySelectorAll('h2').forEach((element) => {
            element.remove();
        }); 
        let randomIndex = Math.floor(Math.random() * tyMessage.length);
        let h2Element = document.createElement('h2');
        h2Element.textContent = tyMessage[randomIndex];
        document.body.appendChild(h2Element);
    }
    
      else{
          // add a you are a robot message to the page
        // add a "Ahh! You're a robot!" message to the page
        document.querySelectorAll('h2').forEach((element) => {
            element.remove(); 
        });
        let robotMessage = document.createElement('h2');
        robotMessage.textContent = "Please check the box to confirm you are not a robot.";
        document.body.appendChild(robotMessage);
      }
  
  
      
      document.getElementById('contactForm').reset();
  
  
  
  }

  