import client from "../../api/client";

const playURL = "/api/play";

export const getPlayByCode = async (code) => {
  const response = await client.get(`${playURL}/${code}`);
  return response;
};
