chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		var para = document.createElement("div");
		para.innerHTML = '<div class="_4-u2 _3-95 _4fhx _4-u8">\
								<div class="_3-s"><div class="_6a _6b uiPopover" id="u_0_e"><a class="_42ft _42fu _4-s1 _2agf _p _42gx" role="button" href="#" style="max-width:200px;" aria-haspopup="true" aria-expanded="false" rel="toggle" id="u_0_g"><span class="_55pe" style="max-width:186px;"><i class="mrs img sp_mnsLGBPzuoP_2x sx_49614f"></i>Notifications</span><i class="_3-99 img sp_843e1e_2x sx_cd769d"></i></a></div></div>\
								<div class="_4fhy _52jv">\
									<img src="http://orig15.deviantart.net/9b9e/f/2013/185/6/8/682eaa32bcb514ef094d9bc2afd15cbc-d6bzng9.png" style="width:50px;height:50px;">\
									<div class="_4fhz">Nepal Earthquake, April 25</div>\
									<div class="_4fh-">FACEBOOK SAFETY CHECK</div>\
								</div>\
								<div class="_3bor">\
								</div>\
						</div>'
		var element = document.getElementById("contentArea");
		
		element.parentNode.insertBefore(para,element);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});