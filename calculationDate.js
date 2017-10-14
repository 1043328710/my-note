/*计算给定两段时间差（天） 如 2017-1-1  2017-9-10*/

function calculationDate(date1, date2){
	date1 = new Date(date1);
	date2 = new Date(date2);
	var date = +(date1 - date2);
	return date / (60 * 60 * 24 * 1000);
}

<<<<<<< HEAD
calculationDate('2017-9-10','2017-1-1')
=======
calculationDate('2017-9-10','2017-1-1')
>>>>>>> js
