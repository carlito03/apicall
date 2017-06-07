<script>// <![CDATA[
$(document).ready(function(){

 var htmlText = '';

    $.ajax({
       
        url: ('https://s3-us-west-2.amazonaws.com/ideasplusactions/json/agentlistf2.json'),
        dataType: 'json',
	cache: false,
    }).done(function (data) {

	for (var key in data) {

// hardcoded html into javascript since Realgeeks wont allow CSS 
       
		htmlText += '<div style="width:25%'+';'+' height:200'+';'+' float:right'+';'+ 'background-color: white'+';'+' border: 1px solid black'+';'+'">';
		htmlText += '<p class="p-desc">' + data[key]['firstname'] + ' ' + data[key]['lastname'] + '</p><br>';
		htmlText += '<img src="' + data[key]['photo'] + '" style="width:200px'+';'+ ' height:200px'+';'+'" /><br>';
		htmlText += '<a href="mailto:' + data[key]['email']  +'"><span style="font-size: small;">Send Email</span></a>';
	            
	            htmlText += '</div>';
}
              $('section').append(htmlText);

        
    });


   
});
// ]]></script>
