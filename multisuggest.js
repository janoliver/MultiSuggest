/*!
 * MultiSuggest jQuery plugin
 *
 * Copyright (c) 2013 Jan Oliver Oelerich (http://www.oelerich.org/)
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * USAGE:
 *
 * $('#container').multisuggest(haystack, {
 *   separator         : ',',
 *   suggestionClass   : 'suggestions'
 * });
 *
 */

(function($) {

    $.fn.multisuggest = function(source, options) {

        var settings = $.extend({
            separator             : ',',
            suggestionClass       : 'suggestions'
        }, options);

        return this.each(function() {

            var textfield = $(this);

            var suggestions = $('<span/>').addClass(settings.suggestionClass);
            textfield.after(suggestions);

            var index = -1;
            var matches = [];
            var items = [];

            $(this).bind('keyup.multisuggest', function(e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                var shift = e.shift;

                // with the tab and right key iterate through the suggestions
                if(code == 9 || code == 39 || code == 37) {

                    e.preventDefault();


                    if((!shift && code == 9) || code == 39)
                        index++;
                    else
                        index--;

                    if(index == matches.length) 
                        index = 0;
                    if(index < 0) 
                        index = matches.length - 1;

                    items[items.length - 1] = matches[index];
                    textfield.val(items.join(", ") + ", ");

                } else {

                    // find out the current word and match it against 
                    // the haystack
                    matches = [];
                    index = -1;
                    items = textfield.val().split(settings.separator);

                    last_item = $.trim(items[items.length-1]);

                    $.each(source, function(index, item) {
                        if(last_item != "" && item.indexOf(last_item) !== -1) {
                            matches.push(item);
                        }
                    });

                    // display suggestions
                    suggestions.text(matches.join(", "));

                }
            });

        });

    };

})(jQuery);