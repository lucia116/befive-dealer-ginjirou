// Register holds variables used global wide.
var Register = {
	// system constant
	'GAME_TITLE': 'BEFIVE DEALER GINJIROU',
	'GAME_VRESION': 'DO_NOT_TOUCH_AUTOGENERATED_GAME_VRESION',
	// system registers
	// of related to device settings
	'audioType': null,
	'touchDevice': false,
	'isScreenOrientationLandscape': false,
	'menuDisplayed': false,
	// for debugging
	'debug': {},
	// instance holder
	'events': {},
	'clocks': {}, // holds timer, keeping as refernece
	'audioInstances': {},
	'spriteInstances': {},
	'groupInstances': {},
	'graphicInstances': {}, // for holding shapes
	'keyinputInstances': {}, // for key inputs
	'renderTextureInstances': {},
	'maskInstances': {}, // for holding masks
	// system objects
	// var to store winning combinations
	'reelHasSlowedDown': false,
	'reelCountDownMusicStarted': false,
	'reelCountDownStarted': false,
	// Holds all the reel units and dices
	'reel_unit': {
		'group': null,
	},
	'reels': [
		{
			'currentStop': 0,
			'previousStop': -1,
			'currentAngle': 0,
			'hasSlowedDown': false,
			'disc': null,
			'dice': null,
			'needle': null,
			'group': null,
			'isSpinning': false,
		},
		{
			'currentStop': 0,
			'previousStop': -1,
			'currentAngle': 0,
			'hasSlowedDown': false,
			'disc': null,
			'dice': null,
			'needle': null,
			'group': null,
			'isSpinning': false,
		},
	],
	// variables (private)
	// mainly used for displays. the following vars may be outdated (e.g. in counting up / down)
	'creditCount': 0,
	'winCount': 0,
	// bet parity
	'bet_parity': '',
	'bet_amount': 0, // 0 is for no game.
	'game_result': null,
	'last_reel_parity': '',
	// important - this register is used to keep current credit balance while counting up
	// and the most up to date information stored
	'pending_bet_parity': null,
	'pending_current_credits': 0,
	'pending_current_win': 0,
	/**
	 * Double Up
	 */
	'is_double_up': false,
	/**
	 * Bet Phase states. open, closed, hot
	 */
	'card_odd_state': 'open',
	'card_even_state': 'open',
	/**
	 * Avatars
	 */
	 'avatars_id': {
		"f": [
			"f-Ase_o_fuku_onna2",
			"f-beedro_bizin",
			"f-KitagawaUtamaro_FlowersOfEdo",
			"f-komagomenasu",
			"f-sushi",
			"f-tanabata21",
			"f-woman_looking_at_toy",
			"f-woman_reading"
		],
		"a": [
			"a-animal",
			"a-bakemono",
			"a-bakemono_2",
			"a-cat",
			"a-dog",
			"a-fox",
			"a-obake",
			"a-oni"
		],
		"m": [
			"m-engei",
			"m-fushimi_ningyo_zu_l",
			"m-goemon",
			"m-hikeshi15_m",
			"m-hikeshi18_m",
			"m-hikeshi27_1_m",
			"m-hikeshi27_2_m",
			"m-Hiroshige_par_Kunisada",
			"m-kabuki",
			"m-Kunisada_Sumo_Triptychon_c1860s",
			"m-ninja",
			"m-ronin",
			"m-samurai",
			"m-sharaku1",
			"m-sharaku94",
			"m-sumo_wrestler",
			"m-ukiyoe",
			"m-warrior",
			"m-yoshitoshi_onogawa_1865"
		]
	},
	/**
	 * Leaders Board
	 */
	'user_id': '',
	'user_avatar_id': '',
	/**
	 * Replenishment System
	 */
	'replenishmentTime': -1, // used internally
	/**
	 * Ad Provider. See PCB.adProvider.
	 */
	'adProvider': {}, // used internally
	/**
	 * Ad Banner. See See PCB.adBanner.
	 */
	'adBanner': {}, // used internally
	/**
	 * CONSTANTs
	 */
	// card color codes
	'BET_CARD_OPEN_COLOR': {
		'open': 0x74325c,
		'closed': 0x333631,
		'hot': 0xe60033,
	},
	/**
	 * User Config Registers (refered to and merged with settings.json upon completion of preload in rom-assets.js )
	 */
	/* configs the followings are not updated except when merged with the config value at startup. */
	'show_company_logo_flash': true,
	'mute_sound': 'false', /* string */
	'game_difficulty': 'normal',
	'price_decale': 0,
	'free_play': false,
	'serial_number': '',
	'game_attraction_sound': true,
	'initial_credits': 100,
	'replenishment_credits': 100,
	'replenishment_max': 200,
	'replenishment_every': 600, // in second. 10 mins by default
	'test_switch': false,
	'adProvider_url': '', // for adProvider.
};
