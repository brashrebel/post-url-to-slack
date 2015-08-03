document.addEventListener('DOMContentLoaded', function() {
    var postToSlackButton = document.getElementById('postToSlack');
    postToSlackButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var post = new Object();
            // This gets the URL of the current tab
            post.text = tab.url;
            post.username = 'Pick of the Week Idea';
            var filter = new Array();
            filter[0] = "text";
            filter[1] = "username";
            var f = d.createElement('form');
            f.action = 'https://hooks.slack.com/services/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';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = JSON.stringify(post, filter);
            f.appendChild(i);
            d.body.appendChild(f);f.submit();
        });
    }, false);
}, false);