import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const Teams = () => {
  const allTeams = [
    {
      id: 1,
      name: "Mr. Kamal",
      image: "https://ui-avatars.com/api/?name=Mr+Kamal",
      position: "Chief Executive Officer",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://www.linkedin.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Mrs. Rotna",
      image: "https://ui-avatars.com/api/?name=Mrs+Rotna",
      position: "Chief Operating Officer",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://www.linkedin.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Mr. Jakir",
      image: "https://ui-avatars.com/api/?name=Mr+Jakir",
      position: "Chief Technical Officer",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://www.linkedin.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Mr. Jamil",
      image: "https://ui-avatars.com/api/?name=Mr+Jamil",
      position: "Chief Financial Officer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      name: "Mr. Mohon",
      image: "https://ui-avatars.com/api/?name=Mr+Mohon",
      position: "Chief Marketing Officer",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://www.linkedin.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      name: "Mrs. Zakia",
      image: "https://ui-avatars.com/api/?name=Mrs+Zakia",
      position: "Chief Legal Officer",
      facebookLink: "https://www.facebook.com/",
      twitterLink: "https://twitter.com/",
      linkedinLink: "https://www.linkedin.com/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <PageHeader title="Our Team" />
      <section className="teams animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            {allTeams.map((team) => (
              <div className="col-lg-4 col-md-6 col-12 item">
                <div className="team-item d-flex flex-column align-items-center justify-content-center">
                  <div className="team-item-artist-thumb text-center">
                    <img className="img-fluid" src={team.image} alt="" />
                  </div>
                  <div className="team-item-artist-info text-center">
                    <h3>{team.name}</h3>
                    <p>{team.position}</p>
                  </div>
                  <div className="team-underline"></div>
                  <div>
                    <ul className="media-icons d-flex align-items-center">
                      <li>
                        <Link to={team.facebookLink} target="_blank">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={team.twitterLink} target="_blank">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={team.linkedinLink} target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
