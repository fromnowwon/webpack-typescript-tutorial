const path = require('path');

module.exports = {
	mode: 'production',
	devtool: 'eval-source-map',
	entry: './src/index.ts', // entry point
	module: {
		rules: [
			{
				test: /\.ts$/, // .ts 파일일 때 적용
				use: 'ts-loader', // ts-loader 모듈을 사용해서 javaScript로 컴파일 
				include: [path.resolve(__dirname, 'src')] // src 경로에 있는 파일들 모두 포함
			}
		]
	},
	resolve: {
		// import 시 해당 확장자는 붙이지 않아도 된다.
		extensions: ['.ts', '.js'] 
	},
	output: {
		publicPath: 'public',
		filename: 'bundle.js',
		// absolute path를 현재 경로로 설정 (__dirname)
		// 현재 경로를 기준으로 public (빌드 폴더) 경로를 적는다
		path: path.resolve(__dirname, 'public'),
	}
}