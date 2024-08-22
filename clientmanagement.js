function generateUniqueId() {
    return 'client_' + Date.now();
}

function addClient() {
    const clientName = document.getElementById('clientName').value;
    const clientBirthdate = document.getElementById('clientBirthdate').value;

    if (!clientName || !clientBirthdate) {
        alert('Vul alle velden correct in.');
        return;
    }

    const clients = JSON.parse(localStorage.getItem('clients')) || [];

    const newClient = {
        id: generateUniqueId(),
        name: clientName,
        birthdate: clientBirthdate
    };

    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));

    displayClients();
    alert('Cliënt toegevoegd!');
}

function displayClients() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientsContainer = document.getElementById('clientsContainer');
    clientsContainer.innerHTML = '';

    clients.forEach(client => {
        const clientDiv = document.createElement('div');
        clientDiv.innerHTML = `
            <p><strong>Naam:</strong> ${client.name}</p>
            <p><strong>Geboortedatum:</strong> ${new Date(client.birthdate).toLocaleDateString()}</p>
            <button onclick="deleteClient('${client.id}')">Verwijderen</button>
            <button onclick="selectClient('${client.id}')">Open Dashboard</button>
            <hr>
        `;
        clientsContainer.appendChild(clientDiv);
    });
}

function deleteClient(clientId) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients = clients.filter(client => client.id !== clientId);
    localStorage.setItem('clients', JSON.stringify(clients));
    displayClients();
}

function selectClient(clientId) {
    localStorage.setItem('currentClientId', clientId);
    window.location.href = 'clientDashboard.html';
}

function navigateToMainDashboard() {
    window.location.href = 'index.html';
}

window.onload = function() {
    displayClients();
};
