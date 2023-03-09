function receivesAFunction(cb) {
    cb();
    return "Meow";
}

//const frogNoises = function frogCity(){
//    console.log("croak! ribbit! eep!") 
//}
// function returnsANamedFunction() {
//    return frogNoises;
//}

function returnsANamedFunction() {
    return function catMeows(){console.log("Meow kitty!")};
}

function returnsAnAnonymousFunction(){
    return function(){console.log("A nameless bark")};
}