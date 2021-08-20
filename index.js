const nfinder = require('./nfinder.js')

nfinder.reader(368112).then(e=>{
    console.dir(e)
})

nfinder.getter(50,"fgo").then(res=>{
    console.log(res)
})