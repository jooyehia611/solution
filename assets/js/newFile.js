let logo = document.getElementsByClassName('navbar-brand');
let mobLogo = document.getElementsByClassName('mob-logo');
let footLogo = document.getElementsByClassName('logo');


(function($) {
  
  $(document).ready(function() {
    if (localStorage.getItem('ezio_rtl_theme') === 'theme-dark') {
      $(logo).html(`
          <img src="assets/img/logo sol dark.png" width="60px" alt="logo"> 

      `);

    }

  });



})(jQuery);




(function($) {


  
  $(document).ready(function() {
    
    if (localStorage.getItem('ezio_rtl_theme') === 'theme-light') {
      $(logo).html(`

          <img src="assets/img/logo solution.png" width="60px" alt="logo"> 

      `);

    }
    

  });


})(jQuery);

// mobile

(function($) {
  
  $(document).ready(function() {
    if (localStorage.getItem('ezio_rtl_theme') === 'theme-dark') {
      $(mobLogo).html(`
          <img src="assets/img/logo sol dark.png" width="60px" alt="logo"> 

      `);

    }

  });



})(jQuery);




(function($) {


  
  $(document).ready(function() {
    
    if (localStorage.getItem('ezio_rtl_theme') === 'theme-light') {
      $(mobLogo).html(`

          <img src="assets/img/logo solution.png" width="60px" alt="logo"> 

      `);

    }
    

  });


})(jQuery);



