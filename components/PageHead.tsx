import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'

// TODO: remove duplication between PageHead and NotionPage Head

export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#EB625A' />
      <meta property='og:type' content='website' />

      <script type="text/javascript" src="http://cdn.repository.webfont.com/wwwroot/js/wf/youziku.api.min.js"></script>
      <script type="text/javascript">
        $webfont.load("body", "75a63f6c2f6d4bb7aee6902ac050dec2", "SourceHanS-S_B");
        $webfont.load(".notion-h-title", "57f09dabc1804f9b84b599c9b079f4f7", "Source-Han-Light")
        $webfont.load(".notion-callout-text", "4b16fb28383b409090d0b09c84c8c8d9", "JetLinkMediumMing");
        /*$webfont.load("notion-callout-text", "75a63f6c2f6d4bb7aee6902ac050dec2", "SourceHanS-S_B");*/
        /*．．．*/
        $webfont.draw();
      </script>
    </Head>
  )
}