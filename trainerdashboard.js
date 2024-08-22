function generateUniqueId() {
    return 'user_' + Date.now();
}

function addUser() {
    const username = document.getElementById('username').value;
    const birthdate = document.getElementById('birthdate').value;
    const height = document.getElementById('height').value;

    if (!username || !birthdate || !height) {
        alert('Vul alle velden correct in.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const newUser = {
        id: generateUniqueId(),
        name: username,
        birthdate: birthdate,
        height: height,
        tests: {} // Voeg een lege object toe voor testspecifieke gegevens
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    displayUserList();

    alert('Gebruiker toegevoegd!');
}

function displayUserList() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p><strong>Naam:</strong> ${user.name}</p>
            <p><strong>Geboortedatum:</strong> ${new Date(user.birthdate).toLocaleDateString()}</p>
            <p><strong>Lengte:</strong> ${user.height} cm</p>
            <button onclick="deleteUser('${user.id}')">Verwijderen</button>
            <button onclick="selectUser('${user.id}')">Selecteer Gebruiker</button>
            <hr>
        `;
        userList.appendChild(userDiv);
    });
}

function deleteUser(userId) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(users));
    displayUserList();
}

function selectUser(userId) {
    localStorage.setItem('currentUserId', userId);
    alert('Gebruiker geselecteerd!');
    window.location.href = 'userDashboard.html';  // Vervang door je eigen gebruikersdashboard HTML-bestand
}

window.onload = function() {
    displayUserList();
};


