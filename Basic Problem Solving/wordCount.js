function wordCount (n){
    let whiteSpace = 0;
    let count = 0;
    for (i=0; i < n.length; i++){
        if (n[i] == " "){
            whiteSpace = whiteSpace + 1 ;
            if (n[i] == " " && n[i-1] != " "){ // works if no white-space at the end of string. Ex: speech1
                count = count + 1 ; 
            }
            
        }
    }
    if (n[n.length-1] == " "){ // for white-space at end of string. Ex: speech2
        count = count -1;
    }
    count = count+1;
    return ` Total word count: ${count}\n Total white-space: ${whiteSpace}`;
}

let speech1 = 'I am a lover boy, ei amar porichoy, korina kono bahana.';
console.log(wordCount(speech1), "\n");

let speech2 = 'I am    a lover boy.  ';
console.log(wordCount(speech2), "\n");

