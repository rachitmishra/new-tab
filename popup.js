function generateFlatColorWithOrder(num, rr, rg, rb) {
        var colorBase = 256;
        var red = 0;
        var green = 0;
        var blue = 0;
        num = Math.round(num);
        num = num + 1;
        if (num !== null) {
            red = (num*rr) % 256;
            green = (num*rg) % 256;
            blue = (num*rb) % 256;
        }
        var redString = Math.round((red + colorBase) / 2).toString();
        var greenString = Math.round((green + colorBase) / 2).toString();
        var blueString = Math.round((blue + colorBase) / 2).toString();
        return "rgb("+redString+", "+greenString+", "+blueString+")";
        //return '#' + redString + greenString + blueString;
    }

    function generateRandomFlatColor() {

        var rr = Math.round(Math.random()*1000);
        var rg = Math.round(Math.random()*1000);
        var rb = Math.round(Math.random()*1000);
        return generateFlatColorWithOrder(1, rr, rg, rb);
    }

window.onload = function() {
 document.body.style.backgroundColor = generateRandomFlatColor();
//  var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
//  document.getElementById('time').innerHTML = time;
  document.getElementById('checkPage').innerHTML = localStorage.lastQuote;
  WikiquoteApi.getRandomQuote("Love",
          function(quote) {
              var quoteString =  quote.quote;
              if(quoteString) {
                  document.getElementById('checkPage').innerHTML = quoteString;
                  localStorage.lastQuote = quoteString;
            }
          },
          function(msg){
            alert(msg);
          }
        );
};
