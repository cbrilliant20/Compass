import api from "./api-config"

export const getAllTrips = async () => {
  const resp = await api.get('/trips')
  return resp.data
}

export const getOneTrip = async (id) => {
  const resp = await api.get(`/trips/${id}`)
  return resp.data
}

export const postTrip = async (tripData) => {
	const resp = await api.post('/trips', { trip: tripData });
	return resp.data;
};

export const putTrip = async (id, tripData) => {
	const resp = await api.put(`/trips/${id}`, { trip: tripData });
	return resp.data;
};

export const deleteTrip = async (id) => {
	const resp = await api.delete(`/trips/${id}`);
	return resp;
};