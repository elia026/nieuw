function navigateToClientManagement() {
    window.location.href = 'clientManagement.html';
}

function getStatusIndicatorClass(score, testType) {
    if (!score) return 'gray';

    switch (testType) {
        case 'weightLog':
            return score.weight ? 'green' : 'red';
        case 'bloodPressure':
            return score.systolic && score.diastolic ? 'green' : 'red';
        case 'cooperTest':
            return score.distance ? 'green' : 'red';
        case 'coreStabilityTest':
            return (score.leftPlank && score.rightPlank && score.forearmPlank) ? 'green' : 'red';
        case 'lumbarRotationTest':
            return (score.leftRotation && score.rightRotation) ? 'green' : 'red';
        case 'thoracicExtensionTest':
            return score.angle ? 'green' : 'red';
        case 'thomasTest':
            return (score.leftLeg && score.rightLeg) ? 'green' : 'red';
        default:
            return 'gray';
    }
}

function loadClientSummary() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientSummaryContainer = document.getElementById('clientSummaryContainer');

    clientSummaryContainer.innerHTML = '';

    clients.forEach(client => {
        const clientData = JSON.parse(localStorage.getItem(client.id)) || {};
        
        const clientDiv = document.createElement('div');
        clientDiv.classList.add('client-summary-block');

        clientDiv.innerHTML = `
            <h3>${client.name}</h3>
            <p><strong>Geboortedatum:</strong> ${new Date(client.birthdate).toLocaleDateString()}</p>
            <p><strong>Gewicht Logboek:</strong> ${clientData.weightLog ? `${clientData.weightLog.weight} kg op ${new Date(clientData.weightLog.date).toLocaleDateString()}` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.weightLog, 'weightLog')}"></span>
            </p>
            <p><strong>Bloeddruk:</strong> ${clientData.bloodPressure ? `${clientData.bloodPressure.systolic}/${clientData.bloodPressure.diastolic} mm Hg op ${new Date(clientData.bloodPressure.date).toLocaleDateString()}` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.bloodPressure, 'bloodPressure')}"></span>
            </p>
            <p><strong>Coopertest:</strong> ${clientData.cooperTest ? `${clientData.cooperTest.distance} meter op ${new Date(clientData.cooperTest.date).toLocaleDateString()}` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.cooperTest, 'cooperTest')}"></span>
            </p>
            <p><strong>Core Stability Test:</strong> ${clientData.coreStabilityTest ? `Links: ${clientData.coreStabilityTest.leftPlank} sec, Rechts: ${clientData.coreStabilityTest.rightPlank} sec, Voorarm Plank: ${clientData.coreStabilityTest.forearmPlank} sec` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.coreStabilityTest, 'coreStabilityTest')}"></span>
            </p>
            <p><strong>Lumbar Locked Rotation Test:</strong> ${clientData.lumbarRotationTest ? `Links: ${clientData.lumbarRotationTest.leftRotation}°, Rechts: ${clientData.lumbarRotationTest.rightRotation}°` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.lumbarRotationTest, 'lumbarRotationTest')}"></span>
            </p>
            <p><strong>Wall Thoracic Extension Test:</strong> ${clientData.thoracicExtensionTest ? `${clientData.thoracicExtensionTest.angle}°` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.thoracicExtensionTest, 'thoracicExtensionTest')}"></span>
            </p>
            <p><strong>Thomas-test:</strong> ${clientData.thomasTest ? `Links: ${clientData.thomasTest.leftLeg}, Rechts: ${clientData.thomasTest.rightLeg}` : 'Geen gegevens'}
                <span class="status-indicator ${getStatusIndicatorClass(clientData.thomasTest, 'thomasTest')}"></span>
            </p>
        `;

        clientSummaryContainer.appendChild(clientDiv);
    });
}

window.onload = function() {
    loadClientSummary();
};

