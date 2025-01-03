import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
     loadmovie:(state,action) =>{
        state.info = action.payload;
     },
     removemovie:(state,action) =>{
        state.info = action.null;
     }
     
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { loadmovie,removemovie} = movieSlice.actions
  
  export default movieSlice.reducer




// export { removemovie } from "../reducers/movieSlice";
// import axios from "../../utils/axios";
// import { loadmovie } from "../reducers/movieSlice";

// export const asynceloademovie = (id) => async (dispatch, getstate) => {
//     try {
//         const detail = await axios.get(`/movie/${id}`);
//         const externalid = await axios.get(`/movie/${id}/external_ids`);
//         const recommendations = await axios.get(`/movie/${id}/recommendations`);
//         const similar = await axios.get(`/movie/${id}/similar`);
//         const translations = await axios.get(`/movie/${id}/translations`);
//         const videos = await axios.get(`/movie/${id}/videos`);
//         const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
//         let theultimatedetails = {
//             detail: detail.data,
//             externalid: externalid.data,
//             recommendations: recommendations.data.results,
//             similar: similar.data.results,
//             translations: translations.data.translations.map((t) => t.name),
//             videos: videos.data.results.find((m) => m.type === "Trailer"),
//             watchproviders: watchproviders.data.results.IN,
//         };

//         dispatch(loadmovie(theultimatedetails));
//         console.log(theultimatedetails);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// };