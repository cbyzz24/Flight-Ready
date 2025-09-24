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
         // --- Definitions & Categories ---
  ["According to 14 CFR part 1, how is an airplane defined?", "An engine-driven, fixed-wing aircraft supported in flight by the dynamic reaction of air against its wings."],
  ["What are the main categories of aircraft for certification of airmen?", "Airplane, rotorcraft, glider, lighter-than-air, powered-lift, powered parachute, and weight-shift control aircraft."],
  ["What is an advanced avionics aircraft?", "An aircraft with GPS navigation and moving map display combined with another system, such as an autopilot."],

  // --- Certification & Airworthiness ---
  ["What three aviation products does the FAA certify?", "Aircraft, aircraft engines, and propellers."],
  ["Which CFR part contains standards for normal, utility, acrobatic, and commuter category airplanes?", "14 CFR part 23."],
  ["Which CFR part contains standards for transport category airplanes?", "14 CFR part 25."],
  ["What is a Type Certificate (TC)?", "FAA approval that an aviation product complies with applicable airworthiness standards."],
  ["What document accompanies a Type Certificate?", "A Type Certificate Data Sheet (TCDS)."],
  ["What are the two classifications of airworthiness certificates?", "Standard (white) and Special (pink)."],
  ["Which certificate type is issued for normal, utility, acrobatic, commuter, and transport aircraft?", "Standard Airworthiness Certificate."],
  ["Which certificate type is issued for experimental, light sport, and restricted category aircraft?", "Special Airworthiness Certificate."],

  // --- Aerodynamics & Forces ---
  ["What are the four forces acting on an aircraft in straight-and-level flight?", "Thrust, lift, weight, and drag."],
  ["What is thrust?", "The forward force produced by the powerplant/propeller that opposes drag."],
  ["What is drag?", "A rearward retarding force caused by disruption of airflow, opposing thrust."],
  ["What is lift?", "The force produced by the dynamic effect of air on the wing, acting perpendicular to the flight path."],
  ["What is weight in aviation terms?", "The combined load of the aircraft itself, crew, fuel, and cargo, acting downward through the center of gravity."],

  // --- Aircraft Axes ---
  ["What is the longitudinal axis and its motion?", "Nose-to-tail axis; movement around it is roll."],
  ["What is the lateral axis and its motion?", "Wingtip-to-wingtip axis; movement around it is pitch."],
  ["What is the vertical axis and its motion?", "Vertical line through the CG; movement around it is yaw."],
  ["Why is center of gravity (CG) important?", "It determines the aircraft’s stability in flight."],

  // --- Major Components ---
  ["What are the five major components of an airplane?", "Fuselage, wings, empennage, landing gear, and powerplant."],
  ["What is the fuselage?", "The central body that holds crew, passengers, and cargo, and connects wings and tail assembly."],
  ["What are the two common fuselage structure types?", "Monocoque and semimonocoque."],
  ["What are the primary structural parts of a wing?", "Spars, ribs, and stringers."],
  ["What are ailerons used for?", "To roll the aircraft by moving in opposite directions."],
  ["What are flaps used for?", "To increase lift for takeoffs and landings."],
  ["What does the empennage consist of?", "Vertical stabilizer, horizontal stabilizer, rudder, elevator, and trim tabs."],
  ["What is a stabilator?", "A one-piece horizontal stabilizer that pivots to control pitch."],
  ["What is landing gear with a tailwheel called?", "Conventional landing gear."],
  ["What is landing gear with a nosewheel called?", "Tricycle gear."],
  ["What are the functions of the powerplant?", "Provide thrust, electrical power, vacuum source, and heat for the cabin."],
  ["What is the purpose of the cowling or nacelle?", "Streamline airflow and help cool the engine."],
  ["What does a propeller do?", "Converts engine rotation into thrust by creating a pressure differential."],

  // --- Subcomponents ---
  ["What is the airframe?", "The basic structure designed to withstand aerodynamic forces and stresses."],
  ["What is the purpose of the aircraft electrical system?", "To generate, regulate, and distribute electrical power to systems and instruments."],
  ["What do primary flight controls do?", "Govern aircraft attitude and flight path (elevator, ailerons, rudder)."],
  ["How do airplane brakes work?", "Hydraulic calipers squeeze pads against a rotor attached to the wheels to slow them."],

  // --- Types of Construction ---
  ["What is a truss structure?", "A fuselage framework of welded tubing, reinforced with struts and covered with fabric or metal."],
  ["What is monocoque construction?", "Stressed skin supports most loads with minimal internal bracing."],
  ["What is a disadvantage of monocoque?", "Not tolerant to surface deformation."],
  ["What is semimonocoque construction?", "Uses bulkheads, formers, and stringers to reinforce stressed skin and share loads."],
  ["What is a firewall?", "A heat-resistant partition between the engine and the cabin."],

  // --- Composites ---
  ["When did composite construction become common?", "By the 1960s, with fiberglass sailplanes, and certified by FAA in 1965."],
  ["What are common composite materials in aircraft?", "Fiberglass, carbon fiber, Kevlar."],
  ["What is the role of the matrix in composites?", "The resin 'glue' that holds fibers and shapes the part."],
  ["What is the most common matrix in aircraft composites?", "Epoxy resin."],
  ["What are the advantages of fiberglass?", "Good strength, impact resistance, inexpensive, easy to work with."],
  ["What is the disadvantage of fiberglass?", "Heavier than aluminum equivalents."],
  ["What are the advantages of carbon fiber?", "High strength, light weight, high stiffness."],
  ["What is the disadvantage of carbon fiber?", "Brittle with poor impact resistance unless toughened."],
  ["What are the advantages of composites?", "Light weight, smooth aerodynamic surfaces, reduced drag, no corrosion, good fatigue resistance."],
  ["What is a major disadvantage of composites?", "Hidden internal damage (delaminations) from low-energy impacts."],
  ["Why must composite aircraft often be painted white?", "To prevent heat damage to resin from solar heating."],
  ["Why are chemical paint strippers harmful to composites?", "They damage resin and structure; only mechanical paint removal is allowed."],

  // --- Lightning Protection ---
  ["How is lightning strike energy managed in aluminum aircraft?", "It conducts naturally through the skin."],
  ["How is lightning protection achieved in composite aircraft?", "By adding metal mesh (aluminum or copper) bonded to skin surfaces."],
  ["Why do fiberglass composites allow internal antennas?", "Fiberglass is transparent to radio frequencies."],

  // --- Instrumentation ---
  ["What are the three categories of instruments?", "Performance, control, and navigation instruments."],
  ["What do performance instruments show?", "Aircraft performance (altimeter, airspeed, VSI, heading)."],
  ["What do control instruments show?", "Immediate attitude and power changes (attitude indicator, engine power)."],
  ["What do navigation instruments show?", "Position relative to navigation facilities (VOR, GPS, ILS)."],
  ["What is the difference between PFD and MFD?", "PFD is the primary flight display; MFD is the multifunction display."],
  ["How many satellites are needed for a GPS 3D position fix?", "At least four."],
  ["What are the three dimensions of GPS position?", "Latitude, longitude, and altitude."],
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
