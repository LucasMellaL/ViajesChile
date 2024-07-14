function ocultarSeccionEnVentanaPequeña() {
    if ($(window).width() <= 1026) {
      $("#quienes").hide();
    } else {
      $("#quienes").show();
    }
  }
  
  $(document).ready(ocultarSeccionEnVentanaPequeña);
  $(window).resize(ocultarSeccionEnVentanaPequeña);
  
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
  