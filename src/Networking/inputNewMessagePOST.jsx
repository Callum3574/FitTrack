export const addNewMessage = async ({
  room,
  from_user,
  to_user,
  message,
  time,
}) => {
  const res = await fetch(process.env.REACT_APP_BASE_URL + "send_message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_room_id: room,
      from_user: from_user,
      // time: time,
      to_id: to_user,
      message: message,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
