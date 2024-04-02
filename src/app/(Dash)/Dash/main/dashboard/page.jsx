"use client";
import React, { useState, useEffect } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import Card from "../../card";
import { mainUrl } from "../../../../../../config";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Page() {
  const [comments, setComments] = useState([]);
  const [blogList, setblogList] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [blogPostsData, setBlogPostsData] = useState([]);
  // console.log(blogPostsData);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${mainUrl}/api/blogposts/blogs-per-month`
        );
        if (response.ok) {
          const data = await response.json();
          setBlogPostsData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchData();
  }, []);
  // fetch(`${mainUrl}
  useEffect(() => {
    axios
      .get(`${mainUrl}/api/comments/`)
      .then((response) => {
        setComments(response.data);

        // console.log("reponse >>", response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });

    axios
      .get(`${mainUrl}/api/blogposts/all-blog-posts`)
      .then((response) => {
        setblogList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${mainUrl}/api/contacts`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  return (
    <>
      <div className="app-wrapper ">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div className="row">
          <Card title="All Blogs" value={blogList.length} color="success" />
          <Card title="All Contacts" value={contacts.length} color="info" />
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <Doughnut
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Revenue Sources",
                  },
                },
              }}
              data={{
                labels: ["Blogs", "contacts"],
                datasets: [
                  {
                    data: [blogList.length, contacts.length],
                    backgroundColor: ["#1cc88a ", "#36b9cc"],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-8 col-lg-7">
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Blogs Overview",
                  },
                },
              }}
              data={{
                labels: blogPostsData.map((item) =>
                  item._id.month !== null
                    ? monthNames[item._id.month - 1]
                    : "Unknown"
                ),
                datasets: [
                  {
                    label: "Count in Number",
                    data: blogPostsData.map((item) => item.count),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
