Top.Data.create("drShowTaxOfficeCode", {
	"diShowTaxOfficeCode" : 
		[
			{
				"dmShowTaxOfficeCode_field0" : "1",
				"dmShowTaxOfficeCode_field1" : "a",
				"dmShowTaxOfficeCode_field2" : "0",
			},
			{
				"dmShowTaxOfficeCode_field0" : "2",
				"dmShowTaxOfficeCode_field1" : "b",
				"dmShowTaxOfficeCode_field2" : "1",
			},
			{
				"dmShowTaxOfficeCode_field0" : "3",
				"dmShowTaxOfficeCode_field1" : "c",
				"dmShowTaxOfficeCode_field2" : "2",
			},
		],
	"diShowTaxOfficeCode_SelectBox" : 
		[
			{
				"dmShowTaxOfficeCode_SelectBox_field0" : "세무서명",
			},
			{
				"dmShowTaxOfficeCode_SelectBox_field0" : "소속청",
			},
		],
});
drShowTaxOfficeCode.setModel("diShowTaxOfficeCode","dmShowTaxOfficeCode");
drShowTaxOfficeCode.setModel("diShowTaxOfficeCode_SelectBox","dmShowTaxOfficeCode_SelectBox");
drShowTaxOfficeCode.setRelations([
]);