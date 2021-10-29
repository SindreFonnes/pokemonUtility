import React from "react";
import TypeInput from "./components/TypeInput";
import TypeEffectDisplay from "./components/TypeEffectDisplay";
import { TYPES, TYPE_RELATIONS } from "./pokemonData/Types";
import styled from "styled-components";

const allTypes = Object.values(TYPES);
const createInitialState = () => {
	const initialState: any = {};
	allTypes.forEach((type) => {
		initialState[type] = false;
	});
	return initialState;
};

const createInitialEffectivenesState = () => {
	const initialState: any = {};
	allTypes.forEach((type) => {
		initialState[type] = 1;
	});
	return initialState;
};

const App = () => {
	const initialState = createInitialState();
	const initialEffectivenesState = createInitialEffectivenesState();

	const [toggledTypesAttack, setToggledTypesAttack] =
		React.useState(initialState);

	const [attackEffectivenessTable, updateAttackEffectivnessTable] =
		React.useState(initialEffectivenesState);

	const buildAttackEffectivnessTable = (type: string) => {
		const { attack } = TYPE_RELATIONS[type];
		const nextState = { ...initialEffectivenesState };
		const updateEffectivenesState = (type: any, effect: number) => {
			nextState[type] = effect;
		};
		attack.effective.forEach((type: any) =>
			updateEffectivenesState(type, 2)
		);
		attack.weak.forEach((type: any) => updateEffectivenesState(type, 0.5));
		attack.noDamage.forEach((type: any) =>
			updateEffectivenesState(type, 0)
		);
		updateAttackEffectivnessTable(nextState);
	};

	const updateToggledStateAttack = (type: string) => {
		const nextState = {
			...initialState,
		};
		nextState[type] = !toggledTypesAttack[type];
		setToggledTypesAttack(nextState);
		buildAttackEffectivnessTable(type);
	};

	const [toggledTypesDefense, setToggledTypesDefense] =
		React.useState(initialState);

	const [defenseEffectivenessTable, updateDefenseEffectivnessTable] =
		React.useState(initialEffectivenesState);

	const buildDefenseEffectivnessTable = () => {
		const nextState = { ...initialEffectivenesState };
		allTypes.forEach(type => {
			if (!toggledTypesDefense[type]) return;
			const { defense } = TYPE_RELATIONS[type];
			defense.strong.forEach((e:any) => {
				nextState[e] = nextState[e] * 0.5;
			})
			defense.immune.forEach((e:any) => {
				nextState[e] = 0;
			})
			defense.weak.forEach((e:any) => {
				nextState[e] = nextState[e] * 2;
			})
		})
		updateDefenseEffectivnessTable(nextState);
	};

	React.useEffect(() => {
		buildDefenseEffectivnessTable();
	}, [toggledTypesDefense])

	const updateToggledStateDefense = (type: string) => {
		const nextState = {
			...toggledTypesDefense,
		};
		nextState[type] = !toggledTypesDefense[type];
		setToggledTypesDefense(nextState);
	};

	return (
		<StyledApp>
			<div className={"attack"}>
				<h2>Attacking type</h2>
				<div className={"elementDisplay"}>
					<StyledTypeInputs>
						{allTypes.map((type) => (
							<TypeInput
								type={type}
								toggled={toggledTypesAttack[type]}
								onClick={() => updateToggledStateAttack(type)}
							/>
						))}
					</StyledTypeInputs>
					<div className={"result"}>
						{allTypes.map((type) => (
							<TypeEffectDisplay
								type={type}
								effectiveness={attackEffectivenessTable[type]}
								attack={true}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={"defense"}>
				<h2>Defense type</h2>
				<div className={"elementDisplay"}>
					<StyledTypeInputs>
						{allTypes.map((type) => (
							<TypeInput
								type={type}
								toggled={toggledTypesDefense[type]}
								onClick={() => updateToggledStateDefense(type)}
							/>
						))}
					</StyledTypeInputs>
					<div className={"result"}>
						{allTypes.map((type) => (
							<TypeEffectDisplay
								type={type}
								effectiveness={defenseEffectivenessTable[type]}
								attack={false}
							/>
						))}
					</div>
				</div>
			</div>
		</StyledApp>
	);
};

export default App;

const StyledApp = styled.div<any>`
	display: flex;
	flex-direction: column;
	background-color: grey;
	height: 100%;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
	.attack {
		width: 50%;
	}
	.defense {
		width: 50%;
	}
	h2 {
		margin: 1.5rem;
	}
	.result {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		width: 50%;
	}
	.elementDisplay {
		display: flex;
		flex-direction: row;
	}
`;

const StyledTypeInputs = styled.div<any>`
	display: flex;
	width: 50%;
	height: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
`;
