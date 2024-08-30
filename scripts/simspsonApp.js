/* document.getElementById('generate-card').addEventListener('click', generateCard);
document.getElementById('generate-multiple').addEventListener('click', openModal);
document.getElementById('confirm-generate').addEventListener('click', generateMultipleCards);

const characters = {
    "Homer Simpson": {
        "image": "https://example.com/homer.png",
        "description": "Homer Jay Simpson is the father of the Simpson family."
    },
    "Marge Simpson": {
        "image": "https://example.com/marge.png",
       
    },
    // Añadir más personajes aquí
};

function generateCard() {
    const characterName = document.getElementById('input-character').value;
    if (characters[characterName]) {
        const character = characters[characterName];
        const cardHTML = `
            <div class="card">
                <img src="${character.image}" alt="${characterName}">
                <h2>${characterName}</h2>
                
            </div>`;
        document.getElementById('cards-container').innerHTML = cardHTML;
    } else {
        alert('Personaje no encontrado.');
    }
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function generateMultipleCards() {
    const quantity = document.getElementById('card-quantity').value;
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    
    const keys = Object.keys(characters);
    for (let i = 0; i < quantity && i < keys.length; i++) {
        const character = characters[keys[i]];
        const cardHTML = `
            <div class="card">
                <img src="${character.image}" alt="${keys[i]}">
                <h2>${keys[i]}</h2>
               
            </div>`;
        cardsContainer.innerHTML += cardHTML;
    }

    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside or on the close button
window.onclick = function(event) {
    if (event.target == document.getElementById('modal') || event.target.className == 'close') {
        document.getElementById('modal').style.display = 'none';
    }
};
 */