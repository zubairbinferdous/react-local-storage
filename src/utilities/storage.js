/* eslint-disable no-undef */
const storage = (id) =>{

    // eslint-disable-next-line no-unused-vars

    let addToStorage = {};

    // get data from storage 
    const storageCart = localStorage.getItem('shopping-cart');

    if (storageCart) {
        addToStorage = JSON.parse(storageCart);
    }

    // console.log(addToStorage);

    // add quantity 
    const StorageData = addToStorage[id];

    if (StorageData) {
        const newStorage = StorageData + 1;
        addToStorage[id] = newStorage ;
    }
    else{
        addToStorage[id] = 1;
    }


    localStorage.setItem('shopping-cart' , JSON.stringify(addToStorage));

}


const removeItem = (id) => {

    const storageCart = localStorage.getItem('shopping-cart');

    if (storageCart) {
        const cart = JSON.parse(storageCart);
        if ( id in cart) {
            delete cart[id];
            localStorage.setItem('shopping-cart' , JSON.stringify(cart));
        }

    }
}

export { removeItem, storage };

// const storage = (id) =>{

//     const StorageData = localStorage.getItem(id);

//     const newStorage = parseInt(StorageData) + 1;

//     if (StorageData) {
//         console.log('data all ready found')
//         localStorage.setItem( id , newStorage)
        
//     }else{
//         console.log('data added')
//         localStorage.setItem(id , 1)
//     }

// }

// export { storage };

