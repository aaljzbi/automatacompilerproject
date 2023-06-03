   $("#graph1").hide();

   $( ".reg1" ).on( "click", function() {
      $("#regEx").text("(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)");
   } );

   $( ".reg2" ).on( "click", function() {
      $("#regEx").text("(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*");

   } );

  $(".dfa" ).on( "click", function() {
      $("#Dfa").text("DFA");
   } );

   $(".pda" ).on( "click", function() {
      $("#Dfa").text("PDA");
   } );  

   $(".cfg" ).on( "click", function() {
      $("#Dfa").text("CFG");
   } );

 $("#calcExecute" ).on( "click", function() {
   var regChosen = $("#regEx").text();
   var dfaChosen = $("#Dfa").text();
   $(".regexChosen").text(regChosen);
   $(".automataChosen").text(dfaChosen);

   $(".image").hide();

      if($("#regEx").text()  === '(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)' && $("#Dfa").text() === "DFA")
      {
         $("#image1").show();
      }
      else if($("#regEx").text()  === '(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*' && $("#Dfa").text() === "DFA")
      {
         $("#image2").show();
      }
} );

$("#calcExecuteInput").on( "click", function() {
   
   var inputString = $("#inpBox").val(); 
   var selectedCFG = $("#regEx").text();
   var isValid = false;
   if (selectedCFG === "(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)") {
      isValid = /^((bab)*(b|a)(bab|aba)(a|b)*(aa|bb)*(b|a|bb)(a|b)*(aa|bb))$/.test(inputString); } 
   else if (selectedCFG ===  "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*") {
      isValid =/^((1|0)*(11|00)(00|11)*(1|0|11)(1|0|11)*(101|111)(101|111)*(1|0*|11)(1|0*|11)*)*$/.test(inputString);
   }
   if (isValid) {
      $("#calcValidate").text("VALID");
      $("#calcValidate").css('background-color', 'green');
   } 
   else {
      $("#calcValidate").text("NOT VALID");
      $("#calcValidate").css('background-color', 'red');   }
}); 


