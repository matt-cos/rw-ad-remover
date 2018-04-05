// // Copyright (c) 2011 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.
// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
	
// 	// Send a message to the active tab
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		var activeTab = tabs[0];
// 		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// 	});

// 	chrome.browserAction.setIcon({
// 		path : "img/rw-active.png"
// 	});
// });



chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// read `newIconPath` from request and read `tab.id` from sender
		chrome.browserAction.setIcon({
			path: request.newIconPath
			// tabId: sender.tab.id
		});
	}
);

// https://developer.chrome.com/extensions/content_scripts