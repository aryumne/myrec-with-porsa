import { apiGet, apiPost } from "@/plugins/axios";

const prefixApi = "auth";
const login = async (body, queries = {}) =>
  await apiPost(`${prefixApi}/login`, body, queries);

const logout = async (body, queries = {}) =>
  await apiPost(`${prefixApi}/logout`, body, queries);

const getProfile = async (queries = {}) =>
  await apiGet(`${prefixApi}/profile`, queries);

export const authService = {
  login,
  logout,
  getProfile,
};
