module.exports = function check(str, bracketsConfig) {
  var result;
  myStr = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j === 0; j++) {
      for (let v = 0; v < myStr.length; v++) {
        if (myStr[v] === bracketsConfig[i][j]) {
          let switcher = false;
          for (let m = v + 1; (m < myStr.length) && (switcher === false); m++) {
            if ((myStr[m] === bracketsConfig[i][j + 1]) && (myStr.indexOf(myStr[v]) <= myStr.indexOf(myStr[m]))) {
              switcher = true;
              myStr[v] = '!';
              myStr[m] = '!';
            }
          }
        }
      }
    }
  }
  var result = []
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] != '!') {
      result.push([myStr[i]])
    }
  }
  return result == 0;
}
