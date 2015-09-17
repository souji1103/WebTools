// ==UserScript==
// @name           post_reserved
// @description    ixa_post_reserved
// @version        0.0.3
// @namespace      ixa_post_reserved
// @author         server1-4.souji
// @include        http://*.sengokuixa.jp/facility/send_troop.php*
// @match          http://*.sengokuixa.jp/facility/send_troop.php*
// ==/UserScript==
//

function addJQuery(callback) {
	if(typeof(unsafeWindow.jQuery)!='undefined') {
		callback(unsafeWindow.jQuery);
	}else{
		var script = document.createElement("script");
		script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
		script.addEventListener('load', function() {
			var script2 = document.createElement("script");
			script2.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery);";
			document.body.appendChild(script2);
		}, false);
		document.body.appendChild(script);
	}
}

function prepare_post_reserved($){
	
	var config = {
		version: "0.0.3β",
	};
	
	var attackType = $("input[name='radio_move_type']").attr("value");
	if(attackType!="307") return;
//	if(attackType!="307" && attackType!="302") return; //for debug
	
	/*
	var target = $("div#ig_gofightconfirmboxtitle td:eq(0) span").text();
	target = $.trim(target);
	var matches = target.match(/\(\s*[\-0-9]+\s*,\s*[\-0-9]+\s*\)/);
//	if(!matches || matches.length==0) return;
	var coord = matches[0];
	*/
	
	var postData = {};
	
	var inputsContainer = $("form#input_troop");
	inputsContainer.append("<div style='text-align:right;color:#333333;'>activated post_reserved userscript "+config.version+"</div>");
	
	var inputs = inputsContainer.find("input");
	inputs.each(function(input){
		postData[$(this).attr("name")] = $(this).attr("value");
	});
//	postData["btn_send"] = "true";
	
	var timerid = setTimeout(function(){
		//--- create ui ---
		var btnContainer = $("div.btnarea");
		var btn = btnContainer.find("a:eq(0)");
		var btnImage = $("div.btnarea:eq(0) a:eq(0) img");
		var imageContainer = $("<a href='javascript:void(0)'/>").append(btnImage);
		btnContainer.prepend(imageContainer);
		btn.remove();
		
		var form = $("form#input_troop");
		var postCoodAndTrans = function(){
			form.append('<input type="hidden" value="true" name="btn_send">');
			form.submit();
		};
		
		var checkBoardBeforePost = function(){
			$.ajax({
				async: false,
				type: "POST",
				url: "/alliance/chat_view.php?pager_select=200", //adhoc
				cache: false,
				dataType: "text",
				success: function(html){
					var chatLines = $(html).find("div.ig_decksection_mid div.chat_sp");
					var matchFlag = false;
					chatLines.each(function(){
						console.log("FFF");
						if(matchFlag) return false;
						// coordinate match
						var message = $(this).find("div.chat_text").text();
						var matches = message.match(/\(?\s*[\-0-9]+\s*,\s*[\-0-9]+\s*\)?/g);
						if(!matches) return;
						
						var coord;
						for(var i=0; i<matches.length; i++){
							coord = matches[i];
							coord.match(/\s*([\-0-9]+)\s*,\s*([\-0-9]+)\s*/);
							if(RegExp.$1==postData["village_x_value"]&&RegExp.$2==postData["village_y_value"]){
								var owner = $(this).find("a.sled_orner").text();
								var date = $(this).find("div.chat_date").text();
								var posting = $(this).find("div.chat_text").text();
								matchFlag = true;
								var answer = confirm("注意！\n\n"+posting+" by "+owner+" at "+date+"\n\n出撃してもよろしいですか？");
								if(answer==true){
									postToBoardBeforeTrans();
								}
								return false;
							}
						}
					});
					if(!matchFlag){
						postToBoardBeforeTrans();
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					postToBoardBeforeTrans();
				}
			});
		};
		
		
		
		
		
		
		var postToBoardBeforeTrans = function(){
			$.ajax({
				async: false,
				type: "POST",
				url: "/alliance/chatif.php",
				cache: false,
				dataType: "json",
				data: {"comment_str":"(" + postData["village_x_value"] + "," + postData["village_y_value"] + ")"},
				success: function(result){
					postCoodAndTrans();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					postCoodAndTrans();
	//				console.log(XMLHttpRequest, textStatus, errorThrown);
				}
			});
		};
		
		btnContainer.find("a:eq(0)").bind("click", function(event){
			event.preventDefault();
			event.stopPropagation();
			checkBoardBeforePost();
		});
	},100);
}

window.addEventListener("load", addJQuery(prepare_post_reserved));