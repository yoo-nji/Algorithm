const solution = (seoul) => {
 let results = ""
 for( i in seoul){
     if(seoul[i] === "Kim"){
        results = `김서방은 ${i}에 있다`;
     } 
 } return results
}