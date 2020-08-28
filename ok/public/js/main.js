$(document).ready(function () {
	$(document).on('click', '.js--goToTable', function () {
		const tableName = $('.js--tableName').val()
		window.location.href = `${tableName}`
	});

	// table 1
	$('#table1').DataTable({
		ajax: '/get-data-table1',
		columns: [{
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
			{
				data: null,
				render: function (data) {
					return `
						<div class="d-flex align-items-center">
							<a href="/update1/${data['ID']}" class="btn btn-dark mr-2">Update</a>
							<button class="btn btn-danger js--btn-delete" data-id="${data['ID']}">Delete</button>
						</div>
					`;
				}
			},
		],
	});

	$(document).on('click', '.js--btn-delete', function () {
		const id = $(this).data('id')
		const r = confirm("Are you sure?");
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
});
