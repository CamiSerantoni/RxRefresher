
const names = [ 'maximilian', 'manuel']

function Post(){
    
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]

    return <div>
        <p>
          {chosenName}
        </p>
        <p>ReactJS is awesome</p>
    </div> 
}

export default Post;