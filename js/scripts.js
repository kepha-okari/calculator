    var add = function(number1, number2) {
      return number1 + number2;
    };

    var number1 = parseInt(prompt("Enter a number:"));//
    var number2 = parseInt(prompt("Enter a number:"));


    alert(add(number1, number2));

    function bmi(weight,height){// the calculate body mass index

      var result = weight/height;
      return result;
    }

    var weight = parseInt(prompt("Enter your weight:"));//
    var height = parseInt(prompt("Enter your height:"));

    alert(bmi(weight,height));
