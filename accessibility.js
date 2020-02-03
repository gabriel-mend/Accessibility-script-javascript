const increaseFontSize = document.getElementById('increase')
const decreaseFontSize = document.getElementById('decrease')
const resetButton = document.getElementById('reset')
let p = document.querySelectorAll('p')
let h1 = document.querySelectorAll('h1')
let h2 = document.querySelectorAll('h2')
let h3 = document.querySelectorAll('h3')
let h4 = document.querySelectorAll('h4')
let h5 = document.querySelectorAll('h5')
let h6 = document.querySelectorAll('h6') 
let span = document.querySelectorAll('span')
let strong = document.querySelectorAll('strong')


function pickFontSize(item) {
    let array = []
    item.forEach((value, index) => {
        array.push(getComputedStyle(item[index]).getPropertyValue('font-size'))
    })
    return array
}
const pFontInicial = pickFontSize(p)
const h1FontInicial = pickFontSize(h1)
const h2FontInicial = pickFontSize(h2)
const h3FontInicial = pickFontSize(h3)
const h4FontInicial = pickFontSize(h4)
const h5FontInicial = pickFontSize(h5)
const h6FontInicial = pickFontSize(h6)
const spanFontInicial = pickFontSize(span)
const strongFontInicial = pickFontSize(strong)
function fontSizeCalculate(item) {
    let array = []
    item.forEach((value, index) => {
        array.push(getComputedStyle(item[index]).getPropertyValue('font-size'))
    })

    let fontSizesArray = parseFontToInt(array).map(value => value * 0.2)

    return fontSizesArray
}

function parseFontToInt(item) {
    return item.map((value) => parseInt(value.replace('px', '')))
}

function returnFontSizeIntArray(item) {
    let array = []
    item.forEach((value, index) => {
        array.push(getComputedStyle(item[index]).getPropertyValue('font-size'))
    })

    let fontSizesArray = parseFontToInt(array)
    return fontSizesArray

}


function toArray(item) {
    return Array.from(item)
}

let pArray = toArray(p)
let h1Array = toArray(h1)
let h2Array = toArray(h2)
let h3Array = toArray(h3)
let h4Array = toArray(h4)
let h5Array = toArray(h5)
let h6Array = toArray(h6)
let spanArray = toArray(span)
let strongArray = toArray(strong)

function addFontSize(itemArray, itemHtml) {
        let array = []

        itemArray.forEach((value, index) => {
            array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
        })

        let fontInicial = fontSizeCalculate(itemHtml)

        let fontSizesArray = parseFontToInt(array)
        
        itemHtml.forEach((item, index) => item.style.fontSize =`${ fontSizesArray[index] + fontInicial[index] }px`)

        return itemHtml
}

function removeFontSize(itemArray, itemHtml) {
    let array = []
    itemArray.forEach((value, index) => {
        array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
    })

    let fontInicial = fontSizeCalculate(itemHtml)

    let fontSizesArray = parseFontToInt(array)
    
    itemHtml.forEach((item, index) => item.style.fontSize =`${ fontSizesArray[index] - fontInicial[index] }px`)

    return itemHtml
}
function resetFontSize(itemArray, itemHtml, itemInicial) {
    let array = []

    itemArray.forEach((value, index) => {
        array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
    })
    
    itemHtml.forEach((item, index) => item.style.fontSize = itemInicial[index])
    return itemHtml
}

increaseFontSize.onclick = () => {
        addFontSize(pArray, p)
        addFontSize(h1Array, h1)
        addFontSize(h2Array, h2)
        addFontSize(h3Array, h3)
        addFontSize(h4Array, h4)
        addFontSize(h5Array, h5)
        addFontSize(h6Array, h6)
        addFontSize(spanArray, span)
        addFontSize(strongArray, strong)
}


decreaseFontSize.onclick = () => {
    removeFontSize(pArray, p)
    removeFontSize(h1Array, h1)
    removeFontSize(h2Array, h2)
    removeFontSize(h3Array, h3)
    removeFontSize(h4Array, h4)
    removeFontSize(h5Array, h5)
    removeFontSize(h6Array, h6)
    removeFontSize(spanArray, span)
    removeFontSize(strongArray, strong)
}
resetButton.onclick = () => {
    resetFontSize(pArray, p, pFontInicial)
    resetFontSize(h1Array, h1, h1FontInicial)
    resetFontSize(h2Array, h2, h2FontInicial)
    resetFontSize(h3Array, h3, h3FontInicial)
    resetFontSize(h4Array, h4, h4FontInicial)
    resetFontSize(h5Array, h5, h5FontInicial)
    resetFontSize(h6Array, h6, h6FontInicial)
    resetFontSize(spanArray, span, spanFontInicial)
    resetFontSize(strongArray, strong, strongFontInicial)
}