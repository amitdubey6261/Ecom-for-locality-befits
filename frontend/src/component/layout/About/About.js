import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFYfVCXnrvSlA/profile-displayphoto-shrink_800_800/0/1667719056819?e=2147483647&v=beta&t=myrXxg_yiDdj87NpVyuVbm5Ct_zZnij9-M0V3ZGmaW8"
              alt="Founder"
            />
            <Typography>Amit Dubey</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is website developed by Ankur Mishra , Abhijeet Kushwah  & Amit Dubey for The Minor Project . Session 2020-2024
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCmg3PieODWj1s4t_qEqIB_Q"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.youtube.com/channel/UCmg3PieODWj1s4t_qEqIB_Q" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
