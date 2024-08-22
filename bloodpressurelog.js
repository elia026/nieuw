function saveBloodPressureLog() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const date = document.getElementById('bpDate').value;

    if (!systolic || !diastolic || !date) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.bloodPressure = { date: date, systolic: systolic, diastolic: diastolic };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Bloeddruk opgeslagen!');
    navigateToClientDashboard();
}

function navigateToClientDashboard() {
    window.location.href = 'clientDashboard.html';
}
