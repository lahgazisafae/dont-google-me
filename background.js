chrome.runtime.onInstalled.addListener(function(){

	//why do we have to removeRules and then readd them every time? 
	//is it just in case there is a version upgrade? probably
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){

		chrome.declarativeContent.onPageChanged.addRules([{

			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'developer.chrome.com'}
			})
			],
			//is it possible here to say run options.js? 
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}])

	})


})