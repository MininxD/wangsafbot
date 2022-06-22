const spinn = require('spinnies')



const spinner = { 

    "interval": 120,

    "frames": [

      "[1]",

      "[2]",

      "[3]",

      "[4]",

      "[5]",

      ":D"
]}

  

let globalSpinner;

  

  

const getGlobalSpinner = (disableSpins = false) => {

if(!globalSpinner) globalSpinner = new spinn({ color: 'cyan', succeedColor: 'purple', spinner, disableSpins});

return globalSpinner;

}

  

spins = getGlobalSpinner(false)

  

const start = (id, text) => {

spins.add(id, {text: text})

}

const info = (id, text) => {

spins.update(id, {text: text})

}

const success = (id, text) => {

spins.succeed(id, {text: text})

}

  

const close = (id, text) => {

spins.fail(id, {text: text})

}



module.exports = { start, success, close, info }
