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
				console.log("========add_if_error========"+status)
				if (error) {
					error(er);
				}
			}
		})
	}//create
	
	function search(list, callback, error) {
		$.ajax({
			type : 'post',
			url : '/searchResult',
			data : JSON.stringify(list),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr) {
				if (callback) {
					callback(result);
				}
			},
			error : function(xhr, status, er) {
				console.log("========search_error========"+status)
				if (error) {
					error(er);
				}
			}
		})
	}

	return {
		create:create,
		search:search
	}
})();