import React from 'react'
import './Blog.css'
import blog1 from "../../assets/blog.jpg";
import Blogcard from '../BlogCard/Blogcard'
const Blog = () => {
    return (
        <div className="blog">
            <h1>Recent <span> Blog</span></h1>
            <p>You can see all blog's related in this section</p>
            <div className="blog_cards">
            <Blogcard img={blog1} heading="New Update" text="New Update is related to new shopping feature lorem"/>
            <Blogcard img={blog1} heading="New Update" text="New Update is related to new shopping feature lorem"/>
            <Blogcard img={blog1} heading="New Update" text="New Update is related to new shopping feature lorem"/>

            </div>
            
        </div>
    )
}

export default Blog