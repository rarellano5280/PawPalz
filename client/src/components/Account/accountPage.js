import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import profilePic from '../../assets/profile-pic.jpeg';

const Account = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || [];
  return (
    <div className=" card card-rounded p-0 mb-4">
      <div className="paw__account card-body card-rounded p-4">
        <h4 className="text-white">Account Details</h4>
      </div>
      <div className="card-body p-5 w-100 border-0">
        <div className="row justify-center">
          <div className="col-lg-4 text-center">
            <figure className="ml-auto mr-auto mb-0 mt-0 w-100">
              <img className="br-2"src={profilePic}></img>
            </figure>
            <h2 className="paw__account-username gradient__text">
              {me.username}
            </h2>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label className="flex-column fw-400 mb-2 ml-5 text-center">
                First Name
              </label>
              <input type="text" className="form-input"></input>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label className="flex-column fw-400 mb-2 text-center">
                Last Name
              </label>
              <input type="text" className="form-input"></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label className="flex-column fw-400 mb-2 text-center">
                Email
              </label>
              <input type="text" className="form-input"></input>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label className="flex-column fw-400 mb-2 text-center">
                Phone
              </label>
              <input type="text" className="form-input"></input>
            </div>
          </div>
        </div>
        <button className="paw__save-btn">Save</button>
      </form>
    </div>
  );
};

export default Account;
