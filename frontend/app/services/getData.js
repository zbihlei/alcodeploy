import { BASE_URL } from "../utils/constants";

export  async function getGeneral() {
   try {
     const res = await fetch(`${BASE_URL}`);
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }

 export async function searchByName(name) {
  try {
      const res = await fetch(`${BASE_URL}/search?name=${encodeURIComponent(name)}`);
      return res.json();
  } catch (error) {
      console.log(error);
  }
}

 export  async function getSpecific(name) {
   try {
     const res = await fetch(`${BASE_URL}/${name}`);
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }

  export  async function getSpecificItem(name, id) {
   try {
     const res = await fetch(`${BASE_URL}/${name}/${id}`);
       return res.json();
   } catch (error) {
     console.log(error);
   }
 }

 export async function postData(url , data) {
  try {
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type" : "application/json"
      },
      body: data, 
    });
 
    return response.json(); 
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; 
  }
}

export  async function getOrdersByEmail(mail) {
  try {
    const res = await fetch(`${BASE_URL}/orders?mail=${mail}`);
      return res.json();
  } catch (error) {
    console.log(error);
  }
}
export  async function getAllOrders() {
  try {
    const res = await fetch(`${BASE_URL}/orders/all`);
      return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function setupStatus(url, id, data) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: data, 
    });

    return response.json(); 
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; 
  }
}
