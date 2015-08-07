document.addEventListener('DOMContentLoaded', function() {
    var postToSlackButton = document.getElementById('postToSlack');
    postToSlackButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            xhr = new XMLHttpRequest();
            xhr.open("POST", "https://wprt.slack.com/services/hooks/slackbot?token=dFFotg4Aim0Hbbke0V8No9ti&channel=%23general", true);
            xhr.send("Pick of the week idea: " + tab.title + " " + tab.url);
        });
    }, false);
}, false);