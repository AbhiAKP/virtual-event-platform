import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JoinMeet = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { trackMeetId } = useParams();
  const [jitsiUrl, setJitsiUrl] = useState(null);

  useEffect(() => {
    const fetchJitsiUrl = async () => {
      console.log("fetchJitsiUrl")
      let data;
      try {
        const response = await fetch(`http://localhost:3000/join-meet/track/${trackMeetId}`, {
          headers: { 'Authorization': `Bearer ${accessToken}` },
        });
        if (response.ok) {
          console.log("response ok")
          data = await response.json();
          if (data.success) {
            console.log("success true")
            setJitsiUrl(data.jitsiUrl);
          } else {
            console.error('Authentication failed.');
            window.location.href = `/viewcourse/${data.course_id}`;
          }
        } else {
          console.error('Error fetching Jitsi-Meet URL:', response.status, response.statusText);
          window.location.href = `/viewcourse/${data.course_id}`;
        }
      } catch (error) {
        console.error('Error fetching Jitsi-Meet URL:', error);
        window.location.href = `/viewcourse/${data.course_id}`;
      }
    };
    fetchJitsiUrl();
  }, [trackMeetId, accessToken]);

  if (!jitsiUrl) {
    return <div>Loading...</div>;
  }

  const options = {
    roomName: 'my-room',
    configOverwrite: {
      prejoinPageEnabled: false,
      toolbarButtons: [
        'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting', 'fullscreen',
        'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
        'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
        'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
        'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
        'e2ee', 'security'
      ],
      // Setting for enabling audio, video, and screen sharing.
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      enableScreenshare: true,
      // More settings can be found at https://github.com/jitsi/jitsi-meet/blob/master/config.js
    },
    interfaceConfigOverwrite: {
      TOOLBAR_BUTTONS: [
        'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting', 'fullscreen',
        'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
        'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
        'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
        'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
        'e2ee', 'security'
      ],
      disableDeepLinking: true,
    }
  };
  
  const url = `${jitsiUrl}/${options.roomName}#config.startWithAudioMuted=${options.configOverwrite.startWithAudioMuted}&config.startWithVideoMuted=${options.configOverwrite.startWithVideoMuted}&config.enableScreenshare=${options.configOverwrite.enableScreenshare}&interfaceConfig.TOOLBAR_BUTTONS=${encodeURIComponent(JSON.stringify(options.interfaceConfigOverwrite.TOOLBAR_BUTTONS))}`;
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe allow="camera; microphone; fullscreen; display-capture" title="Jitsi-Meet" src={url} width="100%" height="100%" />
    </div>
  );
};

export default JoinMeet;
