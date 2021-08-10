console.log("CodeInfo Module.......");

var codeInfoService = (function() {

	function getReligion(callback, error) {
		console.log("geReligion...........");
		$.getJSON("/codeReligion", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getReligion

	function getMilitary(callback, error) {
		console.log("geMilitary...........");
		$.getJSON("/codeMilitary", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getMilitary

	function getHotline(callback, error) {
		console.log("geHotline...........");
		$.getJSON("/codeHotline", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getHotline

	function getBank(callback, error) {
		console.log("geBank...........");
		$.getJSON("/codeBank", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getBank

	function getCollege(callback, error) {
		console.log("geCollege...........");
		$.getJSON("/codeCollege", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getCollege

	function getFamily(callback, error) {
		console.log("geFamily...........");
		$.getJSON("/codeFamily", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getFamily

	function getCareer(callback, error) {
		console.log("geCareer...........");
		$.getJSON("/codeCareer", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getCareer

	function getDepartment(callback, error) {
		console.log("geDepartment...........");
		$.getJSON("/codeDepartment", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getDepartment

	function getPosition(callback, error) {
		console.log("gePosition...........");
		$.getJSON("/codePosition", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getPosition

	function getHired(callback, error) {
		console.log("geHired...........");
		$.getJSON("/codeHired", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getHired

	function getCertification(callback, error) {
		console.log("geCertification...........");
		$.getJSON("/codeCertification", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getCertification

	function getForeignlang(callback, error) {
		console.log("geForeignlang...........");
		$.getJSON("/codeForeignlang", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getForeignlang

	function getInstStack(callback, error) {
		console.log("geInstStack...........");
		$.getJSON("/codeInstStack", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getInstStack

	function getSmoking(callback, error) {
		console.log("geSmoking...........");
		$.getJSON("/codeSmoking", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getSmoking

	function getSoju(callback, error) {
		console.log("geSoju...........");
		$.getJSON("/codeSoju", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getSoju

	function getBeer(callback, error) {
		console.log("geBeer...........");
		$.getJSON("/codeBeer", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getBeer

	function getInterest(callback, error) {
		console.log("geInterest...........");
		$.getJSON("/codeInterest", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getInterest

	function getRole(callback, error) {
		console.log("geRole...........");
		$.getJSON("/codeRole", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getRole

	function getServer(callback, error) {
		console.log("geServer...........");
		$.getJSON("/codeServer", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getServer
	
	function getOs(callback, error) {
		console.log("getOs...........");
		$.getJSON("/codeOs", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getServer

	function getLanguage(callback, error) {
		console.log("geLanguage...........");
		$.getJSON("/codeLanguage", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getLanguage

	function getFramework(callback, error) {
		console.log("geFramework...........");
		$.getJSON("/codeFramework", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getFramework

	function getDbms(callback, error) {
		console.log("geDbms...........");
		$.getJSON("/codeDbms", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getDbms

	function getDevetc(callback, error) {
		console.log("geDevetc...........");
		$.getJSON("/codeDevetc", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getDevetc
	
	function getEducation(callback, error) {
		console.log("getEducation...........");
		$.getJSON("/codeEducation", function(code) {
			if (callback) {
				callback(code);
			}
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}// getEducation

	function getForeignlangType(callback, error){
		console.log("getForeignlangType.........");
		$.getJSON("/codeForeignlangType",function(code){
			if(callback){
				callback(code);
			}
		}).fail(function(xhr, status,err){
			if(error){
				error();
			}
		});
	}//getForeignlangType
	
	return{
		getReligion:getReligion,
		getMilitary:getMilitary,
		getHotline:getHotline,
		getBank:getBank,
		getCollege:getCollege,
		getFamily:getFamily,
		getCareer:getCareer,
		getDepartment:getDepartment,
		getPosition:getPosition,
		getHired:getHired,
		getCertification:getCertification,
		getForeignlang:getForeignlang,
		getInstStack:getInstStack,
		getSmoking:getSmoking,
		getSoju:getSoju,
		getBeer:getBeer,
		getInterest:getInterest,
		getRole:getRole,
		getServer:getServer,
		getOs:getOs,
		getLanguage:getLanguage,
		getFramework:getFramework,
		getDbms:getDbms,
		getDevetc:getDevetc,
		getEducation:getEducation,
		getForeignlangType:getForeignlangType
	}
	
})();