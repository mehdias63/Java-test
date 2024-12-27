const getDataBtn = document.querySelector('.get-data')
const postDataBtn = document.querySelector('.post-data')

getDataBtn.addEventListener('click', getUsers)
postDataBtn.addEventListener('click', loginUsers)

const app = axios.create({
	baseURL: 'https://reqres.in/api',
})

function getUsers() {
	app
		.get('/users')
		.then(({ data }) => {
			console.log(data)
		})
		.catch(err => console.log(err))
}

async function loginUsers() {
	const user = {
		email: 'eve.holt@reqres.in',
		password: 'cityslicka',
	}
	try {
		const { data } = await app.post('/login', user)
		console.log(data)
	} catch (err) {
		console.log(err.response.data.error)
	}
}
