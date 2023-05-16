$('.text-center a').addClass('etclinks');
 $('.text-center td:nth-child(2)').addClass('taskstatus');
function generateHrefValues() {
	// Get all the anchor tags in the HTML document
	var anchors = document.getElementsByClassName("etclinks");
	var status = document.getElementsByClassName("taskstatus");

	// Create an empty array to store the href values
	var hrefValues = [];

	// Loop through all the anchor tags and push their href values to the hrefValues array
	for (var i = 0; i < anchors.length && i < status.length; i++) {
		if (status[i].textContent != "Archived" && status[i].textContent != "Break"){
			hrefValues.push(anchors[i].getAttribute("href"));
		}else{
		hrefValues.push(anchors[i].getAttribute("href") + " - " + status[i].textContent);
		};
	}

	// Display the href values in the output div
	alert(hrefValues.join("\n"));
}
$('.etc_links').insertAfter('.content');