var app = new Vue({
	el: '#app',
	data: {
		errorMsg: false,
		successMsg: false,
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


