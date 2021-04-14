	function check(){
			var frm = document.frm;
			if(!frm.agree1.checked){
				alert("약관에 동의하세요!");
				frm.agree1.focus();
				return;
				}
				if(!frm.agree2.checked){
					alert("개인정보에 동의하세요!");
					frm.agree2.focus();
					return;
					}
				location.href = "join2.html";}