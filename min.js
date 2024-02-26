var someValue = "Full Stack Developper \rThe harder I work, the luckier I get.." 
    alert(someValue);
		/*
		function doSomething(str1, str2) {
	alert( arguments[0]+" "+arguments[1] );
}
doSomething("j'ai obtenu plus 22 diplome", "mais je n'ai pas cité par ici");
*/

window.onload = function(){
				var t = document.title;
				var i = 1;

				function scrollTitle () {
					var len = document.title.length;
					if(len == 0){
						i = 0;
					}
					document.title = t.substring(i, t.length);
					i++;
					setTimeout(scrollTitle, 200);
				};

				scrollTitle();
			};
