document.getElementById('myButton').addEventListener('click', function() {
    alert('you clicked the button');
});

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value; 
    const greetingMessage = `welcome ${name}!`;

    document.getElementById('greetingMessage').innerText = greetingMessage;
});
