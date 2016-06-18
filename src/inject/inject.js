
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
					<button class="uibutton special" id="donate_button">Find out how you can help.</button>\
				</div>\
			</div>\
			'

		// var bg = document.createElement("div");
		// bg.innerHTML = '<div id="fake-background"></div>'

		var element = document.getElementById("stream_pagelet");
		var secondElement = document.getElementsByClassName("_li");
		element.parentNode.insertBefore(para,element);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		document.getElementById('donate_button').onclick = function(event) {
			event.preventDefault();
			event.stopPropagation();
			document.body.innerHTML += '<div id="fake-background">\
				<div id="fake-popup">\
					<div id="fake-popup-header">\
						<div id="fake-popup-content">\
							<h1>Who can donate?</h1>\
							<ul>\
								<li>Be and feel healthy</li>\
								<li>Weigh at least 110 pounds</li>\
								<li>Be at least 17 years old</li>\
								<li>Have not donated blood in the last 56 days</li>\
							</ul>\
							<div id="drop_button"><img src="http://i.imgur.com/voCsxZH.png"></div>\
							<p>Ready? Click the drop to begin.</p>\
						</div>\
					</div>\
				</div>\
			</div>'
		}

		document.getElementById('drop_button').click() = function(event) {
			document.getElementById('fake-popup').style.visibility = "hidden";
		}
	}
	}, 10);
});
