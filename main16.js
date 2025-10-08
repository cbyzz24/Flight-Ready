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
  ["What is navigation?", "The process of determining an aircraft’s position and guiding it safely from one point to another."],
  ["What are the two main types of navigation used by pilots?", "Pilotage and dead reckoning."],
  ["What is pilotage?", "Navigation by visual reference to landmarks."],
  ["What is dead reckoning?", "Navigation by computing direction and distance from a known position, using time, airspeed, and wind correction."],
  ["What is the purpose of navigation charts?", "To provide essential flight information such as terrain, airspace, and navigation aids."],

  // Charts
  ["What are the most common charts used for VFR navigation?", "Sectional charts and Terminal Area Charts (TACs)."],
  ["What scale do sectional charts use?", "1:500,000 (1 inch = ~6.86 nautical miles)."],
  ["What is the scale of Terminal Area Charts (TACs)?", "1:250,000, providing greater detail near busy airports."],
  ["How often are sectional charts updated?", "Every 56 days."],
  ["What information is found in the Chart Supplement U.S.?", "Airport data, communication frequencies, services, runways, lighting, and operational notes."],
  ["What does the legend on a sectional chart provide?", "Explanations of symbols, airspace boundaries, and color coding."],

  // Latitude and Longitude
  ["What is latitude?", "Angular distance north or south of the equator, measured in degrees."],
  ["What is longitude?", "Angular distance east or west of the Prime Meridian at Greenwich, England."],
  ["How many nautical miles are in one minute of latitude?", "One nautical mile."],
  ["What is the geographic coordinate system used for aviation navigation?", "Latitude and longitude in degrees, minutes, and seconds."],

  // Direction and Courses
  ["What are the four types of north used in navigation?", "True north, magnetic north, grid north, and compass north."],
  ["What is true north?", "The direction to the geographic North Pole."],
  ["What is magnetic north?", "The direction a magnetic compass points, toward Earth’s magnetic North Pole."],
  ["What is variation?", "The angular difference between true north and magnetic north."],
  ["What is deviation?", "Compass error caused by magnetic fields within the aircraft."],
  ["How is magnetic heading calculated from true heading?", "Magnetic Heading = True Heading - Variation (East is least, West is best)."],
  ["How is compass heading calculated from magnetic heading?", "Compass Heading = Magnetic Heading - Deviation (apply the compass correction card)."],

  // Courses and Bearings
  ["What is a course?", "Intended path of the aircraft over the ground, measured in degrees from north."],
  ["What is a heading?", "The direction the aircraft’s nose is pointed."],
  ["What is a bearing?", "The direction from one point to another."],
  ["What is track?", "The actual path of the aircraft over the ground."],
  ["What is drift?", "The angle between the aircraft’s heading and its track, caused by wind."],
  ["What is the wind correction angle (WCA)?", "The correction applied to counteract wind drift and maintain desired track."],

  // Time and Distance
  ["What is the formula for ground speed?", "Ground Speed = Distance ÷ Time."],
  ["What is the formula for time?", "Time = Distance ÷ Ground Speed."],
  ["What is the formula for distance?", "Distance = Ground Speed × Time."],
  ["What unit of time is always used in flight planning?", "Coordinated Universal Time (UTC or Zulu)."],
  ["What is true airspeed (TAS)?", "Calibrated airspeed corrected for altitude and nonstandard temperature."],
  ["What is groundspeed (GS)?", "Actual speed of the aircraft over the ground, factoring in wind."],

  // Compass & Heading Indicator
  ["What is a magnetic compass?", "A simple, self-contained instrument that indicates direction relative to magnetic north."],
  ["What are the two main errors in a magnetic compass?", "Variation and deviation."],
  ["What errors are caused by magnetic dip?", "Acceleration and turning errors (ANDS, UNOS)."],
  ["What instrument helps reduce compass limitations?", "The heading indicator, which uses a gyroscope for stability."],
  ["How often should a heading indicator be realigned with the compass?", "Every 15 minutes or after significant turns."],

  // Flight Planning
  ["What are the five basic elements needed for a navigation log?", "Course, distance, estimated time, fuel, and checkpoints."],
  ["What are checkpoints in pilotage?", "Easily identifiable landmarks used to verify position."],
  ["What are common checkpoints?", "Rivers, highways, railroads, lakes, towns, or towers."],
  ["Why should pilots avoid checkpoints too close together?", "To prevent excessive workload and confusion."],
  ["What should be done if uncertain about position?", "Circle the last known checkpoint and re-identify landmarks or use navigation aids."],

  // Pilotage Techniques
  ["What is meant by 'clock to map to ground'?", "A navigation technique comparing time flown to chart and ground features for position awareness."],
  ["Why should pilots use prominent landmarks for checkpoints?", "To reduce ambiguity and improve accuracy of position fixes."],
  ["What is a line of position (LOP)?", "A line drawn on a chart that represents all possible positions of the aircraft at a given bearing."],

  // Dead Reckoning
  ["What tools are commonly used for dead reckoning?", "E6-B flight computer, plotter, sectional chart, and navigation log."],
  ["What information must be known before using dead reckoning?", "True airspeed, wind direction/speed, variation, and deviation."],
  ["What is the difference between true course and magnetic course?", "True course is measured from true north; magnetic course is corrected for variation."],
  ["Why is dead reckoning accuracy dependent on wind?", "Because uncorrected wind drift alters track and ground speed calculations."],

  // Radio Navigation Aids
  ["What is a VOR?", "VHF Omnidirectional Range — a ground-based radio navigation aid providing azimuth information."],
  ["What is the frequency range of VOR stations?", "108.0 to 117.95 MHz."],
  ["What is the accuracy of a VOR?", "Within ±1°."],
  ["What is DME?", "Distance Measuring Equipment — provides slant-range distance to a ground station."],
  ["What is a VORTAC?", "A combined VOR and TACAN facility providing both azimuth and distance information."],
  ["What is an NDB?", "Nondirectional Beacon — a low/medium frequency radio beacon providing bearing to the station."],
  ["What instrument is used to navigate with an NDB?", "An Automatic Direction Finder (ADF)."],
  ["What is an ADF bearing indicator?", "Instrument displaying the relative bearing of the station from the aircraft nose."],
  ["How is magnetic bearing to the NDB calculated?", "Magnetic Bearing = Magnetic Heading + Relative Bearing."],

  // GPS and RNAV
  ["What is GPS?", "Global Positioning System — satellite-based navigation providing precise 3D position and velocity information."],
  ["How many satellites are required for 3D GPS position?", "At least four."],
  ["What is RAIM?", "Receiver Autonomous Integrity Monitoring — ensures accuracy and reliability of GPS signals."],
  ["What is WAAS?", "Wide Area Augmentation System — improves GPS accuracy to within 3 meters for precision approaches."],
  ["What is RNAV?", "Area Navigation — allows flight between any points without direct overflight of ground stations."],
  ["What is FMS?", "Flight Management System — onboard computer integrating navigation data and automating flight path management."],
  ["What is GNSS?", "Global Navigation Satellite System — general term for worldwide satellite-based navigation systems."],

  // Flight Planning and Diversion
  ["What are the main steps in preflight navigation planning?", "Plotting the route, determining magnetic headings, computing time/fuel, and identifying checkpoints."],
  ["What should a pilot do when winds aloft differ significantly from forecast?", "Adjust heading and groundspeed estimates en route."],
  ["What are the primary considerations when planning alternate routes?", "Weather, fuel reserves, terrain, and available navigation aids."],
  ["When diverting to an alternate airport, what should be computed first?", "Estimated heading and distance using visible landmarks or GPS data."],

  // Miscellaneous
  ["What does the acronym TCAS stand for?", "Traffic Collision Avoidance System."],
  ["What does TCAS do?", "Provides traffic advisories and resolution instructions to prevent midair collisions."],
  ["What information does an ATIS broadcast provide?", "Weather, runway in use, and airport advisories at towered airports."],
  ["What information does an AWOS or ASOS provide?", "Automated weather reports including wind, visibility, ceiling, and temperature."],
  ["What is a waypoint?", "A defined geographical location used for navigation, either on charts or in GPS databases."],
  ["What is a great circle route?", "The shortest distance between two points on the Earth’s surface."],
  ["What is rhumb line navigation?", "A line crossing all meridians at the same angle — used for constant heading navigation."],
  ["What is the difference between great circle and rhumb line navigation?", "Great circle is shortest path; rhumb line is constant heading route."],
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






