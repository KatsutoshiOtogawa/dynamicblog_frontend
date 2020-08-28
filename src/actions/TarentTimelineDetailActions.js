export function showTarentTimelineDetail(){
    return dispatch => {
        dispatch({
            type: "SHOW_TARRENT_TIMELIEN_DETAIL_START",
        });

        fetch('http://localhost:3000/api/todos')
        .then((res)=> res.json())
        .then((data) => {
            dispatch({
                type: "SHOW_TARRENT_TIMELIEN_DETAIL_SUCCESS",
                tarentdetail: data,
            })
        })
        .catch((err) => {
            dispatch({
                type: "SHOW_TARRENT_TIMELIEN_DETAIL_ERROR",
                error: err,
            })
        })
    }
}