<?php
		$conn = new mysqli("localhost", "root", "", "controle-biblioteca");
	if($conn->connect_error){
		die("Conexão falha".$conn->connect_error);
	}
	$result = array('error' => false);
	$action = '';

	if(isset($_GET['action'])){
		$action = $_GET['action'];
	}

	if($action == 'readAutor'){
		$sql = $conn->query("SELECT * FROM autor");
		$autor = array();
		while($row = $sql->fetch_assoc()){
			array_push($autor, $row);
		}
		$result['autor'] = $autor;
	}

	echo json_encode($result);
?>