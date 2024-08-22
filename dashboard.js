function savePersonalInfo() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const height = document.getElementById('height').value;

    if (!name || !birthdate || !height) {
        alert('Vul alle velden correct in.');
        return;
    }

    const personalInfo = {
        name: name,
        birthdate: birthdate,
        height: height
    };

    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    showSavedPersonalInfo();
    alert('Persoonsgegevens opgeslagen!');
}

function showSavedPersonalInfo() {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    if (personalInfo) {
        document.getElementById('name').value = personalInfo.name;
        document.getElementById('birthdate').value = personalInfo.birthdate;
        document.getElementById('height').value = personalInfo.height;

        const savedInfoDiv = document.getElementById('savedPersonalInfo');
        savedInfoDiv.innerHTML = `
            <p><strong>Naam:</strong> ${personalInfo.name}</p>
            <p><strong>Geboortedatum:</strong> ${new Date(personalInfo.birthdate).toLocaleDateString()}</p>
            <p><strong>Lengte:</strong> ${personalInfo.height} cm</p>
        `;
    }
}

function navigateTo(page) {
    window.location.href = page;
}

function updateWeightIndicator() {
    // Placeholder voor de functie om de indicatoren te updaten
}

function generateSummary() {
    let summary = '<h3>Samenvatting van de testresultaten:</h3>';

    const weightData = JSON.parse(localStorage.getItem('weightData')) || [];
    if (weightData.length > 0) {
        const latestWeight = weightData[weightData.length - 1];
        summary += `<p><strong>Laatste Gewicht:</strong> ${latestWeight.weight} kg</p>`;
    } else {
        summary += '<p>Geen gewichtgegevens beschikbaar.</p>';
    }

    document.getElementById('testSummary').innerHTML = summary;
}

window.onload = function() {
    showSavedPersonalInfo();
    updateWeightIndicator(); // Voeg hier andere indicatoren updates toe
};

