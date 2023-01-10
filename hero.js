var hero = [
    {name: "Superman", superpower: "Super strength"},
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"},
    {name: "The Flash", superpower: "Super speed"},
    {name: "Green Lantern", superpower: "Super ring"}
]

const button = document.createElement('button')
button.textContent = 'Justice League Heroes'
button.onclick = function heroName(){

    const ulElement = document.createElement('ul')

    for(let i = 0; i < hero.length; i++){
        const liElement = document.createElement('li')
        liElement.innerHTML = (hero[i].name + " : " + hero[i].superpower);
        ulElement.append(liElement)
    }
    document.body.append(ulElement)
}
document.body.append(button)