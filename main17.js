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
     // Medical Certification
  ["What regulation prohibits a pilot from acting as a crewmember when medically unfit?", "14 CFR 61.53."],
  ["Who performs pilot medical examinations?", "An Aviation Medical Examiner (AME) designated by the Civil Aerospace Medical Institute (CAMI)."],
  ["How many classes of medical certificates are there?", "Three: First-class, Second-class, and Third-class."],
  ["What type of medical certificate is required for a private pilot?", "Third-class medical certificate."],
  ["How long is a third-class medical valid for a pilot under 40 years old?", "5 years."],
  ["How long is a third-class medical valid for a pilot 40 or older?", "2 years."],
  ["What certificate is required for a commercial pilot?", "At least a second-class medical certificate."],
  ["What certificate is required for an airline transport pilot?", "First-class medical certificate."],
  ["How long is a first-class medical valid for pilots under 40?", "12 months."],
  ["How long is a first-class medical valid for pilots 40 and older?", "6 months."],
  ["What is a Special Issuance Authorization?", "A discretionary medical certificate issued to pilots with disqualifying medical conditions after additional testing."],
  ["What are some FAA disqualifying medical conditions?", "Examples include epilepsy, psychosis, bipolar disorder, heart disease, and diabetes requiring insulin."],
  ["What is a Statement of Demonstrated Ability (SODA)?", "A waiver for pilots with stable physical impairments who can demonstrate safe operation of an aircraft."],

  // Hypoxia
  ["Define hypoxia.", "A lack of sufficient oxygen reaching the body's tissues."],
  ["What are the four types of hypoxia?", "Hypoxic, Hypemic, Stagnant, and Histotoxic hypoxia."],
  ["What causes hypoxic hypoxia?", "Insufficient oxygen in the air, such as at high altitude."],
  ["What causes hypemic hypoxia?", "Reduced oxygen-carrying capacity of the blood, such as carbon monoxide poisoning or anemia."],
  ["What causes stagnant hypoxia?", "Poor blood circulation or pooling, often due to high G-forces."],
  ["What causes histotoxic hypoxia?", "The body’s inability to use oxygen due to toxins such as alcohol or drugs."],
  ["What is the first symptom of hypoxia?", "A feeling of euphoria or false sense of well-being."],
  ["What is the treatment for hypoxia?", "Use supplemental oxygen and/or descend to a lower altitude."],
  ["What is 'time of useful consciousness'?", "The amount of time a pilot can perform effectively without supplemental oxygen at a given altitude."],

  // Hyperventilation
  ["What is hyperventilation?", "Excessive breathing leading to a loss of carbon dioxide in the blood."],
  ["What are symptoms of hyperventilation?", "Lightheadedness, tingling sensations, muscle spasms, and dizziness."],
  ["What is the treatment for hyperventilation?", "Breathe normally, talk aloud, or breathe into a paper bag to restore CO₂ balance."],

  // Ear and Sinus Problems
  ["What causes middle ear pain during climb or descent?", "Pressure differences between the middle ear and external environment."],
  ["How can a pilot equalize ear pressure?", "By yawning, swallowing, or performing the Valsalva maneuver."],
  ["What causes sinus block pain?", "Unequal air pressure in sinus cavities due to congestion or infection."],

  // Spatial Disorientation
  ["What three systems are used for orientation?", "Vestibular (inner ear), somatosensory (muscles/joints), and visual (eyes)."],
  ["What is spatial disorientation?", "The lack of accurate awareness of the aircraft’s position or movement relative to Earth."],
  ["What is the 'leans' illusion?", "An illusion of banking in the opposite direction after a gradual unnoticed turn."],
  ["What is the Coriolis illusion?", "Head movement during a turn causing a false sensation of movement on a different axis."],
  ["What is the Graveyard Spiral?", "A tightening descending turn mistaken for level flight."],
  ["What is the Somatogravic illusion?", "Acceleration during takeoff feels like a nose-up pitch; deceleration feels like a dive."],
  ["What is the Inversion illusion?", "Abrupt change from climb to level flight creating the feeling of tumbling backward."],
  ["What is the Elevator illusion?", "Vertical acceleration creating the illusion of climb or descent."],
  ["What are the best ways to prevent disorientation?", "Rely on flight instruments and avoid sudden head movements in IMC conditions."],

  // Optical Illusions
  ["What is the 'black hole' illusion?", "A featureless approach area that makes the aircraft appear higher, causing a low approach."],
  ["How can rain on the windshield affect landing perception?", "It makes the runway appear higher than it is, leading to a low approach."],
  ["What illusion can haze cause?", "It makes objects appear farther away, causing a pilot to fly lower."],
  ["What illusion can result from a narrow runway?", "Illusion of being higher than actual, leading to a low approach."],
  ["What can prevent visual illusion errors during landing?", "Using VASI/PAPI systems and cross-checking with instruments."],

  // Motion Sickness
  ["What causes motion sickness?", "Conflicting signals between visual and inner ear sensations."],
  ["What can help prevent motion sickness?", "Open vents, look outside, and avoid head movement."],

  // Carbon Monoxide (CO) Poisoning
  ["What causes CO poisoning in aircraft?", "Exhaust leaks entering the cabin, especially through heaters."],
  ["What are symptoms of CO poisoning?", "Headache, dizziness, drowsiness, and blurred vision."],
  ["What is the treatment for CO poisoning?", "Turn off heater, open fresh air vents, and use supplemental oxygen."],
  ["How long can CO remain in the body?", "Up to 48 hours."],

  // Stress and Fatigue
  ["What are the two types of stress?", "Acute (short-term) and chronic (long-term)."],
  ["What are common physical responses to stress?", "Increased heart rate, respiration, and blood pressure."],
  ["What type of fatigue is caused by stress and lack of rest?", "Acute fatigue."],
  ["What is chronic fatigue?", "Long-term tiredness due to ongoing stress or illness."],

  // Dehydration and Heatstroke
  ["What are signs of dehydration?", "Headache, fatigue, cramps, sleepiness, and dizziness."],
  ["What is the first effect of dehydration?", "Fatigue."],
  ["How much water should pilots drink daily?", "2–4 quarts (64–128 ounces)."],

  // Alcohol
  ["What is the FAA limit for blood alcohol concentration when flying?", "Less than 0.04%."],
  ["How long must a pilot wait after drinking before flying?", "At least 8 hours."],
  ["How does altitude affect alcohol’s impact?", "Altitude multiplies the effects of alcohol on the brain."],

  // Drugs and Medication
  ["What does 14 CFR 91.17 prohibit regarding drugs?", "Flying while using any drug that affects safety or performance."],
  ["How long should pilots wait after taking a new medication?", "At least 48 hours after the first dose."],
  ["What type of medication is most likely to cause drowsiness?", "Antihistamines (e.g., Benadryl)."],

  // Decompression Sickness
  ["What causes decompression sickness (DCS)?", "Nitrogen bubbles forming in body tissues after rapid decompression."],
  ["What is a common symptom of DCS?", "Joint pain (the bends)."],
  ["What is the minimum waiting time after diving before flying up to 8,000 ft?", "At least 12 hours after nondecompression diving."],
  ["How long should you wait after a decompression stop dive?", "At least 24 hours before flying."],

  // Vision and Night Flying
  ["What part of the eye detects color and fine detail?", "Cones."],
  ["What part of the eye detects movement and works in dim light?", "Rods."],
  ["What are the three types of vision?", "Photopic (day), Mesopic (dawn/dusk), and Scotopic (night)."],
  ["What is night blind spot?", "The loss of central vision at night due to lack of rod cells in the fovea."],
  ["How can pilots improve night vision?", "Use off-center viewing and avoid bright lights before flight."],
  ["How long does dark adaptation take?", "About 30 minutes."],
  ["What altitude begins to affect night vision without oxygen?", "Above 4,000 feet."],
  ["What is empty-field myopia?", "The eyes focus at 10–30 feet due to lack of visual references, causing reduced awareness."],
  ["What is the purpose of scanning techniques at night?", "To detect movement and maintain situational awareness without fixating on one area."],

  // Self-Imposed Stressors
  ["What are examples of self-imposed stressors that affect pilots?", "Drugs, exhaustion, poor fitness, alcohol, and smoking."],
  ["Which mnemonic helps pilots assess their fitness before flight?", "IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion."]
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






