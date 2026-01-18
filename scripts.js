
const button= document.querySelector(".button")


function sortear (){

const min= Math.ceil(document.querySelector(".min").value)
const max= Math.floor(document.querySelector(".max").value)

if(max > min){


const result= Math.floor(Math.random() * (max - min + 1)) + min;

alert(result)


}

else{

alert("o valor minimo tem que ser MENOR que o valor maximo")

    
}


}



document.addEventListener("keypress", function(e){

if(e.key === 'Enter')

sortear()

})

button.addEventListener("click", sortear)







