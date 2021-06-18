import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (arg) => {
    axiosWithAuth()
      .get("api/colors")
      .then(res => {
        arg(res.data)
      })
      .catch(err=>{
        console.log(err);
      })
}

export default fetchColorService;