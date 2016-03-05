//sets counter globally to differentiate the student divs so that they display individually

var counter = 0;
var indivStudent = 0;

$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: '/data',
      success: function (data) {
        appendDom(data);
        showJoette();
      }

    }); // end of ajax call

  //begin next click events

    $('.next').on("click", function(){
      $(".student-profile" + indivStudent).show();
      byeJoette();
    });
    $('.next').on("click", function(){
      $(".student-profile" + indivStudent).hide();
      indivStudent++;
      if(indivStudent >= 23){
        indivStudent = 0;
      }
      $(".student-profile" + indivStudent).show();

      console.log(indivStudent);
    });

// begin previous button click

      $('.previous').on("click", function(){

      $(".student-profile" + indivStudent).hide();
      indivStudent--;
      if(indivStudent < 0){
        indivStudent = 22;
      }
      $(".student-profile" + indivStudent).show();

    });
});

// make append dom function which appends to the student class
function appendDom(data) {
  for (var i = 0 ; i < data.kappa.length ; i++) {
    $(".students").append('<div style="display:none" class="student-profile'+ counter + '"></div>');
    //finding the last child in students
    var $el = $(".students").children().last();
    $el.append('<h3>' + data.kappa[i].name + '</h3>');
    $el.append('<p>' + data.kappa[i].location + '</p>');
    $el.append('<p>' + data.kappa[i].spirit_animal + '</p>');
    $el.append('<p>' + data.kappa[i].shoutout + '</p>');

    counter++;
  }
}

function showJoette() {
  $('.student-profile0').show();

}

function byeJoette() {
  $('.student-profile0').hide();
}
