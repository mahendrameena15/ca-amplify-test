"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validationForgetSchema } from "../../Schema/Index";
import { mainUrl } from "../../../../../../config";

const initialValues = {
  email: "",
};

function Page() {
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationForgetSchema: validationForgetSchema,
      onSubmit: (value, action) => {
        action.resetForm();

        fetch(`${mainUrl}/api/admin/forgot-password`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Admin not found") {
              alert("Invalid user");
            } else {
              router.push("/reset-password");
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
                    <h1 className="h4 text-gray-900 mb-4">Forgot Password!</h1>
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

                    <button className="btn btn-primary btn-user btn-block">
                      Send OTP
                    </button>
                    <p className="mt-3">
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/Dash/auth/login"
                        style={{ color: "#232964" }}
                      >
                        Login
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
