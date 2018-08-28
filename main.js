$(document).ready(function(){

  $.ajax({

    url: 'http://165.227.138.202:3001/sales',
    method: 'GET',
    // data:{},
    success: function(data, stato){
      for(i = 0; i < data.length; i++){
        
        var sellers = data[i];
        var date = sellers.date;

        var newDate = moment(date, 'DD/MM/YYYY');
        console.log(newDate)
      }
    },
    error: function(){
      alert('si è verificato un errore');
    }

  });





});
