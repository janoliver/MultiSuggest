## MultiSuggest

This is a small (in fact, tiny) jQuery plugin that shows suggestions
while the user types into some input field. It is largely inspired by
[polarblau/suggest](https://github.com/polarblau/suggest) but somewhat
simpler. Also, it allows for multiple values in the input field, separated
by `separator`, one of the options. 

The suggested values are shown in a `<span>` element that is inserted after
the input field. The css class of that container can be set using the 
`suggestionClass` option. You can iterate through the suggestions with the
arrow keys and the tab/shift tab key.

Please have a look at the `example.html` file to see, how it works. 