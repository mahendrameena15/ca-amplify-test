"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validationOtpSchema } from "../../Schema/Index";
import { mainUrl } from "../../../../../../config";

const initialValues = {
  email: "",
  otp: "",
  newPassword: "",
};

function Page() {
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationOtpSchema: validationOtpSchema,
      onSubmit: (value, action) => {
        // console.log(value);
        action.resetForm();

        fetch(`${mainUrl}/api/admin/reset-password`, {
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
            } else if (data.message === "Invalid OTP") {
              alert("Invalid OTP");
            } else {
              router.push("/");
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
                  src="../image/login.jpg"
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
                        type="text"
                        className="form-control form-control-user"
                        id="otp"
                        placeholder="OTP"
                        name="otp"
                        value={values.otp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.otp && touched.otp ? (
                        <div className="invalid-feedback d-block">
                          {errors.otp}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="newPassword"
                        placeholder="PassnewPasswordord"
                        name="newPassword"
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.newPassword && touched.newPassword ? (
                        <div className="invalid-feedback d-block">
                          {errors.newPassword}
                        </div>
                      ) : null}
                    </div>

                    <button className="btn btn-primary btn-user btn-block">
                      Reset Password
                    </button>
                    {/* <p className="mt-3">
                      Don't have an account?{" "}
                      <Link to="/ragistration" style={{ color: "#232964" }}>
                        Create free account
                      </Link>
                    </p> */}
                    <p className="mt-3">
                      If you have Password ?{" "}
                      <Link href="/auth/login" style={{ color: "#232964" }}>
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
