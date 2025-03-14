function Solve(hashTag){

    let hashTagSplited = hashTag.split(' ');

    for (let position = 0; position < hashTagSplited.length; position++){
        let currentWord = hashTagSplited[position];
        if(currentWord[0] === '#'){
           currentWord = currentWord.slice(1);
            if(/^[A-Za-z]+$/.test(currentWord)){
                console.log(currentWord);
            }
        }

    }

}


Solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
Solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
