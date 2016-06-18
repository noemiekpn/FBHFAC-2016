
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		var para = document.createElement("div");

		para.innerHTML = '\
			<div class="_5n2b _36bx _4-u2  _4-u8 event-container">\
				<div class="_4fhy _52jv">\
					<img src="http://i.imgur.com/voCsxZH.png" id="notification-icon">\
					<div class="_4fhz event-title">Nepal Earthquake, April 25</div>\
					<div class="_4fh- event-subtitle">FACEBOOK BLOOD DROP</div>\
					<div class="_4fhz">\
						<div class="column_2">\
							<div class="_4fhz event-title">Donate when it\'s most needed</div>\
							<div class="_4fhz event-content">Take immediate action to aid victims of tragic events in your area.</div>\
						</div>\
						<div class="column_2">\
							<div class="_4fhz event-title">Donate where it\'s most needed</div>\
							<div class="_4fhz event-content">Know the best location to donate according to your blood type.</div>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="_5n2b _36bx _4-u2  _4-u8 event-container">\
				<div class="_4fhy _52jv message-content">\
					<div class="_4fhz">You appear to be in the area affected by Nepal Earthquake.</div>\
					<div class="_4fhz">There is an urgent for blood donors.</div>\
				</div>\
				<div class="_4fhy _52jv">\
					<button class="uibutton special">Find out how you can help.</button>\
				</div>\
			</div>'
		var element = document.getElementById("stream_pagelet");

		element.parentNode.insertBefore(para,element);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});
