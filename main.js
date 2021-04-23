var app = new Vue({
	el: '#app',
	data: {
		errorMsg: false,
		successMsg: false,
		showAddModal: false,
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
