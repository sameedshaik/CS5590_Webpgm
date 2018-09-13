function validateRegister(){
	var flag=true;
	var firstname=document.getElementById("firstname").value;
	var lastname=document.getElementById("lastname").value;
	var mail=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var conformPassword=document.getElementById("cnf_password").value;
	
	var stringReg=/^[a-zA-Z]+$/;
	var mailRex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var passwordRex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
	
	var firstnameValid=stringReg.test(firstname);
	var lastnameValid=stringReg.test(lastname);
	var emailValid=mailRex.test(mail);
	var passValid=passwordRex.test(password);

	if(firstname==""||lastname==""||mail==""||password==""||conformPassword==""){
		alert("All are required fields");
		flag=false;
	}else if(firstnameValid!=true){
		alert("Name contains only charesters"); 
		flag=false;
	}else if(lastnameValid!=true){
		alert("Name contains only charesters");
		flag=false;
	}else if(emailValid!=true){
		alert("Enter a valid email email like sam@gmail.com");
		flag=false;
	}else if(passValid!=true){
		alert("Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: ");
		flag=false;
	}else if(password!=conformPassword){
		alert("Passwords must match");
		flag=false;
	}

	if(flag==true){
		return true;
	}

	else false;
}


function validateLogin(){

		var mail=document.getElementById("email").value;
		var password=document.getElementById("password").value;
		
		var mailRex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var passwordRex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

		var flag=true;

		if(mailRex.test(mail)!=true){
			alert("Enter a valid email");
			flag=false;
		}else if(password==''||mail==''){
			alert("Field must be required");
			flag=false;
		}else if(passwordRex.test(password)!=true){
			alert("password must matches pattern");
			flag=false;
		}
	if(flag==true){
		return true;
	}else return false;
}function validateRegister(){
	var flag=true;
	var firstname=document.getElementById("firstname").value;
	var lastname=document.getElementById("lastname").value;
	var mail=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var conformPassword=document.getElementById("cnf_password").value;
	
	var stringReg=/^[a-zA-Z]+$/;
	var mailRex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var passwordRex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
	
	var firstnameValid=stringReg.test(firstname);
	var lastnameValid=stringReg.test(lastname);
	var emailValid=mailRex.test(mail);
	var passValid=passwordRex.test(password);

	alert(firstnameValid+''+lastnameValid+''+emailValid);
	if(firstname==""||lastname==""||mail==""||password==""||conformPassword==""){
		alert("All are required fields");
		flag=false;
	}else if(firstnameValid!=true){
		alert("Name contains only charesters"); 
		flag=false;
	}else if(lastnameValid!=true){
		alert("Name contains only charesters");
		flag=false;
	}else if(emailValid!=true){
		alert("Enter a valid email email like sam@gmail.com");
		flag=false;
	}else if(passValid!=true){
		alert("Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: ");
		flag=false;
	}else if(password!=conformPassword){
		alert("Passwords must match");
		flag=false;
	}

	if(flag==true){
		return true;
	}

	else false;
}


function validateLogin(){

		var mail=document.getElementById("email").value;
		var password=document.getElementById("password").value;
		
		var mailRex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var passwordRex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

		var flag=true;

		if(mailRex.test(mail)!=true){
			alert("Enter a valid email email like sam@gmail.com");
			flag=false;
		}else if(password==''||mail==''){
			alert("Field must be required");
			flag=false;
		}else if(passwordRex.test(password)!=true){
			alert("Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: ");
		
			flag=false;
		}
	if(flag==true){
		return true;
	}else return false;
}
