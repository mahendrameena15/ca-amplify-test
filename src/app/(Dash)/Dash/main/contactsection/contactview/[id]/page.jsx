"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../../../Assets/style.css";
import { mainUrl } from "../../../../../../../../config";

function ContactView() {
  const { id } = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${mainUrl}/api/contacts/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="app-wrapper mt-3">
        <div className="container mt-5">
          <div className="row justify-content-center align-content-center text-justify">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="fw-bold">Contact Us - Profile</h5>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="text-bold" for="name">
                      <b>Name:</b>
                    </label>
                    <div>{contact.fullName}</div>
                  </div>
                  <div className="form-group">
                    <label className="text-bold" for="email">
                      <b>Email:</b>
                    </label>
                    <div>{contact.email}</div>
                  </div>
                  <div className="form-group">
                    <label className="text-bold" for="subject">
                      <b>Subject:</b>
                    </label>
                    <div>{contact.subject}</div>
                  </div>
                  <div className="form-group">
                    <label className="" for="message">
                      <b>Message:</b>
                    </label>
                    <div className="">{contact.message}</div>
                  </div>
                  <Link
                    href="/Dash/main/contactsection/contactus"
                    type="button"
                    className="btn btn-primary"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactView;
