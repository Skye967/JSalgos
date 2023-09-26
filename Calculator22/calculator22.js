

function calculateThis(num){
    console.log("working")
    var inchToMM = num * 25.4;
    var MMToInch = num / 25.4;
    var radiusToDiameter = num * 2;
    var DiameterToRadius = num / 0.5;
    var Area = 3.1416 * (num / 2)**2;
    const conversions = {ITM:inchToMM, MTI:MMToInch, RTD:radiusToDiameter, DTR:DiameterToRadius, A:Area}
    //console.log(inchToMM, MMToInch, radiusToDiameter, DiameterToRadius, Area)
    console.log(conversions)
}
onchange(calculateThis(4))
calculateThis(4)
