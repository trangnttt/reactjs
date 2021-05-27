import React from 'react'
import HeadLine from '../../components/Headline'
import BlogList from '../../components/BlogList'
import Sidebar from '../../components/Sidebar'
import BoxList from '../../components/BoxList'
import Slides from '../../components/Slides'

function Home() {
  return (
    <div className="main">
      <Slides />
      <BoxList boxList={blog.boxList} />
      <section className="content">
        <div className="content__blog">
          <HeadLine bigTitle={blog.bigTitle} />
          <BlogList blogList={blog.blogList} />
        </div>
        <Sidebar />
      </section>

      
    </div>
  );
}
const blog = {
  bigTitle: 'Consectetur elit proin sit amet neque.',
  blogList: [
    {
      title: 'Proin ex nunc',
      info: 'Proin ex nunc, bibendum ut magna quis.'
    },
    {
      title: 'Blandit mollis',
      info: 'Blandit mollis orci. Ut pretium diam ut tristique interdum amet condimentum.'
    },
    {
      title: 'Donec ut libero',
      info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
    }
  ],
  boxList: [
    'Placerat arcu vel',
    'Duis at est nunc',
    'Tellus at trist',
    'Ut rhoncus'
  ]
}
export default Home

