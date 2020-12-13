import React from 'react';

const Article = ({title, author, text}) => {

    const styles = {
        marginTop: 40
    }
    return ( 
        <article style={styles}>
            <h3 style={{marginBottom:5, textTransform: "uppercase"}}>{title}</h3>
            <span style={{marginBottom:10, display:"block", fontSize:14}}>{author}</span>
            <p style={{fontSize:17}}>{text}</p>
        </article>
     );
}
 
export default Article;