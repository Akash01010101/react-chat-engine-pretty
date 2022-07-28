import * as React from 'react';

import {
  useMultiChatLogic,
  ChatList,
  MultiChatWindowProps,
  MultiChatSocket,
  ChatFeed,
  ChatHeaderProps,
  MessageFormProps,
} from 'react-chat-engine-advanced';

import { useIsMobile } from './functions/isMobile';

import ChatHeader from './components/ChatHeader';
import MessageForm from './components/MessageForm';

interface PrettyChatWindowProps extends MultiChatWindowProps {
  projectId: string;
  username: string;
  secret: string;
  httpUrl?: string;
  height?: string;
}

export const PrettyChatWindow = (props: PrettyChatWindowProps) => {
  const isMobile: boolean = useIsMobile();

  const chatProps = useMultiChatLogic(
    props.projectId,
    props.username,
    props.secret,
    props.httpUrl
  );

  return (
    <div
      style={{ height: props.height ? props.height : '100%', display: 'flex' }}
    >
      <MultiChatSocket {...chatProps} />

      <div style={styles.col1} />

      <div style={isMobile ? styles.col0 : styles.col8}>
        <ChatList {...chatProps} />
      </div>

      <div style={isMobile ? styles.col22 : styles.col14}>
        <ChatFeed
          {...chatProps}
          renderChatHeader={(props: ChatHeaderProps) => (
            <ChatHeader
              {...props}
              chat={chatProps.chat}
              username={chatProps.username}
              secret={chatProps.secret}
            />
          )}
          renderMessageForm={(props: MessageFormProps) => (
            <MessageForm {...props} />
          )}
        />
      </div>

      <div style={styles.col1} />

      <style>{`
      .ce-chat-feed-column { border: none !important; }
      .ce-chat-feed { background-color: rgb(40,43,54) !important; }
      .ce-message-list { margin-top: 24px !important; margin-left: 12px !important; margin-right: 12px !important; padding: 0px 3.3vw !important; background: linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%); border-radius: 8px 8px 0px 0px !important; height: calc((100% - 85px) - 72px - 24px - 12px) !important; }

      .ce-message-date-text { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; color: rgb(153, 153, 153) !important; font-size: 14px !important; letter-spacing: -1px; }
      .ce-my-message-body { font-family: 'Avenir' !important; padding: 15px !important; }
      .ce-my-message-timestamp { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; font-size: 12px !important; padding: 15px !important; margin-right: 0px !important; letter-spacing: -1px; }
      .ce-their-message-body { font-family: 'Avenir' !important; padding: 15px !important; background-color: #434756 !important; color: white !important; }
      .ce-their-message-timestamp { font-weight: 600; letter-spacing: 0.1px !important; font-family: 'Avenir' !important; font-size: 12px !important; padding: 15px !important; margin-left: 0px !important; letter-spacing: -1px; }
      .ce-their-message-timestamp { color: rgb(241, 240, 240) !important; letter-spacing: -1px; }
      .ce-their-message-sender-username { color: #999 !important; }
      .ce-message-file { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; }
      .ce-message-image { background-color: #434758 !important; color: #c5c5c5 !important; border-radius: 8px !important; padding: 0px !important; max-width: 124px !important; max-height: 124px !important; }

      .ce-mobile-chat-list-button { top: 32px !important; left: 0px !important; }
      .ce-mobile-chat-settings-button { display: none !important; }
      `}</style>
    </div>
  );
};

const styles = {
  col0: {
    display: 'block',
    flex: '0 0 0%',
    maxWidth: '0%',
  } as React.CSSProperties,
  col1: {
    display: 'block',
    flex: '0 0 4.16666667%',
    maxWidth: '4.16666667%',
    backgroundColor: '#282b36',
  } as React.CSSProperties,
  col8: {
    display: 'block',
    flex: '0 0 33.3333333%',
    maxWidth: '33.3333333%',
    backgroundColor: 'pink',
  } as React.CSSProperties,
  col9: {
    display: 'block',
    flex: '0 0 37.5%',
    maxWidth: '37.5%',
  } as React.CSSProperties,
  col14: {
    display: 'block',
    flex: '0 0 58.33333333%',
    maxWidth: '58.33333333%',
    backgroundColor: 'green',
  } as React.CSSProperties,
  col16: {
    display: 'block',
    flex: '0 0 66.66666667%',
    maxWidth: '66.66666667%',
    backgroundColor: 'yellow',
  } as React.CSSProperties,
  col22: {
    display: 'block',
    flex: '0 0 91.66666667%',
    maxWidth: '91.66666667%',
    backgroundColor: 'brown',
  } as React.CSSProperties,
  col24: {
    display: 'block',
    flex: '0 0 100%',
    maxWidth: '100%',
    backgroundColor: 'brown',
  } as React.CSSProperties,
};
