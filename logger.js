


  
  const buttons = document.querySelectorAll(".op-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const op = button.getAttribute("data-op"); // جلب العملية من الزر
      const input = document.getElementById("num0");
      input.value = op; // وضع العملية في الحقل
    });
  });
  





function fname1() {
  var start = document.getElementById("num1").value;
    var end = document.getElementById("num2").value;
    var opp = document.getElementById("num0").value;

    document.getElementById("num3").value = start + opp + end;
   var result;
   switch (opp) {
     case '+':
      result= Number(start) + Number(end); 
    document.getElementById("num4").value = result;
       break;
     case '-':
      result= Number(start) - Number(end); 
      document.getElementById("num4").value = result;
       break;
       case '*':
       case '×':
       case 'X':
      result= Number(start) * Number(end); 
      document.getElementById("num4").value = result;
       break;
       case '/':
       case '÷':
      result= Number(start) / Number(end); ; 
      document.getElementById("num4").value = result;
       break;
     default:
       // Tab to edit
   }
    
  }

