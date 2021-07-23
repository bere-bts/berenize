/* .js files add interaction to your website */
var factList =[
	"About 90% of women who come to Whole Woman's Health clinics are more than six weeks into their pregnancy.” - Amy Hagstrom Miller", /*0*/
	"At 6 weeks of the fetal development, there is no heart that beats ", /*1*/
	"The Heartbeat Bill is one of the nation's strictest abortion measures.", /*2*/
	"	The Heartbeat Bill still applies in cases such as rape and incest.", /*3*/
	"Anyone who happens to find out about someone having an abortion after 6-weeks of pregnacy can literally sue anyone who was involved in making it happen.",/*4*/
];
 console.log (factList[2]);
 
 var fact = document.getElementById ("fact");
 var myButton = document.getElementById ("myButton");
 var count = 0;
 
 myButton.addEventListener ("click", displayFact);

function displayFact(){
	fact.innerHTML =  factList [count];
	count++;
	if (count == factList.length){
		count = 0;
	
	}
}
