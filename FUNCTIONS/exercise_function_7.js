/*
1.  Why pay a fortune teller when you can just program your fortune yourself?
    Write a function named tellFortune that:
    takes 4 arguments: number of children, partner's name, geographic location, job title.
    outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(job, location, partner, kids) {
    var future = 'You will be a ' + job + ' in ' + location + ' and married to ' +
    partner + ' with ' + kids + ' kids.';
    console.log(future);
}

tellFortune('Kiroprakticar', 'Rumunija', 'Milan', 3);
tellFortune('Administrator', 'Japan', 'Nikola', 2);
tellFortune('Programer', 'Nemacka', 'Pera', 5);

/*
2.  Why pay a fortune teller when you can just program your fortune yourself?
    Write a function named tellFortune that:
    takes 4 arguments: number of children, partner's name, geographic location, job title.
    outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(job, location, partner, kids) {
    var future = 'You will be a ' + job + ' in ' + location + ' and married to ' +
    partner + ' with ' + kids + ' kids.';
    console.log(future);
}

tellFortune('Kiroprakticar', 'Rumunija', 'Milan', 3);
tellFortune('Administrator', 'Japan', 'Stefan', 2);
tellFortune('Programer', 'Nemacka', 'Pera', 5);

/*
3.  Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, numPerDay) {
    var maxAge = 90;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of coffee to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 4);
  calculateSupply(28, 4.5);


  /*
  4.    It's hot out! Let's make a converter based on the steps here.

    Create a function called celsiusToFahrenheit:
    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".

    Create a function called fahrenheitToCelsius:
    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."

*/

function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }

