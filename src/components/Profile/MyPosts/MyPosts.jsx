import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let postElements = props.postData.map((post, index) => {
        return(
            <div key={index}>
                <Post message={post.message} likesCount={`${post.likesCount} ♥`} />
            </div>
        );
    } )

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value=""
        }

    return (
        <div className="padding">
            My Post
            <br/>
            <div>
                <textarea ref={newPostElement} cols="129" rows="4"></textarea>
                <br/>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <br /> 
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );

}

export default MyPosts;
