import moment from "moment";
import { getAllBillings } from "../services/billing";
import { getCompany } from "../services/company";


// return the user data from the session storage
  export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('hrmanejaCompany');
    window.location.href = "/login";
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // set company data to session
  export const setCompanySession = (company) => {
    sessionStorage.setItem('hrmanejaCompany', JSON.stringify(company));
  }

    // return the token from the session storage
  export const getCompanyData = async () => {
      const user = getUser();
      if(user) {
      const company =  await getCompany(user.company_id);
      setCompanySession(company);
      const companyData = sessionStorage.getItem('hrmanejaCompany');
      if (companyData) return JSON.parse(companyData);
      else return null;
      } else return null;
  }

  export const getBillingData = async () => {
    const user = getUser();
      if(user) {
      const response = await getAllBillings(user.company_id);
				const currentMonth = new Date().getMonth();
				const currentYear = new Date().getFullYear();
				if (response?.length > 0) {
					const billingMonth = new Date(response[0]?.createdAt).getMonth();
					const billingYear = new Date(response[0]?.createdAt).getFullYear();
					if (currentMonth === billingMonth && currentYear === billingYear) {
						return true;
					}else{
            return false;
          }
			}
  } else return null;
  }

  export const getCompanyFeatures = () => {
    const companyData = sessionStorage.getItem('hrmanejaCompany');
    if (companyData){
      const data = JSON.parse(companyData);
      return data?.settings?.features;
    }
    else return null;
  }

  export const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
	};

  export function calPercentage(num, percentage){
    const result = num * (percentage / 100);
    return parseFloat(result.toFixed(2));
  }

  export const formatMoney = (amount) => {
    const money = Number(amount) || 0;
    return "₦ " + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };