/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Homepage":
      return "http://www.annauniv.edu";
  case "Result1":
	return "http://coe1.annauniv.edu";
  case "Result2":
	return "https://coe2.annauniv.edu";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

