function loadCurrentUserInfo() {
    const userId = localStorage.getItem('currentUserId');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.id === userId);

    if (currentUser) {
        document.getElementById('currentUserInfo').innerHTML = `
            <p><strong>Naam:</strong> ${currentUser.name}</p>
            <p><strong>Geboortedatum:</strong> ${new Date(currentUser.birthdate).toLocaleDateString()}</p>
            <p><strong>Lengte:</strong> ${currentUser.height} cm</p>
        `;
        displayTestOptions(currentUser);
    } else {
        alert('Geen gebruiker geselecteerd of gebruiker niet gevonden.');
    }
}

function displayTestOptions(user) {
    // Dit zorgt ervoor dat testinvoervelden beschikbaar zijn
    const testOptions = `
        <h3>Kies een test om in te vullen:</h3>
        <button onclick="navigateTo('weightLog.html')">Gewichtslogboek</button>
        <button onclick="navigateTo('bloodPressureLog.html')">Bloeddruk Logboek</button>
        <button onclick="navigateTo('cooperTest.html')">Coopertest</button>
        <button onclick="navigateTo('coreStabilityTest.html')">Core Stability Test</button>
        <button onclick="navigateTo('lumbarRotationTest.html')">Lumbar Locked Rotation Test</button>
        <button onclick="navigateTo('wallThoracicExtensionTest.html')">Wall Thoracic Extension Test</button>
        <button onclick="navigateTo('thomasTest.html')">Thomas-test</button>
    `;
    document.getElementById('testOptions').innerHTML = testOptions;
}

function navigateTo(page) {
    window.location.href = page;
}

window.onload = function() {
    loadCurrentUserInfo();
};

