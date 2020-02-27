import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helpers/utils';


const setAuthHeader = req => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
    if (token) {
        return { headers: { 'authorization': `Bearer ${token}` } };
    }
    return undefined;
};
export const getSecretData = async (req) => {

    const url = 'http://localhost:3000/api/v1/secret';
    return await axios.get(url, setAuthHeader(req))
        .then(response => response.data);
};
export const createPortfolio = async (portfolioData) => {
    return await axiosInstance.post('/portfolios', portfolioData, setAuthHeader())
      .then(response => response.data)
      .catch(error => rejectPromise(error))
  }
  
  export const updatePortfolio = async (portfolioData) => {
    return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
      .then(response => response.data)
      .catch(error => rejectPromise(error))
  }
  
// export const getSecretDataServer = async (req) => {
//     return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req))
//         .then(response => response.data);
// };