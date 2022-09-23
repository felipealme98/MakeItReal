var isAnagram = function(s, t) {
    
    x = s.split("").sort();
    y = t.split("").sort();
    
    for(let i = 0; i < x.length;i++){
        
        if(x[i] !== y[i]){
            
            return false

        }
        
    }
    
    return true
};
