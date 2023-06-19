import styled from 'styled-components';

const StyledInput = styled.input`
	&:invalid {
		color: red;
		border: 1px solid red;
	}
	height: 45px;
	font-family: 'Space Grotesk';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 23px;
	color: #21092F;
	mix-blend-mode: normal;
	opacity: 0.25;
	margin-bottom: 10px;
	border-radius: 5px;
`;
const StyledForm = styled.form`
	position: absolute;
	width: 381px;
	height: 352px;
	left: 900px;
	top: 275px;	
	display	: flex;
	flex-direction: column;
`;
const StyledDiv1 = styled.div`
	width: 381px;
	height: 69px;
	left: 832px;
	top: 275px;
	display: flex;
	flex-direction: column;
`;
const StyledDiv2 = styled.div`
	width: 381px;
	height: 69px;
	left: 832px;
	top: 275px;
	display: flex;
	flex-direction: column;
`;
const StyledDiv3 = styled.div`
	width: 381px;
	height: 69px;
	left: 832px;
	top: 275px;
	display: flex;
`;
const StyledLabel = styled.label`
	font-family: 'Space Grotesk';
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledDate = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledDate2 = styled.div`
	display: flex;
	width: 200px;
	gap: 10px;
`;
const StyledInputDate = styled.input`
	width: 50%;
	height: 45px;
	font-family: 'Space Grotesk';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 23px;
	color: #21092F;
	mix-blend-mode: normal;
	opacity: 0.25;
	margin-bottom: 10px;
	border-radius: 5px;
`;
const StyledInputCVC = styled.input`
	width: 95%;
	height: 45px;
	font-family: 'Space Grotesk';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 23px;
	color: #21092F;
	mix-blend-mode: normal;
	opacity: 0.25;
	margin-bottom: 10px;
	border-radius: 5px;
`;
const StyledFlex = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
`;
const StyledBtn = styled.input`
	position: relative;
	top: 10px;
	background: #21092F;
	border-radius: 8px;
	color: white;
	padding: 1.3rem;
	cursor: pointer;
`;

export { StyledInput, StyledForm,StyledDiv1, StyledDiv2,StyledDiv3, StyledLabel,StyledDate, StyledDate2, StyledInputDate, StyledInputCVC, StyledFlex, StyledBtn };