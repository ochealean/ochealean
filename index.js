window.onscroll = function() {myFunction()};

			function myFunction() {
			  if (document.documentElement.scrollTop < 200) {
				document.getElementById("myP").className = "header";
			  } else {
				document.getElementById("myP").className = "test";
			  }
			}
			
			let num = 0;
				function menuPop(){
					if(num == 0)
					{
						document.getElementById("idmenu").style.backgroundImage = "url('https://pic.onlinewebfonts.com/svg/img_219135.png')";
						document.getElementById("mobileBackgroundSelector").style.display = "none";
						num+=1;
					}else{
						document.getElementById("idmenu").style.backgroundImage = "url('https://cdn.onlinewebfonts.com/svg/img_45818.png')";
						document.getElementById("mobileBackgroundSelector").style.display = "flex";
						num-=1;
					}
				}
			
			
			
			function homeFunction() {
			  document.documentElement.scrollTop = 0;
			}
			function aboutFunction() {
			  document.documentElement.scrollTop = 700;
			}
			function serviceFunction() {
			  document.documentElement.scrollTop = 1400;
			}
			function educationFunction() {
			  document.documentElement.scrollTop = 2100;
			}
			function contactFunction() {
			  document.documentElement.scrollTop = 2800;
			}
var apple = 2;
var banana = 3;
			window.load = function() {document.getElementById("myP").className = "header";
				document.getElementById("home").style.textDecoration = "underline";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "underline";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = pick_color;
				document.getElementById("mobile_home").style.color = pick_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
					       };
			window.onscroll = function() {headerAni()};
			
			var pick_color = "cyan";
			var normal_color = "white";
			
			function headerAni(){
			  var home_uline = document.documentElement.scrollTop;
			  if(home_uline <= 199)
			  {
			  document.getElementById("myP").className = "header";
				document.getElementById("home").style.textDecoration = "underline";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "underline";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = pick_color;
				document.getElementById("mobile_home").style.color = pick_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
			  }
			  if(home_uline >= 200 && home_uline <= 699)
			  {
			  document.getElementById("myP").className = "test";
				document.getElementById("home").style.textDecoration = "underline";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "underline";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = pick_color;
				document.getElementById("mobile_home").style.color = pick_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
			  }
			  
			  else if(home_uline >= 700 && home_uline <= 1399)
			  {
			  document.getElementById("myP").className = "test";
				document.getElementById("home").style.textDecoration = "none";
				document.getElementById("about").style.textDecoration = "underline";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "none";
				document.getElementById("mobile_about").style.textDecoration = "underline";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = normal_color;
				document.getElementById("mobile_home").style.color = normal_color;
				document.getElementById("about").style.color = pick_color;
				document.getElementById("mobile_about").style.color = pick_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
			  }
			  
			  else if(home_uline >= 1400 && home_uline <= 2099)
			  {
			  document.getElementById("myP").className = "test";
				document.getElementById("home").style.textDecoration = "none";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "underline";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "none";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "underline";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = normal_color;
				document.getElementById("mobile_home").style.color = normal_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = pick_color;
				document.getElementById("mobile_service").style.color = pick_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
			  }
			  
			  else if(home_uline >= 2100 && home_uline <= 2799)
			  {
			  document.getElementById("myP").className = "test";
				document.getElementById("home").style.textDecoration = "none";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "underline";
				document.getElementById("contact").style.textDecoration = "none";
				
				document.getElementById("mobile_home").style.textDecoration = "none";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "underline";
				document.getElementById("mobile_contact").style.textDecoration = "none";
				
				document.getElementById("home").style.color = normal_color;
				document.getElementById("mobile_home").style.color = normal_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = pick_color;
				document.getElementById("mobile_education").style.color = pick_color;
				document.getElementById("contact").style.color = normal_color;
				document.getElementById("mobile_contact").style.color = normal_color;
			  }
			  else if(home_uline >= 2800)
			  {
			  document.getElementById("myP").className = "test";
				document.getElementById("home").style.textDecoration = "none";
				document.getElementById("about").style.textDecoration = "none";
				document.getElementById("service").style.textDecoration = "none";
				document.getElementById("education").style.textDecoration = "none";
				document.getElementById("contact").style.textDecoration = "underline";
				
				document.getElementById("mobile_home").style.textDecoration = "none";
				document.getElementById("mobile_about").style.textDecoration = "none";
				document.getElementById("mobile_service").style.textDecoration = "none";
				document.getElementById("mobile_education").style.textDecoration = "none";
				document.getElementById("mobile_contact").style.textDecoration = "underline";
				
				document.getElementById("home").style.color = normal_color;
				document.getElementById("mobile_home").style.color = normal_color;
				document.getElementById("about").style.color = normal_color;
				document.getElementById("mobile_about").style.color = normal_color;
				document.getElementById("service").style.color = normal_color;
				document.getElementById("mobile_service").style.color = normal_color;
				document.getElementById("education").style.color = normal_color;
				document.getElementById("mobile_education").style.color = normal_color;
				document.getElementById("contact").style.color = pick_color;
				document.getElementById("mobile_contact").style.color = pick_color;
			  }
			  }

        //inspect element prevent
        document.addEventListener("contextmenu", function(e) {
			e.preventDefault();
		});
		
		document.onkeydown = function(e) {
			// Prevent F12 (Developer Tools)
			if (e.code === "F12") {
				return false;
			}
			// Prevent Ctrl+Shift+I (Developer Tools)
			if (e.ctrlKey && e.shiftKey && e.key === "I") {
				return false;
			}
			// Prevent Ctrl+Shift+C (Developer Tools)
			if (e.ctrlKey && e.shiftKey && e.key === "C") {
				return false;
			}
			// Prevent Ctrl+Shift+J (Developer Tools)
			if (e.ctrlKey && e.shiftKey && e.key === "J") {
				return false;
			}
			// Prevent Ctrl+U (View Source)
			if (e.ctrlKey && e.key === "U") {
				return false;
			}
		};
		
			  
