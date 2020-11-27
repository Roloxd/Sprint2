$(document).ready(function () {

    var Freq = 10000;

    function startAJAXcalls(){
        setTimeout(function(){
                getXMLRecipes();
                startAJAXcalls();
        },
            Freq
        );
    }
    getXMLRecipes();
    startAJAXcalls();
    
    function getXMLRecipes(){
        $.ajax({
            url: "recetas.xml",
            cache: false,
            dataType: "xml",
            success: function(xml){
                $('#rprimero').empty()
                $('#rsegundo').empty()
                $('#rtercero').empty()
                $('#portada').empty()
                $(xml).find("recipe").each(function(){
                    var imagen = $(this).find('rimage').text()
                    var info = '<article class="recipes">'+'<img src='+imagen+'>'+'<h2>'+$(this).find('rname').text()+'</h2>'+'<a href="recipetext.html"> <button type="button">'
                    +$(this).find('rboton').text()+'</button></a>'+'</article>';
                    if ($(this).find('rpos').text() == "1"){
                        $('#portada').append(info);
                    } else if($(this).find('rpos').text() == "2"){
                        $('#rprimero').append(info);
                    }else if($(this).find('rpos').text() == "3"){
                        $('#rsegundo').append(info);
                    }else if($(this).find('rpos').text() == "4"){
                        $('#rtercero').append(info);
                    }
                   
                });
            }
    
        });
    }
});





