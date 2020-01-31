let p = document.querySelectorAll('p')
let pArray = Array.from(p)


function elementsFontSize(itemArray, itemHtml) {
    let array = []
    itemArray.forEach(function getFontsize(value, index) {
        array.push(getComputedStyle(itemArray[index]).getPropertyValue('font-size'))
    })
    function parseFontToInt(itemArray) {
        return itemArray.map((value) => parseInt(value.replace('px', '')))
    }
    parseFontToInt(array)
    
    itemHtml.forEach((item) => item.style.fontSize =`${50}px`)
    return itemHtml
}



console.log(elementsFontSize(pArray, p))