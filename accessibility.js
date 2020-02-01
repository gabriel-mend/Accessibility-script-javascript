const increaseFontSize = document.getElementById('increase')
const decreaseFontSize = document.getElementById('decrease')
let p = document.querySelectorAll('p')


function toArray(item) {
    return Array.from(item)
}
let pArray = toArray(p)

function addFontSize(itemArray, itemHtml) {
        let array = []
        itemArray.forEach(function getFontsize(value, index) {
            array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
        })
        function parseFontToInt(itemArray) {
            return itemArray.map((value) => parseInt(value.replace('px', '')))
        }
        let fontSizes = parseFontToInt(array)
        
        itemHtml.forEach((item, index) => item.style.fontSize =`${fontSizes[index] + 10}px`)

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
    
    itemHtml.forEach((item, index) => item.style.fontSize =`${fontSizes[index] - 10}px`)

    return itemHtml
}

increaseFontSize.onclick = () => addFontSize(pArray, p)
decreaseFontSize.onclick = () => removeFontSize(pArray, p)

