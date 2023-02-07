import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item-container">
      <div>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-description">{description}</p>
      </div>
      <p className="blog-time ">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
