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
  // --- ADM Fundamentals ---
  ["What is Aeronautical Decision-Making (ADM)?", "A systematic approach to consistently determine the best course of action in aviation situations."],
  ["What percentage of aviation accidents are related to human factors?", "Approximately 80%."],
  ["During which phases of flight do most accidents occur?", "Landing (24.1%) and takeoff (23.4%)."],
  ["Which FAA Advisory Circular provides background on ADM?", "Advisory Circular (AC) 60-22."],

  // --- Hazardous Attitudes ---
  ["What are the five hazardous attitudes?", "Anti-authority, Impulsivity, Invulnerability, Macho, Resignation."],
  ["What is the antidote for anti-authority?", "Follow the rules; they are usually right."],
  ["What is the antidote for impulsivity?", "Not so fast—think first."],
  ["What is the antidote for invulnerability?", "It could happen to me."],
  ["What is the antidote for macho?", "Taking chances is foolish."],
  ["What is the antidote for resignation?", "I’m not helpless; I can make a difference."],

  // --- Risk Management ---
  ["What is the goal of risk management?", "To proactively identify hazards and mitigate associated risks."],
  ["List the four fundamental principles of risk management.", "1. Accept no unnecessary risk, 2. Make decisions at the appropriate level, 3. Accept risk when benefits outweigh dangers, 4. Integrate risk management at all levels."],
  ["What does the PAVE checklist stand for?", "Pilot, Aircraft, enVironment, External pressures."],
  ["What are the three elements of the 3P model?", "Perceive, Process, Perform."],
  ["What does the DECIDE model stand for?", "Detect, Estimate, Choose, Identify, Do, Evaluate."],
  ["What are the CARE checklist elements?", "Consequences, Alternatives, Reality, External pressures."],
  ["What are the TEAM checklist elements?", "Transfer, Eliminate, Accept, Mitigate."],

  // --- Single-Pilot Resource Management (SRM) ---
  ["What does SRM stand for?", "Single-Pilot Resource Management."],
  ["What resources are included in SRM?", "On-board and external resources (automation, ATC, passengers, etc.)."],
  ["What are the components of SRM?", "ADM, Risk Management, Task Management, Automation Management, CFIT Awareness, Situational Awareness."],
  ["What is the purpose of the 5 Ps checklist?", "To evaluate key variables: Plan, Plane, Pilot, Passengers, Programming."],
  ["At which points in flight should the 5 Ps be reviewed?", "Preflight, Pretakeoff, Hourly/Midpoint, Predescent, Before final approach or traffic pattern entry."],

  // --- Human Factors ---
  ["Why are human factors so critical in aviation?", "They contribute to more than 70% of accidents."],
  ["What checklist helps evaluate a pilot’s personal condition?", "The IMSAFE checklist (Illness, Medication, Stress, Alcohol, Fatigue, Emotion)."],
  ["Name three examples of stress management techniques.", "Time management, daily relaxation, physical fitness."],
  ["What is the effect of fatigue on pilot decision-making?", "It reduces judgment, attention, and reaction time."],
  ["Why can complacency be dangerous for pilots?", "It reduces vigilance and increases the likelihood of missing critical information."],

  // --- Information & Automation Management ---
  ["What are the three key flight management skills for advanced avionics?", "Information management, automation management, risk management."],
  ["What is the 'stop, look, and read' technique?", "A method to avoid rushing knob/button inputs by pausing to confirm actions."],
  ["Why is overreliance on automation dangerous?", "It can lead to complacency and poor situational awareness."],
  ["What is a good practice when programming avionics?", "Always double-check system entries against the flight plan."],

  // --- Situational Awareness & Workload ---
  ["What is situational awareness?", "The accurate perception of all factors affecting the flight."],
  ["How can pilots maintain situational awareness?", "Cross-check instruments, verbal callouts, monitor automation, and plan alternatives."],
  ["Why is workload management important?", "To avoid task saturation and maintain safe operation."],
  ["Give an example of task management during high workload.", "Prioritizing 'aviate, navigate, communicate' during an emergency."],

  // --- External Pressures ---
  ["What is 'get-there-itis'?", "The hazardous attitude of pressing on despite risks to meet a schedule or goal."],
  ["Why are external pressures so hazardous?", "They can override sound decision-making and risk assessments."],
  ["What are ways to mitigate external pressures?", "Set realistic schedules, carry overnight kits, brief passengers about delays."],

  // --- Detailed Risk Examples ---
  ["What is the difference between hazard and risk?", "Hazard is a condition/event; risk is the assessment of its impact."],
  ["Give an example of hazard vs. risk with a nicked propeller.", "Hazard: nick in the prop; Risk: potential prop fracture during operation."],
  ["How might a seasoned vs. inexperienced pilot assess the same hazard differently?", "Experienced: low risk; Inexperienced: high risk."],
  ["What human factor often affects risk assessment?", "Experience level, stress, fatigue, or personal biases."],

  // --- Advanced Questions ---
  ["What happens when pilots ignore external pressures?", "It often leads to poor decisions and increased accident risk."],
  ["What is the key to using ADM models effectively?", "Practice and making them habitual so they become automatic."],
  ["How does stress affect pilot performance?", "It can degrade decision-making, communication, and motor skills."],
  ["What is the importance of a post-flight analysis?", "It helps identify and learn from mistakes for future improvement."],
  ["What is one strategy for managing passengers to reduce pressure?", "Brief them in advance about possible delays or diversions."],
  ["What does 'aviate, navigate, communicate' remind pilots?", "To always fly the aircraft first, then navigate, then communicate."],
  ["Why should pilots establish personal minimums?", "To provide a safety buffer above regulatory minimums."],
  ["What is the primary role of ATC in ADM?", "Providing traffic advisories, vectors, and assistance to reduce workload."],
  ["How can passengers be used as a resource?", "By asking them to watch for traffic, confirm gear, or assist with checklists."],
  ["What is a chain of poor decisions in accident history called?", "The error chain."],
  ["Why is it important to break the error chain?", "To prevent accidents caused by cumulative mistakes."],
  ["What are some factors in the PAVE checklist’s 'Pilot' category?", "Health, currency, fatigue, stress, personal minimums."],
  ["What are some factors in the 'Environment' category of PAVE?", "Weather, terrain, airspace, night conditions."],
  ["What are factors in the 'External Pressures' category of PAVE?", "Time constraints, passenger expectations, get-there-itis."],
  ["What is the difference between CRM and SRM?", "CRM is for multi-pilot crews, SRM is for single-pilot operations using similar principles."],
  ["What checklist can help mitigate weather risks during planning?", "Personal minimums checklist or a preflight risk assessment form."],
  ["What is the CARE model used for?", "Evaluating Consequences, Alternatives, Reality, External pressures."],
  ["What does the TEAM model encourage pilots to do?", "Transfer, Eliminate, Accept, or Mitigate risks."],
  ["How does the 5P checklist help during flight?", "By prompting reevaluation at key points such as preflight and pre-descent."],
  ["Why is it critical to accept delays in aviation?", "Because rushing increases risk and accidents."],
  ["What is one example of poor ADM with advanced avionics?", "Overreliance on GPS magenta line without considering terrain or airspace."],
  ["What is situational awareness lost to automation complacency often called?", "Being a 'passenger in command.'"],
  ["What is one way to reduce task saturation?", "Delegate, use automation wisely, and focus on priorities."],
  ["Why is acknowledging hazardous attitudes important?", "Because awareness allows antidotes to be applied."],
  ["What is the antidote to external pressure pride?", "Acknowledge limits and accept safe delays."],
  ["Why does the FAA stress ADM training?", "It reduces judgment errors and accident rates significantly."],
  ["What is the effect of proper ADM training on error rates?", "Pilots make 10–50% fewer in-flight errors."],
  ["What is CFIT awareness?", "Controlled Flight Into Terrain awareness—avoiding accidents by maintaining terrain clearance."],
  ["How do the 5Ps support proactive decision-making?", "By encouraging pilots to evaluate evolving conditions instead of reacting late."],
  ["What does 'process' in the 3P model involve?", "Evaluating risks using tools like CARE or PAVE."],
  ["What does 'perform' in the 3P model mean?", "Implementing the best risk management strategy."],
  ["What is the first step in the DECIDE model?", "Detect a change that requires attention."],
  ["What is the final step in the DECIDE model?", "Evaluate the effectiveness of the action taken."],
  ["What is meant by 'chain of poor decisions'?", "A series of mistakes that culminate in an accident if not interrupted."],
  ["What tool helps pilots identify high risk flights before departure?", "Preflight risk assessment checklists."],
  ["Why do experienced pilots sometimes take unsafe risks?", "Complacency or past success in risky conditions."],
  ["What is the antidote for the macho attitude?", "Taking chances is foolish."],
  ["How does 'invulnerability' attitude harm safety?", "It makes pilots underestimate risks, thinking accidents won’t happen to them."],
  ["What is an effective way to use passengers as a resource?", "Assigning simple observation or checklist tasks when appropriate."],
  ["What is 'resignation' in hazardous attitudes?", "The belief that one is helpless and cannot influence the outcome."],
  ["How does 'impulsivity' endanger safety?", "Leads to acting without thinking things through."],
  ["Why is the 'Pilot' category in PAVE critical?", "Because the pilot is the most flexible and vulnerable part of the system."],
  ["Why should weather be reevaluated enroute?", "Because actual conditions can differ from forecasts."],
  ["Why should terrain be factored into planning?", "To avoid CFIT, especially in night or IMC."],
  ["What is the role of personal minimums checklists?", "To set safe operational limits tailored to the pilot’s experience."],
  ["What does 'aviate, navigate, communicate' emphasize?", "Always flying the plane first before other tasks."],
  ["Why does ADM stress continuous evaluation?", "Because conditions constantly change in flight."],
  ["What do human factors include?", "Fatigue, stress, complacency, distraction, and other human limitations."],
  ["What is the antidote for anti-authority?", "Follow the rules; they are usually right."],
  ["How can external pressures be mitigated for must-arrive trips?", "Make backup airline reservations or alternate plans."],
  ["What is the significance of post-flight analysis?", "It helps pilots learn from mistakes and improve ADM skills."],
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






