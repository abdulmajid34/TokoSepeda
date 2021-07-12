const initialState = {
    products: []
}

export default function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "product/setProduct":
            return { ...state, products: payload }
        default:
            return state
    }
}