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
     // AFM/POH Basics
  ["What is the purpose of an Airplane Flight Manual (AFM)?", "It provides FAA-approved information and instructions required to operate a specific aircraft safely."],
  ["Who develops the AFM?", "The aircraft manufacturer."],
  ["Who approves the AFM?", "The FAA."],
  ["What is the Pilot’s Operating Handbook (POH)?", "A manufacturer’s manual that may include FAA-approved AFM information."],
  ["Since what year have most light aircraft POHs also served as AFMs?", "1975."],
  ["What organization standardized the AFM/POH format?", "The General Aviation Manufacturers Association (GAMA) under Specification No. 1."],
  ["How many main sections are typically included in an AFM/POH?", "Nine sections (General, Limitations, Emergency Procedures, Normal Procedures, Performance, Weight & Balance, Systems, Handling/Maintenance, Supplements)."],

  // Preliminary Pages
  ["Why is each AFM/POH unique?", "It contains information specific to an individual aircraft’s equipment and serial number."],
  ["What is indicated on the AFM/POH title page?", "The aircraft’s registration number and serial number."],
  ["How are emergency procedures made easy to find?", "They are often marked with a red tab."],

  // General Section
  ["What information is included in the General section?", "Basic aircraft description, dimensions, abbreviations, symbology, and terminology."],

  // Limitations Section
  ["What are operating limitations?", "Restrictions required by regulation for safe operation of aircraft systems."],
  ["What do ASI color arcs represent?", "Green: normal range, Yellow: caution range, White: flap operating range, Red line: never exceed speed (VNE)."],
  ["What does a blue radial line on a multi-engine ASI indicate?", "Best rate of climb speed with one engine inoperative (VYSE)."],
  ["What does a red radial line on a multi-engine ASI indicate?", "Minimum controllable airspeed with one engine inoperative (VMC)."],

  // Emergency Procedures Section
  ["What types of events are covered in Emergency Procedures?", "Engine failures, fires, system failures, emergency restarts, ditching, etc."],
  ["What should be memorized from the Emergency Procedures section?", "Immediate action items."],

  // Normal Procedures Section
  ["What is found in the Normal Procedures section?", "Checklists for preflight, taxi, takeoff, climb, cruise, descent, landing, and shutdown."],
  ["Why is checklist usage important?", "Consistent checklist use is a sign of a disciplined, competent pilot."],

  // Performance Section
  ["What does the Performance section provide?", "Charts and data for takeoff, climb, cruise, and landing performance."],

  // Weight & Balance Section
  ["What does the Weight & Balance section provide?", "FAA-required data and sample problems for weight and balance computations."],

  // Systems Description
  ["What is the purpose of the Systems section?", "To explain aircraft systems appropriate to the pilot operating the aircraft."],

  // Handling/Maintenance Section
  ["What does the Handling and Maintenance section include?", "Recommended inspections, preventive maintenance, ground handling, storage procedures."],

  // Supplements Section
  ["What does the Supplements section include?", "Instructions for optional systems like autopilots, nav systems, air conditioning."],

  // Aircraft Registration
  ["What certificate proves legal ownership of an aircraft?", "Certificate of Aircraft Registration."],
  ["When must the Certificate of Registration be carried?", "At all times in the aircraft."],
  ["Name one case when the Certificate of Registration is no longer valid.", "If the aircraft is destroyed, sold, exported, or registration is canceled."],

  // Airworthiness Certificate
  ["Who issues an Airworthiness Certificate?", "The FAA after inspection."],
  ["Where must the Airworthiness Certificate be displayed?", "In the aircraft, visible to crew and passengers."],
  ["What categories can a Standard Airworthiness Certificate cover?", "Normal, Utility, Acrobatic, Commuter, Transport, Manned Free Balloons."],
  ["What color is a Special Airworthiness Certificate for LSA?", "Pink."],
  ["How long is a Standard Airworthiness Certificate valid?", "Indefinitely, if the aircraft is maintained and registered properly."],

  // Maintenance
  ["Who is responsible for maintaining an aircraft in airworthy condition?", "The owner or operator."],
  ["How often must all civil aircraft be inspected?", "At least once every 12 calendar months."],
  ["Which aircraft must have 100-hour inspections?", "Aircraft under 12,500 lbs used for hire or for flight instruction for hire."],
  ["Who can perform an annual inspection?", "A certificated A&P mechanic with Inspection Authorization (IA)."],
  ["Who can perform a 100-hour inspection?", "A certificated A&P mechanic, an FAA-certified repair station, or the manufacturer."],
  ["Can an annual substitute for a 100-hour inspection?", "Yes."],
  ["How much can a 100-hour limit be exceeded?", "By up to 10 hours only to reach a maintenance facility."],

  // Other Inspection Programs
  ["What is a progressive inspection program?", "An inspection system breaking required inspections into smaller, frequent segments."],
  ["How often must altimeter and pitot-static systems be checked under IFR?", "Every 24 months."],
  ["How often must transponders be inspected?", "Every 24 months."],
  ["How often must an ELT be inspected?", "Every 12 months."],
  ["When must ELT batteries be replaced?", "After 1 hour cumulative use or 50% of useful life expiration."],

  // Minimum Equipment Lists (MEL)
  ["What regulation allows flying with inoperative equipment without an MEL?", "14 CFR 91.213(d)."],
  ["What must be done with inoperative equipment before flight?", "Deactivate or remove it, and placard INOPERATIVE."],
  ["When does use of an MEL become mandatory?", "Once the operator requests an MEL and receives a Letter of Authorization (LOA)."],

  // Preventive Maintenance
  ["Who can perform preventive maintenance?", "Certificated pilots (except student, sport, and recreational) on aircraft they own or operate."],
  ["Give three examples of preventive maintenance.", "Changing oil, replacing spark plugs, servicing wheel bearings."],
  ["What record must be made after preventive maintenance?", "A maintenance log entry with description, date, pilot’s name, signature, and certificate number."],

  // Repairs & Alterations
  ["What form documents major repairs/alterations?", "FAA Form 337."],
  ["Who can sign off a major repair?", "An IA mechanic, repair station, or FAA representative."],

  // Special Flight Permits
  ["What is a Special Flight Permit?", "Authorization to fly an aircraft not meeting airworthiness standards but safe for specific flight."],
  ["Name one use of a Special Flight Permit.", "Flying to a repair facility, delivering/exporting an aircraft, evacuating from danger, or overweight ferry flight."],

  // Airworthiness Directives (ADs)
  ["What is the purpose of an AD?", "To correct unsafe conditions in aircraft, engines, propellers, or appliances."],
  ["Are ADs regulatory?", "Yes, compliance is mandatory."],
  ["What are the two types of ADs?", "Emergency (immediate compliance) and less urgent (compliance within set time)."],
  ["Whose responsibility is AD compliance?", "The aircraft owner or operator."],
  ["What record must be kept for ADs?", "Status, method of compliance, next due time/date, and signature of mechanic/repair station."],

  // Owner/Operator Responsibilities
  ["List three responsibilities of aircraft owners/operators.", "Keep current registration, maintain airworthiness, comply with ADs, update address/sale info, hold FCC license if required."],
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






