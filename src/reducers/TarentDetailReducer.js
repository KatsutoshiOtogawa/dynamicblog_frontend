import {FETCH_TARENT_DETAIL_START,FETCH_TARENT_DETAIL_SUCCESS,FETCH_TARENT_DETAIL_ERROR} from '../actions/TarentDetailActions'

const initState = {
    fetching: false,
    fetched: false,
    tarent_detail: [],
    error: null
}

const TarentDetailReducer = (state = initState,action) => {
    switch (action.type){
        case FETCH_TARENT_DETAIL_START:
            return {
                ...state,
                fetching: true,
            };

        case FETCH_TARENT_DETAIL_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                tarent_detail: action.tarent_detail
            };

        case FETCH_TARENT_DETAIL_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            };

        default:
            return state;
    }
}

export default TarentDetailReducer;