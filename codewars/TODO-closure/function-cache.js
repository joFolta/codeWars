/* 
https://www.codewars.com/kata/525481903700c1a1ff0000e1

5 kyu
Function Cache

If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/

//UNSOLVED
//Copied Soln
function cache(func) {
  var calls = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}


// Attempts
function cache(func) {
  const store = {}
  return function(arg) {
    console.log(arg)
    if (store[arg]) {
      return store[arg]
    } else {
      const result = func(arg)
      store[arg] = result
      return result
    }
  }
}

function cache(func) {
  const store = {}
  return function(arg) {
    console.log(arg)
    if (arg === undefined) {
      if (store.undefined) {
        return store.undefined
      } else {
        const result = func(arg)
        store.undefined = result
      }
    } else if (store[arg]) {
      return store[arg]
    } else {
      const result = func(arg)
      store[arg] = result
      return result
    }
  }
}

function cache(func) {
  const store = {}
  return function (arg) {
    console.log(arg)
    // also, need to account for case where more than 1 arg
    if (typeof arg === 'object') {
     const argObj = JSON.stringify(arg)
     func({arg})
     console.log(argObj)
     //if (store[argObj]) {
       //console.log('1',store)
       //return store[argObj]
     //} else {
       
       const result = func(arg)
       console.log('1.5',store)
       store[argObj] = result
       console.log('2',store)
       return result
     //}
    } else if (store[arg]) {
      return store[arg]
    } else {
      const result = func(arg)
      store[arg] = result
      return result
    }
  }
}