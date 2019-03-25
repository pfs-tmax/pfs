POURL='http://192.168.156.164:18088/common/common_sg/';

Top.Controller.create('MainInfraLayoutLogic', {
	showTaxOfficeCode : function(event, widget) {
		Top.Dom.selectById("DialogShowTaxOfficeCode").open();
	}
	
});

Top.Controller.create('ShowTaxOfficeCodeLogic', {
	close : function(event, widget) {
		Top.Dom.selectById("DialogShowTaxOfficeCode").close()
	}, 
	
});

Top.Controller.create('TmaxPFSLogic', {
	showTaxOfficeCode : function(event, widget) {
		$.ajax({
	        url: POURL+'ShowTaxOfficeCode?action=SO',
	        type: 'POST',
	        dataType: 'json',
	        contentType: 'application/json; charset=UTF-8',
	        data: JSON.stringify({
	          "dto": {
	            //"EMP_NAME": Top.Dom.selectById("EMP_NAME").getText()
	          }
	        }),
	        success: function(result) {
	          alert("Ajax success");
	          dto = result["dto"];
	          
	          drShowTaxOfficeCode.diShowTaxOfficeCode=dto.ListDO;
	          tv=Top.Dom.selectById("TableShowTaxOfficeCode")
	          tv.update();
	        },
	        error: function(error) {
	          alert("Ajax failed");
	        }
	      });//end of Ajax
	}
});


