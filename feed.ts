import { getAllPosts } from 'lib/notion/notion'
import { generateRss } from 'lib/rss'
import { host } from 'lib/config'
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml')
  let posts = await getAllPosts()
  posts = posts
    .filter(post => post.status[0] === 'Published' && post.type[0] === 'Post')
    .slice(0, 10)
  const xmlFeed = generateRss(posts)
  res.write(`User-agent: *
  feed: ${host}/api/rss.xml
  `)
  res.end()
  return {
    props: {}
  }
}
const feed = () => null
export default feed
