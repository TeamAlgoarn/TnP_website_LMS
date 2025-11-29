
// //Meeting.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Video, Users, ArrowLeft } from 'lucide-react';

// const Meeting = () => {
//   const { roomId } = useParams();
//   const navigate = useNavigate();
//   const jitsiContainerRef = useRef(null);
//   const jitsiApiRef = useRef(null);

//   const [isLoading, setIsLoading] = useState(true); // for loading the script
//   const [userName, setUserName] = useState('');
//   const [isJoined, setIsJoined] = useState(false); // controls rendering of container
//   const [starting, setStarting] = useState(false); // prevents double-init
//   const [error, setError] = useState(null);

//   // Load Jitsi script once
//   useEffect(() => {
//     if (window.JitsiMeetExternalAPI) {
//       setIsLoading(false);
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = 'https://meet.jit.si/external_api.js';
//     script.async = true;

//     script.onload = () => {
//       console.log('Jitsi API loaded successfully');
//       setIsLoading(false);
//     };

//     script.onerror = () => {
//       console.error('Failed to load Jitsi API');
//       setError('Failed to load video meeting. Please check your internet connection.');
//       setIsLoading(false);
//     };

//     document.body.appendChild(script);

//     return () => {
//       if (jitsiApiRef.current) {
//         jitsiApiRef.current.dispose();
//         jitsiApiRef.current = null;
//       }
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   // Initialize Jitsi only after the container exists (i.e., after isJoined becomes true)
//   useEffect(() => {
//     if (!isJoined) return;
//     if (!window.JitsiMeetExternalAPI) {
//       setError('Video meeting system not loaded. Please refresh the page.');
//       setStarting(false);
//       return;
//     }

//     // guard: don't init twice
//     if (jitsiApiRef.current) {
//       setStarting(false);
//       return;
//     }

//     // ensure container ref exists
//     const parentNode = jitsiContainerRef.current;
//     if (!parentNode) {
//       // Should not happen because we render the container when isJoined === true,
//       // but defend defensively:
//       setError('Meeting container not ready. Please try again.');
//       setStarting(false);
//       return;
//     }

//     try {
//       const domain = 'meet.jit.si';
//       const options = {
//         roomName: `Learnovia_${roomId}`,
//         width: '100%',
//         height: '100%',
//         parentNode,
//         userInfo: { displayName: userName || 'Guest' },
//         configOverwrite: {
//           startWithAudioMuted: false,
//           startWithVideoMuted: false,
//           enableWelcomePage: false,
//           prejoinPageEnabled: false,
//           disableDeepLinking: true,
//           enableNoisyMicDetection: true,
//         },
//         interfaceConfigOverwrite: {
//           TOOLBAR_BUTTONS: [
//             'microphone','camera','closedcaptions','desktop','fullscreen','fodeviceselection',
//             'hangup','profile','chat','recording','livestreaming','etherpad','sharedvideo',
//             'settings','raisehand','videoquality','filmstrip','invite','feedback','stats',
//             'shortcuts','tileview','videobackgroundblur','download','help','mute-everyone'
//           ],
//           SHOW_JITSI_WATERMARK: false,
//           SHOW_WATERMARK_FOR_GUESTS: false,
//           DEFAULT_BACKGROUND: '#1a1a1a',
//           DISABLE_VIDEO_BACKGROUND: false,
//           SHOW_CHROME_EXTENSION_BANNER: false,
//           MOBILE_APP_PROMO: false,
//         },
//       };

//       jitsiApiRef.current = new window.JitsiMeetExternalAPI(domain, options);

//       jitsiApiRef.current.addEventListener('readyToClose', () => {
//         // Clean up and navigate home
//         if (jitsiApiRef.current) {
//           jitsiApiRef.current.dispose();
//           jitsiApiRef.current = null;
//         }
//         navigate('/');
//       });

//       jitsiApiRef.current.addEventListener('videoConferenceJoined', () => {
//         console.log('Successfully joined the meeting');
//       });

//       jitsiApiRef.current.addEventListener('videoConferenceLeft', () => {
//         console.log('Left the meeting');
//       });

//       // success
//       setStarting(false);
//     } catch (err) {
//       console.error('Error starting meeting:', err);
//       setError('Failed to start video meeting. Please try again.');
//       setStarting(false);
//     }

//     // cleanup when unmounting or when isJoined becomes false
//     return () => {
//       if (jitsiApiRef.current) {
//         jitsiApiRef.current.dispose();
//         jitsiApiRef.current = null;
//       }
//     };
//   }, [isJoined, roomId, userName, navigate]);

//   // Called when clicking Join button
//   const joinMeeting = () => {
//     if (!userName.trim()) {
//       alert('Please enter your name');
//       return;
//     }
//     if (starting) return; // already triggering
//     setError(null);
//     setStarting(true);

//     // Render the meeting container first (isJoined = true). The effect above will
//     // initialize Jitsi after the DOM has the container.
//     setIsJoined(true);
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
//         <div className="max-w-md w-full bg-red-900/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-red-500">
//           <div className="text-center">
//             <div className="text-red-400 text-6xl mb-4">⚠️</div>
//             <h2 className="text-2xl font-bold text-white mb-4">Unable to Load Meeting</h2>
//             <p className="text-gray-300 mb-6">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors mb-3"
//             >
//               Refresh Page
//             </button>
//             <button
//               onClick={() => navigate('/')}
//               className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
//             >
//               Go Home
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
//           <p className="text-white text-lg">Loading meeting room...</p>
//           <p className="text-gray-400 text-sm mt-2">Please wait a moment</p>
//         </div>
//       </div>
//     );
//   }

//   // Pre-join screen
//   if (!isJoined) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
//         <div className="max-w-md w-full">
//           <button
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </button>

//           <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
//                 <Video className="text-gray-900" size={32} />
//               </div>
//               <h1 className="text-3xl font-bold text-white mb-2">Join Meeting</h1>
//               <p className="text-gray-400">Learnovia Video Consultation</p>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
//                 <input
//                   type="text"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                   onKeyPress={(e) => e.key === 'Enter' && joinMeeting()}
//                   autoFocus
//                 />
//               </div>

//               <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
//                 <h3 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
//                   <Users size={16} />
//                   Meeting Guidelines
//                 </h3>
//                 <ul className="text-xs text-gray-300 space-y-1">
//                   <li>✓ Ensure your camera and microphone are working</li>
//                   <li>✓ Use headphones for better audio quality</li>
//                   <li>✓ Find a quiet, well-lit environment</li>
//                   <li>✓ Keep your video on for better engagement</li>
//                 </ul>
//               </div>

//               <button
//                 onClick={joinMeeting}
//                 disabled={!userName.trim() || starting}
//                 className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Video size={20} />
//                 {starting ? 'Starting...' : 'Join Video Meeting'}
//               </button>

//               <button
//                 onClick={() => navigate('/')}
//                 className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>

//             <div className="mt-6 pt-6 border-t border-gray-700 text-center">
//               <p className="text-xs text-gray-500">Room ID: {roomId}</p>
//               <p className="text-xs text-gray-600 mt-1">Powered by Jitsi Meet</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // When joined: render the container which the effect will target to initialize Jitsi
//   return (
//     <div className="fixed inset-0 bg-black">
//       <div ref={jitsiContainerRef} className="w-full h-full" />
//     </div>
//   );
// };

// export default Meeting;


import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Video, Phone, Mic, MicOff, VideoOff, Monitor, Users } from 'lucide-react';

const Meeting = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const jitsiContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    // Load Jitsi Meet API
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsLoading(false);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const joinMeeting = () => {
    if (!userName.trim()) {
      alert('Please enter your name');
      return;
    }

    const domain = 'meet.jit.si';
    const options = {
      roomName: `Learnovia_${roomId}`,
      width: '100%',
      height: '100%',
      parentNode: jitsiContainerRef.current,
      userInfo: {
        displayName: userName,
      },
      configOverwrite: {
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        enableWelcomePage: false,
        prejoinPageEnabled: false,
        disableDeepLinking: true,
      },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone',
          'camera',
          'closedcaptions',
          'desktop',
          'fullscreen',
          'fodeviceselection',
          'hangup',
          'profile',
          'chat',
          'recording',
          'livestreaming',
          'etherpad',
          'sharedvideo',
          'settings',
          'raisehand',
          'videoquality',
          'filmstrip',
          'invite',
          'feedback',
          'stats',
          'shortcuts',
          'tileview',
          'videobackgroundblur',
          'download',
          'help',
          'mute-everyone',
        ],
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DEFAULT_BACKGROUND: '#1a1a1a',
        DISABLE_VIDEO_BACKGROUND: false,
        SHOW_CHROME_EXTENSION_BANNER: false,
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    api.addEventListener('readyToClose', () => {
      api.dispose();
      navigate('/');
    });

    api.addEventListener('videoConferenceJoined', () => {
      console.log('Joined the meeting');
    });

    setIsJoined(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading meeting room...</p>
        </div>
      </div>
    );
  }

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
              <Video className="text-gray-900" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Join Meeting</h1>
            <p className="text-gray-400">Learnovia Video Consultation</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && joinMeeting()}
              />
            </div>

            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                <Users size={16} />
                Meeting Guidelines
              </h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>✓ Ensure your camera and microphone are working</li>
                <li>✓ Use headphones for better audio quality</li>
                <li>✓ Find a quiet, well-lit environment</li>
                <li>✓ Keep your video on for better engagement</li>
              </ul>
            </div>

            <button
              onClick={joinMeeting}
              className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <Video size={20} />
              Join Video Meeting
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              Room ID: {roomId}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black">
      <div ref={jitsiContainerRef} className="w-full h-full" />
    </div>
  );
};

export default Meeting;