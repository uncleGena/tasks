import { isNull } from "util";

function log(...props) {
  console.log(...props)
}

export default (function () {

  // let & var
  // {
  //   var a = 'a'
  // }

  // {
  //   let b = 'b'
  // }

  let a = 2;
  let b = 5
  log(a <<= b )

  

})()