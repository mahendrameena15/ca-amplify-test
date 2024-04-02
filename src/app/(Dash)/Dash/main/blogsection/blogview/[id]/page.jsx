"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../../../Assets/style.css";
import { mainUrl } from "../../../../../../../../config";
let content = "";
function Page() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const { id } = useParams();
  const [postList, setPostList] = useState({});
  const [smShow, setSmShow] = useState(false);
  const [replies, setReplies] = useState([]);
  const [formReply, setFormReply] = useState({ text: "" });
  const [commentID, setcommentID] = useState();

  useEffect(() => {
    getPosts();
    fetchReplies();
  }, [id]);

  const handleDeleteComment = async (commentId) => {
    try {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );

      const response = await fetch(
        `${mainUrl}/api/comments/comment/${commentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // console.log("Comment deleted successfully");

        getPosts();
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const [comments, setComments] = useState([]);
  // console.log(comments,"comments")

  // this is Single Blog POst Get Api

  const getPosts = () => {
    fetch(`${mainUrl}/api/blogposts/blog-post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPostList(data);
        content = data?.content;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // this is Comment Get section

  useEffect(() => {
    fetch(`${mainUrl}/api/comments/blogs/${id}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  const fetchReplies = async (commentID) => {
    try {
      const response = await fetch(
        `${mainUrl}/api/blogs/${id}/comments/${commentID}/replies`
      );
      if (response.ok) {
        const data = await response.json();
        setReplies(data);
        // console.log(data);
      } else {
        console.error("Failed to fetch replies");
      }
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  const getData = (commentID) => {
    setcommentID(commentID);
    fetchReplies(commentID);
    // console.log(commentID);
  };

  // Function to post a new reply
  //  const postReply = async (commentID) => {
  //   console.log("commentID", commentID);
  //   try {
  //     const response = await fetch(
  //       `https://nodejs-restapi-6rpt.onrender.com/api/blogs/${id}/comments/${commentID}/replies`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formReply),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();

  //       setComments((prev) =>
  //         prev.map((item) =>
  //           item.commentId === commentID
  //             ? { ...item, replies: [...item.replies, data] }
  //             : item
  //         )
  //       );

  //       setFormReply({ content: "" });
  //       console.log("Posted Reply");
  //       setSmShow(false);
  //     } else {
  //       console.error("Failed to post reply");
  //     }
  //   } catch (error) {
  //     console.error("Error posting reply:", error);
  //   }
  // };
  const postReply = async (commentID) => {
    // console.log("commentID", commentID);
    try {
      const response = await fetch(
        `${mainUrl}/api/blogs/${id}/comments/${commentID}/replies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formReply),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Update the specific comment with the new reply
        setComments((prev) =>
          prev.map((item) =>
            item.commentId === commentID
              ? { ...item, replies: [...item.replies, data] }
              : item
          )
        );

        setFormReply({ content: "" });
        // console.log("Posted Reply");
        setSmShow(false);
      } else {
        console.error("Failed to post reply");
      }
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const YouTubeEmbed = ({ embedUrl }) => {
    const videoId = embedUrl ? embedUrl.split("watch?v=")[1] : "";

    const iframeMarkup = videoId
      ? `
      <div style="position: relative; width: 100%;">
        <iframe src="https://www.youtube.com/embed/${videoId}</iframe>
      </div>
    `
      : "<p>Invalid YouTube URL</p>";

    return embedUrl ? (
      <div dangerouslySetInnerHTML={{ __html: iframeMarkup }} />
    ) : (
      ""
    );
  };
  const htmlContent = content;
  let parser;
  if (typeof window !== "undefined") {
    parser = new DOMParser();
  }

  // const parser = new DOMParser();
  const doc = parser?.parseFromString(htmlContent, "text/html");
  const oembedDiv = doc.querySelector("div[data-oembed-url]");
  const oembedUrl = oembedDiv
    ? oembedDiv.getAttribute("data-oembed-url")
    : null;

  return (
    <>
      <div className="app-wrapper mt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12 ">
              <img
                src={postList.image}
                className="img-fluid"
                alt={postList.title}
              />
            </div>

            <div className="col-md-12 mt-4">
              <h2 className="pb-3" style={{ fontWeight: "bold" }}>
                {postList.title}
              </h2>
              <p
                className="cstmmedia"
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: postList.content }}
              ></p>
              <div className="user">
                <YouTubeEmbed embedUrl={oembedUrl} />
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5 mt-5">
          <h3 className="mb-5 content-left">{comments.length} Comments</h3>
          <ul className="comment-list content-left">
            {comments.map((comment) => (
              <li className="comment" key={comment.id}>
                <div className="vcard bio">
                  <img src="/images/user-img.png" alt="Image placeholder" />
                </div>
                <div className="comment-body">
                  <h3>{comment.name}</h3>
                  <p>{comment.content}</p>
                  <p>{comment.email}</p>
                  <ul style={{ marginLeft: "20px" }}>
                    {comment.replies.map((reply, idx) => (
                      <li key={idx}>{reply.content}</li>
                    ))}
                  </ul>
                  <p>
                    <a
                      className="reply me-2"
                      onClick={() => {
                        setSmShow(true);
                        getData(comment.commentId);
                      }}
                    >
                      Reply
                    </a>
                    <a
                      className="delete-btn"
                      onClick={() => handleDeleteComment(comment.commentId)}
                    >
                      Delete
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Comment Reply
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="p-5 bg-light"
              onSubmit={(e) => {
                e.preventDefault();
                postReply(commentID);
              }}
            >
              <div className="form-group content-left">
                <label htmlFor="content">content</label>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  cols={30}
                  rows={10}
                  className="form-control"
                  value={formReply.content}
                  onChange={(e) => setFormReply({ content: e.target.value })}
                />
              </div>
              <div className="form-group content-left">
                <input
                  type="submit"
                  value="Post Reply"
                  className="btn py-3 px-4 btn-primary"
                />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Page;
