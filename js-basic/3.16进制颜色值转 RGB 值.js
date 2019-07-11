/*
完成函数 hexToRGB，它的作用将 16 进制颜色值转换成 RGB 值：

hexToRGB('#F0F0F0') // => rgb(240, 240, 240)
hexToRGB('#9fc') // => rgb(153, 255, 204)
hexToRGB('无效颜色') // => null
*/


/*
RegExp.prototype.test()
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
*/
const hexToRGB = (hex) => {
    let regex = /^\#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if(!regex.test(hex)) {
      return null;
    }
    let num_map = { A: 10,  B: 11, C: 12, D: 13, E: 14, F: 15};
    let r = 0, g = 0, b = 0;
    
    hex = hex.replace('#', '').split('');
    if(hex.length === 3) {
      hex.splice(0, 0, hex[0]);
      hex.splice(2, 0, hex[2]);
      hex.splice(4, 0, hex[4]);
    }
    
    hex = hex.map(h => {
      let int = parseInt(h);
      return (int || int === 0) ? int : num_map[h.toUpperCase()];
    });
    
    r = 16 * hex[0] + hex[1];
    g = 16 * hex[2] + hex[3];
    b = 16 * hex[4] + hex[5];
    
    return `rgb(${r}, ${g}, ${b})`;
  }
//console.log(hexoToRGB('#F0F0F0'))