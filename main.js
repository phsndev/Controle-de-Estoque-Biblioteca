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
	},
	mounted: function(){
		this.getAllAutor();
	},
	methods:{
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
		addAutor(){
			var formData = app.toFormData(app.newAutor);
			axios.post("http://localhost/controle-de-estoque-biblioteca/process.php?action=createAutor", formData).then(function(response){
				app.newAutor = {nome: "", anoNasc: "", sexo: "", nacionalidade: ""};
				if(response.data.error){
					app.errorMsg = response.data.message;
				}
				else{
					app.successMsg = response.data.message;
					app.getAllAutor();
				}
			});
		},

		updateAutor(){
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
		},

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

		toFormData(obj){
			var fd = new FormData();
			for(var i in obj){
				fd.append(i,obj[i]);
			}
			return fd;
		},

		selectAutor(autor){
			app.atualAutor = autor;
		}
	}
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


