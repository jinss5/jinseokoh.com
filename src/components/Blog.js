import React, {useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import "./css/Blog.css";

/*function Blog () {
    return (
        <div className="Blog">
            password authentication
        </div>
    );
}

export default Blog;*/
//<SocialIcon url="https://healthy-crowberry-1b9.notion.site/Jinss-Blog-b653bb2236db4f85bc02951f333c54e5" bgColor="#ffffff" fgColor="#000000"/>;

/*class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { password: '' };
    }
    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.password === '123') {
            alert("Correct Password");
        } else {
            alert("Wrong Password");
        }
    }
    changeHandler = (event) => {
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div className="blog">
                <form onSubmit={this.submitHandler}>
                    <h5>{this.state.password}</h5>
                    <p>Enter password to access more info</p>
                    <input
                        placeholder="password"
                        type='text'
                        onChange={this.changeHandler}
                    />
                    <input type='submit'/>
                </form>
                <div className="link"></div>
            </div>
        );
    }
}*/

const Link = () => (
    <div className="link">
        <SocialIcon url="https://healthy-crowberry-1b9.notion.site/Jinss-Blog-b653bb2236db4f85bc02951f333c54e5" bgColor="#ffffff" fgColor="#000000"/>
    </div>
)

const Blog = () => {
    const [showLink, setShowLink] = useState(false);
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (password === "12345") {
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