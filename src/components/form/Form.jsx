import { CARD_DATA } from '../../constants/card-data';
import { StyledInput } from './styles';

const Form = ({ cardData, setCardData }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<div>
				<label htmlFor='name'>CardHolder Name</label>
				<StyledInput
					type='text'
					id='name'
					name='name'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				{!cardData.name && cardData.name !== CARD_DATA.name && (
					<span>{"Can't be blank"}</span>
				)}
			</div>
			<div>
				<label htmlFor='number'>Card Number</label>
				<StyledInput
					type='number'
					id='number'
					name='cardNumber'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
			</div>
			<div>
				<label>Exp. Date (MM/YY)</label>
				<input
					name='month'
					type='number'
					placeholder='MM'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				<input
					name='year'
					type='number'
					placeholder='YY'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				<label htmlFor='cvc'>CVC</label>
				<input
					name='cvc'
					type='number'
					placeholder='e.g. 123'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
			</div>
			<input type='submit' value='Confirm' />
		</form>
	);
};

const handleChange = (input, cardData, setCardData) => {
	setCardData({ ...cardData, [input.name]: input.value });
};

export default Form;