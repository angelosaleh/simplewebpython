var file_name='cgi-bin/data.py';
var successMessage='';
var secondsleft=10;

$( document ).ready(function() {
    $('#loadingDiv').hide();
    $('#div2resultid').hide();
    $("#divresultid").html('In 10 seconds a server function will be called');
    setTimeout(counterfuntion, 1000, 'a server function will be called','#divresultid','sendData');
});

var sendData = function() {

    $.post(
        file_name,
        function(response)
        {
            $("#divresultid").html(response);
            $('#div2resultid').show();
            $("#div2resultid").html('In 15 seconds another server function will be called');
            secondsleft=15;
            setTimeout(counterfuntion, 1000, 'another server function will be called','#div2resultid','secondcall');
        },
    );
}

var counterfuntion = function(messagetoshow,divtoupdate,functiontocall) {
    secondsleft--;
    $(divtoupdate).html('In '+secondsleft+' seconds '+messagetoshow);
    if (secondsleft > 0)
        setTimeout(counterfuntion, 1000, messagetoshow,divtoupdate,functiontocall);
    else
        window[functiontocall]();
}

var secondcall = function() {
    $.post(
        file_name,
        {
            function_name : "getData",
            params: 'Basic,C,Java,Php,Python,Ruby'
        },
        function(response)
        {
            $("#div2resultid").html(response);
        },
    );
}
