import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ShareLocationRoundedIcon from '@mui/icons-material/ShareLocationRounded';

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <nav>
          <ul>
            <a href="#">
              <li>Privacy Policy</li>
            </a>
            <a href="#">
              <li>About us</li>
            </a>
            <h2>
            <ViewInArIcon/>
            Anticounterfeiting Products
            </h2>
            <a href="#">
              <li>Contact us</li>
            </a>
            <a href="#">
              <li>Help Desk</li>
            </a>
          </ul>
        </nav>

        <div className='hr-line'></div>

       <div className='social-icons-div'>
       <nav>
            <ul>
                <FacebookRoundedIcon style={{"fontSize":"2.5rem"}}/>
                <SubscriptionsRoundedIcon style={{"fontSize":"2.5rem"}}/>
                <SendRoundedIcon style={{"fontSize":"2.5rem"}}/>
                <ShareLocationRoundedIcon style={{"fontSize":"2.5rem"}}/>

            </ul>


        </nav>
       </div>
       <div id="rights-res">
       <span>© All rights reserved.</span>

       </div>
      </div>
    </>
  );
};

export default Footer;
