var plusbtn = document.querySelectorAll(".plusbtn");
console.log(plusbtn);
  
  for (let i = 0; i < plusbtn.length; i++) {
      console.log(plusbtn[i]);
      plusbtn[i].addEventListener("click", function () { 
          if (plusbtn[i].nextElementSibling.innerHTML < 10)
            plusbtn[i].nextElementSibling.innerHTML++;
        });
      }  


    var minus = document.querySelectorAll(".minus");

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML > 0)
      minus [i].previousElementSibling.innerHTML--;
  });
}

var del = document.querySelectorAll (".del");
var item = document.querySelectorAll('.item')


for (let i=0; i< del.length; i++) {
del[i].addEventListener("click", function() {
item[i].remove()
  });
  }

var btnlike = document.querySelectorAll (".like") 
console.log (btnlike);

  like [i].addEventListener("click", function(){
 btnlike.classList.toggle("red");
});




function updateCartTotall (){

    var item = document.getElementsByClassName ('item')[0]
    var priceElement = document.getElementsByClassName ('price') [0]
    var qtElement = document.getElementsByClassName ('qt')[0]
    var total = 0
    
 for (let i = 0; i < item.length; i++) {
     
     total = total + (price * qt)
    
    }
 document.getElementsByName ('total')[0].innerText ='EUR' + total

}
