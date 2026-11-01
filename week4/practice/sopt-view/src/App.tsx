import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const POST_ID = 44;

type UpdatePostPayload = {
  title: string;
  content: string;
};

const getPostDetail = async (id: number) => {
  // 게시글 상세 조회 요청
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${id}`,
  );
  return response.data.data;
};

const updatePost = async ({
  id,
  payload,
}: {
  id: number;
  payload: UpdatePostPayload;
}) => {
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/posts/${id}`,
    payload,
    {
      headers: {
        Authorization: import.meta.env.VITE_AUTH_CODE,
      },
    },
  );
  return res.data.data;
};

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", POST_ID],
    queryFn: () => getPostDetail(POST_ID),
  });

  const { mutate, isPending: isMutating } = useMutation({
    mutationFn: (payload: UpdatePostPayload) =>
      updatePost({ id: POST_ID, payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", POST_ID] });
      setTitle("");
      setContent("");
    },
  });

  const buildPayload = (): UpdatePostPayload => {
    return {
      title: title.trim() || data.title,
      content: content.trim() || data.content,
    };
  };

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>에러: {error.message}</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <h1>내 게시글</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data && (
          <>
            <p>title: {data.title}</p>
            <p>content: {data.content}</p>
            <p>author: {data.author}</p>
            <p>updatedAt: {data.updatedAt}</p>
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="새 제목"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="새 본문"
        />
        <button onClick={() => mutate(buildPayload())} disabled={isMutating}>
          {isMutating ? "수정 중..." : "게시글 수정"}
        </button>
      </div>
    </div>
  );
}

export default App;
