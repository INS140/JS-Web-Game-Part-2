const move = (object, left, bottom) => {
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    move(object, left, bottom)
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('dblclick', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
    return item
}

function newInventory(){
    let inventory = document.createElement('div')
    move(inventory, 0, 0)
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}
let inventory = newInventory()
let greenCharater = newImage('assets/green-character.gif', 100, 250)
let tree = newImage('assets/tree.png', 200, 450)
let pillar = newImage('assets/pillar.png', 350, 250)
let pineTree = newImage('assets/pine-tree.png', 450, 350)
let crate = newImage('assets/crate.png', 150, 350)
let well = newImage('assets/well.png', 500, 575)

let sword = newItem('assets/sword.png', 500, 555)
let shield = newItem('assets/shield.png', 165, 335)
let staff = newItem('assets/staff.png', 600, 250)