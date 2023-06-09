import { useState } from "react";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	return (
		<>
		<GlobalStyles/>
		<h1>{name}</h1>
		<h1>{email}</h1>
		<form onSubmit={e => e.preventDefault()}>
			<div>
				<label>Name</label>
				<input type="text" onChange={e => setName(e.target.value)}/>
			</div>
			<div>
				<label>Email</label>
				<input type="text" onChange={e => setEmail(e.target.value)}/>
			</div>
			<button>Enviar</button>
		</form>
		</>
	)
};

export default App;
