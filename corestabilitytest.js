function saveCoreStabilityTest() {
    const leftPlank = document.getElementById('leftPlank').value;
    const rightPlank = document.getElementById('rightPlank').value;
    const forearmPlank = document.getElementById('forearmPlank').value;

    if (!leftPlank || !rightPlank || !forearmPlank) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.coreStabilityTest = { leftPlank: leftPlank, rightPlank: rightPlank, forearmPlank: forearmPlank };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Core Stability Test opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
