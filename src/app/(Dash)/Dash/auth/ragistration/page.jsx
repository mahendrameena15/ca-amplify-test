"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { mainUrl } from "../../../../../../config"; // Ensure this is correctly pointing to your config file
import { validationSchema } from "../../Schema/Index"; // Ensure the schema is correctly defined
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

function Page() {
  // Changed function name to match the typical naming convention
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, action) => {
        // action.resetForm(); // Consider where to best place this

        fetch(`${mainUrl}/api/admin/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Invalid credentials") {
              alert("Invalid credentials. Please try again.");
            } else {
              // Consider placing action.resetForm(); here if you want to reset the form upon successful registration
              router.push("/"); // Redirect to the home page or a specific path after successful registration
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
          });
      },
    });

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row align-items-center">
              <div className="col-lg-6 d-none d-lg-block h-100">
                <img
                  src="image/login.jpg"
                  alt="Login Visual"
                  className="bg-login-image w-100"
                />
              </div>
              <div className="col-lg-6 h-100">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      User Registration!
                    </h1>
                  </div>
                  <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && (
                        <div className="invalid-feedback d-block">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Register
                    </button>
                    <p className="mt-3">
                      Already Registered?{" "}
                      <Link href="/auth/login">
                        <a style={{ color: "#232964" }}>Login</a>
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
