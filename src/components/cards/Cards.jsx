import { CARD_DATA } from '../../constants/card-data';
import { StyledCard, StyledCards, StyledImg } from './styles';

const Cards = ({ cardData }) => {
	const { name, cardNumber, month, year, cvc } = cardData;
	return (
		<>
		<StyledCard>
			<StyledCards>
				<div>
					<img src='/images/bg-card-front.png' alt='' />
					<p>{cardNumber || CARD_DATA.cardNumber}</p>
					<p>{name || CARD_DATA.name}</p>
					<p>
						{month || CARD_DATA.month}/{year || CARD_DATA.	year}
					</p>
				</div>
				<div>
					<StyledImg src='/images/bg-card-back.png' alt='' />
					<p>{cvc}</p>
				</div>
			</StyledCards>
		</StyledCard>
		</>
	);
};

export default Cards;