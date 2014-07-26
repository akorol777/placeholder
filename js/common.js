$(document).ready(function() {

	var placeholderColor = '#ccc';
	var placeholderColorWrite = '#000';
	$("form").find("input[type='text']").each(function() {
		var placeholder = $(this).attr("placeholder");
		$(this).attr('value',placeholder).css('color',placeholderColor);
		}).focusin(function() {
			$(this).css('color',placeholderColorWrite);
			var valPlaceholder = $(this).attr('placeholder');
			if ($(this).val()==valPlaceholder) {
				$(this).val(' ')
			};
			
		}).blur(function() {
		var valPlaceholder = $(this).attr('placeholder');
		if ($(this).val()==' ') {
			($(this).val(valPlaceholder).css('color',placeholderColor));
		};
	});

});