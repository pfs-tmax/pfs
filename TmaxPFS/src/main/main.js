Top.Controller.create('MainTmaxPFSLayoutLogic', {
	alert : function(event, widget) {
	},
	pre_select : function(event, widget) {
		ps=Top.Dom.selectById(widget.id);
		ps.setProperties({"backgroundColor":"#0075C8"});
		ps.setProperties({"textColor":"#FFFFFF"});
		
	}, pre_select_clear : function(event, widget) {
		ps=Top.Dom.selectById(widget.id);
		ps.setProperties({"backgroundColor":""});
		ps.setProperties({"textColor":""});
	}
	
	
});
