const fs = require('fs')
const canvas = require('canvas')

let assetPaths = { // an object containing all the paths to the image directories
    background: './assets/background',
    eyes: './assets/eyes',
    hands: './assets/hands',
    hat: './assets/hat',
    mouth: './assets/mouth',
    nug: './assets/nug',
    pants: './assets/pants',
    shoes: './assets/shoes',
}

const itemsInAssetDir = (assetFolder) => {
    assetsInDir = fs.readdirSync(assetFolder).forEach()
}

itemsInAssetDir(assetPaths.background)
// Idea: write a function that picks an element, then 
// grabs a random number out of a probability, if it's not equal to
// the right number pass and pick another, otherwise pick that one.
// That will give rarity when choosing