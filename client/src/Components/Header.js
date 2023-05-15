import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Header = () => {
  return (
    <div className="header-div">
      <nav>
        <ul>
          <div>
            <li>
             <Link to="/"> <h3>
                <b>
                  {" "}
                  <ViewInArIcon/>
                  Anti
                  Counterfeiting
                </b>
              </h3></Link>
            </li>
          </div>
          <div className="header-right" style={{ paddingRight: "2rem" }}>
            <Link to={"/track"}>
              <Button variant="contained">Verify Product</Button>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
