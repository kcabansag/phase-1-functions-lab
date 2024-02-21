// Code your solution in this file!
const addressStreet = 42;
function distanceFromHqInBlocks (pickupLocation) {
   
    return Math.abs(pickupLocation - addressStreet)
  }

  function distanceFromHqInFeet (pickupLocation) {
   let distanceInBlocks = distanceFromHqInBlocks(pickupLocation)
   let distanceInFeet = distanceInBlocks * 264
   return distanceInFeet
  }
  
  function distanceTravelledInFeet(startBlock, destinationBlock){
   let blocks = Math.abs(startBlock - destinationBlock)
   let blocksInFeet = blocks * 264
   return blocksInFeet
  }

  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }