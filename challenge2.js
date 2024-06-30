function calculateDemeritPoints(speed){
    const speedLimit= 70;
    const kmPerPoint= 5;

if (speed < speedLimit){
    console.log("ok")
    return;
}
else{
    const excessSpeed = speed - speedLimit;
const demeritPoints = Math.floor(excessSpeed / kmPerPoint)
if (demeritPoints> 12){
    console.log("License suspended")
}
else {
    console.log(`Points: ${demeritPoints}`);
}
}
}
calculateDemeritPoints(80)
calculateDemeritPoints(100)
calculateDemeritPoints(140)
 