const config = require("../config/auth.config");
const db = require("../models");
const Maintenance = db.maintenance;
const MaintenanceCounter = db.maintenancecounter;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var handlebars = require("handlebars");
var fs = require("fs");
var moment = require("moment");
const { request } = require("https");
var multer = require('multer')



exports.sendmaintenancemail = (req, res) => {
  smtpTransport = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.gmail.com",

      port: "587",
      auth: {
        user: "adegokeadeleke.ayo@gmail.com",
        pass: "alvvcakmxqbfgvfa",
      },
    })
  );
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        throw err;
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };
  var a = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <!-- NAME: FALL COLORS -->
      <!--[if gte mso 15]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>*|MC:SUBJECT|*</title>
      
  <style type="text/css">
  p{
    margin:10px 0;
    padding:0;
  }
  table{
    border-collapse:collapse;
  }
  h1,h2,h3,h4,h5,h6{
    display:block;
    margin:0;
    padding:0;
  }
  img,a img{
    border:0;
    height:auto;
    outline:none;
    text-decoration:none;
  }
  body,#bodyTable,#bodyCell{
    height:100%;
    margin:0;
    padding:0;
    width:100%;
  }
  .mcnPreviewText{
    display:none !important;
  }
  #outlook a{
    padding:0;
  }
  img{
    -ms-interpolation-mode:bicubic;
  }
  table{
    mso-table-lspace:0pt;
    mso-table-rspace:0pt;
  }
  .ReadMsgBody{
    width:100%;
  }
  .ExternalClass{
    width:100%;
  }
  p,a,li,td,blockquote{
    mso-line-height-rule:exactly;
  }
  a[href^=tel],a[href^=sms]{
    color:inherit;
    cursor:default;
    text-decoration:none;
  }
  p,a,li,td,body,table,blockquote{
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%;
  }
  .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
    line-height:100%;
  }
  a[x-apple-data-detectors]{
    color:inherit !important;
    text-decoration:none !important;
    font-size:inherit !important;
    font-family:inherit !important;
    font-weight:inherit !important;
    line-height:inherit !important;
  }
  .templateContainer{
    max-width:600px !important;
  }
  a.mcnButton{
    display:block;
  }
  .mcnImage,.mcnRetinaImage{
    vertical-align:bottom;
  }
  .mcnTextContent{
    word-break:break-word;
  }
  .mcnTextContent img{
    height:auto !important;
  }
  .mcnDividerBlock{
    table-layout:fixed !important;
  }
/*
@tab Page
@section Heading 1
@style heading 1
*/
  h1{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Arvo', 'Courier', Georgia, serif;
    ;
              /*@editable*/ font-size:46px;
    /*@editable*/font-style:normal;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:150%;
    /*@editable*/letter-spacing:1px;
    /*@editable*/text-align:center;
  }
/*
@tab Page
@section Heading 2
@style heading 2
*/
  h2{
    /*@editable*/color:#222222;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:28px;
    /*@editable*/font-style:normal;
    /*@editable*/font-weight:bold;
    /*@editable*/line-height:200%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:center;
  }
/*
@tab Page
@section Heading 3
@style heading 3
*/
  h3{
    /*@editable*/color:#444444;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:20px;
    /*@editable*/font-style:italic;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:200%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:left;
  }
/*
@tab Page
@section Heading 4
@style heading 4
*/
  h4{
    /*@editable*/color:#3D3D3D;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:20px;
    /*@editable*/font-style:italic;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:125%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:left;
  }
/*
@tab Header
@section Header Container Style
*/
  #templateHeader{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:url("https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/9da69a28-537b-94e0-e318-76e1a28f1ab0.jpg");
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:99px;
    /*@editable*/padding-bottom:99px;
  }
/*
@tab Header
@section Header Interior Style
*/
  .headerContainer{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:36px;
    /*@editable*/padding-bottom:36px;
  }
/*
@tab Header
@section Header Text
*/
  .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /*@editable*/font-size:32px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Header
@section Header Link
*/
  .headerContainer .mcnTextContent a,.headerContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Upper Body
@section Upper Body Container Style
*/
  #templateUpperBody{
    /*@editable*/background-color:#8B2A34;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:63px;
    /*@editable*/padding-bottom:63px;
  }
/*
@tab Upper Body
@section Upper Body Interior Style
*/
  .upperBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Upper Body
@section Upper Body Text
*/
  .upperBodyContainer .mcnTextContent,.upperBodyContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /*@editable*/font-size:20px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:left;
  }
/*
@tab Upper Body
@section Upper Body Link
*/
  .upperBodyContainer .mcnTextContent a,.upperBodyContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Middle Body
@section Middle Body Container Style
*/
  #templateMiddleBody{
    /*@editable*/background-color:#FFFFFF;
    /*@editable*/background-image:url("https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/9da69a28-537b-94e0-e318-76e1a28f1ab0.jpg");
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:72px;
    /*@editable*/padding-bottom:54px;
  }
/*
@tab Middle Body
@section Middle Body Interior Style
*/
  .middleBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Middle Body
@section Middle Body Text
*/
  .middleBodyContainer .mcnTextContent,.middleBodyContainer .mcnTextContent p{
    /*@editable*/color:#404040;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:16px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:left;
  }
/*
@tab Middle Body
@section Middle Body Link
*/
  .middleBodyContainer .mcnTextContent a,.middleBodyContainer .mcnTextContent p a{
    /*@editable*/color:#B44444;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Lower Body
@section Lower Body Container Style
*/
  #templateLowerBody{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0px;
    /*@editable*/padding-bottom:0px;
  }
/*
@tab Lower Body
@section Lower Body Interior Style
*/
  .lowerBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Lower Body
@section Lower Body Text
*/
  .lowerBodyContainer .mcnTextContent,.lowerBodyContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:16px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Lower Body
@section Lower Body Link
*/
  .lowerBodyContainer .mcnTextContent a,.lowerBodyContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Footer
@section Footer Style
*/
  #templateFooter{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0px;
    /*@editable*/padding-bottom:0px;
  }
/*
@tab Footer
@section Footer Interior Style
*/
  .footerContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0;
    /*@editable*/padding-bottom:0;
  }
/*
@tab Footer
@section Footer Text
*/
  .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:12px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Footer
@section Footer Link
*/
  .footerContainer .mcnTextContent a,.footerContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
@media only screen and (max-width: 480px){
  .columnWrapper{
    max-width:100% !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  #templateHeader{
    padding-right:18px !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  body,table,td,p,a,li,blockquote{
    -webkit-text-size-adjust:none !important;
  }

}	@media only screen and (max-width: 480px){
  body{
    width:100% !important;
    min-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnRetinaImage{
    max-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImage{
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
    max-width:100% !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnBoxedTextContentContainer{
    min-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupContent{
    padding:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
    padding-top:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
    padding-top:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardBottomImageContent{
    padding-bottom:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupBlockInner{
    padding-top:0 !important;
    padding-bottom:0 !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupBlockOuter{
    padding-top:9px !important;
    padding-bottom:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnTextContent,.mcnBoxedTextContentColumn{
    padding-right:18px !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
    padding-right:18px !important;
    padding-bottom:0 !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcpreview-image-uploader{
    display:none !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 1
*/
  h1{
    /*@editable*/font-size:34px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 2
*/
  h2{
    /*@editable*/font-size:26px !important;
    /*@editable*/line-height:125% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 3
*/
  h3{
    /*@editable*/font-size:20px !important;
    /*@editable*/line-height:200% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 4
*/
  h4{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Boxed Text
*/
  .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:200% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Header Text
*/
  .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
    /*@editable*/font-size:30px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Upper Body Text
*/
  .upperBodyContainer .mcnTextContent,.upperBodyContainer .mcnTextContent p{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Middle Body Text
*/
  .middleBodyContainer .mcnTextContent,.middleBodyContainer .mcnTextContent p{
    /*@editable*/font-size:16px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Lower Body Text
*/
  .lowerBodyContainer .mcnTextContent,.lowerBodyContainer .mcnTextContent p{
    /*@editable*/font-size:16px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Footer Text
*/
  .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
    /*@editable*/font-size:14px !important;
    /*@editable*/line-height:150% !important;
  }

}</style></head>
  <body>
      <!--*|IF:MC_PREVIEW_TEXT|*-->
      <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
      <!--<![endif]-->
      <!--*|END:IF|*-->
      <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
              <tr>
                  <td align="center" valign="top" id="bodyCell">
                      <!-- BEGIN TEMPLATE // -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                              <td align="center" valign="top" id="templateHeader" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
  <tbody class="mcnImageBlockOuter">
          <tr>
              <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                  <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                      <tbody><tr>
                          <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                              
                                  
                                      <img align="center" alt="" src="https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/41a784c5-b61a-3b50-91b3-c84f1d0eb235.png" width="564" style="max-width:842px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                  
                              
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateUpperBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="upperBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <h1>Maintenance Request</h1>

                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 27px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          my glass broke<br>
&nbsp;
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 54px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
  <tbody class="mcnButtonBlockOuter">
      <tr>
          <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
              <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important; border-radius: 0px;">
                  <tbody>
                      <tr>
                          <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 20px; padding: 15px;">
                              <a class="mcnButton " title="Close the Ticket" href="https://upbeat-volhard-556413.netlify.app/#/" target="_self" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">Close the Ticket</a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateMiddleBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="middleBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 36px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateLowerBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="lowerBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 9px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateFooter" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <a href="*|ARCHIVE|*" target="blank">view this email in your browser</a><br>
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <em>Copyright © 2021 Al-Jaber, All rights reserved.</em><br>
<br>
&nbsp;
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                      </table>
                      <!-- // END TEMPLATE -->
                  </td>
              </tr>
          </table>
      </center>
  </body>
</html>`;
  readHTMLFile("htmltemplate.html", function (err, html) {
    var template = handlebars.compile(a);
    var replacements = {
      usrname: username,
      msg: req.body.message,
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: "tenants@aljaberqatar.com",
      to: [
        "gokeayomide.tolu@gmail.com",
        "tenants@aljaberqatar.com",
        "ayomide.adegoke@adroitsolutionsltd.com",
      ],
      subject: "Maintenace Request---" + username,
      html: htmlToSend,
      attachments: [
        {
          // filename and content type is derived from path
          path: "Tenants Master Sheet (1).xlsx",
        },
      ],
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        callback(error);
      }
    });
  });
};
const sendmaintenancemail = (username, message, fileattached,count,clientname,ticketnumber,clientphone,propertyid,propertyunit,attatch) => {
  
    var transporter = nodemailer.createTransport(
      {
        host: 'smtp.office365.com', // Office 365 server
        port: 587,     // secure SMTP
        secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
        auth: {
            user: 'tenants@aljaberqatar.com',
            pass: 'UAigh442'
        }
  });
  var a = `<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
    <meta name="Generator" content="Microsoft Word 15 (filtered)" />
    <style>
      <!--
       /* Font Definitions */
       @font-face
      	{font-family:Vrinda;
      	panose-1:0 0 4 0 0 0 0 0 0 0;}
      @font-face
      	{font-family:"Cambria Math";
      	panose-1:2 4 5 3 5 4 6 3 2 4;}
      @font-face
      	{font-family:Calibri;
      	panose-1:2 15 5 2 2 2 4 3 2 4;}
      @font-face
      	{font-family:"Century Gothic";
      	panose-1:2 11 5 2 2 2 2 2 2 4;}
       /* Style Definitions */
       p.MsoNormal, li.MsoNormal, div.MsoNormal
      	{margin:0in;
      	font-size:12.0pt;
      	font-family:"Calibri",sans-serif;}
      p.MsoHeader, li.MsoHeader, div.MsoHeader
      	{mso-style-link:"Header Char";
      	margin:0in;
      	font-size:12.0pt;
      	font-family:"Calibri",sans-serif;}
      p.MsoFooter, li.MsoFooter, div.MsoFooter
      	{mso-style-link:"Footer Char";
      	margin:0in;
      	font-size:12.0pt;
      	font-family:"Calibri",sans-serif;}
      span.HeaderChar
      	{mso-style-name:"Header Char";
      	mso-style-link:Header;}
      span.FooterChar
      	{mso-style-name:"Footer Char";
      	mso-style-link:Footer;}
      .MsoChpDefault
      	{font-size:12.0pt;
      	font-family:"Calibri",sans-serif;}
       /* Page Definitions */
       @page WordSection1
      	{size:8.5in 11.0in;
      	margin:.3in .5in .3in .5in;}
      div.WordSection1
      	{page:WordSection1;}
      @page WordSection2
      	{size:8.5in 11.0in;
      	margin:.3in .5in .3in .5in;}
      div.WordSection2
      	{page:WordSection2;}
       /* List Definitions */
       ol
      	{margin-bottom:0in;}
      ul
      	{margin-bottom:0in;}
      -->
    </style>
  </head>

  <body lang="EN-US" link="blue" vlink="#954F72" style="word-wrap: break-word">
    <div class="WordSection1">
      <p class="MsoHeader">
        <span style="position: relative; z-index: 251658240"
          ><span
            style="
              position: absolute;
              left: 535px;
              top: -44px;
              width: 402px;
              height: 137px;
            "
            ><img
              width="322"
              height="110"
              src="https://upbeat-volhard-556413.netlify.app/assets/layout/images/logo-black.png"
              alt="Aljaber" /></span></span
        ><b
          ><span
            style="
              font-size: 18pt;
              font-family: 'Century Gothic', sans-serif;
              color: #1f4e79;
            "
            >&nbsp;</span
          ></b
        >
      </p>

      <p class="MsoNormal">
        <b
          ><span
            style="
              font-size: 7.5pt;
              font-family: 'Century Gothic', sans-serif;
              color: black;
            "
            >&nbsp;</span
          ></b
        >
      </p>

      <table
        class="MsoNormalTable"
        border="0"
        cellspacing="0"
        cellpadding="0"
        width="731"
        style="width: 548.3pt; border-collapse: collapse"
      >
        <tr style="height: 26.2pt">
          <td
            width="731"
            nowrap
            colspan="11"
            style="
              width: 548.3pt;
              border: none;
              border-bottom: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 26.2pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <span
                style="
                  font-size: 22pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: gray;
                "
                >&nbsp;</span
              >
            </p>
            <p class="MsoNormal" align="right" style="text-align: right">
              <span
                style="
                  font-size: 22pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: gray;
                "
                >&nbsp;</span
              >
            </p>
            <br clear="ALL" />
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 22pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: gray;
                "
                >REPAIR WORK ORDER</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 23.55pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >CLIENT NAME</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;${clientname}</span
              >
            </p>
          </td>
          <td
            width="117"
            colspan="2"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >TICKET NUMBER</span
                ></b
              >
            </p>
          </td>
          <td
            width="234"
            colspan="2"
            style="
              width: 175.8pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;${ticketnumber}</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 23.55pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border-top: none;
              border-left: solid #bfbfbf 1pt;
              border-bottom: double #bfbfbf 2.25pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >CLIENT PHONE</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border-top: none;
              border-left: none;
              border-bottom: double #bfbfbf 2.25pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp; ${clientphone}</span
              >
            </p>
          </td>
          <td
            width="117"
            colspan="2"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: double #bfbfbf 2.25pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >PROPERTY ID</span
                ></b
              >
            </p>
          </td>
          <td
            width="234"
            colspan="2"
            style="
              width: 175.8pt;
              border-top: none;
              border-left: none;
              border-bottom: double #bfbfbf 2.25pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;${propertyid}</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 23.55pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >UNIT #</span
                ></b
              >
            </p>
          </td>
          <td
            width="597"
            colspan="8"
            style="
              width: 447.4pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 23.55pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;${propertyunit}</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 22.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >ORDER DATE</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="128"
            colspan="3"
            style="
              width: 96.1pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >EXPECTED START DATE</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            colspan="2"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >EXPECTED END DATE</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            style="
              width: 88.05pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 22.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >WORK AUTHORIZED BY</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border: solid #bfbfbf 1pt;
              border-left: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;MAINTENANCE SYSTEM</span
              >
            </p>
          </td>
          <td
            width="117"
            colspan="2"
            style="
              width: 87.75pt;
              border: solid #bfbfbf 1pt;
              border-left: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >SIGNATURE</span
                ></b
              >
            </p>
          </td>
          <td
            width="234"
            colspan="2"
            style="
              width: 175.8pt;
              border: solid #bfbfbf 1pt;
              border-left: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 15.7pt">
          <td
            width="731"
            colspan="11"
            style="
              width: 548.3pt;
              border: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 15.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >PERMISSION TO ENTER SPACE</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr style="height: 22.7pt">
          <td
            width="29"
            style="
              width: 22pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 9pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  ></span
                ></b
              >
            </p>
          </td>
          <td
            width="70"
            style="
              width: 52.85pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >ANYTIME</span
                ></b
              >
            </p>
          </td>
          <td
            width="35"
            style="
              width: 26.05pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 9pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  ></span
                ></b
              >
            </p>
          </td>
          <td
            width="123"
            colspan="2"
            style="
              width: 92.3pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 4.5pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >BY APPOINTMENT</span
                ></b
              >
            </p>
          </td>
          <td
            width="122"
            colspan="2"
            style="
              width: 91.55pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >DATE</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            colspan="2"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >TIME</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 88.05pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 15.7pt">
          <td
            width="731"
            colspan="11"
            style="
              width: 548.3pt;
              border: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 15.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >PROPERTY ENTRY NOTICE</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr style="height: 15.7pt">
          <td
            width="731"
            colspan="11"
            style="
              width: 548.3pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 15.7pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >This serves as notice that we entered your property today to
                  perform requested repairs.</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr style="height: 19.25pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >DATE</span
                ></b
              >
            </p>
          </td>
          <td
            width="123"
            colspan="2"
            style="
              width: 92.3pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="122"
            colspan="2"
            style="
              width: 91.55pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >TIME ENTERED</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            colspan="2"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            style="
              width: 87.75pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >TIME DEPARTED</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 88.05pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 19.25pt;
            "
          >
            <p class="MsoNormal" align="center" style="text-align: center">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 78.95pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #a6a6a6 1pt;
              border-bottom: double #bfbfbf 2.25pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 78.95pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >REQUESTED WORK DESCRIPTION</span
                ></b
              >
            </p>
          </td>
          <td
            width="597"
            colspan="8"
            style="
              width: 447.4pt;
              border-top: solid #a6a6a6 1pt;
              border-left: none;
              border-bottom: double #bfbfbf 2.25pt;
              border-right: solid #a6a6a6 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 78.95pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 22.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >WORK PERFORMED BY</span
                ></b
              >
            </p>
          </td>
          <td
            width="597"
            colspan="8"
            style="
              width: 447.4pt;
              border: solid #bfbfbf 1pt;
              border-left: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 22.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 53.05pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 53.05pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >DESCRIPTION OF WORK COMPLETED AND MATERIALS USED</span
                ></b
              >
            </p>
          </td>
          <td
            width="597"
            colspan="8"
            style="
              width: 447.4pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 53.05pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 5.2pt">
          <td
            width="135"
            colspan="3"
            valign="bottom"
            style="width: 100.9pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="123"
            colspan="2"
            valign="bottom"
            style="width: 92.3pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="122"
            colspan="2"
            valign="bottom"
            style="width: 91.55pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
          <td
            width="117"
            valign="bottom"
            style="width: 88.05pt; padding: 0in 5.4pt 0in 5.4pt; height: 5.2pt"
          ></td>
        </tr>
        <tr style="height: 28.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >LABORS USED</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border: solid #bfbfbf 1pt;
              border-left: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            colspan="2"
            valign="bottom"
            style="width: 87.75pt; padding: 0in 5.4pt 0in 5.4pt; height: 28.7pt"
          ></td>
          <td
            width="117"
            nowrap
            style="
              width: 87.75pt;
              border: solid #bfbfbf 1pt;
              border-right: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >COST OF LABOR</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 88.05pt;
              border: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 28.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >CLIENT APPROVAL NAME AND TITLE</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            colspan="2"
            valign="bottom"
            style="
              width: 87.75pt;
              background: white;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" style="margin-top: 12pt">
              <span
                style="font-family: 'Century Gothic', sans-serif; color: black"
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 87.75pt;
              border-top: none;
              border-left: solid #bfbfbf 1pt;
              border-bottom: solid #bfbfbf 1pt;
              border-right: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >COST OF MATERIALS</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 88.05pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 28.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >APPROVING PARTY SIGNATURE</span
                ></b
              >
            </p>
          </td>
          <td
            width="245"
            colspan="4"
            style="
              width: 183.85pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            colspan="2"
            style="
              width: 87.75pt;
              background: white;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <i
                ><span
                  style="
                    font-size: 9pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: gray;
                  "
                  >&nbsp;</span
                ></i
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 87.75pt;
              border: none;
              border-left: solid #bfbfbf 1pt;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >TOTAL</span
                ></b
              >
            </p>
          </td>
          <td
            width="117"
            nowrap
            style="
              width: 88.05pt;
              border-top: none;
              border-left: solid #bfbfbf 1pt;
              border-bottom: none;
              border-right: solid #bfbfbf 1pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
        </tr>
        <tr style="height: 28.7pt">
          <td
            width="135"
            colspan="3"
            style="
              width: 100.9pt;
              border: solid #bfbfbf 1pt;
              border-top: none;
              background: #d6dce4;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >DATE OF APPROVAL</span
                ></b
              >
            </p>
          </td>
          <td
            width="160"
            colspan="3"
            style="
              width: 120.1pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <span
                style="
                  font-size: 9pt;
                  font-family: 'Century Gothic', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              >
            </p>
          </td>
          <td
            width="87"
            nowrap
            colspan="2"
            style="
              width: 65.25pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 4.5pt;
              background: #eaeef3;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal" align="right" style="text-align: right">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >CHARGEABLE TO</span
                ></b
              >
            </p>
          </td>
          <td
            width="349"
            nowrap
            colspan="3"
            style="
              width: 262.05pt;
              border-top: none;
              border-left: none;
              border-bottom: solid #bfbfbf 1pt;
              border-right: solid #bfbfbf 1pt;
              padding: 0in 5.4pt 0in 5.4pt;
              height: 28.7pt;
            "
          >
            <p class="MsoNormal">
              <b
                ><span
                  style="
                    font-size: 8pt;
                    font-family: 'Century Gothic', sans-serif;
                    color: black;
                  "
                  >&nbsp;</span
                ></b
              >
            </p>
          </td>
        </tr>
        <tr height="0">
          <td width="29" style="border: none"></td>
          <td width="70" style="border: none"></td>
          <td width="35" style="border: none"></td>
          <td width="117" style="border: none"></td>
          <td width="6" style="border: none"></td>
          <td width="37" style="border: none"></td>
          <td width="85" style="border: none"></td>
          <td width="2" style="border: none"></td>
          <td width="115" style="border: none"></td>
          <td width="117" style="border: none"></td>
          <td width="117" style="border: none"></td>
        </tr>
      </table>
    </div>

    <b
      ><span
        style="
          font-size: 12pt;
          font-family: 'Century Gothic', sans-serif;
          color: black;
        "
        ><br clear="all" style="page-break-before: always" /> </span
    ></b>

    <div class="WordSection2">
      <p class="MsoNormal">
        <b
          ><span
            style="
              font-size: 10pt;
              font-family: 'Century Gothic', sans-serif;
              color: #2e74b5;
            "
            >&nbsp;</span
          ></b
        >
      </p>
    </div>
  </body>
</html>
`;
var template = handlebars.compile(a);

var htmlToSend = template;
var mailOptions = {
  from: "tenants@aljaberqatar.com",
  to: [
    "gokeayomide.tolu@gmail.com",
    "tenants@aljaberqatar.com",
    "quality.surveillance@aljaberqatar.com",
    "ayomide.adegoke@adroitsolutionsltd.com",
  ],
  subject: "Maintenace Request---" + count,
  html: a,
  // attachments: [
  //   {
  //     // filename: 'mainr.txt',
  //           path: attatch
  //   },
  // ],
};
transporter.sendMail(mailOptions, function (error, response) {
  if (error) {
    console.log(error);
    // callback(error);
  }
});
};
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')
exports.createmaintenance = (req, res) => {
  // console.log(`i was called ${(req.params)}`)
  const makeid = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return "Ticket -" + text;
};
  if (req.body.operate === "create") {
    console.log('i was here'+JSON.stringify(req.body))
    const maintenance = new Maintenance({
      propertyName:req.body.propertyName,
      email: req.body.email,
      username: req.body.username,
      ticketnumber: "Ticket -"+moment().format('YYYYMMDD')+moment().format('HHmmss'),
      attachment: '',
      message: req.body.message,
      ticketstatus: req.body.ticketstatus,
      cost: 0,  
      nooflabors: 0,
      rop: req.body.rop,
    });

    maintenance.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });

    const maintenancecount = new MaintenanceCounter({
      count: req.body.count,
    });

    maintenancecount.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
  }
  if (req.body.sendmail === "yes") {
    let attatch=''
    console.log(`anexooooo ${attatch}`)
    let clientphone='-'
    let propertyid='001'


   
    // username, message, fileattached,count,clientname,ticketnumber,clientphone,propertyId,propertyunit
    sendmaintenancemail(
      req.body.username,
      req.body.message,
      attatch,
      req.body.count,
      req.body.username,
      req.body.count,
      clientphone,
    
      req.body.propertyName,
      req.body.rop,
      attatch
      

    );
    Maintenance.find()
    .then((maintenances) => {
      res.send(maintenances);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
  }

  if (req.body.operate === "edit") {
    

    
console.log("it was edit")
    const filter = { ticketnumber: req.body.ticketnumber};
    const update = {propertyName:req.body.propertyName,
      email: req.body.email,
      username: req.body.username,
      attachment: '',
      message: req.body.message,
      ticketstatus: req.body.ticketstatus,
      cost: req.body.cost,  
      nooflabors: req.body.nooflabors,
      rop: req.body.rop,};
    
    
    
    Maintenance.updateOne(filter, update, function(
      err,
      result
    ) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
    
  }
};

exports.getmaintenance = (req, res) => {
  Maintenance.find()
    .then((maintenances) => {
      res.send(maintenances);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};
