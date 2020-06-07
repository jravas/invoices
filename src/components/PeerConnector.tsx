import React, { useState, useEffect, useRef } from "react";

import Peer from "peerjs";

export const PeerConnector = () => {
  const [userPeerId, setUserPeerId] = useState("");
  const [connectToId, setConnectToId] = useState("");
  const [newPeer, setNewPeer] = useState<Peer | undefined>(undefined);
  const [newPeerConnection, setNewPeerConnection] = useState<
    Peer.DataConnection | undefined
  >(undefined);
  const [message, setMessage] = useState("");

  const [myStreamUrl, setMyStreamUrl] = useState<string | undefined>(undefined);
  const myStreamRef = useRef<HTMLVideoElement | null>(null);
  const callerStreamRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const peer = new Peer({
      host: "localhost",
      port: 9000,
      path: "/",
    });

    setNewPeer(peer);
    console.log("peer init", peer);

    peer.on("connection", (conn) => {
      console.log("on connection", conn);
      conn.on("data", (data) => {
        console.log("connection data", data);
      });
      // setUserPeerId(id);
    });
    peer.on("open", (id) => {
      console.log("on open", id);
      setUserPeerId(id);
    });

    peer.on("call", async (call) => {
      console.log("call", call);
      call.on("stream", async (remoteStream) => {
        console.log("stream", remoteStream);
        if (!callerStreamRef.current) {
          return;
        }
        callerStreamRef.current.srcObject = remoteStream;
      });

      // handle answering call
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      call.answer(stream);
    });
  }, []);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("my peer", newPeer);
    if (!newPeer) {
      return;
    }
    const peerConnection = newPeer.connect(connectToId);
    setNewPeerConnection(peerConnection);

    peerConnection.on("open", () => {
      console.log("Peer connection opened");
      peerConnection.on("data", (data) => {
        console.log("Data recived from peer:", data);
      });
      ///peerConnection.send("hello peer");
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConnectToId(e.target.value);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPeerConnection) {
      return;
    }
    newPeerConnection.send(message);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    console.log(myStreamRef.current);
    if (!myStreamRef.current) {
      return;
    }
    if (!newPeer) {
      return;
    }
    newPeer.call(connectToId, stream);
    myStreamRef.current.srcObject = stream;
    // setMyStreamUrl(streamUrl);
  };

  const handleCallerVideo = () => {};
  return (
    <div>
      <h1>Hello</h1>
      <h4>Your peer id is: {userPeerId}</h4>
      <br />
      <h2>Connect to other user: </h2>
      <form onSubmit={handleConnect}>
        <input
          type="text"
          name="connectToId"
          value={connectToId}
          onChange={handleChange}
        />
        <button type="submit">Connect</button>
      </form>
      <br />
      <h2>Send message: </h2>
      <form onSubmit={handleSend}>
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>call</h3>
        <button onClick={handleCall}>call</button>
      </div>
      <div>
        My video stream:
        <video autoPlay width="320" height="240" ref={myStreamRef}></video>
      </div>
      <hr />
      <div>
        Caller video stream:
        <video autoPlay width="320" height="240" ref={callerStreamRef}></video>
      </div>
    </div>
  );
};
