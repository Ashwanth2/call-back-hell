
setTimeout(() => {

function add(name1){
    var r=name1
    callback(r);
}
add("Happy");

function callback(r){
   var give=(r+" "+"Independence")
   Take(give)
}

function Take(give){
    var fin =(give+" "+"Day")
    console.log(fin);
    var parent= document.querySelector('.container')
    parent.append(fin);

}

},10000);