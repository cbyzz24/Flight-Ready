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
     // General Certification Knowledge
  ["What factors influence which type of pilot certificate is required?", "The type of intended flying, along with eligibility, training, experience, and testing requirements."],
  ["What do 'privileges' of a pilot certificate define?", "Where and when the pilot may fly, with whom, the purpose of the flight, and the type of aircraft they are allowed to fly."],
  ["What do 'limitations' of a pilot certificate define?", "Restrictions placed by the FAA when skills for all privileges are not demonstrated or based on certificate type."],
  ["What is an endorsement in aviation training?", "A written and signed authorization by a certificated flight instructor (CFI) confirming training in specific skill areas."],

  // Sport Pilot
  ["What is the minimum age to become a student sport pilot?", "16 years old (14 for gliders or balloons)."],
  ["What is the minimum age to earn a sport pilot certificate?", "17 years old (16 for gliders or balloons)."],
  ["What is the minimum flight time required for a sport pilot certificate in an airplane?", "20 hours."],
  ["What are some privileges of a sport pilot?", "Operate as PIC of a light-sport aircraft, carry a passenger, share expenses, and fly during daytime VFR with at least 3 miles visibility."],
  ["What are some limitations of a sport pilot?", "No flights in Class A airspace, or in Class B/C/D airspace without training and endorsement, no flights for hire, no towing, and no international flights without permission."],

  // Recreational Pilot
  ["What is the minimum age to become a recreational pilot?", "17 years old."],
  ["How many total flight hours are required for a recreational pilot certificate?", "30 hours (including 15 hours dual, 2 hours en route, 3 hours test prep, and 3 hours solo)."],
  ["What is the maximum distance a recreational pilot may fly cross-country without further training?", "50 nautical miles from the departure airport."],
  ["What is one privilege of a recreational pilot?", "They may carry no more than one passenger and share expenses of fuel, oil, airport fees, or rental."],
  ["What is one limitation of a recreational pilot?", "They may not act as PIC of an aircraft certificated for more than four occupants or with more than one engine."],

  // Private Pilot
  ["What is the main limitation of a private pilot regarding compensation?", "They cannot accept compensation for flying, except passengers can pay a pro rata share of flight expenses."],
  ["What are the minimum flight time requirements for a private pilot under 14 CFR part 61?", "At least 40 hours, including 20 hours with an instructor and 10 hours solo."],

  // Commercial Pilot
  ["What privilege does a commercial pilot certificate provide?", "The ability to be compensated for flying."],
  ["What type of aircraft must a commercial pilot train in for part of their exam?", "A complex aircraft (with retractable gear, movable flaps, and a controllable-pitch propeller)."],
  ["Without an instrument rating, what limitations apply to a commercial pilot flying for hire?", "Restricted to daytime flights within 50 NM."],

  // Airline Transport Pilot (ATP)
  ["What is the minimum age for an unrestricted ATP certificate?", "23 years old."],
  ["What is the minimum total flight time required for an ATP certificate?", "1,500 hours."],
  ["What is the minimum age for a restricted ATP certificate?", "21 years old."],
  ["What is one privilege of holding an ATP certificate?", "Eligibility to serve as pilot in command (PIC) or second in command (SIC) in scheduled airline operations."]

   // Flight Schools
  ["What FAA regulations outline how flight training is conducted in the United States?", "14 CFR parts 142, 141, and 61."],
  ["What type of flight schools operate under 14 CFR part 142?", "FAA-approved training centers, often called flight academies, certificated by the FAA and usually training under contract for airlines and commercial operators."],
  ["What is one benefit of a part 141 flight school compared to a part 61 school?", "Certificates and ratings can be completed in fewer flight hours (minimum 35 hours for Private Pilot under part 141 vs. 40 hours under part 61)."],
  ["What is one advantage of training under part 61?", "Flexibility — training can be tailored to the individual student."],
  ["What is one possible disadvantage of training under part 61?", "If the instructor does not organize training well, the student may spend more time and money on repetitious lessons."],

  // Finding a Flight Program
  ["What office maintains information on all schools in its district?", "The local Flight Standards District Office (FSDO)."],
  ["Why should financial concerns not be the only factor in choosing a flight school?", "Because the quality of training is very important for long-term success and safety."],
  ["What is a good strategy before selecting a school?", "Visit the facility, talk to instructors and students, ask about aircraft reliability and maintenance, and evaluate operating hours and training spaces."],

  // Choosing a CFI
  ["What qualities should a good Certificated Flight Instructor (CFI) have?", "Understanding of the learning process, knowledge of teaching fundamentals, and ability to communicate effectively."],
  ["What is scenario-based training (SBT)?", "A training method endorsed by the FAA where students are presented with realistic scenarios to develop decision-making and risk management skills."],
  ["What should a student do if their CFI is not a good fit?", "Seek another CFI who is better suited to their learning needs and schedule."],

  // Student Pilot
  ["What is the minimum age for a student pilot certificate?", "16 years old (14 for gliders or balloons)."],
  ["Who can process a Student Pilot Certificate application?", "An FAA inspector or technician, a Designated Pilot Examiner (DPE), a CFI, or an Airman Certification Representative (ACR)."],
  ["What is a key difference between old paper student pilot certificates and new plastic certificates?", "Plastic certificates do not expire; paper certificates had expiration dates and cannot be renewed once expired."],
  ["Who now endorses a student for solo flight privileges?", "The flight instructor in the student’s logbook (instead of on the certificate)."],
  ["What are two limitations of a student pilot when flying solo?", "They may not carry passengers or fly in furtherance of a business."],

  // Medical Certification
  ["Do glider or balloon pilots need a medical certificate?", "No, they only need to certify they have no medical defect that would prevent safe operation."],
  ["What medical documentation is acceptable for sport pilots?", "A valid U.S. driver’s license."],
  ["What are the three classes of FAA medical certificates?", "First class (ATP), second class (Commercial Pilot), and third class (Student, Recreational, and Private Pilot)."],

  // Knowledge & Practical Tests
  ["What type of questions are on FAA knowledge tests?", "Objective, multiple-choice questions administered on a computer."],
  ["When does the FAA recommend taking the knowledge test?", "After completing a solo cross-country flight, to apply operational knowledge to the test."],
  ["What system has replaced the Practical Test Standards (PTS)?", "The Airman Certification Standards (ACS), which integrates knowledge, skills, and risk management."],
  ["Who usually administers FAA practical tests?", "Designated Pilot Examiners (DPEs), though FAA inspectors can also give them."],
  ["What must an applicant bring to the practical test?", "Application form, knowledge test report, medical certificate (if required), student pilot certificate, logbook endorsements, and aircraft documents (registration, airworthiness, maintenance records, weight & balance, etc.)."],

  // Role of CFI
  ["What is the CFI’s primary responsibility?", "To train student pilots to operate safely and competently in the NAS, including knowledge, judgment, and good operating practices."],
  ["Why is it important for CFIs to insist on correct techniques from the start?", "Because poor habits formed early are difficult to correct later."],
  ["Why is the flight instructor considered a role model?", "Students often imitate the flying habits and safety practices of their instructors."],

  // Role of DPE
  ["What is the role of a Designated Pilot Examiner (DPE)?", "Administer FAA practical tests for pilot and instructor certificates on behalf of the FAA."],
  ["What qualifications must a DPE meet?", "Hold relevant category, class, and type ratings, meet recency requirements, hold at least a third-class medical if required, and maintain a CFI certificate if required."],
  ["Why does the FAA delegate testing to DPEs?", "Because FAA inspectors focus on higher-priority safety inspections, and DPEs provide pilot certification testing services."]
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






