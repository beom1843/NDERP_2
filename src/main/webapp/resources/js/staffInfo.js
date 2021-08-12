console.log("StaffInfo Module.......");

var staffInfoService = (function() {

	function create(staff, callback, error) {
		$.ajax({
			type : 'post',
			url : '/create',
			data : JSON.stringify(staff),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr) {
				if (callback) {
					callback(result);
				}
			},
			error : function(xhr, status, er) {
				console.log("========add_if_error========")
				if (error) {
					error(er);
				}
			}
		})
	}

	return {
		create:create
	}
})();