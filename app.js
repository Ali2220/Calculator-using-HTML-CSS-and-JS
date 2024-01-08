let string = "";
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{      // sare button ko aik array ma dal dia or phr sb pr forEach() loop se addEventListner lga dia
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);    // eval is a function which evaluates js code represented as a string and returns its completion value
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector("input").value = string
        }
        else{

        
        console.log(e.target);              // e.target --> Element that handle the event (Here button is handling the click event)
        string = string + e.target.innerHTML   // shuru mai string empty tha phr hum ne aus m e.target.innerHTML kr dia. Means agr <button> 8 </button> hai to yhn e.target k innerHTML 8 hai. 
        document.querySelector("input").value = string   // input ki value k andr string value dal di
        }
        
    })
    
})

