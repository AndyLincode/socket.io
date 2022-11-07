// 使用 Websocket 的網址向Server 開啟連結
let ws = new WebSocket("ws://localhost:6001");

// 開啟後執行的動作，指定一個 function 會在連接 Websocket 後執行
ws.onopen = () => {
  console.log("Open connection");
};

// 關閉後執行
ws.onclose = () => {
  console.log("Close connection");
};

// 接收 Server 發送的訊息
ws.onmessage = event => {
  console.log(event);
};
