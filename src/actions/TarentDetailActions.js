export const FETCH_TARENT_DETAIL_START = "FETCH_TARENT_DETAIL_START"
export const FETCH_TARENT_DETAIL_SUCCESS = "FETCH_TARENT_DETAIL_SUCCESS"
export const FETCH_TARENT_DETAIL_ERROR = "FETCH_TARENT_DETAIL_ERROR"

export function fetchTarentDetail(id){
    return dispatch => {
        dispatch({
            type: FETCH_TARENT_DETAIL_START
        });
        fetch(`http://127.0.0.1:8080/api/tarent/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: "FETCH_TARENT_DETAIL_SUCCESS",
                tarent_detail: data,
            });
            
        })
        .catch((err) => {
            dispatch({
                type: "FETCH_TARENT_DETAIL_ERROR",
                error: err
            });
        })
    }
}