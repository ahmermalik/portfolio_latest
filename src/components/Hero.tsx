import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import success from "../images/successfulahmer.png";
import styles from "../styles/hero.module.scss";
import ArrowButton from "./ArrowButton";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Hero: React.FC = () => {
  return (
    <Grid container spacing={0} className={styles.mainGrid}>
      <Grid item xs={12}>
        <Navbar
          item
          xs={12}
          //   section={section}
          //   setSection={setSection}
          //   modeSwitch={
          //     <FormGroup>
          //       {" "}
          //       <FormControlLabel
          //         checked={mode === "dark"}
          //         onChange={handleModeChange}
          //         control={<MaterialUISwitch sx={{ m: 1 }} />}
          //         label=""
          //       />
          //     </FormGroup>
          //   }
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4.35}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className={styles.gridOne}
      >
        <div>
          <Typography variant="h4" className={styles.intro}>
            Hello, I'm
          </Typography>
          <Typography variant="h2" className={styles.name}>
            Ahmer Malik
          </Typography>
          <Typography component="p" className={styles.loc}>
            I'm a developer living in Texas
          </Typography>
          <ArrowButton
            variant="contained"
            color="primary"
          >
            Lets code
          </ArrowButton>
        </div>
        <span>
          <a
            href="https://github.com/ahmermalik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <GitHubIcon />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmermalikm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              size="large"
              color="primary"
              sx={{ color: "#FF9B50", marginTop: "40px" }}
            >
              <LinkedInIcon />
            </IconButton>
          </a>
        </span>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={2.15} className={styles.gridTwo}>
        <Image
          src={success}
          alt="Your image description"
          className={styles.spilloverImage}
        />
      </Grid>
      <Grid
        item
        xs={12}
        lg={4.35}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <div className={styles.gridthree}>
          <Typography component="p" className={styles.subhead}>
            "Exploring the cosmos of code"
          </Typography>
          <Typography component="p" className={styles.subpar}>
            {" "}
            A passionate developer with a futuristic mindset. When I'm not busy
            coding, you can find me gazing at the stars, diving into the world
            of cryptocurrencies, or analyzing charts. I love turning ideas into
            reality through lines of code, and I'm excited to share my journey
            with you.
          </Typography>
        </div>
        <Button
          sx={{
            marginBottom: "50px",
            alignSelf: "flex-end",
            backgroundColor: "transparent",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              color: "#FF9B50",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "35px",
              borderBottom: "1px solid #FF9B50",
              paddingBottom: "1px", // Adjusting space between text and underline
            }}
          >
            Download Resume
          </Box>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Hero;

// xs: 0px and up (extra-small devices, phones)
// sm: 600px and up (small devices, tablets in portrait mode)
// md: 900px and up (medium devices, tablets in landscape mode and some small laptop screens)
// lg: 1200px and up (large devices, most laptops, and desktops)
// xl: 1536px and up (extra-large devices, large desktops)
