const express = require("express");
const SocketServer = require("ws").Server;

// 指定 port
const PORT = 6001;

// 創建 express 的物件，綁定監聽6000，開啟提示
const server = express().listen(PORT, () =>
  console.log(`已啟動, prot:${PORT}`)
);

const wss = new SocketServer({ server });

//當 WebSocket 從外部連結時執行
wss.on("connection", (ws) => {
  //連結時顯示
  console.log("Client connected");

  // const sendNowTime = setInterval(() => {
  //   ws.send(String(new Date()));
  // }, 5000);

  // 對 message 監聽，接收Client端訊息
  ws.on("message", (data) => {
    // 取得所有連接中的Clients
    let clients = wss.clients;

    // 做迴圈，發送訊息至每個 clients
    clients.forEach((client) => {
      client.send(data.toString());
    });

    // // data 為 Client 發送的訊息，回傳
    // ws.send(data);
  });

  // 關閉時顯示
  ws.on("close", () => {
    console.log("Connection Closed");
  });
});
