import log from './pretty-log'

function basic() {
  // what is returned?
  let x = 100
  const y = 200
  return {x: x, y: y} // {x: 100, y: 200}
}
//log(basic())

function immutable() {
  // what is returned?
  const object = {a: 'b'}
  const array = [1, 2, 3, 4]

  object.a = 'q'
  array.splice(1, 1)
  return {object: object, array: array} // {object: {a: 'q'}, array: [1, 3, 4]}
}
//log(immutable())

function immutableReference() {
  // what is returned?
  const object = {a: 'b'}
  object = {a: 'q'}
  return object // Throw Exception
}
//log(immutableReference())

function ifBlock() {
  // what is returned?
  if (3 > 1) {
    const x = 34
    let y = 43
  }
  return {x: x, y: y} // Thorw Exception
}
//log(ifBlock())

function block() {
  // what is returned?
  { // this is called a "block" ✨
    const x = 42
    let y = 24
  }
  return {x: x, y: y} // Throw Exception
}
//log(block())

function scoped() {
  // what is returned?
  let x = 33
  {
    const x = 123
  }
  return x // 33
}
//log(scoped())

function veryScoped() {
  // what is returned?
  let x = 23
  {
    let x
    {
      x = 55
    }
    // let x = 45 // if this weren't commented out, this file would fail parsing
  }
  return x // 23
}
// log(veryScoped())

function temporalDeadZone() {
  console.log(myVar) // undefined
  console.log(myLet) // throw Exception
  console.log(myConst) // throw Exception

  var myVar = 'var'
  let myLet = 'let'
  const myConst = 'const'
  return {myVar: myVar, myLet: myLet, myConst: myConst}
}
//log(temporalDeadZone())

function semiPractical() {
  // what is returned from this function?
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (var i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback()) // i = 4
  //[undefined,undefined,undefined,undefined]
}
//log(semiPractical())








// SOLUTIONS ARE BELOW THIS LINE!












function immutableReferenceSOLUTION() {
  // what is returned?
  let object = {a: 'b'}
  object = {a: 'q'}
  return object
}
// log(immutableReferenceSOLUTION())

function semiPracticalSOLUTION() {
  const myThings = ['thing1', 'thing2', 'red fish', 'blue fish']
  const callbacks = []
  for (let i = 0; i < myThings.length; i++) {
    callbacks.push(function thingGetter() {
      return myThings[i]
    })
  }
  return callbacks.map(callback => callback())
}
// log(semiPracticalSOLUTION())



/*
  eslint
  prefer-const:0,
  no-undef:0,
  no-shadow:0,
  no-lone-blocks:0,
  object-shorthand:0,
  vars-on-top:0,
  no-var:0,
  no-loop-func:0,
  no-const-assign:0,
  no-use-before-define:0
*/
