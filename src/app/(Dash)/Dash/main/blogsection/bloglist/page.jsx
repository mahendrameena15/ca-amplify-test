"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../../../Assets/style.css";
import { mainUrl } from "../../../../../../../config";

function Page() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${mainUrl}/api/blogposts/all-blog-posts`
        );
        setUserList(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); // Also set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window?.confirm(
      "Are you sure you want to delete the data?"
    );
    if (confirmDelete) {
      axios
        .delete(`${mainUrl}/api/blogposts/delete-blog-post/${id}`)
        .then((response) => {
          if (response.status === 204) {
            getUsers(); // Refresh the list after successful deletion
          } else {
            // console.log("Server returned an error:", response.status);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  function truncateWords(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "..."; // Adding ellipsis if truncated
    }
    return text;
  }

  return (
    <>
      <div className="app-wrapper mt-3">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 font-weight-bold" style={{ color: "#423d69" }}>
            Blog-List
          </h1>
          <Link
            href="/Dash/main/blogsection/blogcreate"
            className="d-none d-sm-inline-block btn btn-sm  shadow-sm create-btn"
          >
            <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
            Create Blog
          </Link>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold" style={{ color: "#423d69" }}>
              DataTables
            </h6>
          </div>
          <div className="card-body">
            {isLoading ? (
              <img
                src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"
                alt="Loading"
              />
            ) : (
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th style={{ width: "150px" }}>Image</th>
                      <th style={{ width: "200px" }}>Title</th>
                      {/* <th style={{width:"700px"}}>Content</th> */}
                      <th style={{ width: "210px" }}>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {userList.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <img
                            style={{ width: "100%" }}
                            src={user.image}
                            alt={user.title}
                          />
                        </td>
                        <td>{user.title}</td>
                        {/* <td dangerouslySetInnerHTML={{ __html: truncateWords(user.content, 25) }}></td> */}

                        <td>
                          <button
                            onClick={() =>
                              router.push(
                                `/Dash/main/blogsection/blogview/${user?._id}`
                              )
                            }
                            className="btn  btn-sm mr-1"
                            style={{ background: "#1ba12d", color: "#fff" }}
                          >
                            View
                          </button>
                          <Link
                            href={`/Dash/main/blogsection/blogedit/${user?._id}`}
                            className="btn btn-primary btn-sm mr-1 mb-lg-0 mb-2 mt-lg-0 mt-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(user?._id)}
                            className="btn btn-danger btn-sm mr-1 "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
