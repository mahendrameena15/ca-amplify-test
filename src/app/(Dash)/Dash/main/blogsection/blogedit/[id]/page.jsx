"use client";
import axios from "axios";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../../../../Assets/style.css";
import MyEditor from "../../ckeditor/MyEditor";
import { mainUrl } from "../../../../../../../../config";

function Page() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const [blogData, setBlogData] = useState({
    metatitle: "",
    metadescription: "",
    metakeyword: "",
    title: "",
    content: "",
    image: "",
  });

  const handleRemoveImage = () => {
    formik.setFieldValue("image", "");
  };

  const handleImageUpload = (event, formik) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
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

        formik.setFieldValue("image", compressedBase64);
      };
    };

    reader.readAsDataURL(file);
  };

  const formik = useFormik({
    initialValues: {
      metatitle: "",
      metadescription: "",
      metakeyword: "",
      title: "",
      content: "",
      image: "",
    },
    onSubmit: (values) => {
      // console.log("Form submitted:", values);

      fetch(`${mainUrl}/api/blogposts/update-blog-post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // console.log("Blog post updated successfully:", data);
          router.push("/Dash/main/blogsection/bloglist");
        })
        .catch((error) => {
          console.error("Error updating blog post:", error);
          // Handle errors here
        });
    },
  });

  useEffect(() => {
    axios
      .get(`${mainUrl}/api/blogposts/blog-post/${id}`)
      .then((response) => {
        formik.setValues(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="app-wrapper mt-4">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="title">
                Meta-Title (Idle 60 characters)<i className="text-danger">*</i>
              </label>
              <input
                name="metatitle"
                value={formik.values.metatitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${
                  formik.errors.metatitle ? "is-invalid" : ""
                } `}
                type="text"
                placeholder="metatitle"
                required
              />
              {formik.touched.metatitle && formik.errors.metatitle ? (
                <div>{formik.errors.metatitle}</div>
              ) : null}
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="metadescription">
                Meta-Description (Idle 160 characters)
                <i className="text-danger">*</i>
              </label>
              <input
                name="metadescription"
                value={formik.values.metadescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${
                  formik.errors.metadescription ? "is-invalid" : ""
                } `}
                type="text"
                placeholder="metadescription"
                required
              />
              {formik.touched.metadescription &&
              formik.errors.metadescription ? (
                <div>{formik.errors.metadescription}</div>
              ) : null}
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="metakeyword">
                Meta-Keyword (Idle 5 Keywords, Use comma after every keyword)
                <i className="text-danger">*</i>
              </label>
              <input
                name="metakeyword"
                value={formik.values.metakeyword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${
                  formik.errors.metakeyword ? "is-invalid" : ""
                } `}
                type="text"
                placeholder="metakeyword"
                required
              />
              {formik.touched.metakeyword && formik.errors.metakeyword ? (
                <div>{formik.errors.metakeyword}</div>
              ) : null}
            </div>
            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="title">
                Title<i className="text-danger">*</i>
              </label>
              <input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className={`form-control ${
                  formik.errors.title ? "is-invalid" : ""
                }`}
                placeholder="Title"
                required
              />
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="col-md-12 mb-4 p-0">
              <label htmlFor="content">
                Content<i className="red-color">*</i>
              </label>
              <div id="editor"></div>

              <MyEditor
                name="content"
                value={formik.values.content}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} // Adjusted to work with synthetic event
                placeholder="Content"
                className={`${
                  formik.touched.content && formik.errors.content
                    ? "is-invalid"
                    : ""
                }`}
              />
              {formik.touched.content && formik.errors.content ? (
                <div>{formik.errors.content}</div>
              ) : null}
            </div>

            <div className="col-md-12 mb-4">
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, formik)}
                name="image"
                onBlur={formik.handleBlur}
              />
              <span
                style={{
                  textAlign: "center",
                  fontSize: 80,
                  borderRadius: 5,
                  border: "1px solid gray",
                  width: 150,
                  // maxHeight: 150,
                  overflow: "hidden",
                  display: "inline-block",
                  marginTop: 20,
                  position: "relative",
                }}
                id="output-image"
              >
                {formik.values.image ? (
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
                      src={formik.values.image}
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
              <button className="btn btn-success" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
