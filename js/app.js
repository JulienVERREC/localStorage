$(document).ready(function(){

  	restaurer();


    var VALEUR = [];


    function sauvegarder(){
            localStorage.setItem('VALEUR' , JSON.stringify(VALEUR));
            
    }





    function restaurer(){

        var a = localStorage.getItem('VALEUR');
        $("#ajout").html(a);

        
    }





    var text =[];



    $("#register").click(function(){

        text = $("#champSaisie").val(),

        VALEUR.push(text);
        sauvegarder();
        

          $("#ajout").append('<tr><td>'+ text +'</td></tr>');

        

    });
    

    $("#clear").click(function(){
       $("#champSaisie").val("");

    });


});
