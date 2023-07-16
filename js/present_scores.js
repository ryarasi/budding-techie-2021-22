$(document).ready(function () {
  renderWinnerCards();
  renderParticipantCards();
});

const scores = [
  {
    "Name": "S.Aniska Lingeswari",
    "School": "TUT",
    "Class": "8th",
    "Project URL": "https://2023-shuddhi-vidhya-aniska-01.netlify.app/",
    "Project description": "This is about the state in India and their famous.Yes,I included the real thing in this website and I used many of the css here",
    "Leaderboard Score %": "",
    "Netlify Link": "https://2023-shuddhi-vidhya-aniska-01.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 35,
    "Presentation": 5,
    "Complexity": 7,
    "Creativity": 7,
    "Learning to learn": 5,
    "Originality": 7,
    "Code Quality": 4,
    "Remarks": "* The website is overall properly organized and presented. But the font size and colors make reading the information a bit challenging. The images are centered while the text is spanning the width of the site, which makes reading the text more challenging. The rainbow background for the text also makes the text hard to read.\n* The site is of above average complexity. There is a lot of content and information. And it is all well organized and listed in different pages.\n* The concept is creative.\n* Certain CSS properties that were not taught in class have been used, but much of the rest of the things are similar to what was taught in class\n* The code quality is not high. There is very little formatting and indentation implemented in the code, making it not very readable.\n* Overall, good attempt. Thanks for participating!"
  },
  {
    "Name": "E.Manaswini",
    "School": "ARG",
    "Class": "9th",
    "Project URL": "https://manaswinichowdary.netlify.app/",
    "Project description": "My project is about butterflies. There are many butterflies we can't describe all that in one website .I did 3 types of butterflies that are rarest butterflies, beautiful butterflies, unique butterflies. 1st one in future we may not see that butterflies .2nd one beautiful butterflies we can't see them in daily life.3rd one that are unique.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://manaswinichowdary.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 46,
    "Presentation": 9,
    "Complexity": 7,
    "Creativity": 8,
    "Learning to learn": 5,
    "Originality": 8,
    "Code Quality": 9,
    "Remarks": "* The website is overall very well presented and looks very professional and classy. The fact that the initial butterfly animation blends seemlessly with the background is very welldone. \n* The site is fairly simple and not very complex. But still it serves the purpose in a very coherent way.\n* The topic is creative and is also well executed.\n* The use of animations, grids to display the images are all things that weren't taught as part of the course.\n* The code quality is good. But there are certain things that could have been better. The title of the site in the head section seems to be not relevant. Some comments seem to be irrelevant too.\n* Overall, this is a great attempt. Thanks for participating!"
  },
  {
    "Name": "C. Jeswitha Reddy",
    "School": "ARG",
    "Class": "9th",
    "Project URL": "https://cjeswitha.netlify.app",
    "Project description": "Haii This is Jeswitha, I had selected this web page to create awareness among women. Women empowerment is defined in many ways and it refers that  making women socially and financially independent. Empowering women is essential to the health and social development of families, communities and countries. A woman is person who handles both her personal life and professional life not just handling the house. All the women has equal rights with comparison to men's.They have the right to work, educate and to be independent. Earlier days woman doesn't had rights and safety for them self. They used to be depending on someone. To create an awareness among women I had created this web page and shared few things related to women's rights, education, and women's empowerment. I did this web page using HTML,CSS and with Help of our Vidhya platform videos helped me a lot. This is my favorite concept and I did even Healthy world Web page Thank You\n\nhttps://cjeswitha.netlify.app",
    "Leaderboard Score %": "",
    "Netlify Link": "https://cjeswitha.netlify.app",
    "Participation Prize": "Yes",
    "Overall Score": 48,
    "Presentation": 7,
    "Complexity": 7,
    "Creativity": 10,
    "Learning to learn": 5,
    "Originality": 10,
    "Code Quality": 9,
    "Remarks": "* The website is very aesthetically well-presented and well organized. There are some inconsistencies like the fact that all the images except one are center-aligned. And it would have been better to make the text a fixed-width on the page, rather than let it extend the whole width. The text could have been formatted in a better way to make it all more readable.\n* The site is fairly simple and not very complex. But still it serves the purpose in a very coherent way.\n* The topic is very powerful and the content is very original and coherent.\n* The use of animations is good, but other thant that there isn't much use of new concepts not taught in the courese.\n* The code quality is ok but could have been better. You could have downloaded the images and used it from the site rather than use direct links. This would create problems if the original place where those images are posted are deleted by their owner.\n* Overall, this is a wonderful attempt worthy of lot of praise. Thanks for participating!"
  },
  {
    "Name": "K.Durai Murugan",
    "School": "TUT",
    "Class": "9th",
    "Project URL": "https://cerulean-dasik-8cb22b.netlify.app/",
    "Project description": "YOU CAN PLAY AWESOME GAMES IN THIS WEBSITE.\nTHIS WEBSITE HAVE 5+ INTERESTING GAMES ONLY USING HTML,CSS,JS",
    "Leaderboard Score %": "",
    "Netlify Link": "https://cerulean-dasik-8cb22b.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 34,
    "Presentation": 4,
    "Complexity": 4,
    "Creativity": 7,
    "Learning to learn": 4,
    "Originality": 9,
    "Code Quality": 6,
    "Remarks": "* The website intends to let visitors let play games but the links don't work. These links are file shortcuts. They will only work if they are downloaded on devices that already have the games. For this to work, you could have provided actual links to the full download of the games and also mentioned that this is only for mobile device. There is also a link at the bottom of the page for \"previous page\" which is broken.\n* The site is fairly simple and not very complex. \n* The concept is very original. It could have been better executed so that it worked.\n* The code quality is quite good. But you could have ensured that there are no broken links.\n* Overall, this is a good and creative attempt. Thanks for participating!"
  },
  {
    "Name": "P.Gopinath",
    "School": "DHA",
    "Class": "9th",
    "Project URL": "http://animes-and-cartoons-gopinath.netlify.app",
    "Project description": "This is website which shows our childhood memories.This website is made up of html,css and javascript.The main I developed this project is nowadays students in this generation often uses mobile.80% of students watches mobile instead of watching TV.Through mobile I need to make how good is cartoons more than mobile",
    "Leaderboard Score %": "",
    "Netlify Link": "http://animes-and-cartoons-gopinath.netlify.app",
    "Participation Prize": "Yes",
    "Overall Score": 58,
    "Presentation": 9,
    "Complexity": 10,
    "Creativity": 10,
    "Learning to learn": 10,
    "Originality": 10,
    "Code Quality": 9,
    "Remarks": "* This is one of the most complex, well thought out projects submitted in this competition. It is immediately visible that a tremendous amount of time and effort has gone into this project. the desktop version of the site has some issues with center alignment but this is a very minor issue compared to a lot of the other achievements done.\n* The site is very complex, with a tremendous amount of content and it is all well organized.\n* The concept and the execution and presentation are all quite creaive and original.\n* The code quality is quite good. Some parts have not so great code formatting, but mostly it is all well done with adequate comments too.\n* Overall, this is a terrific attempt. Thanks for participating!"
  },
  {
    "Name": "Pushya. M",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://learning-india.netlify.app",
    "Project description": "This website is used to learn more detail about India,I am trying to achieve first price,my website has 11 pages and interesting news.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://learning-india.netlify.app",
    "Participation Prize": "Yes",
    "Overall Score": 40,
    "Presentation": 6,
    "Complexity": 7,
    "Creativity": 7,
    "Learning to learn": 5,
    "Originality": 6,
    "Code Quality": 9,
    "Remarks": "* The site is very informative and has organized information in a way that is easy to understand. The images could have been larger and some of the pages are not easily accessible. You have to go to different menus to even see that some pages exist. Also the background is making some text hard to read.\n* The site is of above average complexity and has a lot of information, but as mentioned above the images are sometimes too small and also some of the the information is hidden away.\n* There are some CSS animations that are not taught as part of the course. But otherwise there isn't much else that wasn't taught as part of the course.\n* The concept is original.\n* The code is formatted well\n* Overall, this is a good attempt. Thanks for participating!"
  },
  {
    "Name": "A.Satyaki",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://2023-shuddhi-vidhya-satyaki-01.netlify.app/",
    "Project description": "I made a web page for future astronauts and astronomers.My web page is useful  to the person how are all interested to known about space.I used dropdown menu bar, and animation background.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://2023-shuddhi-vidhya-satyaki-01.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 42,
    "Presentation": 6,
    "Complexity": 8,
    "Creativity": 7,
    "Learning to learn": 5,
    "Originality": 7,
    "Code Quality": 9,
    "Remarks": "* The site is unique in concept and has an interesting topic and the information is presented in an meaningful organization. But the visual appeal could use a lot of improvement. The animated background image makes the text hard to read and also is very distracting. The youtube video in the home page and also the images are very small and not centered, making it difficult to notice.\n* The site is of average complexity and has a lot of information, but as mentioned above the images are sometimes too small and also some of the the information is hidden away and the text is not as readable as it could have been.\n* Aside from the animated background image there is not much that is not taught as part of the course.\n* The concept is unique.\n* The code is formatted properly to an extent but a lot can also be improved. Some lines are not indented properly.\n* Overall, this is a good attempt. Thanks for participating!"
  },
  {
    "Name": "Vasudevan M",
    "School": "VAN",
    "Class": "9th",
    "Project URL": "https://vasu-mobilebuzz.netlify.app/index.html",
    "Project description": "This is Mobile buzz website,with 404 redirect, I work 8 days to complete this project.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://vasu-mobilebuzz.netlify.app/index.html",
    "Participation Prize": "Yes",
    "Overall Score": 35,
    "Presentation": 8,
    "Complexity": 6,
    "Creativity": 5,
    "Learning to learn": 7,
    "Originality": 5,
    "Code Quality": 4,
    "Remarks": "* The site is visually appealing and the colors are well chosen and it has a simple yet sensible design which makes everything readable and accessible. The 'Shop Now' page could have listed the items in a grid on desktop view and also it could make that content more accessible.\n* The site is of average complexity with not much different from the demo project that was done as part of the course.\n* The code is formatted properly to an extent but a lot can also be improved. Some lines are not indented properly.\n* Overall, this is a good attempt. Thanks for participating!"
  },
  {
    "Name": "A.N.Rajamuthumari",
    "School": "TUT",
    "Class": "10th",
    "Project URL": "https://enchanting-cocada-f36581.netlify.app",
    "Project description": "This is a website for a driving school especially for my father.I have many different hover effects.different type of design in every page.And my favourite 3d flip button in home page.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://enchanting-cocada-f36581.netlify.app",
    "Participation Prize": "No",
    "Overall Score": 51,
    "Presentation": 8,
    "Complexity": 7,
    "Creativity": 8,
    "Learning to learn": 9,
    "Originality": 10,
    "Code Quality": 9,
    "Remarks": "* This site is very unique in that it is created with a real world application to help support her father and for that it is quite noteworthy. The site is well designed and informative. But some things can be improved in terms of navigation. Some pages don't have back button to go back to a previous main page. And some of the information is not as readable since it has image as the background.\n* The site is of above average complexity with the right amount of information presented. As noted above, it could have helped to make it more easy to navigate.\n* The concept is unique, original and has real-world applications.\n* A lot of elements are used that involve concepts not taught as part of the course.\n* The formatting is good overall. Could have used more comments to explain the code in some places.\n* Overall, an excellent effort. Thanks for participating!"
  },
  {
    "Name": "Harsith",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://elaborate-gingersnap-d62612.netlify.app/",
    "Project description": "Superbike sales\nSuperbike are fastest in the world",
    "Leaderboard Score %": "",
    "Netlify Link": "https://elaborate-gingersnap-d62612.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 14,
    "Presentation": 2,
    "Complexity": 2,
    "Creativity": 3,
    "Learning to learn": 1,
    "Originality": 3,
    "Code Quality": 3,
    "Remarks": "* This site has very little information and most of the links do not work. There is not much to review, just a paragraph of text.\n* The site is very basic and does not have much complexity at all.\n* It feels like an incomplete project. Hopefully next year you can spend more time and effort to your project. Thanks for participating!"
  },
  {
    "Name": "Rishi B",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://2023-shuddhi-vidhya-rishi-01.netlify.app/",
    "Project description": "My father is an auto driver so I created a website for my father(THunder auto. ) This is the simple website for booking auto rickshaw for \"free. ",
    "Leaderboard Score %": "",
    "Netlify Link": "https://2023-shuddhi-vidhya-rishi-01.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 42,
    "Presentation": 7,
    "Complexity": 7,
    "Creativity": 7,
    "Learning to learn": 4,
    "Originality": 10,
    "Code Quality": 7,
    "Remarks": "* This site is very unique in that it is created with a real world application to help support his father and for that it is quite noteworthy. It has some informative videos and information about services but otherwise the site is fairly standard in presentation and very similar to the demo projects done as part of the course. \n* The site is of average complexity and not very different from the demo projects done as part of the course in terms of layout and features.\n* The concept is unique, original and has real-world applications.\n* Nearly everything used in the site uses concepts taught as part of the course.\n* The code quality is average. Most of the CSS is using internal stylesheets and a lot of the text has spelling mistakes or poor grammar. Code indentation and formatting could have been better.\n* Overall, a great effort. Thanks for participating!"
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

const processedScores = scores.map(s => {
  let remarks = s[headers[15]]
  remarks = remarks.replace('\n','');
  let remarksPoints = remarks.split('*').filter(e => e);
  let finalRemarks = '<ol>'
  remarksPoints.forEach(point => {
    finalRemarks = finalRemarks + '<li>' + point + '</li>'
  })
  finalRemarks = finalRemarks + '</ol>';
  s[headers[15]] = finalRemarks;
  return s;
})

const sortedScores = processedScores.sort(function (a, b) {
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
    const total = Math.round(participant[headers[8]]);
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
        '</a> <div class="progress"><div class="progress-bar progress-bar-striped bg-' +
        progressColor(total*100/60) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 60 +
        '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
        total +
        " / 60</span></div>   </div></div>"
    );
    $("#winner-cards").append(cardGroup);
  }
}

function renderParticipantCards() {
  console.log("Rendering participant Cards...");
  let cardGroup = initializeCardGroup();
  const participants = sortedScores;
  for (let i = 3; i < participants.length; i++) {
    const participant = participants[i];
    const total = Math.round(participant[headers[8]]);
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
        progressColor(total*100/60) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 60 +
        '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
        total +
        " / 60</span></div>   </div></div>"
    );

    $("#participant-cards").append(cardGroup);
  }
}

function progressColor(percentage) {
  let status = "";
  status = percentage > 75 ? "success" : status;
  status = percentage > 50 && percentage < 75 ? "info" : status;
  status = percentage > 25 && percentage < 50 ? "warning" : status;
  status = percentage < 25 ? "danger" : status;
  return status;
}

function showParticipantInfo(participantIndex) {
  const participant = sortedScores[participantIndex];
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
  const total = Math.round(participant[headers[8]]);
  const presentation = (participant[headers[9]] * 100) / 10;
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
      progressColor(total*100/60) +
      '" role="progressbar" style="width: ' +
      total +
      '%" aria-valuenow="' +
      total / 60 +
      '" aria-valuemin="0" aria-valuemax="60"> <span style="font-size: 1.2em">' +
      total +
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
