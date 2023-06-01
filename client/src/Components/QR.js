import QRCode  from "qrcode";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
const QR=({id,name})=>{
    const [src, setSrc] = useState('');
    useEffect(()=>{
        QRCode.toDataURL(id).then(setSrc);
    },[])


    function printImg(src) {
        let win = window.open(document.getElementById("qrimgID").src,"_blank");
        win.document.write([
            '<html>',
            '   <head>',
            '   </head>',
            '   <body onload="window.print()" onafterprint="window.close()">',
            '       <img src="' + src + '"/>',
            '   </body>',
            '</html>'
        ].join(''));
        win.document.close();
      }


    return(
        <>
            <h1 style={{"color":"#000000"}}>QR for {name}</h1>
            <img className="qr_img" src={src} id="qrimgID"/>

            <Button variant="contained" onClick={()=>printImg(src)} style={{ marginTop: "2rem" }}>
                Print QR Code
            </Button>
        </>
    )
}
export default QR;