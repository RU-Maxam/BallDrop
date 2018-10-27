/* Animate smooth scrolling instead of a snap scroll when hit button
 use jquery to grab onto id of view work and use .on in an
 event so when clicked it will run a function and in
 this function we will create a var called images and set it to 
 jquery id of images and we want to get the positon with .position 
 and we want the top so .postion top
 to animate we want to use jquery and snip it into the body
 animate will take in the object and we want it to scroll in to the top
 */ 
$('#view-work').on('click', function() {
    const images = $('#images').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });
