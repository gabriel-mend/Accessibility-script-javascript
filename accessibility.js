const increaseFontSize = document.getElementById('increase')
const decreaseFontSize = document.getElementById('decrease')
let p = document.querySelectorAll('p')
let h1 = document.querySelectorAll('h1')
let h2 = document.querySelectorAll('h2')
let h3 = document.querySelectorAll('h3')
let h4 = document.querySelectorAll('h4')
let h5 = document.querySelectorAll('h5')
let h6 = document.querySelectorAll('h6') 
let span = document.querySelectorAll('span')
let strong = document.querySelectorAll('strong')

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
        itemArray.forEach(function getFontsize(value, index) {
            array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
        })
        function parseFontToInt(itemArray) {
            return itemArray.map((value) => parseInt(value.replace('px', '')))
        }
        let fontSizesArray= parseFontToInt(array)
        
        itemHtml.forEach((item, index) => item.style.fontSize =`${fontSizesArray[index] + 5}px`)

        return itemHtml
}
function removeFontSize(itemArray, itemHtml) {
    let array = []
    itemArray.forEach(function getFontsize(value, index) {
        array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
    })
    function parseFontToInt(itemArray) {
        return itemArray.map((value) => parseInt(value.replace('px', '')))
    }
    let fontSizes = parseFontToInt(array)
    
    itemHtml.forEach((item, index) => item.style.fontSize =`${fontSizes[index] - 5}px`)

    return itemHtml
}
let count = 0


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
        console.log(count)
        count += 1
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
    console.log(count)
    count -= 1
}
