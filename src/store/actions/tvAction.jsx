import { removetv } from "../reducers/tvSilce";
import { loadtv} from "../reducers/tvSilce";
import axios from "../../utils/axios";

export const asyncloadtv = (id) => async (dispatch,getState) =>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`tv/${id}/external_ids`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        // const seasons = await axios.get(`/tv/${id}/seasons`);
    

    
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            similar: similar.data.results,
            // seasons: seasons.data.results,
            videos :videos.data.results.find((m) => m.type === "Trailer"),


        }
        dispatch(loadtv(theultimatedetails));
        console.log(theultimatedetails);

    }catch(error){
        console.log("Error:",error);
    }
};