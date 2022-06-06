$(document).ready(function () {
  renderWinnerCards();
  renderParticipantCards();
});

const scores = [];
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
  "Complexity", // 9
  "Creativity", // 10
  "Learning to learn", // 11
  "Originality", // 12
  "Code Quality", // 13
  "Remarks", // 14
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
    const total = (participant[headers[8]] * 100) / 50;
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
        total / 50 +
        '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 50</span></div>   </div>"
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
    const total = (participant[headers[8]] * 100) / 50;
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
        '</a> <div class="progress-bar progress-bar-striped bg-' +
        progressColor(total) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 50 +
        '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 50</span></div>   </div>"
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
  const total = (participant[headers[8]] * 100) / 50;
  const presentation = (participant[headers[9]] * 100) / 50;
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
  $("#participant-leaderboard-score").append(
    "<p><b>Classroom Score</b> - " +
      participant[headers[5]] +
      " (" +
      participationPrize +
      ")</p>"
  );
  $("#participant-total-score").empty();
  $("#participant-total-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(total) +
      '" role="progressbar" style="width: ' +
      total +
      '%" aria-valuenow="' +
      total / 50 +
      '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
      total / 2 +
      " / 50</span></div>"
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
  $("#participant-grader-remarks").append(participant[headers[14]]);

  $("#participant-info-modal-trigger").click();
}
