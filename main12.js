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
  ["How far does the atmosphere extend from Earth’s surface?", "Almost 350 miles."],
  ["What are the two main gases in the atmosphere and their percentages?", "Nitrogen (78%) and Oxygen (21%)."],
  ["What gas varies from 0 to 5% and is responsible for major weather changes?", "Water vapor."],
  ["What is the primary weather layer of the atmosphere?", "The troposphere."],
  ["What happens to temperature and pressure in the troposphere with altitude gain?", "Temperature decreases ~2°C per 1,000 ft and pressure decreases ~1 inHg per 1,000 ft."],
  ["What is the boundary at the top of the troposphere called?", "The tropopause."],
  ["Which layer of the atmosphere is stable and has little weather?", "The stratosphere."],

  // Circulation & Pressure
  ["What causes atmospheric circulation?", "Uneven heating of Earth’s surface by the sun."],
  ["Why does warm air rise and cool air sink?", "Warm air is less dense, cool air is more dense."],
  ["What is atmospheric pressure at sea level?", "14.7 lbs per square inch or 29.92 inHg."],
  ["At 18,000 feet, how much does air pressure decrease compared to sea level?", "About 50% (7.4 lbs per square inch)."],

  // Coriolis Force
  ["What is the Coriolis force?", "The deflection of moving air due to Earth’s rotation."],
  ["In which direction does Coriolis deflect air in the Northern Hemisphere?", "To the right."],
  ["Where is Coriolis strongest and weakest?", "Strongest at the poles, zero at the equator."],

  // Pressure Measurement
  ["What are the two types of barometers used to measure pressure?", "Mercurial barometer and aneroid barometer."],
  ["What is the ISA standard sea level pressure and temperature?", "29.92 inHg and 59°F (15°C)."],
  ["How many millibars equal 1 inHg?", "Approximately 34 mb."],
  ["Why do weather stations convert local pressure to sea level pressure?", "To provide a common reference for weather charts and aircraft altimeters."],

  // Altitude & Flight
  ["How does increased altitude affect takeoff performance?", "Longer takeoff run required due to reduced air density."],
  ["At what altitude do average people start experiencing noticeable hypoxia?", "About 10,000 feet (sometimes as low as 5,000 ft)."],

  // Winds & Currents
  ["What causes wind?", "Air moving from high pressure to low pressure areas."],
  ["What is anticyclonic circulation?", "Clockwise circulation around a high-pressure area in the Northern Hemisphere."],
  ["What is cyclonic circulation?", "Counterclockwise circulation around a low-pressure area in the Northern Hemisphere."],
  ["What local wind occurs when warm air rises over land and is replaced by cooler air from water?", "Sea breeze."],
  ["What local wind occurs at night when cool land air replaces warmer air over water?", "Land breeze."],

  // Turbulence & Shear
  ["What causes convective turbulence at low altitudes?", "Uneven heating of Earth’s surface."],
  ["What hazards can ground obstructions like buildings and mountains cause?", "Turbulence and dangerous wind gusts."],
  ["What is wind shear?", "A sudden drastic change in wind speed and/or direction."],
  ["What is the most hazardous type of low-level wind shear?", "A microburst."],
  ["How strong can downdrafts be in a microburst?", "Up to 6,000 feet per minute."],

  // Stability & Inversions
  ["What does atmospheric stability depend on?", "The ability to resist vertical motion."],
  ["What is adiabatic cooling?", "Cooling of rising air as pressure decreases and volume expands."],
  ["What is the dry adiabatic lapse rate?", "3°C (5.4°F) per 1,000 ft."],
  ["What is the moist adiabatic lapse rate?", "1.1°C to 2.8°C per 1,000 ft."],
  ["What is a temperature inversion?", "When air temperature increases with altitude instead of decreasing."],
  ["What weather conditions are associated with inversions?", "Fog, haze, smoke, and poor visibility."],

  // Moisture & Humidity
  ["What happens to air’s moisture capacity with every 20°F increase?", "It doubles."],
  ["What is relative humidity?", "The percentage of water vapor in the air compared to its capacity."],
  ["What is dew point?", "The temperature at which air is saturated and condensation begins."],
  ["What formula estimates cloud base height?", "((Temperature - Dew Point) / 4.4) x 1,000 = Cloud base in feet AGL."],

  // Fog
  ["What is fog?", "A cloud on the ground formed when air cools to its dew point."],
  ["What is radiation fog?", "Fog formed on clear nights when the ground cools and cools the air above it."],
  ["What is advection fog?", "Fog formed when warm moist air moves over a cold surface."],
  ["What is upslope fog?", "Fog formed when moist air is forced up terrain slopes."],
  ["What is steam fog?", "Fog formed when cold air moves over warm water, resembling smoke."],
  ["What is ice fog?", "Fog formed in very cold weather when water vapor sublimates directly into ice crystals."],

  // Clouds
  ["What are the four main cloud families by height?", "Low, middle, high, and clouds with vertical development."],
  ["What types of low clouds can produce icing?", "Stratus, stratocumulus, and nimbostratus."],
  ["What clouds are associated with turbulence and thunderstorms?", "Towering cumulus and cumulonimbus."],
  ["What cloud type is most dangerous to pilots?", "Cumulonimbus."],
  ["What cloud type often forms over mountains in strong winds?", "Lenticular clouds."],

  // Precipitation
  ["What is virga?", "Rain that evaporates before reaching the ground."],
  ["What are ice pellets a sign of?", "A temperature inversion and possible freezing rain aloft."],
  ["How is hail formed?", "Supercooled water droplets carried up and down in cumulonimbus clouds until too heavy to be supported."],

  // Air Masses & Fronts
  ["How are air masses classified?", "By temperature (polar/tropical) and moisture (continental/maritime)."],
  ["What is a warm front?", "When warm air advances over cooler air."],
  ["What is a cold front?", "When cold air pushes under warm air, lifting it rapidly."],
  ["What is a stationary front?", "A boundary between two air masses with little movement."],
  ["What is an occluded front?", "When a fast-moving cold front overtakes a warm front."],

  // Thunderstorms
  ["What are the three stages of a thunderstorm?", "Cumulus, mature, and dissipating."],
  ["What conditions are required for thunderstorm formation?", "Moisture, unstable air, and a lifting action."],
  ["What is a squall line?", "A narrow band of active thunderstorms, often ahead of a cold front."],
  ["What is a funnel cloud?", "A rotating column of air that does not reach the ground."],
  ["What is a tornado?", "A rotating column of air that reaches the ground."],
  ["What is a waterspout?", "A tornado that forms over water."],
  ["What thunderstorm hazard can cause severe icing?", "Supercooled water droplets in updrafts."],
  ["Why is hail especially dangerous to aircraft?", "It can cause severe structural damage, even several miles from a storm."],
  ["How can thunderstorms affect altimeter readings?", "Rapid pressure changes can create errors of more than 100 feet."],
  ["What is the FAA’s recommended safe distance from severe thunderstorms?", "At least 20 nautical miles."]
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






