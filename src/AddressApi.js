import dotenv from 'dotenv'
dotenv.config()
const api = "https://api.getAddress.io/find/"


// Generate a unique token for storing your bookshelf data on the backend server.
let apiToken = process.env.ADDRESSAPI




  /*********************************************
 *  Get addresses from local storage
 * ******************************************/
export const getAddressesFromLocalStorage = ()=> {
 const addresses = localStorage.getItem("addresses");
 const initialValue = JSON.parse(addresses);
 return initialValue || "";
}


  /*********************************************
 *  add address to local storage
 * ******************************************/
export const saveAddressesLocal = (addresses) =>{
  // if (localStorage.getItem("address") === null) {
  //   localStorage.setItem("addresses",[])
  // }
  localStorage.setItem("addresses", JSON.stringify(addresses))
}


/*********************************************
 *  handle address change
 * ******************************************/

export const search = (query) =>
fetch(`${api}/${query}?api-key=${apiToken}`)
    .then(res => res.json())
    .then(data => data.addresses)