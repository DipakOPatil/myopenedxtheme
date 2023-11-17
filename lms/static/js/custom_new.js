$(document).ready(function(){
  $('#MaNUtAb').click(function(){
    $('body').addClass('no-scroll');
    $('#MaNUTOP').addClass('active');
    $('#MMFRSTMeNU1').removeClass('hide');
  });
  $('.CloseSideBar').click(function(){
    $('body').removeClass('no-scroll');
    $('#MaNUTOP').removeClass('active');
    $('#MMDroPDoWNMAiN').removeClass('active');
    $('#MMDroPDoWNMAiN .dropdown-menu').removeClass('active');

  });


  
  // $(body).click(function() {
  //   if($('#MaNUTOP').hasClass('active')){
  //       $('#MaNUTOP').removeClass('active');
  //   }
  // });

  $('.MultiBody .panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.MultiBody .panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  $('.HeAdOPT .panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('arrowactive');
  });

  $('.HeAdOPT .panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('arrowactive');
  });


 // $('#MaNUtAb').click(function(){
 //  alert(1);
 //    $('#MaNUTOP').toggleClass('active');
 //  });
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

 // $('#MaNUtAb').click(function(){
 //    $('body').addClass('no-scroll');
 //    $('#MaNUTOP').addClass('active');
 //    $('#MMFRSTMeNU1').removeClass('hide');
 //  });
  // $('.CloseSideBar').click(function(){
  //   $('body').removeClass('no-scroll');
  //   $('#MaNUTOP').removeClass('active');
  //   $('#MMDroPDoWNMAiN').removeClass('active');
  //   $('#MMDroPDoWNMAiN .dropdown-menu').removeClass('active');

  // });


$('#EXPCaTMENU').click(function(){
  $('#MMFRSTMeNU1').addClass('hide');
  $('#MMDroPDoWNMAiN').addClass('active');
});

// $('.mmenuoption').click(function(){
//   $('#MMFRSTMeNU1').removeClass('hide');
//   $(this).parent().hide();
//   $(this).parent().removeClass('active');
//   $('#MMDroPDoWNMAiN').removeClass('active');
// });

// $('#ArtInT').click(function(){
//   $('#ArtInTDP').addClass('active');
// });

// $('#DatASCIenCE').click(function(){

//   $('#DatASCIenCEDP').addClass('active');
// });

$(document).ready(function(){
  $('.CommmonClick').click(function(){
    $(this).parent().addClass('active_new');
    $('#MMDroPDoWNMAiN').addClass('active_new');
  });
  $('.mmenuoption').click(function(){
    
    $(this).parent().parent().removeClass('active_new');
    $('#MMDroPDoWNMAiN').removeClass('active_new');
    $('.dropdown-submenu').removeClass('active_new');
  });


});


$('#MMDroPDoWNMAiNBaCK').click(function(){
  $('#MMFRSTMeNU1').removeClass('hide');
  $('#MMDroPDoWNMAiN').removeClass('active');
});

$('.CommmonmultClick').click(function(){
  $('.multi-level-menu').addClass('active_new');
});



$('.mmenumultoption').click(function(){
  $('.multi-level-menu').removeClass('active_new');
});

// $('#IBMARTInTBPBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#IBMARTInTBP').removeClass('active');
// });

//  $('#IBMARTInTBPBK').click(function(){
    
//     $('#IBMARTInTBP').removeClass('active');
// });

// $('#ArtInTDPBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#ArtInTDP').removeClass('active');
// });






// $('#BiGDaTa').click(function(){
//   $('#BiGDaTaDP').addClass('active');
// });





// $('#BiGDaTaIBM').click(function(){
//   $('#BiGDaTaIBMDP').addClass('active');
// });


// $('#BiGDaTaDPBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#BiGDaTaDP').removeClass('active');
// });


// $('#BiGDaTaIBMDPBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#BiGDaTaIBMDP').removeClass('active');
// });





// $('#CYbeRSecuritY').click(function(){
//   $('#CYbeRSecuritYDP').addClass('active');
// });

// $('#CYbeRSecuritYDPBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#CYbeRSecuritYDP').removeClass('active');
// });


// $('#InTERNEtIOT').click(function(){
//   $('#InTERNEtIOTDP').addClass('active');
// });

// $('#InTERNEtIOTBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#InTERNEtIOTDP').removeClass('active');
// });


// $('#Blockchainm').click(function(){
//   $('#BlockchainDP').addClass('active');
// });

// $('#BlockchainBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#BlockchainDP').removeClass('active');
// });

// $('#ProductivitYM').click(function(){
//   $('#ProductivitYMDP').addClass('active');
// });

// $('#ProductivitYMBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#ProductivitYMDP').removeClass('active');
// });

// $('#ComplianceM').click(function(){
//   $('#ComplianceMDP').addClass('active');
// });

// $('#ComplianceMBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#ComplianceMDP').removeClass('active');
// });


// $('#HumanSkillM').click(function(){
//   $('#HumanSkillMDP').addClass('active');
// });

// $('#HumanSkillMBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#HumanSkillMDP').removeClass('active');
// });


// $('#CloudM').click(function(){
//   $('#CloudMDP').addClass('active');
// });

// $('#CloudMBK').click(function(){
//   $('#MMDroPDoWNMAiN').addClass('active');
//   $('#CloudMDP').removeClass('active');
// });
});

 

