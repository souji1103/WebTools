// ==UserScript==
// @name           display_reserved
// @description    ixa_display_reserved
// @version        0.1.2
// @namespace      ixa_display_reserved
// @author         server1-4.souji
// @include        http://*.sengokuixa.jp/map.php*
// @match          http://*.sengokuixa.jp/map.php*
// ==/UserScript==
//g

(function(callback){
	var script = document.createElement("script");
	script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
	script.addEventListener("load", function(){
		var script2 = document.createElement("script");
//		script2.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery);";
		script2.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
		document.body.appendChild(script2);
	}, false);
	document.body.appendChild(script);
})(
	
	/*
function addJQuery(callback){
	
	if(typeof(unsafeWindow.jQuery)!='undefined') {
		callback(unsafeWindow.jQuery);
	}else{
	
		var script = document.createElement("script");
		script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
		script.addEventListener('load', function() {
			var script2 = document.createElement("script");
			script2.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery);";
			document.body.appendChild(script2);
		}, false);
		document.body.appendChild(script);
	}
}
	*/
	
//	function display_reserved_main($){
	function($){
		var config = {
				version: "0.1.2",
				playerName: "",
				currentDate: null,
				isNormalBattle: true,
				lineNum: "200",
				dateRange: 230400, //64h*60m*60s
	//			dateRange: 2304000000, //64h*60m*60s
				reservedBtn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYCAYAAAC8/X7cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ODVBNzE2NjIxMjBFMjExOTAyNkY2MjA3QTNERDA1NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjlGODVGMjIwMjUxMUUyQTUzM0UwMUFBQjA0RjIzNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjlGODVGMTIwMjUxMUUyQTUzM0UwMUFBQjA0RjIzNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NUE3MTY2MjEyMEUyMTE5MDI2RjYyMDdBM0REMDU3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4NUE3MTY2MjEyMEUyMTE5MDI2RjYyMDdBM0REMDU3Ii8+IDwvcmRmOkRlc2NyaXB0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",
				reservedIcon: "data:image/png;base64,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"
		};
		
		//--- get global data ---
		config.playerName = $("li#lordName").text();
		config.currentDate = parseInt((new Date())/1000, 10);
		config.isNormalBattle = ($("div#commentListChat ul.commentbtn").size()!=0);
		
		//--- create ui ---
		var containers = [];
		var allianceSearchContainer = config.isNormalBattle ? $("div#commentListChat ul.commentbtn") : $("div#commentListChat2 ul.commentbtn");
		containers.push(allianceSearchContainer);
		if(!config.isNormalBattle) containers.push($("div#commentListArmy ul.commentbtn"));
		
		var allianceSearchBtn = allianceSearchContainer.append('<li class="reserved"><a href="#"><img class="fade" title="先約" alt="先約" src="'+ config.reservedBtn +'" style="opacity: 1;"></a></li>');
		allianceSearchBtn = allianceSearchBtn.find("li.reserved");
		
		allianceSearchContainer.find("li").height("20px");
		
		
		//--- css ---
		allianceSearchContainer.css("padding", "0 6px 0 0").css("margin-top", "-2px");
		allianceSearchContainer.find("li").css("padding-bottom", "0");
		
		var currentYear = new Date().getFullYear();
		var currentMonth = new Date().getMonth();
		
		var getChatData = function(){
			var result = new Array();
			
			$.ajax({
				url: "/alliance/chat_view.php?pager_select="+config.lineNum,
				cache: false,
				dataType: "text",
				success: function(html){
					var chatLines = $(html).find("div.ig_decksection_mid div.chat_sp");
					//console.log(chatLines);
					chatLines.each(function(){
						// date check
						var dateString = $(this).find("div.chat_date").text();
						
						var dateElements = dateString.match(/^(\d+)\/(\d+)\s+(\d+):(\d+):(\d+)$/);
						var dateMonth = parseInt(dateElements[1], 10)-1;
						
						var date = new Date(
								(dateMonth<=currentMonth) ? currentYear : currentYear-1,
								dateMonth, parseInt(dateElements[2], 10),
								parseInt(dateElements[3], 10), parseInt(dateElements[4], 10), parseInt(dateElements[5], 10), 0);
						
						/*
						console.log(currentYear, currentMonth, new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
						console.log(date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
						console.log(config.currentDate, parseInt(date/1000), config.currentDate-parseInt(date/1000), config.dateRange);
						*/
						if(config.currentDate-parseInt(date/1000)>config.dateRange) return false;
						
						// owner check
						var owner = $(this).find("div.chat_orner a.sled_orner").text();
						if(!owner || owner==config.playerName) return true;
	//					if(!owner) return; // for debug
						
						// coordinate match
						var message = $(this).find("div.chat_text").text();
						var matches = message.match(/\(?\s*[\-0-9]+\s*,\s*[\-0-9]+\s*\)?/g);
						if(!matches) return;
						
						var coord;
						for(var i=0; i<matches.length; i++){
							coord = matches[i];
							coord.match(/\s*([\-0-9]+)\s*,\s*([\-0-9]+)\s*/);
							result.push({owner:owner, x:RegExp.$1, y:RegExp.$2});
						}
						
					});
	//				console.log(result);
					
					if(result.length) displayResult(result);
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					
				}
			});
		};
		
		var displayResult = function(values){
			var maplink = $("div#ig_map_movepanel li:eq(0) a").attr("href");
			var match = maplink.match(/c=(\d+)$/);
			var country = RegExp.$1;
			var map = $("map#mapOverlayMap");
			
			for(var i=0; i<values.length; i++){
				var value = values[i];
				
				var url = "/land.php?x="+value["x"]+"&y="+value["y"]+"&c="+country;
				
				var areas = map.children("area");
				var areainfo = "";
				$.each(areas, function(index, area){
					area = $(area);
					var attr_onclick = area.attr("onclick").toString();
					if(attr_onclick.indexOf(url)>=0){
						areainfo = area.attr("onmouseover");
						return false;
					}
				});
				
				if(areainfo){
					areainfo = areainfo.toString();
					//rewrite('　', '　', '　', '(37,43)', '　', '★★★★★★', '97.42', '1', '4', '3', '2', '1', ''); overOperation('rollover', '300px', '100px');
					areainfo.match(/overOperation\(.*["'](\d+px)["'], ["'](\d+px)["']\);/);
					
					var insertElement = $("img#rollover").clone();
					insertElement.attr("src", config.reservedIcon).attr("id", "").css("left", RegExp.$1).css("top", RegExp.$2);
					map.after(insertElement);
					
				}
			}
		};
		
		allianceSearchBtn.bind("click", function(event){
			event.preventDefault();
			event.stopPropagation();
			getChatData();
		});
	}
);