import axios from "axios";
import { API } from "../../constants/UrlConfigs";

const initialState = {
    roles: [],
    systems: {},
}

const AccessibilityReducer = (state = initialState, action) => {
	if(action.reducer && action.reducer === 'user-acl'){
		switch (action.type) {
			case 'SAVE_ACL_DATA':
                return {
                    ...state,
                    roles: action.data.roles,
                    systems: action.data.systems
                }
			break;
			case 'CHANGE_ACL_VIEW':
				axios.post(
					`${API}/change-view`,
					{
						params: {
							view: action.data,
							roles: JSON.stringify(state.roles)
						},
					},
					{
						headers: {
							Authorization: `Bearer: ${localStorage.getItem(
								"_tkn"
							)}`
						}
					}
				)
					.then(res => {
						if (res.data.status) {
							localStorage.removeItem("_tkn");
							localStorage.setItem("_tkn", res.data.data);
							console.log('updated _tkn');
							// if (action.data.toUpperCase() === 'ADMIN') {
							// 	window.location.href = `${WEB}`;
							// } else {
							// 	window.location.href = `${WEB}/home`;
							// }
						} else {
							console.log("CHANGE_VIEW error", res);
						}
					})
					.catch(err => {
						console.log("CHANGE_VIEW err", err);
					});
	
				return state;
			break;
			default:
				return state;
			break;
		}
	}
	return state;
}

export default AccessibilityReducer;