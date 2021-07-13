const initialState = {
    products: [
        {
            id: 1,
            title: 'fixie style white',
            descriptions: 'fixie style colour white frame',
            img: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/Y2QvNyTM7t.jpg',
            stock: 20,
            price: 4000000
        },
        {
            id: 2,
            title: 'fixie style mix-colour',
            descriptions: 'fixie style colourful mix frame',
            img: 'https://www.sepeda.me/wp-content/uploads/2020/09/Kreativitas-pewarnaan-rangka-Sepeda-Fixie.jpg',
            stock: 20,
            price: 6000000
        },
        {
            id: 3,
            title: 'fixie circus style vibes',
            descriptions: 'fixie style circus vibes',
            img: 'https://www.bestmagz.id/wp-content/uploads/2019/03/sepeda-fixie-terbaik.jpg',
            stock: 20,
            price: 4500000
        },
        {
            id: 4,
            title: 'fixie style black & white',
            descriptions: 'fixie style black & white',
            img: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/nPBaChlt0z.jpg',
            stock: 20,
            price: 5200000
        },
        {
            id: 5,
            title: 'fixie tsunami SNM 300',
            descriptions: 'fixie tsunami SNM 300 edisi black orange gear',
            img: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-12349012/tsunami_frame_sepeda_fixie_tsunami_snm_300_fixed_gear__brand_tsunami_full01_d7vuks30.jpg',
            stock: 20,
            price: 6000000
        }
    ]
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