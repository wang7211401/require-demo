require(['./hello'],function(x){
    var div = document.createElement('div');
    div.innerText = x;
    document.body.appendChild(div)
});