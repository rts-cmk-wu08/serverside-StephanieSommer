const getData = async (blogId) => {
  const result = await fetch(`https://swanky-api.onrender.com/posts/${blogId}`);
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const BlogDetail = async ({ params: { blogId } }) => {
  const blog = await getData(blogId);
  return (
    <main>
      <h1>{blog.title}</h1>
      <h2>{blog.subtitle}</h2>
      <p>{blog.text}</p>
    </main>
  );
};

export default BlogDetail;
