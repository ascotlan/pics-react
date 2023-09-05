import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID jyMj20EHgHcht5Zjj5FcSkkZfSPey6dxYe1YSrFT1bo",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  } catch (e) {
    console.log(e.message);
  }
};

export default searchImages;
