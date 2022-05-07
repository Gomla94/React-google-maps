import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  const options = {
    params: {
      bl_latitude: ne.lat,
      tr_latitude: sw.lat,
      bl_longitude: ne.lng,
      tr_longitude: sw.lng,
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
