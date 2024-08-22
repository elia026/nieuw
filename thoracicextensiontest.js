function saveThoracicExtensionTest() {
    const thoracicAngle = document.getElementById('thoracicAngle').value;

    if (!thoracicAngle) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.thoracicExtensionTest = { angle: thoracicAngle };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Wall Thoracic Extension Test opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
