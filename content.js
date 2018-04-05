// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		if( request.message === "clicked_browser_action" ) {
// 			$('head').append('<style>#block-zeus-newsletter-ad-block-signup{display:none !important;}.ad-blocker-custom-blur{filter:none !important;opacity:1 !important}</style>');
// 		}
// 	}
// );


changeToActive = true;
changeToInactive = false;


// https://stackoverflow.com/questions/16921685/change-the-chrome-extension-icon
if(changeToActive) {
	// send message to background script
	chrome.runtime.sendMessage({ "newIconPath" : "img/rw-active.png" });
	$('head').append('<style>#block-zeus-newsletter-ad-block-signup{display:none !important;}.ad-blocker-custom-blur{filter:none !important;opacity:1 !important; pointer-events:auto !important;}</style>');
}

if(changeToInactive) {
	// send message to background script
	chrome.runtime.sendMessage({ "newIconPath" : "img/rw-inactive.png" });
	$('head').append('<style>#block-zeus-newsletter-ad-block-signup{display:none !important;}.ad-blocker-custom-blur{filter:none !important;opacity:1 !important; pointer-events:auto !important;}</style>');
}