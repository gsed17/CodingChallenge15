// Task 1: Base Structure Setup
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded");
});
// Task 2: Adding Risk Items Dynamically
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById("riskDashboard");

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");

        riskCard.innerHTML = `<strong>${riskName}</strong> - ${riskLevel} - ${department}`;
        riskDashboard.appendChild(riskCard);
    }

    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
});
// Task 3: Removing Risk Items
document.addEventListener("DOMContentLoaded", () => {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById("riskDashboard");

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");

        riskCard.innerHTML = `
            <strong>${riskName}</strong> - ${riskLevel} - ${department}
            <button class="resolveBtn">Resolve</button>
        `;

        riskCard.querySelector(".resolveBtn").addEventListener("click", () => {
            riskCard.remove();
        });

        riskDashboard.appendChild(riskCard);
    }

    addRiskItem("Market Fluctuations", "High", "Finance");
});
