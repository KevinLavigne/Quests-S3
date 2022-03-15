const userInfo = require(`./information`)
let cowsay = require("cowsay")
const information = require("./information")
const { campus } = require("./information")

console.log(cowsay.say({
    text : `Hello I'm ${information.name} From ${information.campus}`,
    e : "^^",
    T : "U "
}))