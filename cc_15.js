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
// Task 4: Risk Categorization
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard", riskLevel.toLowerCase());

    riskCard.innerHTML = `
        <strong>${riskName}</strong> - ${riskLevel} - ${department}
        <button class="resolveBtn">Resolve</button>
    `;

    riskCard.querySelector(".resolveBtn").addEventListener("click", () => {
        riskCard.remove();
    });

    riskDashboard.appendChild(riskCard);
}

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
// Task 5: Bulk Risk Updates
document.getElementById("increaseRisk").addEventListener("click", () => {
    document.querySelectorAll(".riskCard").forEach(card => {
        if (card.classList.contains("low")) {
            card.classList.replace("low", "medium");
            card.innerHTML = card.innerHTML.replace("Low", "Medium");
        } else if (card.classList.contains("medium")) {
            card.classList.replace("medium", "high");
            card.innerHTML = card.innerHTML.replace("Medium", "High");
        }
    });
});
// Task 6: Handling Event Propagation
riskCard.addEventListener("click", (event) => {
    event.stopPropagation();
});
