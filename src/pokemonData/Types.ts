export const TYPES = {
	normal: "normal",
	fight: "fight",
	flying: "flying",
	poison: "poison",
	ground: "ground",
	rock: "rock",
	bug: "bug",
	ghost: "ghost",
	steel: "steel",
	fire: "fire",
	water: "water",
	grass: "grass",
	electric: "electric",
	psychic: "psychic",
	ice: "ice",
	dragon: "dragon",
	dark: "dark",
	fairy: "fairy",
};

export const TYPE_RELATIONS: any = {
	normal: {
		attack: {
			effective: [],
			weak: [TYPES.rock, TYPES.steel],
			noDamage: [TYPES.ghost],
		},
		defense: {
			strong: [],
			immune: [TYPES.ghost],
			weak: [TYPES.fight],
		},
	},
	fight: {
		attack: {
			effective: [
				TYPES.normal,
				TYPES.rock,
				TYPES.steel,
				TYPES.ice,
				TYPES.dark,
			],
			weak: [
				TYPES.flying,
				TYPES.poison,
				TYPES.bug,
				TYPES.psychic,
				TYPES.fairy,
			],
			noDamage: [TYPES.ghost],
		},
		defense: {
			strong: [TYPES.rock, TYPES.bug, TYPES.dark],
			immune: [],
			weak: [TYPES.flying, TYPES.psychic, TYPES.fairy],
		},
	},
	flying: {
		attack: {
			effective: [TYPES.fight, TYPES.bug, TYPES.grass],
			weak: [TYPES.rock, TYPES.steel, TYPES.electric],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.fight, TYPES.bug, TYPES.grass],
			immune: [TYPES.ground],
			weak: [TYPES.rock, TYPES.electric, TYPES.ice],
		},
	},
	poison: {
		attack: {
			effective: [TYPES.grass, TYPES.fairy],
			weak: [TYPES.poison, TYPES.ground, TYPES.rock, TYPES.ghost],
			noDamage: [TYPES.steel],
		},
		defense: {
			strong: [
				TYPES.fight,
				TYPES.poison,
				TYPES.bug,
				TYPES.grass,
				TYPES.fairy,
			],
			immune: [],
			weak: [TYPES.ground, TYPES.psychic],
		},
	},
	ground: {
		attack: {
			effective: [
				TYPES.poison,
				TYPES.rock,
				TYPES.steel,
				TYPES.fire,
				TYPES.electric,
			],
			weak: [TYPES.flying, TYPES.bug, TYPES.grass],
			noDamage: [TYPES.flying],
		},
		defense: {
			strong: [TYPES.poison, TYPES.rock],
			immune: [TYPES.electric],
			weak: [TYPES.water, TYPES.ice, TYPES.grass],
		},
	},
	rock: {
		attack: {
			effective: [TYPES.flying, TYPES.bug, TYPES.fire, TYPES.ice],
			weak: [TYPES.fight, TYPES.ground, TYPES.steel],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.normal, TYPES.flying, TYPES.poison, TYPES.fire],
			immune: [],
			weak: [
				TYPES.fight,
				TYPES.ground,
				TYPES.steel,
				TYPES.water,
				TYPES.grass,
			],
		},
	},
	bug: {
		attack: {
			effective: [TYPES.grass, TYPES.psychic, TYPES.dark],
			weak: [
				TYPES.fight,
				TYPES.flying,
				TYPES.poison,
				TYPES.ghost,
				TYPES.steel,
				TYPES.fire,
				TYPES.fairy,
			],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.fight, TYPES.ground, TYPES.grass],
			immune: [],
			weak: [TYPES.flying, TYPES.rock, TYPES.fire],
		},
	},
	ghost: {
		attack: {
			effective: [TYPES.ghost, TYPES.psychic],
			weak: [TYPES.dark],
			noDamage: [TYPES.normal],
		},
		defense: {
			strong: [TYPES.poison, TYPES.bug],
			immune: [TYPES.normal, TYPES.fight],
			weak: [TYPES.ghost, TYPES.dark],
		},
	},
	steel: {
		attack: {
			effective: [TYPES.rock, TYPES.fairy, TYPES.ice],
			weak: [TYPES.steel, TYPES.fire, TYPES.water, TYPES.electric],
			noDamage: [],
		},
		defense: {
			strong: [
				TYPES.normal,
				TYPES.flying,
				TYPES.rock,
				TYPES.bug,
				TYPES.steel,
				TYPES.grass,
				TYPES.psychic,
				TYPES.ice,
				TYPES.dragon,
				TYPES.fairy,
			],
			immune: [TYPES.poison],
			weak: [TYPES.fight, TYPES.ground, TYPES.fire],
		},
	},
	fire: {
		attack: {
			effective: [TYPES.bug, TYPES.steel, TYPES.grass, TYPES.ice],
			weak: [TYPES.rock, TYPES.fire, TYPES.water, TYPES.dragon],
			noDamage: [],
		},
		defense: {
			strong: [
				TYPES.bug,
				TYPES.steel,
				TYPES.fire,
				TYPES.grass,
				TYPES.ice,
				TYPES.fairy,
			],
			immune: [],
			weak: [TYPES.ground, TYPES.rock, TYPES.water],
		},
	},
	water: {
		attack: {
			effective: [TYPES.ground, TYPES.rock, TYPES.fire],
			weak: [TYPES.water, TYPES.grass, TYPES.dragon],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.steel, TYPES.fire, TYPES.water, TYPES.ice],
			immune: [],
			weak: [TYPES.grass, TYPES.electric],
		},
	},
	grass: {
		attack: {
			effective: [TYPES.ground, TYPES.rock, TYPES.water],
			weak: [
				TYPES.flying,
				TYPES.poison,
				TYPES.bug,
				TYPES.steel,
				TYPES.fire,
				TYPES.grass,
				TYPES.dragon,
			],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.ground, TYPES.water, TYPES.grass, TYPES.electric],
			immune: [],
			weak: [
				TYPES.flying,
				TYPES.poison,
				TYPES.bug,
				TYPES.fire,
				TYPES.ice,
			],
		},
	},
	electric: {
		attack: {
			effective: [TYPES.flying, TYPES.water],
			weak: [TYPES.grass, TYPES.electric, TYPES.dragon],
			noDamage: [TYPES.ground],
		},
		defense: {
			strong: [TYPES.poison, TYPES.steel, TYPES.electric],
			immune: [],
			weak: [TYPES.ground],
		},
	},
	psychic: {
		attack: {
			effective: [TYPES.fight, TYPES.poison],
			weak: [TYPES.steel, TYPES.psychic],
			noDamage: [TYPES.dark],
		},
		defense: {
			strong: [TYPES.fight, TYPES.psychic],
			immune: [],
			weak: [TYPES.bug, TYPES.ghost, TYPES.dark],
		},
	},
	ice: {
		attack: {
			effective: [TYPES.flying, TYPES.ground, TYPES.grass, TYPES.dragon],
			weak: [TYPES.steel, TYPES.fire, TYPES.water, TYPES.ice],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.ice],
			immune: [],
			weak: [TYPES.fight, TYPES.rock, TYPES.steel, TYPES.fire],
		},
	},
	dragon: {
		attack: {
			effective: [TYPES.dragon],
			weak: [TYPES.steel],
			noDamage: [TYPES.fairy],
		},
		defense: {
			strong: [TYPES.fire, TYPES.water, TYPES.grass, TYPES.electric],
			immune: [],
			weak: [TYPES.ice, TYPES.dragon, TYPES.fairy],
		},
	},
	dark: {
		attack: {
			effective: [TYPES.ghost, TYPES.psychic],
			weak: [TYPES.fight, TYPES.dark, TYPES.fairy],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.ghost, TYPES.psychic, TYPES.dark],
			immune: [TYPES.psychic],
			weak: [TYPES.fight, TYPES.bug, TYPES.fairy],
		},
	},
	fairy: {
		attack: {
			effective: [TYPES.fight, TYPES.dragon, TYPES.dark],
			weak: [TYPES.poison, TYPES.steel, TYPES.fire],
			noDamage: [],
		},
		defense: {
			strong: [TYPES.fight, TYPES.bug, TYPES.dragon, TYPES.fairy],
			immune: [TYPES.dragon],
			weak: [TYPES.poison, TYPES.steel],
		},
	},
};
