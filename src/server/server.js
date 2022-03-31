const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

console.log(uuidAPIKey.create());

const key = {
	apiKey: 'V89FC7J-ATJ44KV-PW8MZMA-7GED4E6',
	uuid: 'da12f61e-56a4-424f-b711-4fd13c1cd238'
}

app.get('/api/idol/:apikey/:group', async (req, res) => {
	// 파라미터 정보 가져오기
	let { apikey, group } = req.params;

	// uuid 모듈에서 제공한 API KEY가 맞는지 || 사용자가 파라미터에 입력한 apikey와 생성한 key가 일치하는지
	if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
		res.send('API KEY가 유효하지 않습니다.')
	} else {
		if (group === 'monsta-x') {
			let data = [
				{name: "셔누", age: 31},
				{name: "민혁", age: 30},
				{name: "기현", age: 30},
				{name: "형원", age: 29},
				{name: "주헌", age: 29},
				{name: "아이엠", age: 27},
			];
			// 데이터 보내기
			res.send(data);
		} else if (group === 'red-velvet') {
			let data = [
				{name: "웬디", age: 29},
				{name: "아이린", age: 32},
				{name: "슬기", age: 29},
				{name: "조이", age: 27},
				{name: "예리", age: 24},
			];
			// 데이터 보내기
			res.send(data);
		} else {
			res.send('존재하지 않는 그룹입니다.')
		}
	}

	
})