import React, { Component } from "react";
import axios from "axios";

class Blog extends Component{
// const Blog = () => {

    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts:res.data.slice(0,10)
            })
        })
    }
render(){ 
    const {posts} =this.state;
    const postList=posts.length?(
        posts.map(post=>{
            return(
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            )

        })
    ):(<div>No Post Yet</div>);
    return(
        
        <div className="my-5">
        <h1 className="text-center">Blog Content</h1>
        {postList}
    </div>
       
    );  
};
};

export default Blog;
