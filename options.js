let toggleScrambleSearch = document.getElementById("toggleSearch")

//isn't it add event listener? 
toggleScrambleSearch.onclick = function(element){

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.executeScript(
			tabs[0].id, 
			{code: console.log("let's see it work")})
	})

}