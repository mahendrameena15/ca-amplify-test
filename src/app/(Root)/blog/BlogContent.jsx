"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const itemsPerPage = 6;

const BlogContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://nodejs-restapi-6rpt.onrender.com/api/blogposts/all-blog-posts`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (searchQuery === "" ? data : filteredData).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filteredItems);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <section className="ftco-section">
        <div className="container">
          <div className="mb-4 d-flex justify-content-end align-items-end">
            <input
              className="form-control w-25"
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="row d-flex">
            {currentItems.map((item, index) => {
              return (
                <div className="col-md-4 mb-3" key={index}>
                  {item && (
                    <Head>
                      <title>{item.metatitle}</title>
                      <meta name="description" content={item.metadescription} />
                      <meta name="keywords" content={item.metakeyword} />
                    </Head>
                  )}
                  <div className="blog-entry align-self-stretch h-100 mb-0 ">
                    {item.image && (
                      <img
                        src={item.image}
                        style={{
                          width: "100%",
                          height: "150px",
                        }}
                        className="w-100"
                        alt="CA Saurabh Srivastava"
                      />
                    )}
                    <div className="text p-3">
                      <h6 className="text-dark p-3 p-md-0">{item.title}</h6>
                      <div className="meta mb-2">
                        {/* <div className="p-2"
                         style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "50ch",
                            width:"300px",
                          }}
                        >
                          <a href="#" dangerouslySetInnerHTML={{ __html: truncateWords(item.content, 25) }}></a>
                        </div> */}
                        <div className="d-flex justify-content-center pt-3">
                          <button
                            className="bg-dark text-light rounded px-3 text-center cursor-pointer"
                            onClick={() =>
                              router.push(`/blog/viewblog/${item?.params}`)
                            }
                          >
                            view
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-5">
            {Array.from(
              {
                length: Math.ceil(
                  (searchQuery === "" ? data : filteredData).length /
                    itemsPerPage
                ),
              },
              (_, i) => (
                <button
                  className="pagination-button"
                  key={i}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
