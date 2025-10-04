const contentWrapperEl = document.getElementById("contentWrapper");
const questionBtnEl = document.getElementById("questionBtn");
const answerBtnBtnEl = document.getElementById("answerBtn");
const questionTextEl = document.getElementById("questionText");
const answerTextEl = document.getElementById("answerText");
const startBtnEl = docunment.getElementById("startBtn");

function startQuiz(){
    contentWrapperEl.style.display = "flex";
    const startBtn2 = document.getElementById("startBtn").style.display = "none";
}



function showQuestion(){
    const quesBank = [
     // General Concepts
  ["What are the two main categories of airspace?", "Regulatory and nonregulatory."],
  ["What are the four types of airspace within these categories?", "Controlled, uncontrolled, special use, and other airspace."],
  ["What determines how airspace is classified?", "Complexity/density of aircraft operations, nature of operations, safety requirements, and national/public interest."],
  ["What are the five classes of controlled airspace?", "Class A, B, C, D, and E."],
  ["What is the uncontrolled class of airspace?", "Class G."],

  // Class A Airspace
  ["What are the vertical limits of Class A airspace?", "From 18,000 feet MSL up to and including FL 600."],
  ["Where does Class A airspace apply geographically?", "Over the 48 contiguous states and Alaska, including airspace within 12 NM offshore."],
  ["What operations are permitted in Class A airspace?", "Instrument Flight Rules (IFR) operations only."],
  ["What equipment is required in Class A airspace?", "Two-way radio, Mode C transponder, and ADS-B Out (per 14 CFR 91.225)."],
  ["What pilot certificate is required for Class A operations?", "An instrument rating."],

  // Class B Airspace
  ["What are the vertical limits of Class B airspace?", "From the surface to 10,000 feet MSL (individually tailored)."],
  ["What airports are typically surrounded by Class B airspace?", "The nation’s busiest airports by operations or passenger enplanements."],
  ["What shape is Class B airspace typically described as?", "An upside-down wedding cake."],
  ["What is required to enter Class B airspace?", "ATC clearance before entry."],
  ["What equipment is required in Class B airspace?", "Two-way radio, Mode C transponder, and ADS-B Out."],
  ["What is the minimum pilot certification required to operate in Class B?", "Private Pilot Certificate (or proper endorsements for student/recreational/sport pilots)."],

  // Class C Airspace
  ["What are the vertical limits of Class C airspace?", "Surface to 4,000 feet above airport elevation (charted in MSL)."],
  ["What is the typical horizontal configuration of Class C airspace?", "Inner core: 5 NM radius (surface to 4,000 feet); outer shelf: 10 NM radius (1,200–4,000 feet)."],
  ["What communications are required before entering Class C airspace?", "Two-way radio communications must be established and maintained with ATC."],
  ["What equipment is required in Class C airspace?", "Two-way radio, Mode C transponder, and ADS-B Out."],

  // Class D Airspace
  ["What are the vertical limits of Class D airspace?", "Surface to 2,500 feet above airport elevation (charted in MSL)."],
  ["What communication requirement exists for Class D?", "Two-way radio communications must be established with ATC before entry and maintained within the airspace."],
  ["What happens to Class D airspace when the control tower closes?", "It may revert to Class E or G airspace, depending on local procedures."],

  // Class E Airspace
  ["What is Class E airspace?", "Controlled airspace not designated as Class A, B, C, or D."],
  ["What is the typical base altitude of Class E airspace?", "1,200 feet AGL in most areas, but may begin at surface or 700 feet AGL depending on chart depictions."],
  ["At what altitude does Class E airspace end?", "Up to but not including 18,000 feet MSL."],
  ["What is all airspace above FL 600 designated as?", "Class E airspace."],
  ["What type of operations are permitted in Class E?", "Both IFR and VFR operations."],

  // Class G Airspace
  ["What is Class G airspace?", "Uncontrolled airspace not designated as Class A, B, C, D, or E."],
  ["Where does Class G airspace extend to?", "From the surface up to the base of the overlying Class E airspace."],
  ["Does ATC provide separation services in Class G?", "No, pilots are responsible for maintaining separation and observing VFR weather minimums."],

  // Special Use Airspace
  ["What is Special Use Airspace (SUA)?", "Airspace where certain activities must be confined or where limitations are placed on nonparticipating aircraft."],
  ["List six types of Special Use Airspace.", "Prohibited Areas, Restricted Areas, Warning Areas, MOAs, Alert Areas, Controlled Firing Areas (CFAs)."],

  // Prohibited Areas
  ["What are prohibited areas?", "Areas where flight is prohibited for national security or welfare reasons."],
  ["How are prohibited areas charted?", "Marked with a ‘P’ followed by a number (e.g., P-40)."],
  ["Give an example of a prohibited area.", "Camp David or the National Mall (Washington, D.C.)."],

  // Restricted Areas
  ["What are restricted areas?", "Areas with hazardous activities to nonparticipating aircraft, such as artillery firing or guided missiles."],
  ["Can pilots fly through restricted areas?", "Yes, only when inactive or with ATC authorization."],
  ["How are restricted areas labeled on charts?", "With an ‘R’ followed by a number (e.g., R-4401)."],

  // Warning Areas
  ["What are warning areas?", "Areas extending from 3 NM offshore, warning pilots of potential danger to nonparticipating aircraft."],
  ["Where are warning areas located?", "Over domestic or international waters or both."],
  ["How are warning areas labeled?", "With a ‘W’ followed by a number (e.g., W-237)."],

  // Military Operations Areas (MOAs)
  ["What is the purpose of MOAs?", "To separate certain military training activities from IFR traffic."],
  ["Can IFR flights enter MOAs?", "Yes, if ATC can provide separation; otherwise, they will be rerouted."],
  ["How are MOAs depicted on charts?", "With their name (e.g., Camden Ridge MOA) and times/altitudes on the chart’s reverse side."],

  // Alert Areas
  ["What are alert areas?", "Areas with high volumes of pilot training or unusual aerial activity."],
  ["How are alert areas labeled?", "With an ‘A’ followed by a number (e.g., A-211)."],
  ["Who is responsible for collision avoidance in alert areas?", "Both participating and transiting pilots."],

  // Controlled Firing Areas (CFAs)
  ["What distinguishes CFAs from other special use airspace?", "Activities are suspended when nonparticipating aircraft approach; not charted since they require no avoidance."],

  // Other Airspace
  ["What is 'other airspace'?", "Airspace that doesn’t fit into controlled, uncontrolled, or special use categories."],
  ["List examples of 'other airspace'.", "LAAs, MTRs, TFRs, parachute jump areas, VFR routes, TRSAs, NSAs, ADIZs, FRZs, NOAA marine areas."],

  // Local Airport Advisory (LAA)
  ["What is an LAA?", "An advisory service provided by Flight Service Stations located on the landing airport."],

  // Military Training Routes (MTRs)
  ["What are MTRs used for?", "Military training flights at high speeds below 10,000 feet MSL."],
  ["How are MTRs labeled?", "IR (IFR route) or VR (VFR route) followed by numbers."],
  ["How can you tell the altitude of an MTR segment?", "Four digits: entirely below 1,500 feet AGL; three digits: includes segments above 1,500 feet AGL."],

  // Temporary Flight Restrictions (TFRs)
  ["What is a TFR?", "Airspace temporarily restricted by FDC NOTAM for safety, security, or special operations."],
  ["Name common reasons for a TFR.", "Protect VIPs, disaster relief, special events, or space operations."],
  ["How can a pilot check for active TFRs?", "Visit www.tfr.faa.gov or review NOTAMs during flight planning."],

  // Parachute Operations
  ["Where can parachute jump locations be found?", "In the Chart Supplement U.S. and on sectional charts."],
  ["What regulation governs parachute jumps?", "14 CFR Part 105."],

  // Published VFR Routes
  ["What are published VFR routes?", "Routes allowing VFR aircraft to transition around, under, or through complex airspace."],
  ["Where are they found?", "On VFR Terminal Area Charts."],

  // TRSAs
  ["What is a Terminal Radar Service Area (TRSA)?", "Airspace providing radar separation services between IFR and participating VFR traffic."],
  ["Is participation in TRSA services mandatory?", "No, but it is strongly encouraged."],

  // National Security Areas (NSAs)
  ["What is a National Security Area (NSA)?", "Airspace established for increased security of ground facilities where pilots are asked to voluntarily avoid flight."],
  ["How are temporary NSA restrictions enforced?", "Via NOTAMs under 14 CFR Part 99."],

  // ADIZ and FRZ
  ["What is an Air Defense Identification Zone (ADIZ)?", "Airspace where identification, location, and control of aircraft are required in the interest of national security."],
  ["What must pilots file to enter an ADIZ under VFR?", "A Defense VFR (DVFR) flight plan."],
  ["Where are Flight Restricted Zones (FRZs) located?", "In the vicinity of Washington, D.C. — around the Capitol and White House."],
  ["What training is required for pilots within 60 NM of the DC VOR/DME?", "Special Awareness Training (14 CFR 91.161)."],

  // Wildlife and NOAA Areas
  ["What altitude should pilots maintain over national parks, wildlife refuges, or marine sanctuaries?", "At least 2,000 feet AGL."],

  // ATC and NAS
  ["What is the primary purpose of Air Traffic Control (ATC)?", "To prevent collisions and organize/expedite traffic flow."],
  ["What limits ATC’s ability to provide additional services?", "Workload, frequency congestion, radar coverage, or traffic volume."],

  // VFR Weather Minimums
  ["What determines basic VFR weather minimums?", "Altitude and class of airspace (14 CFR 91.155)."],
  ["What is the minimum ceiling for VFR flight within controlled airspace designated to the surface?", "1,000 feet."],
  ["What are Special VFR weather minimums?", "1 SM visibility and clear of clouds within controlled airspace when authorized by ATC."],

  // Miscellaneous
  ["What must ultralight operators have to enter controlled airspace?", "ATC authorization (14 CFR Part 103)."],
  ["What is required for unmanned free balloons operating near controlled airspace?", "ATC authorization if below 2,000 feet AGL near Class B, C, D, or E airports."],
  ["What part of the CFR governs parachute operations?", "14 CFR Part 105."],
];
    const bankLength = quesBank.length;

    let randomQAnum = Math.floor(Math.random() * bankLength);
    
    let randomQandA = quesBank[randomQAnum];

    let currentQues = randomQandA[0];

    globalThis.currentAns = randomQandA[1];

    questionTextEl.innerText = currentQues;

    answerTextEl.innerText = "";

    questionBtnEl.style.display = "none";

    answerBtnBtnEl.style.display = "block";
    // console.log(currentQues);
    // console.log(currentAns);
}

function showAnswer(){
    const answerTextEl = document.getElementById("answerText");
    answerTextEl.innerText = currentAns;
    questionBtnEl.style.display = "block";
    answerBtnBtnEl.style.display = "none";
}






