function init ()
{
	//console.log ("ага была загрузка");

	var myRadio = document.getElementById('r1');
	if (myRadio)
	{
		myRadio.addEventListener ( "change" , foo);
	}
}



function foo ( e )
{
	alert("Hello man");
}