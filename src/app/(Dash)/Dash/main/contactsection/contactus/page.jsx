"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { useParams } from "next/navigation";
import "../../../Assets/style.css";
import { mainUrl } from "../../../../../../../config";

function Page() {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleDownloadExcel = async () => {
    try {
      const downloadResponse = await fetch(
        `${mainUrl}/api/contacts/export/all`,
        {
          method: "GET",
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      );

      if (downloadResponse.ok) {
        const blob = await downloadResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "contacts.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("Failed to download Excel file");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    getContacts();
  }, [id]);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  function getContacts() {
    axios
      .get(`${mainUrl}/api/contacts`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the data?"
    );
    if (confirmDelete) {
      axios
        .delete(`${mainUrl}/api/contacts/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 204) {
            // Successful deletion, fetch fresh data
            getContacts();
          } else {
            // console.log("Server returned an error:", response.status);
          }
        })
        .catch((error) => {
          console.log("Error deleting data:", error);
        });
    }
  };

  function truncateWords(text, limit) {
    if (!text) return ""; // Check if text is null or undefined

    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "..."; // Adding ellipsis if truncated
    }
    return text;
  }

  // Function to handle file selection
  const handleFileSelect = (e) => {
    // Handle file selection and update selectedFile state
    setSelectedFile(e.target.files[0]);
  };

  // Function to handle contact import
  const handleImportContacts = async () => {
    if (!selectedFile) {
      alert("Please choose a file for import."); // Display a message
      return;
    }

    // const formData = new FormData();
    // formData.append("file", selectedFile);

    try {
      const importResponse = await axios.post(
        `${mainUrl}/api/contacts/import`,
        { file: selectedFile },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (importResponse.status === 200) {
        // Import successful, you can update the UI or fetch fresh data
        // console.log("Contacts imported successfully!");
        getContacts();
      } else {
        console.error("Failed to import contacts");
        alert("Failed to import contacts. Please try again later.");
      }
    } catch (error) {
      console.error("Error importing contacts:", error);
      alert("Error importing contacts. Please try again later.");
    }
  };

  // Function to toggle file input visibility
  const toggleFileInput = () => {
    setShowFileInput(!showFileInput);
  };

  return (
    <>
      <div className="app-wrapper mt-3">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 font-weight-bold" style={{ color: "#423d69" }}>
            Contact List
          </h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="m-0 font-weight-bold" style={{ color: "#423d69" }}>
                Contact Tables
              </h6>
            </div>
            <div className="d-flex align-items-center">
              {/* Toggle "Choose File" input visibility */}
              {/* {!showFileInput ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={toggleFileInput}
                >
                  Import Contacts
                </button>
              ) : (
                <>
                  <input
                    type="file"
                    accept=".csv" 
                    onChange={handleFileSelect}
                    style={{ display: "none" }} 
                    id="fileInput"
                  />
                  <label htmlFor="fileInput" className="btn btn-secondary mr-2 mb-0">
                    Choose File
                  </label>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleImportContacts}
                  >
                    Import
                  </button>
                </>
              )} */}

              {/* Download button */}
              <button
                type="button"
                className="btn btn-primary ml-2"
                data-toggle="popover"
                title="Download in Excel"
                data-content="Click to download in Excel format."
                onClick={handleDownloadExcel}
                style={{ backgroundColor: "#423d69", border: "#423d69" }}
              >
                <FaDownload /> Download
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th style={{ width: "150px" }}>Date</th>
                    <th style={{ width: "150px" }}>Full Name</th>
                    <th style={{ width: "200px" }}>Email</th>
                    <th style={{ width: "300px" }}>Contact Number</th>
                    <th style={{ width: "200px" }}>Subject</th>
                    <th style={{ width: "400px" }}>Message</th>
                    <th style={{ width: "400px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={index}>
                      <td>{formatDate(contact.createdAt)}</td>

                      <td>{contact.fullName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.number}</td>
                      {/* <td>{contact.subject}</td> */}
                      <td
                        dangerouslySetInnerHTML={{
                          __html: truncateWords(contact.subject, 5),
                        }}
                      ></td>
                      <td>{truncateWords(contact.message, 10)}</td>

                      <td>
                        <button
                          onClick={() =>
                            router.push(
                              `/Dash/main/contactsection/contactview/${contact._id}`
                            )
                          }
                          className="btn btn-sm mr-1 mb-xl-0 mb-2"
                          style={{ background: "#1ba12d", color: "#fff" }}
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="btn btn-danger btn-sm mr-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
