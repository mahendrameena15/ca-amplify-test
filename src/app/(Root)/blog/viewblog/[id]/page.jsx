"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Head from "next/head";
import { mainUrl } from "../../../../../../config";
let content = "";
const Page = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${mainUrl}/api/comments/blogs/${data._id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [...prevComments, newComment]);

        setFormData({
          name: "",
          email: "",
          content: "",
        });
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get(`${mainUrl}/api/blogposts/blogs/${id}`)
      .then((response) => {
        setData(response.data);
        content = response.data?.content;

        axios
          .get(`${mainUrl}/api/comments/blogs/${response.data._id}/comments`)
          .then((response) => {
            setComments(response.data);
          })
          .catch((error) => {
            console.error("Error fetching comments:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [id]);

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
  console.log(content, "content");
  const htmlContent = content;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const oembedDiv = doc.querySelector("div[data-oembed-url]");
  const oembedUrl = oembedDiv
    ? oembedDiv.getAttribute("data-oembed-url")
    : null;

  console.log(oembedUrl);

  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 text-center">
            {data.image && (
              <img
                src={data.image}
                alt="Best CA Services"
                className="img-fluid"
                style={{
                  width: "100%",
                }}
              />
            )}
          </div>
          <div className="col-md-12 my-3">
            <h1
              style={{ fontWeight: "bold" }}
              className="m-0 fw-bold blog-title pb-3"
            >
              {data.title}
            </h1>
            <p
              className="cstm-font"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></p>
            <div className="user">
              <YouTubeEmbed embedUrl={oembedUrl} />
            </div>
          </div>
        </div>
        <Head>
          <title>{data.metatitle}</title>
          <meta name="description" content={data.metadescription} />
          <meta name="keywords" content={data.metakeyword} />
        </Head>
      </div>
      <div className="container pt-3 mt-3">
        <h3 className="mb-5 text-left">{comments.length} Comments</h3>
        <ul className="comment-list text-left">
          {Array.isArray(comments) ? (
            comments.length > 0 ? (
              comments.map((comment) => (
                <li className="comment" key={comment.id}>
                  <div className="vcard bio">
                    <img
                      src="/images/user-img.png"
                      alt="CA Services"
                      className="rounded-circle"
                      style={{ width: "40px" }}
                    />
                  </div>
                  <div className="comment-body">
                    <h3>{comment.name}</h3>
                    <p style={{ width: "60%" }}>{comment.content}</p>
                    {Array.isArray(comment.replies) &&
                      comment.replies.length > 0 && (
                        <ul style={{ marginLeft: "20px" }}>
                          {comment.replies.map((reply, idx) => (
                            <li key={idx} className="mb-3">
                              <img
                                src="/images/saurabh-reply.png"
                                alt="Admin"
                                className="admin-image rounded-circle mr-2"
                                style={{ width: "40px" }}
                              />
                              {reply.content}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </li>
              ))
            ) : (
              <p>No comments available.</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </ul>

        <div className="container comment-form-wrap pt-5 mb-5">
          <div className="row">
            <div className="col-md-8">
              <h3 className="mb-5 text-left">Leave a comment</h3>
              <form className="p-5 bg-light" onSubmit={handleSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group text-left">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="content"
                    id="content"
                    cols={30}
                    rows={10}
                    className="form-control"
                    value={formData.content}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group text-left">
                  <input
                    type="submit"
                    value="Post Comment"
                    className="btn py-3 px-4 btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
