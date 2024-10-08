{/*id: 651929
https://api.unsplash.com/photos/?client_id=zvSpMDH9MQ8ArIJ70E_4xM-LsBtzZIakPD6mpaVXG9I;
Access Key: zvSpMDH9MQ8ArIJ70E_4xM - LsBtzZIakPD6mpaVXG9I

Secret key: gJviUT8shzKKu2kB44 - MkiuaYBkODX_8sxHUn - SvfV8*/}

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos/?client_id=zvSpMDH9MQ8ArIJ70E_4xM-LsBtzZIakPD6mpaVXG9I";

export const fetchPhoto = async (topic:string, page:number) => {

  const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=zvSpMDH9MQ8ArIJ70E_4xM-LsBtzZIakPD6mpaVXG9I&query=${topic}&page=${page}&per_page=15`)/*{
      params: {
      //client_id: "zvSpMDH9MQ8ArIJ70E_4xM-LsBtzZIakPD6mpaVXG9I",
      query: topic,
      page: page,
      per_page: 15,
    },
  })*/;
  return {
    photo: response.data.results,
    totalPages: response.data.total_pages,
  };
};