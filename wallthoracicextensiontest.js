function addWallThoracicTest() {
    const thoracicScore = document.getElementById('thoracicScore').value;
    let resultText = '';

    switch(thoracicScore) {
        case '90':
            resultText = 'Goed';
            break;
        case '60':
            resultText = 'Matig';
            break;
        case '30':
            resultText = 'Slecht';
            break;
        default:
            resultText = 'Ongeldige score';
    }

    const wallThoracicData = JSON.parse(localStorage.getItem('wallThoracicData')) || [];
    wallThoracicData.push({ score: thoracicScore, result: resultText, date: new Date().toISOString() });
    localStorage.setItem('wallThoracicData', JSON.stringify(wallThoracicData));

    displayWallThoracicResults();

    alert(`Score: ${thoracicScore} graden - ${resultText}`);
}

function displayWallThoracicResults() {
    const wallThoracicData = JSON.parse(localStorage.getItem('wallThoracicData')) || [];
    const wallThoracicResults = document.getElementById('wallThoracicResults');
    wallThoracicResults.innerHTML = '';

    wallThoracicData.forEach(entry => {
        const result = document.createElement('div');
        result.innerHTML = `
            <p><strong>Datum:</strong> ${new Date(entry.date).toLocaleDateString()}</p>
            <p><strong>Score:</strong> ${entry.score} graden - ${entry.result}</p>
            <button onclick="deleteWallThoracicTest('${entry.date}')">Verwijderen</button>
            <hr>
        `;
        wallThoracicResults.appendChild(result);
    });
}

function deleteWallThoracicTest(date) {
    let wallThoracicData = JSON.parse(localStorage.getItem('wallThoracicData')) || [];
    wallThoracicData = wallThoracicData.filter(entry => entry.date !== date);
    localStorage.setItem('wallThoracicData', JSON.stringify(wallThoracicData));
    displayWallThoracicResults();
}

window.onload = function() {
    displayWallThoracicResults();
};
