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
     // Stability & Control
  ["What is stability in aviation?", "The inherent quality of an aircraft to correct for conditions disturbing its equilibrium and return to original flight path."],
  ["What are the two main types of stability?", "Static and dynamic stability."],
  ["What is static stability?", "The initial tendency of an aircraft to return to equilibrium after being disturbed."],
  ["What is dynamic stability?", "The aircraft’s overall response over time after being disturbed from equilibrium."],
  ["What are the three axes of an aircraft?", "Longitudinal (roll), Lateral (pitch), and Vertical (yaw)."],
  ["What controls movement around the longitudinal axis?", "Ailerons."],
  ["What controls movement around the lateral axis?", "Elevator or stabilator."],
  ["What controls movement around the vertical axis?", "Rudder."],
  ["What is neutral stability?", "When an aircraft tends to remain in a new position after being disturbed."],
  ["What is negative stability?", "When an aircraft continues to move away from equilibrium after disturbance."],
  ["How does CG location affect stability?", "Forward CG increases stability but requires more tail downforce; aft CG reduces stability and increases risk of stall/spin."],
  ["What is maneuverability?", "The ability of an aircraft to change flight attitude and withstand stresses imposed by maneuvers."],
  ["What is controllability?", "The capability of an aircraft to respond to pilot control inputs."],

  // Aerodynamic Forces
  ["What are the four forces of flight?", "Lift, weight, thrust, and drag."],
  ["What is induced drag?", "Drag created as a byproduct of lift, strongest at low speeds/high angles of attack."],
  ["What is parasite drag?", "Drag caused by the shape and skin friction of the aircraft, increases with speed."],
  ["What are the components of parasite drag?", "Form drag, skin friction drag, and interference drag."],
  ["When is induced drag greatest?", "At low airspeeds and high angles of attack."],
  ["When is parasite drag greatest?", "At high airspeeds."],
  ["What is total drag?", "The combination of parasite and induced drag."],
  ["What is the minimum drag speed?", "The airspeed at which total drag is lowest and endurance is greatest."],
  ["What is the lift-to-drag ratio (L/D)?", "The efficiency of an airfoil, expressed as the amount of lift produced for a given drag."],
  ["At what speed is best glide achieved?", "At the speed that provides the highest L/D ratio."],

  // Stalls & Spins
  ["What is a stall?", "Loss of lift caused by exceeding the critical angle of attack."],
  ["What is the critical angle of attack?", "The angle between the chord line and relative wind at which a wing stalls, typically about 16–20 degrees."],
  ["Can an airplane stall at any airspeed?", "Yes, if the critical angle of attack is exceeded."],
  ["Can an airplane stall at any attitude?", "Yes, stalls are based on angle of attack, not attitude."],
  ["What is a spin?", "An aggravated stall resulting in autorotation about the vertical axis."],
  ["What conditions are required for a spin to occur?", "Both wings must be stalled, but one wing must be more deeply stalled than the other."],
  ["What are the four phases of a spin?", "Incipient, developed, recovery, and post-recovery flight."],
  ["What acronym helps pilots remember spin recovery?", "PARE: Power idle, Ailerons neutral, Rudder opposite, Elevator forward."],
  ["Why are spins more dangerous with aft CG?", "Because recovery is more difficult and stall occurs more abruptly."],
  ["What is an accelerated stall?", "A stall that occurs at higher airspeeds due to increased load factor."],
  ["What is a secondary stall?", "A stall that occurs during recovery from a preceding stall due to excessive back pressure."],
  ["What is a cross-controlled stall?", "A stall caused by uncoordinated inputs, often during base-to-final turns."],
  ["What is a departure stall?", "A stall that occurs on takeoff or climb, often due to high pitch and low airspeed."],
  ["What is a landing stall?", "A stall occurring close to the ground, typically during approach or flare."],

  // Load Factor
  ["What is load factor?", "The ratio of total lift to the airplane’s weight, expressed in Gs."],
  ["How does load factor change in a level 60° banked turn?", "It doubles (2 Gs)."],
  ["How does load factor change in a 45° banked turn?", "It increases to about 1.4 Gs."],
  ["What effect does increased load factor have on stall speed?", "It raises the stall speed."],
  ["What is maneuvering speed (Va)?", "The maximum speed at which full deflection of controls can be applied without overstressing the aircraft."],
  ["Why does maneuvering speed decrease with weight?", "Because lighter aircraft stall at lower speeds, protecting them from excessive G loading."],
  ["What is Vno?", "Maximum structural cruising speed, the top of the green arc on the airspeed indicator."],
  ["What is Vne?", "Never-exceed speed, the red radial line on the airspeed indicator."],
  ["What is Va typically used for?", "Turbulence penetration speed and stall protection during abrupt maneuvers."],

  // Ground Effect
  ["What is ground effect?", "Increased lift and reduced induced drag when flying within one wingspan of the ground."],
  ["Why does ground effect occur?", "The ground interferes with wingtip vortices, reducing downwash and induced drag."],
  ["What is a common hazard when taking off in ground effect?", "Aircraft may lift off prematurely but be unable to climb out of ground effect."],
  ["What hazard occurs when landing in ground effect?", "Aircraft may float and overshoot the runway. "],

  // Maneuvering & Yaw
  ["What is adverse yaw?", "The tendency of the nose to yaw opposite the direction of a roll due to differential drag on the wings."],
  ["How is adverse yaw countered?", "By applying coordinated rudder with aileron input."],
  ["What is dihedral effect?", "The tendency of an aircraft with upward-angled wings to return to level flight after a disturbance in roll."],
  ["What is sweepback?", "Wing design where wings are angled backward to improve stability and delay compressibility effects."],
  ["What is keel effect?", "Stabilizing effect caused by the fuselage surface area above the CG resisting sideslip."],
  ["What is Dutch roll?", "A coupled oscillation in yaw and roll common in swept-wing aircraft."],
  ["What is phugoid oscillation?", "Long-period oscillation in pitch and airspeed, gradually dampening over time."],

  // High-Speed & Performance Factors
  ["What is Mach buffet?", "Turbulence over control surfaces caused by airflow approaching the speed of sound."],
  ["What is Mach tuck?", "Nose-down tendency caused by shockwaves moving aft on the wing at transonic speeds."],
  ["What is Coffin Corner?", "The narrow margin between stall speed and critical Mach number at high altitudes."],
  ["What is compressibility?", "Airflow at high subsonic speeds becoming compressed, causing shockwaves."],
  ["What is critical Mach number?", "The lowest Mach number at which airflow reaches Mach 1 on any part of the aircraft."],

  // Performance
  ["What factors determine an aircraft’s performance?", "Weight, altitude, temperature, humidity, and wind."],
  ["How does increased weight affect performance?", "Increases takeoff roll, reduces climb rate, increases stall speed, and decreases range."],
  ["How does altitude affect performance?", "Higher altitude reduces engine power, propeller efficiency, and wing performance due to lower air density."],
  ["How does temperature affect performance?", "Higher temperatures reduce air density, decreasing lift, thrust, and performance."],
  ["How does humidity affect performance?", "Higher humidity reduces performance since moist air is less dense than dry air."],
  ["What is density altitude?", "Pressure altitude corrected for nonstandard temperature, indicating aircraft performance."],
  ["Why is density altitude important?", "It determines aircraft takeoff, climb, and landing performance."],

  // Advanced Scenarios
  ["If a pilot pulls abruptly on the yoke below Va, what is likely to happen?", "The aircraft will stall before structural damage occurs."],
  ["If a pilot pulls abruptly on the yoke above Va, what is likely to happen?", "Structural damage could occur before a stall."],
  ["Why is aft CG dangerous during stalls?", "It reduces elevator authority and makes stall recovery more difficult."],
  ["Why is forward CG dangerous for performance?", "It increases stall speed and requires longer takeoff distance."],
  ["Why is uncoordinated flight dangerous in slow flight?", "It can lead to skids or slips, increasing spin risk."],
  ["What happens if a pilot exceeds Vne?", "Structural failure may occur due to excessive aerodynamic forces."],
  ["How do flaps affect stall speed?", "They reduce stall speed by increasing wing camber and lift."],
  ["Why do flaps reduce climb performance after takeoff?", "Because drag increases significantly when extended."],
  ["How does turning radius change with airspeed?", "At higher speeds, turn radius increases; at lower speeds, it decreases."],
  ["How does stall speed change in a bank?", "It increases as load factor increases with bank angle."],
  ["What is overbanking tendency?", "The tendency of an aircraft in a steep bank to increase bank angle without additional input."],
  ["What causes overbanking tendency?", "Greater lift on the outer wingtip than inner wingtip in a turn."],
  ["Why is coordinated use of rudder important in steep turns?", "To counteract adverse yaw and maintain smooth, balanced flight."],
  ["Why do swept wings delay Mach effects?", "Because airflow meets the wing at a lower effective airspeed."],
  ["Why are spoilers used on high-speed aircraft?", "To reduce lift and increase drag for descent or roll control."],
  ["What is the primary purpose of vortex generators?", "To energize boundary layer airflow and delay flow separation."],
  ["What is the purpose of wing twist (washout)?", "To ensure the wing root stalls before the wingtip, improving aileron effectiveness."],
  ["What is a high-lift device?", "Any device such as flaps or slats that increases lift at slower speeds."],
  ["What is the difference between slats and flaps?", "Slats extend from the leading edge to delay stall; flaps extend from the trailing edge to increase lift and drag."],
  ["What is load factor expressed in?", "Multiples of gravity (Gs)."],
  ["What is the relationship between stall speed and load factor?", "Stall speed increases with the square root of load factor."],
  ["What is the green arc on an airspeed indicator?", "Normal operating range."],
  ["What is the white arc on an airspeed indicator?", "Flap operating range."],
  ["What is the yellow arc on an airspeed indicator?", "Caution range, to be used in smooth air only."],
  ["What is the red radial line on the airspeed indicator?", "Never-exceed speed (Vne)."],
  ["What is induced flow in a stall?", "Downward airflow from the wing that increases drag and reduces lift."],
  ["What causes a wing drop in a stall?", "One wing stalls more than the other, creating rolling motion."],
  ["How can pilots minimize risk of wake turbulence?", "Stay above and upwind of the preceding aircraft’s flight path."],
  ["Why do heavier aircraft produce stronger wake turbulence?", "Because stronger lift generation creates more intense wingtip vortices."],
  ["What is the danger of encountering wake turbulence on final approach?", "It can cause uncommanded roll and loss of control near the ground."],
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






