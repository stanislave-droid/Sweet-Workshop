import axios from 'axios';
import { ApiBaseURL, ApiParticles } from './constants.js';

axios.defaults.baseURL = ApiBaseURL;
const limit = 8;

export async function getCategories() {
  const response = await axios.get(ApiParticles[1]);
  return response.data;
}

export async function getDesserts(page = 1, category) {
  const parameters = {
    params: {
      page: page,
      limit: limit,
    },
  };
  if (category !== undefined) {
    parameters.params.category = category;
  }

  const response = await axios.get(ApiParticles[0], parameters);
  return response.data;
}

export async function getDessert(id) {
  const response = await axios.get(`${ApiParticles[0]}/${id}`);
  return response.data;
}

export async function getFeedbacks(page = 1, limit = 10) {
  const parameters = {
    params: {
      page: page,
      limit: limit,
    },
  };

  const response = await axios.get(ApiParticles[3], parameters);
  return response.data;
}

export async function postOrder({ name, phone, dessertId, comment }) {
  const formData = {
    name: name,
    phone: phone,
    dessertId: dessertId,
    comment: comment,
  };

  const response = await axios.post(ApiParticles[2], formData);
  return response.data;
}
