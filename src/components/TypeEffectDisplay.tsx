import React from "react";
import styled from "styled-components";

type TypeInputProps = {
	type: string;
	effectiveness: number;
	attack: boolean;
};

const TypeEffectDisplay = ({ type, effectiveness, attack }: TypeInputProps) => {
	console.log(type);
	return (
		<StyledTypeInput effectiveness={effectiveness} attack={attack}>
			{type} x{effectiveness}
		</StyledTypeInput>
	);
};

export default React.memo(TypeEffectDisplay);

const StyledTypeInput = styled.div<any>`
	display: flex;
	width: 6rem;
	height: 1.5rem;
	color: black;
	border-radius: 0.8rem;
	justify-content: center;
	align-items: center;
	background-color: ${(props: any) => {
		if (props.attack) {
			switch (props.effectiveness) {
				case 0:
					return "red";
				case 0.5:
					return "yellow";
				case 1:
					return "white";
				case 2:
					return "green";
				case 4:
					return "orange";
				default:
					return "white";
			}
		}
		switch (props.effectiveness) {
			case 0:
				return "cyan";
			case 0.25:
				return "blue";
			case 0.5:
				return "green";
			case 1:
				return "white";
			case 2:
				return "red";
			case 4:
				return "purple";
			default:
				return "white";
		}
	}};
	margin: 0.6rem;
`;
