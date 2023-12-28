
// const convertKmToMeter = () => {
//     const KmInput = parseFloat(document.getElementById("KmInput").value);
//     const meters = KmInput * 1000;
//     document.getElementById("kilometersResult").innerHTML = `${KmInput} kilometers is ${meters} meters`;
//   }
  
class rectangle{
  constructor(width,height){
    this.width =width;
    this.history = height
  }
  area(){
    return this.width * this.history
  }
}  
const result =new rectangle(90,45)
console.log(result.area());


