$(document).ready(
  // Functionality for the carousel
  () => {
    // Carousel
    $(".carousel").carousel({ duration: 1 });

    // Initialize modal
    $('.modal').modal();

    // Signup Modal
    $('#signup').modal('open');
    $('#signup').modal('close');
  }
);