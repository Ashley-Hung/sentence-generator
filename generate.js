const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很正常']
const occupation = { engineer: '工程師', designer: '設計師', entrepreneur: '創業家' }

/* Sample elements */
function sample(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function generateSentence(role) {
  let collection = task[role]

  // return error notice if collection is empty
  if (collection === undefined) {
    return '沒有選擇職位，怎麼產生幹話啦'
  }

  return `身為一個${occupation[role]}，` + sample(collection) + sample(phrase)
}

/* Export generateSentence function */
module.exports = generateSentence
