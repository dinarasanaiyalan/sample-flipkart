function login(){
    var userName = new String();
    var password = new String();
    var contactNo = new String();
    var errorMsg = new String();
    userName = document.getElementById("userName");
    password = document.getElementById("password");
    contactNo = document.getElementById("contactNo");
    userName = userName.value;
    password = password.value;
    contactNo = contactNo.value;

    if(null == userName || "" == userName){
        errorMsg += "UserName couldn't be Null or Empty";
    }
    if(null == password || "" == password){
        errorMsg += "Password couldn't be Null or Empty";
    }
    if(null == contactNo || "" == contactNo){
        errorMsg += "Contact Number couldn't be Null or Empty";
    }
    if(null != contactNo || "" != contactNo  ) {
        if(10 < contactNo.length){
            errorMsg += "Contact Number less then 10 Digit";
        } else if(10 > contactNo.length){
            errorMsg += "Contact Number greater then 10 Digit";
        }
    }
    var obj = {
        name :userName,
        password : password,
        contactNo : contactNo
    }

    if(null != errorMsg && "" != errorMsg){
        // $("#errorMsg").append(errorMsg);
        alert(errorMsg);
        event.preventDefault();
    } else {
        $.ajax({
            url:"http:localhost:9090/sample/callService", //?userName="+userName+"&password="+password
            type : "GET",
            contentType: "application/json",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            data : JSON.stringify(obj),
            success: function (response) {
                alert("Working fine");
            },
            error : function() {
                alert('Error while request..');
            }
        })
        event.preventDefault();
    }
    
}

function trycatchexample(){
    try{
        var divided = document.getElementById("result");
        var result = 10/divided.value;
        if(result == "Infinity"){
            throw "Invalid Math operation."
        }
        alert("Result : "+result);
        document.getElementById("result").value = "";
    }catch(e) {
        alert("Exception occurs due to : "+e);
    }finally{
        document.getElementById("result").value = "";
    }
}