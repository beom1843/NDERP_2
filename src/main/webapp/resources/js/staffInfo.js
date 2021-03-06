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

	function getPage(number, callback, error) {
		$.ajax({
			type : 'post',
			url : '/page',
			data : JSON.stringify(number),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr) {
				if (callback) {
					callback(result);
				}
			},
			error : function(xhr, status, er) {
				console.log("========getTotal_error========"+status)
				if (error) {
					error(er);
				}
			}
		})
	}
	
	function read(param,callback, error){
		var staff_no = param.staff_no;
		$.getJSON("/get/"+staff_no+".json", 
				function(data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr,status,err){
			if(error){
				error();
			}
		});
	}
	return {
		create:create,
		search:search,
		getPage,getPage,
		read:read
	}
})();