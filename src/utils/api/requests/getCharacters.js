import { api } from '../instance';

export const getCharacters = ({ options }) => api.get('character', { ...(options && options) });
