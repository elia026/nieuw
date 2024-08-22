function saveCooperTest() {
    const cooperDate = document.getElementById('cooperDate').value;
    const distance = document.getElementById('distance').value;

    if (!cooperDate || !distance) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.cooperTest = { date: cooperDate, distance: distance };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Coopertest opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
