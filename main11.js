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
     // Fundamentals
  ["What four main factors affect aircraft performance?", "Aircraft weight, atmospheric conditions, runway environment, and the physical laws governing flight forces."],
  ["Where is aircraft performance data found?", "In the Aircraft Flight Manual (AFM) or Pilot’s Operating Handbook (POH)."],
  ["Why must pilots understand the basis of performance data?", "To properly interpret variations and apply necessary corrections for nonstandard conditions."],

  // Atmosphere & Pressure
  ["What are the primary gases composing Earth’s atmosphere?", "78% nitrogen, 21% oxygen, and 1% other gases."],
  ["What is standard atmospheric pressure at sea level?", "29.92 inches of mercury (Hg) or 1013.2 millibars (mb)."],
  ["What is the standard temperature at sea level?", "59°F (15°C)."],
  ["At what rate does temperature decrease with altitude in the standard atmosphere?", "3.5°F or 2°C per 1,000 feet up to 36,000 feet."],
  ["At what rate does pressure decrease with altitude up to 10,000 feet?", "1 inch of mercury (Hg) per 1,000 feet."],

  // Pressure Altitude
  ["Define pressure altitude.", "Height above the standard datum plane (SDP) where pressure is 29.92\"Hg."],
  ["How can pressure altitude be determined?", "By setting altimeter to 29.92\"Hg and reading indicated altitude, applying altimeter setting correction, or using a flight computer."],
  ["What is the purpose of pressure altitude?", "It serves as a baseline for performance calculations and flight levels above 18,000 feet."],

  // Density Altitude
  ["Define density altitude.", "Pressure altitude corrected for nonstandard temperature."],
  ["What happens to aircraft performance as density altitude increases?", "Performance decreases due to thinner air (reduced power, thrust, and lift)."],
  ["What conditions create high density altitude?", "High elevation, low pressure, high temperature, and high humidity."],
  ["What conditions create low density altitude?", "Low elevation, high pressure, low temperature, and low humidity."],
  ["What is the relationship between density and pressure?", "Density is directly proportional to pressure at constant temperature."],
  ["What is the relationship between density and temperature?", "Density is inversely proportional to temperature at constant pressure."],
  ["Why does humidity reduce air density?", "Water vapor is lighter than air, making humid air less dense and decreasing performance."],

  // Performance Basics
  ["List primary factors most affected by performance.", "Takeoff and landing distance, climb rate, ceiling, payload, range, speed, maneuverability, stability, and fuel economy."],
  ["What is the relationship between induced drag and airspeed?", "Induced drag decreases with increased airspeed."],
  ["What is the relationship between parasite drag and airspeed?", "Parasite drag increases with increased airspeed."],
  ["What is the condition for maximum level flight speed?", "When thrust available equals thrust required."],
  ["What is the condition for minimum level flight speed?", "When lift equals weight and thrust equals drag, near stall speed."],

  // Climb Performance
  ["What two forms of mechanical energy are relevant to flight?", "Kinetic Energy (KE) — energy of motion, and Potential Energy (PE) — energy of position."],
  ["Define thrust.", "A force that moves an aircraft through the air, measured in pounds or newtons."],
  ["Define power.", "The rate of performing work, measured in horsepower or kilowatts."],
  ["What two factors contribute to positive climb performance?", "Excess power or converting airspeed (kinetic energy) into altitude (potential energy)."],
  ["What is maximum angle of climb (AOC)?", "The steepest climb angle over the shortest horizontal distance, achieved at VX."],
  ["What is maximum rate of climb (ROC)?", "The greatest altitude gain over time, achieved at VY."],
  ["What happens to VX with altitude?", "VX increases slightly with altitude."],
  ["What happens to VY with altitude?", "VY decreases slightly with altitude."],
  ["Define service ceiling.", "Altitude at which the aircraft’s ROC drops below 100 feet per minute."],
  ["Define absolute ceiling.", "Altitude where no excess power exists — ROC equals zero."],

  // Loading and Performance
  ["Define power loading.", "Total weight divided by engine horsepower."],
  ["Define wing loading.", "Total weight divided by wing area in square feet."],
  ["What effect does increased weight have on climb performance?", "Reduces excess power, decreases rate and angle of climb, and requires higher airspeed."],

  // Range & Endurance
  ["Differentiate range and endurance.", "Range is distance traveled; endurance is time aloft."],
  ["Define specific endurance.", "Flight time per pound of fuel — inverse of fuel flow."],
  ["Define specific range.", "Nautical miles flown per pound of fuel — speed divided by fuel flow."],
  ["At what point is maximum endurance achieved?", "At minimum power required."],
  ["At what point is maximum range achieved?", "At maximum lift-to-drag ratio (L/DMAX)."],
  ["What happens to optimum cruise speed as weight decreases?", "It decreases."],
  ["What percentage of max specific range is typically used for long-range cruise?", "99% for efficiency and speed balance."],
  ["How does altitude affect range for propeller-driven aircraft?", "Little variation until high altitude; TAS increases with altitude."],

  // Region of Reversed Command
  ["What is the region of reversed command?", "Flight regime where lower airspeeds require higher power settings to maintain altitude."],
  ["When is the region of reversed command encountered?", "During low-speed operations such as approaches or soft-field takeoffs."],
  ["What is the speed for best endurance relative to the power curve?", "At the lowest point on the power required curve."],

  // Takeoff Performance
  ["Why is takeoff distance critical?", "It determines required runway length for safe operation."],
  ["What is typical lift-off speed?", "Between 1.05 and 1.25 times stall speed."],
  ["What is the effect of increased gross weight on takeoff distance?", "Increases lift-off speed, decreases acceleration, and increases distance."],
  ["How does a 10% increase in takeoff weight affect takeoff distance?", "Increases distance by approximately 21%."],
  ["How does a headwind affect takeoff distance?", "Reduces takeoff distance; a headwind 10% of takeoff speed reduces it about 19%."],
  ["How does a tailwind affect takeoff distance?", "Increases distance; 10% tailwind increases it by about 21%."],
  ["What are the most critical takeoff conditions?", "High weight, high density altitude, high temperature, and unfavorable wind."],

  // Runway Environment
  ["How does an upsloping runway affect takeoff?", "Increases takeoff roll."],
  ["How does a downsloping runway affect takeoff?", "Decreases takeoff roll."],
  ["What is runway gradient expressed as?", "Percentage of height change over runway length."],
  ["What effect does grass or soft surfaces have on takeoff roll?", "Increases ground roll due to higher rolling resistance."],
  ["What causes dynamic hydroplaning?", "When tires ride on a layer of water, reducing braking and control."],
  ["How is hydroplaning speed calculated?", "9 × √(tire pressure in psi)."],

  // Landing Performance
  ["What is the goal for minimum landing distance?", "To achieve maximum deceleration at minimum safe landing speed."],
  ["How does gross weight affect landing distance?", "Heavier aircraft land faster and require longer distances."],
  ["What is the approximate increase in landing distance per 1,000 feet of altitude?", "About 3.5% per 1,000 feet."],
  ["How does a 10% excess landing speed affect landing distance?", "Increases landing distance by about 21%."],
  ["What effect does a 10-knot tailwind have on landing distance?", "Increases landing distance by approximately 21%."],
  ["What braking technique should be used when runway is wet?", "Use aerodynamic braking first, apply brakes gently to avoid hydroplaning."],

  // Performance Speeds (V-Speeds)
  ["Define VY.", "Best rate of climb speed — maximum altitude gain per time."],
  ["Define VX.", "Best angle of climb speed — maximum altitude gain per distance."],
  ["Define VS0.", "Power-off stall speed in landing configuration."],
  ["Define VS1.", "Power-off stall speed in a specified configuration."],
  ["Define VLE.", "Maximum speed with landing gear extended."],
  ["Define VLO.", "Maximum speed for landing gear operation (extend/retract)."],
  ["Define VFE.", "Maximum flap extended speed."],
  ["Define VA.", "Design maneuvering speed — max speed for full control deflection without structural damage."],
  ["Define VNO.", "Maximum structural cruising speed for normal operations."],
  ["Define VNE.", "Never exceed speed — structural failure may occur above this speed."],

  // Performance Charts
  ["What is the purpose of performance charts?", "To predict aircraft performance for takeoff, climb, cruise, and landing under various conditions."],
  ["What must pilots consider when using performance charts?", "Chart conditions, notes, and accuracy of readings."],
  ["Why is interpolation used on performance charts?", "To estimate values between published data points."],
  ["What happens if performance charts are not used properly?", "Performance predictions may be inaccurate, compromising safety."],
  ["Where are crosswind limits published?", "In the AFM/POH as the maximum demonstrated crosswind component."],
  ["What regulation requires pilots to be familiar with all available performance data before flight?", "14 CFR 91.103."],

  // Transport and Reference
  ["What CFR part governs transport category airplane certification?", "14 CFR Part 25."],
  ["What CFR part governs transport category helicopter certification?", "14 CFR Part 29."],
  ["Where are obstacle clearance requirements found?", "Instrument Procedures Handbook (FAA-H-8083-16)."],
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






