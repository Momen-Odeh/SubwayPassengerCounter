let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log("iam click on save")
    // let countStr = count + " - "
    // saveEl.textContenttStr
    // countEl.textContent = 0
    saveEl.textContent+=count + " - "
    count = 0
    countEl.textContent=count
}

console.log("Let's count people on the subway!")
