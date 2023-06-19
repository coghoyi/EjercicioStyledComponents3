import { CARD_DATA } from '../../constants/card-data';
import { StyledBtn, StyledDate, StyledDate2, StyledDiv1, StyledDiv2, StyledDiv3, StyledFlex, StyledForm, StyledInput, StyledInputCVC, StyledInputDate, StyledLabel, } from './styles';

const Form = ({ cardData, setCardData }) => {
	return (
		<StyledForm onSubmit={e => e.preventDefault()}>
			<StyledDiv1>
				<StyledLabel htmlFor='name'>CardHolder Name</StyledLabel>
				<StyledInput
					type='text'
					id='name'
					name='name'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				{!cardData.name && cardData.name !== CARD_DATA.name && (
					<span>{"Can't be blank"}</span>
				)}
			</StyledDiv1>
			<StyledDiv2>
				<StyledLabel htmlFor='number'>Card Number</StyledLabel>
				<StyledInput
					type='number'
					id='number'
					name='cardNumber'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
			</StyledDiv2>
			<StyledDiv3>
				<StyledDate>
				<StyledLabel>Exp. Date (MM/YY)</StyledLabel>
				<StyledDate2>
				<StyledInputDate
					name='month'
					type='number'
					placeholder='MM'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				<StyledInputDate
					name='year'
					type='number'
					placeholder='YY'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/></StyledDate2>
				</StyledDate>
				<StyledFlex>
				<StyledLabel htmlFor='cvc'>CVC</StyledLabel>
				<StyledInputCVC
					name='cvc'
					type='number'
					placeholder='e.g. 123'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				</StyledFlex>
			</StyledDiv3>
			<StyledBtn type='submit' value='Confirm' />
		</StyledForm>
	);
};

const handleChange = (input, cardData, setCardData) => {
	setCardData({ ...cardData, [input.name]: input.value });
};

export default Form;