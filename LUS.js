function sub(){
	var regEx1 = new RegExp(".");
	var regEx2 = new RegExp("\\d{8}");
	var regEx3 = new RegExp("(((\\w+\\.\\w+)|\\w+)\\@\\w+\\.\\w{2,4})");
	var name, cardnumber, email;
	if (regEx1.test(lib.name.value)){
		name=true;
	}else{
		alert('please enter name');
	}

	if (regEx2.test(lib.cardnumber.value)){
		cardnumber = true;
	}else if(lib.cardnumber.value.length != 8){
		alert('Card number must be 8 digits');
	}else{
		alert('Card number must contain only digits');
	}

	if(document.lib.check.checked){
		if (regEx3.test(lib.email.value)){
			email = true;
		}else if(lib.email.value.search("\\@") < 0){
			alert('Email must contain \"@\" symbol.');
		}else if(lib.email.value.search("(\\@\\w+\\.\\w{2,4})") < 0){
			alert('Email must contain a domain name. (ex: .com, .net, .org...)');
		}
	}

	if(document.lib.check.checked){
		if(name && cardnumber && email){
			if(verify(lib.name.value, lib.cardnumber.value)){
				alert("Welcome " + lib.name.value + ". An email has been sent to " + lib.email.value + " confirming your " + lib.select.value + ".");
			}else{
				alert("User not found.");
			}
		}
	}else if (name && cardnumber){
		if(verify(lib.name.value, lib.cardnumber.value, 0)){
			alert("Welcome " + lib.name.value + ".")
		}else{
			alert("User not found.");
		}
	}
}

function user (name, cardnumber){
	this.name=name;
	this.cardnumber=cardnumber;
}

function verify(name, cardnumber){
	var users = [new user("John Doe", "12345678"), 
	new user("Jane Doe", "87654321"),
	new user("Uldren Sov", "00000000"), 
	new user("James Baxter", "12344321"),
	new user("Wade Wilson", "10293847")];
	for(var i=0; i<users.length; i++){
		if(users[i].name == name){
			if(users[i].cardnumber == cardnumber){
				return true;
			}else{
				continue;
			}
		}
	}
	return false;
}