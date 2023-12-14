


var newArray= [
    {
        authorName: '--Wayne Gretzy 0',
        authorQuota: "You miss 100% of the shots you don't take."
    },
    
    {
        authorName: '--Elbert Hubbard 1',
        authorQuota: "Do not take life too seriously. You will not get out alive."
    },
    
    {
        authorName: "--Frank Sinatra 2",
        authorQuota: "The best revenge is massive success."
    },
    
    {
        authorName: "--Epictetus 3",
        authorQuota: "It's not what happens to you, but how you react to it that matters."
    },
    
    {
        authorName: "--Nelson Mandela 4",
        authorQuota: "Resentment is like drinking poison and waiting for your enemies to die."
    }
]




var authorArray;
var authorArray1;
var x = 1 ;

function ReArray(){
   authorArray = Math.floor(Math.random() * newArray.length);
   return authorArray; 
}

function updateQuota(){
    authorArray = ReArray();

    if(x==1){

        document.getElementById("quota").innerHTML = `
        <p>${newArray[authorArray].authorQuota}</p>
        <p>${newArray[authorArray].authorName}</p>
        `;
       x--;
    }
    else if(authorArray == authorArray1) {
     
        
        do{
            authorArray = Math.floor(Math.random() * newArray.length);

       }while( authorArray == authorArray1);

       document.getElementById("quota").innerHTML = `
        <p>${newArray[authorArray].authorQuota}</p>
        <p>${newArray[authorArray].authorName}</p>
        `;
    
    } else{
       
        document.getElementById("quota").innerHTML = `
        <p>${newArray[authorArray].authorQuota}</p>
        <p>${newArray[authorArray].authorName}</p>
        `;
    }
    
    
    console.log(authorArray );
    console.log(authorArray1);

    authorArray1 = authorArray;
}



// console.log(authorArray1 +"  m3");


