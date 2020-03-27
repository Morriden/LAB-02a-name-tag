const myPTag = document.getElementById('name')
myPTag.style.fontSize = '30px'
myPTag.style.fontFamily = 'fantasy'

//when i click a button

//i want the name to change to 'Fredy Mercury' and make the text silver

const myButton = document.getElementById('myButton')
myButton.addEventListener('click', function() {
    const myinput = document.getElementById('inputbox');
    myPTag.textContent = myinput.value;
    myPTag.style.color = 'silver';
    console.log('change the name!', Date.now());
})