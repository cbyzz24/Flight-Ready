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
    // Atmosphere Basics
  ["What percentage of the atmosphere is nitrogen?", "78 percent."],
  ["What percentage of the atmosphere is oxygen?", "21 percent."],
  ["At approximately what altitude is most of the atmosphere’s oxygen found?", "Below 35,000 feet."],
  ["Why is air considered a fluid?", "Because it flows, has viscosity, and takes the shape of its container."],

  // Viscosity & Friction
  ["What is viscosity?", "The property of a fluid that resists flow."],
  ["How does air’s viscosity compare to liquids like oil?", "Air has very low viscosity and flows more easily."],
  ["What is friction in terms of airflow?", "Resistance that occurs when air flows over a surface, slowing velocity."],
  ["What is the boundary layer?", "The thin layer of air molecules that cling to the surface of a wing due to friction."],
  ["How do viscosity and friction together affect airflow?", "They resist motion over a wing and cause drag."],

  // Pressure & Atmosphere
  ["What is pressure in aviation terms?", "The force applied perpendicularly to a surface, often measured in PSI."],
  ["What is the standard atmospheric pressure at sea level?", "14.7 psi or 29.92 inHg (1,013.2 mb)."],
  ["At what altitude is atmospheric pressure half that of sea level?", "Approximately 18,000 feet."],
  ["What is the standard lapse rate for temperature?", "3.5°F (2°C) per 1,000 feet up to 36,000 feet."],
  ["What is the standard lapse rate for pressure?", "1 inHg per 1,000 feet up to 10,000 feet."],
  ["What is the International Standard Atmosphere (ISA) at sea level?", "59°F (15°C) and 29.92 inHg."],

  // Pressure & Density Altitude
  ["What is pressure altitude?", "Altitude above the standard datum plane (29.92 inHg)."],
  ["How can a pilot determine pressure altitude?", "Set altimeter to 29.92 inHg or correct indicated altitude using altimeter setting."],
  ["What is density altitude?", "Pressure altitude corrected for nonstandard temperature."],
  ["How does high density altitude affect aircraft performance?", "Reduces power, thrust, and lift."],
  ["What factors increase density altitude?", "High elevation, low pressure, high temperature, high humidity."],
  ["Why does high humidity reduce air density?", "Because water vapor is lighter than nitrogen and oxygen, making air less dense."],

  // Newton’s Laws
  ["What is Newton’s First Law?", "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an outside force."],
  ["What is Newton’s Second Law?", "Force equals mass times acceleration (F = ma)."],
  ["What is Newton’s Third Law?", "For every action, there is an equal and opposite reaction."],
  ["How does Newton’s Third Law apply to jet propulsion?", "Hot gases are expelled backward, producing forward thrust."],

  // Bernoulli’s Principle & Lift
  ["What does Bernoulli’s Principle state?", "As the velocity of a fluid increases, its pressure decreases."],
  ["How does a wing generate lift using Bernoulli’s Principle?", "Air moves faster over the curved top surface, reducing pressure, creating lift."],
  ["What is a venturi tube?", "A constricted tube that demonstrates how airflow speeds up and pressure decreases at the throat."],

  // Airfoils
  ["What is an airfoil?", "A structure designed to produce lift when air flows over it."],
  ["What is the leading edge of an airfoil?", "The rounded front portion of the wing."],
  ["What is the trailing edge of an airfoil?", "The narrow rear portion where airflow meets."],
  ["What is the chord line?", "A straight line from the leading edge to the trailing edge."],
  ["What is the mean camber line?", "A line equidistant between the upper and lower surfaces of the wing."],
  ["What is camber?", "The curvature of the airfoil surfaces."],
  ["What is angle of attack (AOA)?", "The angle between the chord line and the relative wind."],
  ["What happens to the center of pressure (CP) at high angles of attack?", "It moves forward."],
  ["What happens to the center of pressure at low angles of attack?", "It moves aft."],

  // Lift & Pressure Distribution
  ["What are the two components of lift?", "Negative pressure on the upper surface and positive pressure on the lower surface."],
  ["What is downwash?", "The downward flow of air from the top of the wing that creates reactionary lift."],
  ["What is stagnation point?", "The point near the leading edge where airflow slows to nearly zero."],
  ["Why can symmetrical airfoils still generate lift?", "Because of the angle of attack and flow turning."],

  // Wingtip Vortices
  ["What causes wingtip vortices?", "High-pressure air under the wing spilling to the low-pressure region above the wingtip."],
  ["What is downwash created by wingtip vortices?", "A rearward and downward flow of air that reduces lift."],
  ["How do winglets reduce vortices?", "They block or redirect the spanwise flow, reducing drag and improving lift."],
  ["What is another design method to reduce vortices?", "Tapering the wingtip to smooth airflow and reduce pressure differential."],
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






