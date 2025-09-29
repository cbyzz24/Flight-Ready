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
     // Basics
  ["What are the two categories of aircraft flight control systems?", "Primary and secondary flight controls."],
  ["What are the three primary flight controls?", "Ailerons, elevator (or stabilator), and rudder."],
  ["What are some secondary flight controls?", "Flaps, leading edge devices, spoilers, and trim systems."],
  ["What is the purpose of secondary controls?", "To improve performance or relieve the pilot of excessive control forces."],
  ["How do flight control systems vary?", "From mechanical linkages to fly-by-wire and intelligent flight control systems."],

  // Ailerons
  ["What is the function of ailerons?", "To control roll about the longitudinal axis."],
  ["Where are ailerons located?", "On the outboard trailing edge of each wing."],
  ["How do ailerons move?", "They move in opposite directions — one up and one down."],
  ["What is adverse yaw?", "The yawing motion opposite the roll direction due to differential drag."],
  ["How do pilots counteract adverse yaw?", "By applying coordinated rudder with aileron input."],

  // Special Aileron Designs
  ["What are differential ailerons?", "Ailerons where one deflects up more than the other deflects down, reducing adverse yaw."],
  ["What are frise-type ailerons?", "Ailerons that project the leading edge into the airflow when raised, creating drag to counter adverse yaw."],
  ["What are coupled ailerons and rudder?", "A system linking rudder and aileron inputs with springs to reduce adverse yaw."],
  ["What are flaperons?", "Control surfaces that combine functions of flaps and ailerons."],

  // Elevator & Stabilator
  ["What does the elevator control?", "Pitch about the lateral axis."],
  ["What is a T-tail design?", "A design where the elevator is mounted on top of the vertical stabilizer."],
  ["What are disadvantages of a T-tail?", "Requires greater control forces at low speeds and may be susceptible to deep stalls."],
  ["What is a stabilator?", "A one-piece horizontal stabilizer that pivots for pitch control."],
  ["What is the purpose of an antiservo tab?", "To make stabilators less sensitive and prevent overcontrolling."],

  // Canard
  ["What is a canard design?", "A configuration where a forward lifting surface provides pitch stability and lift."],
  ["How does a canard differ from a conventional tail?", "A canard produces lift to hold the nose up, while a conventional tail produces downward force."],

  // Rudder & Tail Designs
  ["What does the rudder control?", "Yaw about the vertical axis."],
  ["How is the rudder controlled?", "By the pilot’s feet on rudder pedals."],
  ["What is a V-tail design?", "Two slanted tail surfaces combining rudder and elevator functions, with ruddervators."],
  ["What is a drawback of a V-tail?", "It is more susceptible to Dutch roll and provides minimal drag reduction."],

  // Flaps
  ["What is the purpose of wing flaps?", "To increase lift and drag for takeoffs and landings."],
  ["What are the four main types of flaps?", "Plain, split, slotted, and Fowler flaps."],
  ["Which flap is the simplest?", "Plain flap."],
  ["Which flap increases lift the most?", "Slotted flap, especially double or triple slotted versions."],
  ["What is a Fowler flap?", "A flap that slides backward, increasing both camber and wing area."],

  // Leading Edge Devices
  ["What are common leading edge devices?", "Slots, slats, leading edge flaps, and cuffs."],
  ["What do slots do?", "Direct airflow to the upper wing surface to delay stall."],
  ["What do movable slats do?", "Move forward at high angles of attack to allow airflow over the wing."],
  ["What do leading edge cuffs do?", "Lower stall speed by improving airflow attachment at high AOA."],

  // Spoilers
  ["What is the function of spoilers?", "To disrupt lift and increase drag."],
  ["What are spoilers used for on gliders?", "To control descent rate."],
  ["What are spoilers used for after landing?", "To destroy lift, transfer weight to wheels, and improve braking."],

  // Trim Systems
  ["What is the purpose of trim systems?", "To relieve constant pilot control pressures."],
  ["What is the most common trim system?", "A trim tab on the elevator."],
  ["What is a balance tab?", "A tab that moves opposite the control surface to reduce control forces."],
  ["What is a servo tab?", "A small tab that helps move the primary surface using airflow."],
  ["What is an antiservo tab?", "A tab that moves with the stabilator to add resistance and provide trim."],
  ["What are ground adjustable tabs?", "Non-movable tabs bent on the ground to correct rudder trim."],
  ["What is an adjustable stabilizer?", "A horizontal stabilizer pivoted for trimming instead of using tabs."],

  // Autopilot
  ["What is the purpose of autopilot?", "To reduce pilot workload by controlling aircraft automatically."],
  ["What does a single-axis autopilot control?", "The aircraft’s roll (aileron control)."],
  ["What does a three-axis autopilot control?", "Roll, pitch, and yaw using ailerons, elevator, and rudder."],
  ["What are common features of autopilot?", "Altitude hold, heading hold, and navigation coupling."],
  ["How do modern autopilots work?", "They use GPS, flight computers, and sometimes integrate into fly-by-wire systems."],
  ["What is an autopilot disconnect feature?", "A safety feature to disengage autopilot automatically or manually."],
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






