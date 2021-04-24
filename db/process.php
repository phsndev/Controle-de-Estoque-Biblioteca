<?php
	$servername = "localhost"
	$username = "root"
	$password = "";
	$database = controle-biblioteca
	$conn = new msqli($servername, $username, $password, $database);

	if($conn->connect_error){
		die("Conexão falha".$conn->connect_error);
	}
	echo "Conexão ok";
?>