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
     // General
  ["What publication provides information about airports, frequencies, and runway data?", "The FAA Chart Supplement U.S. (formerly Airport/Facility Directory)."],
  ["What color are airport taxiway markings?", "Yellow."],
  ["What color are runway markings?", "White."],
  ["What colors identify airport lighting systems at night?", "Runway lights are white, taxiway lights are blue, and runway end lights are red/green."],

  // Runway Markings
  ["What is the purpose of runway markings?", "To identify the runway and provide alignment and distance information for pilots."],
  ["What are the white stripes that extend the length of the runway centerline called?", "Runway centerline markings."],
  ["What are runway threshold markings?", "Longitudinal white stripes identifying the beginning of the landing portion of the runway."],
  ["What do displaced threshold markings indicate?", "Portion of the runway available for takeoff, taxi, or landing rollout but not touchdown."],
  ["What does a chevron marking on a runway indicate?", "An area not suitable for taxi, takeoff, or landing."],
  ["What are runway aiming point markings?", "Two broad white rectangles approximately 1,000 feet from the threshold, used as a visual aiming point for landing."],
  ["What are touchdown zone markings?", "Pairs of white bars on either side of the centerline providing distance information in 500-foot increments."],
  ["How are runways numbered?", "By their magnetic heading rounded to the nearest 10°, dropping the last digit (e.g., 180° = Runway 18)."],
  ["What does a letter after a runway number mean?", "Indicates parallel runways: L (left), C (center), R (right)."],

  // Taxiway Markings
  ["What are taxiway centerline markings?", "A continuous yellow line to provide alignment guidance during taxi."],
  ["What is the purpose of enhanced taxiway centerlines?", "They provide additional warning before approaching a runway holding position (used at high-incursion airports)."],
  ["What do taxiway edge markings indicate?", "The edge of the usable taxiway surface; can be continuous or dashed depending on the adjacent surface."],
  ["What are runway holding position markings?", "Four yellow lines (two solid, two dashed) across the taxiway—solid lines indicate where to hold before a runway."],
  ["What is a non-movement area boundary marking?", "Two yellow lines (solid and dashed) separating movement areas from non-movement areas; permission required to cross into the movement area."],

  // Airport Signs
  ["What color are mandatory instruction signs?", "White lettering on a red background."],
  ["Give an example of a mandatory instruction sign.", "‘Runway 18-36’ or ‘ILS Critical Area.’"],
  ["What color are location signs?", "Yellow lettering on a black background."],
  ["What color are direction signs?", "Black lettering on a yellow background with arrows indicating directions to taxiways or runways."],
  ["What color are runway distance remaining signs?", "White numbers on a black background, showing thousands of feet remaining."],
  ["What color are information signs?", "Black lettering on a yellow background, used for noise abatement, radio frequencies, or other info."],

  // Airport Lighting Systems
  ["What do runway edge lights indicate?", "Runway edges; white except on instrument runways where last 2,000 feet or half the runway (whichever is less) are amber."],
  ["What color are runway end identifier lights (REIL)?", "Pair of synchronized flashing white lights at the threshold edges."],
  ["What are taxiway edge lights?", "Blue lights outlining taxiway edges."],
  ["What are taxiway centerline lights?", "Green lights marking the taxiway centerline."],
  ["What does a rotating beacon indicate?", "Location of an airport, heliport, or seaplane base—white and green for land airports."],
  ["How does a beacon flash pattern differ for military airports?", "Two quick white flashes alternating with a green flash."],
  ["What color are obstruction lights?", "Red (steady or flashing) or high-intensity white strobes on tall structures."],

  // Approach Lighting Systems (ALS)
  ["What is an ALS?", "A system of lights extending outward from the runway threshold to help pilots transition from instrument to visual flight during landing."],
  ["What does the MALSR system stand for?", "Medium Intensity Approach Lighting System with Runway Alignment Indicator Lights."],
  ["What is the purpose of VASI?", "Visual Approach Slope Indicator — provides visual descent guidance to maintain proper glidepath."],
  ["What colors indicate correct approach on a VASI?", "Two white over two red — on glidepath."],
  ["What do all red lights on a VASI indicate?", "Too low."],
  ["What do all white lights on a VASI indicate?", "Too high."],
  ["What is a PAPI?", "Precision Approach Path Indicator — four lights in a single row providing glidepath information."],
  ["What colors on a PAPI indicate being on glidepath?", "Two white and two red."],

  // Traffic Patterns
  ["What determines the direction of the airport traffic pattern?", "The airport’s published pattern direction in the Chart Supplement or visual indicators on the field."],
  ["What does a segmented circle provide?", "Visual indication of traffic pattern direction and runway in use."],
  ["What do traffic pattern indicators look like?", "L-shaped extensions from the segmented circle showing the direction of turns (left or right)."],
  ["What do landing direction indicators (tetrahedrons) show?", "The direction the aircraft should land and take off, aligned with the wind."],
  ["What side of the runway are traffic pattern turns typically made?", "To the left, unless otherwise specified."],
  ["At what altitude should the traffic pattern be flown?", "Usually 1,000 feet AGL for light aircraft (check Chart Supplement)."],
  ["What should be done before entering the traffic pattern?", "Observe wind direction and traffic, and make appropriate radio calls."],

  // Radio Communications
  ["What is the universal UNICOM frequency at many small airports?", "122.8 MHz."],
  ["What is the Common Traffic Advisory Frequency (CTAF)?", "The frequency used for self-announce procedures at non-towered airports."],
  ["What is the standard radio call order at non-towered airports?", "Who you’re calling, who you are, where you are, and your intentions."],
  ["When should a pilot announce position in the traffic pattern?", "Entering downwind, base, final, and when exiting the runway."],
  ["What phrase should a pilot use to indicate they are crossing a runway?", "‘Crossing Runway XX.’"],
  ["What phrase should a pilot use to indicate takeoff?", "‘Departing Runway XX.’"],

  // ATC and Ground Control
  ["Who has authority over movement areas at towered airports?", "Ground Control."],
  ["When must a pilot obtain clearance from ground control?", "Before taxiing onto movement areas at a controlled airport."],
  ["What should a pilot do if uncertain about a taxi clearance?", "Ask ATC for clarification — ‘Say again’ or ‘Request progressive taxi.’"],
  ["What does ‘Hold short’ mean?", "Stop before reaching the specified runway or point until clearance is received."],
  ["When can a pilot cross an active runway at a towered airport?", "Only when specifically cleared by ATC."],

  // Runway Incursion Avoidance
  ["What is a runway incursion?", "Any occurrence involving an aircraft, vehicle, or person that creates a collision hazard on a runway."],
  ["What are some common causes of runway incursions?", "Pilot distraction, miscommunication, poor visibility, or unfamiliarity with airport layout."],
  ["What can pilots do to prevent runway incursions?", "Read back all hold-short instructions, maintain situational awareness, use airport diagrams, and limit distractions."],

  // Airport Surface Diagrams
  ["Where can official airport diagrams be found?", "In the Chart Supplement U.S. and on FAA or ForeFlight charts."],
  ["Why are airport diagrams important?", "They help pilots navigate taxi routes safely and avoid wrong-runway takeoffs."],

  // Noise Abatement & Safety
  ["What is noise abatement?", "Procedures designed to minimize aircraft noise impact on surrounding communities."],
  ["Where are noise abatement procedures found?", "In the Chart Supplement U.S. or local airport publications."],
  ["Why should pilots follow noise abatement procedures?", "To reduce community impact and promote positive public relations for aviation."],

  // Lighting and Weather Alerts
  ["What color are Runway End Lights from the approach direction?", "Green."],
  ["What color are Runway End Lights from the departure direction?", "Red."],
  ["What color is the beacon for a heliport?", "Green, yellow, and white."],
  ["What color are lights on an airport beacon for a seaplane base?", "White and yellow."],

  // Miscellaneous
  ["What is the standard traffic pattern entry for a non-towered airport?", "Enter the pattern at a 45° angle to the downwind leg at pattern altitude."],
  ["What does a flashing green light signal from ATC to an aircraft on the ground mean?", "Cleared to taxi."],
  ["What does a steady red light signal from ATC to an aircraft on the ground mean?", "Stop."],
  ["What does an alternating red and green light signal from ATC mean?", "Exercise extreme caution."],
  ["What does a flashing white light from ATC to an aircraft on the ground mean?", "Return to the starting point on the airport."],
  ["What are light gun signals used for?", "To communicate with aircraft when radio communications fail."],
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






