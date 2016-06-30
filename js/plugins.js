// Modernizr.load loading the right scripts only if you need them
Modernizr.load([
	{
        // Let's see if we need to load selectivizr
        test : Modernizr.borderradius,
        // Modernizr.load loads selectivizr for IE6-8
        nope : ['js/libs/selectivizr.js','js/libs/respond.min.js']
	}
]);


// as the page loads, call these scripts
$(document).ready(function() {
	
	// jQuery functions go here...

    // check placeholder browser support
    if (!Modernizr.input.placeholder) {
        // set placeholder values
        $(this).find('[placeholder]').each(function() {
            $(this).val( $(this).attr('placeholder') );
        });

        // focus and blur of placeholders
        $('[placeholder]').focus(function() {
            if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
                $(this).removeClass('placeholder');
            }
        }).blur(function() {
            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeholder');
            }
        });

        // remove placeholders on submit
        $('[placeholder]').closest('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
    }
    
}); /* end of as page load scripts */
