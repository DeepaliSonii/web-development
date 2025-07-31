let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value == 'DEL') {
      string = string.substring(0, string.length - 1);
    } else if (value == 'AC') {
      string = '';
    } else if (value == '=') {
      try {
        string = eval(string).toString();
      } catch {
        string = "Error";
      }
    } else {
      const operators = ['+', '-', '*', '/'];
      const lastChar = string[string.length - 1];

      // Prevent double operators
      if (operators.includes(value) && operators.includes(lastChar)) {
        string = string.slice(0, -1);
      }

      string += value;
    }

    display.value = string;
  });
});
