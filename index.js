function calculate() {
    let price = document.getElementById("price").value;

    let fuel = document.getElementById("fuel").value;

    let capacity = document.getElementById("capacity").value;

    let power = document.getElementById("power").value;

    
    if(fuel == "petrol" && capacity>=1.5 && power>=400)  {
        result = price*2;
        alert(result);
   
    }
    else if(fuel == "diesel" && capacity>3.5 && power>=500){
        result=price*3;
        alert(result);
       
    }
    else{
        alert(price);
       
    }
}


        
