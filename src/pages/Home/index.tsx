import React from 'react';
import './styles.css'

const Home = () => {
  return (
    <>
      <section className="blog-post">
        <h1>Blog Post Title</h1>
        <p className="meta">Published on October 6, 2023 by John Doe</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante nec libero auctor venenatis.</p>
        <a href="#">Read more</a>
      </section>

      <section className="blog-post">
        <h1>Another Blog Post</h1>
        <p className="meta">Published on October 5, 2023 by Jane Smith</p>
        <p>Nulla facilisi. Vivamus tincidunt ultricies eros, a aliquam tellus bibendum a.</p>
        <a href="#">Read more</a>
      </section>
    </>
  )
}

export default Home