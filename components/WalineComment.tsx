import React, { useEffect, useRef, memo } from 'react';
import {
  init,
  WalineCommentSorting,
  WalineEmojiInfo,
  WalineEmojiPresets,
  WalineHighlighter,
  WalineImageUploader,
  WalineInstance,
  WalineLocale,
  WalineSearchOptions,
  WalineTexRenderer
} from '@waline/client';
import '@waline/client/dist/waline.css';

type WalineOptions = Pick<WalineInitOptionsType, 'serverURL' | 'el'>

interface WalineInitOptionsType {
  el: string | HTMLElement | null;
  path: string;
  serverURL: string;
  lang?: string;
  emoji: (WalineEmojiInfo | WalineEmojiPresets)[] | false;
  dark: string | boolean;
  commentSorting: WalineCommentSorting;
  meta: string[];
  requiredMeta: string[];
  login: string;
  wordLimit: number | [number, number];
  pageSize: number;
  imageUploader: WalineImageUploader | false;
  highlighter: WalineHighlighter | false;
  texRenderer: WalineTexRenderer | false;
  search: WalineSearchOptions | false;
  copyright: boolean;
  recaptchaV3Key?: string;
  turnstileKey?: string;
  reaction: boolean | string[];
}

/* const defaultWalineInitOptions: WalineInitOptionsType = {
  el: '#waline',
  serverURL: "https://waline.wltea.xyz",
  path: 'window.location.pathname',
  lang: 'zh-CN',
  emoji: ['//unpkg.com/@waline/emojis@1.1.0/weibo'],
  dark: false,
  commentSorting: 'latest',
  meta: ['nick', 'mail', 'link'],
  requiredMeta: [],
  login: 'enable',
  wordLimit: 0,
  pageSize: 10,
  imageUploader: false,
  highlighter: false,
  texRenderer: false,
  search: false,
  copyright: true,
  recaptchaV3Key: undefined,
  turnstileKey: undefined,
  reaction: true,
} */

interface WalineProps extends WalineOptions { }

const WalineComment = memo(function WalineComment(props: WalineProps) {
  const walineInstanceRef = useRef<WalineInstance>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWaline = () => {
      if (containerRef.current) {
        walineInstanceRef.current = init({
          ...props,
          el: containerRef.current
        });
      }
    };
    initWaline();
  }, [props]);

  return <div ref={containerRef} />;
});

WalineComment.displayName = 'WalineComment';

export default WalineComment;