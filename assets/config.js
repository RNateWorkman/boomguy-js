const fs = require('fs');
const dir = __dirname;

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\/[^\/\.]/g.test(item))
        .map((i, index) => {
            return {
                id: index + 1,
                name: cancelAnimationFrame(i),
                fileName: i,
                rarity: addRarity(i),
            }
}]

console.log(layers.elements)