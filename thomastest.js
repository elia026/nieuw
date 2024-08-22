function saveThomasTest() {
    const leftLeg = document.getElementById('leftLeg').value;
    const rightLeg = document.getElementById('rightLeg').value;

    if (!leftLeg || !rightLeg) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.thomasTest = { leftLeg: leftLeg, rightLeg: rightLeg };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Thomas-test opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
