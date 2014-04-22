// ==UserScript==
// @name           count_kuji
// @description    ixa_count_kuji
// @version        0.1.5
// @namespace      ixa_count_kuji
// @author         server1-4.souji
// @include        http://*.sengokuixa.jp/senkuji/senkuji_history.php
// @match          http://*.sengokuixa.jp/senkuji/senkuji_history.php
// ==/UserScript==
//

(function(d, func){
	var h = d.getElementsByTagName('head')[0];
	
	var s1 = d.createElement("script");
	s1.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
	var s2 = d.createElement("script");
	s2.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js");
	
	var c1 = d.createElement("link");
	c1.setAttribute("href", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/ui-lightness/jquery-ui.css");
	c1.setAttribute("rel", "stylesheet");
	c1.setAttribute("type", "text/css");
	h.appendChild(c1);
	
	var c2 = d.createElement("style");
	c2.setAttribute("type", "text/css");
	c2.textContent = "table.resultTable{border: 1px #E3E3E3 solid; border-collapse: collapse; border-spacing: 0;}"+
		"table.resultTable th{padding: 5px; border: #E3E3E3 solid; border-width: 0 0 1px 1px; background: #F5F5F5; font-weight: bold; line-height: 120%; text-align: center;}"+
		"table.resultTable td{padding: 5px; border: 1px #E3E3E3 solid; border-width: 0 0 1px 1px; text-align: center; font-family: sans-serif;}";
	h.appendChild(c2);
	
	
	var count = 0;
	var loadedFunc = function(){
		var s3 = d.createElement("script");
		s3.textContent = "jQuery.noConflict();(" + func.toString() + ")(jQuery);";
		h.appendChild(s3);
	}
	
	s1.addEventListener('load', function(){
		s2.addEventListener("load", loadedFunc, false);
		h.appendChild(s2);
	}, false);
	
	h.appendChild(s1);
	
})(document, function($){
	//--- config ---
	var version = "0.1.5";
	var kujiTypes = ["白", "銀", "金", "戦", "火", "炎", "天下", "天上", "他"];
	var kujiRarities = ["天","極","特","上","序"];
	var kujiKakaku = [0, 300, 600, 0, 0, 0, 0, 0, 0];
	var rarityIconUrlTemplate = "http://cache.sengokuixa.jp/world/20110627-03/img/card/icon/icon_[[rarity]].png";
	var kujiRaritiesRoman = ["ten", "goku", "toku", "jou", "jo"];
	var clipDetail = true;
	
	//--- initialize btn ---
	var btnContainer = $("div#ig_deckheadmenubox");
	var btnText = $('<span id="start_count">くじの統計を取る</span>');
	btnContainer.append(btnText);
	var btn = btnText.button();
	
	//--- fulldump btn ---
	var checkbox = $('<input type="checkbox" style="margin:0px 2px 0px 5px;"><span style="color:#ffffff;font-weight:bold;">フルダンプ</span>');
	btnContainer.append(checkbox);
	
	//--- initialize dialog ---
	var dialogContainer = $('<div id="dialog" title="くじ履歴 '+ version +'"></div>');
	var body = $("body");
	body.append(dialogContainer);
	var dialog = dialogContainer.dialog({
		autoOpen: false,
		width: 500,
		close: function(event, ui){
			btn.button("enable");
		}
	});
//	dialog.dialog("close");
	
	//--- initialize progressbar ---
	var progressBar = $('<div id="progressbar"></div>');
	dialogContainer.append(progressBar);
	var progress = progressBar.progressbar({value: 0});
	progressBar.hide();
	
	//--- initialize result table header ---
	var resultContainer = $('<div id="resultContainer"/>');
	dialogContainer.append(resultContainer);
	resultContainer.hide();
	
	var resultTableOrg = $('<table class="resultTable"><tbody><tr class="header"><th>くじ種</th><th>試行回数</th></tr></tbody></table>');
	var tableHeader = resultTableOrg.find("tr");
	for(var i=0; i<kujiRaritiesRoman.length; i++){
		var rtype = $('<th><img src="'+ rarityIconUrlTemplate.replace("[[rarity]]", kujiRaritiesRoman[i]) +'"></th>');
		tableHeader.append(rtype);
	}
	tableHeader.append("<th>金額</th>");
	resultTableOrg.append(tableHeader);
	
	//--- event ---
	btn.click(function(){
		//--- init ---
		dialog.dialog("open");
		btn.button("disable");
		
		clipDetail = checkbox.is(':checked');
		
		scrapeKujis();
	});
	
	
	//--- main function ---
	var scrapeKujis = function(){
		var href = $("div.common_box1bottom ul.pager li.last a[title='last page']").attr("href");
		var pageMax = 1;
		if(href){
			var splitted = href.split("=");
			pageMax = parseInt(splitted[1]);
		}
		
		//--- init ---
		var result = [
			[0, 0, 0, 0, 0], //白
			[0, 0, 0, 0, 0], //銀
			[0, 0, 0, 0, 0], //金
			[0, 0, 0, 0, 0], //戦
			[0, 0, 0, 0, 0], //火
			[0, 0, 0, 0, 0], //炎
			[0, 0, 0, 0, 0], //天下
			[0, 0, 0, 0, 0], //天上
			[0, 0, 0, 0, 0]  //他
		];
		var clip = [];
		resultContainer.empty();
		var resultTable = resultTableOrg.clone();
		
		//--- analyze each line ---
		var readLines = function(kujiLines, index){
			if(clipDetail && !clip[index]) clip[index] = "";
			
			kujiLines.each(function(){
				var kujiRawType = $(this).find("td:eq(5)").text();
				var kujiRarity = $(this).find("td img").attr("alt");
				
//				console.debug($(this).find("td"));
				//(sample) kujiType: "戦国くじ【天下】", "戦国くじ【 白 】"
				var tmpKujiType = kujiRawType.substr(5);
				var kujiType = tmpKujiType.substr(0, tmpKujiType.length-1);
				kujiType = jQuery.trim(kujiType);
				
				var typeIndex = kujiTypes.indexOf(kujiType);
				if(typeIndex<0) typeIndex = kujiTypes.length-1;
				result[typeIndex][kujiRarities.indexOf(kujiRarity)] ++;
				
				if(clipDetail){
					var kujiNum = $(this).find("td:eq(0)").text();
					var kujiName = $(this).find("td:eq(3) strong").text();
					var kujiTime = $(this).find("td:eq(4)").text();
					
					clip[index] += (kujiNum + "\t" + kujiRarity + "\t" + kujiName + "\t" + kujiTime + "\t" + kujiRawType + "\n");
				}
				
			});
//			console.log(index, clip[index]);
		};
		
		var displayResult = function(resultData){
			for(var i=0; i<kujiTypes.length; i++){
				var typeData = resultData[i];
				var dataSum = 0;
				for(var j=0; j<typeData.length; j++){
					dataSum += typeData[j];
				}
				var tr = resultTable.find("tbody").append("<tr/>");
				tr.append("<td>"+kujiTypes[i]+"</td>");
				tr.append("<td>"+dataSum+"</td>");
				for(var k=0; k<typeData.length; k++){
					var typeDatum = typeData[k];
					var prob = (dataSum==0) ? 0 : Math.round(typeDatum*1000/dataSum)/10;
					tr.append("<td>"+typeDatum+"("+prob+"%)</td>");
				}
				tr.append("<td>\\"+numberFormat(kujiKakaku[i]*dataSum)+"</td>");
			}
			resultContainer.append(resultTable);
			if(clipDetail){
				var detailText = $('<textarea cols="80" rows="5" style="margin:5px;"/>');
				detailText.text(clip.join(""));
				resultContainer.append(detailText);
			}
			resultContainer.show();
		};
		
		var finishedCount = 1;
		var isFailed  = false;
		var requestKujiHistory = function(page){
			if(isFailed) return;
			
			$.ajax({
				url: '/senkuji/senkuji_history.php?p='+page,
				cache: false,
				dataType: "text",
				success: function(html){
					var lines = $(html).find("div.common_box1bottom tr.fs12");
					readLines(lines, page-1);
					
					finishedCount ++;
					
					// update progressbar
					progress.progressbar({value:Math.round(finishedCount*100/pageMax)});
					
					if(finishedCount>=pageMax){
						progressBar.hide();
						displayResult(result);
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					if(isFailed) return;
					
					isFailed = true;
					alert("アクセス失敗");
					return false;
				}
			});

		};
		
		var numberFormat = function(num){
			num = String(num);
			while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
			return num;
		}
		
//		pageMax = 2; // for debug
		
		readLines($("div.common_box1bottom tr.fs12"), 0);
		
		if(pageMax<=1 || !pageMax){
			displayResult(result);
		}else{
			progressBar.show();
			progress.progressbar({value: 0});
			
			for(var i=2; i<=pageMax; i++){
				if(!isFailed) requestKujiHistory(i);
			}
		}
		
	}
	
	return;
});