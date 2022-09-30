let socket;

const receiveMessage = ({ data }: { data: string }) => {
  const msg = JSON.parse(data);
};

window.onload = () => {
  socket = new WebSocket(`ws://localhost:8000/api/entry`);
  socket.addEventListener("message", receiveMessage);
};
