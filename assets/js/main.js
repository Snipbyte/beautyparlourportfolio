AOS.init({
	duration: 1000,
	delay: 100
})
var slideIndex = 1;
function show()
{
	showDivs(slideIndex++)
	setTimeout(show, 2000);
	if (slideIndex == 5) 
	{
		slideIndex = 1;
	}
}
show();

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) 
	{
		slideIndex = 1
	}
	if (n < 1) 
	{
		slideIndex = x.length
	} 
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}