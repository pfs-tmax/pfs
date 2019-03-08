var menu_model_TmaxPFS = Top.Data.create({
	"MenuGnb" : [
		{id: "menuInfra",	text: "기초설정",	onClick : "m1",	icon: "icon-folder2",	
			children: [
				{id: "m11",	text: "환경설정",			onClick : "m1",		},
				{id: "m12",	text: "도움항목",			onClick : "m1_2",	},
				{id: "m14",	text: "회사등록",			onClick : "m1_2",	},
				{id: "m15",	text: "거래처등록",		onClick : "m1_2",	},
				{id: "m16",	text: "계정과목및적요",		onClick : "m1_2",	},
				{id: "m17",	text: "전기분재무상태표",	onClick : "m1_2",	},
				{id: "m18",	text: "전기분손익계산서",	onClick : "m1_2",	},
				{id: "m19",	text: "거래처등록",		onClick : "m1_2",	},
				
				]
		},
		{id: "menuFA",	text: "재무회계",	onClick : "mPSN0",	icon: "icon-dollar",	
			children: [{
				id: "m21",	text: "재무회계2",	onClick : "mPSN1",	
				children: [{
					id: "m21",	text: "재무회계",	onClick : "mPSN1",	},{
					id: "m22",	text: "재무회계 요약",	onClick : "mPSN2",	}]
			},{
				id: "m22",	text: "재무회계 요약",	onClick : "mPSN2",	}]
		},
		{id: "menuTA",	text: "세무회계",	onClick : "mFNC0",	icon: "icon-command2",	
			children: [{
				id: "m31",	text: "세무회계",	onClick : "mFNC1",	},{
				id: "m32",	text: "세무회계 요약",	onClick : "mFNC2",	}]
		},
		{id: "menuMA",	text: "관리회계",	onClick : "m1",	icon: "icon-chart_stackedcolumn",	
			children: [{
				id: "m11",	text: "관리회계",	onClick : "m1",	},{
				id: "m12",	text: "관리회계 요약",	onClick : "m1_2",	}]
		},
		{id: "menuCA",	text: "원가회계",	onClick : "m1",	icon: "icon-won_shape",	
			children: [{
				id: "m11",	text: "원가회계",	onClick : "m1",	},{
				id: "m12",	text: "원가회계 요약",	onClick : "m1_2",	}]
		},
		{id: "menuHR",	text: "인사업무",	onClick : "m1",	icon: "icon-lnb_network",	
			children: [{
				id: "m11",	text: "인사업무",	onClick : "m1",	},{
				id: "m12",	text: "인사업무 요약",	onClick : "m1_2",	}]
		},
		{id: "menuProject",	text: "프로젝트",	onClick : "m1",	icon: "icon-project",	
			children: [{
				id: "m11",	text: "프로젝트 목록",	onClick : "m1",	},{
				id: "m12",	text: "프로젝트 요약",	onClick : "m1_2",	}]
		},
		{id: "menuNotice",	text: "공지사항",	onClick : "m2",	icon: "icon-file",
			children: [{
				id: "m21",	text: "공지사항 목록",	onClick : "m2",	},{
				id: "m22",	text: "공지사항하위2",	onClick : "m2_2",	}]
		},
		{id: "menuRequest",	text: "요구사항",	onClick : "m3",	icon: "icon-message",
			children: [{
				id: "m31",	text: "요구사항하위",	onClick : "m3_1",	},{
				id: "m32",	text: "요구사항하위2",	onClick : "m3_2",	}]
		},
		{id: "menuWork",	text: "업무관리",	onClick : "m4",    icon: "icon-file",
			
		},
		{id: "menuRnR",	text: "인력관리",	onClick : "m5",    icon: "icon-expert",
			
		},
		{id: "menuDoc",	text: "문서관리",	onClick : "m6",    icon: "icon-prozone_file",
			
		},
		{id: "menuIssue",	text: "이슈관리",	onClick : "m7",    icon: "icon-square_check",
			
		},
		{id: "menuAsk",	text: "요청사항",	onClick : "m8",    icon: "icon-tcc_help",
			
		},
		],
});
icon-administrator_02