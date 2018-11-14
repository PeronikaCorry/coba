function myFunction(){
	$('.dropdown-content').toggle('slow');
}

$(document).mouseup(function(e)
{
	var container = $('.dropdown-content');
	if (!container.is(e.target) && container.has(e.target).length === 0)
	{
	container.hide();
	}
});