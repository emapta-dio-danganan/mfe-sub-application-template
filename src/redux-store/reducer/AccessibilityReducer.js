import jwtDecode from 'jwt-decode';

const initialState = {
    lastActiveRequest: null,
	lastActivePage: null,
    lastActiveUrl: null,
}

const AccessibilityReducer = (state = initialState, action) => {
	if(action.reducer && action.reducer === 'accessibility'){
		switch (action.type) {
			case 'PERSIST_SAVE_LAST_ACTIVE_REQUEST':
                return {
                    ...state,
                    lastActiveRequest: action.data
                }
			break;
			case 'PERSIST_SAVE_LAST_ACTIVE_URL':
                return {
                    ...state,
                    lastActivePage: action.data.page,
                    lastActiveUrl: action.data.url
                }
			break;
			default:
				return state;
			break;
		}
	}
	return state;
}

export default AccessibilityReducer;