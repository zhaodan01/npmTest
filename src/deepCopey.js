/*
 * @Description: 
 * @Date: 2021-09-02 18:58:32
 * @LastEditTime: 2021-09-02 19:00:08
 * @LastEditors: zhaodan01
 */
export const deepCopy = (source) => {
  let dest
  if(Array.isArray(source)) {
      dest = []
      for (let i = 0; i < source.length; i++) {
          dest[i] =deepCopy(source[i])
      }
  } else if(toString.call(source) === '[object Object]') {
      dest = {}
      for(var p in source){
          if(source.hasOwnProperty(p)){
              dest[p]=deepCopy(source[p])
          }
      }
  } else {
      dest = source
  }
  return dest
}
