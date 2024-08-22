function loadClientDashboard() {
    const clientId = localStorage.getItem('currentClientId');
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const currentClient = clients.find(client => client.id === clientId);

    if (currentClient) {
        document.getElementById('clientNameDisplay').innerText = currentClient.name;
        document.getElementById('clientDetails').innerHTML = `
            <p>Geboortedatum: ${new Date(currentClient.birthdate).toLocaleDateString()}</p>
        `;
        setTestStatusIndicators(clientId);
    } else {
        alert('Geen cliënt gevonden.');
        window.location.href = 'clientManagement.html';
    }
}

function setTestStatusIndicators(clientId) {
    const clientData = JSON.parse(localStorage.getItem(clientId)) || {};

    document.getElementById('weightLogStatus').className = 'status-indicator ' + (clientData.weightLog ? 'green' : 'gray');
    document.getElementById('bloodPressureStatus').className = 'status-indicator ' + (clientData.bloodPressure ? 'green' : 'gray');
    document.getElementById('cooperTestStatus').className = 'status-indicator ' + (clientData.cooperTest ? 'green' : 'gray');
    document.getElementById('coreStabilityTestStatus').className = 'status-indicator ' + (clientData.coreStabilityTest ? 'green' : 'gray');
    document.getElementById('lumbarRotationTestStatus').className = 'status-indicator ' + (clientData.lumbarRotationTest ? 'green' : 'gray');
    document.getElementById('thoracicExtensionTestStatus').className = 'status-indicator ' + (clientData.thoracicExtensionTest ? 'green' : 'gray');
    document.getElementById('thomasTestStatus').className = 'status-indicator ' + (clientData.thomasTest ? 'green' : 'gray');
}

function startTest(testType) {
    switch(testType) {
        case 'weightLog':
            window.location.href = 'weightLog.html';
            break;
        case 'bloodPressure':
            window.location.href = 'bloodPressureLog.html';
            break;
        case 'cooperTest':
            window.location.href = 'cooperTest.html';
            break;
        case 'coreStabilityTest':
            window.location.href = 'coreStabilityTest.html';
            break;
        case 'lumbarRotationTest':
            window.location.href = 'lumbarRotationTest.html';
            break;
        case 'thoracicExtensionTest':
            window.location.href = 'thoracicExtensionTest.html';
            break;
        case 'thomasTest':
            window.location.href = 'thomasTest.html';
            break;
        default:
            alert('Test niet beschikbaar');
    }
}

function navigateToClientManagement() {
    window.location.href = 'clientManagement.html';
}

function navigateToMainDashboard() {
    window.location.href = 'index.html';
}

window.onload = function() {
    loadClientDashboard();
};

