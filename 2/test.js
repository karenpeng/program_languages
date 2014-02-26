//var string = '(+98)';
var counter = 0;
var mode;
var result = [];
var level = -1;
var digit = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

function cal(string) {
  var totalResult = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      level++;
      result[level] = 0;
    }
    if (string[i] === '+') {
      mode = 'sum';
    }
    if (string[i] === '-') {
      mode = 'sub';
    }
    for (var m = 0; m < digit.length; m++) {
      if (mode === 'sum' && string[i] == digit[m]) {
        result[level] += digit[m];
      }
      if (mode === 'sub' && string[i] == digit[m]) {
        result[level] -= digit[m];
      }
    }
    if (string[i] === ')') {
      level--;
    }
  }
  for (var j = 0; j < result.length; j++) {
    totalResult += result[j];
  }
  console.log(totalResult);
}

cal('(+98)');
cal('(+8(-93))');
cal('(+ 10 (- 50 45) 10 (+ 3 7) 10)');