
const names = [ 'maximilian', 'manuel']

function Post({author, body}) {
    
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1]

    return <div>
        <p>
          {author}
        </p>
        <p>{body}</p>
    </div> 
}

export default Post;