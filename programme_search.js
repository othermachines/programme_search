
(function ($) {

  Drupal.behaviors.programmeSearch = {
    attach: function (context) {

      $('#edit-search-programmes').focus(
        function(){
          $(this).val('');
      });

      /* If using Drupal core version < 7.36, this requires a patch to 
         autocomplete.js. See issue: https://www.drupal.org/node/365241. */

      $("#edit-search-programmes", context).bind('autocompleteSelect', function(event, node) {

        var key = $(node).data('autocompleteValue');
        var label = $(node).text();

        // If matches found...
        if (key != '0') {

          // Set the value of this field.
          $(this).val(label);

          // Redirect user to entity path.
          window.location = Drupal.settings.basePath + key;
        }
        else {

          // If no matches, reset.
          $(this).val('');
          $(this).focus();
        }
      });
    }
  };

})(jQuery);
