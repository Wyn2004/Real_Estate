const function1 = (param1) => {
    console.log('1' + param1)
}

const function2 = (param2) => {
    console.log('2' + param2)
}


const function_hoc = (callback) => (x) => { 
    const t = 'abc'
    callback(x + t)
}


// function1("abc" + "xyz")

function_hoc(function1)('function 1')