<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="bitcamp.java142.board.dao.KyjHelloBoardDAOImpl" %>
<%@ page import="bitcamp.java142.board.dao.KyjHelloBoardDAO" %> 
<%@ page import="bitcamp.java142.board.vo.KyjHelloBoardVO" %> 
<%@ page import="java.util.ArrayList" %>

<% request.setCharacterEncoding("EUC-KR"); %>
<%
	String isudType = request.getParameter("ISUD_TYPE");
	String chkInKno = request.getParameter("chkInKno");
	String kno = request.getParameter("kno");
	String ksubject = request.getParameter("ksubject");
	String kname = request.getParameter("kname");
	String kpw = request.getParameter("kpw");
	String kmemo = request.getParameter("kmemo");
	
	if("UOK".equals(isudType.toUpperCase())){
		System.out.println(" ISUD_TYPE >>> : " + isudType);
		
		// update logic
		KyjHelloBoardDAO kdao = new KyjHelloBoardDAOImpl();
		
		KyjHelloBoardVO kvo = null;
		kvo = new KyjHelloBoardVO();
		kvo.setKno(kno);
		kvo.setKsubject(ksubject);
		kvo.setKmemo(kmemo);
		
		int nCntU = kdao.updateKyjHelloBoard(kvo);
		
		if (nCntU == 1){
			System.out.println(" ���� ���� �������� ������ ");
%>
			<script>
				alert("�Խ��� �� ���� ���� !!!");
				location.href="/babyWeb/board/kyjHelloBoardSelectAll.jsp";
			</script>
<%
		}else{
			out.println(" ���� �������� ������ ");
		} // end of if-else��
	} // end of ("UOK".equals(isudType.toUpperCase())) ��
	
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
		<title>Insert title here</title>
	</head>
	<body>
	
	</body>
</html>