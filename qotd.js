// ===============================
// QUESTION OF THE DAY (DATE-WISE)
// ===============================

const questions = [
    {
        date: "2026-01-13",
        text: "Explain the concept of sustainable yield in forest management."
    },
    {
        date: "2026-01-14",
        text: "Why is mangrove conservation crucial for coastal climate resilience?"
    },
    {
        date: "2026-01-15",
        text: "Which is the only floating national park in the world, and why is it ecologically significant?"
    },
    {
        date: "2026-01-16",
        text: "What is Silvics and how it is diffrenet from Silviculture?"
    },
    {
    date: "2026-01-17",
    text: "Differentiate between natural regeneration and artificial regeneration in forestry."
},
{
    date: "2026-01-18",
    text: "What is the concept of sustained yield and why is it important in forest management?"
},
{
    date: "2026-01-19",
    text: "Explain the difference between reserved forests, protected forests, and unclassed forests."
},
{
    date: "2026-01-20",
    text: "What is agroforestry? Discuss its ecological and economic benefits."
},
{
    date: "2026-01-21",
    text: "What is forest fragmentation and how does it affect biodiversity?"
},
{
    date: "2026-01-22",
    text: "Explain crown density and its significance in forest survey and assessment."
},
{
    date: "2026-01-23",
    text: "What are invasive alien species? Mention their impact on Indian forests."
},
{
    date: "2026-01-24",
    text: "Define carbon sequestration and explain the role of forests in climate change mitigation."
},
{
    date: "2026-01-25",
    text: "What is social forestry? How is it different from farm forestry?"
},
{
    date: "2026-01-26",
    text: "Explain the concept of working plan in forestry."
},
{
    date: "2026-01-27",
    text: "What is forest fire? Distinguish between surface fire, crown fire, and ground fire."
},
{
    date: "2026-01-28",
    text: "Define biodiversity hotspots. Why are they important for conservation planning?"
},
{
    date: "2026-01-29",
    text: "What is the importance of mangrove forests in coastal ecosystem stability?"
},
{
    date: "2026-01-30",
    text: "Explain the term growing stock and its relevance in forest inventory."
},
{   date: "2026-02-01",
    text: "What is carbon sequestration? Explain the role of forests as carbon sinks."
},
{
    date: "2026-02-02",
    text: "Define agroforestry. Discuss its significance in climate-resilient agriculture."
},
{
    date: "2026-02-03",
    text: "What is biodiversity offsetting? Critically examine its effectiveness."
},
{
    date: "2026-02-04",
    text: "Explain the concept of ecological restoration with reference to degraded forest lands."
},
{
    date: "2026-02-05",
    text: "What are invasive alien species (IAS)? Discuss their ecological impacts in India."
},
{
    date: "2026-02-06",
    text: "Discuss the objectives and limitations of the Forest Conservation Act, 1980."
},
{
    date: "2026-02-07",
    text: "What is REDD+? Examine India’s approach towards REDD+ implementation."
},
{
    date: "2026-02-08",
    text: "Explain the concept of wildlife corridors and their importance in conservation."
},
{
    date: "2026-02-09",
    text: "What is the difference between ex-situ and in-situ conservation? Give examples."
},
{
    date: "2026-02-10",
    text: "Discuss the role of mangroves in coastal protection and climate change mitigation."
},
{
    date: "2026-02-11",
    text: "What is ecosystem services approach? Explain its relevance in forest management."
},
{
    date: "2026-02-12",
    text: "Explain the causes and consequences of forest fragmentation."
},
{
    date: "2026-02-13",
    text: "What are Biosphere Reserves? How are they different from National Parks?"
},
{
    date: "2026-02-14",
    text: "Discuss the impact of climate change on forest phenology and productivity."
},
{
    date: "2026-02-15",
    text: "What is community forestry? Evaluate its role in sustainable forest management."
},
{
    date: "2026-02-16",
    text: "Explain the concept of landscape-level conservation with suitable examples."
},
{
    date: "2026-02-17",
    text: "What is the National Forest Policy, 1988? Discuss its major objectives."
},
{
    date: "2026-02-18",
    text: "Discuss the importance of forest fire management in the context of climate change."
},
{
    date: "2026-02-19",
    text: "What are non-timber forest products (NTFPs)? Explain their socio-economic importance."
},
{
    date: "2026-02-20",
    text: "Explain the role of forests in achieving India’s Nationally Determined Contributions (NDCs)."
},
{
    date: "2026-02-21",
    text: "What is sustainable forest management (SFM)? Discuss its key principles."
},
{
    date: "2026-02-22",
    text: "Discuss the ecological significance of wetlands with special reference to Ramsar sites."
},
{
    date: "2026-02-23",
    text: "What is environmental impact assessment (EIA)? Examine its relevance for forestry projects."
},
{
    date: "2026-02-24",
    text: "Explain the concept of green accounting and its relevance to environmental governance."
},
{
    date: "2026-02-25",
    text: "What are sacred groves? Discuss their role in biodiversity conservation."
},
{
    date: "2026-02-26",
    text: "Discuss the challenges in conservation of endangered forest-dwelling species in India."
},
{
    date: "2026-02-27",
    text: "What is climate-smart forestry? Explain its significance in the Indian context."
},
{
    date: "2026-02-28",
    text: "Explain the interlinkages between forests, livelihoods, and sustainable development."
},
{
    date: "2026-03-01",
    text: "Discuss the significance of the Green Credit Programme in promoting sustainable forest management in India."
},
{
    date: "2026-03-02",
    text: "What are invasive alien species? Examine their impact on forest ecosystems with suitable examples."
},
{
    date: "2026-03-03",
    text: "Explain the concept of ecosystem services. Classify them with reference to forest ecosystems."
},
{
    date: "2026-03-04",
    text: "Critically analyze the role of Joint Forest Management (JFM) in conservation and livelihood security."
},
{
    date: "2026-03-05",
    text: "What is REDD+? Evaluate its potential in mitigating climate change and conserving forests in developing countries."
},
{
    date: "2026-03-06",
    text: "Discuss the causes and consequences of forest fires in India and suggest mitigation strategies."
},
{
    date: "2026-03-07",
    text: "Explain the importance of mangrove ecosystems in coastal protection and biodiversity conservation."
},
{
    date: "2026-03-08",
    text: "What are biodiversity hotspots? Identify the hotspots in India and explain their ecological significance."
},
{
    date: "2026-03-09",
    text: "Discuss the impact of climate change on forest types and distribution in India."
},
{
    date: "2026-03-10",
    text: "What is agroforestry? Examine its role in enhancing farmers’ income and ecological sustainability."
},
{
    date: "2026-03-11",
    text: "Explain the objectives and key features of the Forest Rights Act, 2006. Evaluate its implementation challenges."
},
{
    date: "2026-03-12",
    text: "What is the significance of wildlife corridors in conservation? Discuss with examples from India."
},
{
    date: "2026-03-13",
    text: "Discuss the role of urban forestry in improving environmental quality in cities."
},
{
    date: "2026-03-14",
    text: "What are Ramsar sites? Highlight their importance in wetland conservation with Indian examples."
},
{
    date: "2026-03-15",
    text: "Examine the causes of human-wildlife conflict in India and suggest sustainable solutions."
},
{
    date: "2026-03-16",
    text: "Discuss the role of National Afforestation Programme (NAP) in increasing forest cover in India."
},
{
    date: "2026-03-17",
    text: "What is carbon sequestration? Explain the role of forests in carbon storage and climate regulation."
},
{
    date: "2026-03-18",
    text: "Explain the concept of sustainable forest management. What are its key principles?"
},
{
    date: "2026-03-19",
    text: "Discuss the importance of Non-Timber Forest Products (NTFPs) in tribal livelihoods."
},
{
    date: "2026-03-20",
    text: "What are wildlife sanctuaries and national parks? Differentiate between them with examples."
},
{
    date: "2026-03-21",
    text: "Examine the role of Forest Survey of India (FSI) in forest resource assessment."
},
{
    date: "2026-03-22",
    text: "What is eco-restoration? Discuss its importance in degraded forest landscapes."
},
{
    date: "2026-03-23",
    text: "Explain the causes and impacts of desertification in India."
},
{
    date: "2026-03-24",
    text: "Discuss the significance of Biosphere Reserves in biodiversity conservation."
},
{
    date: "2026-03-25",
    text: "What are sacred groves? Highlight their ecological and cultural importance."
},
{
    date: "2026-03-26",
    text: "Examine the role of environmental impact assessment (EIA) in forest conservation."
},
{
    date: "2026-03-27",
    text: "Discuss the objectives and significance of Project Tiger in India."
},
{
    date: "2026-03-28",
    text: "What is climate resilience in forestry? Explain strategies to enhance it."
},
{
    date: "2026-03-29",
    text: "Explain the role of wetlands in maintaining ecological balance."
},
{
    date: "2026-03-30",
    text: "Discuss the challenges in implementation of Compensatory Afforestation Fund (CAMPA)."
},
{
    date: "2026-03-31",
    text: "What is participatory forest management? Analyze its effectiveness in India."
},
{
    date: "2026-04-01",
    text: "Examine the impact of mining activities on forest ecosystems."
},
{
    date: "2026-04-02",
    text: "Discuss the importance of ecological corridors in wildlife conservation."
},
{
    date: "2026-04-03",
    text: "What are endangered species? Explain the criteria used by IUCN for classification."
},
{
    date: "2026-04-04",
    text: "Analyze the role of community reserves in biodiversity conservation."
},
{
    date: "2026-04-05",
    text: "Discuss the impact of shifting cultivation on forest ecosystems."
},
{
    date: "2026-04-06",
    text: "What is social forestry? Evaluate its success in India."
},
{
    date: "2026-04-07",
    text: "Explain the role of forests in the hydrological cycle."
},
{
    date: "2026-04-08",
    text: "Discuss the causes and consequences of habitat fragmentation."
},
{
    date: "2026-04-09",
    text: "What are biodiversity conservation strategies? Explain in-situ and ex-situ methods."
},
{
    date: "2026-04-10",
    text: "Examine the role of National Green Tribunal (NGT) in environmental governance."
},
{
    date: "2026-04-11",
    text: "Discuss the importance of forest certification in sustainable forestry."
},
{
    date: "2026-04-12",
    text: "What is eco-tourism? Evaluate its benefits and challenges in forest areas."
},
{
    date: "2026-04-13",
    text: "Discuss the role of forests in achieving India’s climate commitments under the Paris Agreement."
},
{
    date: "2026-04-14",
    text: "What are keystone species? Explain their importance in ecosystem stability."
},
{
    date: "2026-04-15",
    text: "Examine the causes of biodiversity loss in forest ecosystems."
},
{
    date: "2026-04-16",
    text: "Discuss the importance of World Environment Day and its relevance to forest conservation."
},
{
    date: "2026-04-17",
    text: "What are climate-induced forest disturbances? Explain with examples."
},
{
    date: "2026-04-18",
    text: "Analyze the role of technology (GIS, remote sensing) in forest management."
},
{
    date: "2026-04-19",
    text: "Discuss the importance of soil conservation in forest ecosystems."
},
{
    date: "2026-04-20",
    text: "What is wildlife conservation? Explain its significance in maintaining ecological balance."
},
{
    date: "2026-04-21",
    text: "Examine the causes and impacts of poaching on biodiversity."
},
{
    date: "2026-04-22",
    text: "Discuss the role of forests in disaster risk reduction."
},
{
    date: "2026-04-23",
    text: "What are protected areas? Classify them and explain their importance."
},
{
    date: "2026-04-24",
    text: "Analyze the impact of infrastructure development on forest ecosystems."
},
{
    date: "2026-04-25",
    text: "Discuss the significance of genetic diversity in forest species."
},
{
    date: "2026-04-26",
    text: "What is ecosystem restoration? Explain global initiatives related to it."
},
{
    date: "2026-04-27",
    text: "Examine the role of forests in maintaining biodiversity."
},
{
    date: "2026-04-28",
    text: "Discuss the impact of climate change on wildlife migration patterns."
},
{
    date: "2026-04-29",
    text: "What are buffer zones? Explain their importance in protected area management."
},
{
    date: "2026-04-30",
    text: "Analyze the role of NGOs in forest conservation in India."
},
{
    date: "2026-05-01",
    text: "Discuss the concept of ecological footprint and its relevance to forest conservation."
},
{
    date: "2026-05-02",
    text: "What are forest-based industries? Examine their impact on sustainability."
},
{
    date: "2026-05-03",
    text: "Explain the importance of environmental ethics in forest conservation."
},
{
    date: "2026-05-04",
    text: "Discuss the role of indigenous knowledge in sustainable forest management."
},
{
    date: "2026-05-05",
    text: "What is habitat degradation? Explain its causes and consequences."
},
{
    date: "2026-05-06",
    text: "Analyze the role of international conventions in biodiversity conservation."
},
{
    date: "2026-05-07",
    text: "Discuss the challenges of balancing development and forest conservation in India."
},
{
    date: "2026-05-08",
    text: "What are ecosystem-based adaptation strategies? Explain with examples."
},
{
    date: "2026-05-09",
    text: "Examine the importance of forest policies in India’s environmental governance."
},
{
    date: "2026-05-10",
    text: "Discuss the role of afforestation and reforestation in combating climate change."
},
{
    date: "2026-05-11",
    text: "What are wildlife protection laws in India? Evaluate their effectiveness."
},
{
    date: "2026-05-12",
    text: "Summarize the key challenges and future prospects of forest conservation in India."
},
{
    date: "2026-05-13",
    text: "Discuss the role of National Biodiversity Authority (NBA) in conservation efforts."
},
{
    date: "2026-05-14",
    text: "What are climate refugia? Explain their significance in biodiversity conservation."
},
{
    date: "2026-05-15",
    text: "Analyze the role of eco-sensitive zones (ESZs) in environmental protection."
},
{
    date: "2026-05-16",
    text: "Discuss the importance of forest fire early warning systems in India."
},
{
    date: "2026-05-17",
    text: "What are payment for ecosystem services (PES)? Evaluate their applicability in India."
},
{
    date: "2026-05-18",
    text: "Examine the role of afforestation in land degradation neutrality."
},
{
    date: "2026-05-19",
    text: "Discuss the impact of linear infrastructure on wildlife habitats."
},
{
    date: "2026-05-20",
    text: "What are biodiversity registers? Explain their role in conservation."
},
{
    date: "2026-05-21",
    text: "Analyze the role of climate finance in forest conservation."
},
{
    date: "2026-05-22",
    text: "Discuss the importance of transboundary conservation initiatives."
},
{
    date: "2026-05-23",
    text: "What is assisted natural regeneration? Explain its significance."
},
{
    date: "2026-05-24",
    text: "Examine the role of mangroves in blue carbon ecosystems."
},
{
    date: "2026-05-25",
    text: "Discuss the impact of urbanization on peri-urban forests."
},
{
    date: "2026-05-26",
    text: "What are flagship species? Explain their role in conservation awareness."
},
{
    date: "2026-05-27",
    text: "Analyze the importance of soil biodiversity in forest ecosystems."
},
{
    date: "2026-05-28",
    text: "Discuss the role of community participation in forest fire management."
},
{
    date: "2026-05-29",
    text: "What are ecological restoration corridors? Explain their importance."
},
{
    date: "2026-05-30",
    text: "Examine the challenges in implementing biodiversity offsetting."
},
{
    date: "2026-05-31",
    text: "Discuss the role of forest-based carbon markets in climate mitigation."
},
{
    date: "2026-06-01",
    text: "What are nature-based solutions (NbS)? Explain their relevance in climate change mitigation."
},
{
    date: "2026-06-02",
    text: "Analyze the role of forest governance in achieving sustainable development goals (SDGs)."
},
{
    date: "2026-06-03",
    text: "Discuss the importance of wildlife genetics in conservation biology."
},
{
    date: "2026-06-04",
    text: "What is ecological succession? Explain its stages in forest ecosystems."
},
{
    date: "2026-06-05",
    text: "Examine the role of forests in regulating microclimate."
},
{
    date: "2026-06-06",
    text: "Discuss the significance of environmental education in forest conservation."
},
{
    date: "2026-06-07",
    text: "What are biodiversity corridors? Explain their importance in fragmented landscapes."
},
{
    date: "2026-06-08",
    text: "Analyze the role of satellite monitoring in forest conservation."
},
{
    date: "2026-06-09",
    text: "Discuss the impact of climate change on phenology of forest species."
},
{
    date: "2026-06-10",
    text: "What are forest ecosystem thresholds? Explain their significance."
},
{
    date: "2026-06-11",
    text: "Examine the role of international agreements like CBD in forest conservation."
},
{
    date: "2026-06-12",
    text: "Discuss the importance of watershed management in forest areas."
},
{
    date: "2026-06-13",
    text: "What are conservation reserves? Explain their role in India’s protected area network."
},
{
    date: "2026-06-14",
    text: "Analyze the role of biodiversity informatics in conservation planning."
},
{
    date: "2026-06-15",
    text: "Discuss the significance of pollinators in forest ecosystems."
},
{
    date: "2026-06-16",
    text: "What are forest rights committees? Explain their role under FRA, 2006."
},
{
    date: "2026-06-17",
    text: "Examine the impact of climate extremes on forest productivity."
},
{
    date: "2026-06-18",
    text: "Discuss the role of green infrastructure in urban forestry."
},
{
    date: "2026-06-19",
    text: "What are ecosystem tipping points? Explain with examples."
},
{
    date: "2026-06-20",
    text: "Analyze the importance of forest landscape restoration (FLR)."
},
{
    date: "2026-06-21",
    text: "Discuss the role of youth and local communities in conservation efforts."
},
{
    date: "2026-06-22",
    text: "What are biodiversity credits? Explain their emerging role in conservation finance."
},
{
    date: "2026-06-23",
    text: "Examine the role of wetlands in carbon sequestration."
},
{
    date: "2026-06-24",
    text: "Discuss the importance of ecological economics in forest resource management."
},
{
    date: "2026-06-25",
    text: "What are forest degradation drivers? Analyze their impact in India."
},
{
    date: "2026-06-26",
    text: "Examine the role of participatory GIS in forest management."
},
{
    date: "2026-06-27",
    text: "Discuss the challenges of implementing sustainable forest certification in India."
},
{
    date: "2026-06-28",
    text: "What are climate-smart landscapes? Explain their relevance."
},
{
    date: "2026-06-29",
    text: "Analyze the role of biodiversity mainstreaming in policy-making."
},
{
    date: "2026-06-30",
    text: "Discuss the future of forest conservation in the context of climate change and development pressures."
}


];

// Sort questions chronologically
questions.sort((a, b) => new Date(a.date) - new Date(b.date));

let currentIndex = 0;

// Get element after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const qotdText = document.getElementById("qotd-text");

    function getLatestQuestionIndex() {
        const today = new Date().toISOString().split("T")[0];

        for (let i = questions.length - 1; i >= 0; i--) {
            if (questions[i].date <= today) {
                return i;
            }
        }
        return 0;
    }

    function showQuestion() {
        qotdText.textContent =
            "Q. (" + questions[currentIndex].date + ") " +
            questions[currentIndex].text;
    }

    // Expose functions globally for buttons
    window.nextQuestion = function () {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            showQuestion();
        }
    };

    window.prevQuestion = function () {
        if (currentIndex > 0) {
            currentIndex--;
            showQuestion();
        }
    };

    // Load latest question on page load
    currentIndex = getLatestQuestionIndex();
    showQuestion();
});
// ===============================
// FOUNDER IMAGE MODAL (IG DP STYLE)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("founderModal");

    window.openFounderModal = function () {
        modal.classList.add("active");
    };

    window.closeFounderModal = function () {
        modal.classList.remove("active");
    };
});
// ===== HAMBURGER MENU TOGGLE =====
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

/* Optional: close menu when clicking a link (mobile UX) */
document.addEventListener("click", function (e) {
    const menu = document.getElementById("navMenu");
    const burger = document.querySelector(".hamburger");

    if (!menu || !burger) return;

    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("active");
    }
});
