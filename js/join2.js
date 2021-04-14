$(function() {
			$("#sb_"+"email").on("selectmenuchange", function( event, ui ) {
				var inpId = $(event.target).attr("data-inpid");
				$("#"+inpId).val(ui.item.value).change();
				if (ui.item.value == "") {
					$("#"+inpId).removeAttr("readonly");	
				} else {
					$("#"+inpId).attr("readonly","readonly");
				}
			});
			$("#sb_"+"email").on("change", function() {
				var inpId = $(this).attr("data-inpid");
				$("#"+inpId).val($(this).val()).change();
				if ($(this).val() == "") {
					$("#"+inpId).removeAttr("readonly");	
				} else {
					$("#"+inpId).attr("readonly","readonly");
				}
			});
			// 이메일 input 2개를 '@'로 Join
			$("#"+"emailId"+", #"+"emailDomain").on('change', function() {
				var t1 = $("#"+"emailId").val();
				var t2 = $("#"+"emailDomain").val();
				if (t1.length > 0) t1 = t1.trim();
				if (t2.length > 0) t2 = t2.trim();
				$("#"+"email").val(t1 + "@" + t2);
			});
			if ($("#sb_"+"email").find("option[selected]").val() != "") {
				$("#"+"emailDomain").attr("readonly","readonly");
			}
		});

function formCheck(){
   var join = document.join;
   var join2 = document.join.tel;
   var reg_id = /^[a-z0-9]{4,15}$/;
   var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
   var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
   //아이디검사
   if(!join.id.value){
      alert("아이디를 입력하세요!");
      join.id.focus();
      return false;
   }
   if(join.id.value.length<5){
      alert("5자 이상 영문 소문자, 숫자를 사용하세요.");
      join.id.focus();
      return false;
   }
   if(!reg_id.test(join.id.value)){
      alert("5자 이상 영문 소문자, 숫자를 사용하세요.");
      join.id.focus();
      return false;
   }
   //비밀번호 검사
   if(!join.pw.value){
      alert("비밀번호를 입력하세요.");
      join.pw.focus();
      return false;
   }
   if(join.pw.value.length<8){
      alert("8자 이상 영문 소문자+숫자+특수문자를 사용하세요.");
      join.pw.focus();
      return false;
   }
   if(!reg_num.test(join.pw.value)){
      alert("8자 이상 영문 소문자+숫자+특수문자를 사용하세요.");
      join.pw.focus();
      return false;
   }
   
   //비밀번호 재입력 검사
   if(!join.repw.value){
      alert("비밀번호를 확인하세요.");
      join.repw.focus();
      return false;
   }
   if(join.pw.value!=join.repw.value){
      alert("비밀번호가 일치하지 않습니다.");
      join.repw.focus();
      return false;
   }
   
   //회원명 검사
   if(!join.memname.value){
      alert("이름을 입력하세요.");
      join.memname.focus();
      return false;
   }
   
   //휴대전화번호 검사

   if(!join.hp2.value){
      alert("휴대전화 번호를 입력하세요.");
      join.hp2.focus();
      return false;
   }

   if(isNaN(join.hp2.value)){
      alert("숫자만 입력하세요!");
      join.hp2.focus();
      return false;
   } 

   if(!join.hp3.value){
      alert("휴대전화 번호를 입력하세요.");
      join.hp3.focus();
      return false;
   }
   
   if(isNaN(join.hp3.value)){
      alert("숫자만 입력하세요!");
      join.hp3.focus();
      return false;
   } 
   
   //이메일 검사
   if(!join.emailId.value){
      alert("이메일을 입력하세요!");
      join.emailId.focus();
      return false;
   }

   if(!join.emailDomain.value){
      alert("이메일을 입력하세요!");
      join.emailDomain.focus();
      return false;
   }

   //주소 검사
   if(!join.addr.value){
      alert("주소를 입력하세요.");
      join.addr.focus();
      return false;
   }
   if(!join.addr2.value){
      alert("기본 주소를 입력하세요.");
      join.addr2.focus();
      return false;
   }
   if(!join.addr3.value){
      alert("나머지 주소를 입력하세요.");
      join.addr3.focus();
      return false;
   }
	
   var res = confirm('서버로 전송할까요?');
   
   if(res==true){
     location.href="join3.html";
   }else{
      location.href="join2.html";
   }
   return false;
   }
