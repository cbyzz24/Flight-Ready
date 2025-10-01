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
     // Pitot-Static System
  ["What three instruments rely on the pitot-static system?", "Airspeed Indicator (ASI), Altimeter, Vertical Speed Indicator (VSI)."],
  ["What does the pitot tube measure?", "Total pressure (static pressure + dynamic pressure)."],
  ["What happens if the pitot tube drain hole is open and the pitot tube itself is blocked?", "The ASI will read zero because trapped air vents out of the drain hole."],
  ["What happens if both the pitot tube and drain hole are blocked?", "The ASI will act like an altimeter, showing changes with altitude rather than true airspeed."],
  ["What instruments rely only on the static port?", "Altimeter and VSI."],
  ["What does an alternate static source provide?", "A backup static pressure source inside the cockpit if the primary static port is blocked."],
  ["What errors occur when using an alternate static source?", "Altimeter reads higher, ASI reads faster, VSI shows a momentary climb."],

  // Altimeter
  ["What is an aneroid wafer?", "A sealed, flexible metal capsule set to 29.92 inHg that expands/contracts with pressure changes."],
  ["What does the Kollsman window show?", "Barometric pressure setting in inches of mercury or millibars."],
  ["What error occurs when flying from high to low pressure without resetting the altimeter?", "The aircraft is lower than the indicated altitude (‘High to Low, Look Out Below’)."],
  ["What error occurs when flying from hot to cold temperatures?", "The aircraft is lower than the indicated altitude (‘From Hot to Cold, Look Out Below’)."],
  ["What are the five types of altitude?", "Indicated, True, Absolute, Pressure, Density."],
  ["What is true altitude?", "Actual height above mean sea level (MSL)."],
  ["What is absolute altitude?", "Height above ground level (AGL)."],
  ["What is density altitude?", "Pressure altitude corrected for nonstandard temperature."],
  ["What effect does high density altitude have on performance?", "Reduces engine power, propeller efficiency, and lift, resulting in longer takeoff roll."],
  ["How often should a pilot check the altimeter setting in flight?", "At regular intervals or when provided by ATC/ATIS/AWOS/ASOS."],
  ["What error margin requires altimeter recalibration?", "More than 75 feet off the surveyed field elevation."],

  // VSI
  ["What does the VSI measure?", "Rate of climb or descent in feet per minute."],
  ["What is the VSI lag?", "6–9 seconds delay before showing the correct rate of climb/descent."],
  ["What improvement does the IVSI provide?", "Immediate trend indication using accelerometers."],

  // ASI
  ["What does the ASI measure?", "Difference between pitot (dynamic) and static pressure."],
  ["What are the four main types of airspeed?", "Indicated (IAS), Calibrated (CAS), True (TAS), Groundspeed (GS)."],
  ["What is the rule of thumb for calculating TAS from CAS?", "Add 2% per 1,000 feet of altitude."],
  ["What color is the ASI white arc and what does it represent?", "Flap operating range."],
  ["What is VSO?", "Stall speed in landing configuration (power-off)."],
  ["What is VFE?", "Maximum flap extension speed."],
  ["What is VS1?", "Stall speed in clean configuration."],
  ["What is VNO?", "Maximum structural cruising speed (upper green arc)."],
  ["What is VNE?", "Never exceed speed (red line)."],
  ["What is VA?", "Design maneuvering speed — the max speed for abrupt control inputs without structural damage."],
  ["What is VX?", "Best angle of climb (most altitude gained over shortest distance)."],
  ["What is VY?", "Best rate of climb (most altitude gained in least time)."],
  ["What is VMC?", "Minimum control speed for twin-engine aircraft with one engine inoperative."],

  // Blockages
  ["What happens if the static port is blocked?", "Altimeter freezes, VSI reads zero, ASI gives incorrect indications."],
  ["What happens to the ASI with a blocked static port while climbing?", "Indicates slower than actual airspeed."],
  ["What happens to the ASI with a blocked static port while descending?", "Indicates faster than actual airspeed."],

  // Gyroscopic Principles
  ["What are the two main properties of a gyroscope?", "Rigidity in space and precession."],
  ["What causes gyroscopic precession?", "A force applied is felt 90° later in the direction of rotation."],
  ["What powers gyroscopic instruments?", "Vacuum, pressure, or electrical systems."],
  ["What instruments use gyros?", "Turn coordinator, attitude indicator, heading indicator."],

  // Turn Indicators
  ["What does a turn-and-slip indicator show?", "Rate of turn only (degrees per second)."],
  ["What does a turn coordinator show?", "Both roll rate and turn rate."],
  ["What does the inclinometer (ball) show?", "Quality of turn — coordination, slip, or skid."],
  ["What rule helps correct a slip or skid using rudder?", "Step on the ball."],

  // Attitude Indicator
  ["What principle allows the attitude indicator to work?", "Rigidity in space of a horizontal gyro."],
  ["What are typical pitch and bank limits for an attitude indicator?", "Pitch 60–70°, bank 100–110° before tumbling."],

  // Heading Indicator
  ["Why must the heading indicator be realigned with the magnetic compass?", "Because of precession and drift errors."],
  ["What is the maximum drift due to Earth’s rotation?", "Up to 15° per hour."],
  ["What device helps reduce heading indicator error?", "Magnetometer or flux gate compass system."],

  // EFD (Glass Cockpit)
  ["What does PFD stand for?", "Primary Flight Display."],
  ["What does MFD stand for?", "Multi-Function Display."],
  ["What is a trend vector on an EFD?", "A magenta line showing projected airspeed or altitude in 6 seconds."],
  ["What system replaces free-spinning gyros in EFDs?", "Attitude and Heading Reference System (AHRS)."],

  // Angle of Attack Indicators
  ["What is the critical angle of attack?", "The AOA at which a wing stalls, regardless of airspeed."],
  ["Does the critical AOA change with weight, bank, temperature, or CG?", "No, it is constant for a given wing."],

  // Magnetic Compass
  ["What are the main errors in a magnetic compass?", "Variation, deviation, dip, northerly/southerly turning errors, acceleration errors, oscillation."],
  ["What is variation?", "Difference between true north and magnetic north."],
  ["What is deviation?", "Error from local magnetic fields in the aircraft."],
  ["What is the mnemonic for compass acceleration error?", "ANDS — Accelerate North, Decelerate South."],
  ["What is the mnemonic for northerly turning error?", "UNOS — Undershoot North, Overshoot South."],
  ["What is a compass rose?", "A calibrated ground reference used to swing and adjust a magnetic compass."],
  ["What is oscillation error?", "Compass needle swings due to turbulence or vibration, causing temporary inaccuracy."],
  ["What is a vertical card compass?", "A modern compass with an easy-to-read card similar to a heading indicator."],

  // OAT
  ["What does the OAT gauge measure?", "Outside Air Temperature, useful for performance and icing awareness."]
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






