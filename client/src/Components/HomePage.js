import BasicTabs from "../Reusables/TabPanel";
import ColumnsGrid from "../Reusables/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
const HomePage = () => {
  return (
    <>
      <div>
        <h1>......</h1>
        <BasicTabs />
        <div className="grid-cont">
          <ColumnsGrid />
          <div className="banner-img"></div>
          <ColumnsGrid />
          <div>
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
