$(document).ready(function () {
	$(document).on('click', '.js--goToTable', function () {
		const tableName = $('.js--tableName').val()
		window.location.href = `${tableName}`
	});

///////////////TABLE 1
	$('#table1').DataTable({
		ajax: '/get-data-table1',
		columns: [
			{
				data: null,
				render: function (data) {
					return `
						<div class="d-flex align-items-center">
							<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
							<button class="btn btn-danger js--btn-delete1" data-id="${data['ID']}">Delete</button>
						</div>
					`;
				}
			},{
				data: null,
				render: function(data) {
					return data['ID']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Blue_Light_Branch']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Surname']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['First_Names']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Address_Line_1']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Address_Line_2']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Phone_Home']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Phone_Work']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Phone_Mobile']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Email']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['DOB']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Drivers_Licence']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Class']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Expiry_Date']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Current_Position']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Organisation']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Main_Responsibilities']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Referee_1']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Ref1_Relationship']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Ref1_Phone']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Referee_2']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Ref2_Relationship']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Ref2_Phone']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Preexisting_Medical_Cond']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['If_Yes_Details']
				},
			},
			{
				data: null,
				render: function (data) {
					return data['Blue_Card']
				}
			},
			{
				data: null,
				render: function(data) {
					return data['Issue_Date']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Issed_by_BL']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['If_No_Verified']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['B_C_Expiry_Date']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Emergency_Contact_1']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC1_Relationship']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC1_Phone']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC1_Phone_Wk']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC1_Mobile']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Emergency_Contact_2']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC2_Relationship']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC2_Phone']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC2_Phone_Wk']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['EC2_Mobile']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['POI_Documents_sighted']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Latest_Award']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Year_Received']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['File_Notes']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['Redundant']
				},
			},
			{
				data: null,
				render: function(data) {
					return data['ON_BC_LIST']
				},
			},
			
		],
	});
	








////////////////TABLE2
	$('#table2').DataTable({
		ajax: '/get-data-table2',
		columns:[
			{
				data: null,
				render: function (data) {
					return `
						<div class="d-flex align-items-center">
							<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
							<button class="btn btn-danger js--btn-delete2" data-id="${data['ID']}">Delete</button>
						</div>
					`;
				}
			},{
			data: null,
			render: function(data) {
				return data['ID']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['BRANCH']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['MEMBERSHIP']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['REGION']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['MAIL_CONTACT']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['ADDRESS_LINE_1_STATION/BRANCH']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['ADDRESS_LINE_2_PO_BOXSTREET']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['ADDRESS_LINE_3_SUBURB_TOWN']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['COORDINATOR']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['PHONE']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['FAX']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['EMAIL']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['HOME']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['MOBILE']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['OTHER_CONTACTS']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['PRESIDENT']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['PRES_PHONE']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['PRES_ADDRESS']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['VICE_PRESIDENT']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['V/P_Phone']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['V/P_Address']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['SECRETARY']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Sec_Phone']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Sec_Address']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['TREASURER']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Tres_Phone']
			},
		},
		{
			data: null,
			render: function (data) {
				return data['Tres_Address']
			}
		},
		{
			data: null,
			render: function(data) {
				return data['Check59']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['2008_A']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check63']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Affiliated_Since']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text69']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text72']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check75']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check79']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text81']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text83']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check85']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text87']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Text89']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Combo91']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check94']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check100']
			},
		},
		{
			data: null,
			render: function(data) {
				return data['Check102']
			},
		},
		

	],
});










/////////////////TABLE3
$('#table3').DataTable({
	ajax: '/get-data-table3',
	columns:[
		{
			data: null,
			render: function (data) {
				return `
					<div class="d-flex align-items-center">
						<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
						<button class="btn btn-danger js--btn-delete3" data-id="${data['ID']}">Delete</button>
					</div>
				`;
			}
		},{
		data: null,
		render: function(data) {
			return data['ID']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['BRANCH']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['MEMBERSHIP']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['REGION']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['MAIL_CONTACT']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['ADDRESS_LINE_1_STATION/BRANCH']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['ADDRESS_LINE_2_PO_BOXSTREET']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['ADDRESS_LINE_3_SUBURB_TOWN']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['COORDINATOR']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['PHONE']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['FAX']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['EMAIL']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['HOME']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['MOBILE']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['OTHER_CONTACTS']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['PRESIDENT']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['PRES_PHONE']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['PRES_ADDRESS']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['VICE_PRESIDENT']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['V/P_Phone']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['V/P_Address']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['SECRETARY']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Sec_Phone']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Sec_Address']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['TREASURER']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Tres_Phone']
		},
	},
	{
		data: null,
		render: function (data) {
			return data['Tres_Address']
		}
	},
	{
		data: null,
		render: function(data) {
			return data['Text72']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Check75']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Check79']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Text81']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Text83']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Check85']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Text87']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Text89']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Text91']
		},
	},




	
],
});









/////////////////TABLE4
$('#table4').DataTable({
	ajax: '/get-data-table4',
	columns:[
		{
			data: null,
			render: function (data) {
				return `
					<div class="d-flex align-items-center">
						<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
						<button class="btn btn-danger js--btn-delete4" data-id="${data['ID']}">Delete</button>
					</div>
				`;
			}
		},{
		data: null,
		render: function(data) {
			return data['Key']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['BRANCH']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['First_Name']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Surname']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Year']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Combo22']
		},
	},
],
});






///////////////////TABLE5
$('#table5').DataTable({
	ajax: '/get-data-table5',
	columns:[
		{
			data: null,
			render: function (data) {
				return `
					<div class="d-flex align-items-center">
						<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
						<button class="btn btn-danger js--btn-delete5" data-id="${data['ID']}">Delete</button>
					</div>
				`;
			}
		},{
		data: null,
		render: function(data) {
			return data['ID']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Title']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['FirstName']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Surname']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Region']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Address1']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Address2']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['State']
		},
	},
	{
		data: null,
		render: function(data) {
			return data['Postcode']
		},
	},
	
],
});




	$(document).on('click', '.js--btn-delete1', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure delete volunteer?");
		if (r == true) {
			$.ajax({
				url: '/delete1',
				type: 'post',
				data: {
					id,
				},
				success: function (result) {
					window.location.reload()
				}
			});
		}
	})

	$(document).on('click', '.js--btn-delete2', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure delete affiliate member?");
		if (r == true) {
			$.ajax({
				url: '/delete2',
				type: 'post',
				data: {
					id,
				},
				success: function (result) {
					window.location.reload()
				}
			});
		}
	})

	$(document).on('click', '.js--btn-delete3', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure delete associate member?");
		if (r == true) {
			$.ajax({
				url: '/delete3',
				type: 'post',
				data: {
					id,
				},
				success: function (result) {
					window.location.reload()
				}
			});
		}
	})


	$(document).on('click', '.js--btn-delete4', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure delete reward?");
		if (r == true) {
			$.ajax({
				url: '/delete4',
				type: 'post',
				data: {
					id,
				},
				success: function (result) {
					window.location.reload()
				}
			});
		}
	})
	
	$(document).on('click', '.js--btn-delete5', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure delete qps_agm_invites?");
		if (r == true) {
			$.ajax({
				url: '/delete5',
				type: 'post',
				data: {
					id,
				},
				success: function (result) {
					window.location.reload()
				}
			});
		}
	})

	
});