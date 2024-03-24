import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FeedContext from "../contexts/FeedContext";

const UserProfile = () => {
  const preferences = [
    {
      name: "Sports",
      url: "http://timesofindia.indiatimes.com/rssfeeds/4719148.cms",
    },
    {
      name: "Science",
      url: "http://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
    },
    {
      name: "Environment",
      url: "http://timesofindia.indiatimes.com/rssfeeds/2647163.cms",
    },
    {
      name: "Tech",
      url: "http://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
    },
    {
      name: "Education",
      url: "http://timesofindia.indiatimes.com/rssfeeds/913168846.cms",
    },
  ];
  const { user, isAuthenticated } = useAuth0();
  const { setCategory, setFeedUrl } = useContext(FeedContext);
  return isAuthenticated ? (
    <>
      <div className="container section-profile">
        <div className="row section-profile__heading">
          <h2>
            {user?.nickname.charAt(0).toUpperCase() + user?.nickname.slice(1)}'s
            Profile
          </h2>
        </div>
        <div className="row section-profile__content">
          <div className="col section-profile__user-details">
            <div className="row section-profile__user-details__color-strip"></div>
            <div className="row section-profile__user-details__img-box">
              <img
                className="section-profile__user-details__img-box__img"
                src={user?.picture}
                alt="user"
              />
            </div>
            <div className="row section-profile__user-details__txt-box">
              <div className="row">
                <div className="col">Name:</div>
                <div className="col-9">{user?.nickname}</div>
              </div>
              <div className="row">
                <div className="col">Email:</div>
                <div className="col-9">{user?.email}</div>
              </div>
              <div className="row">
                <div className="col">UserId:</div>
                <div className="col-9">{user?.sub}</div>
              </div>
            </div>
          </div>
          <div className="col section-profile__user-preferences">
            <div className="row section-profile__user-preferences__heading-container">
              <h4 className="section-profile__user-preferences__heading-container__heading">
                Preferences
              </h4>
              <button className="section-profile__user-preferences__heading-container__edit-btn">
                Edit
              </button>
            </div>
            <div className="row section-profile__user-preferences__content">
              {preferences.map(({ name, url }) => (
                <Link
                  key={name}
                  to={`/news/${name.toLowerCase()}`}
                  className="col section-profile__user-preferences__content__tab-link"
                  onClick={() => {
                    setCategory(name);
                    setFeedUrl(url);
                  }}
                >
                  <div className="custom-home__categories-container__categories-tabs__tab section-profile__user-preferences__content__tab">
                    {name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container section-profile">
        <div
          className="row section-profile__heading"
          style={{ height: 55 + "vh" }}
        >
          Please login to continue.
        </div>
      </div>
    </>
  );
};

export default UserProfile;
