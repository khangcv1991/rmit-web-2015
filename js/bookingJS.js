/**
 * 
 */
var MOVIE_TIMES = {
	MOVIE1 : {
		times : [ "Wed", "Thur", "Fri", "Sat","Sun" ],
		times2 : [ "9PM", "9PM", "9PM", "9PM" ,"9PM"]
	},
	MOVIE2 : {
		times : [ "Mon", "Tue", "Wed", "Thur","Fri" ],
		times2 : [ "9PM", "9PM", "1PM", "1PM","1PM" ]
	},
	MOVIE3 : {
		times : [ "Mon", "Tue", "Sat","Sun" ],
		times2 : [ "6PM", "6PM", "3PM","3PM" ]
	},
	MOVIE4 : {
		times : ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
		times2 : ["1PM","1PM","6PM","6PM","6PM","12PM","12PM"]
	}
}
var PRICE_LIST_M_T = {
	S_FU : {
		value : 12
	},
	S_CO : {
		value : 10

	},
	S_CH : {
		value : 8
	},
	F_AD : {
		value : 25
	},
	F_CH : {
		value : 20
	},
	BB : {
		value : 20
	}
};
var PRICE_LIST_W_F = {
	S_FU : {
		value : 18
	},
	S_CO : {
		value : 15

	},
	S_CH : {
		value : 12
	},
	F_AD : {
		value : 30
	},
	F_CH : {
		value : 25
	},
	BB : {
		value : 30
	}
};
var PRICE_LIST_NULL = {
		S_FU : {
			value : 0
		},
		S_CO : {
			value : 0

		},
		S_CH : {
			value : 0
		},
		F_AD : {
			value : 0
		},
		F_CH : {
			value : 0
		},
		BB : {
			value : 0
		}
	};
function getPriceList() {
	var priceList;
	var e;
	e = document.getElementById("movie-name");
	if (e.value.trim() == "please select")
		return PRICE_LIST_NULL;
	e = document.getElementById("movie-time");
	if (e.value.trim() == "please select")
		return PRICE_LIST_NULL;
	e = document.getElementById("movie-day");
	if (e.value.trim() == "please select" || e.value.trim()== "")
		return PRICE_LIST_NULL;
	e = document.getElementById("movie-day");
	if (e.value.trim() == "Mon" || e.value.trim() == "Tue") {
		priceList = PRICE_LIST_M_T;
		return priceList;
	}
	if (e.value.trim() == "please select")
		return null;
	if (e.value.trim() == "Sat" || e.value.trim() == "Sun") {
		priceList = PRICE_LIST_W_F;
		return priceList;
	}
	if (e.value.trim() != "Sat" || e.value.trim() != "Sun") {
		e = document.getElementById("movie-time");
		if (e.value.trim() == "please select")
			return null;
		if (e.value.trim() == "1PM") {
			priceList = PRICE_LIST_M_T;
			return priceList;
		} else {
			priceList = PRICE_LIST_W_F;
			return priceList;
		}
	}

}
function calculatePrice(evt) {
	var priceList;
	var e;
	var q;
	var total = 0;
	setMovieShedule();
	priceList = getPriceList();
	if (priceList == null)
		return;
	e = document.getElementById("SA-quanity");
	q = parseInt(e.value);
	e = document.getElementById("SA-display");
	e.value = "$" + (q * priceList.S_FU.value).toFixed(2);
	total += q * priceList.S_FU.value;

	e = document.getElementById("SP-quanity");
	q = parseInt(e.value);
	e = document.getElementById("SP-display");
	e.value = "$" + (q * priceList.S_CO.value).toFixed(2);
	total += q * priceList.S_CO.value;

	e = document.getElementById("SC-quanity");
	q = parseInt(e.value);
	e = document.getElementById("SC-display");
	e.value = "$" + (q * priceList.S_CH.value).toFixed(2);
	total += q * priceList.S_CH.value;

	e = document.getElementById("FA-quanity");
	q = parseInt(e.value);
	e = document.getElementById("FA-display");
	e.value = "$" + (q * priceList.F_AD.value).toFixed(2);
	total += q * priceList.F_AD.value;

	e = document.getElementById("FC-quanity");
	q = parseInt(e.value);
	e = document.getElementById("FC-display");
	e.value = "$" + (q * priceList.F_CH.value).toFixed(2);
	total += q * priceList.F_CH.value;

	e = document.getElementById("B1-quanity");
	q = parseInt(e.value);
	e = document.getElementById("B1-display");
	e.value = "$" + (q * priceList.BB.value).toFixed(2);
	total += q * priceList.BB.value;

	e = document.getElementById("B2-quanity");
	q = parseInt(e.value);
	e = document.getElementById("B2-display");
	e.value = "$" + (q * priceList.BB.value).toFixed(2);
	total += q * priceList.BB.value;

	e = document.getElementById("B3-quanity");
	q = parseInt(e.value);00
	e = document.getElementById("B3-display");
	e.value = "$" + (q * priceList.BB.value).toFixed(2);
	total += q * priceList.BB.value;

	e = document.getElementById("total_price");
	e.value = "$" + (total).toFixed(2);
}
function setMovieShedule() {
	var e;
	var i;
	var opt;
	e = document.getElementById("movie-day");
	for (i = 1; i < e.options.length; i++) {
		//e.removeChild(e.options[i]);
		e.options[i].textContent = "";
	}	
	e = document.getElementById("movie-name");
	if (e.value.trim() == "Ant Man") {
		var tmp;
		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE1.times.length; i++) {			
			e.options[i + 1].textContent  = MOVIE_TIMES.MOVIE1.times[i];
			
		}
		
		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE1.times.length; i++) {		
			
			if(e.value.trim() == MOVIE_TIMES.MOVIE1.times[i])
				tmp = i;
			
		}
		e = document.getElementById("movie-time");
		e.options[1].textContent = MOVIE_TIMES.MOVIE1.times2[tmp];
	}
	if (e.value.trim() == "Force of Destiny") {

		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE2.times.length; i++) {			
			e.options[i + 1].textContent  = MOVIE_TIMES.MOVIE2.times[i];
			
		}
		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE2.times.length; i++) {		
			
			if(e.value.trim() == MOVIE_TIMES.MOVIE2.times[i])
				tmp = i;
			
		}
		e = document.getElementById("movie-time");
		e.options[1].textContent = MOVIE_TIMES.MOVIE2.times2[tmp];
	}
	
	if (e.value.trim() == "Ben-Hur") {

		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE3.times.length; i++) {			
			e.options[i + 1].textContent  = MOVIE_TIMES.MOVIE3.times[i];
			
		}
		
		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE3.times.length; i++) {		
			
			if(e.value.trim() == MOVIE_TIMES.MOVIE3.times[i])
				tmp = i;
			
		}
		e = document.getElementById("movie-time");
		e.options[1].textContent = MOVIE_TIMES.MOVIE3.times2[tmp];

	}
	
	if (e.value.trim() == "A Walk in the Woods") {

		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE3.times.length; i++) {			
			e.options[i + 1].textContent  = MOVIE_TIMES.MOVIE3.times[i];
			
		}
		
		e = document.getElementById("movie-day");

		for (i = 0; i < MOVIE_TIMES.MOVIE4.times.length; i++) {		
			
			if(e.value.trim() == MOVIE_TIMES.MOVIE4.times[i])
				tmp = i;
			
		}
		e = document.getElementById("movie-time");
		e.options[1].textContent = MOVIE_TIMES.MOVIE4.times2[tmp];

	}
	
}

function actionFormSubmit() {
	var mFrom = document.getElementById('mBookingForm');
	var flag = 0;
	var tmpElement;
	tmpElement = document.getElementById("movie-name");
	if (tmpElement.value.indexOf("please select") >= 0 || tmpElement.value.trim() == "") {
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "hidden-error");
		appendCSSclassByTag(tmpElement, "display-error");
		flag = 1;
	}
	else{
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "display-error");
		appendCSSclassByTag(tmpElement, "hidden-error");
	}
	
	tmpElement = document.getElementById("movie-day");
	if (tmpElement.value.indexOf("please select") >= 0 || tmpElement.value.trim() == "") {
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "hidden-error");
		appendCSSclassByTag(tmpElement, "display-error");
		flag = 1;
	}
	else{
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "display-error");
		appendCSSclassByTag(tmpElement, "hidden-error");
	}

		tmpElement = document.getElementById("movie-time");
	if (tmpElement.value.indexOf("please select") >= 0 || tmpElement.value.trim() == "") {
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "hidden-error");
		appendCSSclassByTag(tmpElement, "display-error");
		flag = 1;
	}
	else{
		tmpElement = document.getElementById("error-movie-select");
		removeCSSclassByTag(tmpElement, "display-error");
		appendCSSclassByTag(tmpElement, "hidden-error");
	}

	tmpElement = document.getElementById("total_price");
	if (tmpElement.value.trim() == "$0.00" || tmpElement.value.trim()== "") {
		tmpElement = document.getElementById("error-ticket-select");
		removeCSSclassByTag(tmpElement, "hidden-error");
		appendCSSclassByTag(tmpElement, "display-error");
		flag = 1;
	}
	else{
		tmpElement = document.getElementById("error-ticket-select");
		removeCSSclassByTag(tmpElement, "display-error");
		appendCSSclassByTag(tmpElement, "hidden-error");
	}

	
	if (flag == 0) {
		mFrom.submit();
	}

}