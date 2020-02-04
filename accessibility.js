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

const pickFontSize = (item) => {
    let arrayItems = []
    item.forEach((value, index) => {
        arrayItems.push(getComputedStyle(item[index]).getPropertyValue('font-size'))
    })
    return arrayItems
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

const fontSizeCalculate = (item) => {
    let arrayItems = pickFontSize(item)
    let fontSizesArray = parseFontToInt(arrayItems).map(value => value * 0.2)

    return fontSizesArray
}

const parseFontToInt = (item) => {
    return item.map((value) => parseInt(value.replace('px', '')))
}

const toArray = (item) => {
    return Array.from(item)
}

const addFontSize = (itemHtml) =>{
        let itemArray = toArray(itemHtml)

        let array = pickFontSize(itemArray)

        let fontInicial = fontSizeCalculate(itemHtml)

        let fontSizesArray = parseFontToInt(array)
        
        itemHtml.forEach((item, index) => item.style.fontSize =`${ fontSizesArray[index] + fontInicial[index] }px`)

        return itemHtml
} 

const removeFontSize = (itemHtml) => {
    let itemArray = toArray(itemHtml)

    let array = pickFontSize(itemArray)

    let fontInicial = fontSizeCalculate(itemHtml)

    let fontSizesArray = parseFontToInt(array)
    
    itemHtml.forEach((item, index) => item.style.fontSize =`${ fontSizesArray[index] - fontInicial[index] }px`)

    return itemHtml
}
const resetFontSize = (itemHtml, itemInicial) => {
    itemHtml.forEach((item, index) => item.style.fontSize = itemInicial[index])
    return itemHtml
}
let count = 0
increaseFontSize.onclick = () => {
        addFontSize(p)
        addFontSize(h1)
        addFontSize(h2)
        addFontSize(h3)
        addFontSize(h4)
        addFontSize(h5)
        addFontSize(h6)
        addFontSize(span)
        addFontSize(strong)
}
decreaseFontSize.onclick = () => {
    removeFontSize(p)
    removeFontSize(h1)
    removeFontSize(h2)
    removeFontSize(h3)
    removeFontSize(h4)
    removeFontSize(h5)
    removeFontSize(h6)
    removeFontSize(span)
    removeFontSize(strong)
}
resetButton.onclick = () => {
    resetFontSize(p, pFontInicial)
    resetFontSize(h1, h1FontInicial)
    resetFontSize(h2, h2FontInicial)
    resetFontSize(h3, h3FontInicial)
    resetFontSize(h4, h4FontInicial)
    resetFontSize(h5, h5FontInicial)
    resetFontSize(h6, h6FontInicial)
    resetFontSize(span, spanFontInicial)
    resetFontSize(strong, strongFontInicial)
}