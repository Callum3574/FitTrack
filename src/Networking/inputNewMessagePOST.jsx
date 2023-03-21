export const addNewMessage = async (room_id, from_id, to_id, message) => {
  const res = await fetch(process.env.REACT_APP_BASE_URL + "send_message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_room_id: room_id,
      from_user: from_id,
      to_id: to_id,
      message: message,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
