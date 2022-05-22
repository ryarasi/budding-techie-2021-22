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
    "Participation Prize": "Yes",
    "Overall Score": 34,
    "Presentation": 5,
    "Complexity": 7,
    "Creativity": 6,
    "Learning to learn": 6,
    "Originality": 7,
    "Code Quality": 3,
    "Remarks": "* The presentation could have been greatly improved by adding a background that doesn't affect readability. Currently the color of the text and the background make the text highly unreadable. Otherwise the site is well-presented, in a logical and easy-to-navigate fashion.\n* The site has a complexity that is fairly average. The pages are linked together neatly and the dropdown option and each sub-page has a Home button.\n* This is very neat, creative and original concept and the information is presented well.\n* The idea to link new pages to options in the dropdown is a new concept that was not taught in the class. So kudos for implementing that!\n* The code quality is not high. There is very little formatting and indentation implemented in the code, making it not very readable.\n* Overall, good attempt. Thanks for participating!"
  },
  {
    "Name": "A.S.Yaswanthrajaa",
    "School": "VAN",
    "Class": "12th",
    "Project URL": "http://yaswanthrajaa-isha-van2022.netlify.app/",
    "Project description": "This website is based on Indian army. You can learn more about Indian army and you can know about the best operation (Operation rahat) done by Indian army. By visiting this website you can improve your knowledge about India and Indian army. In this website you can know what are things are used by Indian army like dresses, vehicals, weapons, radars, etc... I have also added what are the qualifications do you need to join Indian army in this website.",
    "Leaderboard Score %": "",
    "Netlify Link": "http://yaswanthrajaa-isha-van2022.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 43,
    "Presentation": 8,
    "Complexity": 8,
    "Creativity": 8,
    "Learning to learn": 7,
    "Originality": 8,
    "Code Quality": 4,
    "Remarks": "* The site is well-made, the choice of colours is balanced and well-suited. The images, and information go well together. This is overall a very professional-looking website! Kudos!\n* In terms of complexity, the site is fairly average using conventional HTML elements.\n* The site is creative and original and overall very balanced.\n* The code quality is not very good. The use of external stylesheets and external Javascript code should have been used and the formatting should have been better.\n* Overall great attempt. Thanks for participating!"
  },
  {
    "Name": "M. Moovesh & B.Sudharsan",
    "School": "CUD",
    "Class": "11th",
    "Project URL": "https://gregarious-lollipop-de2202.netlify.app/",
    "Project description": "it is a food website develop by a isha school cuddalore student 11th std .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gregarious-lollipop-de2202.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 41,
    "Presentation": 8,
    "Complexity": 8,
    "Creativity": 8,
    "Learning to learn": 7,
    "Originality": 6,
    "Code Quality": 4,
    "Remarks": "* The site looks very classy, beautiful and there's a lot of advanced features used. \n* The site uses too many third party assets (images, code etc.) and therefore scores low in terms of originality and code quality. \n* Even though a lot of third party code/assets are used, it scores high on learing to learn, since it takes some amount of application of knowledge to integrate all third party resources together into a coherent product. \n* There are some absolute file paths used in some of the links in the footer, which is not encouraged, so points have been reduced for code quality because of that. But also, there is a lot of comments across the code and it is quite readable, thanks to the formatting.\n* Overall, great attempt. Thanks for participating!"
  },
  {
    "Name": "A.Sujay",
    "School": "CUD",
    "Class": "9th",
    "Project URL": "https://tourism-tamilnadu-2022-india.netlify.app/",
    "Project description": "Tourism Tamilnadu\nthis website help the people who are willing to go to Tour\nIn my website, there are for booking page, registration page and few more creative things are added in my website.  I have gave information about places available in site and few images.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://tourism-tamilnadu-2022-india.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 34,
    "Presentation": 5,
    "Complexity": 8,
    "Creativity": 7,
    "Learning to learn": 7,
    "Originality": 7,
    "Code Quality": 0,
    "Remarks": "* The site is well-designed and well-presented. The mobile version is unreadable because the text is too small. You should have adjusted the viewport for this to be mobile-friendly.\n* The site doesn't let you go back to the home page from its sub-pages. So it is not very convenient. \n* It was completely unnecessary to deploy each page to a different site. This is very expensive in terms of deployment infrastructure and also makes the site too slow. Each page should have been a HTML file within the same project deployed in one Netlify site. Hence the low points on code quality.\n* Overall good attempt. Thanks for participating!"
  },
  {
    "Name": "R.M.DISA",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://sites.google.com/view/disa7/home#h.1c79h8hy1ctk",
    "Project description": "Top 6 temples in tamilnadu. This is useful for search topest temple in tamilnadu.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sites.google.com/view/disa7/home#h.1c79h8hy1ctk",
    "Participation Prize": "Yes",
    "Overall Score": 26,
    "Presentation": 7,
    "Complexity": 6,
    "Creativity": 5,
    "Learning to learn": 3,
    "Originality": 5,
    "Code Quality": 0,
    "Remarks": "* The site is simple yet has some neatly presented information with useful images and facts. \n* The site has a lot of useful links, so scores relatively high on complexity even though it is not as complex in terms of features.\n* The code quality is quite low. There is no formatting whatsoever and the readability is quite low and also there is a lot of unnecessary code, so the score reflects that.\n* Overall, good first attempt. Thanks for participating!"
  },
  {
    "Name": "T. Dinesh Rajasekar",
    "School": "VAN",
    "Class": "12th",
    "Project URL": "https://touristplaces-tn45.netlify.app/",
    "Project description": "Tourism in tamilnadu. Top 5 places to visit in tamilnadu. More interesting topics .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://touristplaces-tn45.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 31,
    "Presentation": 6,
    "Complexity": 5,
    "Creativity": 6,
    "Learning to learn": 6,
    "Originality": 6,
    "Code Quality": 2,
    "Remarks": "* The site has a lot of information, and is fairly simple. However it is difficult to navigate and it is easy for a visitor to easily miss the navigation. \n* Some things that could be improved is the navigation menu - the menu keeps moving its place from left side of the screen to the right on each page, this is confusing. And also the icons are not self-explanatory, so it can be confusing as to what the navigation icon is for.\n* The code quality is quite low. It is not formatted properly and it uses too much of internal stylesheets, where the usage of external stylesheet could have been better.\n* Overall, good first attempt. Thanks for participating!"
  },
  {
    "Name": "Selvaragavan",
    "School": "SGP",
    "Class": "12th",
    "Project URL": "https://sportsxcom.netlify.app/",
    "Project description": "Hello! this is the web page that I have created using HTML and CSS. This web represents a sports shop named SPORTSX. For me, it took 14 days to develop this web. I used different techniques and ideas that I learned from google. It is a front-end website. I couldn't process any input that you gave on this website. THANK YOU!\n\nNote: As a beginner to JS, i had used a one line javascript code in the submission form.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sportsxcom.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 50,
    "Presentation": 9,
    "Complexity": 8,
    "Creativity": 9,
    "Learning to learn": 7,
    "Originality": 8,
    "Code Quality": 9,
    "Remarks": "* This is one of the more impressive submissions and looks very professional and is quite comprehensive and is well-presented.\n* The site is fairly complex with a lot of pages, all of which seem meaningfully placed with meaningful content, and are easy to navigate.\n* The code quality is good, with the code being formatted and easy to read, the styling uses external stylesheets, and there doesn't seem to be any instances of repetitive code. \n* Overall, a very impressive attempt. Thanks for participating!"
  },
  {
    "Name": "S.A.Kanishka",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://lambent-beignet-fc0112.netlify.app/",
    "Project description": "My website is about Trees. My focus is to save trees. I want each and everyone  to plant and save trees. \"Humans are the only creature in this world,who cut tree and made paper from it and then wrote, SAVE TREES on it\".We change this slogan. Let make it happen.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://lambent-beignet-fc0112.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 40,
    "Presentation": 7,
    "Complexity": 6,
    "Creativity": 8,
    "Learning to learn": 8,
    "Originality": 7,
    "Code Quality": 4,
    "Remarks": "* This is a very cute website with an appropriately vibrant color palette. The use of animated background stands out and gives the visitor a welcoming first impression.\n* The choice of colors for the text and highlighting could have been better matched. Aside from the home page, the other pages seem to lack any color and so the other pages seem disconnected from the home page. And the sub-pages have no navigational buttons that take the visitor back to the home page. These are some things that could have been improved.\n* The use of keyframe animations for some of the images in the sub-pages is noteworthy as an example of learning to learn.\n* The code quality is quite average as there is a lot of usage of internal stylesheets, where using external stylesheets could have been the recommended approach. The formatting also needs work.\n* Overall, great first attempt. Thanks for participating!"
  },
  {
    "Name": "Gnanasree.G",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://gentle-kulfi-b95d1e.netlify.app/",
    "Project description": "My site is for a grocery shop, but the shop was not real  . I had make hover effect for images.Thanks for this opportunity sir",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gentle-kulfi-b95d1e.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 47,
    "Presentation": 7,
    "Complexity": 9,
    "Creativity": 8,
    "Learning to learn": 9,
    "Originality": 8,
    "Code Quality": 6,
    "Remarks": "* This is a very unique submission and has a lot of noteworthy application of novel concepts not taught as part of the course. So kudos!\n* The site is quite complex and feature-rich, with a lot of media and content.\n* The learning to learn aspect is the highlight, especially the use of filtering buttons on the products page is very well done. And also the slideshows.\n* Some points that can be improved is better integration of mobile-friendliness, and the images in the slideshow are stretched out too much on desktop view. \n* The code quality could be better, where all the styling could have been in the external stylesheet, completely eliminating the internal stylesheet, and the formatting of the css file could have been better.\n* Overall, this is a good attempt! Thanks for participating!"
  },
  {
    "Name": "M.Ulaganathan",
    "School": "TUT",
    "Class": "12th",
    "Project URL": "https://gleeful-daffodil-21d9b0.netlify.app/",
    "Project description": "I HAVE MADE A WEBSITE FOR SCHOOL.I HAVE USED HTML CSS AND JAVA SCRIPT PROGRAMMING LANGUAGES.THANK YOU FOR GIVING THIS OPPORTUNITY SHUDDHI VIDHYA",
    "Leaderboard Score %": "",
    "Netlify Link": "https://gleeful-daffodil-21d9b0.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 27,
    "Presentation": 6,
    "Complexity": 5,
    "Creativity": 4,
    "Learning to learn": 4,
    "Originality": 4,
    "Code Quality": 4,
    "Remarks": "* The site appears professional in terms of layout and organization of content, but looks bare because of the lack of styling and poor usage of color combinations for text/background, making some text in the page difficult to read.\n* In terms of complexity, the site is fairly straightforward since all the links in the menu redirect to external resources.\n* In terms of code quality, the code isn't formatted too well and the usage of internal stylesheets could have been avoided in favor of using external stylesheets, and also some portions of the code seem to be unnecessary and perhaps could have been left over from reusing code from a third party resource. Other than that, the site is well-presented.\n* Overall, a good first attempt! Thanks for participating!"
  },
  {
    "Name": "K.Nandhini",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://strong-platypus-5ef310.netlify.app/",
    "Project description": "I do the project about flowers . We should know the value of flowers. It is not decided by appearence. It has medicinal values",
    "Leaderboard Score %": "",
    "Netlify Link": "https://strong-platypus-5ef310.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 40,
    "Presentation": 7,
    "Complexity": 7,
    "Creativity": 8,
    "Learning to learn": 7,
    "Originality": 7,
    "Code Quality": 4,
    "Remarks": "* This is a simple yet appealing site with minimal content in the home page but has substantial and coherent content in the sub-pages.\n* The information is presented in a coherent manner, but it is difficult to immediately see and the home page offers no context as to what the site is about, other than the heading and the tip to click on the nav menu to see more.\n* The nav menu is very beautiful and well done, but the home page could have more content to at least offer some context.\n* The code quality has mixed factors. On the one hand, the formatting is good, the use of external stylesheets and external JS code is appreciated. However, the head section is empty and that is not recommended at all.\n* Overall, this is an attractive outcome and it can be seen that the student has put in thoughtful effort. So kudos and thanks for participating!"
  },
  {
    "Name": "C.Boomithra",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://marvelous-babka-cc16b3.netlify.app/",
    "Project description": "My website name is FARMERS OUTPUT.I create a website for farmers.how farmers are working for us.after seeing my website every person want to plant a tree and did'nt waste food.In my website I have included a app using that app we can know about farm biosecurity.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://marvelous-babka-cc16b3.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 34,
    "Presentation": 7,
    "Complexity": 6,
    "Creativity": 8,
    "Learning to learn": 7,
    "Originality": 6,
    "Code Quality": 0,
    "Remarks": "* The site is immediately impactful in the subject matter it tries to address but a lot of the content is just copied over from other sites from foreign countries without much thought put into local relevance.\n* Some things that could have been done better is to use content that is locally relevant, the use of a background image that is of higher resolution, adjust the font size so that it is uniform in various parts of the page, and to include navigation menu on the other pages so that it is easier to get back to home page from there.\n* The code quality is not great. There is a lot of misplaced content, with tags being repeated where they shouldn't have and lack of formatting among other things. \n* Overall, the idea is great and it is not a bad first attempt! Thanks for participating!"
  },
  {
    "Name": "M.Abhiniti",
    "School": "ERD",
    "Class": "9th",
    "Project URL": "https://beamish-lolly-88f779.netlify.app",
    "Project description": "My project is about Ladakh Tourism.My tourism name is World Wide Travel.",
    "Leaderboard Score %": "",
    "Netlify Link": "https://beamish-lolly-88f779.netlify.app",
    "Participation Prize": "Yes",
    "Overall Score": 35,
    "Presentation": 7,
    "Complexity": 7,
    "Creativity": 6,
    "Learning to learn": 6,
    "Originality": 6,
    "Code Quality": 3,
    "Remarks": "* The site is simple yet coherent. It presents all the basic information needed for the purpose without adding too many bells and whistles.\n* Some things that could have been improved is the use of a footer on each page, a more compact navigational menu, higher resolution images, and better formatting of the text on home page since it looks too cluttered.\n* In terms of code quality, the external stylesheet could have been used throughout instead of using both and formatting could have been better, some code is unnecessary.\n* Overall, this is a good first attempt. Thanks for participating!"
  },
  {
    "Name": "S.Mahalakshmi",
    "School": "TUT",
    "Class": "9th",
    "Project URL": "https://sites.google.com/view/seven-wonders-of-the-word-/home",
    "Project description": "My project name is seven wonders of the world. Now a days many of them don't know about this so only I create it",
    "Leaderboard Score %": "",
    "Netlify Link": "https://sites.google.com/view/seven-wonders-of-the-word-/home",
    "Participation Prize": "Yes",
    "Overall Score": 16,
    "Presentation": 6,
    "Complexity": 3,
    "Creativity": 4,
    "Learning to learn": 0,
    "Originality": 3,
    "Code Quality": 0,
    "Remarks": "* The site is quite simple but still complete for what it aspires to offer in terms of information.\n* The site could have been deployed on Netlify for better impact.\n* Some improvements - One of the images is broken, the text is scattered and not uniform in formatting and indentation.\n* What does \"I think you all well clear about it\" mean?\n* Overall, this is a decent first attempt. Thanks for participating!"
  },
  {
    "Name": "S.Tillai Natarajan",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://clever-trifle-926f87.netlify.app/",
    "Project description": "This is a project of an E-Commerce Website. This is a website where its like a shopping website. You can see many products and there's product details for Red-Printed T-Shirt. You can have a simple login form . It has a about page which tells about me. Its a simple shopping cart which has some simple functions of a shopping website. And it has preloader for the index and home page. Thank you for giving me this opportunity .",
    "Leaderboard Score %": "",
    "Netlify Link": "https://clever-trifle-926f87.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 23,
    "Presentation": 4,
    "Complexity": 5,
    "Creativity": 4,
    "Learning to learn": 3,
    "Originality": 3,
    "Code Quality": 4,
    "Remarks": "* The site is mostly copied from another existing website but some modifications have been made, so we're still allowing this submission to be valid.\n* The only original code in this site is the about page and some aspects of the landing page, so the scoring reflects these two pages.\n* Overall, this submission could have scored higher if overuse of third-party code/assets could have been avoided. But nonetheless, the about page did look good and thanks for participating!"
  },
  {
    "Name": "Thurgeshwaran.I",
    "School": "SGP",
    "Class": "9th",
    "Project URL": "https://savesoilthurgesh.netlify.app/",
    "Project description": "This project is for save soil\nI added letter import option \nIt is helpful to aware the people about save soil",
    "Leaderboard Score %": "",
    "Netlify Link": "https://savesoilthurgesh.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 34,
    "Presentation": 7,
    "Complexity": 6,
    "Creativity": 6,
    "Learning to learn": 3,
    "Originality": 7,
    "Code Quality": 5,
    "Remarks": "* The site is simple yet purposeful and coherent. \n* Some things that could have been improved is the use of higher resolution images, better alignment of some background images. For example, the \"save soil\" logo on the header is cropped by the screen. And the font size on the mobile view is very small, so it's not mobile friendly.\n* The code quality is fair.\n* Overall, this is a good attempt, however it could have been much better with more time spent, considering the student won the 2nd prize in the last year's competition! Nonetheless, thanks for participating!"
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
