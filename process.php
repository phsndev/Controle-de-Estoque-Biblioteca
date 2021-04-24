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

		if($action == 'readEditora'){
			$sql = $conn->query("SELECT * FROM editora");
			$editora = array();
			while($row = $sql->fetch_assoc()){
				array_push($editora, $row);
			}
			$result['editora'] = $editora;
		}

		if($action == 'readGenero'){
			$sql = $conn->query("SELECT * FROM generoliterario");
			$genero = array();
			while($row = $sql->fetch_assoc()){
				array_push($genero, $row);
			}
			$result['genero'] = $genero;
		}

		if($action == 'readLivro'){
			$sql = $conn->query("SELECT idlivro, titulo, anoLancamento, editora.nome as editoraNome, autor.nome as autorNome, generoliterario.tipo as generoLiterarioNome FROM livro INNER JOIN editora ON livro.editora_ideditora = editora.ideditora INNER JOIN autor ON livro.autor_idautor = autor.idautor INNER JOIN generoliterario ON livro.generoLiterario_idgeneroLiterario = generoliterario.idgeneroLiterario;");
			$livro = array();
			while($row = $sql->fetch_assoc()){
				array_push($livro, $row);
			}
			$result['livro'] = $livro;
		}

		if($action == 'readAutorList'){
			$sql = $conn->query("SELECT nome, idautor FROM autor");
			$autorList = array();
			while($row = $sql->fetch_assoc()){
				array_push($autorList, $row);
			}
			$result['autorList'] = $autorList;
		}

		if($action == 'readEditoraList'){
			$sql = $conn->query("SELECT nome, ideditora FROM editora");
			$editoraList = array();
			while($row = $sql->fetch_assoc()){
				array_push($editoraList, $row);
			}
			$result['editoraList'] = $editoraList;
		}

		if($action == 'readGeneroList'){
			$sql = $conn->query("SELECT tipo, idgeneroLiterario FROM generoliterario");
			$generoList = array();
			while($row = $sql->fetch_assoc()){
				array_push($generoList, $row);
			}
			$result['generoList'] = $generoList;
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

		if($action == 'createEditora'){
			$nome = $_POST['nome'];
			echo json_encode($nome);
			$cnpj = $_POST['cnpj'];
			$sql = $conn->query("INSERT INTO editora (nome, cnpj) VALUES ('$nome', '$cnpj')");
			if($sql){
				$result['message'] = "Adicionado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'updateAutor'){
			$id = $_POST['ideditora'];
			$nome = $_POST['nome'];
			$cnpj = $_POST['cnpj'];
			$sql = $conn->query("UPDATE autor SET nome='$nome', cnpj='$cnpj' WHERE ideditora='$id'");
			if($sql){
				$result['message'] = "Atualizado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'deleteEditora'){
			$id = $_POST['ideditora'];
			$sql = $conn->query("DELETE FROM editora WHERE ideditora='$id'");
			if($sql){
				$result['message'] = "Deletado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'createGenero'){
			$tipo = $_POST['tipo'];
			$sql = $conn->query("INSERT INTO generoliterario (tipo) VALUES ('$tipo')");
			if($sql){
				$result['message'] = "Adicionado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'updateGenero'){
			$id = $_POST['idgeneroLiterario'];
			$tipo = $_POST['tipo'];
			$sql = $conn->query("UPDATE generoliterario SET tipo='$tipo' WHERE idgeneroLiterario ='$id'");
			if($sql){
				$result['message'] = "Atualizado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'deleteGenero'){
			$id = $_POST['idgeneroLiterario'];
			$sql = $conn->query("DELETE FROM generoliterario WHERE idgeneroLiterario='$id'");
			if($sql){
				$result['message'] = "Deletado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'createLivro'){
			$titulo = $_POST['titulo'];
			$anoLancamento = $_POST['anoLancamento'];
			$autor_idautor = $_POST['autor_idautor'];
			$editora_ideditora = $_POST['editora_ideditora'];
			$generoLiterario_idgeneroLiterario = $_POST['generoLiterario_idgeneroLiterario'];
			$sql = $conn->query("INSERT INTO livro (titulo, anoLancamento, autor_idautor, editora_ideditora, generoLiterario_idgeneroLiterario) VALUES ('$titulo', '$anoLancamento', '$autor_idautor','$editora_ideditora','$generoLiterario_idgeneroLiterario')");
			if($sql){
				$result['message'] = "Adicionado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'updateLivro'){
			$id = $_POST['idlivro'];
			$titulo = $_POST['titulo'];
			$anoLancamento = $_POST['anoLancamento'];
			$autor_idautor = $_POST['autor_idautor'];
			$editora_ideditora = $_POST['editora_ideditora'];
			$generoLiterario_idgeneroLiterario = $_POST['generoLiterario_idgeneroLiterario'];
			$sql = $conn->query("UPDATE livro SET titulo='$titulo', anoLancamento='$anoLancamento', autor_idautor='autor_idautor', editora_ideditora='editora_ideditora', generoLiterario_idgeneroLiterario='$generoLiterario_idgeneroLiterario' WHERE idlivro ='$id'");
			if($sql){
				$result['message'] = "Atualizado";
			}
			else{
				$result['error'] = true;
				$result['message'] = "Não sucedido";
			}
		}

		if($action == 'deleteLivro'){
			$id = $_POST['idlivro'];
			$sql = $conn->query("DELETE FROM livro WHERE idlivro='$id'");
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