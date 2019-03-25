
Top.Controller.create('MainInfraLayoutLogic', {
	ShowTaxOfficeCode : function(event, widget) {
		Top.Dom.selectById("DialogShowTaxOfficeCode").open();
	}
	
});

Top.Controller.create('ShowTaxOfficeCodeLogic', {
	close : function(event, widget) {
		Top.Dom.selectById("DialogShowTaxOfficeCode").close()
	}
});

