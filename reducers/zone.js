import produce from 'immer';
export const ZONE_REQUEST = "ZONE_REQUEST";
export const ZONE_SUCCESS = "ZONE_SUCCESS";
export const ZONE_FAILURE = "ZONE_FAILURE";
const initalState = {
    zone: null,
    zoneDone: false,
    zoneError: null,
}
const reducer = (state = initalState, action) => produce(state, draft => {
    switch (action.type) {
        case ZONE_REQUEST:
            draft.zone = null;
            draft.zoneDone = false;
            draft.zoneError = null;
            break;
        case ZONE_SUCCESS:
            draft.zone = action.data;
            draft.zoneDone = true;
            break;
        case ZONE_FAILURE:
            draft.zoneError = action.error;
            break;
        default:
            break;
    }
})
export default reducer;