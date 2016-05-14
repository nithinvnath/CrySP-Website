$(document).ready(function () {
	//Check the URL and show the corresponding section
	if(window.location.hash) {
    var sectionID = window.location.hash.substring(1);
		$('div.contents').hide();
		$("#"+sectionID+"Div").show();
		$('ul.nav > li').removeClass('active');
		$("#"+sectionID).addClass('active');
	}else{
		$("#homeDiv").show();
		$("#home").addClass('active');
	}

  //Onclick event for email id. Should be triggered only once
  $('span.encrypted').one('click', function (e){
    e.preventDefault();
    var cipher = this.textContent;
    var plain = "";
    //Decrypt
    for (var i = 0; i < cipher.length; i ++) {
      var c = cipher[i];
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = cipher.charCodeAt(i);
        // Uppercase letters
        if ((code >= 65) && (code <= 90))
          c = String.fromCharCode(((code - 65 + 13) % 26) + 65);
        // Lowercase letters
        else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
      plain += c;
    }
    //Replace the contents
    this.textContent=plain;
    //Remove the class to get rid of the "click to decrypt message"
    this.className="";
  });

	//Onclick event for the nav bar	
    $('ul.nav > li').click(function (e) {
        e.preventDefault();
        if($(this).hasClass('active')){
        	return;
        }
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');

		$('div.contents').hide('fast');
		var divId = this.id;
		$("#"+divId+"Div").show('fast');
		window.location="#"+divId;
    });

    $(window).on("navigate", function (event, data) {
  		var direction = data.state.direction;
  			if (direction == 'back') {
    		// do something
  		}
  		if (direction == 'forward') {
    		// do something else
  		}
	});

    //Hide menu on click for smaller screens
    $('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
    });
});