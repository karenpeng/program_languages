var mode;
var digit = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

function cal(string) {
  var totalResult = 0;
  var result = [];
  var level = -1;
  var counter = 0;
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
        if (counter === 0) {
          result[level] += digit[m];
          counter++;
        } else {
          result[level] -= digit[m];
        }
      }
    }
    if (string[i] === ')') {
      level--;
      counter = 0;
    }
  }
  for (var j = 0; j < result.length; j++) {
    totalResult += result[j];
  }
  console.log(result, totalResult);
}

cal('(+98)');
cal('(+8(-93))');
cal('(+9(-54)9(+37)9)');