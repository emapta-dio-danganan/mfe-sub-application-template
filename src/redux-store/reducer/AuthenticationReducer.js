import jwtDecode from 'jwt-decode';

const initialState = {
	accessToken: '',
	clientSecret: '',
	refreshToken: '',
}

const AuthenticationReducer = (state = initialState, action) => {
	if(action.reducer && action.reducer === 'authorization'){
		switch (action.type) {
			case 'PERSIST_SAVE_AUTHORIZATION_TOKENS':
				if(action.data && jwtDecode(action.data) && JSON.parse(jwtDecode(action.data))){
					let parseData = JSON.parse(jwtDecode(action.data));
					
					return {
						...state,
						accessToken: parseData.accessToken,
						clientSecret: parseData.clientSecret,
						refreshToken: parseData.refreshToken,
					}
				} else {
					return state;
				}
			case 'SAVE_AUTHORIZATION_TOKENS':
				if(action.data){
					let auth = action.data;
					return {
						...state,
						accessToken: auth.accessToken || '',
						clientSecret: auth.clientSecret || '',
						refreshToken: auth.refreshToken || '',
					}
				} else {
					return state;
				}
			default:
				return state;
			break;
		}
	}
	return state;
}

export default AuthenticationReducer;