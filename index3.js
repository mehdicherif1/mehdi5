/*function bhh(array){
    var a=5
 
    for(var i=0;i<array.length;i++){
        if(a==array[i]){
           console.log('la valeur est', true) 
        }else{
            console.log('la valeur est', false) 
        }
       
    }


}*/


function trouve(str,c){
    for(var i=0; i<str.length;i++){
        if(c==str[i]){
            console.log('true')
        }else
        {
            console.log('false')
        }
    }
}

function trouve2(str,c){
    var i=0
    while(i<str.length){
        if(c==str[i]){
            console.log('true')
        }else
        {
            console.log('false')
        }
        i++

    }

}

function trouve3(str,c){
    var i=0
    do{
        if(c==str[i]){
            console.log('true')
        }else
        {
            console.log('false')
        }
        i++
    }while(i<str.length)
}