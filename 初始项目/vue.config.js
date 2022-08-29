const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	productionSourceMap: false,
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	devServer: {
		port: 8089,
		https: false,
		// host: '0.0.0.0',
		open: true,
		proxy: {
			// '/api': {
			// 	changOrigin: true,
			// 	target: "http://www.baidu.com",
			// 	pathRewrite: {
			// 		'/api': ''
			// 	}
			// }
			[process.env.VUE_APP_BASE_API]: {
				changeOrigin: true, //开启跨域
				target:
					[process.env.VUE_APP_MOCK_ENABLE] === 'true'
						? 'http://localhost:8090'
						: [process.env.VUE_APP_CONSOLE_URL],
				pathRewrite: {
					[process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
});
