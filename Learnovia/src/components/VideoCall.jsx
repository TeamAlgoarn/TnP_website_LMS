import React, { useEffect, useRef } from 'react';

const VideoCall = ({ roomName, userName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: roomName,
      parentNode: jitsiContainerRef.current,
      width: '100%',
      height: '100%',
      userInfo: {
        displayName: userName,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomName, userName]);

  return (
    <div
      ref={jitsiContainerRef}
      style={{
        width: '100%',
        height: '98vh', // Full height inside modal
        borderRadius: '10px',
      }}
    />
  );
};

export default VideoCall;
