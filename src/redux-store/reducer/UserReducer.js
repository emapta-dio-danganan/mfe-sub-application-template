import jwtDecode from 'jwt-decode';

const initialState = {
	profile: {},
	company: {},
	config: {},
	roles: {},
	view: '',
	version1UserInfo: {},
}

const UserReducer = (state = initialState, action) => {
	if (action.reducer && action.reducer === 'user-info') {
		switch (action.type) {
			case 'PERSIST_SAVE_USER_INFORMATION':
				if (action.data && jwtDecode(action.data) && JSON.parse(jwtDecode(action.data))) {
					let parseData = JSON.parse(jwtDecode(action.data));
					return {
						...state,
						profile: parseData.profile ? jwtDecode(parseData.profile) : {},
						company: parseData.company ? jwtDecode(parseData.company) : {},
						config: parseData.config ? jwtDecode(parseData.config) : {},
						view: parseData.view ? jwtDecode(parseData.view) : ''
					}
				} else {
					return state;
				}
				break;
			case 'SAVE_USER_INFORMATION':
				if (action.data) {
					let info = action.data
					return {
						...state,
						profile: info.profile || {},
						company: info.company || {},
						config: info.config || {},
						view: info.view || ''
					}
				} else {
					return state;
				}
				break;
			case 'PERSIST_CHANGE_USER_VIEW':
				if (action.data) {
					if (state.version1UserInfo && state.version1UserInfo.user_type) {
						state.version1UserInfo.user_type = action.data
					}
					return {
						...state,
						view: action.data
					}
				} else {
					return state;
				}
				break;
			case 'PERSIST_SAVE_VERSION1_USER_INFO':
				return {
					...state,
					version1UserInfo: action.data
				}
				break;


			case 'PERSIST_UPDTTE_USER_INFORMATION':
				return {
					...state,
					profile: action.data.profile
				}
				break;
			case 'PERSIST_UPDATE_USER_IP_PERMISSION':
				state.config.ipPermission = action.data;
				return {
					...state,
				}
				break;
			case 'UPDATE_IP_ADDRESS':
				state.profile['ip_address'] = action.data;
				return {
					...state,
				}
				break;

			case 'PERSIST_USER_UPDATE_THEMES':
				state.config.themeCode = action.data.themeCode;
				state.config.themeValue = action.data.themeValue;
				return {
					...state,
				}
				break;
			default:
				return state;
				break;
		}
	}
	return state;
}

export default UserReducer;