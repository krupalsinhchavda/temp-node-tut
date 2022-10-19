//npm - global command,comes with code
//npm --version
//local dependancy - use it only in  this particular project
//npm i <packagename>
//globally dependancy - use it in any project
//npm install -g <package name>
//sudo install -g <package name>

//package.json - manifest file(store importance data about project)
//manual approch (create package.json in the root)
//npm init(step by step , press enter to skip)
//npm init -y(everything default)

const _ = require('loadsh');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)