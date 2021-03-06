var app = new Vue({
	el: '#app',
	data: {
		errorMsg: "",
		successMsg: "",
		showAddModalAutor: false,
		showEditModalAutor: false,
		showRemoveModalAutor: false,
		showAddModalLivro: false,
		showEditModalLivro: false,
		showRemoveModalLivro: false,
		showAddModalEditora: false,
		showEditModalEditora: false,
		showRemoveModalEditora: false,
		showAddModalGenero: false,
		showEditModalGenero: false,
		showRemoveModalGenero: false,
		tableAutor: false,
		tableLivro: false,
		tableEditora: false,
		tableGenero: false,
		buttonAutor: false,
		buttonLivro: false,
		buttonEditora: false,
		buttonGenero: false,
		autor: [],
		newAutor: {nome: "", anoNasc: "", sexo: "", nacionalidade: ""},
		atualAutor: {},
		editora: [],
		newEditora: {nome: "", cnpj: ""},
		atualEditora:{},
		genero: [],
		newGenero: {tipo: ""},
		atualGenero: {},
		newLivro: {titulo: "", anoLancamento: "", autor_idautor: "", editora_ideditora: "", generoLiterario_idgeneroLiterario: ""},
		atualLivro: [],
		livro: [],
		autorList: [],
		editoraList: [],
		generoList: [],
		livroList: []
	},
	// executa as funções ao iniciar o .html para pré-carregar as tabelas e dropdowns
	created: function(){
		this.getAllAutor();
		this.getAutorList();
		this.getAllEditora();
		this.getEditoraList();
		this.getAllGenero();
		this.getGeneroList();
		this.getAllLivro();
	},
	methods:{
		// Metodo para obter todos os autores
		getAllAutor(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readAutor").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.autor = response.data.autor;
				}
			});
		},
		// Metodo para obter todos as editoras
		getAllEditora(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readEditora").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.editora = response.data.editora;
				}
			});
		},
		// Metodo para obter todos os generos literarios
		getAllGenero(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readGenero").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.genero = response.data.genero;
				}
			});
		},
		// Metodo para obter todos os livros
		getAllLivro(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readLivro").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.livro = response.data.livro;
				}
			});
		},
		// Metodo para obter lista de autores para o dropdown
		getAutorList(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readAutorList").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.autorList = response.data.autorList;
				}
			});
		},
		// Metodo para obter lista de editoras para o dropdown
		getEditoraList(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readEditoraList").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.editoraList = response.data.editoraList;
				}
			});
		},
		// Metodo para obter lista de generos literarios para o dropdown
		getGeneroList(){
			axios.get("http://localhost/controle-de-estoque-biblioteca/process.php?action=readGeneroList").then(function(response){
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.generoList = response.data.generoList;
				}
			});
		},
		// Metodo para adicionar um autor ao banco de dados
		addAutor(){
			if(this.newAutor.nome && this.newAutor.anoNasc && this.newAutor.sexo && this.newAutor.nacionalidade){
				var formData = app.toFormData(app.newAutor);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createAutor", formData).then(function(response){
					app.newAutor = {nome: "", anoNasc: "", sexo: "", nacionalidade: ""};
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllAutor();
						app.getAutorList();
					}
				});
			} else {

			}
		},
		// Metodo para adicionar uma editora ao banco de dados
		addEditora(){
			if(this.newEditora.nome && this.newEditora.cnpj){
				var formData = app.toFormData(app.newEditora);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createEditora", formData).then(function(response){
					app.newEditora = {nome: "", cnpj: ""};
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllEditora();
						app.getEditoraList();
					}
				});
			} else {

			}
		},
		// Metodo para adicionar um genero literario ao banco de dados
		addGenero(){
			if(this.newGenero.tipo){
				var formData = app.toFormData(app.newGenero);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createGenero", formData).then(function(response){
					app.newGenero = {tipo: ""};
					console.log(response);
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllGenero();
						app.getGeneroList();
					}
				});
			} else {

			}
		},
		// Metodo para adicionar um livro ao banco de dados
		addLivro(){
			if(this.newLivro.titulo && this.newLivro.anoLancamento && this.newLivro.autor_idautor && this.newLivro.editora_ideditora && this.newLivro.generoLiterario_idgeneroLiterario){
				var formData = app.toFormData(app.newLivro);
				console.log(app.newLivro);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createLivro", formData).then(function(response){
					app.newLivro = {titulo: "", anoLancamento: "", autor_idautor: "", editora_ideditora: "", generoLiterario_idgeneroLiterario: ""};
					console.log(response);
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllLivro();
					}
				});
			}
		},
		// Metodo para atualizar um autor ao banco de dados
		updateAutor(){
			if(this.atualAutor.nome && this.atualAutor.anoNasc && this.atualAutor.sexo && this.atualAutor.nacionalidade){
				var formData = app.toFormData(app.atualAutor);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=updateAutor", formData).then(function(response){
					app.atualAutor = {};
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllAutor();
					}
				});
			}
		},
		// Metodo para atualizar uma editora ao banco de dados
		updateEditora(){
			if(this.atualEditora.nome && this.atualEditora.cnpj){
				var formData = app.toFormData(app.atualEditora);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=updateEditora", formData).then(function(response){
					app.atualEditora = {nome: "", cnpj: ""};
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllEditora();
						app.getEditoraList();
					}
				});
			} else {

			}
		},
		// Metodo para atualizar um genero literario ao banco de dados
		addGenero(){
			if(this.atualGenero.tipo){
				var formData = app.toFormData(app.atualGenero);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createGenero", formData).then(function(response){
					app.atualGenero = {tipo: ""};
					console.log(response);
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllGenero();
						app.getGeneroList();
					}
				});
			} else {

			}
		},
		// Metodo para atualizar um livro ao banco de dados
		updateLivro(){
			if(this.atualLivro.titulo && this.atualLivro.anoLancamento && this.atualLivro.autor_idautor && this.atualLivro.editora_ideditora && this.atualLivro.generoLiterario_idgeneroLiterario){
				var formData = app.toFormData(app.atualLivro);
				axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=updateLivro", formData).then(function(response){
					app.atualLivro = {};
					if(response.data.error){
						app.errorMsg = response.data.message;
					}
					else{
						app.successMsg = response.data.message;
						app.getAllLivro();
					}
				});
			}
		},
		// Metodo para remover um autor do banco de dados
		removeAutor(){
			var formData = app.toFormData(app.atualAutor);
			axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=deleteAutor", formData).then(function(response){
				app.atualAutor = {};
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.successMsg = response.data.message;
					app.getAllAutor();
				}
			});
		},
		// Metodo para remover uma editora do banco de dados	
		removeEditora(){
			var formData = app.toFormData(app.atualEditora);
			axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=deleteEditora", formData).then(function(response){
				app.atualEditora = {};
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.successMsg = response.data.message;
					app.getAllEditora();
				}
			});
		},
		// Metodo para remover um genero literario do banco de dados	
		removeGenero(){
			var formData = app.toFormData(app.atualGenero);
			axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=deleteGenero", formData).then(function(response){
				app.atualGenero = {};
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.successMsg = response.data.message;
					app.getAllGenero();
				}
			});
		},
		// Metodo para remover um livro do banco de dados	
		removeLivro(){
			var formData = app.toFormData(app.atualLivro);
			axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=deleteLivro", formData).then(function(response){
				app.atualLivro = {};
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.successMsg = response.data.message;
					app.getAllLivro();
				}
			});
		},
		toFormData(obj){
			var fd = new FormData();
			for(var i in obj){
				fd.append(i,obj[i]);
			}
			return fd;
		},
		// pega o id do autor
		selectAutor(autor){
			app.atualAutor = autor;
		},
		// pega o id da editora
		selectEditora(editora){
			app.atualEditora = editora;
		},
		// pega o id do genero literario
		selectGenero(genero){
			app.atualGenero = genero;
		},
		// pega o id do livro
		selectLivro(livro){
			app.atualLivro = livro;
		},

		clearMsg(){
			app.errorMsg = "";
			app.successMsg = "";
		},

	},
});

const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}


