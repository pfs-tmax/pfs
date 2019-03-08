
Top.Controller.create('MainTmaxPFSLayoutLogic', {
	navigation : function(event, widget) {
		alert("도움항목 dialog");
        Top.Dom.selectById("dialogHelp").open();
	}
});
