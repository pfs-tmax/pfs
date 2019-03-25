
Top.Controller.create('MainTmaxPFSLayoutLogic', {
	navigation : function(event, widget) {
		alert("도움항목 dialog");
        
	}, infra : function(event, widget) {
		Top.Dom.selectById("ThisIsTheInframe").src("MainInfraLayout.html")
	}
	
});
