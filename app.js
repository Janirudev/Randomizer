const form = document.querySelector('#form')

const displayNames = document.querySelector('#all-names')

const names = []

form.addEventListener('submit', (event) => {
  event.preventDefault()

  names.push(form.name.value)

  var li = document.createElement("li");
  var node = document.createTextNode(form.name.value);
  li.appendChild(node);
  displayNames.appendChild(li);

  form.reset()
})

const randomize = document.querySelector('#randomize')
const randomName = document.querySelector('#randomName')

randomize.addEventListener('click', (event) => {
  event.preventDefault()
  const randomNumber = Math.floor(Math.random() * names.length)
  randomName.innerText = names[randomNumber]
})