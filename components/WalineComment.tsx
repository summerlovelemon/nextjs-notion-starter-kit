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


type WalineOptions = Pick<WalineInitOptions, 'serverURL' | 'el'>

interface WalineInitOptions {
  el: string | HTMLElement | null;
  path: string;
  serverURL: string;
  //locale:WalineLocale;
  lang?: string;
  //highlighter: WalineHighlighter | false;
  emoji: (WalineEmojiInfo | WalineEmojiPresets)[] | false;
  dark: string | boolean;
  commentSorting: WalineCommentSorting;
  meta: string[];
  requiredMeta: string[];
  login: string;
  wordLimit: number | [number, number];
  pageSize: number;
  imageUploader: WalineImageUploader | false;
  //texRenderer:WalineTexRenderer | false;
  //search:WalineSearchOptions | false;
  copyright: boolean;
  //recaptchaV3Key:string;
  //turnstileKey:string;
  reaction: boolean | string[];
}

const options: WalineInitOptions = {
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
  /* highlighter: (code, lang) => {
    if (!window.Prism.languages[lang]) {
      window.Prism.plugins.autoloader.loadLanguages(lang);
    }
  
    return window.Prism.highlight(
      code,
      window.Prism.languages[lang] || window.Prism.languages.text,
      lang
    );
  },
  texRenderer: (blockMode, tex) =>
  katex.renderToString(tex, {
    displayMode: blockMode,
    throwOnError: false,
  }), */
  copyright: true,
  /* turnstileKey:,
  recaptchaV3Key:, */
  reaction: true,
}

interface WalineProps extends WalineOptions { }


const WalineComment = memo((props: WalineProps) => {
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

export default WalineComment;
