let ksengen = prompt('緊急レベルは？');
ksengen = parseInt(ksengen);
if(ksengen == 1) {
	alert('雨合羽を集める');
	alert('不要不急の外出を控える');
} else {
	if(ksengen == 2) {
	alert('通天閣を黄色に点灯');
	} else {
		if(ksengen == 3) {
		alert('通天閣を黄色に点灯');
		alert('Gotoは対象外に');
		} else {
			if(ksengen == 4) {
			alert('通天閣を赤に点灯');
			alert('太陽の塔も赤に点灯');
			} else {
				alert('ふざけないでください');
			}
		}
	}
}
