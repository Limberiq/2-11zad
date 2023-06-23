function rand(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
        }
        function sum(a,b){
            return rand(a,b)*rand(a,b);
        }
       alert(sum(0, 50));
