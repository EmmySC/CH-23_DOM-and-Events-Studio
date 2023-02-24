// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

   const takeOffButton = document.getElementById("takeoff");
   const flightStatus = document.getElementById("flightStatus");
   const shuttleFlightScreen = document.getElementById("shuttleBackground");
   const shuttleHeight = document.getElementById("spaceShuttleHeight");

   const landingButton = document.getElementById("landing");
   const abortMissionButton = document.getElementById("missionAbort");

   const rocket = document.getElementById("rocket");
   let rocketPositionX = 0;  /* horizontal movement */
   let rocketPositionY = 0;  /* vertical movement */
   let rocketAltitude = 0;   /* helps with performing math to have the number value stored as a variable */

   const leftButton = document.getElementById("left");
   const rightButton = document.getElementById("right");
   const upButton = document.getElementById("up");
   const downButton = document.getElementById("down");


   takeOffButton.addEventListener('click', function() {
      //when the "Take Off" button is clicked, the following should happen: a window confirm pops-up, if shuttle is ready for take off (conditional --> boolean)
      let readyToTakeoff = confirm("Confirm that the shuttle is ready for takeoff."); //don't need window.confirm
      //console.log(readyToTakeoff); //check output console from webpage
      if(readyToTakeoff) {
        //the flight status should change to "Shuttle in flight."
         flightStatus.innerText = "Shuttle in flight."; //element only has text
         //background color of the shuttle flight screen should change from green to blue
         shuttleFlightScreen.style.backgroundColor = 'blue';
         //shuttle height should increase by 10,000 miles
         shuttleHeight.innerHTML = 10000; //element can have text or html
      }
   });

   landingButton.addEventListener('click', function() {
       //a window alert should let user know "The shuttle is landing. Landing gear engaged."
       alert("The shuttle is landing. Landing gear engaged."); //don't need window.alert
       //flight status should change to "The shuttle has landed."
       flightStatus.innerHTML = "The shuttle has landed.";
       //background color of the shuttle flight screen should change from blue to green
       shuttleFlightScreen.style.backgroundColor = 'green';
       //shuttle height should go down to 0
       shuttleHeight.innerHTML = 0;
   });

   abortMissionButton.addEventListener('click', function() {
      //a window confirm should let the user know "Confirm that you want to abort the mission."
      let shouldAbortMission = confirm("Confirm that you want to abort the mission."); //don't need window.confirm
      
      if(shouldAbortMission) {
         //if the user wants to abort the mission, add parts b-d
         flightStatus.innerHTML = "Mission aborted.";
         //background color of the shuttle flight screen should change from blue to green
         shuttleFlightScreen.style.backgroundColor = 'green';
         //shuttle height should should go down to 0
         shuttleHeight.innerHTML = 0;
      }
   });

/* Event Delegation -- moving the rocket */
   document.addEventListener("click", function(event) {
      console.log(event.target.id); /* target is the actual object */
      
      if (event.target.id === "left") {
         rocketPositionX -= 10;
         rocket.style.marginLeft = rocketPositionX + 'px'; /* parseInt('string', radix) */
      }

      if (event.target.id === "right") {
         rocketPositionX += 10;
         rocket.style.marginLeft = rocketPositionX + 'px';
      }

      if (event.target.id === "up") { /* && rocketAltitude < 250000 */
         rocketPositionY -= 10;
         rocket.style.bottom = rocketPositionY + 'px'; /* marginBottom */
         rocketAltitude -= 10000; /* Number */
         shuttleHeight.innerHTML = rocketAltitude;
      }

      if (event.target.id === "down") { /* && rocketAltitude > 0 */
         rocketPositionY += 10;
         rocket.style.bottom = rocketPositionY + 'px'; /* marginBottom */
         rocketAltitude += 10000;  /* Number */
         shuttleHeight.innerHTML = rocketAltitude;
      }
   });

 /*  
   upButton.addEventListener('click', function() {
      //the shuttle height should go up
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      let shuttleHeightAmount = Number(shuttleHeight.innerText);
      //console.log(shuttleHeightAmount, typeof shuttleHeight);
      shuttleHeightAmount += 10000;
      shuttleHeight.innerText = shuttleHeightAmount;
   });

   downButton.addEventListener('click', function() {
      //the shuttle height should go down
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      let shuttleHeightAmount = Number(shuttleHeight.innerText);
      //console.log(shuttleHeightAmount, typeof shuttleHeight);
      shuttleHeightAmount -= 10000; //decrement
      shuttleHeight.innerText = shuttleHeightAmount;
   });

   leftButton.addEventListener('click', function() {
       let shuttleHeight = document.getElementById("spaceShuttleHeight");
       let shuttleHeightAmount = Number(shuttleHeight.innerText);
       shuttleHeightAmount -= 10; //10px?
       shuttleHeight.innerText = shuttleHeightAmount;
   });

   rightButton.addEventListener('click', function() {
      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      let shuttleHeightAmount = Number(shuttleHeight.innerText);
      shuttleHeightAmount -= 10; //10px?
      shuttleHeight.innerText = shuttleHeightAmount;
   });
 */
   

});  //must wait for the window finish loading before looking for anything inside the document (website) executing js code