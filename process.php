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

	if($action == 'createAutor'){
		$nome = $_POST['nome'];
		echo json_encode($nome);
		$anoNasc = $_POST['anoNasc'];
		$sexo = $_POST['sexo'];
		$nacionalidade = $_POST['nacionalidade'];
		$sql = $conn->query("INSERT INTO autor (nome, anoNasc, sexo, nacionalidade) VALUES ('$nome', '$anoNasc', '$sexo','$nacionalidade')");
		if($sql){
			$result['message'] = "Adicionado";
		}
		else{
			$result['error'] = true;
			$result['message'] = "Não sucedido";
		}
	}

	if($action == 'updateAutor'){
		$id = $_POST['idautor'];
		$nome = $_POST['nome'];
		$anoNasc = $_POST['anoNasc'];
		$sexo = $_POST['sexo'];
		$nacionalidade = $_POST['nacionalidade'];
		$sql = $conn->query("UPDATE autor SET nome='$nome', anoNasc='$anoNasc', sexo='$sexo', nacionalidade='$nacionalidade' WHERE idautor='$id'");
		if($sql){
			$result['message'] = "Atualizado";
		}
		else{
			$result['error'] = true;
			$result['message'] = "Não sucedido";
		}
	}

	if($action == 'deleteAutor'){
		$id = $_POST['idautor'];
		$sql = $conn->query("DELETE FROM autor WHERE idautor='$id'  ");
		if($sql){
			$result['message'] = "Deletado";
		}
		else{
			$result['error'] = true;
			$result['message'] = "Não sucedido";
		}
	}

	$conn->close();

	echo json_encode($result);
?>