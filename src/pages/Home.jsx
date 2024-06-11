import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPosts(data.posts);
        console.log(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl text-yellow-400">
            Visualizza gli ultimi Posts
          </h2>
        </div>

        {/* cards */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg overflow-hidden bg-white shadow-lg"
            >
              <div className="px-6 py-4 flex flex-col h-full">
                {/* CARD HEADER */}
                <div className="card-header flex justify-between items-center mb-5">
                  <h3 className="text-lg font-semibold text-yellow-500">
                    {post.title}
                  </h3>
                  <img src="/bee.jpg" alt="bee" width={25} height={25} />
                </div>

                {/* IMAGE */}
                <div className="mb-8">
                  <img src={post.image} alt="post image" />
                </div>

                {/* CONTENT */}
                <p className="text-gray-700">{post.content}</p>

                {/* Category */}
                <p className="text-gray-700">{post.category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
