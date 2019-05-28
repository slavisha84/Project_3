
//
// Pricing
//
(function($){
  
  // Models

  var plans = {us: [], eu: []}
  plans.max_encoders = 9
  
  for(var i = 1; i < 10; i++){
    plans.us.push({num_encoders: i, pounds_per_month: i*99});
    plans.eu.push({num_encoders: i, pounds_per_month: i*109});
  }
  
  
  // Slider fancy stuff on page load
/*  var decrementSlider = function(start_value){
    $('#slider_pay').trigger('slide', {value:start_value}).data('slider').value(start_value);
    if(start_value > 0 && (start_value >= dedicated_workers)) {
      setTimeout(function(){
        decrementSlider(start_value - 1);
      }, 60);
    }
  };
  */
  jQuery.fn.customOption = function(options) {
    var region_options = $(this)
    $("label").click(function () {
      $(region_options).find("label").removeClass("selected");
      $(this).addClass("selected");
      options.handler(this)
    });
  }
  
  $(document).ready(function() {
    if ($("#eu_price").length == 0) {
      return;
    }
  
    $("#eu_price").closest("div").hide()
    
    $("#region-radiobox").customOption(
      {handler: function(label){
        if($(label).attr("id") == "us-price-option") {
          $("#us_price").closest("div").show()
          $("#eu_price").closest("div").hide()
        }else if($(label).attr("id") == "eu-price-option") {
          $("#us_price").closest("div").hide()
          $("#eu_price").closest("div").show()
        }
      }})
    
    
    $('#slider_pay').slider({
      value:0,
      min: 0,
      max: plans.max_encoders -1,
      step: 1
    }).bind('slide', function(evt, ui){
      var us_plan = plans.us[ui.value];
      var eu_plan = plans.eu[ui.value];
      
      $(this).find('.ui-slider-handle').html(us_plan.num_encoders);
      
      $('#us_price').html(us_plan.pounds_per_month);
      $('#eu_price').html(eu_plan.pounds_per_month);
      
      var plan_button = $('#plan-button-' + (ui.value + 1));
      plan_button.prevAll().hide();
      plan_button.show();
      plan_button.nextAll().hide();
      
    }).find('.ui-slider-handle').html(1);
   /* decrementSlider(plans.max_encoders-1);*/
  });

})(jQuery);
