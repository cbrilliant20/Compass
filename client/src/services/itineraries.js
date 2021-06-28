import api from './api-config';

export const getAllItineraries = async () => {
	const resp = await api.get('/itineraries');
	return resp.data;
};

export const getOneItinerary  = async (id) => {
	const resp = await api.get(`/itineraries/${id}`);
	return resp.data;
};

export const postItinerary = async (itineraryData) => {
  try{
	const resp = await api.post('/itineraries', { itinerary: itineraryData });
    return resp.data;
  } catch(error){
    throw error
  }
};

export const putItinerary  = async (id, itineraryData) => {
	const resp = await api.put(`/itinerary/${id}`, { itinerary: itineraryData });
	return resp.data;
};

export const deleteItinerary = async (id) => {
	const resp = await api.delete(`/itineraries/${id}`);
	return resp;
};

