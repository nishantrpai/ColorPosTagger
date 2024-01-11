//default color
chrome.storage.sync.set({
	'noun': '<font color="#009250" style="background-color: rgba(0,146,80,0.5);border-radius: 5px;">',
	'adjective': '<font color="#1F91BE">',
	'verb': '<font color="#DE9610">',
	'adverb': '<font color="#5D639E">',
	'auxiliaryVerb': '<font color="#B61972">',
	'relative': '<font color="#744199">',
	'conjunction': '<font color="#DA5019">',
	'determiner': '<font color="#009250">'
}, function () {
		console.log('Settings saved');
});


chrome.action.onClicked.addListener(function (id, bookmark) {
		// get tab query
		var queryInfo = {
		active: true,
		windowId: chrome.windows.WINDOW_ID_CURRENT
		};

	// get tab infomation
		chrome.tabs.query(queryInfo, function (result) {
		var currentTab = result.shift();
		if (message == true) {
			message = false
		} else {
			message = true;
		}
		var message = {};

		// send current tab
		chrome.tabs.sendMessage(currentTab.id, message, function () { });
		});
});


//update icon when you click icon
var toggle = true;
chrome.action.onClicked.addListener(function (tab) {
	toggle = !toggle;
	if (toggle) {
		chrome.action.setBadgeText({ text: 'OFF' });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     files: ['SCRIPT.user.js']
  // });
}
	else {
		chrome.action.setBadgeText({ text: 'ON' });
}
});
