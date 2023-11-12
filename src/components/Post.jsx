import classes from './Post.module.css'
/* In react one styling approach could be like this create a file <component_name>.module.css
* and as above. anything can be used instead of <classes>. this approach will ensure no class naming
* clash in the entire project. This will convert every class name into a unique class name, can be checked via
* inspection in the brower.
*/
// const names = ['Sanaulla', 'Sultana', 'Safinaz']

function Post(props) {
    // const idx = Math.floor(Math.random()*3)
    // const choosen_name = names[idx]
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
}

export default Post;
