import jsonString from "./test4";
import jsonString2 from "./test5";
import jsonString3 from "./test6";

import rasterizeHTML from "rasterizehtml";

const generateTemplateImage = async (htmlEvent) => {
  try {
    const canvas = document.createElement("canvas");
    const response = await rasterizeHTML.drawHTML(htmlEvent, canvas);
    return response.image.currentSrc;
  } catch (error) {
    console.log(error)
  }
};

const templatesData = [
  {
    content: jsonString, image: await generateTemplateImage(`
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-33p33 {
    width: 199.98px !important;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #2f4d80;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #2f4d80;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><br />Lesson plan 3 | Anecdotas 1</span></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="592" style="background-color: #b3f2f2;width: 592px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #b3f2f2;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; color: #2f2873; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>LAS FAMILIAS Y<br />SU ENLANCE EN LA SOCIEDAD</strong></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="592" style="background-color: #1a214a;width: 592px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #1a214a;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:9px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 16px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;"><em>Unit 1 - Week 1 ( 3 or 5 days )</em></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="592" style="background-color: #b3f2f2;width: 592px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #b3f2f2;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h2 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 20px; font-weight: 400;"><strong>Content Objectives</strong></h2>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">1. Student will analyze a quote and summarize its main idea.</p>
<p style="line-height: 140%;">2. Student will discuss the importance of education in their lives and the impact it will have in thier future.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h2 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 20px; font-weight: 400;"><strong>Language Objectives</strong></h2>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">1. <strong>Reading: </strong>Students will read a quote and analyze its meaning. Students will read an informative article related to benefits of having an education.</p>
<p style="line-height: 140%;">2. <strong>Writing:</strong></p>
<p style="line-height: 140%;">Students will read a quote and analyze its meaning. Students will read an informative article related to benefits of having an education.</p>
<p style="line-height: 140%;">3. <strong>Speaking: </strong>Students will share responses with their classmates to discuss different points of view and opinions.</p>
<p style="line-height: 140%;">4 <strong>Listening: </strong></p>
<p style="line-height: 140%;">Students will share responses with their classmates to discuss different points of view and opinions.</p>
<p style="line-height: 140%;"> </p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="592" style="background-color: #e3cceb;width: 592px;padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e3cceb;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;"><em>Can-Do Statements</em></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="196" style="background-color: #e3cceb;width: 196px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 0px solid transparent;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e3cceb;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 0px solid transparent;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">I can read and understand the main idea and suppoting details of an article relatede to the power of education and its importance in Latin American cultures.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="196" style="background-color: #e3cceb;width: 196px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 0px solid transparent;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e3cceb;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 0px solid transparent;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">I can read and understand the main idea and suppoting details of an article relatede.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="192" style="background-color: #e3cceb;width: 192px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-33p33" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e3cceb;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">I can read and understand the main idea and suppoting details of an article relatede to the power of education and its importance in Latin American cultures.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="592" style="background-color: #b3f2f2;width: 592px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="background-color: #b3f2f2;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><strong>ACFTL STANDARDS<br /></strong></span></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h3 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><strong>Language Connects</strong></span></span></h3>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">The Following standards are met by: </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;"><strong>PW: </strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>MC:</strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>IL: </strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>IC:</strong> having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>IR: </strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"> </p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 4px solid #142033;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><strong>COMMON CORE STATE STANDARDS</strong></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><span><strong>Language Connects</strong></span></span></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">The Following standards are met by: </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;"><strong>PW: </strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>MC:</strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
<p style="line-height: 140%;"><strong>IL: </strong>having students write a reflection on a quote and answer reflection question related to the topic .</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #1b1b42;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

    ` ?? "")
  },
  {
    content: jsonString, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9
    ]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif
    ]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso
    ]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif
    ]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 720px) {
      .u-row {
        width: 700px !important;
        }
      .u-row .u-col {
        vertical-align: top;
        }
    
      .u-row .u-col-33p33 {
        width: 233.31px !important;
        }
    
      .u-row .u-col-100 {
        width: 700px !important;
        }
    }
    
    @media (max-width: 720px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
        }
      .u-row {
        width: 100% !important;
        }
      .u-col {
        width: 100% !important;
        }
      .u-col > div {
        margin: 0 auto;
        }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'
    ] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000;
    } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE
    ]><div class="ie-container"><![endif
    ]-->
      <!--[if mso
    ]><div class="mso-container"><![endif
    ]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif
    ]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="700" style="background-color: #152241;width: 700px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #152241;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Lesson plan 1| Anecdotas 2</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #182743; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><span><span>LAS SOCIEDADES<br />EN CONTACTO</span></span></span></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #10192f;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #10192f;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 16px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Unit 1 - Week 1 ( 3 or 5 days)</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><span><span><span><strong>Content Objectives</strong></span></span></span></span></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><strong>Language Objectives</strong></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  <strong>Reading</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  <strong>Writing</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">4.  <strong>Speaking</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">5.  <strong>Listening</strong>: Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #d0afd1;width: 692px;padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Can-Do Statements</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="225" style="background-color: #d0afd1;width: 225px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>ACFTL STANDARDS<br /><sup>Language Connects</sup></strong></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">The Following Standards are met by:</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"><strong>IR: </strong>identify<strong> </strong>the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>AIDP: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>MC: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>IC: </strong>identify the main idea and its supporting details</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #1e2a60;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Heading</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #152241;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)
    ]></td></tr></table><![endif
    ]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso
    ]></div><![endif
    ]-->
      <!--[if IE
    ]></div><![endif
    ]-->
    </body>
    
    </html>
    ` ?? "")
  }, {
    content: jsonString2, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 640px) {
      .u-row {
        width: 620px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-50 {
        width: 310px !important;
      }
    
      .u-row .u-col-100 {
        width: 620px !important;
      }
    
    }
    
    @media (max-width: 640px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000; } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color: #242c6b;width: 620px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #242c6b;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><br /><strong>Planificando juntos | Anécdotas 1</strong></span></span></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #b7eded;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #b7eded;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; color: #2d3782; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><strong>Lesson plan 1</strong></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #262350;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #262350;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word; font-family: inherit; font-size: 20px; font-weight: 400;"><span><span style="line-height: 30px;"><span style="line-height: 30px;"><span style="line-height: 30px;"><em>Matrials</em></span></span></span></span></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #f4e4f8;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 2px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #f4e4f8;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 2px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1. Anécdotas 1 textbook pages 3-6</p>
    <p style="line-height: 140%;">2. Assessment 1 page 10</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"> </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #ccf7e1;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 2px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #ccf7e1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 2px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>Sequence</strong><br /></span></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 19px; font-weight: 400;"><strong>Day One</strong></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 210%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 210%;"><em>Essential Questions:</em></p>
    <p style="line-height: 210%;"><em>1. ¿Qué rol tiene la familia en la sociedad?</em></p>
    <p style="line-height: 210%;"><em>2. ¿Qué cambios han tenido las familias en los últimos 40 años?</em></p>
    <p style="line-height: 210%;"><em>3. ¿Cómo daña la tecnología a la sociedad?</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="304" style="background-color: #bee8e5;width: 304px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>1. Teacher will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Warm-up:</p>
    <p style="line-height: 140%;">show the image on page 1. Ask students to share with a partner how the image relates to a family.</p>
    <p style="line-height: 140%;">Teacher may ask: <em>¿Qué ves en la imagen?</em></p>
    <p style="line-height: 140%;"><em>¿Qué conexión tiene la imagen con el título?</em></p>
    <p style="line-height: 140%;"> </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="306" style="background-color: #bee8e5;width: 306px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>1. Studens will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Warm-up:</p>
    <p style="line-height: 140%;">brainstorm and discuss the connection between the image and families.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="304" style="background-color: #bee8e5;width: 304px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>2. Teacher will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">ask for volunteers to share their response while guiding their conversation.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="306" style="background-color: #bee8e5;width: 306px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>2. Studens will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">share the response and listen to their classmates' connections to the topic.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color: #262350;width: 620px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #262350;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #262350;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>
    
    ` ?? "")
  }, {
    content: jsonString, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9
    ]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif
    ]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso
    ]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif
    ]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 720px) {
      .u-row {
        width: 700px !important;
        }
      .u-row .u-col {
        vertical-align: top;
        }
    
      .u-row .u-col-33p33 {
        width: 233.31px !important;
        }
    
      .u-row .u-col-100 {
        width: 700px !important;
        }
    }
    
    @media (max-width: 720px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
        }
      .u-row {
        width: 100% !important;
        }
      .u-col {
        width: 100% !important;
        }
      .u-col > div {
        margin: 0 auto;
        }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'
    ] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000;
    } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE
    ]><div class="ie-container"><![endif
    ]-->
      <!--[if mso
    ]><div class="mso-container"><![endif
    ]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif
    ]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="700" style="background-color: #152241;width: 700px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #152241;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Lesson plan 1| Anecdotas 2</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #182743; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><span><span>LAS SOCIEDADES<br />EN CONTACTO</span></span></span></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #10192f;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #10192f;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 16px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Unit 1 - Week 1 ( 3 or 5 days)</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><span><span><span><strong>Content Objectives</strong></span></span></span></span></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><strong>Language Objectives</strong></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  <strong>Reading</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  <strong>Writing</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">4.  <strong>Speaking</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">5.  <strong>Listening</strong>: Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #d0afd1;width: 692px;padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Can-Do Statements</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="225" style="background-color: #d0afd1;width: 225px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>ACFTL STANDARDS<br /><sup>Language Connects</sup></strong></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">The Following Standards are met by:</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"><strong>IR: </strong>identify<strong> </strong>the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>AIDP: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>MC: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>IC: </strong>identify the main idea and its supporting details</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #1e2a60;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Heading</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #152241;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)
    ]></td></tr></table><![endif
    ]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso
    ]></div><![endif
    ]-->
      <!--[if IE
    ]></div><![endif
    ]-->
    </body>
    
    </html>
    ` ?? "")
  }, {
    content: jsonString, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9
    ]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif
    ]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso
    ]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif
    ]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 720px) {
      .u-row {
        width: 700px !important;
        }
      .u-row .u-col {
        vertical-align: top;
        }
    
      .u-row .u-col-33p33 {
        width: 233.31px !important;
        }
    
      .u-row .u-col-100 {
        width: 700px !important;
        }
    }
    
    @media (max-width: 720px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
        }
      .u-row {
        width: 100% !important;
        }
      .u-col {
        width: 100% !important;
        }
      .u-col > div {
        margin: 0 auto;
        }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'
    ] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000;
    } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE
    ]><div class="ie-container"><![endif
    ]-->
      <!--[if mso
    ]><div class="mso-container"><![endif
    ]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif
    ]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="700" style="background-color: #152241;width: 700px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #152241;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Lesson plan 1| Anecdotas 2</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #182743; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><span><span>LAS SOCIEDADES<br />EN CONTACTO</span></span></span></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #10192f;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #10192f;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 16px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Unit 1 - Week 1 ( 3 or 5 days)</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><span><span><span><strong>Content Objectives</strong></span></span></span></span></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><strong>Language Objectives</strong></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  <strong>Reading</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  <strong>Writing</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">4.  <strong>Speaking</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">5.  <strong>Listening</strong>: Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #d0afd1;width: 692px;padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Can-Do Statements</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="225" style="background-color: #d0afd1;width: 225px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>ACFTL STANDARDS<br /><sup>Language Connects</sup></strong></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">The Following Standards are met by:</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"><strong>IR: </strong>identify<strong> </strong>the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>AIDP: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>MC: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>IC: </strong>identify the main idea and its supporting details</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #1e2a60;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Heading</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #152241;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)
    ]></td></tr></table><![endif
    ]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso
    ]></div><![endif
    ]-->
      <!--[if IE
    ]></div><![endif
    ]-->
    </body>
    
    </html>
    ` ?? "")
  }, {
    content: jsonString, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9
    ]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif
    ]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso
    ]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif
    ]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 720px) {
      .u-row {
        width: 700px !important;
        }
      .u-row .u-col {
        vertical-align: top;
        }
    
      .u-row .u-col-33p33 {
        width: 233.31px !important;
        }
    
      .u-row .u-col-100 {
        width: 700px !important;
        }
    }
    
    @media (max-width: 720px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
        }
      .u-row {
        width: 100% !important;
        }
      .u-col {
        width: 100% !important;
        }
      .u-col > div {
        margin: 0 auto;
        }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'
    ] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000;
    } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE
    ]><div class="ie-container"><![endif
    ]-->
      <!--[if mso
    ]><div class="mso-container"><![endif
    ]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif
    ]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="700" style="background-color: #152241;width: 700px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #152241;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Lesson plan 1| Anecdotas 2</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; color: #182743; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><span><span>LAS SOCIEDADES<br />EN CONTACTO</span></span></span></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #10192f;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #10192f;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 16px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Unit 1 - Week 1 ( 3 or 5 days)</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><span><span><span><span><strong>Content Objectives</strong></span></span></span></span></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h3 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;"><span><strong>Language Objectives</strong></span></h3>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">1.  <strong>Reading</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">2.  <strong>Writing</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">4.  <strong>Speaking</strong>: Students will be introduced to the role they have in society and </p>
    <p style="line-height: 140%;">5.  <strong>Listening</strong>: Students will be introduced to the role they have in society and </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #d0afd1;width: 692px;padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 4px solid #000000;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>Can-Do Statements</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="225" style="background-color: #d0afd1;width: 225px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
    <!--[if (mso)|(IE)
    ]><td align="center" width="229" style="background-color: #d0afd1;width: 229px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 233.33px;display: table-cell;vertical-align: top;">
      <div style="background-color: #d0afd1;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 4px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 700px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)
    ]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px;"><tr style="background-color: transparent;"><![endif
    ]-->
          
    <!--[if (mso)|(IE)
    ]><td align="center" width="692" style="background-color: #79a0ac;width: 692px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif
    ]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 700px;display: table-cell;vertical-align: top;">
      <div style="background-color: #79a0ac;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)
    ]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif
    ]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><strong>ACFTL STANDARDS<br /><sup>Language Connects</sup></strong></span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">The Following Standards are met by:</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;"><strong>IR: </strong>identify<strong> </strong>the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>AIDP: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>MC: </strong>identify the main idea and its supporting details</p>
    <p style="line-height: 140%;"><strong>IC: </strong>identify the main idea and its supporting details</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #1e2a60;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso
    ]><table width="100%"><tr><td><![endif
    ]-->
        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span>Heading</span></h1>
      <!--[if mso
    ]></td></tr></table><![endif
    ]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">This is a new Text block. Change the text.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 40px solid #152241;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
              <span>&#160;</span>
            </td>
          </tr>
        </tbody>
      </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)
    ]><!--></div><!--<![endif
    ]-->
      </div>
    </div>
    <!--[if (mso)|(IE)
    ]></td><![endif
    ]-->
          <!--[if (mso)|(IE)
    ]></tr></table></td></tr></table><![endif
    ]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)
    ]></td></tr></table><![endif
    ]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso
    ]></div><![endif
    ]-->
      <!--[if IE
    ]></div><![endif
    ]-->
    </body>
    
    </html>
    ` ?? "")
  }, {
    content: jsonString3, image: await generateTemplateImage(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 640px) {
      .u-row {
        width: 620px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-50 {
        width: 310px !important;
      }
    
      .u-row .u-col-100 {
        width: 620px !important;
      }
    
    }
    
    @media (max-width: 640px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000; } </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color: #242c6b;width: 620px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #242c6b;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><span><span><br /><strong>Planificando juntos | Anécdotas 1</strong></span></span></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="304" style="background-color: #bee8e5;width: 304px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 18px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>3. Teacher will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">facilitate popcorn reading for pages 3-5 in the textbook. Ask questions in between paragraphs to check for understanding.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="306" style="background-color: #bee8e5;width: 306px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 2px solid #0e0b21;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>3. Studens will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">take torns reading paragraphs out loud and answer comprehension questions.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="304" style="background-color: #bee8e5;width: 304px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>4. Teacher will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">explain questions on Page 6. Walk around groups asking questions and provide support for students.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="306" style="background-color: #bee8e5;width: 306px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>4. Studens will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">answer the questions in written form. Once completed, they will discuss their answers with a partner. </p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="304" style="background-color: #bee8e5;width: 304px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 2px solid #0e0b21;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>5. Teacher will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">assign page 10 on assessment for students to complete on their own, A timer can be added.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="306" style="background-color: #bee8e5;width: 306px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 310px;display: table-cell;vertical-align: top;">
      <div style="background-color: #bee8e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 17px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;"><em>5. Studens will...</em></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 15px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">complete assessment on page 10 individually.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color: #262350;width: 620px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #262350;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 style="margin: 0px; color: #ffffff; line-height: 150%; text-align: center; word-wrap: break-word; font-family: inherit; font-size: 20px; font-weight: 400;"><span><span><span><span><span><span style="line-height: 30px;"><span style="line-height: 30px;"><span style="line-height: 30px;"><em>Exit Ticket</em></span></span></span></span></span></span></span></span></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #b5eed0;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #b5eed0;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">To check for understanding of the lesson, have students complete this exits slip in one of the various form: write their answer on a sheet of paper and turn it in to you, share their response with a classmate, or share their response with the class.</p>
    <p style="line-height: 140%;"> </p>
    <p style="line-height: 140%;">¿Qué es una tradición que ha cambiado con el transcurso del tiempo y las familias?</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px 50px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 620px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 50px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="612" style="background-color: #242c6b;width: 612px;padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 620px;display: table-cell;vertical-align: top;">
      <div style="background-color: #242c6b;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 4px solid #000000;border-right: 4px solid #000000;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 12px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;">All rights reserved. Reproduction is prohibited total<br />or partial of this work, by any means or procedure, including <br />reprography and computer processing photocopying, or recording,<br />without the prior written authorization of <br />@One Way Education, LLC.</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>
    
    ` ?? "")
  },
]

export { templatesData }