module.exports = function check(str, bracketsConfig) {
  var result = [];
  var open = [];
  var close = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] != '|' && bracketsConfig[i][0] != '7' && bracketsConfig[i][0] != '8') {
      open.push(bracketsConfig[i][0])
    }
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][1] != '|' && bracketsConfig[i][1] != '7' && bracketsConfig[i][1] != '8') {
      close.push(bracketsConfig[i][1])
    }
  }
  myStr = str.split('');
  if (myStr.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < myStr.length; i++) {
    if (open.includes(myStr[i])) {
      result.push(myStr[i]);
    } else if (close.includes(myStr[i]) && (result[result.length - 1] === open[close.indexOf(myStr[i])])) {
      result = result.slice(0, -1);
    } else if (myStr[i] === '|' || myStr[i] === '7' || myStr[i] === '8') {
      if ((result[result.length - 1] === '|' || result[result.length - 1] === '7' || result[result.length - 1] === '8') && result[result.length - 1] === myStr[i]) {
        result = result.slice(0, -1);
      } else if (result[result.length - 1] != '|' && result.includes('|') === false || result[result.length - 1] != '7' && result.includes('7') === false || result[result.length - 1] != '8' && result.includes('8') === false) {
        result.push(myStr[i]);
      } else {
        return false;
      }
    }
  }
  return result == 0;
}
