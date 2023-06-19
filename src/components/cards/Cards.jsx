import { CARD_DATA } from '../../constants/card-data';
import { StyleCardNumber, StyleCardNumber2, StyleCardNumber3, StyledCard, StyledCards, StyledCvc, StyledImg } from './styles';

const Cards = ({ cardData }) => {
	const { name, cardNumber, month, year, cvc } = cardData;
	return (
		<>
		<StyledCard>
			<StyledCards>
				<div>
					<img src='/images/bg-card-front.png' alt='' />
					<StyleCardNumber>{cardNumber || CARD_DATA.cardNumber}</StyleCardNumber>
					<StyleCardNumber2>{name || CARD_DATA.name}</StyleCardNumber2>
					<StyleCardNumber3>
						{month || CARD_DATA.month}/{year || CARD_DATA.	year}
					</StyleCardNumber3>
				</div>
				<div>
					<StyledImg src='/images/bg-card-back.png' alt='' />
					<StyledCvc>{cvc}</StyledCvc>
				</div>
			</StyledCards>
		</StyledCard>
		</>
	);
};

export default Cards;