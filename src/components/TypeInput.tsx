import React from "react";
import styled from "styled-components";

type TypeInputProps = {
	type: string;
	toggled: boolean;
	onClick: Function;
};

const TypeInput = ({ type, toggled, onClick }: TypeInputProps) => {
	return <StyledTypeInput onClick={onClick} toggled={toggled}>{type}</StyledTypeInput>;
};

export default React.memo(TypeInput);

const StyledTypeInput = styled.div<any>`
	display: flex;
	width: 6rem;
	height: 1.5rem;
	color: black;
	border-radius: 0.8rem;
	justify-content: center;
	align-items: center;
	background-color: ${(props: any) => (props.toggled ? "green" : "#FF7F7F")};
	margin: 0.6rem;
`;
