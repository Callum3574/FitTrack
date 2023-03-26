export const allMessages = async (room_id) => {
  const res = await fetch(
    process.env.REACT_APP_BASE_URL + `display_messages/${room_id}`
  );
  const data = await res.json();
  return data.messages;
};
