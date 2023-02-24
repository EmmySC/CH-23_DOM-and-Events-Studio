// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.addEventListener('load', function() {
//     let takeOffButton = document.getElementById("takeoff"); 
//     takeOffButton.addEventListener('click', function() {
//        //when the "Take Off" button is clicked, the following should happen: a window confirm pops-up, if shuttle is ready for take off (conditional --> boolean)
//        let readyToTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff."); //don't need window
//        //console.log(isReadyToLaunch); //check output console from webpage
//        if(readyToTakeoff) {
//          //the flight status should change to "Shuttle in flight."
//           let flightStatus = document.getElementById("flightStatus");
//           flightStatus.innerText = "Shuttle in flight.";
          
//           //background color of the shuttle flight screen (id="shuttleBackground") should change from green to blue
//           let shuttleFlightScreen = document.getElementById("shuttleBackground");
//           shuttleFlightScreen.setAttribute("style", "background-color: blue");
         
//           //shuttle height should increase by 10,000 miles
//           let shuttleHeight = document.getElementById("spaceShuttleHeight");
//           shuttleHeight.innerText = "10000";
//        }
//     });
 
//     let landingButton = document.getElementById("landing");
//     landingButton.addEventListener('click', function() {
//         //a window alert should let user know "The shuttle is landing. Landing gear engaged."
//         window.alert("The shuttle is landing. Landing gear engaged.");
 
//         //flight status should change to "The shuttle has landed."
//         let flightStatus = document.getElementById("flightStatus");
//         flightStatus.innerText = "The shuttle has landed.";
 
//         //background color of the shuttle flight screen should change from blue to green
//         let shuttleFlightScreen = document.getElementById("shuttleBackground");
//         shuttleFlightScreen.setAttribute("style", "background-color: green");
 
//         //shuttle height should go down to 0
//         let shuttleHeight = document.getElementById("spaceShuttleHeight");
//         shuttleHeight.innerText = "0";
//     });
 
//     let abortMissionButton = document.getElementById("missionAbort");
//     abortMissionButton.addEventListener('click', function() {
//        //a window confirm should let the user know "Confirm that you want to abort the mission."
//        let shouldAbortMission = window.confirm("Confirm that you want to abort the mission."); 
//        if(shouldAbortMission) {
//           //if the user wants to abort the mission, add parts b-d
//           let flightStatus = document.getElementById("flightStatus");
//           flightStatus.innerText = "Mission aborted.";
          
//           //background color of the shuttle flight screen (id="shuttleBackground") should change from blue to green
//           let shuttleFlightScreen = document.getElementById("shuttleBackground");
//           shuttleFlightScreen.setAttribute("style", "background-color: green");
         
//           //shuttle height should should go down to 0
//           let shuttleHeight = document.getElementById("spaceShuttleHeight");
//           shuttleHeight.innerText = "0";
//        }
 
//     });
 
//     let upButton = document.getElementById("up");
//     upButton.addEventListener('click', function() {
//        //the shuttle height should go up
//        let shuttleHeight = document.getElementById("spaceShuttleHeight");
//        let shuttleHeightAmount = Number(shuttleHeight.innerText);
//        //console.log(shuttleHeightAmount, typeof shuttleHeight);
//        shuttleHeightAmount += 10000;
//        shuttleHeight.innerText = shuttleHeightAmount;
//     });
 
//     let downButton = document.getElementById("down");
//     downButton.addEventListener('click', function() {
//        //the shuttle height should go down
//        let shuttleHeight = document.getElementById("spaceShuttleHeight");
//        let shuttleHeightAmount = Number(shuttleHeight.innerText);
//        //console.log(shuttleHeightAmount, typeof shuttleHeight);
//        shuttleHeightAmount -= 10000; //decrement
//        shuttleHeight.innerText = shuttleHeightAmount;
//     });
 
 
 
//     let rightButton = document.getElementById("right");
//     rightButton.addEventListener('click', function() {
//        let shuttleHeight = document.getElementById("spaceShuttleHeight");
//        let shuttleHeightAmount = Number(shuttleHeight.innerText);
//        shuttleHeightAmount -= 10; //10px?
//        shuttleHeight.innerText = shuttleHeightAmount;
//     });
 
//  });  //must wait for the window finish loading before looking for anything inside the document (website) executing js code