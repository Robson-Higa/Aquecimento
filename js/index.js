//const container = document.getElementById('container')
const container = document.querySelector('#container')

const containerTitle = document.createElement('h2')
containerTitle.innerText = 'Bem vindo ao aquecimento!'
containerTitle.className = 'title'
container.appendChild(containerTitle)

const headerTitle = document.querySelector('header h1')
headerTitle.className = 'title'

const addPersonButton = document.createElement('button')
addPersonButton.innerText = 'Adicionar'
addPersonButton.className = 'person-button'
addPersonButton.type = 'button'
container.appendChild(addPersonButton)

const clearListButton = document.createElement('button')
clearListButton.innerText = 'Limpar'
clearListButton.className = 'person-button'
clearListButton.type = 'button'
container.appendChild(clearListButton)

const peopleList = document.createElement ('ul')
container.appendChild(peopleList)

const addPerson = () => {

    const nome = faker.name.findName()
    const personIten = document.createElement('li')
    personIten.innerText = nome
    peopleList.appendChild(personIten)
}

addPersonButton.onclick = addPerson

const clearList = () => {

    peopleList.innerHTML = ''
}

clearListButton.onclick = clearList