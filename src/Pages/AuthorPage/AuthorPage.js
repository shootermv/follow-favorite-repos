import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//shared
import useFetch from "../../shared/Hooks";
import Spinner from "../../shared/Spinner";
import "./AuthorPage.css";

import { RepoContext } from "../../Contexts/RepoContext";

const savePerson = (user, selectedRepo, email, setAlreadyInList) => {
  const { id, login, avatar_url, name } = user;
  let coolGuys = localStorage.getItem("coolGuys")
    ? JSON.parse(localStorage.getItem("coolGuys"))
    : [];
  coolGuys = [
    ...coolGuys,
    {
      id,
      login,
      avatar_url,
      name,
      email,
      repo: selectedRepo.name
    }
  ];

  localStorage.setItem("coolGuys", JSON.stringify(coolGuys));
  setAlreadyInList(true);
};


export default function AuthorPage() {
  const { authorName, email } = useParams();
  const [alreadyInList, setAlreadyInList] = useState(false)
  useEffect(() => {
    let coolGuys = localStorage.getItem("coolGuys") ? JSON.parse(localStorage.getItem("coolGuys"))
      : [];
    setAlreadyInList(coolGuys.find(({ email: _email }) => email === _email))
  }, [])
  const {
    currentRepo: selectedRepo
  } = useContext(RepoContext);
  const { response: user, loading, error } = useFetch(
    `https://api.github.com/users/${authorName}`
  );
  return (
    <div className="author-details">
      {loading ? <Spinner />
        : error ? "error when trying fetch author"
          : user ? (
            <>
              <div className="author-details-left">
                <div>
                  <b>
                    <Link to={"/guys"}> Guys </Link>
                  </b>
              &#47; <b>{user.name}</b> <button disabled={alreadyInList} onClick={() => savePerson(user, selectedRepo, email, setAlreadyInList)}>Save This Guy</button>
                </div>
                <img alt="" src={user.avatar_url} />
              </div>
              <div className="author-details-right">
                <div>
                  <span>email</span>: <b>{email}</b>
                </div>
                <div>
                  <span>followers</span>: <b>{user.followers}</b>
                </div>
                <div>
                  <span>location</span>: <b>{user.location}</b>
                </div>
                <div>
                  <span>company</span>: <b>{user.company}</b>
                </div>
              </div>
            </>
          ) : (
              ""
            )}
    </div>
  );
}
