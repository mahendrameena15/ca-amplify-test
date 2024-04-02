"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../../../Assets/style.css";
import MyEditor from "../ckeditor/MyEditor";
import { mainUrl } from "../../../../../../../config";

let canvas = "";

function BlogCreate() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const myFormik = useFormik({
    initialValues: {
      metatitle: "",
      metadescription: "",
      metakeyword: "",
      title: "",
      content: "",
      image: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.content) {
        errors.content = "Content is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      setLoading(true);

      fetch(`${mainUrl}/api/blogposts/create-blog-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          router.push("/Dash/main/blogsection/bloglist");
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          alert("image size to be large image size ");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  const handleRemoveImage = () => {
    myFormik.setFieldValue("image", "");
  };

  useEffect(() => {
    canvas = document.createElement("canvas");
  }, []);

  const handleImageUpload = (event) => {
    // Guard clause to ensure this runs only in the browser

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const maxImageSize = 1400;

        let width = img.width;
        let height = img.height;

        if (width > maxImageSize || height > maxImageSize) {
          if (width > height) {
            height *= maxImageSize / width;
            width = maxImageSize;
          } else {
            width *= maxImageSize / height;
            height = maxImageSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
        // Here we generate a simple alt text. This should be replaced with a more complex method for real use.
        const altText = `Uploaded image with dimensions ${width}x${height}.`; // Simple alt text
        myFormik.setFieldValue("image", {
          src: compressedBase64,
          alt: altText,
        });
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="app-wrapper mt-4">
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="title">
                Meta-Title (Idle 60 characters)<i className="text-danger">*</i>
              </label>
              <input
                name="metatitle"
                value={myFormik.values.metatitle}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.metatitle ? "is-invalid" : ""
                } `}
                placeholder="metatitle"
                required
              />
              <span style={{ color: "red" }}>{myFormik.errors.metatitle}</span>
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="metadescription">
                Meta-Description (Idle 160 characters)
                <i className="text-danger">*</i>
              </label>
              <input
                name="metadescription"
                value={myFormik.values.metadescription}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.metadescription ? "is-invalid" : ""
                } `}
                placeholder="metadescription"
                required
              />
              <span style={{ color: "red" }}>
                {myFormik.errors.metadescription}
              </span>
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="metakeyword">
                Meta-Keyword (Idle 5 Keywords, Use comma after every keyword)
                <i className="text-danger">*</i>
              </label>
              <input
                name="metakeyword"
                value={myFormik.values.metakeyword}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.metakeyword ? "is-invalid" : ""
                } `}
                placeholder="metakeyword"
                required
              />
              <span style={{ color: "red" }}>
                {myFormik.errors.metakeyword}
              </span>
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="title">
                Title<i className="text-danger">*</i>
              </label>
              <input
                name="title"
                value={myFormik.values.title}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.title ? "is-invalid" : ""
                } `}
                placeholder="Title"
                required
              />
              <span style={{ color: "red" }}>{myFormik.errors.title}</span>
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="content">Content</label>
              <div id="editor"></div>

              <MyEditor
                name="content"
                value={myFormik.values.content}
                onBlur={myFormik.handleBlur}
                // onChange={(value) => myFormik.setFieldValue("content", value)}
                onChange={myFormik.handleChange}
                placeholder="Content"
                className={` ${myFormik.errors.content ? "is-invalid" : ""}`}
              />
              {myFormik.errors.content && (
                <div className="invalid-feedback">
                  {myFormik.errors.content}
                </div>
              )}
            </div>

            <div className="col-md-12 mb-4">
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                name="image"
              />
              <span
                style={{
                  textAlign: "center",
                  fontSize: 80,
                  borderRadius: 5,
                  border: "1px solid gray",
                  width: 150,
                  maxHeight: 150,
                  overflow: "hidden",
                  display: "inline-block",
                  marginTop: 20,
                  position: "relative",
                }}
                id="output-image"
              >
                {myFormik.values.image ? (
                  <>
                    <AiOutlineCloseCircle
                      className="mt-2"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        cursor: "pointer",
                        color: "red",
                        fontSize: "1.5rem",
                      }}
                      onClick={handleRemoveImage}
                    />

                    <img
                      src={myFormik.values.image}
                      alt="Selected Image"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </>
                ) : (
                  <FaUserAlt />
                )}
              </span>
            </div>

            <div className="col-md-12 mt-4 p-0">
              <button
                className="btn btn-success"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Adding Blog..." : "Add Blog"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogCreate;
