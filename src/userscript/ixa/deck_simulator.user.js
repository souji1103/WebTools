// ==UserScript==
// @name           deck_simulator
// @description    ixa_deck_simulator
// @version        3.0.0
// @namespace      ixa_deck_simulator
// @author         server1-4.souji
// @include        http://*.sengokuixa.jp/card/deck.php*
// @match          http://*.sengokuixa.jp/card/deck.php*
// ==/UserScript==
//

function addJQuery(callback){
	/*
	if(typeof(unsafeWindow.jQuery)!='undefined'){
		callback(unsafeWindow.jQuery);
	}else{
	*/
	var d = document;
	var h = d.getElementsByTagName("head")[0];
	
	
	var c1 = d.createElement("link");
	c1.setAttribute("href", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/themes/dot-luv/jquery-ui.css");
	c1.setAttribute("rel", "stylesheet");
	c1.setAttribute("type", "text/css");
	h.appendChild(c1);
	/*
	var c2 = d.createElement("link");
	c2.setAttribute("href", "https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/basic.css");
	c2.setAttribute("rel", "stylesheet");
	c2.setAttribute("type", "text/css");
	h.appendChild(c2);
	var c3 = d.createElement("link");
	c3.setAttribute("href", "https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/visualize.css");
	c3.setAttribute("rel", "stylesheet");
	c3.setAttribute("type", "text/css");
	h.appendChild(c3);
	
	var c4 = d.createElement("link");
	c4.setAttribute("href", "https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/visualize-dark.css");
	c4.setAttribute("rel", "stylesheet");
	c4.setAttribute("type", "text/css");
	h.appendChild(c4);
	*/
	
	var s2 = d.createElement("script");
	s2.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js");
	
	var s3 = d.createElement("script");
//	s3.setAttribute("src", "https://raw.github.com/filamentgroup/jQuery-Visualize/master/js/visualize.jQuery.js");
	s3.setAttribute("src", "http://ccchart.com/js/ccchart.js");
	
	var s1 = d.createElement("script");
	s1.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
	s1.addEventListener('load', function(){
		s2.addEventListener("load", function(){
			s3.addEventListener("load", function(){
				var s4 = document.createElement("script");
				s4.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery);";
				h.appendChild(s4);
			}, false);
			h.appendChild(s3);
		}, false);
		h.appendChild(s2);
	}, false);
	h.appendChild(s1);
	//}
}

function main($){
	//--- skill ---
//	const Skill = {"@attributes":{"lastupdate":"1340956927"},"skill":[{"@attributes":{"name":"\u69cd\u968a\u9032\u6483","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u69cd\u968a\u8972\u6483","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u5927\u5224\u3076\u308b\u821e","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":{"@attributes":{"rank":"1"},"prob":"12","asc":"5"}},{"@attributes":{"name":"\u306b\u3083\u3093\u5200\u6d41","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":{"@attributes":{"rank":"1"},"prob":"12","asc":"5"}},{"@attributes":{"name":"\u69cd\u968a\u6025\u8972","branch":"\u69cd","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u91d1\u7206 \u69cd\u6483","branch":"\u69cd","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u69cd\u6483\u306e\u771f\u9ac4","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"15.5","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"16","asc":"7"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"8.5"},{"@attributes":{"rank":"7"},"prob":"17","asc":"10"},{"@attributes":{"rank":"8"},"prob":"18","asc":"11.5"},{"@attributes":{"rank":"9"},"prob":"19","asc":"13"},{"@attributes":{"rank":"10"},"prob":"20","asc":"15"}]},{"@attributes":{"name":"\u69cd\u968a\u7a81\u6483","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"12","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u69cd\u968a\u5947\u8972","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u69cd\u968a\u631f\u6483","branch":"\u69cd","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5.0"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u69cd\u968a\u525b\u6483","branch":"\u69cd","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"26.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"27","asc":"12"},{"@attributes":{"rank":"6"},"prob":"28.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"15"},{"@attributes":{"rank":"8"},"prob":"31.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"33","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u69cd\u6483 \u4fee\u7f85","branch":"\u69cd","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["12","3"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12.5","3"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","3"]},{"@attributes":{"rank":"4"},"prob":"14","asc":["14.5","3"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["15","4"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["17","4"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["19","4"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["21","5"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["23","5"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["25","5"]}]},{"@attributes":{"name":"\u59eb\u9b3c\u7121\u53cc","branch":"\u69cd","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["20","13"]},{"@attributes":{"rank":"2"},"prob":"11","asc":["21","13.5"]},{"@attributes":{"rank":"3"},"prob":"12","asc":["22","14"]},{"@attributes":{"rank":"4"},"prob":"13","asc":["23","15"]},{"@attributes":{"rank":"5"},"prob":"14","asc":["24","16"]},{"@attributes":{"rank":"6"},"prob":"15.5","asc":["25.5","17.5"]},{"@attributes":{"rank":"7"},"prob":"17.5","asc":["27.5","19"]},{"@attributes":{"rank":"8"},"prob":"19.5","asc":["29.5","20.5"]},{"@attributes":{"rank":"9"},"prob":"22","asc":["32","22.5"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["35","30"]}]},{"@attributes":{"name":"\u69cd\u968a\u5099\u3048","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u69cd\u968a\u5805\u5b88","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u69cd\u968a\u5b88\u5099","branch":"\u69cd","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u69cd\u968a\u5e03\u9663","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"13"},{"@attributes":{"rank":"6"},"prob":"12","asc":"14"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u69cd\u968a\u5805\u9663","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u69cd\u968a\u5b88\u8b77","branch":"\u69cd","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u69cd\u968a\u5186\u9663","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"26","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"27","asc":"11"},{"@attributes":{"rank":"4"},"prob":"28","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"29","asc":"13"},{"@attributes":{"rank":"6"},"prob":"30.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"32","asc":"15"},{"@attributes":{"rank":"8"},"prob":"34","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"37","asc":"18"},{"@attributes":{"rank":"10"},"prob":"40","asc":"20"}]},{"@attributes":{"name":"\u69cd\u9663\u306e\u6975\u307f","branch":"\u69cd","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"15"},{"@attributes":{"rank":"2"},"prob":"16","asc":"16"},{"@attributes":{"rank":"3"},"prob":"17","asc":"17"},{"@attributes":{"rank":"4"},"prob":"18","asc":"18"},{"@attributes":{"rank":"5"},"prob":"19","asc":"19"},{"@attributes":{"rank":"6"},"prob":"20","asc":"20"},{"@attributes":{"rank":"7"},"prob":"22","asc":"22"},{"@attributes":{"rank":"8"},"prob":"24","asc":"24"},{"@attributes":{"rank":"9"},"prob":"27","asc":"27"},{"@attributes":{"rank":"10"},"prob":"30","asc":"30"}]},{"@attributes":{"name":"\u5f13\u968a\u9032\u6483","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u5f13\u968a\u8972\u6483","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u5f13\u968a\u6025\u8972","branch":"\u5f13","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u91d1\u7206 \u5f13\u6483","branch":"\u5f13","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u5f13\u6483\u306e\u771f\u9ac4","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"15.5","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"16","asc":"7"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"8.5"},{"@attributes":{"rank":"7"},"prob":"17","asc":"10"},{"@attributes":{"rank":"8"},"prob":"18","asc":"11.5"},{"@attributes":{"rank":"9"},"prob":"19","asc":"13"},{"@attributes":{"rank":"10"},"prob":"20","asc":"15"}]},{"@attributes":{"name":"\u5f13\u968a\u7a81\u6483","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"12","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u5f13\u968a\u5947\u8972","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u5f13\u968a\u631f\u6483","branch":"\u5f13","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u5f13\u968a\u525b\u6483","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"26.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"27","asc":"12"},{"@attributes":{"rank":"6"},"prob":"28.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"15"},{"@attributes":{"rank":"8"},"prob":"31.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"33","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u4e09\u77e2\u306e\u795e\u6280","branch":"\u5f13","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"15"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"16"},{"@attributes":{"rank":"3"},"prob":"13","asc":"17"},{"@attributes":{"rank":"4"},"prob":"14.5","asc":"18"},{"@attributes":{"rank":"5"},"prob":"15","asc":"19"},{"@attributes":{"rank":"6"},"prob":"17","asc":"20"},{"@attributes":{"rank":"7"},"prob":"19","asc":"22"},{"@attributes":{"rank":"8"},"prob":"21","asc":"24"},{"@attributes":{"rank":"9"},"prob":"23","asc":"27"},{"@attributes":{"rank":"10"},"prob":"25","asc":"30"}]},{"@attributes":{"name":"\u5f13\u6483\u591c\u53c9","branch":"\u5f13","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["12","3"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12.5","3"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","3"]},{"@attributes":{"rank":"4"},"prob":"14","asc":["14.5","3"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["15","4"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["17","4"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["19","4"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["21","5"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["23","5"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["25","5"]}]},{"@attributes":{"name":"\u5f13\u968a\u5099\u3048","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u5f13\u968a\u5805\u5b88","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u5f13\u968a\u5b88\u5099","branch":"\u5f13","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u5f13\u968a\u5e03\u9663","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"13"},{"@attributes":{"rank":"6"},"prob":"12","asc":"14"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u5f13\u968a\u5805\u9663","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u5f13\u968a\u5b88\u8b77","branch":"\u5f13","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u5f13\u968a\u5186\u9663","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"26","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"27","asc":"11"},{"@attributes":{"rank":"4"},"prob":"28","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"29","asc":"13"},{"@attributes":{"rank":"6"},"prob":"30","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"32","asc":"15"},{"@attributes":{"rank":"8"},"prob":"34","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"37","asc":"18"},{"@attributes":{"rank":"10"},"prob":"40","asc":"20"}]},{"@attributes":{"name":"\u5f13\u9663\u306e\u6975\u307f","branch":"\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"15"},{"@attributes":{"rank":"2"},"prob":"16","asc":"16"},{"@attributes":{"rank":"3"},"prob":"17","asc":"17"},{"@attributes":{"rank":"4"},"prob":"18","asc":"18"},{"@attributes":{"rank":"5"},"prob":"19","asc":"19"},{"@attributes":{"rank":"6"},"prob":"20","asc":"20"},{"@attributes":{"rank":"7"},"prob":"22","asc":"22"},{"@attributes":{"rank":"8"},"prob":"24","asc":"24"},{"@attributes":{"rank":"9"},"prob":"27","asc":"27"},{"@attributes":{"rank":"10"},"prob":"30","asc":"30"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u9032\u6483","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u8972\u6483","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u6025\u8972","branch":"\u99ac","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u91d1\u7206 \u9a0e\u7a81","branch":"\u99ac","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u9a0e\u7a81\u306e\u771f\u9ac4","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"15.5","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"16","asc":"7"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"8.5"},{"@attributes":{"rank":"7"},"prob":"17","asc":"10"},{"@attributes":{"rank":"8"},"prob":"18","asc":"11.5"},{"@attributes":{"rank":"9"},"prob":"19","asc":"13"},{"@attributes":{"rank":"10"},"prob":"20","asc":"15"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u7a81\u6483","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"12.0","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5947\u8972","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u631f\u6483","branch":"\u99ac","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15.0","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16.0","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17.0","asc":"4.0"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20.0","asc":"5.0"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23.0","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25.0","asc":"6.5"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u525b\u6483","branch":"\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"26.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"27","asc":"12"},{"@attributes":{"rank":"6"},"prob":"28.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"15"},{"@attributes":{"rank":"8"},"prob":"31.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"33","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u9a0e\u7a81 \u91d1\u525b","branch":"\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["12","3"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12.5","3"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","3"]},{"@attributes":{"rank":"4"},"prob":"14","asc":["14.5","3"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["15","4"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["17","4"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["19","4"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["21","5"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["23","5"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["25","5"]}]},{"@attributes":{"name":"\u9a0e\u795e\u70c8\u7834","branch":"\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"11","asc":["17","5"]},{"@attributes":{"rank":"3"},"prob":"12","asc":["19","6"]},{"@attributes":{"rank":"4"},"prob":"13","asc":["21","6"]},{"@attributes":{"rank":"5"},"prob":"14","asc":["23","7"]},{"@attributes":{"rank":"6"},"prob":"15","asc":["25","7"]},{"@attributes":{"rank":"7"},"prob":"16","asc":["27","8"]},{"@attributes":{"rank":"8"},"prob":"17","asc":["31","8"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["33","9"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["35","10"]}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5099\u3048","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5805\u5b88","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"5"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"13","asc":"6"},{"@attributes":{"rank":"4"},"prob":"13.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"14","asc":"7"},{"@attributes":{"rank":"6"},"prob":"15","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"16","asc":"8"},{"@attributes":{"rank":"8"},"prob":"17","asc":"8.5"},{"@attributes":{"rank":"9"},"prob":"18.5","asc":"9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"10"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5b88\u5099","branch":"\u99ac","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5e03\u9663","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"13"},{"@attributes":{"rank":"6"},"prob":"12","asc":"14"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5805\u9663","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5b88\u8b77","branch":"\u99ac","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u9a0e\u99ac\u968a\u5186\u9663","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"26","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"27","asc":"11"},{"@attributes":{"rank":"4"},"prob":"28","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"29","asc":"13"},{"@attributes":{"rank":"6"},"prob":"30.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"32","asc":"15"},{"@attributes":{"rank":"8"},"prob":"34","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"37","asc":"18"},{"@attributes":{"rank":"10"},"prob":"40","asc":"20"}]},{"@attributes":{"name":"\u99ac\u9663\u306e\u6975\u307f","branch":"\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"15"},{"@attributes":{"rank":"2"},"prob":"16","asc":"16"},{"@attributes":{"rank":"3"},"prob":"17","asc":"17"},{"@attributes":{"rank":"4"},"prob":"18","asc":"18"},{"@attributes":{"rank":"5"},"prob":"19","asc":"19"},{"@attributes":{"rank":"6"},"prob":"20","asc":"20"},{"@attributes":{"rank":"7"},"prob":"22","asc":"22"},{"@attributes":{"rank":"8"},"prob":"24","asc":"24"},{"@attributes":{"rank":"9"},"prob":"27","asc":"27"},{"@attributes":{"rank":"10"},"prob":"30","asc":"30"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u9032\u6483","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"4","asc":"10"},{"@attributes":{"rank":"2"},"prob":"5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"5.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"6","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"6","asc":"12"},{"@attributes":{"rank":"6"},"prob":"6.5","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"6.5","asc":"13"},{"@attributes":{"rank":"8"},"prob":"7","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"7","asc":"14"},{"@attributes":{"rank":"10"},"prob":"8","asc":"15"}]},{"@attributes":{"name":"\u7832\u6483\u306e\u771f\u9ac4","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"15.5","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"16","asc":"7"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"8.5"},{"@attributes":{"rank":"7"},"prob":"17","asc":"10"},{"@attributes":{"rank":"8"},"prob":"18","asc":"11.5"},{"@attributes":{"rank":"9"},"prob":"19","asc":"13"},{"@attributes":{"rank":"10"},"prob":"20","asc":"15"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u7a81\u6483","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"8","asc":"10"},{"@attributes":{"rank":"2"},"prob":"8","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"8.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"9","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"9.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"10","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"10.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"11","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"11.5","asc":"18"},{"@attributes":{"rank":"10"},"prob":"12","asc":"20"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5947\u8972","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"16","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"20","asc":"8"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"23","asc":"10"},{"@attributes":{"rank":"10"},"prob":"25","asc":"12"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u631f\u6483","branch":"\u7832","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"11","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"12","asc":"4"},{"@attributes":{"rank":"5"},"prob":"12.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"13.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"15","asc":"5"},{"@attributes":{"rank":"8"},"prob":"16.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"18","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"6.5"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u525b\u6483","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"10"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"11"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"22","asc":"12"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"15"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"28","asc":"18"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20"}]},{"@attributes":{"name":"\u9244\u7532\u6c34\u8ecd","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["12","3"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12.5","3"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","3"]},{"@attributes":{"rank":"4"},"prob":"14.5","asc":["15","3"]},{"@attributes":{"rank":"5"},"prob":"16","asc":["16","4"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["18","5"]},{"@attributes":{"rank":"7"},"prob":"20","asc":["20","5"]},{"@attributes":{"rank":"8"},"prob":"22","asc":["23","7"]},{"@attributes":{"rank":"9"},"prob":"24","asc":["24","7"]},{"@attributes":{"rank":"10"},"prob":"26","asc":["25","7"]}]},{"@attributes":{"name":"\u7832\u6483 \u7f85\u5239","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["12","3"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12.5","3"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","3"]},{"@attributes":{"rank":"4"},"prob":"14","asc":["14.5","3"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["15","4"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["17","4"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["19","4"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["21","5"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["23","5"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["25","5"]}]},{"@attributes":{"name":"\u91e3\u308a\u91ce\u4f0f \u9b3c","branch":"\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"15"},{"@attributes":{"rank":"2"},"prob":"6","asc":"16"},{"@attributes":{"rank":"3"},"prob":"7","asc":"17"},{"@attributes":{"rank":"4"},"prob":"8","asc":"18"},{"@attributes":{"rank":"5"},"prob":"9","asc":"19"},{"@attributes":{"rank":"6"},"prob":"11","asc":"20"},{"@attributes":{"rank":"7"},"prob":"13","asc":"22"},{"@attributes":{"rank":"8"},"prob":"15","asc":"24"},{"@attributes":{"rank":"9"},"prob":"17","asc":"27"},{"@attributes":{"rank":"10"},"prob":"20","asc":"30"}]},{"@attributes":{"name":"\u4e09\u6bb5\u6483 \u795e\u901f","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":["5","10"]},{"@attributes":{"rank":"2"},"prob":"30","asc":["6","10"]},{"@attributes":{"rank":"3"},"prob":"30","asc":["7","11"]},{"@attributes":{"rank":"4"},"prob":"30","asc":["8","12"]},{"@attributes":{"rank":"5"},"prob":"30","asc":["10","13"]},{"@attributes":{"rank":"6"},"prob":"34","asc":["10","13"]},{"@attributes":{"rank":"7"},"prob":"38","asc":["10","13"]},{"@attributes":{"rank":"8"},"prob":"42","asc":["10","13"]},{"@attributes":{"rank":"9"},"prob":"46","asc":["10","14"]},{"@attributes":{"rank":"10"},"prob":"50","asc":["12","15"]}]},{"@attributes":{"name":"\u4e09\u6bb5\u6483 \u6fc0\u70c8","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"26","asc":["16","5.5"]},{"@attributes":{"rank":"3"},"prob":"27","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"28.5","asc":["18","6"]},{"@attributes":{"rank":"5"},"prob":"30","asc":["19","7"]},{"@attributes":{"rank":"6\/td>\n\t\t\t\t\t\t\t\t\t\t"},"prob":"32","asc":["21","7"]},{"@attributes":{"rank":"7"},"prob":"35","asc":["23","8"]},{"@attributes":{"rank":"8"},"prob":"37.5","asc":["25","8"]},{"@attributes":{"rank":"9"},"prob":"40.5","asc":["27","9"]},{"@attributes":{"rank":"10"},"prob":"45","asc":["30","10"]}]},{"@attributes":{"name":"\u9b54\u738b\u4e09\u6bb5\u6483","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["15","10"]},{"@attributes":{"rank":"2"},"prob":"26","asc":["16","10"]},{"@attributes":{"rank":"3"},"prob":"26","asc":["17","11"]},{"@attributes":{"rank":"4"},"prob":"27","asc":["19","12"]},{"@attributes":{"rank":"5"},"prob":"28","asc":["20","13"]},{"@attributes":{"rank":"6"},"prob":"29","asc":["21","14"]},{"@attributes":{"rank":"7"},"prob":"30","asc":["23","15"]},{"@attributes":{"rank":"8"},"prob":"31","asc":["25","16"]},{"@attributes":{"rank":"9"},"prob":"33","asc":["27","18"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["30","20"]}]},{"@attributes":{"name":"\u7e70\u629c\u5341\u5b57\u7d0b","branch":"\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"31","asc":["16","5"]},{"@attributes":{"rank":"3"},"prob":"31","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"32","asc":["19","7"]},{"@attributes":{"rank":"5"},"prob":"33","asc":["20","8"]},{"@attributes":{"rank":"6"},"prob":"34","asc":["21","9"]},{"@attributes":{"rank":"7"},"prob":"35","asc":["23","10"]},{"@attributes":{"rank":"8"},"prob":"36","asc":["25","11"]},{"@attributes":{"rank":"9"},"prob":"38","asc":["27","13"]},{"@attributes":{"rank":"10"},"prob":"40","asc":["30","15"]}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5099\u3048","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"4","asc":"10"},{"@attributes":{"rank":"2"},"prob":"5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"5.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"6","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"6","asc":"12"},{"@attributes":{"rank":"6"},"prob":"6.5","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"6.5","asc":"13"},{"@attributes":{"rank":"8"},"prob":"7","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"7","asc":"14"},{"@attributes":{"rank":"10"},"prob":"8","asc":"15"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5e03\u9663","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"8","asc":"10"},{"@attributes":{"rank":"2"},"prob":"8","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"8.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"9","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"9.5","asc":"13"},{"@attributes":{"rank":"6"},"prob":"10","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"10.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"11","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"11.5","asc":"18"},{"@attributes":{"rank":"10"},"prob":"12","asc":"20"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5805\u9663","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"16","asc":"6"},{"@attributes":{"rank":"4"},"prob":"16.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"20","asc":"8"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"23","asc":"10"},{"@attributes":{"rank":"10"},"prob":"25","asc":"12"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5b88\u8b77","branch":"\u7832","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"11","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"12","asc":"4"},{"@attributes":{"rank":"5"},"prob":"12.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"13.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"15","asc":"5.0"},{"@attributes":{"rank":"8"},"prob":"16.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"18","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"20","asc":"6.5"}]},{"@attributes":{"name":"\u9244\u7832\u968a\u5186\u9663","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"10"},{"@attributes":{"rank":"2"},"prob":"21","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"22","asc":"11"},{"@attributes":{"rank":"4"},"prob":"23","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"24","asc":"13"},{"@attributes":{"rank":"6"},"prob":"25.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"27","asc":"15"},{"@attributes":{"rank":"8"},"prob":"29","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"32","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u7832\u9663\u306e\u6975\u307f","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"15"},{"@attributes":{"rank":"2"},"prob":"16","asc":"16"},{"@attributes":{"rank":"3"},"prob":"17","asc":"17"},{"@attributes":{"rank":"4"},"prob":"18","asc":"18"},{"@attributes":{"rank":"5"},"prob":"19","asc":"19"},{"@attributes":{"rank":"6"},"prob":"20","asc":"20"},{"@attributes":{"rank":"7"},"prob":"22","asc":"22"},{"@attributes":{"rank":"8"},"prob":"24","asc":"24"},{"@attributes":{"rank":"9"},"prob":"27","asc":"27"},{"@attributes":{"rank":"10"},"prob":"30","asc":"30"}]},{"@attributes":{"name":"\u91e3\u308a\u91ce\u4f0f \u771f","branch":"\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"20"},{"@attributes":{"rank":"2"},"prob":"21","asc":"21"},{"@attributes":{"rank":"3"},"prob":"22","asc":"22"},{"@attributes":{"rank":"4"},"prob":"23","asc":"23"},{"@attributes":{"rank":"5"},"prob":"24","asc":"24"},{"@attributes":{"rank":"6"},"prob":"26","asc":"26"},{"@attributes":{"rank":"7"},"prob":"28","asc":"28"},{"@attributes":{"rank":"8"},"prob":"30","asc":"30"},{"@attributes":{"rank":"9"},"prob":"32","asc":"32"},{"@attributes":{"rank":"10"},"prob":"35","asc":"35"}]},{"@attributes":{"name":"\u5175\u5668\u9032\u6483","branch":"\u5668","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u5175\u5668\u7a81\u6483","branch":"\u5668","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"12","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u57ce\u7834\u308a","branch":"\u5668","ratio":"false","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"10"},{"@attributes":{"rank":"2"},"prob":"6","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"6.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"7","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"7","asc":"12"},{"@attributes":{"rank":"6"},"prob":"8","asc":"12.5"},{"@attributes":{"rank":"7"},"prob":"8","asc":"13"},{"@attributes":{"rank":"8"},"prob":"9","asc":"13.5"},{"@attributes":{"rank":"9"},"prob":"9","asc":"14"},{"@attributes":{"rank":"10"},"prob":"10","asc":"15"}]},{"@attributes":{"name":"\u9632\u58c1\u7834\u308a","branch":"\u5668","ratio":"true","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u91d1\u7206 \u7832\u6483","branch":"\u5668","ratio":"true","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"3"},{"@attributes":{"rank":"2"},"prob":"8","asc":"3.1"},{"@attributes":{"rank":"3"},"prob":"9","asc":"3.2"},{"@attributes":{"rank":"4"},"prob":"10","asc":"3.4"},{"@attributes":{"rank":"5"},"prob":"11","asc":"3.6"},{"@attributes":{"rank":"6"},"prob":"12","asc":"3.8"},{"@attributes":{"rank":"7"},"prob":"13","asc":"4"},{"@attributes":{"rank":"8"},"prob":"14","asc":"4.2"},{"@attributes":{"rank":"9"},"prob":"15","asc":"4.5"},{"@attributes":{"rank":"10"},"prob":"16","asc":"5"}]},{"@attributes":{"name":"\u57ce\u7815\u304d","branch":"\u5668","ratio":"false","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"12"},{"@attributes":{"rank":"6"},"prob":"12","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u9632\u58c1\u7815\u304d","branch":"\u5668","ratio":"false","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"21","asc":"6"},{"@attributes":{"rank":"4"},"prob":"21.5","asc":"6.5"},{"@attributes":{"rank":"5"},"prob":"22.5","asc":"7"},{"@attributes":{"rank":"6"},"prob":"23.5","asc":"7.5"},{"@attributes":{"rank":"7"},"prob":"25","asc":"8"},{"@attributes":{"rank":"8"},"prob":"26.5","asc":"9"},{"@attributes":{"rank":"9"},"prob":"28","asc":"10"},{"@attributes":{"rank":"10"},"prob":"30","asc":"12"}]},{"@attributes":{"name":"\u56fd\u8cab\u304d","branch":"\u5668","ratio":"true","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"3.5"},{"@attributes":{"rank":"2"},"prob":"15.5","asc":"3.6"},{"@attributes":{"rank":"3"},"prob":"16","asc":"3.8"},{"@attributes":{"rank":"4"},"prob":"17","asc":"4"},{"@attributes":{"rank":"5"},"prob":"17.5","asc":"4.2"},{"@attributes":{"rank":"6"},"prob":"18.5","asc":"4.6"},{"@attributes":{"rank":"7"},"prob":"20","asc":"5"},{"@attributes":{"rank":"8"},"prob":"21.5","asc":"5.4"},{"@attributes":{"rank":"9"},"prob":"23","asc":"5.9"},{"@attributes":{"rank":"10"},"prob":"25","asc":"6.5"}]},{"@attributes":{"name":"\u57ce\u5d29\u3057","branch":"\u5668","ratio":"false","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"26.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"27","asc":"12"},{"@attributes":{"rank":"6"},"prob":"28.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"15"},{"@attributes":{"rank":"8"},"prob":"31.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"33","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u90ed\u7834\u57ce","branch":"\u5668","ratio":"false","type":"\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"27","asc":"12"},{"@attributes":{"rank":"5"},"prob":"27.5","asc":"12.5"},{"@attributes":{"rank":"6"},"prob":"29.5","asc":"14"},{"@attributes":{"rank":"7"},"prob":"31","asc":"15.5"},{"@attributes":{"rank":"8"},"prob":"32","asc":"17"},{"@attributes":{"rank":"9"},"prob":"34","asc":"18.5"},{"@attributes":{"rank":"10"},"prob":"36","asc":"20"}]},{"@attributes":{"name":"\u57ce\u5d29 \u5948\u843d","branch":"\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["3","12"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["3","12.5"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["3","13"]},{"@attributes":{"rank":"4"},"prob":"14","asc":["3","14.5"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["4","15"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["4","17"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["4","19"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["5","21"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["5","23"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["5","25"]}]},{"@attributes":{"name":"\u8f5f\u97f3 \u7121\u9e7f","branch":"\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["15","13"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["16","13.5"]},{"@attributes":{"rank":"3"},"prob":"17","asc":["17","14"]},{"@attributes":{"rank":"4"},"prob":"18","asc":["18","15"]},{"@attributes":{"rank":"5"},"prob":"19","asc":["19","16"]},{"@attributes":{"rank":"6"},"prob":"21","asc":["21","17.5"]},{"@attributes":{"rank":"7"},"prob":"23","asc":["23","19"]},{"@attributes":{"rank":"8"},"prob":"25","asc":["25","20.5"]},{"@attributes":{"rank":"9"},"prob":"27","asc":["27","22.5"]},{"@attributes":{"rank":"10"},"prob":"30","asc":["30","25"]}]},{"@attributes":{"name":"\u5175\u5668\u5e03\u9663","branch":"\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"4"},"prob":"11","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"13"},{"@attributes":{"rank":"6"},"prob":"12","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"15"},{"@attributes":{"rank":"8"},"prob":"13","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"14","asc":"18"},{"@attributes":{"rank":"10"},"prob":"15","asc":"20"}]},{"@attributes":{"name":"\u4e09\u77e2\u306e\u6559\u3048","branch":"\u69cd\u5f13","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["11","2"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["11.5","2"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["12","2.5"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["13.5","3"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["15","3"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["16.5","3.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["18","4"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["20","5"]}]},{"@attributes":{"name":"\u4e57\u308a\u5d29\u3057","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["11","2"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["11.5","2"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["12","2.5"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["13.5","3"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["15","3"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["16.5","3.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["18","4"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["20","5"]}]},{"@attributes":{"name":"\u5544\u6728\u9ce5","branch":"\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["11","2"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["11.5","2"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["12","2.5"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["13.5","3"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["15","3"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["16.5","3.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["18","4"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["20","5"]}]},{"@attributes":{"name":"\u4e09\u6bb5\u6483\u3061","branch":"\u5f13\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["11","2"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["11.5","2"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["12","2.5"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["13.5","3"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["15","3"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["16.5","3.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["18","4"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["20","5"]}]},{"@attributes":{"name":"\u706b\u7adc\u306e\u8853","branch":"\u5f13\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","5"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10","5.5"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["10.5","6"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["10.5","6.5"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["11","7"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["11.5","8.5"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["12","10"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["13","11.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["14","13"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["15","15"]}]},{"@attributes":{"name":"\u5922\u60f3\u5bb4\u821e","branch":"\u5f13\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["10","5"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["10","5.5"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["10.5","6"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["10.5","6.5"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["11","7"]},{"@attributes":{"rank":"6"},"prob":"13.5","asc":["11.5","8.5"]},{"@attributes":{"rank":"7"},"prob":"15","asc":["12","10"]},{"@attributes":{"rank":"8"},"prob":"16.5","asc":["13","11.5"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["14","13"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["15","15"]}]},{"@attributes":{"name":"\u70ae\u70d9\u306e\u8a08","branch":"\u5f13\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":["10","10"]},{"@attributes":{"rank":"2"},"prob":"6","asc":["10.5","10"]},{"@attributes":{"rank":"3"},"prob":"7","asc":["11","10.5"]},{"@attributes":{"rank":"4"},"prob":"7.5","asc":["12","10.5"]},{"@attributes":{"rank":"5"},"prob":"8","asc":["12.5","11"]},{"@attributes":{"rank":"6"},"prob":"8.5","asc":["13.5","11.5"]},{"@attributes":{"rank":"7"},"prob":"9","asc":["15","12"]},{"@attributes":{"rank":"8"},"prob":"10","asc":["16.5","13"]},{"@attributes":{"rank":"9"},"prob":"12","asc":["18","14"]},{"@attributes":{"rank":"10"},"prob":"15","asc":["20","15"]}]},{"@attributes":{"name":"\u7345\u5b50\u596e\u8fc5","branch":"\u69cd\u5f13","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":["15","2"]},{"@attributes":{"rank":"2"},"prob":"10.5","asc":["16","2"]},{"@attributes":{"rank":"3"},"prob":"11","asc":["17","2"]},{"@attributes":{"rank":"4"},"prob":"11.5","asc":["18","2"]},{"@attributes":{"rank":"5"},"prob":"12","asc":["19","2.5"]},{"@attributes":{"rank":"6"},"prob":"12.5","asc":["20","3"]},{"@attributes":{"rank":"7"},"prob":"13","asc":["21.5","3"]},{"@attributes":{"rank":"8"},"prob":"13.5","asc":["22.5","3.5"]},{"@attributes":{"rank":"9"},"prob":"14","asc":["23.5","4"]},{"@attributes":{"rank":"10"},"prob":"15","asc":["25","5"]}]},{"@attributes":{"name":"\u69cd\u9663 \u5f27\u6708","branch":"\u69cd\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"26","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"26","asc":["11","3"]},{"@attributes":{"rank":"4"},"prob":"27","asc":["11.5","3"]},{"@attributes":{"rank":"5"},"prob":"27","asc":["12","4"]},{"@attributes":{"rank":"6"},"prob":"29","asc":["13.5","4"]},{"@attributes":{"rank":"7"},"prob":"30","asc":["15","5"]},{"@attributes":{"rank":"8"},"prob":"32","asc":["16.5","6"]},{"@attributes":{"rank":"9"},"prob":"33","asc":["18","8"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["20","10"]}]},{"@attributes":{"name":"\u65cb\u98a8\u8f5f\u6483","branch":"\u99ac\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"21","asc":"16"},{"@attributes":{"rank":"3"},"prob":"22","asc":"17"},{"@attributes":{"rank":"4"},"prob":"23","asc":"18"},{"@attributes":{"rank":"5"},"prob":"24","asc":"19"},{"@attributes":{"rank":"6"},"prob":"25","asc":"20"},{"@attributes":{"rank":"7"},"prob":"27","asc":"22"},{"@attributes":{"rank":"8"},"prob":"29","asc":"24"},{"@attributes":{"rank":"9"},"prob":"32","asc":"27"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u69cd\u5f13\u731b\u8972","branch":"\u69cd\u5f13","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"5"},{"@attributes":{"rank":"2"},"prob":"5.5","asc":"5.4"},{"@attributes":{"rank":"3"},"prob":"6","asc":"5.8"},{"@attributes":{"rank":"4"},"prob":"6.5","asc":"6.2"},{"@attributes":{"rank":"5"},"prob":"8","asc":"6.6"},{"@attributes":{"rank":"6"},"prob":"9","asc":"7"},{"@attributes":{"rank":"7"},"prob":"10","asc":"7.5"},{"@attributes":{"rank":"8"},"prob":"11","asc":"8"},{"@attributes":{"rank":"9"},"prob":"12","asc":"8.5"},{"@attributes":{"rank":"10"},"prob":"15","asc":"9"}]},{"@attributes":{"name":"\u9b3c\u523a","branch":"\u69cd\u99ac","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"5"},{"@attributes":{"rank":"2"},"prob":"5.5","asc":"5.4"},{"@attributes":{"rank":"3"},"prob":"6","asc":"5.8"},{"@attributes":{"rank":"4"},"prob":"6.5","asc":"6.2"},{"@attributes":{"rank":"5"},"prob":"8","asc":"6.6"},{"@attributes":{"rank":"6"},"prob":"9","asc":"7"},{"@attributes":{"rank":"7"},"prob":"10","asc":"7.5"},{"@attributes":{"rank":"8"},"prob":"11","asc":"8"},{"@attributes":{"rank":"9"},"prob":"12","asc":"8.5"},{"@attributes":{"rank":"10"},"prob":"15","asc":"9"}]},{"@attributes":{"name":"\u516d\u84ee\u9b3c\u7a81\u304d","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"22","asc":"12"},{"@attributes":{"rank":"2"},"prob":"22.5","asc":"12.5"},{"@attributes":{"rank":"3"},"prob":"23","asc":"13"},{"@attributes":{"rank":"4"},"prob":"23.5","asc":"13.5"},{"@attributes":{"rank":"5"},"prob":"24","asc":"14"},{"@attributes":{"rank":"6"},"prob":"25","asc":"14.5"},{"@attributes":{"rank":"7"},"prob":"26","asc":"16"},{"@attributes":{"rank":"8"},"prob":"27","asc":"17"},{"@attributes":{"rank":"9"},"prob":"28.5","asc":"19"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20.5"}]},{"@attributes":{"name":"\u5730\u9ec4\u516b\u5e61","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"10"},{"@attributes":{"rank":"2"},"prob":"25.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"26","asc":"11"},{"@attributes":{"rank":"4"},"prob":"26.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"27","asc":"12"},{"@attributes":{"rank":"6"},"prob":"28.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"15"},{"@attributes":{"rank":"8"},"prob":"31.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"33","asc":"18"},{"@attributes":{"rank":"10"},"prob":"35","asc":"20"}]},{"@attributes":{"name":"\u6ec5 \u4e5d\u982d\u9f8d","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"4","asc":"19"},{"@attributes":{"rank":"2"},"prob":"5","asc":"21"},{"@attributes":{"rank":"3"},"prob":"6","asc":"22"},{"@attributes":{"rank":"4"},"prob":"7","asc":"23"},{"@attributes":{"rank":"5"},"prob":"8","asc":"24"},{"@attributes":{"rank":"6"},"prob":"9","asc":"25"},{"@attributes":{"rank":"7"},"prob":"11","asc":"26"},{"@attributes":{"rank":"8"},"prob":"13","asc":"27"},{"@attributes":{"rank":"9"},"prob":"15","asc":"29"},{"@attributes":{"rank":"10"},"prob":"19","asc":"33"}]},{"@attributes":{"name":"\u4e09\u6bb5\u6483 \u70c8\u706b","branch":"\u69cd\u7832","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"5"},{"@attributes":{"rank":"2"},"prob":"5.5","asc":"5.4"},{"@attributes":{"rank":"3"},"prob":"6","asc":"5.8"},{"@attributes":{"rank":"4"},"prob":"6.5","asc":"6.2"},{"@attributes":{"rank":"5"},"prob":"8","asc":"6.6"},{"@attributes":{"rank":"6"},"prob":"9","asc":"7"},{"@attributes":{"rank":"7"},"prob":"10","asc":"7.5"},{"@attributes":{"rank":"8"},"prob":"11","asc":"8"},{"@attributes":{"rank":"9"},"prob":"12","asc":"8.5"},{"@attributes":{"rank":"10"},"prob":"15","asc":"9"}]},{"@attributes":{"name":"\u8db3\u8efd\u8ecd\u6cd5","branch":"\u69cd\u5668","ratio":"true","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"5"},{"@attributes":{"rank":"2"},"prob":"5.5","asc":"5.4"},{"@attributes":{"rank":"3"},"prob":"6","asc":"5.8"},{"@attributes":{"rank":"4"},"prob":"6.5","asc":"6.2"},{"@attributes":{"rank":"5"},"prob":"8","asc":"6.4"},{"@attributes":{"rank":"6"},"prob":"9","asc":"6.6"},{"@attributes":{"rank":"7"},"prob":"10","asc":"7"},{"@attributes":{"rank":"8"},"prob":"11","asc":"7.5"},{"@attributes":{"rank":"9"},"prob":"12","asc":"8"},{"@attributes":{"rank":"10"},"prob":"15","asc":"9"}]},{"@attributes":{"name":"\u6bba\u751f\u95a2\u767d","branch":"\u69cd\u5f13","ratio":"true","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":["5","0.5"]},{"@attributes":{"rank":"2"},"prob":"5.5","asc":["6","1"]},{"@attributes":{"rank":"3"},"prob":"6","asc":["7","1.5"]},{"@attributes":{"rank":"4"},"prob":"6.5","asc":["7.5","2"]},{"@attributes":{"rank":"5"},"prob":"8","asc":["8","2.5"]},{"@attributes":{"rank":"6"},"prob":"9","asc":["9","3"]},{"@attributes":{"rank":"7"},"prob":"10","asc":["9.5","3.5"]},{"@attributes":{"rank":"8"},"prob":"11","asc":["10","4"]},{"@attributes":{"rank":"9"},"prob":"12","asc":["11","4.5"]},{"@attributes":{"rank":"10"},"prob":"15","asc":["12","5"]}]},{"@attributes":{"name":"\u6b66\u904b\u9577\u4e45","branch":"\u69cd\u7832","ratio":"true","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":["5","2"]},{"@attributes":{"rank":"2"},"prob":"6","asc":["5.4","2"]},{"@attributes":{"rank":"3"},"prob":"6","asc":["5.8","2.5"]},{"@attributes":{"rank":"4"},"prob":"7","asc":["6.2","2.5"]},{"@attributes":{"rank":"5"},"prob":"8","asc":["6.6","3"]},{"@attributes":{"rank":"6"},"prob":"9","asc":["7","3.5"]},{"@attributes":{"rank":"7"},"prob":"10","asc":["7.5","4"]},{"@attributes":{"rank":"8"},"prob":"11","asc":["8","4.5"]},{"@attributes":{"rank":"9"},"prob":"12","asc":["8.5","4.5"]},{"@attributes":{"rank":"10"},"prob":"15","asc":["9","5"]}]},{"@attributes":{"name":"\u9244\u7832\u8853\u660e\u5149","branch":"\u5f13\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"17","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"18","asc":["11","2"]},{"@attributes":{"rank":"3"},"prob":"19","asc":["12","2"]},{"@attributes":{"rank":"4"},"prob":"20","asc":["13","2"]},{"@attributes":{"rank":"5"},"prob":"21","asc":["14","2.5"]},{"@attributes":{"rank":"6"},"prob":"23","asc":["15","3"]},{"@attributes":{"rank":"7"},"prob":"25","asc":["16","3"]},{"@attributes":{"rank":"8"},"prob":"27","asc":["18","3.5"]},{"@attributes":{"rank":"9"},"prob":"29","asc":["20","4"]},{"@attributes":{"rank":"10"},"prob":"32","asc":["23","5"]}]},{"@attributes":{"name":"\u864e\u7259\u731b\u6483","branch":"\u69cd\u5f13\u99ac\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"23","asc":"10"},{"@attributes":{"rank":"2"},"prob":"23.5","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"24","asc":"11"},{"@attributes":{"rank":"4"},"prob":"24.5","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"25","asc":"12"},{"@attributes":{"rank":"6"},"prob":"26.5","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"28","asc":"15"},{"@attributes":{"rank":"8"},"prob":"29.5","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"32","asc":"18"},{"@attributes":{"rank":"10"},"prob":"33","asc":"20"}]},{"@attributes":{"name":"\u8eca\u61f8\u308a \u767d\u72d0","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"15"},{"@attributes":{"rank":"2"},"prob":"6","asc":"16"},{"@attributes":{"rank":"3"},"prob":"7","asc":"17"},{"@attributes":{"rank":"4"},"prob":"8","asc":"18"},{"@attributes":{"rank":"5"},"prob":"9","asc":"19"},{"@attributes":{"rank":"6"},"prob":"11","asc":"20"},{"@attributes":{"rank":"7"},"prob":"13","asc":"22"},{"@attributes":{"rank":"8"},"prob":"15","asc":"24"},{"@attributes":{"rank":"9"},"prob":"17","asc":"27"},{"@attributes":{"rank":"10"},"prob":"20","asc":"30"}]},{"@attributes":{"name":"\u6226\u83ef\u767d\u864e","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"12"},{"@attributes":{"rank":"2"},"prob":"17","asc":"13"},{"@attributes":{"rank":"3"},"prob":"19","asc":"14"},{"@attributes":{"rank":"4"},"prob":"21","asc":"15"},{"@attributes":{"rank":"5"},"prob":"23","asc":"16"},{"@attributes":{"rank":"6"},"prob":"25","asc":"17"},{"@attributes":{"rank":"7"},"prob":"26","asc":"18.5"},{"@attributes":{"rank":"8"},"prob":"27","asc":"20"},{"@attributes":{"rank":"9"},"prob":"29","asc":"22"},{"@attributes":{"rank":"10"},"prob":"30","asc":"25"}]},{"@attributes":{"name":"\u624b\u8ca0\u3044\u7345\u5b50","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":["15","1"]},{"@attributes":{"rank":"2"},"prob":"6","asc":["16","2"]},{"@attributes":{"rank":"3"},"prob":"7","asc":["17","3"]},{"@attributes":{"rank":"4"},"prob":"8","asc":["18","4"]},{"@attributes":{"rank":"5"},"prob":"9","asc":["19","5"]},{"@attributes":{"rank":"6"},"prob":"11","asc":["20","6"]},{"@attributes":{"rank":"7"},"prob":"13","asc":["22","7"]},{"@attributes":{"rank":"8"},"prob":"15","asc":["24","8"]},{"@attributes":{"rank":"9"},"prob":"17","asc":["27","9"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["30","10"]}]},{"@attributes":{"name":"\u4e94\u5c71\u7121\u53cc","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"6","asc":["18","1"]},{"@attributes":{"rank":"2"},"prob":"7","asc":["19","2"]},{"@attributes":{"rank":"3"},"prob":"8","asc":["20","3"]},{"@attributes":{"rank":"4"},"prob":"9","asc":["21","4"]},{"@attributes":{"rank":"5"},"prob":"10","asc":["22","5"]},{"@attributes":{"rank":"6"},"prob":"11","asc":["23","6"]},{"@attributes":{"rank":"7"},"prob":"12","asc":["25","7"]},{"@attributes":{"rank":"8"},"prob":"15","asc":["26","8"]},{"@attributes":{"rank":"9"},"prob":"18","asc":["28","9"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["30","10"]}]},{"@attributes":{"name":"\u98a8\u6d41\u5d50\u821e","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"12"},{"@attributes":{"rank":"2"},"prob":"12","asc":"13"},{"@attributes":{"rank":"3"},"prob":"13","asc":"14"},{"@attributes":{"rank":"4"},"prob":"15","asc":"15"},{"@attributes":{"rank":"5"},"prob":"15","asc":"16"},{"@attributes":{"rank":"6"},"prob":"17","asc":"17"},{"@attributes":{"rank":"7"},"prob":"18","asc":"18.5"},{"@attributes":{"rank":"8"},"prob":"20","asc":"20"},{"@attributes":{"rank":"9"},"prob":"22","asc":"22"},{"@attributes":{"rank":"10"},"prob":"25","asc":"25"}]},{"@attributes":{"name":"\u525b\u52c7\u7121\u53cc","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"12"},{"@attributes":{"rank":"2"},"prob":"16","asc":"13"},{"@attributes":{"rank":"3"},"prob":"17","asc":"14"},{"@attributes":{"rank":"4"},"prob":"18","asc":"15"},{"@attributes":{"rank":"5"},"prob":"19","asc":"16"},{"@attributes":{"rank":"6"},"prob":"21","asc":"17"},{"@attributes":{"rank":"7"},"prob":"23","asc":"18.5"},{"@attributes":{"rank":"8"},"prob":"25","asc":"20"},{"@attributes":{"rank":"9"},"prob":"27","asc":"22"},{"@attributes":{"rank":"10"},"prob":"30","asc":"25"}]},{"@attributes":{"name":"\u4e5d\u66dc\u6fc0\u6602","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"14"},{"@attributes":{"rank":"2"},"prob":"13","asc":"15"},{"@attributes":{"rank":"3"},"prob":"14","asc":"16"},{"@attributes":{"rank":"4"},"prob":"15","asc":"17"},{"@attributes":{"rank":"5"},"prob":"16","asc":"18"},{"@attributes":{"rank":"6"},"prob":"17","asc":"19"},{"@attributes":{"rank":"7"},"prob":"18","asc":"21"},{"@attributes":{"rank":"8"},"prob":"20","asc":"23"},{"@attributes":{"rank":"9"},"prob":"22","asc":"25"},{"@attributes":{"rank":"10"},"prob":"25","asc":"27"}]},{"@attributes":{"name":"\u8c6a\u52c7\u7121\u6bd4","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["16","5"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"14.5","asc":["18","6"]},{"@attributes":{"rank":"5"},"prob":"15","asc":["19","7"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["20","7"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["22","8"]},{"@attributes":{"rank":"8"},"prob":"21","asc":["24","8"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["27","9"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["30","10"]}]},{"@attributes":{"name":"\u9df9\u8996\u72fc\u6b69","branch":"\u69cd\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["16","5"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"14.5","asc":["18","6"]},{"@attributes":{"rank":"5"},"prob":"16","asc":["20","7"]},{"@attributes":{"rank":"6"},"prob":"17","asc":["20","7"]},{"@attributes":{"rank":"7"},"prob":"20","asc":["23","8"]},{"@attributes":{"rank":"8"},"prob":"22","asc":["25","8"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["28","9"]},{"@attributes":{"rank":"10"},"prob":"26","asc":["30","10"]}]},{"@attributes":{"name":"\u8ecd\u795e\u5f37\u8972","branch":"\u5f13\u99ac\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":["12","2"]},{"@attributes":{"rank":"2"},"prob":"6","asc":["13","2"]},{"@attributes":{"rank":"3"},"prob":"7","asc":["14","3"]},{"@attributes":{"rank":"4"},"prob":"8","asc":["15","3"]},{"@attributes":{"rank":"5"},"prob":"9","asc":["16","3"]},{"@attributes":{"rank":"6"},"prob":"11","asc":["17","4"]},{"@attributes":{"rank":"7"},"prob":"13","asc":["18.5","4"]},{"@attributes":{"rank":"8"},"prob":"15","asc":["20","5"]},{"@attributes":{"rank":"9"},"prob":"17","asc":["22","5"]},{"@attributes":{"rank":"10"},"prob":"20","asc":["25","5"]}]},{"@attributes":{"name":"\u9b3c\u795e\u8f5f\u96f7","branch":"\u69cd\u99ac\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":["11","5"]},{"@attributes":{"rank":"2"},"prob":"12.5","asc":["12","5"]},{"@attributes":{"rank":"3"},"prob":"13","asc":["13","6"]},{"@attributes":{"rank":"4"},"prob":"13.5","asc":["15","6"]},{"@attributes":{"rank":"5"},"prob":"14.5","asc":["16","7"]},{"@attributes":{"rank":"6"},"prob":"15.5","asc":["18","7"]},{"@attributes":{"rank":"7"},"prob":"17","asc":["20","8"]},{"@attributes":{"rank":"8"},"prob":"19","asc":["22","8"]},{"@attributes":{"rank":"9"},"prob":"22","asc":["24","9"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["27","10"]}]},{"@attributes":{"name":"\u731b\u864e\u5486\u54ee","branch":"\u69cd\u99ac\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["1","20"]},{"@attributes":{"rank":"2"},"prob":"18","asc":["2","22"]},{"@attributes":{"rank":"3"},"prob":"21","asc":["3","24"]},{"@attributes":{"rank":"4"},"prob":"24","asc":["4","26"]},{"@attributes":{"rank":"5"},"prob":"27","asc":["5","29"]},{"@attributes":{"rank":"6"},"prob":"30","asc":["6","32"]},{"@attributes":{"rank":"7"},"prob":"34","asc":["7","34"]},{"@attributes":{"rank":"8"},"prob":"38","asc":["8","36"]},{"@attributes":{"rank":"9"},"prob":"42","asc":["9","38"]},{"@attributes":{"rank":"10"},"prob":"45","asc":["10","40"]}]},{"@attributes":{"name":"\u822c\u82e5\u5f37\u8972","branch":"\u69cd\u99ac\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"13","asc":["2","20"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["3","22"]},{"@attributes":{"rank":"3"},"prob":"19","asc":["4","24"]},{"@attributes":{"rank":"4"},"prob":"22","asc":["5","26"]},{"@attributes":{"rank":"5"},"prob":"25","asc":["6","29"]},{"@attributes":{"rank":"6"},"prob":"28","asc":["7","32"]},{"@attributes":{"rank":"7"},"prob":"31","asc":["9","34"]},{"@attributes":{"rank":"8"},"prob":"34","asc":["10","36"]},{"@attributes":{"rank":"9"},"prob":"37","asc":["11","38"]},{"@attributes":{"rank":"10"},"prob":"40","asc":["12","40"]}]},{"@attributes":{"name":"\u9b3c\u8b00 \u56fd\u7815","branch":"\u4e0a\u7d1a\u5668*","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["5","13"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["5","13.5"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["6","14"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["6","15"]},{"@attributes":{"rank":"5"},"prob":"24","asc":["7","16"]},{"@attributes":{"rank":"6"},"prob":"25.5","asc":["7","17.5"]},{"@attributes":{"rank":"7"},"prob":"27","asc":["8","19"]},{"@attributes":{"rank":"8"},"prob":"29.5","asc":["8","20.5"]},{"@attributes":{"rank":"9"},"prob":"32","asc":["9","22.5"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["10","25"]}]},{"@attributes":{"name":"\u8d64\u8aa0\u596e\u8fc5","branch":"\u4e0a\u7d1a\u5668*","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"19","asc":["6","12"]},{"@attributes":{"rank":"2"},"prob":"20","asc":["6","12.5"]},{"@attributes":{"rank":"3"},"prob":"21","asc":["7","13"]},{"@attributes":{"rank":"4"},"prob":"22","asc":["7","14"]},{"@attributes":{"rank":"5"},"prob":"23","asc":["8","15"]},{"@attributes":{"rank":"6"},"prob":"24","asc":["8","16.5"]},{"@attributes":{"rank":"7"},"prob":"26","asc":["9","18"]},{"@attributes":{"rank":"8"},"prob":"28","asc":["9","19"]},{"@attributes":{"rank":"9"},"prob":"30","asc":["10","21.5"]},{"@attributes":{"rank":"10"},"prob":{},"asc":[{"@attributes":{"type":"\u653b"}},{"@attributes":{"type":"\u58ca"}}]}]},{"@attributes":{"name":"\u8b00\u795e","branch":"\u5f13\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":["10","15"]},{"@attributes":{"rank":"2"},"prob":"31","asc":["10.5","16"]},{"@attributes":{"rank":"3"},"prob":"32","asc":["11","17"]},{"@attributes":{"rank":"4"},"prob":"33","asc":["12","18"]},{"@attributes":{"rank":"5"},"prob":"35","asc":["12.5","19"]},{"@attributes":{"rank":"6"},"prob":"37","asc":["13.5","21"]},{"@attributes":{"rank":"7"},"prob":"40","asc":["15","23"]},{"@attributes":{"rank":"8"},"prob":"43","asc":["16.5","25"]},{"@attributes":{"rank":"9"},"prob":"46","asc":["18","27"]},{"@attributes":{"rank":"10"},"prob":"50","asc":["20","30"]}]},{"@attributes":{"name":"\u9a4d\u5c06\u5947\u7565","branch":"\u99ac\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["13","10"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["13.5","10.5"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["14","11"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["15","12"]},{"@attributes":{"rank":"5"},"prob":"24","asc":["16","12.5"]},{"@attributes":{"rank":"6"},"prob":"25.5","asc":["17.5","13.5"]},{"@attributes":{"rank":"7"},"prob":"27","asc":["19","15"]},{"@attributes":{"rank":"8"},"prob":"29.5","asc":["20.5","16.5"]},{"@attributes":{"rank":"9"},"prob":"32","asc":["22.5","18"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["25","20"]}]},{"@attributes":{"name":"\u733f\u591c\u53c9","branch":"\u99ac\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["16","5"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["18","6"]},{"@attributes":{"rank":"5"},"prob":"24","asc":["19","7"]},{"@attributes":{"rank":"6"},"prob":"25.5","asc":["21","7"]},{"@attributes":{"rank":"7"},"prob":"27","asc":["23","8"]},{"@attributes":{"rank":"8"},"prob":"29.5","asc":["25","8"]},{"@attributes":{"rank":"9"},"prob":"32","asc":["27","9"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["30","10"]}]},{"@attributes":{"name":"\u59eb\u9b3c\u6226\u821e","branch":"\u69cd\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["20","10"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["21","11"]},{"@attributes":{"rank":"3"},"prob":"21","asc":["21","12"]},{"@attributes":{"rank":"4"},"prob":"22","asc":["22","14"]},{"@attributes":{"rank":"5"},"prob":"23","asc":["23","15"]},{"@attributes":{"rank":"6"},"prob":"24","asc":["24","17"]},{"@attributes":{"rank":"7"},"prob":"25","asc":["25","18"]},{"@attributes":{"rank":"8"},"prob":"26","asc":["26","20"]},{"@attributes":{"rank":"9"},"prob":"28","asc":["28","22"]},{"@attributes":{"rank":"10"},"prob":"30","asc":["30","25"]}]},{"@attributes":{"name":"\u98a8\u6797\u706b\u5c71","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["15","5"]},{"@attributes":{"rank":"2"},"prob":"26","asc":["16","5.5"]},{"@attributes":{"rank":"3"},"prob":"27","asc":["17","6"]},{"@attributes":{"rank":"4"},"prob":"28.5","asc":["18","6.5"]},{"@attributes":{"rank":"5"},"prob":"30","asc":["19","7"]},{"@attributes":{"rank":"6"},"prob":"32","asc":["21","8"]},{"@attributes":{"rank":"7"},"prob":"35","asc":["23","10"]},{"@attributes":{"rank":"8"},"prob":"37.5","asc":["25","11.5"]},{"@attributes":{"rank":"9"},"prob":"40.5","asc":["27","13"]},{"@attributes":{"rank":"10"},"prob":"45","asc":["30","15"]}]},{"@attributes":{"name":"\u5fe0\u52c7\u7fa9\u70c8","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["15","10"]},{"@attributes":{"rank":"2"},"prob":"27","asc":["17","11"]},{"@attributes":{"rank":"3"},"prob":"29","asc":["19","12"]},{"@attributes":{"rank":"4"},"prob":"31","asc":["21","13"]},{"@attributes":{"rank":"5"},"prob":"33","asc":["22","14"]},{"@attributes":{"rank":"6"},"prob":"33.5","asc":["23","15.5"]},{"@attributes":{"rank":"7"},"prob":"34","asc":["24","17"]},{"@attributes":{"rank":"8"},"prob":"36","asc":["26","18"]},{"@attributes":{"rank":"9"},"prob":"38","asc":["28","19"]},{"@attributes":{"rank":"10"},"prob":"40","asc":["30","20"]}]},{"@attributes":{"name":"\u7121\u53cc\u7345\u5b50","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":["15","15"]},{"@attributes":{"rank":"2"},"prob":"31","asc":["16","16"]},{"@attributes":{"rank":"3"},"prob":"31","asc":["17","17"]},{"@attributes":{"rank":"4"},"prob":"32","asc":["19","18"]},{"@attributes":{"rank":"5"},"prob":"33","asc":["20","19"]},{"@attributes":{"rank":"6"},"prob":"35","asc":["21","21"]},{"@attributes":{"rank":"7"},"prob":"37","asc":["23","24"]},{"@attributes":{"rank":"8"},"prob":"39","asc":["25","27"]},{"@attributes":{"rank":"9"},"prob":"42","asc":["27","31"]},{"@attributes":{"rank":"10"},"prob":"45","asc":["30","35"]}]},{"@attributes":{"name":"\u6d45\u4e95\u4e00\u6587\u5b57","branch":"\u5f13\u99ac\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":["20","10"]},{"@attributes":{"rank":"2"},"prob":"31","asc":["21","11"]},{"@attributes":{"rank":"3"},"prob":"32","asc":["22","13"]},{"@attributes":{"rank":"4"},"prob":"33","asc":["23","15"]},{"@attributes":{"rank":"5"},"prob":"34","asc":["24","17"]},{"@attributes":{"rank":"6"},"prob":"35","asc":["26","19"]},{"@attributes":{"rank":"7"},"prob":"37","asc":["28","21"]},{"@attributes":{"rank":"8"},"prob":"39","asc":["30","24"]},{"@attributes":{"rank":"9"},"prob":{},"asc":[{"@attributes":{"type":"\u653b"}},{"@attributes":{"type":"\u58ca"}}]},{"@attributes":{"rank":"10"},"prob":"45","asc":["35","30"]}]},{"@attributes":{"name":"\u4e09\u6cb3\u9b42","branch":"\u69cd\u5f13\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["13","13"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["13.5","13.5"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["14","14"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["15","15"]},{"@attributes":{"rank":"5"},"prob":"24","asc":["16","16"]},{"@attributes":{"rank":"6"},"prob":"25.5","asc":["17.5","17.5"]},{"@attributes":{"rank":"7"},"prob":"27","asc":["19","19"]},{"@attributes":{"rank":"8"},"prob":"29.5","asc":["20.5","20.5"]},{"@attributes":{"rank":"9"},"prob":"32","asc":["22.5","22.5"]},{"@attributes":{"rank":"10"},"prob":"35","asc":["25","25"]}]},{"@attributes":{"name":"\u8987\u9053 \u4e0d\u5982\u5e30","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["15","10"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["17","12"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["19","15"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["21","18"]},{"@attributes":{"rank":"5"},"prob":"24","asc":["22","20"]},{"@attributes":{"rank":"6"},"prob":"25","asc":["23","21.5"]},{"@attributes":{"rank":"7"},"prob":"26","asc":["24","23"]},{"@attributes":{"rank":"8"},"prob":"27","asc":["26","25"]},{"@attributes":{"rank":"9"},"prob":"28","asc":["28","28"]},{"@attributes":{"rank":"10"},"prob":"30","asc":["30","30"]}]},{"@attributes":{"name":"\u72ec\u773c\u7adc\u5486\u54ee","branch":"\u99ac\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["20","10"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["21","10.5"]},{"@attributes":{"rank":"3"},"prob":"17","asc":["22","11"]},{"@attributes":{"rank":"4"},"prob":"18","asc":["23","12"]},{"@attributes":{"rank":"5"},"prob":"19","asc":["24","13"]},{"@attributes":{"rank":"6"},"prob":"21","asc":["25.5","14"]},{"@attributes":{"rank":"7"},"prob":"23","asc":["27.5","15"]},{"@attributes":{"rank":"8"},"prob":"25","asc":["29.5","16.5"]},{"@attributes":{"rank":"9"},"prob":"27","asc":["32","18"]},{"@attributes":{"rank":"10"},"prob":"30","asc":["35","20"]}]},{"@attributes":{"name":"\u592a\u865a\u56fd\u5d29\u3057","branch":"\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["20","15"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["21","16"]},{"@attributes":{"rank":"3"},"prob":"16","asc":["22","17"]},{"@attributes":{"rank":"4"},"prob":"17","asc":["23","18"]},{"@attributes":{"rank":"5"},"prob":"17","asc":["24","19"]},{"@attributes":{"rank":"6"},"prob":"18","asc":["26","20"]},{"@attributes":{"rank":"7"},"prob":"19","asc":["28","22"]},{"@attributes":{"rank":"8"},"prob":"20","asc":["30","24"]},{"@attributes":{"rank":"9"},"prob":"22","asc":["32","27"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["35","30"]}]},{"@attributes":{"name":"\u795e\u5c06","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"21","asc":"16"},{"@attributes":{"rank":"3"},"prob":"22","asc":"17"},{"@attributes":{"rank":"4"},"prob":"23","asc":"18"},{"@attributes":{"rank":"5"},"prob":"24","asc":"19"},{"@attributes":{"rank":"6"},"prob":"22.5","asc":"21"},{"@attributes":{"rank":"7"},"prob":"27","asc":"23"},{"@attributes":{"rank":"8"},"prob":"29.5","asc":"25"},{"@attributes":{"rank":"9"},"prob":"32","asc":"27"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u795e\u7b97\u9b3c\u8b00","branch":"\u69cd\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["5","15"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["5","16"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["6","17"]},{"@attributes":{"rank":"4"},"prob":"24","asc":["6","18"]},{"@attributes":{"rank":"5"},"prob":"26","asc":["7","19"]},{"@attributes":{"rank":"6"},"prob":"29","asc":["7","21"]},{"@attributes":{"rank":"7"},"prob":"32","asc":["8","23"]},{"@attributes":{"rank":"8"},"prob":"36","asc":["8","25"]},{"@attributes":{"rank":"9"},"prob":"40","asc":["9","27"]},{"@attributes":{"rank":"10"},"prob":"45","asc":["10","30"]}]},{"@attributes":{"name":"\u795e\u7b97\u9b3c\u8b00 \u6ec5","branch":"\u69cd\u5f13\u5668","ratio":"true","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":["10","10"]},{"@attributes":{"rank":"2"},"prob":"26","asc":["10","10.5"]},{"@attributes":{"rank":"3"},"prob":"27","asc":["10","11"]},{"@attributes":{"rank":"4"},"prob":"29","asc":["10","11.5"]},{"@attributes":{"rank":"5"},"prob":"31","asc":["10","12"]},{"@attributes":{"rank":"6"},"prob":"34","asc":["10","13"]},{"@attributes":{"rank":"7"},"prob":"37","asc":["10","14"]},{"@attributes":{"rank":"8"},"prob":"40","asc":["10","15"]},{"@attributes":{"rank":"9"},"prob":"44","asc":["10","16"]},{"@attributes":{"rank":"10"},"prob":"50","asc":["10","18"]}]},{"@attributes":{"name":"\u72ec\u773c\u7adc","branch":"\u99ac\u7832\u5668","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["10","5"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["11","5"]},{"@attributes":{"rank":"3"},"prob":"17","asc":["12","5"]},{"@attributes":{"rank":"4"},"prob":"18","asc":["13","5"]},{"@attributes":{"rank":"5"},"prob":"19","asc":["14","5"]},{"@attributes":{"rank":"6"},"prob":"21","asc":["15.5","5"]},{"@attributes":{"rank":"7"},"prob":"23","asc":["17.5","5"]},{"@attributes":{"rank":"8"},"prob":"25","asc":["19.5","5"]},{"@attributes":{"rank":"9"},"prob":"27","asc":["22","5"]},{"@attributes":{"rank":"10"},"prob":"30","asc":["25","5"]}]},{"@attributes":{"name":"\u7834\u8ecd\u661f","branch":"\u99ac\u7832\u5668","ratio":"true","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":["10","4"]},{"@attributes":{"rank":"2"},"prob":"21","asc":["11","4"]},{"@attributes":{"rank":"3"},"prob":"22","asc":["12","5"]},{"@attributes":{"rank":"4"},"prob":"23","asc":["12","5"]},{"@attributes":{"rank":"5"},"prob":"25","asc":["13","5.5"]},{"@attributes":{"rank":"6"},"prob":"27","asc":["14","5.5"]},{"@attributes":{"rank":"7"},"prob":"30","asc":["14","6"]},{"@attributes":{"rank":"8"},"prob":"32","asc":["15","6"]},{"@attributes":{"rank":"9"},"prob":"36","asc":["16","7"]},{"@attributes":{"rank":"10"},"prob":"40","asc":["18","8"]}]},{"@attributes":{"name":"\u69cd\u887e","branch":"\u69cd\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"10"},{"@attributes":{"rank":"2"},"prob":"16","asc":"11"},{"@attributes":{"rank":"3"},"prob":"17","asc":"12"},{"@attributes":{"rank":"4"},"prob":"18","asc":"13"},{"@attributes":{"rank":"5"},"prob":"19","asc":"14"},{"@attributes":{"rank":"6"},"prob":"20.5","asc":"15.5"},{"@attributes":{"rank":"7"},"prob":"22","asc":"17.5"},{"@attributes":{"rank":"8"},"prob":"24","asc":"19.5"},{"@attributes":{"rank":"9"},"prob":"27","asc":"22"},{"@attributes":{"rank":"10"},"prob":"30","asc":"25"}]},{"@attributes":{"name":"\u5343\u6a39\u631f\u6483\u9663","branch":"\u69cd\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"12"},{"@attributes":{"rank":"2"},"prob":"18","asc":"13"},{"@attributes":{"rank":"3"},"prob":"20","asc":"14"},{"@attributes":{"rank":"4"},"prob":"22","asc":"15"},{"@attributes":{"rank":"5"},"prob":"24","asc":"16"},{"@attributes":{"rank":"6"},"prob":"26","asc":"17"},{"@attributes":{"rank":"7"},"prob":"28","asc":"19"},{"@attributes":{"rank":"8"},"prob":"30","asc":"22"},{"@attributes":{"rank":"9"},"prob":"32","asc":"25"},{"@attributes":{"rank":"10"},"prob":"35","asc":"28"}]},{"@attributes":{"name":"\u5f13\u99ac\u69cb\u3048","branch":"\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"10"},{"@attributes":{"rank":"2"},"prob":"16","asc":"11"},{"@attributes":{"rank":"3"},"prob":"17","asc":"12"},{"@attributes":{"rank":"4"},"prob":"18","asc":"13"},{"@attributes":{"rank":"5"},"prob":"19","asc":"14"},{"@attributes":{"rank":"6"},"prob":"20.5","asc":"15.5"},{"@attributes":{"rank":"7"},"prob":"22","asc":"17.5"},{"@attributes":{"rank":"8"},"prob":"24","asc":"19.5"},{"@attributes":{"rank":"9"},"prob":"27","asc":"22"},{"@attributes":{"rank":"10"},"prob":"30","asc":"25"}]},{"@attributes":{"name":"\u5f13\u9663 \u4e0b\u308a\u85e4","branch":"\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"10"},{"@attributes":{"rank":"2"},"prob":"22","asc":"11"},{"@attributes":{"rank":"3"},"prob":"24","asc":"12"},{"@attributes":{"rank":"4"},"prob":"26","asc":"13"},{"@attributes":{"rank":"5"},"prob":"28","asc":"14"},{"@attributes":{"rank":"6"},"prob":"30","asc":"15"},{"@attributes":{"rank":"7"},"prob":"32","asc":"16"},{"@attributes":{"rank":"8"},"prob":"34","asc":"19"},{"@attributes":{"rank":"9"},"prob":"36","asc":"22"},{"@attributes":{"rank":"10"},"prob":"40","asc":"25"}]},{"@attributes":{"name":"\u65e5\u7f6e\u6d41","branch":"\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"18","asc":"11"},{"@attributes":{"rank":"2"},"prob":"20","asc":"12"},{"@attributes":{"rank":"3"},"prob":"22","asc":"13"},{"@attributes":{"rank":"4"},"prob":"24","asc":"14"},{"@attributes":{"rank":"5"},"prob":"26","asc":"15"},{"@attributes":{"rank":"6"},"prob":"28","asc":"16.5"},{"@attributes":{"rank":"7"},"prob":"30","asc":"18"},{"@attributes":{"rank":"8"},"prob":{},"asc":{"@attributes":{"type":"\u9632"}}},{"@attributes":{"rank":"9"},"prob":{},"asc":{"@attributes":{"type":"\u9632"}}},{"@attributes":{"rank":"10"},"prob":"38","asc":"27"}]},{"@attributes":{"name":"\u77e2\u96e8\u5099\u3048","branch":"\u5f13\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"10"},{"@attributes":{"rank":"2"},"prob":"16","asc":"11"},{"@attributes":{"rank":"3"},"prob":"17","asc":"12"},{"@attributes":{"rank":"4"},"prob":"18","asc":"13"},{"@attributes":{"rank":"5"},"prob":"19","asc":"14"},{"@attributes":{"rank":"6"},"prob":"20.5","asc":"15.5"},{"@attributes":{"rank":"7"},"prob":"22","asc":"17.5"},{"@attributes":{"rank":"8"},"prob":"24","asc":"19.5"},{"@attributes":{"rank":"9"},"prob":"27","asc":"22"},{"@attributes":{"rank":"10"},"prob":"30","asc":"25"}]},{"@attributes":{"name":"\u9244\u7532\u9663","branch":"\u69cd\u5f13","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"10"},{"@attributes":{"rank":"2"},"prob":"16","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"17","asc":"11"},{"@attributes":{"rank":"4"},"prob":"18","asc":"12.5"},{"@attributes":{"rank":"5"},"prob":"19","asc":"13"},{"@attributes":{"rank":"6"},"prob":"21","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"23","asc":"15"},{"@attributes":{"rank":"8"},"prob":"24","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"27","asc":"18"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20"}]},{"@attributes":{"name":"\u571f\u58c1\u306e\u8853","branch":"\u5f13\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"15"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"16"},{"@attributes":{"rank":"3"},"prob":"10.5","asc":"17"},{"@attributes":{"rank":"4"},"prob":"11","asc":"18"},{"@attributes":{"rank":"5"},"prob":"11.5","asc":"19"},{"@attributes":{"rank":"6"},"prob":"12","asc":"20"},{"@attributes":{"rank":"7"},"prob":"12.5","asc":"22"},{"@attributes":{"rank":"8"},"prob":"13","asc":"24"},{"@attributes":{"rank":"9"},"prob":"14","asc":"27"},{"@attributes":{"rank":"10"},"prob":"15","asc":"30"}]},{"@attributes":{"name":"\u516b\u54ab\u306e\u69cb\u3048","branch":"\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"12","asc":"11"},{"@attributes":{"rank":"3"},"prob":"14","asc":"12"},{"@attributes":{"rank":"4"},"prob":"15","asc":"13"},{"@attributes":{"rank":"5"},"prob":"17","asc":"14"},{"@attributes":{"rank":"6"},"prob":"19","asc":"15"},{"@attributes":{"rank":"7"},"prob":"22","asc":"16"},{"@attributes":{"rank":"8"},"prob":"24","asc":"18"},{"@attributes":{"rank":"9"},"prob":"27","asc":"19"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20"}]},{"@attributes":{"name":"\u91e3\u74f6\u6483\u3061","branch":"\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"10"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"11"},{"@attributes":{"rank":"3"},"prob":"13.5","asc":"12"},{"@attributes":{"rank":"4"},"prob":"14.5","asc":"13"},{"@attributes":{"rank":"5"},"prob":"15.5","asc":"14"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"15.5"},{"@attributes":{"rank":"7"},"prob":"18","asc":"17.5"},{"@attributes":{"rank":"8"},"prob":"20","asc":"19.5"},{"@attributes":{"rank":"9"},"prob":"22","asc":"22"},{"@attributes":{"rank":"10"},"prob":"25","asc":"25"}]},{"@attributes":{"name":"\u7948\u7977\u306e\u6975\u307f","branch":"\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"20"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"22"},{"@attributes":{"rank":"3"},"prob":"11","asc":"24"},{"@attributes":{"rank":"4"},"prob":"11.5","asc":"26"},{"@attributes":{"rank":"5"},"prob":"12","asc":"28"},{"@attributes":{"rank":"6"},"prob":"13.5","asc":"30"},{"@attributes":{"rank":"7"},"prob":"15","asc":"32"},{"@attributes":{"rank":"8"},"prob":"16.5","asc":"34"},{"@attributes":{"rank":"9"},"prob":"18","asc":"36"},{"@attributes":{"rank":"10"},"prob":"20","asc":"40"}]},{"@attributes":{"name":"\u8056\u306a\u308b\u7948\u308a","branch":"\u5f13\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"12","asc":"15"},{"@attributes":{"rank":"2"},"prob":"12.5","asc":"16"},{"@attributes":{"rank":"3"},"prob":"13.5","asc":"17"},{"@attributes":{"rank":"4"},"prob":"14.5","asc":"18"},{"@attributes":{"rank":"5"},"prob":"15.5","asc":"19"},{"@attributes":{"rank":"6"},"prob":"16.5","asc":"20"},{"@attributes":{"rank":"7"},"prob":"18","asc":"21"},{"@attributes":{"rank":"8"},"prob":"20","asc":"22"},{"@attributes":{"rank":"9"},"prob":"22","asc":"23"},{"@attributes":{"rank":"10"},"prob":"25","asc":"25"}]},{"@attributes":{"name":"\u5f3e\u5e55\u9632\u58c1\u9663","branch":"\u5f13\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"15"},{"@attributes":{"rank":"2"},"prob":"6","asc":"16"},{"@attributes":{"rank":"3"},"prob":"7","asc":"17"},{"@attributes":{"rank":"4"},"prob":"8","asc":"18"},{"@attributes":{"rank":"5"},"prob":"9","asc":"20"},{"@attributes":{"rank":"6"},"prob":"10","asc":"22"},{"@attributes":{"rank":"7"},"prob":"12","asc":"24"},{"@attributes":{"rank":"8"},"prob":"14","asc":"26"},{"@attributes":{"rank":"9"},"prob":"17","asc":"28"},{"@attributes":{"rank":"10"},"prob":"20","asc":"30"}]},{"@attributes":{"name":"\u7d44\u6483\u3061","branch":"\u5f13\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"20"},{"@attributes":{"rank":"2"},"prob":"6","asc":"21"},{"@attributes":{"rank":"3"},"prob":"7","asc":"22"},{"@attributes":{"rank":"4"},"prob":"8","asc":"23"},{"@attributes":{"rank":"5"},"prob":"9","asc":"24"},{"@attributes":{"rank":"6"},"prob":"10.5","asc":"25.5"},{"@attributes":{"rank":"7"},"prob":"12","asc":"27.5"},{"@attributes":{"rank":"8"},"prob":"14.5","asc":"29.5"},{"@attributes":{"rank":"9"},"prob":"17","asc":"32"},{"@attributes":{"rank":"10"},"prob":"20","asc":"35"}]},{"@attributes":{"name":"\u8b00\u5c06\u638c\u63e1","branch":"\u5f13\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"25"},{"@attributes":{"rank":"2"},"prob":"21","asc":"26"},{"@attributes":{"rank":"3"},"prob":"22","asc":"27"},{"@attributes":{"rank":"4"},"prob":"23","asc":"28"},{"@attributes":{"rank":"5"},"prob":"24","asc":"29"},{"@attributes":{"rank":"6"},"prob":"25","asc":"30"},{"@attributes":{"rank":"7"},"prob":"27","asc":"32"},{"@attributes":{"rank":"8"},"prob":"29","asc":"34"},{"@attributes":{"rank":"9"},"prob":"32","asc":"37"},{"@attributes":{"rank":"10"},"prob":"35","asc":"40"}]},{"@attributes":{"name":"\u771f\u7530\u4e38","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"10"},{"@attributes":{"rank":"2"},"prob":"10.5","asc":"11"},{"@attributes":{"rank":"3"},"prob":"11","asc":"12"},{"@attributes":{"rank":"4"},"prob":"11.5","asc":"14"},{"@attributes":{"rank":"5"},"prob":"12","asc":"16"},{"@attributes":{"rank":"6"},"prob":"12.5","asc":"18"},{"@attributes":{"rank":"7"},"prob":"13","asc":"21"},{"@attributes":{"rank":"8"},"prob":"13.5","asc":"24"},{"@attributes":{"rank":"9"},"prob":"14","asc":"27"},{"@attributes":{"rank":"10"},"prob":"15","asc":"30"}]},{"@attributes":{"name":"\u6226\u9663 \u5343\u9ce5","branch":"\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"15"},{"@attributes":{"rank":"2"},"prob":"26","asc":"16"},{"@attributes":{"rank":"3"},"prob":"27","asc":"17"},{"@attributes":{"rank":"4"},"prob":"28","asc":"19"},{"@attributes":{"rank":"5"},"prob":"30","asc":"20"},{"@attributes":{"rank":"6"},"prob":"32","asc":"22"},{"@attributes":{"rank":"7"},"prob":"35","asc":"24"},{"@attributes":{"rank":"8"},"prob":"38","asc":"26"},{"@attributes":{"rank":"9"},"prob":"41","asc":"28"},{"@attributes":{"rank":"10"},"prob":"45","asc":"30"}]},{"@attributes":{"name":"\u516b\u54ab\u70cf","branch":"\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"21","asc":"16"},{"@attributes":{"rank":"3"},"prob":"22","asc":"17"},{"@attributes":{"rank":"4"},"prob":"23","asc":"19"},{"@attributes":{"rank":"5"},"prob":"24","asc":"20"},{"@attributes":{"rank":"6"},"prob":"26","asc":"22"},{"@attributes":{"rank":"7"},"prob":"28","asc":"24"},{"@attributes":{"rank":"8"},"prob":"30","asc":"26"},{"@attributes":{"rank":"9"},"prob":"32","asc":"28"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u7832\u9663 \u83d6\u84b2","branch":"\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"20"},{"@attributes":{"rank":"2"},"prob":"27","asc":"22"},{"@attributes":{"rank":"3"},"prob":"29","asc":"24"},{"@attributes":{"rank":"4"},"prob":"31","asc":"26"},{"@attributes":{"rank":"5"},"prob":"33","asc":"28"},{"@attributes":{"rank":"6"},"prob":"35","asc":"30"},{"@attributes":{"rank":"7"},"prob":"36","asc":"32"},{"@attributes":{"rank":"8"},"prob":"37","asc":"33"},{"@attributes":{"rank":"9"},"prob":"38","asc":"34"},{"@attributes":{"rank":"10"},"prob":"40","asc":"35"}]},{"@attributes":{"name":"\u65e5\u672c\u4e00\u306e\u5175","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"15"},{"@attributes":{"rank":"2"},"prob":"12","asc":"17"},{"@attributes":{"rank":"3"},"prob":"14","asc":"19"},{"@attributes":{"rank":"4"},"prob":"16","asc":"21"},{"@attributes":{"rank":"5"},"prob":"18","asc":"23"},{"@attributes":{"rank":"6"},"prob":"20","asc":"25"},{"@attributes":{"rank":"7"},"prob":"22","asc":"27"},{"@attributes":{"rank":"8"},"prob":"23","asc":"30"},{"@attributes":{"rank":"9"},"prob":"24","asc":"32"},{"@attributes":{"rank":"10"},"prob":"25","asc":"35"}]},{"@attributes":{"name":"\u71d5\u8fd4\u3057","branch":"\u69cd\u5f13\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"20"},{"@attributes":{"rank":"2"},"prob":"26","asc":"22"},{"@attributes":{"rank":"3"},"prob":"27","asc":"24"},{"@attributes":{"rank":"4"},"prob":"28","asc":"25"},{"@attributes":{"rank":"5"},"prob":"30","asc":"27"},{"@attributes":{"rank":"6"},"prob":"32","asc":"29"},{"@attributes":{"rank":"7"},"prob":"35","asc":"33"},{"@attributes":{"rank":"8"},"prob":"38","asc":"35"},{"@attributes":{"rank":"9"},"prob":"41","asc":"37"},{"@attributes":{"rank":"10"},"prob":"45","asc":"40"}]},{"@attributes":{"name":"\u731b\u864e\u543c\u9663","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"20"},{"@attributes":{"rank":"2"},"prob":"21","asc":"21"},{"@attributes":{"rank":"3"},"prob":"22","asc":"22"},{"@attributes":{"rank":"4"},"prob":"23","asc":"23"},{"@attributes":{"rank":"5"},"prob":"24","asc":"25"},{"@attributes":{"rank":"6"},"prob":"26","asc":"27"},{"@attributes":{"rank":"7"},"prob":"28","asc":"30"},{"@attributes":{"rank":"8"},"prob":"30","asc":"33"},{"@attributes":{"rank":"9"},"prob":"32","asc":"36"},{"@attributes":{"rank":"10"},"prob":"35","asc":"40"}]},{"@attributes":{"name":"\u541b\u81e3\u8c4a\u697d","branch":"\u5f13\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"24"},{"@attributes":{"rank":"2"},"prob":"6","asc":"25"},{"@attributes":{"rank":"3"},"prob":"6","asc":"26"},{"@attributes":{"rank":"4"},"prob":"7","asc":"27"},{"@attributes":{"rank":"5"},"prob":"8","asc":"29"},{"@attributes":{"rank":"6"},"prob":"9","asc":"31"},{"@attributes":{"rank":"7"},"prob":"10","asc":"33"},{"@attributes":{"rank":"8"},"prob":"12","asc":"35"},{"@attributes":{"rank":"9"},"prob":"13","asc":"37"},{"@attributes":{"rank":"10"},"prob":"15","asc":"40"}]},{"@attributes":{"name":"\u80cc\u6c34\u4e4b\u9663","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"21"},{"@attributes":{"rank":"2"},"prob":"8","asc":"22"},{"@attributes":{"rank":"3"},"prob":"9","asc":"23"},{"@attributes":{"rank":"4"},"prob":"10","asc":"24"},{"@attributes":{"rank":"5"},"prob":"11","asc":"26"},{"@attributes":{"rank":"6"},"prob":"12","asc":"28"},{"@attributes":{"rank":"7"},"prob":"13","asc":"30"},{"@attributes":{"rank":"8"},"prob":"15","asc":"32"},{"@attributes":{"rank":"9"},"prob":"17","asc":"34"},{"@attributes":{"rank":"10"},"prob":"20","asc":"37"}]},{"@attributes":{"name":"\u6226\u570b\u4e0b\u514b\u4e0a","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"8","asc":"22"},{"@attributes":{"rank":"2"},"prob":"9","asc":"23"},{"@attributes":{"rank":"3"},"prob":"10","asc":"24"},{"@attributes":{"rank":"4"},"prob":"11","asc":"25"},{"@attributes":{"rank":"5"},"prob":"12","asc":"27"},{"@attributes":{"rank":"6"},"prob":"13","asc":"29"},{"@attributes":{"rank":"7"},"prob":{},"asc":{"@attributes":{"type":"\u9632"}}},{"@attributes":{"rank":"8"},"prob":"16","asc":"33"},{"@attributes":{"rank":"9"},"prob":"18","asc":"35"},{"@attributes":{"rank":"10"},"prob":"20","asc":"40"}]},{"@attributes":{"name":"\u9a0e\u5c04 \u72ed\u9593\u77e2","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"23","asc":"16"},{"@attributes":{"rank":"2"},"prob":"24","asc":"18"},{"@attributes":{"rank":"3"},"prob":"25","asc":"19"},{"@attributes":{"rank":"4"},"prob":"27","asc":"20"},{"@attributes":{"rank":"5"},"prob":"29","asc":"22"},{"@attributes":{"rank":"6"},"prob":"31","asc":"23"},{"@attributes":{"rank":"7"},"prob":"34","asc":"26"},{"@attributes":{"rank":"8"},"prob":"36","asc":"28"},{"@attributes":{"rank":"9"},"prob":"39","asc":"30"},{"@attributes":{"rank":"10"},"prob":"44","asc":"32"}]},{"@attributes":{"name":"\u795e\u52c5\u8ce2\u6bcd","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"7","asc":"21"},{"@attributes":{"rank":"2"},"prob":"8","asc":"22"},{"@attributes":{"rank":"3"},"prob":"9","asc":"23"},{"@attributes":{"rank":"4"},"prob":"12","asc":"25"},{"@attributes":{"rank":"5"},"prob":"15","asc":"26"},{"@attributes":{"rank":"6"},"prob":"17","asc":"28"},{"@attributes":{"rank":"7"},"prob":"18","asc":"32"},{"@attributes":{"rank":"8"},"prob":"19","asc":"33"},{"@attributes":{"rank":"9"},"prob":"22","asc":"35"},{"@attributes":{"rank":"10"},"prob":"25","asc":"39"}]},{"@attributes":{"name":"\u6368\u3066\u5978","branch":"\u5f13\u7832\u5668","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"21"},{"@attributes":{"rank":"2"},"prob":"6","asc":"22"},{"@attributes":{"rank":"3"},"prob":"6","asc":"23"},{"@attributes":{"rank":"4"},"prob":"7","asc":"24"},{"@attributes":{"rank":"5"},"prob":"8","asc":"26"},{"@attributes":{"rank":"6"},"prob":"9","asc":"28"},{"@attributes":{"rank":"7"},"prob":"10","asc":"30"},{"@attributes":{"rank":"8"},"prob":"12","asc":"32"},{"@attributes":{"rank":"9"},"prob":"13","asc":"34"},{"@attributes":{"rank":"10"},"prob":"15","asc":"37"}]},{"@attributes":{"name":"\u7345\u5b50\u306e\u9663","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"20"},{"@attributes":{"rank":"2"},"prob":"26","asc":"21"},{"@attributes":{"rank":"3"},"prob":"27","asc":"22"},{"@attributes":{"rank":"4"},"prob":"28","asc":"23"},{"@attributes":{"rank":"5"},"prob":"30","asc":"24"},{"@attributes":{"rank":"6"},"prob":"32","asc":"26"},{"@attributes":{"rank":"7"},"prob":"35","asc":"28"},{"@attributes":{"rank":"8"},"prob":"38","asc":"30"},{"@attributes":{"rank":"9"},"prob":"41","asc":"32"},{"@attributes":{"rank":"10"},"prob":"45","asc":"35"}]},{"@attributes":{"name":"\u5929\u4e0b\u306e\u91c7\u914d","branch":"\u69cd\u99ac\u7832","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":"20"},{"@attributes":{"rank":"2"},"prob":"31","asc":"21"},{"@attributes":{"rank":"3"},"prob":"33","asc":"22"},{"@attributes":{"rank":"4"},"prob":"34","asc":"23"},{"@attributes":{"rank":"5"},"prob":"35","asc":"24"},{"@attributes":{"rank":"6"},"prob":"36","asc":"26"},{"@attributes":{"rank":"7"},"prob":"38","asc":"28"},{"@attributes":{"rank":"8"},"prob":"40","asc":"30"},{"@attributes":{"rank":"9"},"prob":"42","asc":"32"},{"@attributes":{"rank":"10"},"prob":"45","asc":"35"}]},{"@attributes":{"name":"\u5239\u90a3\u306e\u731b\u52c7","branch":"\u5168","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"5"},{"@attributes":{"rank":"2"},"prob":"21","asc":"5"},{"@attributes":{"rank":"3"},"prob":"22","asc":"5.5"},{"@attributes":{"rank":"4"},"prob":"23","asc":"5.5"},{"@attributes":{"rank":"5"},"prob":"24","asc":"6"},{"@attributes":{"rank":"6"},"prob":"25","asc":"6.5"},{"@attributes":{"rank":"7"},"prob":"26","asc":"7"},{"@attributes":{"rank":"8"},"prob":"27","asc":"7.5"},{"@attributes":{"rank":"9"},"prob":"28","asc":"8"},{"@attributes":{"rank":"10"},"prob":"30","asc":"10"}]},{"@attributes":{"name":"\u83ef\u8776\u98a8\u6708","branch":"\u5168","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":["10","2"]},{"@attributes":{"rank":"2"},"prob":"16","asc":["10.5","2"]},{"@attributes":{"rank":"3"},"prob":"16","asc":["11","3"]},{"@attributes":{"rank":"4"},"prob":"17","asc":["11.5","3"]},{"@attributes":{"rank":"5"},"prob":"17","asc":["12","4"]},{"@attributes":{"rank":"6"},"prob":"19","asc":["13.5","4"]},{"@attributes":{"rank":"7"},"prob":"20","asc":["15","5"]},{"@attributes":{"rank":"8"},"prob":"22","asc":["16.5","6"]},{"@attributes":{"rank":"9"},"prob":"23","asc":["18","8"]},{"@attributes":{"rank":"10"},"prob":"25","asc":["20","10"]}]},{"@attributes":{"name":"\u5929\u8ce6\u306e\u795e\u7b97","branch":"\u5168","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"35","asc":["5","2"]},{"@attributes":{"rank":"2"},"prob":"36","asc":["5.5","2"]},{"@attributes":{"rank":"3"},"prob":"37","asc":["6","3"]},{"@attributes":{"rank":"4"},"prob":"37","asc":["6.5","3"]},{"@attributes":{"rank":"5"},"prob":"38","asc":["7","3"]},{"@attributes":{"rank":"6"},"prob":"40","asc":["8","4"]},{"@attributes":{"rank":"7"},"prob":"42","asc":["9","4"]},{"@attributes":{"rank":"8"},"prob":"44","asc":["10","5"]},{"@attributes":{"rank":"9"},"prob":"47","asc":["11","5"]},{"@attributes":{"rank":"10"},"prob":"50","asc":["12","5"]}]},{"@attributes":{"name":"\u6ec5\u6bba\u9663\u5f26\u6708","branch":"\u5168","ratio":"false","type":"\u653b\u58ca"},"level":[{"@attributes":{"rank":"1"},"prob":"35","asc":["7","4"]},{"@attributes":{"rank":"2"},"prob":"36","asc":["7.5","4"]},{"@attributes":{"rank":"3"},"prob":"37","asc":["8","5"]},{"@attributes":{"rank":"4"},"prob":"37","asc":["8.5","5"]},{"@attributes":{"rank":"5"},"prob":"38","asc":["9","5"]},{"@attributes":{"rank":"6"},"prob":"40","asc":["10","6"]},{"@attributes":{"rank":"7"},"prob":"42","asc":["11","6"]},{"@attributes":{"rank":"8"},"prob":"44","asc":["12","7"]},{"@attributes":{"rank":"9"},"prob":"47","asc":["13","7"]},{"@attributes":{"rank":"10"},"prob":"50","asc":["15","7"]}]},{"@attributes":{"name":"\u8eca\u61f8\u308a","branch":"\u5168","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"20"},{"@attributes":{"rank":"2"},"prob":"5.5","asc":"20.5"},{"@attributes":{"rank":"3"},"prob":"6","asc":"21"},{"@attributes":{"rank":"4"},"prob":"6.5","asc":"22"},{"@attributes":{"rank":"5"},"prob":"7","asc":"23"},{"@attributes":{"rank":"6"},"prob":"8.5","asc":"24"},{"@attributes":{"rank":"7"},"prob":"10","asc":"25"},{"@attributes":{"rank":"8"},"prob":"11.5","asc":"26.5"},{"@attributes":{"rank":"9"},"prob":"13","asc":"28"},{"@attributes":{"rank":"10"},"prob":"15","asc":"30"}]},{"@attributes":{"name":"\u8eca\u61f8\u308a \u8ecd\u795e","branch":"\u5168","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"5","asc":"20"},{"@attributes":{"rank":"2"},"prob":"6","asc":"21"},{"@attributes":{"rank":"3"},"prob":"7","asc":"22"},{"@attributes":{"rank":"4"},"prob":"8","asc":"23"},{"@attributes":{"rank":"5"},"prob":"9","asc":"24"},{"@attributes":{"rank":"6"},"prob":"10.5","asc":"25.5"},{"@attributes":{"rank":"7"},"prob":"12","asc":"27.5"},{"@attributes":{"rank":"8"},"prob":"14.5","asc":"29.5"},{"@attributes":{"rank":"9"},"prob":"17","asc":"32"},{"@attributes":{"rank":"10"},"prob":"20","asc":"35"}]},{"@attributes":{"name":"\u5929\u9b54\u5c01\u7e1b\u9663","branch":"\u5168","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"10","asc":"25"},{"@attributes":{"rank":"2"},"prob":"11","asc":"26"},{"@attributes":{"rank":"3"},"prob":"11","asc":"27"},{"@attributes":{"rank":"4"},"prob":"12","asc":"28"},{"@attributes":{"rank":"5"},"prob":"12","asc":"29"},{"@attributes":{"rank":"6"},"prob":"13","asc":"30"},{"@attributes":{"rank":"7"},"prob":"14","asc":"32"},{"@attributes":{"rank":"8"},"prob":"16","asc":"34"},{"@attributes":{"rank":"9"},"prob":"18","asc":"37"},{"@attributes":{"rank":"10"},"prob":"20","asc":"40"}]},{"@attributes":{"name":"\u9244\u58c1\u306e\u5099\u3048","branch":"\u5168","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"5"},{"@attributes":{"rank":"2"},"prob":"26","asc":"5.5"},{"@attributes":{"rank":"3"},"prob":"27","asc":"6"},{"@attributes":{"rank":"4"},"prob":"28","asc":"7"},{"@attributes":{"rank":"5"},"prob":"29","asc":"8"},{"@attributes":{"rank":"6"},"prob":"30.5","asc":"9"},{"@attributes":{"rank":"7"},"prob":"32","asc":"10"},{"@attributes":{"rank":"8"},"prob":"34","asc":"11.5"},{"@attributes":{"rank":"9"},"prob":"37","asc":"13"},{"@attributes":{"rank":"10"},"prob":"40","asc":"15"}]},{"@attributes":{"name":"\u5c06\u8ecd\u306e\u52c5\u547d","branch":"\u5168","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":"17"},{"@attributes":{"rank":"2"},"prob":"31","asc":"18"},{"@attributes":{"rank":"3"},"prob":"32","asc":"19"},{"@attributes":{"rank":"4"},"prob":"34","asc":"20"},{"@attributes":{"rank":"5"},"prob":"36","asc":"21"},{"@attributes":{"rank":"6"},"prob":"39","asc":"22"},{"@attributes":{"rank":"7"},"prob":"42","asc":"24"},{"@attributes":{"rank":"8"},"prob":"46","asc":"26"},{"@attributes":{"rank":"9"},"prob":"50","asc":"29"},{"@attributes":{"rank":"10"},"prob":"55","asc":"32"}]},{"@attributes":{"name":"\u8987\u738b \u8475\u5df4","branch":"\u5168","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"35","asc":"20"},{"@attributes":{"rank":"2"},"prob":"36","asc":"21"},{"@attributes":{"rank":"3"},"prob":"37","asc":"22"},{"@attributes":{"rank":"4"},"prob":"38","asc":"23"},{"@attributes":{"rank":"5"},"prob":"39","asc":"24"},{"@attributes":{"rank":"6"},"prob":"40","asc":"25"},{"@attributes":{"rank":"7"},"prob":"41","asc":"27"},{"@attributes":{"rank":"8"},"prob":"43","asc":"29"},{"@attributes":{"rank":"9"},"prob":"46","asc":"32"},{"@attributes":{"rank":"10"},"prob":"50","asc":"35"}]},{"@attributes":{"name":"\u795e\u8b00\u9b3c\u7565","branch":"\u5168","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"25"},{"@attributes":{"rank":"2"},"prob":"17","asc":"27"},{"@attributes":{"rank":"3"},"prob":"19","asc":"29"},{"@attributes":{"rank":"4"},"prob":"20","asc":"30"},{"@attributes":{"rank":"5"},"prob":"22","asc":"32"},{"@attributes":{"rank":"6"},"prob":"24","asc":"34"},{"@attributes":{"rank":"7"},"prob":"25","asc":"35"},{"@attributes":{"rank":"8"},"prob":"26","asc":"36"},{"@attributes":{"rank":"9"},"prob":"28","asc":"38"},{"@attributes":{"rank":"10"},"prob":"30","asc":"40"}]},{"@attributes":{"name":"\u731b\u52c7\u9ed2\u5929\u72d0","branch":"\u5168","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"15","asc":"30"},{"@attributes":{"rank":"2"},"prob":"15","asc":"31"},{"@attributes":{"rank":"3"},"prob":"16","asc":"32"},{"@attributes":{"rank":"4"},"prob":"16","asc":"33"},{"@attributes":{"rank":"5"},"prob":"17","asc":"34"},{"@attributes":{"rank":"6"},"prob":"18","asc":"35"},{"@attributes":{"rank":"7"},"prob":"19","asc":"37"},{"@attributes":{"rank":"8"},"prob":"21","asc":"39"},{"@attributes":{"rank":"9"},"prob":"23","asc":"42"},{"@attributes":{"rank":"10"},"prob":"25","asc":"45"}]},{"@attributes":{"name":"\u5929\u8863\u7121\u7e2b\u9663","branch":"\u5168","ratio":"true","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":"10"},{"@attributes":{"rank":"2"},"prob":"31","asc":["11","26.05"]},{"@attributes":{"rank":"3"},"prob":"33","asc":["12","28.1"]},{"@attributes":{"rank":"4"},"prob":"35","asc":["13","30.85"]},{"@attributes":{"rank":"5"},"prob":"37","asc":["14","33.6"]},{"@attributes":{"rank":"6"},"prob":"39","asc":["15","36.7"]},{"@attributes":{"rank":"7"},"prob":"42","asc":["16","40.5"]},{"@attributes":{"rank":"8"},"prob":"46","asc":["17","44.3"]},{"@attributes":{"rank":"9"},"prob":"50","asc":["18","48.45"]},{"@attributes":{"rank":"10"},"prob":"55","asc":["20","55"]}]},{"@attributes":{"name":"\u5263\u8853 \u653b\u4e43\u578b","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"10"},{"@attributes":{"rank":"2"},"prob":"21","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"22","asc":"11"},{"@attributes":{"rank":"4"},"prob":"23","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"24","asc":"12.5"},{"@attributes":{"rank":"6"},"prob":"25","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"26","asc":"15"},{"@attributes":{"rank":"8"},"prob":"27","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"28","asc":"18"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20"}]},{"@attributes":{"name":"\u865a\u7a7a\u4e00\u9583","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"14"},{"@attributes":{"rank":"2"},"prob":"21","asc":"15"},{"@attributes":{"rank":"3"},"prob":"22","asc":"16"},{"@attributes":{"rank":"4"},"prob":"23","asc":"17"},{"@attributes":{"rank":"5"},"prob":"24","asc":"18"},{"@attributes":{"rank":"6"},"prob":"26","asc":"19"},{"@attributes":{"rank":"7"},"prob":"28","asc":"21"},{"@attributes":{"rank":"8"},"prob":"30","asc":"23"},{"@attributes":{"rank":"9"},"prob":"33","asc":"25"},{"@attributes":{"rank":"10"},"prob":"36","asc":"28"}]},{"@attributes":{"name":"\u65b0\u9670\u6d41","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"16"},{"@attributes":{"rank":"3"},"prob":"21","asc":"17"},{"@attributes":{"rank":"4"},"prob":"22","asc":"18"},{"@attributes":{"rank":"5"},"prob":"23","asc":"19"},{"@attributes":{"rank":"6"},"prob":"25","asc":"20"},{"@attributes":{"rank":"7"},"prob":"27","asc":"22"},{"@attributes":{"rank":"8"},"prob":"29","asc":"24"},{"@attributes":{"rank":"9"},"prob":"32","asc":"27"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u8349\u8599\u6d41","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"20.5","asc":"16"},{"@attributes":{"rank":"3"},"prob":"21","asc":"17"},{"@attributes":{"rank":"4"},"prob":"22","asc":"18"},{"@attributes":{"rank":"5"},"prob":"23","asc":"19"},{"@attributes":{"rank":"6"},"prob":"25","asc":"20"},{"@attributes":{"rank":"7"},"prob":"27","asc":"22"},{"@attributes":{"rank":"8"},"prob":"29","asc":"24"},{"@attributes":{"rank":"9"},"prob":"32","asc":"27"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u5927\u3075\u3078\u3093\u8005","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"1","asc":"20"},{"@attributes":{"rank":"2"},"prob":"1","asc":"22"},{"@attributes":{"rank":"3"},"prob":"1.5","asc":"24"},{"@attributes":{"rank":"4"},"prob":"1.5","asc":"26"},{"@attributes":{"rank":"5"},"prob":"2","asc":"28"},{"@attributes":{"rank":"6"},"prob":"3","asc":"30"},{"@attributes":{"rank":"7"},"prob":"3.5","asc":"32"},{"@attributes":{"rank":"8"},"prob":"4","asc":"34"},{"@attributes":{"rank":"9"},"prob":"4.5","asc":"37"},{"@attributes":{"rank":"10"},"prob":"5","asc":"40"}]},{"@attributes":{"name":"\u9396\u65cb\u98a8","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"3","asc":"20"},{"@attributes":{"rank":"2"},"prob":"3","asc":"22"},{"@attributes":{"rank":"3"},"prob":"3.5","asc":"24"},{"@attributes":{"rank":"4"},"prob":"3.5","asc":"26"},{"@attributes":{"rank":"5"},"prob":"4","asc":"28"},{"@attributes":{"rank":"6"},"prob":"5","asc":"30"},{"@attributes":{"rank":"7"},"prob":"6","asc":"32"},{"@attributes":{"rank":"8"},"prob":"7","asc":"34"},{"@attributes":{"rank":"9"},"prob":"8.5","asc":"37"},{"@attributes":{"rank":"10"},"prob":"10","asc":"40"}]},{"@attributes":{"name":"\u5263\u8c6a\u5c06\u8ecd","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"20"},{"@attributes":{"rank":"2"},"prob":"21","asc":"21"},{"@attributes":{"rank":"3"},"prob":"22","asc":"22"},{"@attributes":{"rank":"4"},"prob":"23","asc":"23"},{"@attributes":{"rank":"5"},"prob":"24","asc":"24"},{"@attributes":{"rank":"6"},"prob":"25","asc":"25"},{"@attributes":{"rank":"7"},"prob":"27","asc":"27"},{"@attributes":{"rank":"8"},"prob":"29","asc":"29"},{"@attributes":{"rank":"9"},"prob":"32","asc":"32"},{"@attributes":{"rank":"10"},"prob":"35","asc":"35"}]},{"@attributes":{"name":"\u65b0\u9670\u6d41\u9006\u98a8","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"21","asc":"20"},{"@attributes":{"rank":"2"},"prob":"22","asc":"22"},{"@attributes":{"rank":"3"},"prob":"23","asc":"24"},{"@attributes":{"rank":"4"},"prob":"24","asc":"26"},{"@attributes":{"rank":"5"},"prob":"25","asc":"27"},{"@attributes":{"rank":"6"},"prob":"26","asc":"29"},{"@attributes":{"rank":"7"},"prob":"28","asc":"31"},{"@attributes":{"rank":"8"},"prob":"30","asc":"33"},{"@attributes":{"rank":"9"},"prob":"33","asc":"35"},{"@attributes":{"rank":"10"},"prob":"36","asc":"38"}]},{"@attributes":{"name":"\u4e8c\u5929\u4e00\u6d41","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"22"},{"@attributes":{"rank":"2"},"prob":"21","asc":"24"},{"@attributes":{"rank":"3"},"prob":"22","asc":"25"},{"@attributes":{"rank":"4"},"prob":"23","asc":"27"},{"@attributes":{"rank":"5"},"prob":"24","asc":"28"},{"@attributes":{"rank":"6"},"prob":"25","asc":"30"},{"@attributes":{"rank":"7"},"prob":"27","asc":"32"},{"@attributes":{"rank":"8"},"prob":"29","asc":"35"},{"@attributes":{"rank":"9"},"prob":"32","asc":"37"},{"@attributes":{"rank":"10"},"prob":"35","asc":"40"}]},{"@attributes":{"name":"\u50be\u5947\u5fa1\u514d","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"25","asc":"25"},{"@attributes":{"rank":"2"},"prob":"26","asc":"27"},{"@attributes":{"rank":"3"},"prob":"27","asc":"29"},{"@attributes":{"rank":"4"},"prob":"28","asc":"31"},{"@attributes":{"rank":"5"},"prob":"29","asc":"33"},{"@attributes":{"rank":"6"},"prob":"30","asc":"35"},{"@attributes":{"rank":"7"},"prob":"31","asc":"36"},{"@attributes":{"rank":"8"},"prob":"32","asc":"37"},{"@attributes":{"rank":"9"},"prob":"33","asc":"38"},{"@attributes":{"rank":"10"},"prob":"35","asc":"40"}]},{"@attributes":{"name":"\u5263\u8056","branch":"\u5c06","ratio":"false","type":"\u653b"},"level":[{"@attributes":{"rank":"1"},"prob":"35","asc":"20"},{"@attributes":{"rank":"2"},"prob":"36","asc":"21"},{"@attributes":{"rank":"3"},"prob":"37","asc":"22"},{"@attributes":{"rank":"4"},"prob":"38","asc":"23"},{"@attributes":{"rank":"5"},"prob":"39","asc":"25"},{"@attributes":{"rank":"6"},"prob":"40.5","asc":"27"},{"@attributes":{"rank":"7"},"prob":"42.5","asc":"30"},{"@attributes":{"rank":"8"},"prob":"44.5","asc":"33"},{"@attributes":{"rank":"9"},"prob":"47","asc":"36"},{"@attributes":{"rank":"10"},"prob":"50","asc":"40"}]},{"@attributes":{"name":"\u5263\u8853 \u5b88\u4e43\u578b","branch":"\u5c06","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"10"},{"@attributes":{"rank":"2"},"prob":"21","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"22","asc":"11"},{"@attributes":{"rank":"4"},"prob":"23","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"24","asc":"12.5"},{"@attributes":{"rank":"6"},"prob":"25","asc":"13.5"},{"@attributes":{"rank":"7"},"prob":"26","asc":"15"},{"@attributes":{"rank":"8"},"prob":"27","asc":"16.5"},{"@attributes":{"rank":"9"},"prob":"28","asc":"18"},{"@attributes":{"rank":"10"},"prob":"30","asc":"20"}]},{"@attributes":{"name":"\u5b9d\u8535\u9662\u6d41","branch":"\u5c06","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"20","asc":"15"},{"@attributes":{"rank":"2"},"prob":"21","asc":"16"},{"@attributes":{"rank":"3"},"prob":"22","asc":"17"},{"@attributes":{"rank":"4"},"prob":"23","asc":"18"},{"@attributes":{"rank":"5"},"prob":"24","asc":"19"},{"@attributes":{"rank":"6"},"prob":"25.5","asc":"20"},{"@attributes":{"rank":"7"},"prob":"27","asc":"22"},{"@attributes":{"rank":"8"},"prob":"29","asc":"24"},{"@attributes":{"rank":"9"},"prob":"32","asc":"27"},{"@attributes":{"rank":"10"},"prob":"35","asc":"30"}]},{"@attributes":{"name":"\u67f3\u751f\u65b0\u9670\u6d41","branch":"\u5c06","ratio":"false","type":"\u9632"},"level":[{"@attributes":{"rank":"1"},"prob":"30","asc":"20"},{"@attributes":{"rank":"2"},"prob":"31.5","asc":"21"},{"@attributes":{"rank":"3"},"prob":"33","asc":"22"},{"@attributes":{"rank":"4"},"prob":"34.5","asc":"23"},{"@attributes":{"rank":"5"},"prob":"36","asc":"25"},{"@attributes":{"rank":"6"},"prob":"39","asc":"27"},{"@attributes":{"rank":"7"},"prob":"42","asc":"30"},{"@attributes":{"rank":"8"},"prob":"45","asc":"33"},{"@attributes":{"rank":"9"},"prob":"49","asc":"36"},{"@attributes":{"rank":"10"},"prob":"55","asc":"40"}]},{"@attributes":{"name":"\u8fc5\u901f\u884c\u8ecd","branch":"\u5168","ratio":"false","type":"\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":"10"},{"@attributes":{"rank":"2"},"prob":"100","asc":"10.5"},{"@attributes":{"rank":"3"},"prob":"100","asc":"11"},{"@attributes":{"rank":"4"},"prob":"100","asc":"11.5"},{"@attributes":{"rank":"5"},"prob":"100","asc":"12"},{"@attributes":{"rank":"6"},"prob":"100","asc":"13"},{"@attributes":{"rank":"7"},"prob":"100","asc":"14"},{"@attributes":{"rank":"8"},"prob":"100","asc":"16"},{"@attributes":{"rank":"9"},"prob":"100","asc":"18"},{"@attributes":{"rank":"10"},"prob":"100","asc":"20"}]},{"@attributes":{"name":"\u795e\u901f","branch":"\u5168","ratio":"false","type":"\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":"25"},{"@attributes":{"rank":"2"},"prob":"100","asc":"27"},{"@attributes":{"rank":"3"},"prob":"100","asc":"28"},{"@attributes":{"rank":"4"},"prob":"100","asc":"30"},{"@attributes":{"rank":"5"},"prob":"100","asc":"33"},{"@attributes":{"rank":"6"},"prob":"100","asc":"36"},{"@attributes":{"rank":"7"},"prob":"100","asc":"40"},{"@attributes":{"rank":"8"},"prob":"100","asc":"44"},{"@attributes":{"rank":"9"},"prob":"100","asc":"49"},{"@attributes":{"rank":"10"},"prob":"100","asc":"55"}]},{"@attributes":{"name":"\u795e\u884c\u6cd5 \u5343\u91cc","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1.5","6"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["2","9"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2.5","12"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["3","15"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["3.5","18"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["4","20"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["4.5","24"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["5","26.5"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["5.5","30"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["6.5","33"]}]},{"@attributes":{"name":"\u76f4\u6c5f\u72b6","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","7"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.5","10"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2","13"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.5","16"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["3","19"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["3.5","22"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["4","25"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["4.5","28"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["5","31"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["5.5","35"]}]},{"@attributes":{"name":"\u96fb\u5149\u77f3\u706b","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["0.5","12"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["0.6","12.5"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["0.8","13"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["1","14"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["1.2","15"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["1.4","16.5"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["1.6","18"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["1.8","20"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["2","22"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["2.5","25"]}]},{"@attributes":{"name":"\u685c\u82b1\u4e71\u821e","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["0.5","12"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1","13"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.5","14"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2","15"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2.5","16"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["3","17"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3.5","18"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["4","20"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["4.5","22"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["5","25"]}]},{"@attributes":{"name":"\u75be\u98a8\u6012\u6fe4","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","12"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.2","13"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.4","14"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["1.7","15"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2","17"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.5","19"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3","22"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["3.5","25"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["4.2","28"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["5","32"]}]},{"@attributes":{"name":"\u6b4c\u821e\u4f0e\u4e71\u821e","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","12"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.2","13"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.4","14"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["1.7","15"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2","17"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.5","19"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3","22"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["3.5","25"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["4.2","28"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["5","32"]}]},{"@attributes":{"name":"\u9cf6\u4e4b\u4e00\u7ffc","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","12"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.2","13"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.4","14"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["1.7","15"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["1.9","16"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.3","18"]},{"@attributes":{"rank":"7"},"prob":"100","asc":[{"@attributes":{"type":"\u653b"}},{"@attributes":{"type":"\u901f"}}]},{"@attributes":{"rank":"8"},"prob":"100","asc":[{"@attributes":{"type":"\u653b"}},{"@attributes":{"type":"\u901f"}}]},{"@attributes":{"rank":"9"},"prob":"100","asc":[{"@attributes":{"type":"\u653b"}},{"@attributes":{"type":"\u901f"}}]},{"@attributes":{"rank":"10"},"prob":"100","asc":["4","30"]}]},{"@attributes":{"name":"\u795e\u98a8\u8972\u6765","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1.5","20"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.7","22"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.9","24"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.1","25"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2.5","27"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.8","29"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3.6","33"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["4.4","35"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["5.3","37"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["6","40"]}]},{"@attributes":{"name":"\u9032\u6483\u7e2e\u5730","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","25"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.2","27"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["1.4","28"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["1.7","30"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2","33"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.5","36"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3","40"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["3.5","44"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["4.2","49"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["5","55"]}]},{"@attributes":{"name":"\u98a8\u6797\u706b\u5c71 \u98af","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["3","10"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["3.4","11"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["3.8","12"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["4.4","13"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["5","14"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["6","15"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["7","17"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["8","19"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["10","22"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["12","25"]}]},{"@attributes":{"name":"\u8eca\u61f8\u308a \u7114\u6e26","branch":"\u5168","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["2","20"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["2.2","22"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2.4","24"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.7","26"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["3","28"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["3.5","30"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["4","33"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["5","37"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["6","41"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["7","45"]}]},{"@attributes":{"name":"\u9a0e\u795e","branch":"\u5168","ratio":"true","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["2","20"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["2.1","22"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2.2","23"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.4","25"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["2.6","28"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["2.9","31"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["3.2","35"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["3.5","39"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["3.9","44"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["4.5","50"]}]},{"@attributes":{"name":"\u5175\u5668\u904b\u7528\u8853","branch":"\u7832\u5668","ratio":"false","type":"\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":"12"},{"@attributes":{"rank":"2"},"prob":"100","asc":"12.5"},{"@attributes":{"rank":"3"},"prob":"100","asc":"13"},{"@attributes":{"rank":"4"},"prob":"100","asc":"14"},{"@attributes":{"rank":"5"},"prob":"100","asc":"15"},{"@attributes":{"rank":"6"},"prob":"100","asc":"16.5"},{"@attributes":{"rank":"7"},"prob":"100","asc":"18"},{"@attributes":{"rank":"8"},"prob":"100","asc":"20"},{"@attributes":{"rank":"9"},"prob":"100","asc":"22"},{"@attributes":{"rank":"10"},"prob":"100","asc":"25"}]},{"@attributes":{"name":"\u795e\u884c\u6cd5","branch":"\u5668","ratio":"false","type":"\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":"16"},{"@attributes":{"rank":"2"},"prob":"100","asc":"17"},{"@attributes":{"rank":"3"},"prob":"100","asc":"18"},{"@attributes":{"rank":"4"},"prob":"100","asc":"19"},{"@attributes":{"rank":"5"},"prob":"100","asc":"21"},{"@attributes":{"rank":"6"},"prob":"100","asc":"23"},{"@attributes":{"rank":"7"},"prob":"100","asc":"25"},{"@attributes":{"rank":"8"},"prob":"100","asc":"28"},{"@attributes":{"rank":"9"},"prob":"100","asc":"31"},{"@attributes":{"rank":"10"},"prob":"100","asc":"35"}]},{"@attributes":{"name":"\u75be\u98a8\u8fc5\u96f7","branch":"\u69cd\u5f13\u99ac","ratio":"false","type":"\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":"16"},{"@attributes":{"rank":"2"},"prob":"100","asc":"17"},{"@attributes":{"rank":"3"},"prob":"100","asc":"18"},{"@attributes":{"rank":"4"},"prob":"100","asc":"19"},{"@attributes":{"rank":"5"},"prob":"100","asc":"21"},{"@attributes":{"rank":"6"},"prob":"100","asc":"23"},{"@attributes":{"rank":"7"},"prob":"100","asc":"25"},{"@attributes":{"rank":"8"},"prob":"100","asc":"28"},{"@attributes":{"rank":"9"},"prob":"100","asc":"31"},{"@attributes":{"rank":"10"},"prob":"100","asc":"35"}]},{"@attributes":{"name":"\u7fa9\u5175\u9032\u8ecd","branch":"\u69cd\u5f13\u99ac\u7832","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","5"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.5","5.5"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2","6"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.5","6.5"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["3","7"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["3.5","7.5"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["4","8"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["5","8.5"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["6","9"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["7","10"]}]},{"@attributes":{"name":"\u75be\u98a8\u592a\u79e6","branch":"\u69cd\u5f13\u99ac\u7832","ratio":"false","type":"\u653b\u901f"},"level":[{"@attributes":{"rank":"1"},"prob":"100","asc":["1","5"]},{"@attributes":{"rank":"2"},"prob":"100","asc":["1.5","5.5"]},{"@attributes":{"rank":"3"},"prob":"100","asc":["2","6"]},{"@attributes":{"rank":"4"},"prob":"100","asc":["2.5","6.5"]},{"@attributes":{"rank":"5"},"prob":"100","asc":["3","7"]},{"@attributes":{"rank":"6"},"prob":"100","asc":["3.5","7.5"]},{"@attributes":{"rank":"7"},"prob":"100","asc":["4","8"]},{"@attributes":{"rank":"8"},"prob":"100","asc":["5","8.5"]},{"@attributes":{"rank":"9"},"prob":"100","asc":["6","9"]},{"@attributes":{"rank":"10"},"prob":"100","asc":["7","10"]}]}]};
	/*
	$("head").append($(
		'<link type="text/css" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/themes/dot-luv/jquery-ui.css">'+
//		'<link type="text/css" rel="stylesheet" href="https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/basic.css">'+
		'<link type="text/css" rel="stylesheet" href="https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/visualize.css">'+
		'<link type="text/css" rel="stylesheet" href="https://raw.github.com/filamentgroup/jQuery-Visualize/master/css/visualize-dark.css">'
	));
	*/
	
	
	//--- define config constance ---
	const TypesData = {
		"足軽"    : {id:321, atk:11, def:11, mov:15, des: 2, dep:["yari"]},
		"長槍足軽": {id:322, atk:16, def:16, mov:16, des: 2, dep:["yari"]},
		"武士"    : {id:323, atk:18, def:18, mov:18, des: 3, dep:["yari", "yumi"]},
		"騎馬兵"  : {id:329, atk:12, def:10, mov:22, des: 1, dep:["kiba"]},
		"精鋭騎馬": {id:330, atk:17, def:15, mov:23, des: 1, dep:["kiba"]},
		"赤備え"  : {id:331, atk:21, def:20, mov:25, des: 1, dep:["yari", "kiba"]},
		"弓足軽"  : {id:325, atk:10, def:12, mov:16, des: 1, dep:["yumi"]},
		"長弓兵"  : {id:326, atk:15, def:17, mov:18, des: 1, dep:["yumi"]},
		"弓騎馬"  : {id:327, atk:17, def:19, mov:23, des: 1, dep:["kiba", "yumi"]},
		"鉄砲足軽": {id:336, atk:18, def:26, mov:15, des: 1, dep:["yari", "heiki"]},
		"騎馬鉄砲": {id:337, atk:26, def:18, mov:21, des: 1, dep:["kiba", "heiki"]},
		"破城鎚"  : {id:333, atk: 3, def: 8, mov: 8, des:10, dep:["heiki"]},
		"攻城櫓"  : {id:334, atk:14, def: 5, mov:10, des: 7, dep:["heiki"]},
		"大筒兵"  : {id:335, atk:10, def:12, mov: 8, des:20, dep:["yumi", "heiki"]},
		"国人衆"  : {id:324, atk:17, def:17, mov:19, des: 4, dep:["yari"]},
		"母衣衆"  : {id:332, atk:19, def:16, mov:24, des: 2, dep:["kiba"]},
		"海賊衆"  : {id:328, atk:16, def:17, mov:20, des: 2, dep:["heiki"]},
		"焙烙火矢": {id:999, atk:23, def:23, mov:19, des: 2, dep:["yumi", "heiki"]},
		"雑賀衆"  : {id:338, atk:23, def:27, mov:18, des: 5, dep:["yari", "heiki"]}
	};

	const RatioBase = ["f", "e", "d", "c", "b", "a", "s", "ss", "sss"];

	const SkillApplication = {
		"槍": ["足軽", "長槍足軽", "武士", "国人衆"],
		"馬": ["騎馬兵", "精鋭騎馬", "赤備え", "母衣衆"],
		"弓": ["弓足軽", "長弓兵", "弓騎馬", "海賊衆"],
		"砲": ["鉄砲足軽", "騎馬鉄砲", "焙烙火矢", "雑賀衆"],
		"器": ["破城鎚", "攻城櫓", "大筒兵"],
		"上級": ["武士", "赤備え", "弓騎馬"]
	};

	const UnitApplication = {
		"commandsol_yari1": "足軽",
		"commandsol_yari2": "長槍足軽",
		"commandsol_yari3": "武士",
		"commandsol_yari4": "国人衆",
		"commandsol_kiba1": "騎馬兵",
		"commandsol_kiba2": "精鋭騎馬",
		"commandsol_kiba3": "赤備え",
		"commandsol_kiba4": "母衣衆",
		"commandsol_yumi1": "弓足軽",
		"commandsol_yumi2": "長弓兵",
		"commandsol_yumi3": "弓騎馬",
		"commandsol_yumi4": "海賊衆",
		"commandsol_heiki1": "破城鎚",
		"commandsol_heiki2": "攻城櫓",
		"commandsol_heiki3": "大筒兵",
		"commandsol_heiki4": "鉄砲足軽",
		"commandsol_heiki5": "騎馬鉄砲",
		"commandsol_heiki6": "焙烙火矢",
		"commandsol_heiki7": "雑賀衆",
		"commandsol_churl": "農民"
	};
	
	//--- frameworks ---
	$.klass=function(a){var b=function(){this.init&&this.init.apply(this,arguments);};b.prototype=a;return b;};
	$.css.add=function(a,b){var c=$.css.sheet,d=!$.browser.msie,e=document,f,g,h=-1,i="replace",j="appendChild";if(!c){if(d){c=e.createElement("style");c[j](e.createTextNode(""));e.documentElement[j](c);c=c.sheet}else{c=e.createStyleSheet()}$.css.sheet=c}if(d)return c.insertRule(a,b||c.cssRules.length);if((f=a.indexOf("{"))!==-1){a=a[i](/[\{\}]/g,"");c.addRule(a.slice(0,f)[i](g=/^\s+|\s+$/g,""),a.slice(f)[i](g,""),h=b||c.rules.length)}return h};
	$.css.remove=function(a){var b=$.css.sheet;b&&b[$.browser.msie?"removeRule":"deleteRule"](a)};
	
	//--- css ---
	$.css.add("div#ig_deck_unitdetailbox tr.resultline td{color:#330000;font-size:13px;padding:2px 5px 2px 2px;}");
	$.css.add("div#ig_deck_unitdetailbox tr.resultline td.bold{font-weight:bold;}");
	$.css.add("div#ig_deck_unitdetailbox tr.resultline td.right{text-align:right;}");
	$.css.add("div#ig_deck_unitdetailbox{padding: 3px 10px 3px 12px}");
	$.css.add("div#dialogContainer a{cursor:pointer;}");
	
	//$("head").append('<link media="screen,print" type="text/css" href="http://cache.sengokuixa.jp/world/20120402-01/css/card_album.css" rel="stylesheet">');
	
	$.css.add('#ig_albumlistmenu ul{font-size: 18px; height: 38px;}');
	$.css.add('#ig_albumlistmenu ul li { color: black; display: block; float: left; height: 38px; line-height: 2; margin-left: 3.1px; width: 120px; }');
	$.css.add('#ig_albumlistmenu ul li.f_menu1on a { background-image: url("../img/card_album/tab_cardalbum_00.png"); background-position: 0 0; color: #000000; text-decoration: none; }');
	
//	$.css.add('.visualize { background: #222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAH0CAMAAAAzA0xSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFU1RWMi8wJiIjQ0JEMzAyMS4vLiwtSEZIODU3T1BRLCoqNDIzMS4wVlhZNjQ1QEBBMC4wKCQlVFZXRERFKygoKSYmQUBCQ0JDNDEyJyQkTEtNVldaVFVYRkZHPDo7LywuNjM1JSIiSEhJUFJTKiYnPTw9LCgpPj4/LSorPz4/UlRVTExNOjg5S0xNOTg5SklLKygpJiEjUlNWNzY2Ozo8LiorPjw9UE9RNTQ1SEdJRkVIQkFEKSYnKCMlJSEiVldZVVZYVFVXT09RJyMkTU1PTk5QUFBSKicoUlJUKCUmRENFNTM0R0ZIRURGLCkqUVFTNzU2LissS0tNJiMkTExOSUhKKSUmSkpMRkVHQkFDOzk7SUlLU1NVQD9AVlZYUVJUMC0vUlNVOTc5Ojg6PTs9MC0uKycpVFRWPjw+Pj0+QkFCPz0/PDo8JCAiS0tMR0dIQD9BVldYKSUnOzo7VVVXUFFTOTc4UlNUJyMlSEhKODY3SkpLUFFSKycoOzk6KCQmJiIkRUVGOjk6UlJVListLCgqVFRXV1dZRENENTI0SUlKPDs8QD5AKiYoNzU3MCwuVFVWQT9BRkVGTUxOTU1OOTY4QkBCLCkrS0pMPz0+PTs8NjQ2LiosPTw9VlZZJSAiR0dJVlhaPj0/PDs9JSEjREJENDI0NTM1T09QODc4UVFUTk9RTk1QRkZIUFBTLystTk1PVVdYJCEhTk5PLSkrSktMTk9QTU5PT09SNjU2TE1PTE1OTUxPT05QTU5QUlJTLSkqLyssUVBTKicpUVFSRUVHSUpLMS0vOjc5S0pNVVdZMzIzPjw/Ojk7TU1QPTo8Q0FDVFZYQD4/NzQ1Tk5RRURHT05RSklMLywtSElKU1JVU1NUVFRVR0ZJRUNGQT9AVVZZRUNFQkBBNDM0UFBRRkRGR0VIUlFTSkpNSktNWFhaSElLSUhLLysuODU4Pjs9S0tOOzg6Ozg7ODc5OTg6QT9CUVBSQ0FCVFNWKCUnJyIkR0hJRERGLiotV1haJCAhci6jSgAACfJJREFUeNrskYdXlVcWxTd1RAVBBQGDAmEZGIo4Jhpm8D3a49F7E5AOKtKrIB2VYkFEBMUH9t57iSZRo+kxIYVMep3ee/PNPh/gzH8wJdn3u/v89r6HxWKBh4+Eb/F/BX/6n/jF5pO472GHciYW9nWw3ad++FAtD2znqh+amwujQz23o0Pd8VBtjn3yE+bqufs6MNe8Q21ubq4mdsxVm3d0mJs/nAs1xZ6uIGX+L5R2uFytHla/rFaX42V1ufrlYXV5BheGy4fPqdXnzmUgozyjnN+n5eXIGC73+7Sc5TAxI8MvY1jtlwE/P78M5TtHzMgQLvcDR/n4iyxMaAKreKC4sNK+WVVVpSzMfPMxpa4Cwd+f74/NxEy6f5XfzCp/+Pv7E2c+5j9TsMq/iktK67/Rf2PVJG6Ti43bVvpvY7+S7UoBFivZblu5bZsYNq6kNm5jA0DuSjER9ybHhx8qmJ5O+zOr8aR8k7VS8EyG7Oz09O+lp3MQs9Oz07+L9GywFJatdrY/rM2uzf4A7bUhHzC019YipL09hDE7pBa1tPaQ2pD2EGS2hwjzBZmZISGZISy4SwxhruUCZ2bms5nPEp8lRfNkQprjfPrRcURHk46HsMbx6szo6Oro6MePgxB9vDr68ehqLlDVVDTuVgvcPl1djdN3o0/f/ePd4IbTCI6+3XA7uCH4dAOCZQTfjm5oQEMD3yQ3wCxYkVmDgkoyM0PwUjMziV8GIDhgafCXZlcDgoNhtjTA7OpVvixFwIS4e5WufFdhFnBCaS+fwImAowH8mKEJuPnuZcK7N6G5eTRAc/nm20ePQqN594Tm6FGNRoMTGs3bmsuXNW9Lq9FcENNAc+uW0BXNBZzUnL2gOXnyrCYIF16/cvLk60GMCLr1etCtK0Enr1zB2bNBQUHKBW1HkCJMTA5cD+p75vqOoD5phXb07bhxHc8805dA3UjYgb6+hL6+GzeYwLsjIaFvh6B9grt7QkIc0d3d3p5ob/9r2Hu6J8TZu3t6esLd3tPTPc7T3t4e9vZxcZ5xpDiUEEviRIh7qYQ0GPcSsYT4EtNPMFiSXPLjuJJLJYMYHGQYHLxUkozkkuRLyfwGLyE5ed268Yvkde+tW/decrLgPTYSk7FwYdq9e+uSF967h3VpaWmM/ECQj4aFad2Jad1M3Wy70xIXJnb/PA2Jid3did0/605MROL7iRyJdcQ6GXXdiXXvo66ubrzkgo9PnbOzM1/g4yzA7ANnH9FeH2cf7OWg/ubsjL0TrY8PSn0i9paWfkfB0o8i9vqw+AgRpVREROneUkQoKo0oPYVTEadOjQc4nIr4WnlwwNcOKdKeikiBg4MDU0pExPeR4uCQQuQH+vbtKSm8SNme8oLytSKl9auUF1JSWrdvx/bW1hfeoUW24qvIyMh33iG1IrKVrBgiJ/R34secYbMiwyIxa9Ys8md0RM4KCwv7mBSGsLBIcthnYYJhYZ2dYZ1E3jAjsU50Ghl1dnYe4oXYIaNDh4yMMIdoRO48hDlG3DAymmM0Bw8ePCCQuMDxA748WE5cLmf5nDlYvnz5A14m/EkZhXQUFhYuLxQpuFM5hdhpU1hos5NUCKFCwc9h87kNtXOnjQ1sbP5gY9MrETJ7y8RgM2OGTe+MGTPKZoDWy9lLLFvR+0nZJyvKentRVraCZzMHVkyqDCvcVmx2U5jotnnzCl430N7a7PYWC7hRm92E4bZGgtuaNWvA+4REBXet2bV/zWq31ViznyD2BF7dRe1fvX/1Lry6f/Wrq1ZTq8BL0tGxarVOeNUSHVat0pGWMEO35Fe6VTodL/J0S3h0vNDlUTpd3pI85OXt1ilXhwObDuw+QMvLw26+b9r9BiMO7C7aVFSUt3v3Gygq2vQG76ZNRRCfxwfiPMK8eUWVlUWoTJ1XSX6yshLzKlMrU1Of5MW8VEGqEpVNJOamStBea6psauJCW2rTb9qa2l5LbULqb5vaml5ry23LRW5bW25uE6kNuR5tuR4eDB6QydgmmOuR6+Hl5fF7D3hQOWIe8Kp5kejllZODnByvF3O8cmqINS961eQoH3L6c2pqfscyB8dq6nPq+/tranLQf4zhWH19/zH09/fX1/TX19cfAzMPP0FqipiCv1QYW+unTNm6uH4xcTHH4q1TpsRsRf1W+taYxcSYGGKMCIpLH4PR0WtD12KGYoaGpB0dGro2OjoKi2sWFhbXhmIEh0YtLEZ5LGDhaOHo6GhhMeQIOukIDU8/HS7z6SOOOBLuyOToeMQC4eGO4UeO0AXDCeFd4Y6CAhS6pnV1dYV/wYuu8MOHD3d9cXhaF7q66Hw53AXOaazpsJ1GEWynQWiara3gK5y2tq/wg60i6SdQBOMJMLbFxOSB8bikFVfQeBKNjccXDMbRwNj4UWtgYKwcAwiNCwaP9O843WC6zOnSKiwGk+kcJgYc3DUxmc5jwtbShJIMk/uWJpaWWSYmlrDMz8riS5alJRhN7mdl3bfMwv37+VkmWVlZ+VkQyzfJpyFfYRF68rN68vN7evJ7iGMKze/B2Hy+9cyf35NPHJvPNF/acfWMjeEX88dMTcdMx86YYuyM0jLB1PTMGdP1Z8iI5ZPp8+spxD6/3vT52NjYM7FYvz6WRCeyif2HOIT2iBH37HGNjXVlwlN7BFxZwPUpV1ep2bqyGhdcL7o+QurixakTONV1YKrr1AFERQm7Dlyciudcpz43cNH14kAUBgaiBqKi5OK5qCh+URuiZHeD8rGVuYHoTVywYaLHBm/vBRs2LPD29ma7YEEUI9GbyIoMb0UFZIgXeBfM9i5Q0LugoLGgAI13CgpmF9xhg8bZswu0jeLQNhZotXe0d2bPhpZVY6OWQqMwoVEL7ZYt2i0uWu0WLbaI83NxYcvexUXrq4W4i9bF13cLfF0EXMhEX+VzISpNBR9QYe1SkeRrzQZJFS7WvhXWSRUVbCuSrJOSKvhjSRXW1qEVvknW1gitSKIqGBD6l9CkpFCJCG0ODQ1NkgPOpGaJzUQZoc1JzbBqDp1IIDVbCVvByoo9zS5U0M7KiqFZUGS31gpr7eys5FjZwc6Owc4ucK0dltktW6vQWtgFLguUl7VEVoF2ywLXBiKeJnUgMT6QyBOIwEDhwMn2r7zx8dyND2xhjm9h2xLfwl7BeMMWw3hZMJSaUXYNDQMNhQzRwlduGLa0SDuuFtCcxhkynZSARYZKzwHaIienRU6GB+GkclKpFi066CR40HCR9CrQD/JlEVGlclIOd7l4UMXs5ERUCVJQPRLx/CSOFDOcP68aIY4U61X6EZWqGPoRGXr2GKGpRvSq4vPQF4/o9SPnx9tivXLYntfr9cUqvV7FBW6cZz0ClqxE0D/S/zEWfzP+zEks/sb8Y7/F/yL8pwADABtOor297oYgAAAAAElFTkSuQmCC) top repeat-x !important;}');
	
	
	// 全スキルデータ
//	console.log(Skill);
	
	//--- class ---
	var TypeInfo = $.klass({
		type: null,
		atkSkills: null,
		defSkills: null,
		movSkills: null,
		desSkills: null,
		atkDeckSkills: null,
		defDeckSkills: null,
		movDeckSkills: null,
		desDeckSkills: null,
		solBaseAtk: 0,
		solBaseDef: 0,
		solBaseDes: 0,
		solBaseMov: 0,
		statusBaseAtk: 0,
		statusBaseDef: 0,
		solRawNum : 0,
		
		init: function(type){
			this.type = type;
			this.atkSkills = new Array();
			this.defSkills = new Array();
			this.movSkills = new Array();
			this.desSkills = new Array();
			this.atkDeckSkills = new Array();
			this.defDeckSkills = new Array();
			this.movDeckSkills = new Array();
			this.desDeckSkills = new Array();
		},
		addRawSol : function(value){
			this.solRawNum += value;
		},
		addBaseAtk: function(value){
			this.solBaseAtk += value;
		},
		addBaseDef: function(value){
			this.solBaseDef += value;
		},
		addBaseDes: function(value){
			this.solBaseDes += value;
		},
		addBaseMov: function(value){
			this.solBaseMov += value;
		},
		addStatusAtk: function(value){
			this.statusBaseAtk += value;
		},
		addStatusDef: function(value){
			this.statusBaseDef += value;
		},
		addSkill: function(obj, type){
			var targetArray = null;
			switch(type){
				case "攻":
					targetArray = this.atkSkills;
					break;
				case "防":
					targetArray = this.defSkills;
					break;
				case "速":
					targetArray = this.movSkills;
					break;
				case "壊":
					targetArray = this.desSkills;
					break;
			}
			if(targetArray) targetArray.push(obj);
		},
		addUnitSkill: function(obj, type){
			this.addSkill(obj, type);
		},
		addDeckSkill: function(obj, type){
			var targetArray = null;
			switch(type){
			case "攻":
				targetArray = this.atkDeckSkills;
				break;
			case "防":
				targetArray = this.defDeckSkills;
				break;
			case "速":
				targetArray = this.movDeckSkills;
				break;
			case "壊":
				targetArray = this.desDeckSkills;
				break;
			}
			if(targetArray) targetArray.push(obj);
		},
		getRawSol: function(){
			return this.solRawNum;
		},
		getBaseAtk: function(){
			return Math.floor(this.solBaseAtk + this.statusBaseAtk);
		},
		getBaseDef: function(){
			return Math.floor(this.solBaseDef + this.statusBaseDef);
		},
		getBaseDes: function(){
			return this.solBaseDes;
		},
		getTotalAtk: function(addProb){
			return this.getTotalImpl(this.atkSkills, this.solBaseAtk, this.statusBaseAtk, addProb, this.atkDeckSkills);
		},
		getTotalDef: function(addProb){
			return this.getTotalImpl(this.defSkills, this.solBaseDef, this.statusBaseDef, addProb, this.defDeckSkills);
		},
		getTotalDes: function(addProb){
			return this.getTotalImpl(this.desSkills, this.solBaseDes, 0, addProb, this.desDeckSkills);
		},
		/**
		 * 
		 * @param {Array} skillList		スキルのリスト
		 * @param {Number} solBase		兵のベース値
		 * @param {Number} statusBase	武将ステータスのベース値
		 * @param {Number} addProb		兵法によるUp値
		 * @param {Array} deckSkillList	部隊スキルのリスト
		 * @return {Number}
		 */
		getTotalImpl: function(skillList, solBase, statusBase, addProb, deckSkillList){
			var statusExp = 1, solExp = 1;
			$.each(skillList, function(){
				var exp = this.ascend/100 * (Math.min(this.prob+addProb, 100)/100);
				statusExp += exp
				if(this.type!="将") solExp += exp;
			});
			var deckStatusExp = 1, deckSolExp = 1;
			$.each(deckSkillList, function(){
				var deckExp = this.ascend/100 * (this.prob/100);
				deckStatusExp += deckExp
				if(this.type!="将") deckSolExp += deckExp;
			});
			return Math.floor((solBase*solExp*deckSolExp + statusBase*statusExp*deckStatusExp));
		},
		getMoveTime: function(){
			var movRatio = 1;
			$.each(this.movSkills, function(){
				movRatio += this.ascend/100;
			});
			var deckMovRatio = 1;
			$.each(this.movDeckSkills, function(){
				deckMovRatio += this.ascend/100;
			});
			return 3600/(this.solBaseMov*movRatio*deckMovRatio);
		}
	});
	
	var AjaxRequest = $.klass({
		init: function(){
		},
		request: function(url, params, successFunc, failureFunc){
			var data = {
				url: url,
				type: "POST",
				async: false,
				success: function(data, dataType){
					if(successFunc) successFunc(data, dataType);
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					if(failureFunc) failureFunc(XMLHttpRequest, textStatus, errorThrown);
				}
			};
			if(params) data.data = params;
			$.ajax(data);
		}
	});
	
	var skillList = [];
	var skillIndex = 0;
	var SkillInfo = $.klass({
		targets: [], // 槍, 馬, 上級, 全
		prob: "", // 12.5%
		ascends: [], // 22%(攻), 15%(壊)
		ascendTypes: [],
		isDeckSkill: "", // Boolean
		index: null,
		init: function(){
			this.index = skillIndex++;
		},
		setSkillString: function(){
		},
		setAscend: function(values){
			this.ascends.push(value);
		}
	});
	
	//--- general functions ---
	var getRatio = function(arr){
		var ratio = 1;
		for(var i=0; i<arr.length; i++){
			ratio += (RatioBase.indexOf(arr[i])-4)*(0.05/arr.length);
		}
		return ratio;
	};
	
	var addFigure = function(str){
		var num = new String(str).replace(/,/g, "");
		while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
		return num;
	}
	
	var dialogContainer = $('<div id="dialogContainer"></div>');
	$("body").append(dialogContainer);
	var dialog = dialogContainer.dialog({
		autoOpen: false,
		modal: true,
		width: 770
	});
	
	var loadedCardListMap = {};
	var currentContent = null;
	
	var insertTarget = null;
	var openSelect = function(_insertTarget, rarity, page){
		insertTarget = _insertTarget;
		
		if(!rarity) rarity = 1;
		if(!page) page = 1;
		
		if(!loadedCardListMap[rarity] || !loadedCardListMap[rarity][page]){
			
			var request = new AjaxRequest();
			var requestUrl = "/card/card_album.php?rarity_type=" + rarity + "&p=" + page;
			//356409033200224
			//D25HW-4C54997B7723
			
			request.request(requestUrl, null,
				function(data, dataType){
					
					var content = $(data);
					content = content.find("div#ig_mainareaboxInner");
					
					var rankSwitcher = content.find("div#ig_albumlistmenu"); // [序][上][特]…
					
					var rankAnchors = rankSwitcher.find("ul > li > a");
					rankAnchors.each(function(){
						var thisElem = $(this);
						var href = thisElem.attr("href");
						thisElem.attr("data-href", href);
						thisElem.removeAttr("href");
						
						thisElem.find("img").width(23).height(23);
					});
					rankAnchors.bind("click", function(event){
						var targetRarity = $(this).attr("data-href").substr(-1);
						if(targetRarity==rarity) return;
						openSelect(insertTarget, targetRarity);
						
					});
					
					
					
					var rarityIconContainer = rankSwitcher.find("ul > li > a > div");
					rarityIconContainer.css("text-align", "center");
					rarityIconContainer.find("sapn").remove();
					
					
					var detailContainer = content.find("div.common_box3bottom");
					var thumbContainer = detailContainer.children("table.normal");
					var thumbAnchors = thumbContainer.find("a");
					
					thumbAnchors.each(function(){
						var self = $(this);
						
						if(!self.attr("data-href")){
							var originalHref = self.removeClass("thickbox").attr("href");
							self.removeAttr("href");
						
							var hrefParams = originalHref.split("=");
							var hrefParam = hrefParams[hrefParams.length-1];
							self.attr("data-href", hrefParam);
						}
						
						hrefParam = self.attr("data-href");
						
						self.bind("click", function(event){
							
							var insertContents = detailContainer.find("div#" + hrefParam).clone();
							
							
							insertTarget.html("");
							var front = $('<div class="cardflipPreview"></div>');
							var back = $('<div class="cardflipPreview"></div>');
							
							var idPrefix = insertTarget.attr("id");
							var frontContent = insertContents.find("div.ig_card_cardStatusFront").attr("id", idPrefix+"_front");
							var paramsArea = frontContent.children("div.parameta_area");
							
							paramsArea.children("span.ig_card_cardno + span").removeAttr("id").attr("class", "commandsol_kiba3");
							
							var backContent = insertContents.find("div.ig_card_cardStatusBack").attr("id", idPrefix+"_back").hide();
							var backParamArea = backContent.children("div.parameta_area_back");
							
//							var firstParamClass = paramsArea.children("span:eq(0)").attr("class");
							var isGray = paramsArea.children("span:eq(0)").attr("class").indexOf("gray") < 0 ? false : true;
							
							if(isGray){
								var frontImages = frontContent.children("img");
								frontImages.each(function(){
									var src = $(this).attr("src");
									src = src.replace("grayscale_", "");
									$(this).attr("src", src);
								});
								var params = paramsArea.children("span");
								params.each(function(){
									var paramClass = $(this).attr("class");
									paramClass = paramClass.replace("gray", "");
									$(this).attr("class", paramClass);
								});
								
								var backimages = backContent.children("img");
								backimages.each(function(){
									var src = $(this).attr("src");
									src = src.replace("grayscale_", "");
									$(this).attr("src", src);
								});
								params = backParamArea.children("span");
								params.each(function(){
									var paramClass = $(this).attr("class");
									paramClass = paramClass.replace("gray", "");
									$(this).attr("class", paramClass);
								});
								
								
							}
							
							front.append(frontContent);
							back.append(backContent);
							
							insertTarget.append(front).append(back);
							dialog.dialog("close");
							execMain();
						});
					});
					
					content.find("div#ig_deckheadmenubox").remove();
					content.find("div.ig_deck_smallcardarea").css("width", "98px").css("height", "150px").
						css("background", 'url("../img/deck/bg.png") no-repeat scroll left top transparent').css("margin-bottom", "11px").css("margin-left", "7px");
					
//					content.find("a").removeAttr("href");
//					content.find("div#ig_albumlistmenu span").remove();
					
					var menuTable = content.find("div.common_box3bottom > table:eq(0)"); // [1] [2] [3] ...
					var pageAnchors = menuTable.find("ul > li > a");
					pageAnchors.each(function(){
						var thisElem = $(this);
						var href = thisElem.attr("href");
						thisElem.attr("data-href", href);
						thisElem.removeAttr("href");
					});
					pageAnchors.bind("click", function(event){
						var targetPage = $(this).attr("data-href").substr(-1);
//						if(targetRarity==rarity) return;
						openSelect(insertTarget, rarity, targetPage);
					});
					
					menuTable.removeAttr("height");
					menuTable.find("td:eq(1), td:eq(2)").remove();
					menuTable.find("td ul").css("margin-bottom", "0px").css("padding-bottom", "0px");
					menuTable.find("li:last").remove();
					
					
//					dialogContainer.html("");
					if(currentContent) currentContent.hide();
					currentContent = content;
					dialogContainer.append(content);
					
					if(!loadedCardListMap[rarity]) loadedCardListMap[rarity] = {};
					loadedCardListMap[rarity][page] = content;
					
					dialog.dialog("open");
				},
				function(){
				}
			);
		}else{
			currentContent.hide();
			loadedCardListMap[rarity][page].show();
			currentContent = loadedCardListMap[rarity][page];
			
			dialog.dialog("open");
		}
	};
	
	
	
	var parseSkill = function(element, typeMap, isDeckSkill){
		if(!$.trim(element.text())) return;
		
		var probs = element.text().match(/([\d.]+)/g);
		var lines = element.html().split("<br>");
		
		var skillInfo = new SkillInfo();
		skillInfo.prob = probs[0];
		skillInfo.isDeckSkill = isDeckSkill;
		
		//---
		var ascendTypes = []; // ["攻", "速"]
		for(var k=1; k<lines.length; k++){
			ascendTypes.push(lines[k].split("：")[0].substr(-1));
		}
		skillInfo.ascendTypes = ascendTypes;
		
		var ascends = [];
		for(var m=0; m<ascendTypes.length; m++){
			ascends.push(probs[m+1]);
//			skillInfo.ascends.push(probs[m+1]);
//			skillInfo.setAscend(probs[m+1]);
		}
		skillInfo.ascends = ascends;
//		skillInfo.setAscend(probs);
		
		//---
		var target = element.find("font").text();
		var hasZyoukyuu = target.indexOf("上級");
		target = hasZyoukyuu>=0 ? target.substring(0, hasZyoukyuu)+target.substring(hasZyoukyuu+2) : target;
		
		var targets = []; //["槍", "馬", "砲"]
		for(var i=0; i<target.length; i++){
			targets.push(target.charAt(i));
		}
		if(hasZyoukyuu>=0) targets.push("上級");
		
		skillInfo.targets = targets;
		
		for(var j=0; j<targets.length; j++){
			var eachTarget = targets[j]; // "槍" or "全" or ...
			
			var matchedInfos = [];
			
			var appliedTypes = SkillApplication[eachTarget]; // ["足軽長槍", "武士"]
			
			var isAll = (eachTarget=="全" || eachTarget=="将");
			if(isAll){
				$.each(typeMap, function(){
					matchedInfos.push(this);
				});
			}else{
				$.each(appliedTypes, function(){
					if(typeMap[this]) matchedInfos.push(typeMap[this]);
				});
			}
			
			for(var l=0; l<ascendTypes.length; l++){
				$.each(matchedInfos, function(){
					if(isDeckSkill){
						this.addDeckSkill({"type":eachTarget, "prob":parseFloat(probs[0]), "ascend":parseFloat(probs[l+1])}, ascendTypes[l]);
					}else{
						this.addUnitSkill({"type":eachTarget, "prob":parseFloat(probs[0]), "ascend":parseFloat(probs[l+1])}, ascendTypes[l]);
					}
				});
			}
		}
		
		skillList.push(skillInfo);
	};
	
	
	// 遺跡
	/*
	var getSkillList = function(){
		var skillInfo = new SkillInfo();
		
		skillList.push(skillInfo);
	};
	//http://stackoverflow.com/questions/4061080/output-each-combination-of-an-array-of-numbers-with-javascript
	var calcHistgram = function(){
//		config
		var min = 0;
		var max = 1000000000;
		var splitNum = 1000;
		var duration = Math.ceil((max-min)/splitNum);
		var list = getSkillList();
	};
	*/
	
	
	var appendRankSelector = function(card){
		
	};
	var appendTypeSelector = function(card){
		
	};
	var appendSolNumberInput = function(parent, targetElem, idName){
		var numInput = $('<input type="number" id="'+idName+'" size="5">');
		numInput.hide().css("position", "absolute");
		numInput = numInput.appendTo(parent);
		targetElem.bind("click", function(event){
			var currentNum = $(this).text();
			var position = $(this).position();
			
			numInput.attr("value", currentNum);
			numInput.css("top", position.top);
			numInput.css("left", position.left);
			numInput.show();
			numInput.focus();
		});
		/*
		numInput.bind("blur", function(event){
			$(this).css("display", "none");
		});
		*/
		numInput.bind("blur", function(event){
			var selector = $(this);
			selector.hide();
			targetElem.text(selector.val());
			
//			console.log(idName, $(this).text());
			execMain();
		});
	};
	
	var commitSolNum = function(cardID, soltypeID, number){
		var url = "/facility/set_unit_list_if.php";
		var params = {card_id: cardID, unit_type: soltypeID ,unit_count: number};
		var request = new AjaxRequest();
		request.request(url, params,
			function(data, dataType){
//				console.log(data);
				if(data.result!="ok"){
					alert("error");
				}
			},
			function(XMLHttpRequest, textStatus, errorThrown){
				alert("error");
			}
		);
	};
	
	
	/*
	const CHANGETYPE = {
		SOLNUM: "soldierNumber",
		SOLTYPE: "soldierType"
	};
	*/
	var execMain = function(){
		var typeMap = {};
		var unitStatusInt = [];
		var unitCost = 0;
		
		var currentUnit = $("div.ig_deck_maincardarea, div.ig_deck_subcardarea");
		// 1回目のループで 兵科対応の infoClass を生成
		currentUnit.each(function(){
			var deckArea = $(this);
			var card = deckArea.find("div.parameta_area");
			
			//武将仮追加
			/*
			if(card.length==0){
				if(deckArea.find("span").is(".openselect")) return;
				if(card.is(".initialized")) return;
				
				var btnLabel = $('<span class="simubtn openselect">武将を仮追加</span>');
				deckArea.append(btnLabel);
				var btn = btnLabel.button();
				btn.css("z-index", "999");
				btn.click(function(event){
					openSelect(deckArea);
				});
				return;
			}
			*/
			
			//武将仮追加
			/*
			if(deckArea.find("span.simubtn").length==0){
				var btnLabel = $('<span class="simubtn openselect">変更</span>');
				deckArea.append(btnLabel);
				var btn = btnLabel.button();
//				btn.css("z-index", "999");
				btn.css("top", "362px");
				btn.css("position", "absolute");
				btn.click(function(event){
					openSelect(deckArea);
				});
			}
			*/
			
			if(card.length==0) return;
			
			var cardSolTypeElem = card.children("span.ig_card_cardno + span");
			cardSolType = UnitApplication[cardSolTypeElem.attr("class")]; // UnitApplication["commandsol_yari3"] → "武士"
			var cardID = cardSolTypeElem.attr("id");
			cardID = cardID.substr(16);
//			console.log(cardID);
			
			var typeData = TypesData[cardSolType];
			
			var ratioDeps = typeData["dep"]; //どの兵科に依存するか
			var typeRanks = [];
			$.each(ratioDeps, function(){
				var className = card.find("span."+this).attr("class");
				var typeRank = className.substr(className.indexOf("lv_")+3);
				
//				console.log(className, typeRank);
				
				typeRanks.push(typeRank); // ["s", "b"] ex)複数兵科依存の場合
			});
			
			var typeRatio = getRatio(typeRanks); // 0.95 等
			
//			console.log(cardSolType, typeRatio);
			
			// infoClass初期化
			var typeInfo = null;
			if(!typeMap[cardSolType]){
				typeInfo = new TypeInfo(cardSolType);
				typeMap[cardSolType] = typeInfo;
			}else{
				typeInfo = typeMap[cardSolType];
			}
			
			var cardSolNumContainer = card.find("span.commandsol_no");
			var cardSolNumElem = cardSolNumContainer.children("span");
			var cardSolNum = cardSolNumElem.text(); // 兵士数
			typeInfo.addRawSol(parseInt(cardSolNum));
			typeInfo.addBaseAtk(typeData["atk"]*parseInt(cardSolNum)*typeRatio);
			typeInfo.addBaseDef(typeData["def"]*parseInt(cardSolNum)*typeRatio);
			typeInfo.addBaseDes(typeData["des"]*parseInt(cardSolNum));
			typeInfo.solBaseMov = typeData["mov"];
			typeInfo.addStatusAtk(parseInt(card.find(".ig_card_status_att").text())*typeRatio);
			typeInfo.addStatusDef(parseInt(card.find(".ig_card_status_def").text())*typeRatio);
			
			unitStatusInt.push(parseFloat(card.find(".ig_card_status_int").text())); // 兵法
//			unitCost += parseFloat(card.find(".ig_card_cost").text()); // コスト
			unitCost += parseFloat(card.find(".ig_card_cost_over").text()); // コスト
			
			
			
			var removedCardAction = $(this).find("div.cardfripbtn");
			removedCardAction.remove();
			
			
			
			//--- attach click event ---
			if(card.is(".initialized")) return;
			
			// F～SSS セレクタi
			var typeRankSelector = $('<select id="rankselect"><option value="e">E</option><option value="d">D</option><option value="c">C</option>'+
			'<option value="b">B</option><option value="a">A</option><option value="s">S</option><option value="ss">SS</option><option value="sss">SSS</option></select>');
			typeRankSelector.hide().css("position", "absolute");
			typeRankSelector = typeRankSelector.appendTo(card);
			var listenedRank = null;
			card.find(".yari, .yumi, .kiba, .heiki").bind("click", function(){
				listenedRank = $(this);
				var className = $(this).attr("class");
				var rankClass = className.substr(className.indexOf("lv_")+3);
				var position = $(this).position();
				
				typeRankSelector.children("[value="+rankClass+"]").attr("selected", "");
				typeRankSelector.css("top", position.top);
				typeRankSelector.css("left", position.left);
				typeRankSelector.show();
				typeRankSelector.focus();
				
			});
			typeRankSelector.bind("blur", function(event){
				$(this).css("display", "none");
			});
			typeRankSelector.bind("change", function(event){
				var selector = $(this);
				selector.hide();
				
				var classes = listenedRank.attr("class");
				var previousRankClass = classes.substr(classes.indexOf("lv_"));
				listenedRank.removeClass(previousRankClass);
				listenedRank.addClass("lv_"+selector.val());
				
				execMain();
			});
			
			// 兵科セレクタ
			var solTypeSelector = $('<select id="typeselect">'+
				'<option value="commandsol_yari1">足軽</optoin><option value="commandsol_yari2">長槍足軽</optoin><option value="commandsol_yari3">武士</optoin><option value="commandsol_yari4">国人衆</optoin>' +
				'<option value="commandsol_kiba1">騎馬兵</optoin><option value="commandsol_kiba2">精鋭騎馬</optoin><option value="commandsol_kiba3">赤備え</optoin><option value="commandsol_kiba4">母衣衆</optoin>' +
				'<option value="commandsol_yumi1">弓足軽</optoin><option value="commandsol_yumi2">長弓兵</optoin><option value="commandsol_yumi3">弓騎馬</optoin><option value="commandsol_yumi4">海賊衆</optoin>' +
				'<option value="commandsol_heiki1">破城鎚</optoin><option value="commandsol_heiki2">攻城櫓</optoin><option value="commandsol_heiki3">大筒兵</optoin><option value="commandsol_heiki4">鉄砲足軽</optoin>' +
				'<option value="commandsol_heiki5">騎馬鉄砲</optoin><option value="commandsol_heiki6">焙烙火矢</optoin><option value="commandsol_heiki7">雑賀衆</optoin>' +
				'</select>');
			solTypeSelector.hide().css("position", "absolute");
			solTypeSelector = solTypeSelector.appendTo(card);
			var listenedType = null;
			cardSolTypeElem.bind("click", function(event){
				listenedType = $(this);
				
				var typeClass = $(this).attr("class");
				var position = $(this).position();
				
				solTypeSelector.children("[value="+typeClass+"]").attr("selected", "");
				solTypeSelector.css("top", position.top);
				solTypeSelector.css("left", position.left);
				solTypeSelector.show();
				solTypeSelector.focus();
			});
			solTypeSelector.bind("blur", function(event){
				$(this).css("display", "none");
			});
			solTypeSelector.bind("change", function(event){
				var selector = $(this);
				selector.hide();
				
				var previousRankClass = listenedType.attr("class");
				listenedType.removeClass(previousRankClass);
				listenedType.addClass(selector.val());
				
				execMain();
			});
			
			appendSolNumberInput(cardSolNumContainer, cardSolNumElem, "solnum");
			appendSolNumberInput(card, card.find("span.ig_card_status_att"), "attnum");
			appendSolNumberInput(card, card.find("span.ig_card_status_def"), "defnum");
			appendSolNumberInput(card, card.find("span.ig_card_status_int"), "intnum");
			
			cardSolNumContainer.bind("click", function(event){
				if($(event.target).attr("id")) return;
				
				var solnumRawText = $(this).text();
				var maxSolNum = solnumRawText.substr(solnumRawText.indexOf("/")+1);
				cardSolNumElem.text(maxSolNum);
				execMain();
			});
			
			//--- 直接コミット ---
			/*
			var cardNum = card.children("span.ig_card_cardno");
			var commitBtnElem = $('<span class="commitbtn">commit</span>');
			cardNum.append(commitBtnElem);
			var commitBtn = commitBtnElem.button();
			commitBtn.find("span").css("padding", "0").css("line-height", "0.7");
			commitBtn.click(function(event){
				commitSolNum(cardID, TypesData[UnitApplication[cardSolTypeElem.attr("class")]]["id"], cardSolNumElem.text());
			});
			*/
			
			//--- 裏面event ---
			var backArea = deckArea.find("div.ig_card_cardStatusBack div.parameta_area_back");
			var skillArea = backArea.children("div");
			var currentSkillLabel = ""
			var currentSkillName = "";
			var currentSkillLv = "";
			var currentSkillDesc = "";
			
			skillArea.each(function(){
				var skillLabelObj = $(this).children("span.ig_skill_name");
				var skillDesc = $(this).children("span.ig_skill_desc");
				
				var skillLabel = skillLabelObj.text();
				var skillName = skillLabel.substring(0, skillLabel.indexOf("LV"));
				var skillLevel = skillLabel.substr(skillLabel.indexOf("LV")+2);
				
				
//				console.debug(skillName + ":" + skillLevel);
				// スキル変更対応
				/*
				skillLabelObj.bind("click", function(event){
					
				});
				*/
				
			});
			/*
			//--- skill name selector ---
			var skillNameSelector = '<select id="skillnameselect">';
			var name, skillObj, isNameMatch;
			
//			console.log(Skill.skill);
			
			for(var i=0; i<Skill.skill.length; i++){
				skillObj = Skill.skill[i];
				skillAttrs = skillObj["@attributes"];
				if(skillAttrs.name==currentSkillName) isNameMatch = true;
				skillNameSelector += '<option value="' + skillAttrs["name"] + '"' + (isNameMatch ? ' selected' : '') + '>' +  skillAttrs["name"] + '</option>';
			}
			skillNameSelector += '</select>';
			skillNameSelector = $(skillNameSelector).hide().css("position", "absolute");
//			typeRankSelector = typeRankSelector.appendTo(card);
			
			console.log(skillNameSelector);
			*/
			
			
			//--- attach reverse event ---
			
			
			
			
			
			card.addClass("initialized");
		});
		
//		console.log(typeMap);
		if($.isEmptyObject && $.isEmptyObject(typeMap)) return;
		
		// 2回目のループで skills を infoClass に attach する
		currentUnit.each(function(){
			var skills = $(this).find("div.parameta_area_back > div >span.ig_skill_desc");
			skills.each(function(){
				parseSkill($(this), typeMap, false);
			});
		});
		
		//--- 部隊スキル ---
		var deckSkillDesc = $("div.deck_skill_display_data div.deck_skill_display_data_info li span");
		deckSkillDesc.each(function(){
			parseSkill($(this), typeMap, true);
		});
		
		
		unitStatusInt.sort().reverse();
//		console.log(unitCost, unitStatusInt);
		
		var addProb = unitStatusInt[0]/100; //兵法によるスキル発動確率加算
		$.each(unitStatusInt, function(){
			addProb += this/600;
		});
//		console.log("addProb", addProb);
		console.log(typeMap);
		
		var rawSolNum = 0, baseAtkValue = 0, baseDefValue = 0, baseDesValue = 0, totalAtkValue = 0, totalDefValue = 0, totalDesValue = 0, totalMoveTime = 0;
		$.each(typeMap, function(){
			rawSolNum += this.getRawSol();
			baseAtkValue += this.getBaseAtk();
			baseDefValue += this.getBaseDef();
			baseDesValue += this.getBaseDes();
			totalAtkValue += this.getTotalAtk(addProb);
			totalDefValue += this.getTotalDef(addProb);
			totalDesValue += this.getTotalDes(addProb);
			totalMoveTime = Math.round(Math.max(totalMoveTime, this.getMoveTime()));
		});
		
//		console.log(baseAtkValue, baseDefValue, baseDesValue, totalAtkValue, totalDefValue, totalDesValue, totalMoveTime);
		
		
		//--- display result ---
		var displayContainer = $("div#ig_deck_unitdetailbox");

		
		displayContainer.children("span:not(.ig_deck_unitdata_condition)").remove();
//		displayContainer.children("span.ig_deck_unitdata_subleader, span.ig_deck_unitdata_leader").remove();
		displayContainer.children("table").remove();
		displayContainer.append(
			'<table><tbody>'+
			'<tr class="resultline"><td>兵数/コスト</td><td>'+ addFigure(rawSolNum) +' / ' + unitCost +'</td></tr>'+
			'<tr class="resultline"><td>基礎 [攻]</td><td class="right">'+addFigure(baseAtkValue)+'</td><td> ('+ addFigure(Math.floor(baseAtkValue/unitCost)) +')</td></tr>'+
			'<tr class="resultline"><td>基礎 [防]</td><td class="right">'+addFigure(baseDefValue)+'</td><td> ('+ addFigure(Math.floor(baseDefValue/unitCost)) +')</td></tr>'+
			'<tr class="resultline"><td>基礎 [壊]</td><td class="right">'+addFigure(baseDesValue)+'</td></tr>'+
			'<tr class="resultline"><td class="bold">期待値 [攻]</td><td class="bold, right">'+addFigure(totalAtkValue)+'</td><td> ('+ addFigure(Math.floor(totalAtkValue/unitCost)) +')</td></tr>'+
			'<tr class="resultline"><td class="bold">期待値 [防]</td><td class="bold, right">'+addFigure(totalDefValue)+'</td><td> ('+ addFigure(Math.floor(totalDefValue/unitCost)) +')</td></tr>'+
			'<tr class="resultline"><td class="bold">期待値 [壊]</td><td class="bold, right">'+addFigure(totalDesValue)+'</td></tr>'+
			'<tr class="resultline"><td class="bold">速度</td><td class="right">'+totalMoveTime+'秒</td><td>/1マス</td></tr></tbody></table>'
		);
		
		// reloadButton
		/*
		var reloadBtnLabel = $('<span>再計算</span>');
		var reloadBtn = reloadBtnLabel.button();
		reloadBtn.click(function(event){
			execMain();
		});
		displayContainer.append(reloadBtn);
		*/
		
		
		var detailBtnLabel = $('<span>攻撃表示</span>');
		var detailBtn = detailBtnLabel.button();
		var detailGraph = $('<canvas id="detailGraph"></canvus>');
		
		var dialog = dialogContainer.dialog({
			autoOpen: false,
			width: 800,
			height: 500,
			close: function(event, ui){
				detailBtn.button("enable");
				detailGraph.remove();
//				detailContent = $('<div><div id="detailGraph"></div></div>');
			}
		});
		
		detailBtn.click(function(event){
//			var detailTable = createDetailTable();
//			detailContent.find("#detailGraph").append(detailTable);
			
			
			var displayedData = generateAttackGraphData();
			
			var chartdata1 = {
				"config": {
//					"title": "Bar Chart",
					"subTitle": "攻撃力",
					"type": "bar",
					"colorSet": 
						["red","#FF9114","#3CB000","#00A8A2","#0036C0","#C328FF","#FF34C0"],
					"bgGradient": {
						"direction":"vertical",
						"from":"#687478",
						"to":"#222222"
					}
				},
				"data": [
					["攻撃力"].concat(displayedData),
					["確率"].concat()
				]
			};
			dialogContainer.append(detailGraph);
			dialog.dialog("open");
			
//			detailTable.visualize({type: 'bar', width: '400px'});
//			detailTable.visualize();
			ccchart.init('detailGraph', chartdata1)
			detailBtn.button("disable");
		});
		
		displayContainer.append(detailBtn);
		
		/*
		 * 
		 * 枠外に表示するもの
		 * Base
		 * Expected
		 * Median
		 * Max
		 * 
		 * 
		 * x-axis base ～ max
		 * y-axis 0 ～ 1
		 * 
		 * ↓この段階で兵科に関係ないものは外しておいた方が計算量が下がる
		 * [Skill0, Skill1, Skill2, ..., SkillN]
		 * 
		 * ↑の配列数に相当する重複順列を作成する
		 * [ 
		 * 	[1, 0, 1, ...],
		 * 	[0, 0, 1, ...],
		 * 	...
		 * ]
		 * 
		 * ↑の各発動パターンでの威力と確率を計算する
		 * 		確率…積算
		 * 		威力…
		 * 
		 * × SkillInfo に index を振って置いて各兵科Modelを回して発動させる
		 * ○ 兵科Modelに発動SkillListを渡して威力を出して貰う
		 * 
		 * skillList: SkillInfoのリスト
		 * typeMap: 兵科→TypeInfoのマップ
		 * 
		 * TypeInfo.getPower(hitSkillInfoList) で matchするスキルだけ発動させてPowerを返す
		 * 
		 */
		
		
		
		var generateGraphData = function(type){
			//stub
			return {value:[], prob:[]};
		}
		
		
		/**
		 * 重複を許してn個からk回取る
		 * 2個から発動効果のあるスキル個
		 * 
		 * i を 0～n^k-1個までforで繰り返し、n進数表記する、但しk桁になるまで頭を0で埋める
		 * 00000101 ←i=5 n=2 k=8 → [0,0,0,0,0,1,0,1]
		 */
		var generateRepeatedPermutation = function(k, n){
			var results = [];
			for(var i=0, len=n^k; i<len; i++){
				var permut = i.toString(2); // "101"
				var result = [];
				var length = permut.length;
				for(var j=0; j<=k; j++){
					if(j<k-length){
						result.push(0);
					}else{
						result.push(permut.charAt(j-(k-length))); //k:5→char:0, k:6→char:1
					}
				}
				results.push(result);
			}
			console.debug(results);
			return results;
		}
//		console.debug(skillList);
	}
	
	execMain();
}
window.addEventListener("load", addJQuery(main));