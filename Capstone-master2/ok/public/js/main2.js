$(document).ready(function () {
	$(document).on('click', '.js--goToTable', function () {
		const tableName = $('.js--tableName').val()
		window.location.href = `${tableName}`
    });
    $('#table2').DataTable({
		ajax: '/get-data-table2',
		columns:[{
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
        const r = confirm("Are you sure delete affiliate ?");
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

});
