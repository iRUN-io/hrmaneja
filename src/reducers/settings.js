const initialState = {
	isDarkMode: false, isDarkHeader: false, isFixNavbar: false, isMinSidebar: false, isDarkSidebar: false, isIconColor: false, isGradientColor: false,
	isRtl: false,
	isFont: "font-montserrat",
	isSubMenuIcon: "list-a",
	isMenuIcon: "list-c",
	isBoxLayout: false,
	isStatistics: true,
	isFriendList: true,
	isbox: true,
	isbox2: true,
	isbox3: true,
	isbox4: true,
	isbox5: true,
	isbox6: true,
	isbox7: true,
	isbox8: true,
	isbox9: true,
	isbox10: true,
	isBoxClose: true,
	isBox2Close: true,
	isBox3Close: true,
	isBox4Close: true,
	isBox5Close: true,
	isBox6Close: true,
	isBox7Close: true,
	isBox8Close: true,
	isBox9Close: true,
	isBox10Close: true,
	isStatisticsClose: true,
	isFriendListClose: true,
	isToggleLeftMenu: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_DARK_MODE':
			return {
				...state,
				isDarkMode: action.payload
			}
		case 'CHANGE_DARK_HEADER':
			return {
				...state,
				isDarkHeader: action.payload
			}
		case 'FIX_NAVBAR_HEADER':
			return {
				...state,
				isFixNavbar: action.payload
			}
		case 'DARK_MIN_SIDEBAR':
			return {
				...state,
				isMinSidebar: action.payload
			}
		case 'DARK_SIDEBAR':
			return {
				...state,
				isDarkSidebar: action.payload
			}
		case 'CHANGE_ICON_COLOR':
			return {
				...state,
				isIconColor: action.payload
			}
		case 'CHANGE_GRADIENT_COLOR':
			return {
				...state,
				isGradientColor: action.payload
			}
		case 'IS_RTL':
			return {
				...state,
				isRtl: action.payload
			}
		case 'CHANGE_FONT':
			return {
				...state,
				isFont: action.payload
			}
		case 'CHANGE_SUBMENU_ICON':
			return {
				...state,
				isSubMenuIcon: action.payload
			}
		case 'CHANGE_DROPDOWN_MENU_ICON':
			return {
				...state,
				isMenuIcon: action.payload
			}
		case 'CHANGE_BOX_LAYOUT':
			return {
				...state,
				isBoxLayout: action.payload
			}
		case 'IS_OPEN_STATISTICS':
			return {
				...state,
				isStatistics: action.payload
			}
		case 'IS_OPEN_FRIENDLIST':
			return {
				...state,
				isFriendList: action.payload
			}
		case 'IS_CLOSE_STATISTICS':
			return {
				...state,
				isStatisticsClose: action.payload
			}
		case 'IS_CLOSE_FRIENDLIST':
			return {
				...state,
				isFriendListClose: action.payload
			}
		case 'IS_TOGGLE_LEFTMENU':
			return {
				...state,
				isToggleLeftMenu: action.payload
			}
		case 'IS_TOGGLE_BOX':
			return {
				...state,
				isbox: action.payload
			}
		case 'IS_TOGGLE_BOX2':
			return {
				...state,
				isbox2: action.payload
			}
		case 'IS_TOGGLE_BOX3':
			return {
				...state,
				isbox3: action.payload
			}
		case 'IS_TOGGLE_BOX4':
			return {
				...state,
				isbox4: action.payload
			}
		case 'IS_TOGGLE_BOX5':
			return {
				...state,
				isbox5: action.payload
			}
		case 'IS_TOGGLE_BOX6':
			return {
				...state,
				isbox6: action.payload
			}
		case 'IS_TOGGLE_BOX7':
			return {
				...state,
				isbox7: action.payload
			}
		case 'IS_TOGGLE_BOX8':
			return {
				...state,
				isbox8: action.payload
			}
		case 'IS_TOGGLE_BOX9':
			return {
				...state,
				isbox9: action.payload
			}
		case 'IS_TOGGLE_BOX10':
			return {
				...state,
				isbox10: action.payload
			}
		case 'IS_CLOSE_BOX':
			return {
				...state,
				isBoxClose: action.payload
			}
		case 'IS_CLOSE_BOX2':
			return {
				...state,
				isBox2Close: action.payload
			}
		case 'IS_CLOSE_BOX3':
			return {
				...state,
				isBox3Close: action.payload
			}
		case 'IS_CLOSE_BOX4':
			return {
				...state,
				isBox4Close: action.payload
			}
		case 'IS_CLOSE_BOX5':
			return {
				...state,
				isBox5Close: action.payload
			}

		case 'IS_CLOSE_BOX6':
			return {
				...state,
				isBox6Close: action.payload
			}
		case 'IS_CLOSE_BOX7':
			return {
				...state,
				isBox7Close: action.payload
			}

		case 'IS_CLOSE_BOX8':
			return {
				...state,
				isBox8Close: action.payload
			}
		case 'IS_CLOSE_BOX9':
			return {
				...state,
				isBox9Close: action.payload
			}
		case 'IS_CLOSE_BOX10':
			return {
				...state,
				isBox10Close: action.payload
			}


		default:
			return state
	}
}