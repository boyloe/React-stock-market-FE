import axios from "axios";

const public_token = 'pk_ae113656c0fe4cbb8f2053e075fa29b8' 
const api = axios.create({
  baseURL: "https://cloud.iexapis.com/stable",
});

export const loadQuotesForStock = symbol => {
  console.log('quote')
  return api.get(`/stock/${symbol}/quote?token=${public_token}`).then(res => res.data);
};

export const loadLogoForStock = symbol => {
  console.log('logo')
  return api.get(`/stock/${symbol}/logo?token=${public_token}`).then(res => res.data.url);
};

export const loadRecentNewsForStock = symbol => {
  console.log('news')
  return api.get(`/stock/${symbol}/news?token=${public_token}`).then(res => res.data);
};

export const loadChartForStock = (symbol, range) => {
  console.log('chart')
  return api.get(`/stock/${symbol}/chart/${range}?token=${public_token}`).then(res => res.data);
};
// export const loadQuotesForStock = symbol => {
//   console.log('quote')
//   return api.get(`/stock/${symbol}/quote?`).then(res => res.data);
// };

// export const loadLogoForStock = symbol => {
//   console.log('logo')
//   return api.get(`/stock/${symbol}/logo?`).then(res => res.data.url);
// };

// export const loadRecentNewsForStock = symbol => {
//   console.log('news')
//   return api.get(`/stock/${symbol}/news?`).then(res => res.data);
// };

// export const loadChartForStock = (symbol, range) => {
//   console.log('chart')
//   return api.get(`/stock/${symbol}/chart/${range}?`).then(res => res.data);
// };
