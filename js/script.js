$(document).ready(function() {

// hide divs
  function hideAll() {
    $('#ps').hide();
    $('#smash').hide();
    $('#feel').hide();
    $('#anthem').hide();
  }
  hideAll();

// click for div to appear
$('.track').click(function() {
  hideAll();

// get id of clicked div
  switch ($(this).attr("id")) {
        case "good":
          $('#ps').show();
          break;
        case "mad":
          $('#smash').show();
          break;
        case "rebel":
          $('#feel').show();
          break;
        case "loud":
          $('#anthem').show();
          break;
      }

      //switch audio
  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});

    });

  });
