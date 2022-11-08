import classes from './SinglePost.module.scss'

import { MdFavoriteBorder, MdBookmarkBorder } from 'react-icons/md';

const SinglePost = ({title = "No title", description = "No desc.", image}) => {
    /* const title = props.title || "No title";
    const description = props.description || "No desc";
    const image = props.image; */

    /* const {title = "No title", description = "No desc.", image} = props; */

    return (
        <article className={classes["post"]}>
            <h4> {title} </h4>
            
            <p> 
                {description} 
            </p>
        
            <figure>
                <img src={image} alt="Post image"/>
            </figure>
        
            <div className={classes["actions"]}>
                <div>
                    <MdFavoriteBorder/> 1550 likes
                </div>

                <div>
                    <MdBookmarkBorder/> Bookmark
                </div>
            </div>

        </article>
    );
}

export default SinglePost;