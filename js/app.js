function getPin(){
    const pin = Math.round(Math.random() * 100000)
    const pinSring = pin + '';
    if(pinSring.length == 5){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
   const pin = getPin();
     document.getElementById('display-pin').value = pin;
} 
document.getElementById('key-pad').addEventListener('click', function(event){
    const inputText = event.target.innerText;
    const calc = document.getElementById('input-display');
    if(isNaN(inputText)){
        if(inputText == 'C' ){
            calc.value = '';
        }
    }
    else{
        
    const previousCalc = calc.value;
    const newCalc =  previousCalc +inputText;
    calc.value = newCalc;
    }
})
function verifyPin(){
    const generatDisplayPin = document.getElementById('display-pin').value;
    const inputDisplayPin = document.getElementById('input-display').value;

    const succesMessage = document.getElementById('notify-succes');
    const errorMessage = document.getElementById('notify-fail');

    if(generatDisplayPin == inputDisplayPin){
        
        succesMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } 
    else{
        succesMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}