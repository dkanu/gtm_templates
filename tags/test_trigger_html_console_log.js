<script>
// Log gtm variables and custom variables in the console.
// Associate this test tag with the trigger that should be tested.
// Data will be logged to console on successful trigger fire, can log for debug.

  // gtm variable values
  var g1 = {{Click Element}};
  var g2 = {{Click URL}};
  var g3 = {{Click Text}};
  var g4 = {{Page URL}};
  
  var gtm_state = {"click element": g1,
                   "click url": g2,
                   "click text": g3,
                   "page url": g4
                  };
  // custom variables
  var c1 = '';
  var c2 = '';
  
  var custom_state = {"custom var1": c1,
                      "custom var2": c2
                     };
  
  // console write
  console.log(gtm_state);
  console.log(custom_state);
</script>