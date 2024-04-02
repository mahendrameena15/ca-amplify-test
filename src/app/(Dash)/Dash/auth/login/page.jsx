"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../Assets/style.css";
import { validationSchema } from "../../Schema/Index";
import { mainUrl } from "../../../../../../config";
const initialValues = {
  email: "",
  password: "",
};

function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("refresh")) {
  //     window.location.reload();
  //     localStorage.setItem("refresh", true);
  //   }
  // }, []);
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (value, action) => {
        action.resetForm();

        fetch(`${mainUrl}/api/admin/login`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Invalid credentials") {
              // Show a popup with the message "Invalid user"
              alert("Invalid user");
            } else {
              // Store the token and redirect to the dashboard
              localStorage.setItem("token", data.token);
              router.push("/Dash/main/dashboard");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
    });

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row align-items-center">
              <div className="col-lg-6 d-none d-lg-block h-100">
                <img
                  src="/images/login.png"
                  alt="image"
                  className="bg-login-image w-100"
                />
              </div>
              <div className="col-lg-6 h-100">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address..."
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.email && touched.email ? (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.password && touched.password ? (
                        <div className="invalid-feedback d-block">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>

                    <button className="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                    <p className="mt-3 text-center">
                      {" "}
                      <Link
                        href="/Dash/auth/forget-password"
                        style={{ color: "#232964" }}
                      >
                        Forgot-password
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
