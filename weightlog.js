function saveWeightLog() {
    const weight = document.getElementById('weight').value;
    const date = document.getElementById('weightDate').value;

    if (!weight || !date) {
        alert('Vul alle velden in.');
        return;
    }

    const clientId = localStorage.getItem('currentClientId');
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    clientData.weightLog = { date: date, weight: weight };
    localStorage.setItem(clientId, JSON.stringify(clientData));

    alert('Gewicht opgeslagen!');
    navigateToClientDashboard();
}
