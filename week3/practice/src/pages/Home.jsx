// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getPosts } from "../apis/post";
import PostCard from "../components/PostCard";
import { Link } from "react-router";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchPosts = async (searchKeyword) => {
    const data = await getPosts({
      keyword: searchKeyword || undefined,
      size: 30,
    });
    setPostList(data.posts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts({ size: 30 });
        setPostList(data.posts); // posts 배열은 data.posts 안에!
      } catch (error) {
        console.error("게시글 목록을 불러오는 데 실패했습니다.", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // form 제출 시 새로고침 방지
    fetchPosts(keyword.trim());
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>게시판</h1>

      <Link to="/member-code">회원 코드 발급하러 가기</Link>
      <form onSubmit={handleSearch} style={{ margin: "1rem 0" }}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit">검색</button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
