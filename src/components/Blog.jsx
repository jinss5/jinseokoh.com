import React, {useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import "./css/Blog.css";

const Link = () => (
    <div className="link">
        <SocialIcon url="https://jinss.notion.site/Jinss-b653bb2236db4f85bc02951f333c54e5" bgColor="#ffffff" fgColor="#000000"/>
        <div>Click Icon Above</div>
    </div>
)

const Blog = () => {
    const [showLink, setShowLink] = useState(false);
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (password === "010524321") {
            setShowLink(true);
        } else {
            alert("Wrong Password");
        }
    }
    const changeHandler = (event) => setPassword(event.target.value)

    return (
        <div className="blog">
            <form onSubmit={submitHandler}>
                <h5>{password}</h5>
                <p>Enter password to access more info</p>
                <input
                    placeholder="password"
                    type='text'
                    onChange={changeHandler}
                />
                <input type='submit'/>
            </form>
            { showLink ? <Link /> : null }
        </div>
    )
}

export default Blog;