$(document).ready(function () {
  renderWinnerCards();
  renderParticipantCards();
});

const scores = [
  {
    "Name": "A.Harini",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://condescending-jepsen-6ebf5d.netlify.app/",
    "Project description": "About cakes and 5 recipes to bake a cake(Chocolate Sponge Cake, Butter sponge cake ,Pumpkin cake with cream cheese frosting, Molten lava Cake, Finning tiger cake)",
    "Leaderboard Score %": "",
    "Netlify Link": "https://condescending-jepsen-6ebf5d.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "A.S.Yaswanthrajaa",
    "School": "VAN",
    "Class": "12th",
    "Project URL": "http://yaswanthrajaa-isha-van2022.netlify.app/",
    "Project description": "This website is based on Indian army. You can learn more about Indian army and you can know about the best operation (Operation rahat) done by Indian army. By visiting this website you can improve your knowledge about India and Indian army. In this website you can know what are things are used by Indian army like dresses, vehicals, weapons, radars, etc... I have also added what are the qualifications do you need to join Indian army in this website.",
    "Leaderboard Score %": "",
    "Netlify Link": "http://yaswanthrajaa-isha-van2022.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "m.moovesh and b.sudharsan",
    "School": "CUD",
    "Class": "11th",
    "Project URL": "https://gregarious-lollipop-de2202.netlify.app/",
    "Project description": "it is a food website develop by a isha school cuddalore student 11th std .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gregarious-lollipop-de2202.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "A.Sujay",
    "School": "CUD",
    "Class": "9th",
    "Project URL": "https://tourism-tamilnadu-2022-india.netlify.app/",
    "Project description": "Tourism Tamilnadu\nthis website help the people who are willing to go to Tour\nIn my website, there are for booking page, registration page and few more creative things are added in my website.  I have gave information about places available in site and few images.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://tourism-tamilnadu-2022-india.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "R.M.DISA",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://sites.google.com/view/disa7/home#h.1c79h8hy1ctk",
    "Project description": "Top 6 temples in tamilnadu. This is useful for search topest temple in tamilnadu.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sites.google.com/view/disa7/home#h.1c79h8hy1ctk",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "T. Dinesh Rajasekar",
    "School": "VAN",
    "Class": "12th",
    "Project URL": "https://touristplaces-tn45.netlify.app/",
    "Project description": "Tourism in tamilnadu. Top 5 places to visit in tamilnadu. More interesting topics .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://touristplaces-tn45.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "Selvaragavan",
    "School": "SGP",
    "Class": "12th",
    "Project URL": "https://sportsxcom.netlify.app/",
    "Project description": "Hello! this is the web page that I have created using HTML and CSS. This web represents a sports shop named SPORTSX. For me, it took 14 days to develop this web. I used different techniques and ideas that I learned from google. It is a front-end website. I couldn't process any input that you gave on this website. THANK YOU!\n\nNote: As a beginner to JS, i had used a one line javascript code in the submission form.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sportsxcom.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "M.Abhiniti",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://62458fccf065fd3db5d4ad90--marvelous-froyo-5d59ee.netlify.app/home",
    "Project description": "I had create the webpage of tourism for Tamilnadu.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://62458fccf065fd3db5d4ad90--marvelous-froyo-5d59ee.netlify.app/home",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "S.A.Kanishka",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://lambent-beignet-fc0112.netlify.app/",
    "Project description": "My website is about Trees. My focus is to save trees. I want each and everyone  to plant and save trees. \"Humans are the only creature in this world,who cut tree and made paper from it and then wrote, SAVE TREES on it\".We change this slogan. Let make it happen.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://lambent-beignet-fc0112.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "Sujitha Mari. M",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://codepen.io/sujithamari/pen/NWXWqJv",
    "Project description": "My project describes Isha vidhya school. \nSpecial features I add pictures.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://codepen.io/sujithamari/pen/NWXWqJv",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "A.R.GIRISH",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://codepen.io/giri_2004/pen/oNpGLwy",
    "Project description": "THIS PROJECT IS ABOUT VISHAKAPATNAM TOURIST PLACES I HAVE USED HTML CODING HERE THANKYOU FOR GIVING THIS OPPORTUNITY",
    "Leaderboard Score %": "",
    "Netlify Link": "https://codepen.io/giri_2004/pen/oNpGLwy",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "Gnanasree.G",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://gentle-kulfi-b95d1e.netlify.app/",
    "Project description": "My site is for a grocery shop, but the shop was not real  . I had make hover effect for images.Thanks for this opportunity sir",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gentle-kulfi-b95d1e.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "A.R.GIRISH",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://majestic-torrone-08893d.netlify.app/",
    "Project description": "THIS PROJECT IS ABOUT VISHAKAPATNAM TOURIST PLACES I HAVE USED HTML,CSS AND JACA SCRIPT CODINGS THANKS FOR GIVING THIS OPPORTUNITY SHUDDHI VIDHYA",
    "Leaderboard Score %": "",
    "Netlify Link": "https://majestic-torrone-08893d.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "M.Ulaganathan",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://gleeful-daffodil-21d9b0.netlify.app/",
    "Project description": "I HAVE MADE A WEBSITE FOR SCHOOL.I HAVE USED HTML CSS AND JAVA SCRIPT PROGRAMMING LANGUAGES.THANK YOU FOR GIVING THIS OPPORTUNITY SHUDDHI VIDHYA",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gleeful-daffodil-21d9b0.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "K.Nandhini",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://strong-platypus-5ef310.netlify.app/",
    "Project description": "I do the project about flowers . We should know the value of flowers. It is not decided by appearence. It has medicinal values",
    "Leaderboard Score %": "",
    "Netlify Link": "https://strong-platypus-5ef310.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "M.Sujitha Mari",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://stellar-fox-39ecc7.netlify.app/",
    "Project description": "My project is about my school.\nI added pictures of my school.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://stellar-fox-39ecc7.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "C.Boomithra",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://marvelous-babka-cc16b3.netlify.app/",
    "Project description": "My website name is FARMERS OUTPUT.I create a website for farmers.how farmers are working for us.after seeing my website every person want to plant a tree and did'nt waste food.In my website I have included a app using that app we can know about farm biosecurity.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://marvelous-babka-cc16b3.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "M.Abhiniti",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://beamish-lolly-88f779.netlify.app",
    "Project description": "My project is about Ladakh Tourism.My tourism name is World Wide Travel.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://beamish-lolly-88f779.netlify.app",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "S.Mahalakshmi",
    "School": "TUT",
    "Class": "9th",
    "Project URL": "https://sites.google.com/view/seven-wonders-of-the-word-/home",
    "Project description": "My project name is seven wonders of the world. Now a days many of them don't know about this so only I create it",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sites.google.com/view/seven-wonders-of-the-word-/home",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "S.Tillai Natarajan",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://clever-trifle-926f87.netlify.app/",
    "Project description": "This is a project of an E-Commerce Website. This is a website where its like a shopping website. You can see many products and there's product details for Red-Printed T-Shirt. You can have a simple login form . It has a about page which tells about me. Its a simple shopping cart which has some simple functions of a shopping website. And it has preloader for the index and home page. Thank you for giving me this opportunity .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://clever-trifle-926f87.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  },
  {
    "Name": "Thurgeshwaran.I",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://savesoilthurgesh.netlify.app/",
    "Project description": "This project is for save soil\nI added letter import option \nIt is helpful to aware the people about save soil",
    "Leaderboard Score %": "",
    "Netlify Link": "https://savesoilthurgesh.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 0,
    "Presentation": 0,
    "Complexity": 0,
    "Creativity": 0,
    "Learning to learn": 0,
    "Originality": 0,
    "Code Quality": 0,
    "Remarks": "--"
  }
]
const headers = [
  "Name", // 0
  "School", // 1
  "Class", // 2
  "Project URL", // 3
  "Project description", // 4
  "Leaderboard Score %", // 5
  "Netlify Link", // 6
  "Participation Prize", // 7
  "Overall Score", // 8
  "Presentation", // 9
  "Complexity", // 10
  "Creativity", // 11
  "Learning to learn", // 12
  "Originality", // 13
  "Code Quality", // 14
  "Remarks", // 15
];

const sortedScores = scores.sort(function (a, b) {
  var keyA = a[headers[8]];
  keyB = b[headers[8]];
  // Compare the 2 dates
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1;
  return 0;
});

console.log({ sortedScores });

function initializeCardGroup() {
  return $('<div class="cards">');
}

function renderWinnerCards() {
  console.log("Rendering winner Cards...");
  let cardGroup = initializeCardGroup();
  const participants = sortedScores;
  for (let i = 0; i < 3; i++) {
    const participant = participants[i];
    console.log('participants, participant => ', {participants, participant, 'participants[0]': participants[0]})
    const total = (participant[headers[8]] * 100) / 60;
    const participationPrize = participant[headers[7]] === "Yes" ? " 🎖️" : "";
    const participantName =
      '<p id="participant-name">' +
      "#" +
      (i + 1).toString() +
      ". " +
      participant[headers[0]] +
      " 🏆 " +
      participationPrize +
      ' <span id="participant-sub-name"> (' +
      participant[headers[2]] +
      " Std, " +
      participant[headers[1]] +
      ") </p>";
    $(cardGroup).append(
      '<div onClick="showParticipantInfo(' +
        i +
        ')" class="ui card"  style=" margin: 5px; text-align: center;"> <div class="content">     <a class="header">' +
        participantName +
        '</a> <div class="progress-bar progress-bar-striped bg-' +
        progressColor(total) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 60 +
        '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 60</span></div>   </div>"
    );
    $("#winner-cards").append(cardGroup);
  }
}

function renderParticipantCards() {
  console.log("Rendering participant Cards...");
  let cardGroup = initializeCardGroup();
  const participants = sortedScores;
  // for (let i = 3; i < participants.length; i++) {
  for (let i = 0; i < participants.length; i++) {
    const participant = participants[i];
    const total = (participant[headers[8]] * 100) / 60;
    const participationPrize = participant[headers[7]] === "Yes" ? " 🎖️" : "";
    const participantName =
      '<p id="participant-name">' +
      "#" +
      (i + 1).toString() +
      ". " +
      participant[headers[0]] +
      participationPrize +
      ' <span id="participant-sub-name"> (' +
      participant[headers[2]] +
      " Std, " +
      participant[headers[1]] +
      ") </p>";
    $(cardGroup).append(
      '<div onClick="showParticipantInfo(' +
        i +
        ')" class="ui card"  style=" margin: 5px; text-align: center;"> <div class="content">     <a class="header">' +
        participantName +
        '</a> <div class="progress"><div class="progress-bar progress-bar-striped bg-' +
        progressColor(total) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 60 +
        '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 60</span></div>   </div></div>"
    );

    $("#participant-cards").append(cardGroup);
  }
}

function progressColor(percentage) {
  status = "";
  status = percentage > 75 ? "success" : status;
  status = percentage > 50 && percentage < 75 ? "info" : status;
  status = percentage > 25 && percentage < 50 ? "warning" : status;
  status = percentage < 25 ? "danger" : status;
  return status;
}

function showParticipantInfo(participantIndex) {
  const participant = scores[participantIndex];
  console.log("Showing Participant =>", participant);
  $("#participant-info-modal-title").text(
    participant[headers[0]] +
      " (" +
      participant[headers[2]] +
      " std, " +
      participant[headers[1]] +
      ")"
  );
  const participationPrize =
    participant[headers[7]] === "Yes"
      ? "Qualifies for participation Prize"
      : "Doesn't qualify for participation Prize";
  const total = (participant[headers[8]] * 100) / 60;
  const presentation = (participant[headers[9]] * 100) / 60;
  const complexity = (participant[headers[10]] * 100) / 10;
  const creativity = (participant[headers[11]] * 100) / 10;
  const learning = (participant[headers[12]] * 100) / 10;
  const originality = (participant[headers[13]] * 100) / 10;
  const code = (participant[headers[14]] * 100) / 10;
  $("#participant-project-link").empty();
  $("#participant-project-link").append(
    '<b>Link</b> - <a style="color: red;" href=" ' +
      participant[headers[6]] +
      '" target="_blank" rel="noopener noreferrer">' +
      participant[headers[6]] +
      "</a>"
  );
  $("#participant-leaderboard-score").empty();
  // $("#participant-leaderboard-score").append(
  //   "<p><b>Participation Prize</b> - " +
  //     participant[headers[5]] +
  //     " (" +
  //     participationPrize +
  //     ")</p>"
  // );
  $("#participant-total-score").empty();
  $("#participant-total-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(total) +
      '" role="progressbar" style="width: ' +
      total +
      '%" aria-valuenow="' +
      total / 60 +
      '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
      total / 2 +
      " / 60</span></div>"
  );
  $("#participant-presentation-score").empty();
  $("#participant-presentation-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(presentation) +
      '" role="progressbar" style="width: ' +
      presentation +
      '%" aria-valuenow="' +
      presentation / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      presentation / 10 +
      " / 10</span></div>"
  );
  $("#participant-complexity-score").empty();
  $("#participant-complexity-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(complexity) +
      '" role="progressbar" style="width: ' +
      complexity +
      '%" aria-valuenow="' +
      complexity / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      complexity / 10 +
      " / 10</span></div>"
  );
  $("#participant-creativity-score").empty();
  $("#participant-creativity-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(creativity) +
      '" role="progressbar" style="width: ' +
      creativity +
      '%" aria-valuenow="' +
      creativity / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      creativity / 10 +
      " / 10</span></div>"
  );
  $("#participant-learning-score").empty();
  $("#participant-learning-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(learning) +
      '" role="progressbar" style="width: ' +
      learning +
      '%" aria-valuenow="' +
      learning / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      learning / 10 +
      " / 10</span></div>"
  );
  $("#participant-originality-score").empty();
  $("#participant-originality-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(originality) +
      '" role="progressbar" style="width: ' +
      originality +
      '%" aria-valuenow="' +
      originality / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      originality / 10 +
      " / 10</span></div>"
  );
  $("#participant-code-score").empty();
  $("#participant-code-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(code) +
      '" role="progressbar" style="width: ' +
      code +
      '%" aria-valuenow="' +
      code / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      code / 10 +
      " / 10</span></div>"
  );
  $("#participant-student-remarks").empty();
  $("#participant-student-remarks").append(participant[headers[4]]);
  $("#participant-grader-remarks").empty();
  $("#participant-grader-remarks").append(participant[headers[15]]);

  $("#participant-info-modal-trigger").click();
}
