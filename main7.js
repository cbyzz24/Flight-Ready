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
     // Engines
  ["What type of engines are most small general aviation airplanes equipped with?", "Horizontally opposed, air-cooled, normally aspirated piston engines."],
  ["What are the four strokes of a typical piston engine?", "Intake, compression, power, exhaust."],
  ["What is the purpose of the carburetor?", "To mix fuel and air in the proper ratio for combustion."],
  ["What is carburetor ice and when is it most likely to form?", "Ice forming in the carburetor venturi due to fuel vaporization and pressure drop; likely between 20°F and 70°F with high humidity."],
  ["What is the purpose of carburetor heat?", "To prevent or eliminate carburetor ice by directing hot air into the carburetor."],
  ["What is a fuel-injected engine’s advantage over carbureted engines?", "Less risk of carburetor icing, improved fuel distribution, and better performance."],
  ["What are turbochargers and superchargers used for?", "To compress intake air, allowing the engine to maintain power at higher altitudes."],
  ["What is detonation?", "Uncontrolled, explosive combustion of the fuel-air mixture, causing engine overheating and damage."],
  ["What is preignition?", "Ignition of the fuel-air mixture before the spark plug fires, caused by hot spots in the cylinder."],
  ["What can cause engine roughness at altitude?", "Carburetor ice, fuel mixture too lean, or spark plug fouling."],
  ["What is the purpose of mixture control?", "To adjust the fuel-air ratio for altitude and temperature changes."],
  ["What happens if the mixture is too rich?", "Excess fuel causes rough running, carbon deposits, and loss of power."],
  ["What happens if the mixture is too lean?", "Higher engine temperatures, detonation, and possible engine damage."],

  // Ignition
  ["What provides the spark for combustion in an aircraft engine?", "Magnetos."],
  ["Why do aircraft use dual magnetos?", "For redundancy and improved engine efficiency."],
  ["Why are aircraft ignition systems independent of the electrical system?", "To allow the engine to run even if the electrical system fails."],
  ["What is magneto timing?", "The precise moment the magneto sends a spark to the spark plug."],
  ["What is the purpose of a spark plug?", "To ignite the fuel-air mixture in each cylinder."],
  ["What causes spark plug fouling?", "Excessively rich mixture, carbon buildup, or lead deposits."],

  // Fuel Systems
  ["What is the purpose of the fuel system?", "To store and deliver clean fuel to the engine under all conditions."],
  ["What is the difference between gravity-feed and pump-feed systems?", "Gravity-feed relies on height difference; pump-feed uses engine-driven and auxiliary pumps."],
  ["What are fuel tank vents for?", "To allow air to replace fuel as it is used, preventing vacuum lock."],
  ["What is fuel sump drainage for?", "To check for water or contaminants before flight."],
  ["What color is 100LL avgas?", "Blue."],
  ["What color is 100 avgas?", "Green."],
  ["What color is Jet A fuel?", "Clear or straw-colored."],
  ["What is vapor lock?", "Fuel vaporizing in the lines, preventing liquid fuel flow to the engine."],
  ["What is the purpose of fuel selectors?", "To choose which tank or source feeds the engine."],
  ["What should a pilot do if fuel pressure drops in flight?", "Turn on the auxiliary fuel pump and check fuel selector position."],

  // Oil System
  ["What are the functions of engine oil?", "Lubrication, cooling, cleaning, and sealing."],
  ["What are the two types of oil systems?", "Wet sump and dry sump."],
  ["What is the advantage of a dry sump oil system?", "It uses a separate oil tank and scavenger pumps, allowing greater oil capacity and engine cooling."],
  ["What is the purpose of an oil cooler?", "To reduce oil temperature and prevent engine overheating."],
  ["What does oil pressure indicate?", "Proper lubrication; low pressure may indicate leaks or pump failure."],
  ["What does oil temperature indicate?", "Whether the engine is operating within normal heat ranges."],
  ["What is the danger of running with low oil pressure?", "Engine seizure due to lack of lubrication."],

  // Electrical Systems
  ["What voltage are most GA aircraft electrical systems?", "14 or 28 volts DC."],
  ["What produces electrical power in most light aircraft?", "An alternator."],
  ["What is the function of the battery?", "To start the engine and provide backup electrical power."],
  ["What is a bus bar?", "An electrical distribution point that feeds multiple circuits."],
  ["What is an electrical load meter used for?", "To show the electrical system’s demand compared to alternator output."],
  ["What is an ammeter?", "An instrument showing electrical current flow, either into or out of the battery."],
  ["What happens if the alternator fails in flight?", "Battery supplies power until discharged; non-essential systems should be turned off."],
  ["How can a pilot know if the alternator has failed?", "Low voltage warning light or discharge indication on ammeter/load meter."],
  ["Why are circuit breakers used?", "To protect electrical circuits from overloading or short circuits."],
  ["What is the master switch?", "A switch that controls the electrical system, typically split between battery and alternator sides."],

  // Landing Gear
  ["What are the two main types of landing gear?", "Conventional (tailwheel) and tricycle gear."],
  ["What are the advantages of tricycle gear?", "Better forward visibility, reduced ground loop tendency, improved braking."],
  ["What is the function of oleo struts?", "To absorb landing shocks using oil and compressed air."],
  ["What are the two types of braking systems?", "Single-disc hydraulic brakes and multi-disc systems on larger aircraft."],
  ["What is the purpose of anti-skid brakes?", "To prevent wheel lockup and maintain directional control during braking."],
  ["What is a retractable landing gear system?", "Landing gear that folds into the fuselage or wing to reduce drag."],
  ["What must a pilot verify after retracting gear?", "A positive gear-up indication (lights or indicators)."],
  ["What must a pilot verify before landing gear extension?", "Three green lights or other positive down-and-locked indication."],
  ["What is a squat switch?", "A weight-on-wheels switch that prevents gear retraction on the ground."],
  ["What should a pilot do if landing gear does not extend normally?", "Use the emergency extension system (manual crank, hydraulic release, or free-fall)."],

  // Hydraulic Systems
  ["What is the purpose of a hydraulic system?", "To operate systems such as brakes, flaps, landing gear, and flight controls."],
  ["What are the advantages of hydraulics?", "Lightweight, simple, reliable, and capable of transmitting large forces."],
  ["What is Pascal’s Law?", "Pressure applied to a confined fluid is transmitted equally in all directions."],
  ["What is the typical pressure range of aircraft hydraulic systems?", "1,000 to 3,000 psi."],
  ["What type of fluid is used in aircraft hydraulic systems?", "Special hydraulic oils resistant to foaming and temperature extremes."],
  ["What are accumulators in hydraulic systems?", "Devices that store pressure to help absorb shocks and provide emergency power."],

  // Cabin & Environmental Systems
  ["What is a pitot-static system used for?", "To measure airspeed, altitude, and vertical speed."],
  ["What is the purpose of the pitot tube?", "To measure ram air pressure for the airspeed indicator."],
  ["What instruments use static pressure?", "Altimeter, vertical speed indicator, and airspeed indicator."],
  ["What is the alternate static source?", "A backup source of static pressure, usually inside the cabin."],
  ["What is cabin pressurization?", "A system that maintains cabin pressure at a safe level while flying at high altitudes."],
  ["What is the danger of rapid decompression?", "Hypoxia and possible structural damage to the aircraft."],
  ["What is the purpose of an oxygen system?", "To provide supplemental oxygen for crew and passengers at high altitudes."],
  ["What types of oxygen systems are used in aviation?", "Continuous-flow, diluter-demand, and pressure-demand systems."],
  ["At what altitude must crew use supplemental oxygen if flying more than 30 minutes?", "Above 12,500 feet MSL."],
  ["At what altitude must crew use oxygen continuously?", "Above 14,000 feet MSL."],
  ["At what altitude must passengers be provided with oxygen?", "Above 15,000 feet MSL."],
  ["What is an air conditioning system’s purpose in aircraft?", "To regulate cabin temperature and humidity."],

  // Deicing & Anti-Icing Systems
  ["What is the difference between anti-icing and deicing?", "Anti-icing prevents ice formation; deicing removes ice after it forms."],
  ["What is a common anti-icing system?", "Heated pitot tubes, propeller boots, and windshield heat."],
  ["What is a common deicing system?", "Pneumatic boots on leading edges of wings and tail surfaces."],
  ["What is weeping wing technology?", "Wings coated with a fluid that prevents ice adhesion."],
  ["What is the danger of frost on aircraft surfaces?", "It disrupts airflow and can prevent takeoff by reducing lift."],

  // Fire Protection
  ["What fire extinguishing agents are commonly used in aircraft?", "CO2, Halon, and dry chemicals."],
  ["What is the purpose of a fire detection system?", "To alert the pilot to engine or cabin fires before they spread."],
  ["What is the purpose of a fire wall?", "A barrier designed to contain engine fires and protect the cabin."],

  // Advanced/Scenario Questions
  ["If the alternator fails at night, what steps should the pilot take?", "Reduce electrical load, use battery power for essentials, and land as soon as practical."],
  ["What should a pilot do if oil pressure drops but temperature rises?", "Suspect oil leak or pump failure and prepare for possible engine failure."],
  ["What should a pilot do if carburetor ice is suspected?", "Apply full carburetor heat and monitor for power recovery."],
  ["If fuel contamination is found during preflight, what should be done?", "Drain until clean fuel appears and do not depart until contamination is resolved."],
  ["What is the danger of resetting a circuit breaker multiple times?", "It could cause overheating and fire; reset only once if necessary."],
  ["If cabin pressurization fails at high altitude, what must the pilot do?", "Use supplemental oxygen and descend to a safe altitude immediately."],
  ["What happens if magneto switch is turned off during engine run-up?", "Engine should shut down; if not, a grounding issue may exist."],
  ["What happens if the pitot tube is blocked but static port remains open?", "Airspeed indicator will read zero."],
  ["What happens if the static port is blocked but pitot tube is open?", "Altimeter and VSI freeze, airspeed indicator gives incorrect readings."],
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






