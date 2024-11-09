import axios from "axios";
import { configs } from "../configs";

export const getDatas = async (url) => {
   try {
      const get = await axios.get(`${configs.api_host_dev}/${url}`)

      return get.data
   } catch (error) {
      console.log(error)
   }
}