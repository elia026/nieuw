function saveLumbarRotationTest() {
    const leftRotation = document.getElementById('leftRotation').value;
    const rightRotation = document.getElementById('rightRotation').value;

    if (!leftRotation || !rightRotation) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.lumbarRotationTest = { leftRotation: leftRotation, rightRotation: rightRotation };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Lumbar Locked Rotation Test opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
