export const prueba = `<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='utf-8'>
  <title>Tu Respaldo Seguro</title>

  <!-- CSS
  ================================================== -->
  <link rel='preconnect' href='https://fonts.gstatic.com'>
  <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap' rel='stylesheet'>

  <style type='text/css'>
    .primary-color {
      color: #003F94;
    }

    .primary-b-color {
      background-color: #003F94;
    }

    .secondary-color {
      color: #95BE23;
    }

    .secondary-b-color {
      background-color: #95BE23;
    }

    .tertiary-color {
      color: #bddaf7;
    }

    .tertiary-b-color {
      background-color: #bddaf7;
    }

    .quaternary-color {
      color: #5786B8;
    }

    .quaternary-b-color {
      background-color: #5786B8;
    }

    header {
      background: #003F94;
      color: #FFFFFF;
      padding: 10px 20px;
      overflow: hidden;
    }

    header h1.logo {
      display: block;
      float: left;
      margin: 0;
      margin-right: 20px;
      padding: 0;
    }

    header h1.logo img {
      max-height: 70px;
    }

    header .left {
      display: block;
      float: left;
      padding: 11px 0;
    }

    header p {
      line-height: 1.2;
      font-weight: bold;
    }

    header h2 {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 0;
      text-align: center;
      line-height: 30px;
      padding: 5px 0;
    }

    header h3 {
      font-size: 18px;
      margin-bottom: 0;
      line-height: 20px;
    }

    section.form {
      background-color: #FFFFFF;
      padding: 20px 10px 0;
    }

    section.form h3 {
      background-color: rgba(0, 0, 0, 0.1);
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 20px;
      text-align: center;
      padding: 5px;
      font-weight: 600;
    }

    section.form h3 span {
      color: #000000;
      display: block;
      font-size: 13px;
      line-height: 18px;
    }

    section.form h4 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
    }

    section.form p {
      line-height: 16px;
    }

    section.form .sections {
      background-color: #FFFFFF;
    }

    section.form .sections:after {
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    p.justify {
      font-size: 12px;
      text-align: justify;
      line-height: 16px;
      font-weight: 600;
    }

    .form fieldset {
      border: none;
      padding: 0;
      margin-bottom: 10px;
    }

    .form fieldset label {
      color: #002060;
      display: block;
      font-size: 14px;
      font-weight: 700;
      line-height: 15px;
      margin-bottom: 4px;
    }

    .form fieldset label span.req {
      color: #DF020A;
      display: inline-block;
      padding-left: 5px;
    }

    .form fieldset label span {
      font-size: 13px;
    }

    .form fieldset .field {
      background-color: #F1F1F1;
      border: none;
      border-radius: 10px;
      font-size: 13px;
      height: 30px;
      overflow: hidden;
      line-height: 30px;
      padding: 0px 10px;
      width: 100%;
    }

    .form fieldset .field.h15 {
      height: 15px;
      line-height: 15px;
    }

    /* Responsive
      ============================================================ */
    body.juriscoop {
      background-color: #f1f1f1;
    }

    .container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      max-width: 800px;
    }

    .row .clear {
      display: block;
      width: 100%;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .row [class*='col-'] {
      display: block;
      float: left;
    }

    .col-1 {
      width: calc(((100% / 12) * 1));
    }

    /*.col-1.add-001px {
      width: calc(( (100% / 12) * 1 ) + 0.01px);
    }*/

    .col-2 {
      width: calc(((100% / 12) * 2));
    }

    /*.col-2.add-001px {
      width: calc(( (100% / 12) * 2 ) + 0.01px);
    }*/

    .col-3 {
      width: 25%;
    }

    /*.col-3.add-001px {
      width: calc(25% + 0.01px);
    }*/

    .col-4 {
      width: calc((100% / 12) * 4);
    }

    /*.col-4.add-001px {
      width: calc(((100% / 12) * 4 ) + 0.01px);
    }*/

    /*.col-4.add-002px {
      width: calc(((100% / 12) * 4 ) + 0.02px);
    }*/

    .col-5 {
      width: calc((100% / 12) * 5);
    }

    /*.col-5.add-001px {
      width: calc(( (100% / 12) * 5 ) + 0.01px + 0.01px);
    }*/

    .col-6 {
      width: 50%;
    }

    /*.col-6.add-001px {
      width: calc(50% + 0.01px);
    }*/

    .col-7 {
      width: calc((100% / 12)*7);
    }

    /*.col-7.add-001px {
      width: calc((100% / 12)*7 + 0.01px);
    }*/

    .col-8 {
      width: 66.66666667%;
    }

    /*.col-8.add-001px {
      width: calc(66.66666667% + 0.01px);
    }*/

    .col-9 {
      width: calc((100% / 12)*9);
    }

    /*.col-9.add-001px {
      width: calc((100% / 12)*9 + 0.01px);
    }*/

    .col-10 {
      width: calc((100% / 12)*10);
    }

    /*.col-10.add-001px {
      width: calc((100% / 12)*10 + 0.01px);
    }*/

    .col-11 {
      width: calc((100% / 12)*11);
    }

    /*.col-11.add-001px {
      width: calc((100% / 12)*11 + 0.01px);
    }*/

    .col-12 {
      width: 100%;
    }

    .col-28 {
      width: 28%;
    }

    .col-18 {
      width: 18%;
    }

    /*.col-18.add-004px {
      width: calc(18% + 0.04px);
    }*/

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

    html,
    body {
      height: 100%;
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    #root,
    #__next {
      isolation: isolate;
    }

    /* General Classes
      ============================================================ */
    a {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-touch-callout: none;
    }

    a:visited,
    a:hover,
    a:active,
    a:focus {
      color: inherit;
      text-decoration: none !important;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-touch-callout: none;
      outline: none;
    }

    .clearfix:after,
    html:after {
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .contcenter,
    .contcenter * {
      text-align: center !important;
    }

    .contleft,
    .contleft * {
      text-align: left !important;
    }

    .contright,
    .contright * {
      text-align: right !important;
    }

    .right {
      float: right !important;
    }

    .mb0 {
      margin-bottom: 0 !important;
    }

    .mb20 {
      margin-bottom: 20px !important;
    }

    .mt20 {
      margin-top: 20px !important;
    }

    .mb40 {
      margin-bottom: 40px !important;
    }

    .pt20 {
      padding-top: 20px !important;
    }

    /* #Site Styles
      ================================================== */
    body {
      background-color: #FFFFFF;
      overflow-x: hidden;
      margin: 0;
      font-size: 13px;
      font-family: 'Nunito', sans-serif;
      color: #111111;
      padding-bottom: 20px;
    }

    .container {
      width: 800px !important;
    }

    .p5 {
      margin-left: 0px;
      margin-right: 0px;
    }

    .p5 [class*='col-'] {
      padding-left: 5px;
      padding-right: 5px;
    }

    .p5 .row {
      margin-left: -5px;
      margin-right: -5px;
    }

    .p0 {
      margin-left: 0px;
      margin-right: 0px;
    }

    .p0 [class*='col-'] {
      padding-left: 0px;
      padding-right: 0px;
    }

    .p0 .row {
      margin-left: 0px;
      margin-right: 0px;
    }

    .row-field {
      border: 1px solid #000;
    }

    .border-b-0 {
      border-bottom-width: 0px !important;
    }

    .border-t-0 {
      border-top-width: 0px !important;
    }

    .border-r-0 {
      border-right-width: 0px !important;
    }

    .row-field .col-field .border-field {
      margin-bottom: 0;
      border: 1px solid #000;
    }

    .row-field .col-field .border-field label {
      width: 100%;
      padding: 5px 10px;
      background-color: #bddaf7;
      border-bottom: 2px solid #000;
      color: #000;
      margin: 0;
      border-radius: 0;
      text-align: center;
    }

    .row-field .col-field .border-field label.text-left {
      text-align: left;
    }

    .row-field .col-field .border-field label.text-two-line {
      line-height: 30px !important;
    }

    .row-field .col-field .border-field label.text-three-line {
      line-height: 45px !important;
    }

    .row-field .col-field .border-field .field {
      color: #000;
      background-color: #fff;
      border-radius: 0;
    }

    .row-field .col-field .border-field h3 {
      margin-bottom: 0;
      background: #003F94;
      color: #fff;
      font-size: 16px;
      text-align: left;
      padding: 5px 10px;
      line-height: 1;
    }

    .sections.sec1 .row-field .col-field .border-field label {
      background-color: #3fb2e3;
      color: #fff;
    }

    .row-field .col-field p.border-field {
      padding: 5px 10PX;
    }

    .sections.sec1 {
      padding-bottom: 20px;
    }

    .text-center {
      text-align: center;
    }

    span.low-bar,
    span.low-bar-2,
    span.low-bar-3 {
      min-width: 14px;
      border-bottom: 1px solid #000;
      display: inline-block;
      line-height: 1;
      position: relative;
      height: 12px;
      text-align: center;
      overflow: hidden;
      font-weight: bold;
    }

    span.cube {
      min-width: 12px;
      border: 1px solid #000;
      display: inline-block;
      line-height: 1;
      position: relative;
      height: 12px;
      text-align: center;
      overflow: hidden;
      font-weight: bold;
    }

    .sec9,
    .sec12,
    .sec18 {
      margin-bottom: 60px;
    }

    .sec20 {
      margin-bottom: 10px;
    }

    .margin-b-15 {
      margin-bottom: 15px !important;
    }

    .padding-field {
      padding: 5px 10px;
    }

    .min-height-60 {
      min-height: 60px;
    }

    .col-5.logo-1 {
      padding: 13px 0;
    }

    .col-4.logo-2 {
      padding: 34px 0 0;
    }

    span.low-bar-2 {
      min-width: 94px;
    }

    span.low-bar-3 {
      min-width: 250px;
    }

    .form fieldset .field.field-two-line {
      height: 57px;
      line-height: 19px;
      padding-top: 2px;
    }

    .row-field .col-field .border-field label.border-b-0.label-1 {
      line-height: 20px;
    }

    .row-field .col-field .border-field label.label-2 {
      line-height: 22px;
    }

    p.border-field.p-two-line {
      line-height: 32px;
    }

    .form fieldset p.field {
      overflow: auto !important;
      min-height: 30px !important;
      height: auto !important;
      line-height: 20px;
      padding: 5px 10px;
    }

    .row-field .col-field .border-field .field.field-two-line-center {
      line-height: 50px;
      height: auto;
    }

    .row-field .col-field .border-field .field.field-line-center {
      line-height: 170px;
      height: auto;
    }

    span.spacie {
      display: inline-block;
      padding: 2px 3px;
    }
  </style>

  <!--[if lt IE 9]>
    <script src='https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js'></script>
    <script src='https://oss.maxcdn.com/respond/1.4.2/respond.min.js'></script>
  <![endif]-->

</head>

<body class='juriscoop'>
  <div class='container'>
    <div class='row'>
      <div class='col-12'>
        <header>
          <div class='row'>
            <div class='col-5'>
              <h1 class='logo'>
                <a href='#'><img
                    src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI2N3B4IiBoZWlnaHQ9IjEzOXB4IiB2aWV3Qm94PSIwIDAgMjY3IDEzOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8dGl0bGU+Qml0bWFwPC90aXRsZT4NCiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJGb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzEuMDAwMDAwLCAtNDQuMDAwMDAwKSI+DQogICAgICAgICAgICA8aW1hZ2UgaWQ9IkJpdG1hcCIgeD0iMTIyIiB5PSIzNiIgd2lkdGg9IjI4MS41ODg0NDgiIGhlaWdodD0iMTU2IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWZRQUFBRVZDQVlBQUFBV3poZXRBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUI5S0FEQUFRQUFBQUJBQUFCRlFBQUFBQmkyaUR2QUFCQUFFbEVRVlI0QWV5OUMzUWsyVmttR0s5ODZGRWx0ZDAycnpGS3MyYzlabG1PMVBnQlRRUEtPb3pOYWR0TlNUQm1qbGxBV1dNRGJZUHBMTENOWVhaUFplOXlCbSszUGFYYVlXd1A5cml5R0I5OHhoNWJhdHJ0aHZZd1NobnNIaHQ3V3JWejJHRmZPRFVNN0F4dGQwbFZKU21WR1JteDMzY2piaW95bFJuNWlraWxxdTVmZFJXUjkvSGYvLzV4Ny8zdi85K1hwaWxRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhJaUZBM29zV0U4NVV0ZDFGMUNFMmJpS29ldDZpYmlSRC9OZ1htMUJ4bXNiMk1FVE9ETUlvbXNIWmVBc3R3dFFmb29EaWdPS0E0b0RpZ04zSEFjZ0ZFdHdzWUZrR0RMSWhtVWk0L1h6Qkw1Q0NNNUNQN2hVWE1VQnhRSEZBY1dCMDhNQjQvU1FxaWhWSEZBY1VCeFFIRkFjVUJ6b3hBRWwwRHR4UnZrckRpZ09LQTRvRGlnT25DSU9LSUYraWo2V0lsVnhRSEZBY1VCeFFIR2dFd2VVUU8vRUdlV3ZPS0E0b0RpZ09LQTRjSW80b0FUNktmcFlpbFRGQWNVQnhRSEZBY1dCVGh5d09nWGM1ZjViWGNxZlFmaGNoemk3OE8rV3ZrTlM1YTA0b0RpZ09LQTRvRGd3R0FlVVFHL0ROK3pWenJmeGJuaHhheGgrWEdwNE5MOXNJWDIyMlV2OVVoeFFIRkFjVUJ4UUhJaVhBOHJrSGk5L0ZYYkZBY1VCeFFIRkFjV0JrWEJBQ2ZTUnNGbGxvamlnT0tBNG9EaWdPQkF2QjVSQWo1ZS9DcnZpZ09LQTRvRGlnT0xBU0RpZ0JQcEkyS3d5VVJ4UUhGQWNVQnhRSElpWEEwcWd4OHRmaFYxeFFIRkFjVUJ4UUhGZ0pCeFFBbjBrYkZhWktBNG9EaWdPS0E0b0RzVExBU1hRNCtXdndxNDRvRGlnT0tBNG9EZ3dFZzRvZ1Q0U05xdE1GQWNVQnhRSEZBY1VCK0xsZ0JMbzhmSlhZVmNjVUJ4UUhGQWNVQndZQ1FlVVFCOEptMVVtaWdPS0E0b0RpZ09LQS9GeVFBbjBlUG1yc0NzT0tBNG9EaWdPS0E2TWhBTktvSStFelNvVHhRSEZBY1VCeFFIRmdYZzVvQVI2dlB4VjJCVUhGQWNVQnhRSEZBZEd3Z0VsMEVmQzVwRm1raGxwYmlvenhRSEZBY1VCeFlHeDRJQVM2Q2Y3R2NwaDJlT2ExcVd3OEE1aDJRNyt5bHR4UUhGQWNVQng0QTdtZ0JMb0ovaHhjVzk2R2RudmhwQVFlaTk3YXpvTUFITHdtMnYxRC96ZUNyeXJWOFVCeFFIRkFjV0JPNGdEU3FDZi9NY3NoWkN3NkF2cGtDaGVFT0xONG0yMVMwUWwwTHN3U0FVckRpZ09LQTZjVmc0b2dYN3lYMjY5Q3dsWHV3bDFoQzhBUndsdUpnVFhwbThSQ0ltaWdoUUhGQWNVQnhRSFRpc0hsRUEvK1M5SGdSNW1kaWVGRk9ycmNGbitrSURmR2JnQ2ZwZmc1dUhDb0JnV3FNSVVCeFFIRkFjVUJ4UUg3am9PVUlqQ2RZSlN2d3dCb253blpCMzhTL0F2ZHdocjU2MU03ZjErRkJWZmNVQnhRSEhnbEhGQWFlaGo4TUZnQ2w4RkdadDlrTEtJdUdHTDMxcFI1Vm85MUcvRkFjVUJ4UUhGZ1R1TEEwcWdqOC8zWEFJcDJ6R1Fjd0VEQnFXaHg4QlloVkp4UUhGQWNXQ2NPS0FFK3BoOERRamRIWkJDb2Q1dFByMGZpaW5NaS8wa1VIRVZCeFFIRkFjVUIwNG5CNVJBSDZQdjVtdlNHWkIwZlVpeU9DaFlWc0o4U0M2cTVJb0RpZ09LQTZlSUEwcWdqOW5IZ2hEZWdWc0FXWS9DRGFLdFA0RjBDOEN4UG1aRlUrUW9EaWdPS0E0b0RzVElBU1hRWTJUdU1LZ2hrQXRJbjRHN0NIY2RMZ3dvK0svQjNZZDBTM0Rsc01ncVRIRkFjVUJ4UUhIZ3p1T0FmdWNWNmM0c0VmYWl6YUprMU54Ym9hd0VlQ3RMMUcvRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZBY1VCeFFIRkFjVUJ4UUhGQWNVQnhRSEZnYnVWQTJwUjNOMzY1WHNvZCs2cFp4WnVPeE96RlNzdFlxZnRpalp0MitYaThybHlEOGxWbEFFNThJNjE1M0thTnFWOWNQa1Z4UUZScUdTS0E0b0RkeUVIcktqTC9KdWZmR3BoZjJKNjFYSnRvUGJRNjI3N2JHb2NUcmhPVnhLc1FCUmRjN2FRWkVjM3NEV3JWdDk2L0tmT2JYVkZFRUdFUnovemIxWnZXWWtGVzlCTWhGNlpyRHFKQ3hDb0hlMEV0UG5xK0wrbGR6QXEwUmlPRml4Zk15NUdDQU5EWXg3VDlhcjJXei94bzltd21MMkUvZHEvM2xnNlRKbExLT05DelREbmE3cWhwWTJFbHZUTFpGZ1Rtb0h5LytLVFg5RVNqcnRwT0hhcHFsV0xINDVRd1AvbVo1NVozVGRUQzViUFV4dDVPK1M1RDRZcjMrVFRhT0VmL1NXelpaeldwMXZXSExlc0d4YnFrSWs2OU5xUjFLRldLanI5cmlhTUF0cEZHZUhGVG5GRzZmOXJhMyt5YWhqR3NSMFc3ZHB2NjdleVVQL2Z2L3hBZHBUMFByeTJrWm5XckJ6cmdjTi9nZXFBNXRZQ0RwdGdXd2ltWTI5VzEvU2RoRmJmcW1oYU9jbzYzelp6NWFrNE1BQUgya3ZhQVJESkpQdUo1T3czazZsRncwMXBGanRmSjRFL3Bnelc2b0hHUmM5NkY0SGUyb0dicnNhTFNRVG9scUd0ZlBaLzExek5mY0xWOTlmTjZuOVpMeTR2Nzhqd0tKOFU1amZNNlVYYlpCZEJzWnZTUUl1bW16YWV3UjdCSzJEZEYwTG9MZ1Fac3R4STNnVHNjb0xRakNzWWN2eTlEb0ZML0xhK2R6eXdSNS9jMnNhc2swem5kZDNNZjBQY3AzNzBnWFNVejNTTndOY3owS25Cb1d3VlUxdDByTlRpdmpWeDZTMVBmL1g2aEhPNCtyRTNQbERzTWR1TzBTak12NUdjV0dST0JBZTVTMTd5TitrSmdobnNkUkZBQWRJRCtIVUl1VmltbG52eXozZnIxbjdwVE9WZy9ZUExQMUxzSVgxc1VmSnJ6Mlp4c3RDY3B0dHorYlUveTY0dXY2WVVXMlk5SXI2UlBMdWdhNjdnbWF6SE1tbHIrMjMrVmh5djl2UTlKTHBJbnJldDJVekZNQzhSbVlNRzU5VWtEL1ZSVCtUOTFzV0EzSHZuWDdacGdpeUhIS0RJMzE2b3B2MzAwLzhlTGNIZHRKeEthYkphUmIwWmpXSWg4MWRQeFlGMkhJaGNvSXRNWERZYk5xUFc1dE9PaE1IOWJBeXRhK2d2b0ZHZXIrdXA4eFBHZDF6OTVTZS9jTTJ4SzZzZlhINzlXR2xkZzVjeXZwVHZlSEtqY0dCQ21Hdm16RUM1NkJ4TzFEUlRkK2JQMWhKWGYvMHp6K2JyOWR2NTk3LzVkYVdCOEkwNGtRMzZxV1ZDU00zVTljUjVONjJmLzZVbi9uUTE0ZFJXZDdTZDFiZ0doMkhGM0VrbkN6WFF4YUhNN1lTVHcwc0pUc0dZY2NER1lCcXc2QmhUaTI1aTZ0SXZyVzl0SjkzNnVsV3JGOGZONGhNRjYzQU9SdGJISTUreitOMXF0Y25BYnc0dUNKdkJILzU3eVg5UytXSS9qVEdzdWtESzU4bFFqeGdFZWd3b1E0b29ORjdSdHFpdFd0b3RZM3JGVEV5dTVENzcxV3ZwMnEyQ01vMGRaOTdQcjMxbFlUK3BGWiszM1BrVVZCQ3BsWFEzVlIvSEZmU3A2L3A4SlpYZWVQZmFNMWNlWDM1OVBoZzJ5THZPZ2FGdjZSZ2tmUzlweEpDVDh0UHc2czl0YzNyR05KMUxyajZULzZXMUx4VCsyZktQclBhQ0o0bzRQLzNVY3d1d1NDeWF0THU0ZGMwMTNaV0gxNTVHSFg2d0hBVitoU05hRHVpd0ZnbnRIM1gwbG1YTUdXN2lFZE9xUC9KelQxN2ZkR3luOFBIbCswclI1aGcvTmdqdUJlU1NoY3ZBOFoxdXNBRS9FZ0tFWmNkN2Jmdzk1b2Q4R2JnTlY0WXJ3VzNScVVPendJVStJRWJwNjJubnJTWTYwaWJOV0lKTzhSMzdvRGdRbFlJb1FYTTN6SHJDdkkrNWVtcnN0QXdnOXhYWE1KZnluLzUzaGRXZi9JSFZRTElZWGtXbU1lQ05IdVU3bnRySTNUYnFxM3ZHMUl3TC9UcWhWY0VyU2pRZnBFbGJhSW5TczhNVGNWMU1yZFExVzZ1YWgvZ090cGJDOTRENS9wRmYvMHdwTzdIclpnc1h6dTEwU0IzcUxZUzVpQUdUL3hCMUpDd1QxaG1kOUtJY21Ea0JKRVQ5NFc5ODBabTZZVjNPcjMxNWFVZjdtNlZSYU91VHptVGVjR0R4QUNVV0JMcURCUXU3NmFrQ2Z1YmdUZ1hFOWEzR3JmQXB4N09paUNrekRqcmh1TDZtN3JXZlJkMHdOdDcyNU5jMnB5dlZ3dXFiN3krTkcvMlNIbC96enVJMzNTTGNTY0ljTXFkcjBBSDZlS3gxU1RxbHlZTVRJUkN2SkJMelo1NWdselEwQ1hQcE9lU1RIWE1hUStVRW5nUmJ4MHd2T2tSZFM4N3NKYzVjL3JuUFByZk91V0l2Tk1LL2JMeGVBNDRRYVh5b0h2NkRaM01IZXZKcVRUZUZNUGMwOHVHcVFCSWpOZ3JBQTlQUXF0Qnl1WkN1WWlTMWJ5WW41Ly82M2pPbDNOVVkrQjR4aXppZ1NhTmlKdnh4RFUzeFdIeUpYRXh0ejV4WWRGTXZLLy8wVXhzTEVXZmJoTzdodFdjekVBNHJRVSt4WHNGTUx1WFcxcUt2dThHTTRub1hiV080K2hVWGFSTHZvUDJSaXpxQzFTc1llSG5PMVd1WWQzZXdTQlgxQnVWT291L1QzZlRpWHVyc1JtejlqeXhFSDA4SXlBeGNIbTRkamozbUJ0d2x1TVUrMEl3eUtxMEQ1K0V1d3owSGtuZmdpbkJMY0tlelhjVEl2VmhhbTQ2cXprNCtUaUIrZG5qN1dCaDNnS3lvbVR1NnJSMWFWYTF1VnFCclZiQWkrd0JDQnFaTDNUeXZKeUJjNGhEcUxZVWtYYUxzTEgvTVBHakpPdlFuQkViTzFoTlhIV2NLOUNVaHdMQ3N6NFYyVGd2SElDQTZOQWhDZEdpMGtsU3dHdjVHWWtMYnRhYmdKclE5ZkplS2FjenI5OTViS295bFVPZGlRZzMxUi9QckR6WGltckEwMk5ZQjZzK0JYMys0Q05LWVNlbnAwcyt2UFJPYlVKL1VuSnloMzlZcTJQSndNMkZvdHhJbStZY0ZuOGJNWkhJMlA4Z25VbWw2NDRBUTZxalBHbDJQMExwSXpoc1lzTzFiRU9ZSkRXdEtzTVVURmtNTWNObi9HSWt6NWJkKzdndExQYUtQTkJvRW54VGlXMEQ4ZFRnS1J3ckowd2d6SUhvRmJnM3VCc3JHZ1VrTzd3ckFnWGlscmpBZWh2R1pJcGtqWFFlVkhxdFJhYm9DY0dVc05iOFVYQUtDaDBLbnpwRnZvTUd4TTJZajRyTUdJOEFod3NYb1dHaFdYS1hxNFdNYzVtSzQxbndpTVRVU29lNlZvcmUvTEwwUS9QNEFnQ3ZYZTNVaUI1U3ptNW1UYzdQVlJHclZBVzQ2cmd4UFVxRERrZStod0hEeUV2ejFPaTB2OXRFNzhtY1UwRi9IR29ZRGc1MllKWGpPY3JpYU5iODM4NkwxMER6YUJNcTYwQ2FvNFNYSzNVSWY2d09yZFFKbGxNNFFBeXRQZ0RPYzljVEY0SS9sRWd2alVBRFdIenFQSDZ3N3RxaEREdndJcG1QT09LbkpFdmZtQzQ4SS8zQ2dlWkIwODZqUnlGUFRxbkFVQk9TeDRlS1BidVlpekM1U1ZLMjdVQ0pGSGpNeXpuK1QzOUo1MmZGN2UzME8reDMyUDdKL1l0MWduYU1UOVozMVczd25lSWlGd0t3bi9HWWVKdlpCeEVWQUhaelJuZlRhaGFlK3VDbzhSdkFIZ281YUxOdmUxK0VveE9kSGtPMm9zemlQREsraW5GSnpqN3g5anJwQXcrUVhpMEIzMFJNSmh3Ymhva0Z3YTR0MC9FM25RTFBUSFlyYW1uRENYSVVHUUNGZ3VRbHR5azVobEdzS1RWSVhuU3UwSjNTdUJuQ3h3UWdoRGtGT2N6c2JFVHMvZG9KaW01VkRvWktrUWN3VExDamxBY3pCRURqejAyWjZNSTBSclIrVkJobGhreHllTHNzR1I1QmF1ZERNdTN3TmxyalZTVUhMcHd2dG1ZNEwvRHpIN3FTRFE1a2J3aWtrWDZRdW90UENTbTUyTEQ0UC9ZNkdORGZoUnh6eThxaVQ0emR4dEgyekxnUWVoU0I1enU5RU03c2NmSENRa0FLUDZQZzlPQmliZ015Y2NnNVJYbmZ4SDMzNjMwRmdkUWZtRFNxRkkrNVdZRDZ5VTJWblNaTW42eEJwcEVCbXZRQUYya1FkV2xJMUplb1IzK25IK2xFRGNYVURoTUdacUZkSmtaN3BQQ2RTZ3ljMWxJM3hKWGZJSXhkVE9McCtCcHA2dE9aM0k1bGVPdFNUTTF6TllHQWJWZHBHbWJBZVFVZGRTOWZKYkhQdXZXc2JPZEoyRWtCYVpIMG5mVUZIZXRnZXBUc0orbzduZVVTdjZHLzh0c295MkFFbjJ5L1ROOW91NmhEN213VHFoYVVmd2dKMUtPb1llaGZFd2lBWTVaZFRNMVhVRHpyNElJem5JYUMrb2g0Nk1ML2ZTaHpDK25NSWdZLytEWG15WHJNTzZYcmlrWWVmL0hKc2lnWDZwbG00QWx3WlJGR0xwY0M3RzJBR2hWeUJvMW0rQkplN0d3cmRXc2JqUFdacmpFRitVeU9DYXpTU0VCeENBMEZWUjY4RjRRUkhZZEtJVC9Ja0h2YlVGUGFlbzlBZzhNbk9wQ0dBbURlQVFwTmJTNlRBcHgvcHNaekVmUDFNcXNqZkl3RTBjRFp5Tm1maHFQRUZIWHhaWHVtRUJ1bnpRUGloT0pDTlFrT21saHgwRk9iVUlsaitUdkNybi81aXdkVDArVVo0Z3g2UGJ3My9saGZ5U2doUElVREpONS8vN0xRQ3dFNkszMXAyNk1FblpUUG5vcW5sM2pCVGhmZCtZaU1UU0RyNHEvK05oZXdXV01qYjV2b2o2b05QcWhpZ0lBYlBFS0JHWHNjYUN4Znh1U0JPYVBtZ1VkWWY3emV4WWJBU0tLcjRCdkRqRnI5YWFqTFNOUm0yYmhWa2ZuSUFRVDZ5YmlkWUNhRDkzY2IyUWxGVTlTZFNEdkI3VTBCNy9FWTl4b2YyK2kzVWVRNEVvVnhRVUp2NEJsUVcyUDl3ZnB4dGcrK01Ld1ExbmdUaVlidXMrVTYwZlZIblVLZlFIM0VCYjFVM0YvWEUyVWlGT2dSWUJxNElFbTdBWFlLYmc3dGJZUkVGdndwK2xPSHljTE4zQ3lNQ1hWWkVSWWJ5NDBFNGFxRmx5YWg0c25QMk9sT3NtTFpxMm00Q28xek1iMEp6MFZ3M2pjYVYxcEoyRW5FczBRQlRhSVRUTnNiRzdKU0ZzQXdnd3lzRnVZVXdoay9BSWtCSEFWTUZXUWVtZGY0ZmZmcEw4WGFRdnVDa21jNXowQm93OG5mMWFzRGh0NG5mdnFQV3FCbFYzL2xoalRSTXl4SC9rYU13RjN4RVdkc0I1NjczckluQnlza09pdk9COWFRMlVZTUQ3eWN3SjBqek5SMkZEWGtjQmd6bUFLVUNWQlhMblhsK0psVUlpOTlQbUJqSWdRWUo3ZXJQVFdoSmRMZWdLVlhoUUkyb0swY0RnV0M5azVpNlBORWhHNDQ1cHllbWkxMWk5aFNjWC92Q2txN3BjNDNJZnIzeEJvRVVBcDRnd0plZWY5ZW5OcktOZU9wbEtBNUlRVTVoVGpjQlFaNnNXeERRU2JBK0RVTmNHanI1bEhDMmxoWitKdHFDN0grbU1OQkswMXFCU2s3WE83QmY1TURRblU5WWFRajE0Ulk4UWxoSlFmNTFJRjdwblk2N0l1WWNTbmtaam9LOWNEY0lkdGF1R0lGQ29YTVdVb3NXSml1T2hERUs1cWlYbWl4Tm9CV1llWEVpbVJEQ2trak9MeDRFZTJRRXNOTnJCU2xJZFhUaU5KOVJzRlBBY3pTOUQzUHFucG04SEpuRzJKcDU0TGMzU1BFRkwvUStuSHZXRU1LZVFENFN5ZzN0VEZCSmY5L0pkTUFyQkpmL1pEWW1waGM0UmRFTy9tYjIzcnh0R0RSRjlRZkh2cGtKcmNSekVoRTdNV3FQWVowWnZ3RTFZazZWVlBFOTl3MXJKYmYyZEViaWFQY013OWNhbjkrU1Zwak85UWQxeUxKRlhXSmExaTF4MGh6NHhUVFFqTUZaMXJmT2RiUTFUL2tiUXZqODJ5R001ZTlCbjFVejFYSEFSYXNBeXlpMGQ1VFR0anJISFRSL2xRNWRsS2hIWGo4aVRPTTZWQVRod0g4T3FORHFzSVpDc0Vxc2I4QjM0VUJWQXVNTUFuWFRuRGVUTHkwTmtwYkNDVzRWYVpVZzc4NUE5b0dYNENqWWM5MmpuOTRZL2Zka0VaV1ZDNmZvS25wYU9BZWo0b1FOaDFFeWhSUTFNTTUxMnRSZW9iWFNPZmk5bTdTaGRXbkNjUld3dCsvOE9GR2VrS2NLSnpWa3ZudFFSYjYzVEV2Ym1UNWJsSDZEUDhuQ1Z1ZFpHNFQyakd6RnZENEVJRHNGNFh6QjR2bDc1cnVHZWRzMzUzbHp4WjRBYXFTVDZmMm50MlVzaFI0cDJaWjgxN0x6RktxaFFPSGQ2dndFNVBkZXd0WU9vTjNXRFc4KzBBRStPcUhSQ0xOaktIWnZ1b0VDSFozZUlhVDE3c1RaamdKTVlpTGZhTXBzTXZ2N2ZKRnhSTjNCTnd5dlAreWtqL2pMdW1YQTBzTzZWb0hsaDg2cmh5SE40Qmh2anI1MTNacGdoem93L09Zbk9SZHZMaDdqZnlCUDBzKzFGVndQVWpQUzUwY3hDQjI0UUVqSUFWblFEU3JzaHFHaGw3VHNIOWgzc0E4NWdDV1F1eDFZMTZzNGtNQTJEM3kzaCtjZUxHZ0h3dUU0WGhIbkJUUTN4Zy9yZjdyVDRKbjNPUVg0OWlmL3ROZzkvbEVNQ0tVQ2ZwWGhIb0ZUMERzSEtOaXZnbjhVN05uZWs1MmVtS2lXY1FBN1k0NW9vY0tGZ0RmSzVVSVRUVHRUclQyYWhPeEpZZ0VPaFRDRmlRM25RTU9pRDdybGpHMGtNamk2WkFFQ2VVWm9XajV1MldrMHREdGZpSEdoRkFXSk1LOUIzY0VScFVKSW9NOFJpK1NxbXJHWXcvN2Y0dkw5WlI5VlpBOGhqTFRhTm00b0s0b3lRYWh4L3F3WnV2Mld3dGgvRWtjQURBeDhOQnhFTW1uRFROOEN2R2psaGw3SFFyaldQRm9pZHZvSlhsbU9jMzJpdnJlZWRLb2xDK1oyQ0xDbFBjdGNnblk3Snl3RllHUUYvTzBHbks5MmNUQTg2NFJydUV1STMxV29oK0VVV3BPZkx3Y3NxRC9icUQvZ2M3RCtrRmRIL1BMT0ZNZjhwWlZhZ0lVbWM0QVZ2NGNvQk90V3Q2bURUclRBZmpMMzhOclhjaDllZmxXeFU1d3cvNFBFVEo3MXN4c0lLd0srSXhkZzNVclBGaEEvMXkzTjNSM09iczJ2OTJ6c3FDT3RFTlN3R1Vicm5lblkxMkZrM3dHbk9YeUNyOTkvb1owWmRRdjlqelczWStBZ0pTZ0V4Ry9SaElMLzdHYzhTeHd4OVE0Y3FIRXdoOFdYS3ovOTlMT2wzMy93L21LMzFCQkVIRVFxUWQ2TlVlSGhjd2plQUMrZndCUDNXT2psOE9pbkp6UW1nZDZkQVdJeEZ6cmNoRnZUem1JdS9NcnlBNFh1cWJ3WTJPYVRjYXpabktaYk9WMTM1b1JBUjhOZ3M2VjVuUTJZVFpGNzBQZlFhZFBVZWdhaEpodWdBRDdaYktFeEoyY29YSVlRTU1jN0N5OFBUWnQwblBMcThnOFg1TzlSUG1FeFhCSmIvWmdwTmI1UUNJWnpyWUc3NjlUMXBhc1B2YnJVa295Lzg3Kzg5bWNGVForOGROUXBkdVlCdjdPTHJWYzhZcGFBT2ZtNWQwTXpIZWFXUEcvZ1JtTTBoRG5xejR4TlB2ZGVmMGdIYitReVU2a0N6TzRyamM2ZkFhd24rQ3VFYUJ1K0JhZDNHQWZiQVF1SVhvVHJDOTc3aVdjek84YkVpcXR4YnI4ei8xaEtzZmdEc1hBZ0VEVEYxQXJXUnVRSFBZR3ZMeUw5eUZ4MzBzTzRZeERVSjViR0c4U2hZQmhrSjF6TWg2UGZPRlBad3owRTUwcGhSRDI4OXZtc2taek9hdTdFa3VHYTh6aTlvRDF6V3V1T1A2Z0kxaC9tSXl5TVdLc3lZWnVyc0w2VTN2ZVdjK1d3L0JGV2hGTUN2UXVUZWd3K2ozaFpDUFlDaERvSFNxY2VnajE1aElXaG1UdGNPNmRtSllRNk9udnZxdFhlcytkOTNMLzMwSDJGMzN2VDkyWW03TU5IMmJFM1pEWFFjUFV5Wng3Wk1STklDUnNTbnhSQ0ZBaFNLOE5hNXlYR2lRTXNZVzJJQTNOM25BY0pmYUhiTi9BRVBSZTVlVHp4bnU1dXFsckxmdnloenVkUS84N3lhd3FPVzcwZ095ZnlzcDBqbGR6K3hiMjZ0S2h3aW9BcmhDM1R6SFl2UVhnTWZuTXVodVF1aVVINHpEUCtpMi80d2R4RVplOCszYWxkWjI3VXNsaHZDTjV3QWJtRVNETGZVakNYLytSekN5SlJIMzhxNldTK0FvdkwwYUNvVzJKT2RiZ1E2cmpKNHV6MEVBUFFidm5jWGVFYzdIUHRqcWRoMDE0VERoOWVmbDNwOTk1NFAvcWVoWVhaMnpkZmpyN3JHbE9JdGtNTEhJU3pCWTJlOVp5dVZ6RGM1RXdsUGRsVnFQaEhuMjczaWxmRjY4cUJHY1M0REtGZWdzdDBqVDNtRVhxdmNiMFdwSTNPM3l3d3ZNclBPV0pXZmhlTzNlaWc4T0h6OXhkTXQzYUI2WVZXUmJNMEJoTmNCTWVEVTg3YUpqUmxOdGlqenBtRENXNm53Z3lxWmhxSGMrOFljbDh4OGJWemc1WXBpblQ3V0hBVHB2bkpQUGh0S0l3bklNZm9zRzAyOTVIbDd2ZURmM0Q1dnVLQldibkNQQ0JqMmpwK2o0cFlKNUgwZGlpZ296dkE0b2lieVhyZkFsRFMyM2ppZTlZanFEOGZ3YldYWnJXU1JiVzV6Z0VPQndpY0lqakV1UVZ5bjMxRHVMT2VJbzUwZ25jNFVTNlJPTXcxNk9yaGhTdWJYMGhYYzRlSkF5aUlxSzhCbkkxM0h3OEhMblMwT25tSDRSeG9lMGw5cEFJZHVZdUJEUWN3cmE2SDRvNTVGQzVUeGZ3NURrUkNTK2lMMXRXMzNGKysrcVpYNTh6RHc1Y25ISE9USjhRbEhGeXJETWV6RDlKMWI1RnZrR2ZCRERpSTRMNTI3MXg0enNtbnpzTnlsQTNHNmZEZVZmQjNTS2U4TzNOZ0VVRmJFT29qYlZ1ZHlSa3NaSEJKR3BZZk9oOVBtSGdkVVZoVW5pN0dMbXNZK05nYjd5OG02KzQxNG1EalpPNUNlOFRJTzRsR3c3bFZncmZBQ1AybitJVmNoU2FQdzBXT1h3TW9ZblQvMDYxOGZzYmRFVVVhWXdrbncxR1lldHY1UW1obytVNjRtdVI2Y2ZtKzlWNkptYTdlWE9VdWdqRGd2QysveUZTOWV2MUY5djRWSEF4N1lkTGVqNnhEWXYzaDBUTERBQ3crTzBiMVZoYm4vMjl6TUVnZzE4UUFNVVRMSW45NWtoaU9HY295VGE5UVQ3MGtoNVgvTXpaR1QzMEJ2eGZXbFZSTmJlWm5uL3BLcnErMEp4RzVVYjlHbi9uUjVUNmQ4K2JDV3c3S3FGQjRDdzg3eHcwTDRScWNqejQwbjcyM1ZybDRaRzNrMXJSdTlkS3pNa2xyWVUxUGFQdkpzNFd3dlB5d250dG9EN2hVbENNT1NHMTlIWUo5OXNqNzlMeDFxM0VEbENTOGd4OEFZVzlKYWp0NTZQdTdGTm8xYUZmN2NOU3lSS2NzTlNCZ29xRG53UTlpb1l6b2NERFhiam1aM2pMcEZJdmRmenZYS1g2OC9qQkJpOHJvN1JjUC84VFVFTWtQYXM0SmU3K3Zqb0ptYTl3QnZTbFh2c3NuRmdsdHcxMXpqUHJGaWxzNzkvc1BmcCsrdXZ6cWhmLzFKMzRnLzhFM25pcyt2dnpHclhnNTBEOTJDdldhZXp2SDd5anFpSytOQnFkeWlMVlYyMHBpVUFqcnpIdy81OVhqY0pvOGNjbU9uTy9kb0tHcCt4RmhlaTEwU3hOVk9NYzA1SWtZSkxjZ0RmS0Q3NmNQMkc2amdkLyt5VmV0cGc5Mzdxc2IrN3M4ZTRIYlk4V1VpdC9QTUpjZ3YxaTN2THAyUklPdXU0dWNwdytqeUYvRXRSMFdSNFVOeFFIT3JWTmJYeGdLeXdra0R1L3RUNENnUWJOa2g0eVRNb1ZBNHV3NWpPNW9MRjQzMkEyblpSdXozZUtjcG5Cc3l2TG1CR0doNkFYWXlZaXoyZzEzcTVmNHdUajMycnZsRjlYMm4zalI0YTFIWDNTd2UrNDduOSs5NStxYnZpOERsL3VYYjNqVjZtY2ZmRTBwR0wvYk8rNG1FZUJwVHQxaVJ4dis4WWZPbGJCQWFwUGFIWGxTUTBmTXFaUXdJSjJNc1RNdDdvME9peXJDM3JIMnhSd0UrcHkzSng1SHZYcm1vcTdwV2lQd01Kb2V6Yk90U1FmK1BjaEs3b0V6RzJsQytZM1RRK2U2K2xNUGJKMDUyTS9xcnMxclA3dkNrUUVJcWdkdWlPU1VTejNSMDJGUW9xL3Jtb0dLTUNnSDVwQ1E4K3E1UVJHY1JMcitKbzE2b2pBR2xEM2xTNDNIV2NkV3RCVkd0ekMvS2t4cW9ydnRnc0EwRnJyRTZCTGNibHdrTzRrdVNXTUk5b3pRT0E4ZWk2aUUxdFNqME1EeU5mS2hyNDdpZi82SjErZWlMZ0svR3pXWFhvU2RLRitFQkp5cHVzWGJhV094VjVRMHU1T0dXNVBwVEM5cHFsWTZoMUVDNm1hN09oUEFRS3NTSVd4QVlVMFdFQ01MRnlzSWd4YktTR2o5SmxIejM4c2wycjloQXhFdUhEMHl6MWNpeVpoQy9UMy82cXU1bmZUVW1qZmNhNCsyTWRVSXhZUFRncXp6NUdkZFQ1NHZYRjJiTFZ4WTNtbWZVdmlXOFBlUmtQQlJCVzBHTXRyQ2V4ak4yVURjbnR0WUlNMm9YMm1DdjBwTkhWYVIvS2d6SHlTL2VLU3Y2SXo4RG9uQ0pLeFRHb1RxRG1sZzdCZVZpV2N2YzBVMW9kWGsxU0hwZ043SVF3akxreFBlN1FpL3Q0TERkeVp4T1EyMk9mVUNvcFBHTjNPMVJLYVgrR01YeDY5cVVkQTF0Vk5mVDc3RXVKcG01d3FFNFdaeHh2RG0zREdQbittVy85dlduc3RpTno0T2t2RlcxRE8rbUJMcWxyQkRPTThFNXozcUg0N2hISVVPV1o0YWJ3NW04UWxQREI3N0I2OWVmK3ZhYzFkdytFV28wS1ZRcDdYR1cvUUljdkhPdzQ2ZW4vMjJISDZ0aGhSZ0t5UXM2cUJ0SUdSKzBwWDkxZlpENStPYnRUTkF0QkJ3YzBNampoYkJJNkF6QTVUWUpxM3ZSSXM2V213UmRvWFJFallJTnN2ZTJlSm9uTUo4RXYwc0hmZVluZ3ljSEd2Zi8rYlhsVmhtN2g5dU4rOFo1QWNQWE9FQWlDZS9WZlgwVW00czd5NFBVaHp2Ty9kM1Q5bUc5cEpEUTdzSDUvV0l5MUZDc2lSL1BSNTMvOTRIaVZTT25YVlV3Q21sMjRremhhandLVHpSY3FDdTdSU3dSb1hDc05FT09YaVdBMmgrUDdyZzFrVnZYaDBIQ0NVbXNtSFUrUFBvUFpuMXcvQjBDT00yVHV4ZzBaYmg3a0ZlR2JnbE9PN1hYb2VqWUk4RWlNdkhTZHpNSXdQRTk4QXhiOUlnK0lmblNjTjVFRUFUL094SkV4S1dmL2RlS0N6MWtHRTBMMGszSkNxUi9MWTF2VUFCQmJTWVEvYjJ1WWVadkdTZVhEd1dEOFNGdHp1MXlacTVyV1BhZ1NmV2RRZkVRYnc2em4wM1h6eGI3Qjcvem82QkxVallUcVRqNnQ1dUdqb0dUVENDMEhVRG5rZ0lpOGtLNDFIcmw5OGwzQUlRanBYYUhkclBTaDZIMUlUSHZQdEN1NjE5Q0hMRU82K0IxcFpvZ2V0NkVyWmRFRnNSZmRSVU9GcW5BTmdIOHM0RDJWZlJhb082UWdFU0RuVm96TUFYRVR3QlBCZmhYZzZodWdDWGgxdUhHN2xHeWp6OXZFbERoalRCa2JicmNDY0o4OGljUW4zaEpJa0l5N3VYM2o0cy9mR3dOb3ZjcGRCdWZWS3o0VVVyUEFFckN0QXRZUllSbmVWdHJLNjY3Vi9NRWJ4eXRQVzk2MXhtRDRTeGMyN25la2dhVzVTRWE1VXMzQTRsTlhCcTRkNDFrRjZIRXV4WTJKbUk2eDdac1pqdStiZCs5c3VSWGc4YVd5RmpSQ3lPNWZUeFM2MnE5VWx0U3R3a0oxclI4ZU4zZytTWlZqclB1N1Y1L29HRVVLSE9EajQ0VmNXQldZdmprazhUdC9kVjBsWk80b3pqeWVMSnNyZmlsLzd5MlJwK0VyL2xURGo3RzBsWHAyY1RmZEVaVHhwb1AvYmpyeTFpbG42Ymx3aFJHNWQwTkNMNEw3SnY1UG9ScnN1ZzYzcTczcUZXR2xLZ2J5TjdLY1NYSUR4WDRjcXR0SjMwYjlMazAwWkIrbks0UitGSSswbkFXQXQxMFJWRnp4VjVsbnQzekRRM2VTYkw3bkc3eFhBTWZVbk1SeUVpdDFEeHhyWmVjT3VPVys2R2U1QnduUDA4U0xKSTBxU3I5WFh2aHJuZTBQRTd5TzE4dG1HZWQxTFRXMUhjSnRaYjdzUEY2dVU4OUY1ejRJVXBOZlM2bnFEbVFET2tpVURBWXJNZjZocWVJZEZ3VkRITmREbWVGMDRYR2FDTzQ4NDRuTEd2NTNOWG4yTWVDbndPZUNzYnhvTWRxQjNyUjVZWWI4NmNnajBJN0tlYSt5clVFOFBJQnVORStQNEVjSjJEa016NGdySWNJZTVZVVlGZUN2Y0NhVWRHeTNDYmNLT0dHV1E0bHByNnlVa2MveE9JRTladzV2cXd3R3M1YjJtNk1GTUpjeHVXNWg0ZGZSclMyeUpqbkExV0hqYi9kdWtyYmlMeksydGZMQ1J4K0lnMHA3V0xGK1pYeFVFaUhtQmRnSDI3OUw0M1AxUUtpeS9EZnZzZmZQLzZPOWYvYlB2QU5PZDRQV1JIQ0dxQmdVamNGbFd6SnRmeW4vbmFkUnkyc3JxajdhM1RoQmlJY2tlKzRxejA3RTFZZDNpVEZqdFlucDdYMnZrMkNnNkJ6cHNCTVZXaFZXeTMxUEJ2ZVRFU3VIZkExZGtKSElQZy9PbXh3QzRlM2k0T0tPNmFObU84V0Z0QzlHS1hKQ3I0QkRnd2dZdURLaW5ya2FEcG5RTGVrWU03MURPSDFoY2YrRjBGR0hyR2UrbncxNENHcm11WE9vUzI4NzRHVHdyRGNydkEwK2FIY3F5RFpoNENzNEJuSG01bGhHV1FRajBMT3JaR21HOW9WaWNxMENsNGNUQUpGcTZGbXl0RFMrQUgycE9UUlpxUmFUN21RcmgraGdoV1BSSExCOEU1NW5NMWJlclNIbWpzWjA1UGxwY0NoYVk0UWdLTjNEOGJ1aVE4ZXZnejVSNFU2dTdrMVVOb2tJTUFGM0RkdGxMeldGeDM5VVl5c2ZyR1o3NjBma1k3TEtYM2RpRGNRN2ZVREpMZFdLUTVNTFE4TFR1My9GbWdKQVY2Q0dVOHR6dUJNL3NuYkh1blV6UmNUcFAzUDJPbktBUDZnekxVZGRhUm1pRU9taWtPaUVnbGk1RURQRW81OTdrdjQ3Q2x4QnpYdGZDYnVSaW9jNkFvMjNlNzdHM056TFR6bDM0Vm9PSnVqQjdnR3VMY01ZSzh0YnkrUU0xQnNCY1FWb1JiaEJzRmpKMVFEK3VyQm1SSThIQ0c4TGx4YXE3VFRnVTNadUV5eXlIZ2w5WTI4cmdUdlBFUmVZRUZ1MkhPUklWM3gxNm1SdTF3Q0lGT0ZoNTN3b1FOT21qR3BoTW1OVDc3Y0Z6MHBEc1R1Q1Z1Q2l2M0o4UjU2QjdGdmYxOTMvS1BGQzNYdTNpa3R4U0JXRFFuZy81OXM0YTduekVMcU9remhwNWNxV3JwcTA3NnBUZmUrUWVsclhkOStndjUvQ2Uvc2hCSWRhcGZmMlZ0bzNCZ0dYT3NPZWhxdmJMZ2U0bTViRm95V2h5MUxCUG5kNStCRWFYVCtmZnZ4a0V5cUIxekhSblRnck9SUjhjRVJ3SGVnSStMR1hIWHZHblB2ZlZ6WDFnNkNvM3VqWHVrNVpxTDFtZDB1Y1NIcVpWbStmdklEQjVmM2hKendxbHRTVXNQdnh1UG5mWXVwMEtNZ0hZdTQvT0pLNGREMjFiZDNkdnhhMmt3V2ZCOUV6L3VnOERMd1pXREFYZmlPOHNJbDBYWnpzR05hZ0dkRk9xaDMycFUvS1lrT21Id0Zvc01Tc1M3UHIxUnFDUW5MdU5lU2N4UG9pdjJPMkR2MElidzRuRkJIQmFOYmZkd1plR2c1SG1OMVJlT1lsV3lHR2hRWkhSM0hDaXdFMkRITTJqbll4dzZ1Y0dKUjByd0UydHVCUjNjRFdCQmdPRTZDVzNQbXB6ZlNVNWV2aldSZk80WC91QnJXL20xWjNNOERHT292RTR3TVMvbzJVMU5YYXF5dHdjY00xMUp3ZHRDbzR2ejJIRUZNRHZPdG9EamgvTnRBeUx5RkVJZFg0aUxxR2dKaUFodE5HaUVvQXB2ZzlGa05QNVlFaTZVQnRRaHFaSHplM2tEeDg2MDF3eXI3VFNOVERHZG5ON3ljQndUNjd1SWM0SENEVzVMeHI5Ym5paHpDVzRCNWIwSVIxN0VEZnhPeFhIWTBoWkRhNU5yVE1uRGNNTTNUYnA3K3BSMnd6elROOFB6bjNvMis4NG52ckwxUXVyTXBhcWV4Q3B6bkF6bjljV2kwVkFRVW1ETDBiak1RSzVHbDc5eG5NcTZmQi9zeVNzd2c0NW1mMklpYTlIY3VHQ0tKbS9ReDl2QjZtNnlaMGNzSnUvTDF2Y3dXaitBcHQvLzFBUlByVUpGdTBCYy9RSjV5SDNZRTdnUkNuZTc0NElWbVAzaHgvUEw2YzhuVDZYRCtkUHpCNVo1OVcvdS9iYnlPNTc0azBLLytaeDBmQXJ6bWpWVDBwd2s2Z3h2NWtObnk3TERDVTBkM3hkbjB6ZmVHVTZ3VFZzN1NGUlFoOXVmZ1o5Nzh2UFozWVE1TDYwMDdaNEMwU0IvT0VoRS9mSnVoT04wakJpRUxMNWo3U2wyWkFvQ0hPQ2dwNTBiWnYxQ0FIMVByMG5iM1dJZFlwNmNmanZhVnRzNStVSFBvL2ltYnZ3SllNeEFvQlU3WTc0N1FzQ0RWWlNVN1dGekJDV2VSeDVjS0RjN2dydzZabkZNRWVrWXM2OEFMa2hEQXRFaGhpWDB0bnRoQmxMN2gwLzlTWWt4RDZ4SlhHcnFrV1hXblMxY0w3Z2p6L2RtdUdGWVdaeXh2WEFESm1DT2RtbHVKTWhPMW1zczlEbXE1TEl4MDVka2VRQmhqNGFWc0cveG93OEVZcmdDaE96OGo0Q2QvVkhlUi80VXpzaS9LVzR3OVBnN2Vjank4SDUzbkhPaVRkSDZNQUI4N01mdks3N3RzMS9Pb2h0WklhMGNZSkFuRXNRNTdqN05DWCs1Tm9VRm1jV1Y4dUk3TW12UVFtZ21nMzdBQitmbzFzeWhtYjcwczA5dDVWekh6WVhkcVM0UVJmVEhQYTVQOTR6NVhXdC9YTGlSbkxoa0MyM1NTOGJ2bEVLeERsRlE4cjJHMG5GMU9yOHErMWd1Z3VNaUptNURjckZ0cks1VjF0dGwrTTMwVkg0YUZaVHo4TDBDNnpRNmhVM0dOM21xWEE5QUlTSFdqWUFlSXlYT0FjLzFrT3lPanNKdk9GNVEyeUU5M0gzamlqNkFDZ2dGTy8zYVU4bzlETndoMGVOaVZHcWlPUWl4dG5XeGZRNTN2aS80VVVZcHMyaFRlVHdMY0tGV0Q0UVBBeFRxUmJpbFlaQU1relo2Z2Q0R1k3UEFPeUpYekNQaEp6dEtUVStKeml1SjNzbnlyN0NFNzZKcjZnMmh6V2gxL1BQQVg3dU5CaUh3KzhKR0RpS2tnSmZDbk5kNHN1T1RnMTRLb0h2dDJpWnZEUE1SRHZ3UVpuNC90YUJGTmxMUWRLenNIUnB2dTh4cFRTQ2RGQndFVDZTMGk5bmQ3Nk52K3Y1YzduTWIwS3duVm1ndG9IV0VneUhlc1cyRDM5N1dMME03QzlvNXA4ZnpBUVJBc0RYeEY1NmtnNTBRMXlwNDVmTitNejc1aXlubE9hanRHeGVlK3RxVnEyOThGUnRTZkFBZTkzdjYycnV4TmMwMWphV3FtY2pkd3NKRkYveVFneFhSdVdKUWt3UmUxcDFkckI5Z0ozeFAzY1owQTRVdEJ6QXByUW9IUnFETDFWR0hIaXkzRnZCaDdMcDQza21mNXdDdVU0Y2RUQU1PQ3I0eVQ2TnVGQmlHYlpnYjlBOEQxaEVPL0tvWVpQRE1nYVJ0cmhRKzhYU2g4SmJqTklYaHVaUEM1Q29lMWszQmUvQ25FelMxVDdtaHBGUGtJZjM1YlhXT2htazVoRFdJb0tOdUJiU01waHdjMUV0WG0xMkFaNmtwSVBDRGJSSE5lQk5lM0VlK0V3aFNyd0VPVUZ1SFVDL0Jxd2hId1JzWG5FYytSZVNYaXl1RE1MeHR4RzlZOUI3RFdFa3BHQWg4RHdHaEFUS2NuU3FBY29TalZsWitBaHRrdXc1Uk5rVFI0U0dPM09wQklTVzI4L2lObVhqa0VJRENobVppZG9MVXZxenFma0ZrTXVnZk5rN1J3YmNnQ0RiU2x2SkxPbHRTZFB6Sis3NTVlVVFkVy91R0Vlak1vUGlHYzdtM2ZYWmp5ekdtc09iQXk1S0h6ZWdZTVBDME0vSkYrak9VQXlBaFlQeTRJZ1hpeUcvallUaitWdzZhc0VyM2taOSsrbXNMeWNyTnBSNjFqT1BJZXZBNU5QWEZsYWYrZlpESzBGUi9Hd3lWMzBlbUJqOElyRmQ4RTdzVFJCeXZIdU5VV0tGaHNVN1N6RDNkb1E1WjFwa0NqeDd1RlJyZjFqVzJQLzdRUW9ucFlPbll4bU9PNysyQWJZQUxTNzJCbVJlRFUwL1ZWSnFEcUhnSFV1MElHaU0vVVplN0RJWWt1ZUp5Rm56UGVNSHIzMWlmMk5ab0NiTWF0eUcyN3lPNVpnVUR4bEN5VU1XdW1LZms0cERRZ293Z0VFS1cwNDlaWkxVS3R4SmpsaXNjUENDL1lveDV0RVh0OVY1dGd3YjFqSG1ZMjRXc29NQmtSM2ZBTzlFaHNDYlE4ZDFUOWR4c3pkYk9PTFVub0oyWHVxRHJHa3poSnVkRzJWamxLbmErQzJIUUZjTm9JM3owVGVkV3EvWERjeEJZdTFNMVEwdmJLVzJ5TnFGTncwM2F2S0V1QWExYmpQcUZ0aTNYSlF4Q0pSZitKRngzTVpGTWxzWjJ3WndZeEJ3MUE5WVZhUkVoL2ZlZ090T2xmVUZQUG5BdXRHYlVVS2Yyb1ozZlgycmxEZTlHdCt6azBobWJZdHJiNVNEclNQRFpWRWQ4T2t4YmJMM3hVTmJ4VHY4MjRQRVd5eE5ScjlOWTR6QUJHam4vWDhlcGkxVTljYW9YS0xZcDdsQmVZbENQZHRyNkhBcHBuNGt0dEMwT0Uya05xMkRueUY3QzFtNVpOVmhXMmd0em91YzBqNjUxM2c3Sk9Fa2x6TW1HbmdGQ2RzZlhuaS8wbkdpd2lGY2gxQmNHU3pwNHF2YTl4ZUQ0eGpabFduVEtGREJZbGV4VWRqUC81Vzl5VVJQYlRYT05PcjlCOFgzOG9SOHU2ZFh0ekhTOWNzWGtIY3dBYjUvN2tUWmdZVFRFQlhEREFnZFlPUFp5L3E5ZSt0THhGZXJ0Q2dtaFRRMThFaDkxRXJ6Z0lFZWVqUSt4cVUyNDFWM0x2cGxybC9RYnM5TjVEZXNKbUtZZmdMVnExNnp2ck1zMGZFK0czcXROWWNBNlRlZFp0amlFcUpqV3pQT3ozNUtUZU5UejVEbUE3a2NBQjROMVRIUHRRWmdmNEdocUtnQ2RnTWNFZjJUNXZxMU80Y3AvY0E3NDJ2TTVZSWh6RlR3UHZaa2RuTXIrVS9iWDQvU0Uzek10OVJTMWgwZzBLN1p6amFTK1ppTTFLMCs3Z2w0RVRVdHFOelN6MDVsWTNsUkZJN0xjYXE3TFhjTU45TDI4MEx6WHlmV1MvaVRpOEdDWXk4dXZ6ZGVkYjk2M245amZySnNIc0NoZytSYzBUNXFUSjlEUFVPdVRVeHVEMEVpZWNNcWdwaWRnWm5UbW43OTNablVRUEdGcFpOMElpek5vR0FjajNDbWh1ekI4dWluL21SQ0RueW03VXVpMC9tTFBTdVQyY096dkFZLytCUS9rVG92V0orbWlBR2FkWlRrbWF3ZXJ3YWtKdmlmc2FyRWQvV0loSXdqa0FTVmkxUUpYTGdBNHFLeGdmY1IrSXBFWEh1cFBLUDlIeFI3YlNtZTVIb1lXRzA1RDJseTdncllXQmhqTWhRV3JzQ0U1QUtGZUFvb3NYRnhDZlE2NGkzQWpneGdFT21pbmtFWFZGVTY4ZHkrUHE3blh1OGZxTFliVWxPWGN1emVmeHJVbjJINVZyVjM1d1BMZlcrOE5VNWRZd2d3YkR3dTc1QnhaOEVlV3oyMzkvb092eWs0ZDdyNzhqTHQvTFFHTmtJc1ZQVUhwWGVneWFHYWNnK2Mzb05EQ01FcTdtVWlzbkpiejRTbk1PV1ZEUi9xNThJNmI5Q2pncCtydXRZKys2WWZhRGs3eU9FakdOcDI1Q2hEUW5DcnJZQzg4dEN2SGhUZlcyYmZOaDFUUmZIdG8xcUhwMVNFY21BT0lCcTBjek5vNGxld2ZQdlZzanI0S1RwNERlMGx6bGxSd2ZRa3RLbFF3S056RHB1V0U4RDk1MHU5b0NpRFV0MURBQmJqSTVFOEx3N2hJTHQvaUY5dlBzWkZHVnMzSU5aV1NBNEVlQndOTjZWcCtVSmh6NjlFZWxDWExzYTlCbUkrTXVTMmtqUFZQYXB1Lzg5QVA1ajcycGxmUHBtcjJzbE0zcjdnNGRFY1FEWTFpVUtBbUtmaHZUR203Y0RzVDV1cWd1RWFaamxvenUxd2NCWXZUOHVDNEZnTUx6aXhIdjM3dk53NDcxcUY5SzVYblBIbk4yaE9PdXdoNkFaekVkKzNEYnpsWGJvM0w3NEl4eEJQdEZwZHlsOEZOMEhZYnJ1YmZoMEFyZ0hkRU1BZFJ5VndyUHZYN1pEaFFNWXdzRlEwZWZzWHZ3elU5WERRcGR1T3dmZm51eU9KRXEwMTBTczdKbFBwMDVBcWhYZ2FsV2JpNGhIcGhWUFBwMGRySHdaRkJnQlg5WTVncitybW52dnlvcnB1WEJBNTBURU1MZERFZ29NbVRqYWR5N2YzTDUzS0QwRGRvbW9UajdKNnRIMjVaYUx6OWdZd1BhUUtoUXUxV2cybDF5amdvOTRkbnNOaS91L3pxZGFTa3k3LzNFeHVaVytuRTBxR1ZXS29aaVVXdXp1VWdpVnU1cUlGN1dpR2ZiUUJ4UEMzRFMrTkN5OFhKYVhNUFA3V1IrL0FienhYYnBCZ0xMMjhoSUR0Wmp4enZybXFjbGdjcjByZC84MmEyY0tIOUpUVy8vS25uc3JkMGMxNkhxZFJFN0ZEZUlGUllqcEFIRjdXZFBUZ3NlcmtkLy92aXl1N3F6ZFRVZVNFUTZ0aktKRHAvQ0FNL3FyU0VDQzBkWkhOVkJBVUR0cjB0L2d3T3QvbjRRNjhySGNkNlovdVFSNzJlK1JEWGZlaVN3OXhMdnE4ZmJaWHlkb0hRaW9MNWRQeXo4YkZTTU9XWWFGZjhwcXdYM0VhS3RyTWpjYWhudkJ5QVVOK0IwTTBpbHhKYzFOdmF1UGU5Q0xjQUZ5dEVMOUNwa0NTYmFlNWtkbVNudzA1S2h2K242djdxdDAwa2MrZ001M1FIKzN3QjdCWUhBZUlsMURSOTk1NmFrL3ZRUXo5Q0FSVTUwRFFyTy81VzVHbm5jR3YxL0FQWlZ2L1Q5TnMvRm5jVk5LL20xcDdOVE51NE9VeXo4cFdrUGFOaERwRGFhRU43NUFDS3dpWUFORkZQaXUvc2Fhb201cUlydWxGQWxHSWcydWhmU1dzQVdBZTl3UWVGb1djU3JmdjFFMHVYTUxoME5xM3EzeTZGcmIyb0o0MkNqZjNwZGRUZHFYb0tuVE1XUHFHQ3lQb2R5Qzd3U2hOKzlmcnFtKzh2QlR5YlhsZXhHK1B0VDVXMjkvWHBPYkg0RFR6RitZRmFBdTRzcUpZQzNJVlZ3YnZINE9pYlZLMFg1eEN0QkhmWEFNK3FuSUFUM3hUZnNDTzBoa1hmRzRxc3ErbjBFbXVYR0NoeUN5cDhhYm5odDdvdE9oQmVxeXNYb1hyMWtuR3dTYUlrRUtnL0krRkF6RUo5SGdPR0F2SW94Rm1ZNWw0dHNweW9rVW45b1ROU05qanFjQlRzaEJJV0FabTFhazdNNFlxUVp1SGd4ZXJ0TDFCdUoremFvL2NjZkNOVGZFaG9uTDBsakRBVzU4bnVKQ2d1MzE5ZWZmTjNGMlp2LytkTTJuR3U4THQ1MnF4ZnloWmhMc3ZPZUxCV0NNZkRUMXduTlpkYmUyNUJocC9JRTdUeVFDRGVyRVluQnlKZWVTamFjZkFPNmlhdWpzWFd2dXFWei96WUE5bXdHK1pveWJCMWZkR3pXaUFaQnd6U2hSWVFpeldkR2dkTW9aQ3FldHZacU1WNVF3OHVwdVBnZ3laMm5Dbm5Dd3B2M3Yrb1BBNHUxT0ZBTEJUNUhSaElnVGd1WURqSkhBVzIxTXo1clhnc0ZuWi9nRVN2ajJCdnliRXh2eWZya0w5Mm96d3VaYmhiNktCUVIxa3hBSXRsb1Z3ZVFqMFRKeTlabzA0TU9FL0pzNmpaMlV2NCtFUG5TaE8yZVNXTkZzbTdxSnNFaG96VXc5T29IbVkvZHY0MWhlQ3E0UjZTcVNnOWNJQW01OVhsNzhrbjZ2VUxQVVJ2RzZXZTBMSnRBMGJsQ1lGTzY4SUxpWnB3UEdpSXdLMXBNSUJxQjdoallOOUk3QjdvdGVYZmY4Tml2aHRadDlJekJWd3pDNjM4VUxqRHhCNVc5dVBzL1E2REhPSmovbFhzSDF4ZGZxRFlEZi9zenM0NnhoMjdGRlFWNUhNQWJaTHorOXk3UVFGLzVKb3hKV0hPMXhLcFFyT3YralVxRHVRL3RaR0ZrRmlVeDd4eW9DZDI0bURuQk04MjROSEFzekJlY2R1b0IzaEJuZUdVZ2FOVlN0SlhQVWZIQVh5dk1uTEx3a1c5K2wyYTNvRTZIbUJQY09MUXV0LzUyNzV4VUVqWjllMWhDSE1TNmE1YXp6RDRWVnBOKytEeWZjVmsvZkRSUVhnQkpTUTdTTHBvMDNpOUtEVWltNHZLMElsaWxUODYyaHEwOHYwcnllb0xtVS8vV1BlcEdzNlIzazVZSzF4WFlNS1VhdUFTSFc3L3MzR0FTTmcrWTU3U2g0VlB4VjdLUkZPLzd1cEZieXBKOXY1U2tMZkhRRHNENlVFMlM2U3hmYXc3MFJjU1VnelFQT0hZc1lUNFhwNkczQ1ZlUndUZEE2cXB5VUpyTEdHOXdTQ01Cd0ZOUUtDbjZwaGtGSmRmSUNickVDeDdxSVBibmJaRnR1SlR2NlBuQUlUNkZyQXVSWThaeDVtN2JoeDRCYWt4ekJySms1U0puOXFEN0h4RWZrMS9XSEdUQ09meGxVR2dCb2piMUhKMTA5cmd4U1E4RlV1Q25CdVh2enN0bkVNZmZmNFgxcjY2NUMvd2FrU1A1VVdZUWR0Z1JrOTZwMFBGcWF4Q3Y3alVkemxkWTdidk5GRW13RGVqOVljM3lISDdGK3NpOXVIajZQYjY2blJsdi9pK1BzNUNyMWpmbWpld2g1K1gvWWhWN2NESGVpL216cEVIZ2FiVUprRCtERTg2RTB0dmUvSnIyV21uQWkzTlJuVm1YY2VDTHRTZEZPc1YwdEUwdTJzbHNUaFNtMlZiRUhUamxEK21wMmsyRExpa0V1ZTh6OVRTT094RzB3cGhjZS9Vc0RBckg3L1VFWGpyUEk1K0QvZjI5czl0TEZWd3dRNEhWc2Y2S2IvK05SMCtKQVlZYUUwY1ZCNktSYW5ERWFCU0Q4VUJDUFVTaE84RklMazZGS0xqaWRGbnh2TjlZeERveDZudjVzUDk0YTNBUlVKdi9ZUHJUOEQvZkd0WXI3L3JsbG1FWnBKUlp2ZGVPZFovUFBMMjU1NzYyaWF1VUYzc0s3VSsyaE9VMnRIR1c5Q203Y1BOcEYzRnZkSmFDWXZQMXR2RjYrYm40TTV6eWxWdjlUbG0zakU0b0FtY1E5R09nTTZiblRtRThqeUdBdGgrTmdITkh1bjhUaDB6VVVKdzg3UTZDblRPdWJhT0NZUXd3R0M0czFEbkFNTVRXYTYzaGEzUWtaNDdMSUFyeUwyZEJ0MExKZ1pHR0J4RkNiU0k3Qmpwb2xpNTN2cmhrSkUzeVBBR1pjeVhpZ3I5S013bjYzVXRaVmNIcW90UmxrSGhRblBFZWV3UTZsbndZaVZDZnN3Qlp4NjRLZGdqaFJnRU90ZVlUdmxFTm85LzIxSHVWZXoyOGVyMUYzSkdZcWFNZEp4NzhJQmFDOEh2K0x3Zm5mN3FNMmxMbkU2VzZ4VGpidmJQcnoyYjFSeHJZY0xWRjNUbjF1by8vcWx6VzZQaUIvcXYrYWp5UXVPNDdyaE92aDk4bG0yWFA0WkZmdjJrYVJmM3ZaLzhTdTRGMjVrNVRNRE1EaTNkczBoaFVTaFd1b3NGYkdIMUZGc1J4VTFwdmpCaFcwaENPbk1sdTdnMEI5aTRNSS9icjhUcWRzVGpxbmwyL2hSQ0JDSFVFZDZwUFRnd3VYTllNV3NuNXQ2OTlwWGM0OHV2TGVKblg4QzFBWDUyZmFVN3ljaGlBUnA1VDk2TUdDak02OG1wRXRaanpJaXRjMjFvRUFzdVFWZk5IL054QU1MVEdTZGhKSmlvMTdmLzhadUh2MmRpeE1XK1k3T0Q0TTJoajFsQUFTUHJzNENMZTlPTHdMMFRKZU5pRU9na2o1b0JIbTBxY2l2eFl0VnpoMDZQMnQ4dnJIMDVaeWZNTmFtRjhCNXFndnlkYUQ4V2FHU0Q5ckh5cms4OVczeC95TGFnUnVRNytPWGRhODhzM0VwT0xkdzA5UVZIVDZGeW1vdlBZd0ZZb3BiUUtseUJicnRiS0Q1ZDN3RHRIUGphZzlSK3hNQU4zNDVmajUwdERsTFpiSitpZjErc3dkajU2RU92S2ZXZmN2Z1VkVk12WUxNWTVrT3BvWHVDbHJvaGhUbFhOZ3NqYnJ2NjNlSW5xckdRbXA0QXA0YlA1aU9uVmttcG5HNlNQSlhVSHpQbnl3RC95WERPMWVMS3pqeThpaTNCc2Y3c1Jsc2NtWFBTRDUvalJDQzN0alo3YXpKZE1sMXJudDlmektDMGZHdEpHTDhqMTIrUVZodG5ORmhjNzRCM3c2a1haUnoxSEJzT0xJRVM5bzlIeXVWd3BCRVAyMk5oT0RUTnFhTVg2RzB3aGpWcWR1NmVsdDVNbVB6MXU4dmZ2LzZ6VDMvcENWZDN6M05VeTdQQnVkWE4weHB3SUFkYUFNMlNFdGhBSlBDZGplcEcycUxwZmVGdU1iMVRRekJUV2paUk54YlNianJydXNiQ3ZxSE4xTUdMSkxjVFVsSTA1dmU5bThPY3BKdUQ3NnJrWGEvUGg2SGxId1FydWV5OGtCYzdMTjUyNTMwSGZDZmttOFRwSjZ3UHJ0QWJlODBsSko0b0UzZGxqeDRlWHZ1ejdDM1RuS3VoekZ5NXpEUGZHd0MvanNLY2tVQTNnZFdWYlVBMkd3cHQxdTFPSW9uaHdmWkV3MzZZK214ZzBKYTBlWU1lVjhjbjV2bTkydDBReHh3N0FadVhUa0xiUUpDVzFtRE85N2V1ajJtTkUrZnZWbDZGNWNWcGpVcmpLNFRGN0J6R1cvYitNbm1HbXZrOCt5ajJWd25VQWxwYnhIUk1VMUt2MDJML1ZPV1VDczVuT01EVFNOaTd5ZnBPMysyd0NiWDZFVGtIb0VtWG9WSG5nSGd0UXVUY3hyWWFwWmJ1OVNvUlVpaFFpVTZkRlphZGpWZHgyMlZCUWQ2aG4yaUtQbFhaeldNMThLNjNiOU1iMWJJVFJmS3V3SzFCdG1IT1ZWTm5DMTBqM3lFUjdQU1pHemVzeWJYbmsxT1hYa2ltRm05YnFabUtrWUtBVFVCTG82WUc1NWZWd1J3ckJjaStwYzIvL2JNYkhESDJEQnc0VkZKR3NlY0V3WWplMXBDZ3o4RHZ5Ym9RblFPbkh6VGh2alZaRUFNV29ZWUJDenBucm1EMlZqSGpkMGpkYjgyVGdsRUtSd3FpVGs2bUM4YVhmc2VmRlBjUXF4QVVualpvNERzZlgzVjlQTjNkNFNONGJPS1NGRGowS2xwd09XKy9IUGlOZi8ybHBmLzZvcW15cTFuejNydzUyeG14aEhleGpNTiswUDlTMU01WFYzRnhVci81cS9qeGN3Q0NkeDI1Y0YxWFZDQzE5S2p3ZGFsdEEyWFRiK2ZLV3Q5WjZKT0VEeTgvV0o2cFdJVzBQWUV0SGpoNURDWmlIdHJDU3c1Q08wMTBxRnk5VEtnYTVpTS9EeTFkL0JqUkg2bDFqU2k3UmpabmEvWE5HUnd6eGZPaXBaQm9CUG92TlBIeVlCWE8zUjJpVitITllEdlcxT1ZlTDAraE1IY1M5NVJjTnpIWGlsdjhCbDdtemJNRUp2RUphUEtGeFFEZlFWNWFjckRWTnQwcDhlUkJNZ210dnRoS2JtK0M5aWhWdi9HUFVuWi9vOERpZ09NMktpTDNydE5Ta3REY1JkTGVQZlZSREJwejVBRGp5TmQ3NDBBaDZGckRUKzYzTjNBTnpSOTExRFlPb1QwZllMY05yVHo5OWwyYTl0NVBQWnQ5NzJlK1dOcFBHR3RZSERuRFBvbEgrZEx4blhlYWR3UmhwZUhaN2xoMTVPNXBaNXk5WGFQS1hTTUt4cGdET2RBVzVmNzBmSlJsRFI4K1JwbFRHMXpzSk5nWjlBTC9kUGtIVm5YSDNlUUtZZ3JwRkJvQlRianNFRHVCdDg4WERSdHh4RUVOeVdTeFU5eisvSHRqbTgzck0wOEFVdlhLbG5lakUwYi9JZjJKVUN4OTdaSTg0blRHN2RUMEdzN1VMMUJnZHlMOVo1NzhreXlFK1JZKzNYellnSXJmVnU3RERuNG5FeDNuMmYxS3FSUCswK0IvbUo0c2NIZEdjRXZsT05MTjcwcjl6enVvaE8wRng4YUM5a0ZvOVhEMWx6STRCZFpmeWloaW81MEtvZGtabDFnOEovU2EzazN1UEhudlp6LzdmK1IvNXJQL2NXc25sZHE0YVNVV0syanJIQ1N6bnJQdGNiVTZIZmwrM056dTBjTzhLY3c1TFpIQ2xzV1p3MXJ1YnBrVzdQeEZ4anZFTjQ5SEtZUm5mRk4rSkFXUFFlTEVnTkl2cW1IdjU1eFVhZ3NEZ1JtdUNDVzBkakplQS9YQ09GWklPV2hvV0d5UzBBNjBpbVhQditQSmpjSUhIenBYOEdMMDg3ZEZpRk50Q1FNMDVGM1RuTTJ2YldTeG9qb3Naa3VZeHorN2hZM2NPM0FjZ0JmeFppc1Y3WDF2ZnFna3cyOXJoMFhiTUI3aHhROWNIZDBPcE1tZG1vUW5iTDN5MUdDZUJkSkxwcFhPUDd6MlhISGFycXhEdnhNb0ZESjVRUUFBUUFCSlJFRlViQ08xc0pmVWNUMm9ObTg2T0FVTklNY0xZdFZ1UytjSmhWemJRMFpjNlRzSmZpVWg0V2xhbkxUdDdkV2ZlbUJMSUJqeVQ2OER3aUd6YVVyKzNrODhuYW5vNWdyckdpL1JHRXZBdDJEYjRKbm1GajRTdjdFUTZxRDN3RXlzWUw0MzMrbVNtZGJ5Y013bjU5Q0RBelBHNjRYL3Y3ejJiTUd4T0VPTlEzZkVEVEpjTE1ZS2pxY1FwZ0lULzdTQXJGMnRUeThhNnhLRjRXKzkrWFdGWU1JSzZxdUowLzQ4L0RKdE1JYjN6cWtuelozQXRKKzNObWN2a1Y1NGVHMURtNmFtN2pkQXgzSXlPRkVndzRaV05aUFpRejJaNGRXMFZYK2tmQk9MMlJMa05XZzU0bzJYNXhGdlVFcncvemg0R2p5L2kxblhuMWhkN242STBYRWN5bWZVSElCUUwvcENlREdpdkRsQUtFYUJxMFZzUklFU09FVEg3Z2tJTWRHTkNoc09mdHp3U0JyUEV2L1p6LzFaQVdMOE12TmdoOVdZcnd5a2xTTmlodUhJRUlSdzZ3N215a0RIVFd2cUVocHRjYkJUbUZycGxML2JsdzlDZGY0YjZUTWJIbWt5amtkM2dOeWpWOEczbzA1U0hCRko2anNJalRyS2c4TlFzSDlaME5HSTlaSGwxMjlkK0Z4cFc5T3R1U1BrNFc4NG14MmZDdXUxZlVtUGs2dG1URXhUSENhbUhxbmhHTlE5U0FWcTIreEVDVFRYeTBGQk9HYlNlQlNENlF6M3NIamtFOEdiL0F3Um9Pb0ZoWjJjelhuck9lUTM3U1hWaU9Pd3phRSt5ZTF2dEwrZzNRZ2lhSW41eHRtejdFUUt3aVBXUHpqQTFFcGNxcUtuRVFMT0lnMVlaK0FMZEo2V0pxazZUb2JIWDltZWdhRXBDZ2VyYVdpMmdFSXdnTEs0dDdycHBhS3d4VjFuYkdlWGI2ZW50TnZjdTQ4RmpoVDRoazVUUFBNRnpZakRNd05vV2FRZjJ5Y09lY08xdWdaTTdJekJlQkQvRVBaeW9NYyt5cFA5N1NzcDIvWkUzZDErOFkzOUhMRXFPRFVjWVB0NUxpSnFlWEZMRmdPRjByRDQydGV5WWJIR21QNWZ2dUUxcTdpbis3cUcxYnM4ZDV2TnlHdHNiSlJvaDJMdzREY3N2UE9lNkFNME9oTWRTQUtPRGF5YW5Dd2lhaXpBenFIaDBMaEZneGJUQktDQmpadnY5QWVKbm9PQVI4ZEJ4ODVYVEJPd0kvSDloRDlVWGF1TjQrSWJycXpHUXB4alpaazU5Qzd6WUlCY3FOVTYrR0VYei9uVlEvQ0hIWXVOZmRGMW5EOU9aK2hWYUI1VlFTOXg4TXo5SGRQU1hqQ1RPQVFsQ2V0RFdydHRKTkhCMGRTSWIrQVBSaGhYZ3RER01WRGdhV3lUNlBtNG9oZWQ0ZTVON1lWVkdlZTBQYm1TdVdLazgvaVVmbDBMTDRINDN2am1ZbXBDMU0zdytJT0dla010MWlQVUsxK3djQUIyZ0lFWTc2UG53a2N1Z0dUZE5MblRRWjlnaHhRcmVGTnFxQVVRZkZ6RjdlM041MVNaSEJoNkExTGVpVWhCeUNtTUkyZjc3OURxUlh4ZVh5dEw2VDFaZi9kUUJ6dEIwRnJYR29lMGtUOHU1dEExSE5Xcll3NDlvZkhzZmRJaUJnbmVOMnNrNUhxVGVxQi84ZHB5STloLzRhQ0Z3bndIKzJucG1BOTUzZzdFQUZvM2Q4MnFpMXY4enUyMGk2UDh4cE1ERUw1Ym9PeGFoTlRsb3NCRmFUZ0dRQUhjTzN6TFhqWEh1U2NZbElVR2ZxVEJFbytuU2RJa1ZzWHFWVG8yTWdvK2J1R2g4Sy9pbnVpLy80ZC9Ha0dINXVWM2pQSmpIVGZaN0RrSzZLTXRZMGNwZzhKV2RrU3lJMEQzaTA3NnVHTThEaEs4azhtT2NQRU5wNTRWY2EzWk5zM2VRbGlEQjN6aXhGQ2hxd1ZqZXgwKytBWlBhdjJDaDNoeUFadTNTNENkbWNURHZkWHNwQmtMeUNqSTJ3aHo0bWRaK1oyRTlpSTZOUTVVM05Xd1c4dVlicHhoWi9ic2txWW5aNElEeDE3b3BaQk5ZelgrUGZhZWRtL3RsbmpPMmdkNDM5Tyt0ZHJxS3ZEcjdsNVVPeEE0dmU5MTlCM3cyYno2d29FRWdIV0E1OHdmQWI2MG9jKzgrNU5meXgzNXhmZEdvU2JyaWFqL3pJcjArSTUxckptZnBGVTZQeTdUdEFEcm9EZEYxQnhnUVI2VDMwZWFmWE40NnkrZXBrY0xucUJIQkI2M29ubmJFdGtLUFdnTXl0a0dCYTNrc2NkclVWNFpFVS82VTNoN2ZZQVh3TjhjdkV6V0tyblZuM290aFlPQzA4ZUJBa2lPYW9IY0VyVDAyV0ZaY0Z5MUd4WWpCN2N0ZzJaVzZIYmdDYXhnUjlNdTFuRS9Ob0Q4cDU5NzlQblV4Q1VOOCtNMHJMdG9XQ0liZEE1MWFPVTNxYW9nWkFxOUdVL2Y0aHlZcDlHakFVSUFwUTJEQzcrS1VTeENvZWJRZ0dCWjJ3aTYxc1orbEM2QVEzb0tZUzEvSEgrNjZJUzRPdGNTSzNTUGh6djFhcTZlbU5xQVZiUFJXVkV3VzJESEpGYkIwNXVMQzBrVFdVU0JUdDRRS1BnOWltaGE1Qnc0ZHhZd0JOWUM4VVJjUlBDK0lTTDdBb01XQmduc1VKTjFieEJGRXpXbTY3ZGhhVmlWNGFmeFdkT3RBc3RNbmxBUUNVSGxsNzF0ZWZnTndVbDhxMnYvL0tFZnpMV05NNlRuMjU3NmNnbDNheStLZmM4VWpoRGtQSERKQU0vNWpmbGRQYUNRODk0cVhOMmROQXY0VmZSOE92L2xGeFVubm5XTzBqRkUxbmZaUnVRMEV2bDJWRk04ZmpZakNZWTJod1IvY1FxbkZZNE9sa0VZdnMxUitWdGlnZ1lkU2dGQjBJVnZaZUtFUHdGK08rQldUNElzUHdjazNub0NMMS9SemZEN2c2OHlIdzZ5dWF1RHdHdDRPZWd3YWNMSDc0U0xTM3NRRitmcm8yODZ1UENoNWZ2WFJVVDE1OVJ4QUZwNkdVS1kvZG1sQ0lqbkZyWWx1T0l3dUhwck5YM25RRk13cTI5OHNQcVQ5eFZNdDM2ZHQyU3hJY2tSUHR1MzFHeWJjbWNERFRpemJzMU1tcWxpVTV3K2Y3Q0ViZlBxRTAvSDZLS2o4RG9scWMwMFBaR1FuWU1VdmExNGVCV3Q3aDVlNDRVaDNzcGJMc0x4YUJZQzNQLzY3SUNFVVBjN2UrTGg3eW9LU0Nmbnpta3FuZUIySEFoM090bEp0K1lyZjN2SGt0SWs3M1dLcGx2Rkt0NzdkbVI0VkU4NVh4a1Z2azU0ZnZLUHZycFVENnhMY05ETGt6ZTlRT0x3c05oTHZFSGlURmNQVitXSmlXd0xOSzNicGhRdkdNRGgrN0xlU0kyVmRZWWFPNlphNWg1ZSt3L1pRZkljS28wdkxGdHh5RHA0L01tcEdzK2g5aUtaNStnbnk5U01LdzBCNnJlYjVvRGp2MlNmSUVNNi9RNzRzODBMeHlFdjI2Z0V2Sk4yUWdwYWpJVStrT3NWcWxnQno3cmlpWHlzYUs4N3U5UFY2dktIZi96K0l1TXFPTlVjb0VDUENpalFod0svU3g4S3g0a2xUdGtITUwxN0IwUEloa1RobEVCam1zVnEyclBvMDJqeWJRdWlRelBPWXhYNjBFeHNpMzhFbml6elBrYjYrNWpiN2dSV1pUOC9aZHZYWjZvMWJhWmExMmFyM0ZLRHRRVkl5NzNKa20rZDBnL2pUN01pVGlkRFhxQ3Ziai82MGVYdkxRMkQ3NlRUNHJqYVBQbEZMZmRJWElaVHhRR1I1YnFiV0lRWlc5bTVPbnJDMXJZNXdLU1FxN0ZPd0ZVNEdCUDBlbXM1U0NrRnVUUy9VOFRZcGxPZy81MEc3UVY5OUtWa1BuUWMyQjIxSlgvQUFXRmUwVk9ZVThjNkY4N1Q2N2g3elhWMko2dDI5a1BMcjE2UG5ocUZjZFFjZ0phK2d6eXZSWlR2K1dITjdyRUtkRThUNkZ4VW11Sjl5MVRuU0NFaEgxbStiMnZTcVY3aEFTckJFVG5Odmtrc3drcHlCVzBuZ1E2OE5BUHZwaEk0Rm5adE5pU2JZMEhCK2U1amdTUDA4QmE3ZWVzSU9tWExLWVdYL2UydExGWURiNHRyR1oyNmhzNWZkRDVISFZDbjFIMzZ0OVc4OEMzcytyV1BMbjlQb1U5c1hhTVBXMys2WmhDSWtIdHFZd0hiN2hhRjlnc05tSGx6MWJPbkxRWWlCbDdKWDhGajJ5a0d2R041VGJ2MWdrVE1HV0d4dmdUMU93dzhZZVF1NWovNWxZV3dlS2N0TEkzNnpZSDlxSVI2S0g5UVY3am9qMGZBVHRkcm05L3l3cTNNNDJyT1BKUmxwekN3RUNITlM4UGdDbS94QTJFK09rQlJtdDFseDliNkhBaDlTNkp2KzhaZTRVelZFMVlNRW5uUUpBZmhZdmp6dDhGNTNVWnloSFBsT3k2c21FbFpMeTAwL0R1K3RMS0swd3F0ZmgwVHh4TGdXU053cVlQVHNtaWhKVGV4Z3RhOXRWUTFhOWQxZEN5V1cyL01oN2RFSGZ4bmd4ZmtpWFJjdVZDLzlydkwvMTF1Y01SamtsS2Z6RXRLdUw2QVpSU3IrNlZuaDZmdEd0czRPNzNZSVRneTc5WGxWeFY1UExKWXFBamF1S1BBRXZVL1BBc091aXNUUnFOczdXTFR5c1c2UnRjS0RmTXp3bUtkZm1yTitCVDg1a0s3bEx1UFUrQXEydVJoL2RIVjh3OWsxV3IyVS9EaCtpU1JjK2xJRXRXUnNPTW0wS0c1aU01OU5NS09EV1M2ZHBEakhjTFUwdG1oMGVRb3RzcmdQVXpvaWpDc2ZLL3BxVWQ0K2xtMzcrakZIMDI1dXRFaXdzRm5Mdmlid09VYjNlQng3RTIzYXM5bnNVYjl1a3dyRjdkMVN6dG9lTXF1UGZyUmgrSVg1dFNXNHdTZURJWWpibGU0SUlwbkdkQTF0dW8xQmpMSEtXQjljZDNvN3p3K25wUG5vOWZ0VmI1eEFEdUJ6ZGhwMUkyMmcxa2ZBUWUvWEZTRzQyRlhjRFpEeHZkV2o0ZzRRTXZoaStvSG0zOW41L21YLzg3eS9ZV0kwQ28wNDhtQllrUmtaWWZCTTBiU2FmQml2QTkzQjA4NDloVWVORUVUUHZlZFZ6QnY2OTMweFU2NGZUR3BuUnhpd1VwTlQ4SWtkcWJJUGNhRFV6SDZsTlNjcGpDMU1DbE8zK3FlUHk5OWVQLzVCeFlPZE9kUmFwbmNIMENJM2pUcDd0YnQrdklIbDE5VkVCbjA5YWY5dCtvTFJjU1JIU3VkNDBEeG1BWXFoYmw4dHVTTDZyVTdmYmhUYlBHTzc2ZHpjNVZhTkFkNVV4amtUY04xT2lsUUVrR2h6cnBRTWM3bXBOK2Q4bXhuVVJoZDJmVE41T0hldVErLzhZZXo3M3ZMZytYUjVhdHlPZ2tPUUV0ZlI3NVJiR0hqVWJEWlFjdlFlVFhWZ0JpeERBUnppMU5JZlRTLzJLbGhpVGs4ekMvVmNhREpzSkRjZmFIZ3ZPakZPU3dLbWptRWhsNkZGa1d6SXhmN0h1dUkvY3lvMlhsWFZZbzRjeS9NV25rRUZkclJ3ajJqdkpXSjhhbWRXVmp0emNWUmNqdEx1elQwNjFUMmR2SFp1ZllEcENtSmJURGNHZDRQNE83d3dqdldOdGFyeWFsVmJLbFpsSHQ1cFdDWE5JdDFDVURNTHlrQW1oOTBPaml1T01ZRC9DV1A2Y2UwWEd5WHNwMHJMOXJaS3d4cVdtU1o1UGNTV2pEd2hnRlg4QnNSMUo5T2VmQk1lNnhTenB2WWVNWnl5bTFTUFBpbkc0Qi94YXRZdzlBdFhsVGhYQy94OEpOZnZZYnZzdUo5UTI5YXdEdGJvSDB1M3I1d1dMUXNONSs3dXJGYWJIUEFDZXU4ckpwQmE0ajhUcksreUJ6Q3JHSXlUdGlUQSsxTzBOVGVVRGQ0OVdnclZIRE1yRHo2bFdGaFZvcld0UDM4SnAwbU5RaldVVGp1UjAvVnE5ZGdtU3JpSEloU1A3aE9LdTdscDdWTWRWSXJvQlJMNk05bStDM0I0KzI2cXhYM2RyVFZ3ckkyc3ZvYnhvUExmNlF0V1pib20rY1pqMzB2dGlwdndzQlVlT2ZydEZKWTJoR0dGWkhYSXhIa2x3V08waUI0anJlR1FiQTBwYkZ4eXhmbmFlbEpyUVlPblY4N1I0RmhZZ0JRTjNHajlwQlF1TEM4NHlicXVZcFpnN21kemplTjRvdDdLM3ZSSGFNU0JCM2JJazlIcStCa3RGdkpRKzNHaEhQcDNXdFBMYlFucFlyTy9BQm5rOWRnQWFCd3A2RHhHbkw3K0o0d1o2ZlhxMk5qNnNkeEQ3NXIzQUl0Tnp1UjBOSC9nOHZudGo3Nnh0ZG1KdzVyNTNDYzVTWTdSam91NGFHdzVyZmhUVkhpNWlqc1dlZSs5VWtNWXRJb01nVTM2ZlMyd09FRXVMcStpeTF0MSs2NWZldmwvOXZ5YTNzK0k3dzljVjdINkFrRmZDQU9HRG80YnBzemNVWi9wMzM0N2ZIMzV6dXJwWmNnekdmazRUM3lXOHBPdklGTjB0and3TmFsNnEzVndNK1J2TTdldmxYZ01iN1V1bm1PUGxlNjg3MmRvOVVoVlUrSktadFVYWjk1eVd4NnFSMlJOQURKOUhMN0dKOU1UMkVwMmpqYmVVUk96UDhEVi9ESnZvU08xamJwZUVvaEwwVTVEcndVaFRYWkUrWlIwZFdLeDZNdnNXdlZ6U2RNdDNiQk9keTc1ME1QL1ZEdXRBanp4NTZaV3NBQmZsdmc3QXI2eFJrT2x0aXJvZjNQZ2RXWHB1N1JTb1UxYlZZdzhnVC9YSDdHTEdLandCcU9wWjduMGRSMFBOMFN4d2t2MWhMYXh1T2ZiNitFblFESnhZanl6QTZLcDExckdCU1hTRGVOaTBoUzVoNk9PdUUyRGg1c1VXMDBybGJFdkRURmhUQlB1VHd2ZVhqNDBCdk9yVC84OUI4K2dVTkx6L01RR1I2U1F2TmpnclcwRFhDclNRMkNXWjZPWmtIYk5ZMTZFVkdQQ2ZVenpyNVd0YkZhRlFkRXNHT1pybkZCWGFkOXNGNW1GSHJ0OHVib01nekNOSlNtZE5ST2NmVmpHa2UwRGdwWXNGVkMyaXpuVUtIVkxOVXRjNmxtdUl1YTZCQjVialU3VWdES1FqV05nazJjL29idE44bTZYc0lsTGV2cHZiMzFRVFZ5Z1R2d1o5cUJkZ1dEUTQyRE10UWUya002QWEwQ1ZldEF3ejdzVGxHRzlqL3I3QmYwMmxFRmtsYU1ib2h4TStDMXk4dm55dDNpUlIzK3ZyZWNLei82cVM5dVZnd2JONEJ4TGgzSCtZcmpUSS9ueE1OT2VIb2RCeW04UW5US09TZ2dWckUxNW14dEh6VmV3dEdiSE5SWjNTcTBUTnJIMDI1U3hUMUIwNXE4WnBoYVd0YlBRT0M5TnVvUUJqVThIdG9TN1RVUU9PZ3JGeHpxMmhhVDY0NVRjZzJqck5VU1c2ZDF4WHBoTFROckpjb2xkSTg4MEVRQWxSM1doUWJvMmp5Rk9uNGY2dzhiY1dKK3VmeUhpYnlicksyUUxHbkJKSjBTQk0xSjdkTGxEVzNyNGpsdFhmcWZ4Qk5tOXkyWXk3ZVI5OXlRK1M4T21qN0Fta0ZScUhSM0lnZCtmdTJaaFFOcll0WTFweGNnMjJkaFlvRTI1bTZsN2RvT2JuY3JVM0RjaWVWV1pWSWN1QnM0OElHblgxbHdKdjRDSjIyMkwyMURhRUtTbXBWWExML3J4LzZ2RXhHVy8rVGZ3dVNQUVFlRnVhUkpDblpKdWE4NGJmOXFWc3RJdjVONlFxQVhrZmRLQlBuZnh3RkN2M2dpMTlEN0pVREZIMDhPOE1ZMm43TFNlRktvcUZJY1VCd1lsQU9PNldiRDBsSlRsd0lVaytwTGlMc2VGaitPc01jM3RDd0dIS0hDWE9iTGFZTExhNW5NeGVWeVdmcWQwSk44aWtLZ0x3RFBWcjlsT0xLZjladFN4VmNjVUJ4UUhGQWNPSlVjTUhRWGh5UUZoRFpLUVUxWE9oWkttdDl4NG1PR3YwY09MV3Q5cFdiT3AzeHZvaW1kempUOVBwa2ZwWWl5cFVEdkc1UkE3NXRsS29IaWdPS0E0c0FwNTREdWVPZFIrTVdnSUQ4TjBDcklTVGNISHVOQ1A4emtPK0JqRTI4SDVLc1M2QU15VGlWVEhGQWNVQnk0cXpoZzFQVXRDa0twaFhjcXZBaDNhdXVkd3VQMHh6VzQ1WDd3WDN6d0wwcjl4STh4YmhSMEtJRWU0d2RTcUJVSEZBY1VCKzRjRGpobVVaclgyMnEzUnhyNzd0NUIvSGNSdEdQc3hRZTFNaGJrYm9vZE5vemdhK0tDYm00OE9hS1I3MWZhNFRnaHYxSUUrVFoySC9TRFM1bmMrK0dXaXFzNG9EaWdPSEFIY0VCb3M0NTJCWnRYbW9GQ01pQTRjWGhMdnJCY3BobjVaS0NheVdGMzZpN3BEQTVBTFB5bUUrQnExMi91ak0xZWRKSzA1UkUyM045QlRveFRBbjA0bnF2VWlnT0tBNG9EcDVJRHYvcWpXaDVIYnp5S0F4K2FqaXlGQU5YTTJpdDI5Y1B2WG43UHVlUG5Fb3l5c0JjZkxKZHZIMllXY1B6RnBqRC8rd01PSGxOQUlhL1haamIzYm1TeTQzS2lIWG1EZWZSeVJEeWE3UmNQMWdzcVVCeFFIRkFjVUJ5NFd6bkEwK0RPbk5XV0lCOHo1SUZsdjJ6cjRvLzkxZnE0OGVPeERZMkNmWWwwNGN5a0hiYzJWWHJQNi9jaTBZYWpMaXUwNnhKd0xnNko5MUVNRGdwRDRsREpGUWNVQnhRSEZBY1VCeFFIQnVVQUJQbzYzTEJRNkRkL2RiQk12eHhUOFJVSEZBY1VCMDRwQnk0Ly9jcXNadXpsTmYxZ1ZqTy9nVXQ1dklJSVU2MS95akxOMmJiMll2eDVLYys1RlhjMllNZDZXZHV2RlVaNWNNdmx0WVdNTnJsVHNLMXlCcmNCQytCaDBQSTBhTzkwNEJuY0pYRldjMXk5ZEd2ZndHVXlKempmNzVFby85SnljRjcrR1BDNTBHKzZzVFc1WTJpVFJXRXl2c09qTFpUZ1c0NXd6cUp0SnNyelpEaUFPcEJCem5TemNPMHFkeG4rZEFKUUQwcitxM29vRGlnT3RIRGd0M0h5bXFWckd6aDlUZHhXeHFkYzRjNTU4OGFxY2ZpM3ZVSEIxWFp4QTF0bUZQUFZqejN6UFF1VzllY2wzQTQ5STI1V0EwMmtUOHliNDRuL0dHeUFmajRCL3UxcjEyL2YwTVppUGgxOVZ4NWtYUmJFRGY1bkUzMWF0cC9rWTZPaGd3SHNzSmZnV0lCRnVGN2dFaU1oTFJkMXJNT1YrQVFUZHZDTUJaQ1hxRXV4SUQ4WnBPZkFyOUxKWkgyVXEvLzlzL0JoUGFDYmgrc0xBcDltRXdtM2ZGZEMrY3A5SVJwQlpOQTZpMnhZem1GaGJBYTBLRk5oaU1JVWUvMU95S2MwUkQ1UkpDMERDWjJvWTczU2pmZ25DNFpXYUJ6bkNrcW80Vkp3ZTVvdVg1ckpFM0diL1dZbXptcDV4Q28weDR6MkZ5K09TUmgvWHNUZFdrZkNQSkNGdUF2SXB3dlh2RFlBd24xK1prWXM0bHRxZUo3Y0Mrdkd5S0g1YzQwOGV5R01jOGlXbGFUdkRyd0R1Vks0RitKb2FPaE1BbFdvQXdXbnkvc2MrRlE2Q1pMQlNqWTh1aXpjSEZ4Y3NBM0VKVGdPOXRianlxUWZ2Q2g3RnZFMytrblRJZTZqS0ZPaFE5aEl2WWRzRytkUWpsSXZCQStaVHk5WjlCdUhmVTRKam5VclZvVUMrQWVDMy82OGxqVlNmbjFqRHhibytZOXRYVU1ZRlhhQ09Kbk5qMHR0M3FoVFM4OUFTNC9QdFAxUC80MVd0RTF0aFlLYlYvY0tBVTZhQVpKV0NIc0JZakFpeTRNbmI3VzJLdDkxOFZmZThKZXJYb3lUK1J0Uis5NUVtOGoyVXdLZkxmMGtpU1l1Q3B5REt3UGJWYmlvaERtSm00RmJnZnM2OEhOaFFnYnZDc2FFQS93ZWNBVzRNa2hhZytPM21vT0xFNGlmK2F3aDN4MjRJdHhDbkJrcTNIY1ZCOWpubkllN0NuY0RkWXY5enRJNGNjQTBQYTJhR3JrNEM1MVAzOGt6M2NVVEVrRnE1bzFqVnQwajB6eHZQcHM0Vzg3SFZiWVAvTEdXdzgzVUs3aVpXZ2h6NWtPaHpTMXJkR0lnQWtGUHYyT1dCZmpqT2xqTlR2L2w1Y2MvUDV0bDJoT0VjZ1I1TC9hTFkrUUNuUjBwM0JZSXZRbzMxeS9CZmNabkkvczY4aXYwbVU1Rmo1Z0QrQVlVNUVXZy9UcmNKYmk0dnoyeWFBdnNmRmZnbmdNOVczQzV0ckdVcCtMQTRCeGd2OFBCWTNrYzZoZHZMY08xOFl2eXdKaldZZ2tCVDJFSUo0SEN2aFBnR3ZvOHQ3cDFDaC9Vbjl2U1FPY3F0ZklnTFEzQjNRdGlsb01UNjRtZDlUaG83SVVFeG9GbVhlNDFicFR4UmlyUVVia0xJUDQ1dVBrb0M5RURya3ZJbTUzM1FnOXhWWlFJT1FDZUJ3VTVCZWs0QWV2aFZkQTRGaDN2T0RGRzBSSUpCemhvbGZVckd3bkdBWkNZdWxha2pKTmFMazNuMHJXaWsxcDdxMy9UYjF4cE91WE5wVGQ1RC9PRDgrWlkwTFVPRGR1Yk53Y3lrTm5Rd2p2UjIyUmRnREJ2L0FhZTZWa3hEVElNV2FjdTdVZ0VPanJNV2JoMWNPZlNDWEtJblhjSmRPUk9rSWE3S212d3VvQUNmeDF1WmN3TFBnZjZyb0plMW8vc21OT3F5RHQ5SEdEOTJrRGRXb1dMWExNTlk4Y0hubmxKRHVITVg2d0lsNEtkdjRlQ2lMWDBtY2w2RVZxNW9OTmJ3ajRVZFNJeEJnZnowUHBYaDhkMGVqREVMdEQ5Q2x3Q1M4NlBBVnRtUU1OVjBKUWJBMXJ1V0JMQTN3VzRNZ3A0NlpRVmNoSDBib0Qya1hlOHA0eFBpdHpCT1BBSWttMnhmUXlXdlA5VXV2VjhnYWxvdHBhbWF5enJ2ZElySmc0QXNORHN1dTNpa2hSQVVBUDJWN3ozaXFwanZNdWZOL0p1NHEvT3k0VjZZcTdjankyMm93V21BdWpkb0FIKzB1b2duaTFIMkRLdXJtdVBjRjZlNzNjRHhDclFVWEU1R2kzQnpZOFpNNitDdHR5WTBYUkhrQU8rRmxDUTUrQzgwZmJwTEpYc2VMT25rM3hGOVJoemdPMWlKSlpDSWNpTTVuWUlvYjZOODluelFhSFpqVmNRb0R0WVhWNDROcTl1dFo5TDUxejQ1WCtyclYvK1k2MGtuazluc3AzeWVPd1piY0ZPT3BmRnZEY2pZZURodTJ1T1A0aVFhVG12VG1IZUNSQzIzcHFHY2JIQWJwVTBkVXAzSi9uSEt0REJxQkxjdUFseitmMlVVSmVjaU9BSlFUNExWd0txU3hHZ0d3Y1U3SGczVUthN3ltUTNEb3kvQzJpWVFSbXZvbTdsNGl5cjdxOXNsM2x3SHRxQllKYS9wY1l1ZjNkNlFraVVmK01jQnlIYVp0TWNPK2JTVTdOaXkzRWo2V1BQWkJZd0YxNkNabjBlVzhzVytkU1M1WTNMYllRNkY2M3BDYTBVMUxoOUxmMzZyeTlxT1VQWEZxVmxJYmhJcnBGWnl3dmlaZzlmMEpZdytMZ3VnemcrQU00WjRDcHlubDc2MzZuUDJBUTZLbXNSVEJ0WFlTNi9KMDJyZDhYSVRSWTRqcWZQd3hKd0w4YUIvNFJ4UG9MeVVhTzY0enVERStiejNaajlWZFNyWEJ3Ri84QXp3c3pNUWFrQUNuTnE1Ny8ybzk3dGFiaG52Q0gwWkp5T1Qxc2NvcU1aVmEyUXdEN3ZoSkNTZm15ejJaeXRHMytieHg3eUdXNGZFdzRhTlg1aks5bnhyVzZUTDRKR2piaE4rZUlxMUQyYzl2YmJXSm5mNUk4ZllkbzU0OEs4UHFlbHRkbTlBNXh0Z1ZQdDZDZjJzSHRoOC9kTWw0djB1NU1oRm9HT1Nyb0VwcTJjQXNheE1oVlZaejM0bHdMdk9DQXF3WTM3NEczd1Fub0RsWkhPZlE1RHJFcDdxamh3Rlcwb0Z6WEYwSHdMeE5rd2s3T24zejhTdnFhZDJXRjRLTkM4RFlmL1pjYjdqZGRwcGNsRGJUTUZvUzVNOWhEc21GK2ZlK3laNzgweG5PRHFpUXlGS1BlUkN3ZGhEcUhOUGVWTkErTEhuMTRvNExoWnNaV082WGhnRE53dWhUR1Bsb1dXdjhEc203UjNSZ3dDQnhiUytmNFRhVzJoOENDT0EzZkVnR0NYeE1OU0lLQnVhZWMvOExSWUpPakhIdnZIZHI4VStrWHROMW5uK0w1d0xIYU9NWFloRkVTRnNhUHFGQkFVRU9iTm8reFRRUHNBSk00aERUVjFEbUFVS0E1RXlZR3JxRmRMVVNHOC9MU1dBUzdXMXdhNHVFLzhuUThGdDNITmxpa3dxYm1IQXNKMVo3WXM0eVQyWi9QSHRwRHBOd295WE5kM0czSHBSK0ZPQisyNWVRQmg3bVFaTHNDallSY20vU3lGc2ZBenNIYytRRnVUcVo4UkFtRWl2djhiV1dYNUcrc0V0c3dhQmpEQmVBZzByT2N6REQ4bFVPNlh6c2dGT2doWWhUdHRIVHpOcXFxajdxUDIrUHdxbmNKdjNVY3BqMFZsdlY0LzVxczhGQWVHNXdBdGhaSDBRUmM5RFhWYnpEdERpQkZ3Wkd0QnZQaC9ITWNvTndtN1lLQjhoekRrcFMydSt4MDcwdXNYbG5lMjRIMk52eHNMNnhML2VZNUh5OUlQd25zVmVJVzVtNy9sSEhpTi9rRklsUCtDUDhYcWREeXhtQzFISVN5alFMZ3ZpUE5uZ3dKWkJ2THBseXZveGZKZzRKQ1ZmdS82ZXppRzkvQWxGeXlVUWRJQnEwR2pMREplSEU5OHl3WWRjZUR2aEROU2dlNFhZcVZUWm1QdTMxemh4cHpZa3lUdkxoWG1aRGs3cXFXVDVMM0srNDdsQUFlTDBVMy8xVjlXa3B6Q2ZQbm1PMkV1bDcrOVo3VzlVR3lPSkg3dDcrMlZnOTYxWGExQUU3a3daME93NHZYdzhMWW5qQ21Va1Y4V250ZXdBRzhUbG9FbkhGczc5ei85OEZIK09Ma08xN2RxdnlpRU10TGJqbmJoMTg4ZERaUUxzREJBQU0rMWs5bEJPdHE5dzd3K0gvUi96K3VmTDFyNzMzVlJyL3czVjZ6SzM5MU0zL3llVWpEOFRudkhWRVdra0k4VTIyaVJMWEpBMHVzRkVhTWxiWHh5dTh1Rk9ldkgxdmg4RFVYSkhjWUJDcU1DM05EOTZPNmVtWjlLYUZzUXZEc1gvWVZ3UVY0WitzMVpzY2lzaTlTa3VYd21uVjVBMnBKTWYzRlpLMTk1UnZzWHJxVzlsWDdRaWxOVDkyZ2xDT0lsbXN4OVRUc240OHNuVjdWeklSdzA2Y1dBaHYzUHNZSytLT1B3T1lONWNPYmJtUDhQQmdiZkVVY3VsSU1GUWd3d09CM3dPS3dGN3c0TVlFN29vcGJaSUtrRHZwZjdUUmVaUUVkSG4wSG01L3NsWU16aTUwQlBhY3hvR2h0eThJMVpTWXR3MUNidUpxQm1yb1Q1M2ZURlQ2NnNuUDRyRGp0dzlHOURXKzFZREdPZlFqb1VzSmJ0eUt6ZUV2T1IxMnR2ZSt5UHRUL1ZMTzJxTDV6bnA5UGExN0hmdTZHNUI1T0krWEFJVzJyMkZOWTBqK093bWd1dHdweHBFSlRsay9rVGFBem9DTVJGa0UrOHdzU2V4YU1FZDVMUWxiODlFRmZ1SVU1VGxDaE43dmttektmeng0b3Z0RTRuOWZGVHZZNHNta3hhOFdkNTRqa29ZWDdpbitDdUkyQTE5aEs3MDcxbFFTM1lGN0N0Q2Q0RHpWOC9mTmtGenJNVGhLRDJCYXZZc2dhSnpBTmorQzRBWVl4RFFkMUptSXQ0bkQvdkYzeThIREJZMnN1eS9TYVBJZjVzQkRoMytzVVJtWWFPakpmNnpiekgrRThnWGdsdUt4QS9pM2ZtRjRkd0lkNGlYSnl3RGVURk9EUG9BM2U1bDdnWTZCUVFiN0dYdUJISHVRNTgvUFpsLzdtRFp4Qm04V01CTHVNL282d1RTcGlEcVhjb2JLSmNwUjdMSnVzWW4xSFdyMDdaTDZLOUxReXJwWGRDTHZ5Tkc0czBWNGVadFVVWTRraDUzQTdmZTE3L1Y4WExmL1N5SFJ6ZFdrVEVtVHJVYXlIWTIwU21sbzZMWWpTM0RzMjh6VFNBVElMOFVINFBqelNweTdCZW5vWjdtLzNCU1VNVU5HejFXNGhJQkRvckh6S2U2emZ6THZIWjRQSWRLblVKWVFYa3U0VG5LbHlVZVJObkVTNU9LS05jaFRnemlCSTMrSndGdmt0UjR1eUM2eHJDMStGSzROTk9sN2dNWmx3Qm9IVVdMMW00SmQvTjREa0lLR0UrQ05kT1R4cldyVUsvNUVaWXY3cGxuVWVFWExkSWc0YmJGcXQzajJEc0xZVEZ2UGhqZjdWKytSa3Q2K0xVTjhUejJoc0VzZ0Q1bEQ4aHpPWGhOcjVYMCtPZnJYM1BndTMrK1NZRk9zM29FTzZ6dGNCQ3QzWURFTEgxRGdmU0lENlBxTldjeEEzdDhsbzZjM0c1VW01Q1B0b2ZtUWl5MitrWFJ5UUNIWmxtKzgyNFMveHJhR3k1TG5FMHhGbEhBeXNoSGwxVUkrZnp3S1hBNTREZmdSVkh3QkQyTUt0MCtLNTlWMlJKbjU5MkhiOVpOMmJ4WElJcndNM0I5UXBLbVBmS3Fic3NYcHY2bFFjTDZBWWRPSGJpSU90dExNRDcwU2twV3dHcjBxOGJBZUVwd3gxcmYxYStkM3BlZkwyMmRYbER5OEdjdm1ZekVvU3hCREYvamg4UXRxSENuUEYvYWZuUHQvREk4cDNnbnhpMzRmM3EvQmNtL1B5N3MwR0xTNlZ6NU5HRTlOUGZ0S1VJZFkyODZBdmFmTmErMHN2SVdma1N3Zk1KRkNUWEt4Ni9nV1VSZjd2WE5OM2lRUkFzZEl0ekY0VVhVTmFoSzJjSXZ5ZzhINFhMNEZzVy9POFpFcjMzSU9LQ0s4SmxrT29pSFBQcUJrcVlkK09RQ2hjYzhPdFhBVDh5Y05maG9vUVo5RVBaS0JGMnd3WEJ1OTRVUi9kKzZVNDEwK1RmNGNmdURnUXEwc2k1ZE82REQ1N0JibFJmV2U2UXRMTzNHQjEwQ1BicDZ4QjZZdDRSZmJmdFFRb1FsVURQREpKNW16VHNUSE50L0VPOTJMQUdTUmVDVkFsME1NY2YyRHdTd3FkaGd6YUJnSE9Ga1FyeWRrUWhqMVg0WitDZWFCZnUreWxoSHNJY0ZkU2VBMzcvazBWbzFFS2RPQ01IZFBvZCt6ZHE2WTBNWGYvTnVOWFRnSjVIdGphV3BNdTBFTG9VOEhRWEgveUxVZ04zenkrWm5tT09VY1NPL08yRHhuSWZjUnRSb3hMbzh3Mk13NzBNYkc1Rm95b2g2ODBoc3Q5R1duYjJGK0ZLY0FvOEUzaGNmSGdVM3l3TFY0NHJnMWE4eUlzYSt4TDgrWTFiWVJjZXBHZXJOVUQ5Vmh6b3hnSFdMY1JoM1dJOWlncXlVU0VLNG9IUW5nMytsdThRQnFWalI3UkNNUE1zZE80aGwvSENubm90c3ltM3FISC9tUUJQeWtUR2w2WkJSeGd4SnhlV2pTRHIwaUE0b2hMb2crVGRMazJ4bldjZmZyMm1aK1dpOEg4VTdoemNQV2lRR1hiMmNCeFVsT0YzVjROdk5scU1nUW5rL1FYd3VCQUQ3cDVROGhzajRuMXdzcFBoVXduem5yaW5JblhpZ045dkZEcUZEK0NmR1NCTjF5U1lKMTlvamFUN2tnRHozRnV0WVRTalQ4MGVUM01zbnZCb0wvZXhXdjA0M3ZZSXV2cktxUUVNUGdSSTJyc21IRjJFWS93ZElPdUIrRFcwUVBmTnNnUFFleXpKdHQ4Z2pnWDA0VkhxRUhjVC9sZmdsdUZlam54bTRkaUJGK0JLY0RzZDB0M04zb1VZQ2k4Rlp6RUczSDJoeERkbmc4bkNiZlBwLzhhckFzV0J3VG1BZXJTSzFLeFRVY0JjRkVoYWNVQUF6Z2I5eElweWVQRE9jeXdTRjMwaDk0clRVWmdMeC9lZTRMQnAyeHB1WTlOTUxFM0hZUzlOZWZhRVNrUktOMFdWdEVwUFFhUDhNUVpQeU1NTXlJaml1MjBOVXB3b1Zya1ArS0dPa1ZzKzV0T25CeHBUR1F5OWptUmtSb2xQMVZHREMzMUNUTnE1Rk9ZRFZkUStpOUJUZEw5dVpIcUtyQ0lwRHZUT2dYVkVqWFB0U2UrVXRJbDU2R29aQzRKYVhxNkNpMUUwcWUwaWVsa2tnUjhGZWVQeWxCNVBYM1BOL3pyTGRPSXdHZUtGZzBWQXE5Y0cyNFZrMWFzTEdCTjRBRnlrRlVKOEhZOUwxRWI1MjJCK01zN0pQNWNpSUdHYnNtd1FQRU5yNklOa0dtY2FNR0lCTGdkWGhCc2I0UkZubVdQQW5Zc0JaMTU5anhpNHFsQ09Jd2NvMENNQmYzQWRDUzZKcEdKcGN6eXdoZnUzRTlTZzhjVC9UWWJYTEYrZzQ1MTd1aWtnS05TdHNOWG1UQ2pCZUdHZXlMQjNYS3RCOGhvSkQ0ZUR1MkFHQWN0TnppWWhyVWtuSGQ5NVZqemZMZVFqNkVkWlFHaDJFUHd4cEltQ2pvSGxWaFFDZmVETVc1aTUwUEpiL1R3QkRxQURtVVcyS3hGbmZaRURySWh4S25TS0EyUEpBZFQxMGxnU0JxSUtUeTlrZ3JTSnJXVUJqOHB0clV3L3lFdHg4WW5jZG1aYjNRVm1uZ3Zua0ZacS9qVUkzTnMxVFR1ZytneGI4UC95aVh1emdheDZmaFhiNEZwakE3Y1VYclF1MlBKSGE3d1IvdmI3enZNUlpGa2FGTWZRYkVEbDNSazA4NVowSTk5MzJaSy8rdWx4SUJjeEl6WlJSMVlqeHFuUUtRNG9EZ3pBZ1JmYldtWWEyalkxV3dyQkNyVG9BMG9CUjB4UmF1L0RiV2xFU3czN2tBN0Nzb29uQlh3M21NYkNPV0ZxUnhwcS9aYXBQVkdIaGw3QnV3T0JQdjJ0MzlvTnhiRndCeU9CQ3ZJWERyVHU2NTRsb2FKcjEyazB3RDNyd3R6ZUMzM0hrRWZ2c1JRUnl2VkI4WUJWa2NCMkpGZ3dnSXdJajBJek9BZHlneWM5bHBMejVsRlY4bVBJbFlmaWdPSkFmeHd3emYxWm1xckYzbkEvS1lVdjU3a2wxRzF0RzNLeWRTM2NnZ3dQZWM0U0Z4MEhEREM5cjk5ekZyZ2h6T3Y0YlRoMk5pUnRmMEc2dHNQdGRNekdocUJIbHVNQVVmUjEyMUNBeW9NV0p2QVpCMFVoMG0wTmxmb284U0xNRnJtam4rcHRsQnp3VFVaUm5TbEEwZ3VvbkR1akxJUEtTM0ZBY2FBekJ3N05td3N3bnd0QlNOUDROQ1QzRExSb3pIR1haS3BVVWl2UFluSDVKRHhtRVRjQmsvbFVxdnZSdGxPOHh4d205alR3NnZzd3NkK3ZGZDBkYmZjc3BNdzBoRzUxL3k5a0ZqMC9IYnVxV1lmSUh5bG1nT1BldExjSzM2MW9PM1g0MDhyd3dtMDhlOFlZVDBUMG5SbGdqc0xjdmo0TWhWRUo5Tkl3UkxTa3ZRcm1SREhTYVVHcmZ2YkFnU2o1enBIbWFnOTVxaWlLQTNjVUIvek9mU3pMOVAvdDM3TzFCMEhJdVhGcXpsd2xmdk1XVE92YUQ1UWx3YmNQRnNvSGxaZHFGUnlIWG9VSzdFQks3TnZmM2RVS2UyTTN1Mk5Ndmt6YkUzUG1yeER4WC9pbXRrVWhieWFoUmFlekN6S1BucC9XSzJGTm1JTDdEczB3djErN3ZaTXRNVzA2K2QwbEhUZ1BnRHVCY21qYWQvTFBTVUl1b3N4THcrQVJyQmdHZ1o5MkhjL0xFZUNSS05iUUtMaVFTZ2tFeVpIUlBMTVJabE9JRUpkQ3BUaHdtamlRSFZkaUgxditqK3UvOGtldnVYWlA3ZjllcWRkdmFyYjkzZG9MaC8vdGg2NzhrLyt3cjczdWdXOG4zV3RmK3E0UC9lajgzSS9XSzEvNk85V2RYYXhVZi9XdC8vY3ZYL3lZOW9ZWHYwSzcrVjJJY2E5ZnZCU2VjSHhvZjYwOWR2V3ZQL2MvTFAvZFg1eWQvcTd2K0UvL3o3Y2ovdDRydnJyMWtzdi8vU3Z2L2I2Ymp2M1hYL3hpN2JlMEgxcCtoYWE5TXBEZWYyMzNNSjQ3K01yMjVCZGYraTN6dDlJMSs4eitDeS85MUtjKytNSW50UWNlT1BOci8rUC8rUy9lOVJ1dmY0VTVXWDU3MG56cDd0N3ozd2taOVB2dHNJektMeGRCUnJ1UWVaU2xBd1BHYWRFQUJQQVdNRVZwcmlWaG0zQTAyNWI0WXh3QTVjU1k5djl2NzFwaUpNbXFhL1hNd0F5amFYY05Oa1lHVzUyREpTUFpRcE1XRmw1MmxnVHJLUmF3N2V3TkxLZFk0VjFIN1dBMTFVdTg2YWd0TEtoZWd6VFJHOXNTWUxMQmxoQXlrRzFaK0FObXNqMFlNWXhoZkU1V3ZKZ2JMeU15NDNOZmZMTHVsVzdGaS9jNTk5N3pmdkhMN3RieUVESE5XcU1vQXlDMEpTQnZLc0J5WUI0cTRPd3RCTGllSWJqWEZRSThCZGVSQWs1cmlKWno0d2h4SkZXY2FHbkhtUWpHRy96am9xengrUFVBbktpdDBRZWYrUFR2SHp6OUx4ODYrT05mdmZkakw3Mzk4UTkvNEFNZmZiSjYzN2YvL2x0UGZuancvRi9qTnZ5UGNMdExldjcxNE9BRFA3bysrK2p2elg3ejNGTUgzLytQMzM3bnpYOTY5cWZyOGdQVTRjTjQxbnNiZjNDSGZQRDhEYlRGTS9ZYi8zNXc4Q2ZmdXY0SEwvenUrcy8vNGVDbjYvSWJUdzVlK01ObnJ2L2ZNODhkL1Bwbno3MTU4S3VQb1FFeGlvUmdVb0NIS2ZMQlQ5ejQwSXZQdnZYQ0Q3N3o1Zy9mOCtRSWVjOGZ2UDM4UDhLSEh4eDg1TStmKzdNWG5ycit5Kzk5LzRYbEMvLzJxLy84NWZmKzdyOGtRaGRwOVBjY2R1NHIyRHBIZHhPcnNhZ05Gc1dnaW9MaHhuNkdZRnRkdlJRQjE4MVRXa3dldzI1YzEzYUQra3R3VnNrTzR1SUcvRVlERzBWTjdzSHVTVkdCNVYweUFMNW5TTm1HL3U2QU9NS1lTZDQ5TFU4cHpjRlQySXZLclRRcmdXOFR0UHhKczlhYnJlQ2oyaHE5UnYrTHo3ejM0UEQ2cy9ocTdlbUQ5L3dhT3pQZmxFTi8rOEgzSFZ4N0dtK3BLZnpSK004dWowKy9jMzFkL25aYWIxMmZkWnlrbXpvTzJOV2hQNGR5WThZbXZ4YW0zVVpORE9UelF1QTk2d2FpYkYwNS8rZnQvMzN6NEZtOEQxaGpzZ2pQMk4vNk1KN2RQNDIzNXY4TnQyRHZkLy96MXNHdm4vbk53ZXJOdHc3KytXc05mKzJlTjF2M0RIMmVvTTJ0dXUwSzZoK2h1NG5WV0xRZXVmTktNa1pnRVR5NTJkaWI4b1lrNnhid3VSRnlVNDloYjFGZWZmQWw1T2h1QjE3eVFpaXVhR2Rhc1Y2VmFsVnRWc0d5T3NiQW1CZzRVM1NXLytxbHJseHVlbTdqVyttQ1h6MDA3RWt6Uk0zOXFhMDhicnVaMHdGODdxQXFrU3JhSmhnM3dsZWgzd1dSL0dkZWVSRnhERDNjckdvNU5SblEydEQ1dUgxUjA3WlZOd1pHendEV29UbUNlRVV4RUp0SGltUUdnb3FVY0dNTkhOVU5IUXM1bmVKZFlSZkN6ZjAyOU92UU56Q1pMcUFuMEFuT1Rlb3pvSFZSbE5RM2JTMk1nWEV6Z0hXSEY4Um55bEVreW5nR3A4Z0ErbndHT0kyN2Mzb1Y4MDliVWQzUVUyZm1PUElmRk9sYWVHWDhHdlFuSUpxYiszSFhEb3pjSGhja0RWbG9nR3pEUU4rT1RhSnQ4VmpadUJuQVlPUmFrMEJ2S0VkQ1RKUGhNaEFydWZZQU44TkxEU3oxRFQxMTdFVER1UllZM056NTB6YytscCszd0xsS1RRK1ZnazJVY1BZSlJvdmJmZUprOUxGZ2JUbUVuaUdRcjBPMU4vTkhXb3Y4NklrZVlBRG9kKzV4ZkVxc0lSeERLcUsrb2RPcjlOSDd1WXFIN1VCSStIMlF6NDM5dUIyVXRUWUdHak13YmR6U0dnNk9BYXdsTXlnWDRTWDAxVUFPeG9Gd0RiWWxBK2o3UTBCRUxXRmM4NGZZTHhOMzB2YW85cFc3N3dpY25DTndadC8yeTNvNDU4Yk9PM2ErMzUvRHQyVVBQbHdKazVxRDgwb1Faa0gyeGNCZHJBZDNTNHp6Ni9KVlFka0VlVnhMdXBDNEN5Tm1veEVEN0J1dEp6TEVVcE5nR3pvOUhOaW1UcGR1UVJlWXlOelVMNWhoa2pFd3lWS1dNQWF1TmdNdjl4eitPZGFub2d1S250MHk4OWc3anNIQ0swcE1QRVkveDBwWWE1Z2dqOXlsZzNCNGp2TjdNcS9uTksrc2VMZCsxck1mUXpQZjFaM0gwT0kyZjR5Qm9URVFEYzBoOHdmL25zM2xvL1pZa1l0SUVXc05GWHhEcHhWczZpYzQzSUgyOGZVN1hTaVNWOUZCY1ZIQkZjM2pZMFlUWThBWTZKY0IvaXVMeTM1ZE1Pc2xETVRJMTNyVS9oRDlURHhWNldSRHA4ZXA4ek1raDdSeDNMWk5uYjJ6Rm52RTU1alFQeTcxSVExeER4bmdEVSswaDNHTlBpVHNFN3dwMVhyVVRqNGkvdEdXempaME9vNU5mUUdkSW5rS0hjcmR1bTNxN0J3bHdjQ2ZLVUh0RTh4eW40S3hXSUl4d0c5NzdNSTZHTDNOZ0xHbWNjOTZyVm5yd2xiODNYbFNXTkl5czlNTjNmbUtZQ0trU2RJUWZ0cEd0N2lwbnpCaFlnd1lBOFpBRHd4d2tlYy9pTVhmdGs5NnNHOG1DeGhnZnlBN0tTaHFreFZzcitsbFF5Y1RHTHhMNkJ6Smw2RGMyUHUrWTM4Tm5jZUxqS3NxUzZYQVowbzQrd1N6M0tkZ0xCWjFCaDREY1o2aVh1QzQzdGpUY3p2MHhJRFl6TFhlbXpPU1UrNTlvVUxxYlVOM0FZbU5mWUs4TzlBKzM3SEhzSDlWWmFrVStGVytLQ3FqVUl2Yk1uekxyOC9BUFRUcCt5YUNYdE9IWTZ5REsyd2daMGp6cDdVdlEyT29TYjhNc0QvWUYxcnlHUDBjYVlFVjRmUytvVHVuT0tDaE1aUWJBdS9hdWJrL2dIWTU2VjdHcEpyRDVsV1VwVkxRTXlXY2ZZSlo3bE13ZXhMTENuR2M5QndMMTdZWjFyeEZ1dTY4S3Z4NUJYbXhPTGRraHd5azNOOVdOamxYeHR1QUc4eUdMajNEQUYrbW16dXZYQTlSZGdTOUIzMGs2d1ZLUjRGd2h3NjdWSEx3QmliRHNSTFdYc0J3UE85RklIc1dCTmNZaFBTd3A3RDh6ZngrZ1IrM01aZjZ2dWdvY0d1L3M4QjVoQWkxTjNQK0hERUp6ZHdnTjNRL2FCSUJQWUZPVWNhNzkxUG9ZNytlMHZsTmRPaGNDYXNNNWlGaTZVSm1aUTc0K1hBbThmTmFuTnVHL2k1NWZXMFk3M3BncVcwTXpGSEl6YlZMNFkzSkZIT09kK1puU0JkdDVzNGZmdHN6ZHlkMkRNdEF5dlZkWlN2czcwZ1pzeEJ1RkJ1NjlCeVRnSGZ2RVhTQy9EdlFFQnY3VmIwcTVzRFRrR05NakVNTm9EM0FXT3hCREhzYkF0Y1RCQmQxRkNBdkhMNEFtMU1jRHpGSE9EYmtZL1l5Tis2bkcwMVp1ZVVyTUpCeXZPM2lxcW1WT2ZwODFiUnhuWGJQMUtrOHRMb2dLWVpQTVRyaUJNZlhGUDNqdS9SSk90a1ZZUWNQeFFWRzR5T1FHOEJobjBUUUVCTDZybmNDcDI4cU9aNG80UXdhQnZObE9tZ0h0emlIZVg0Ry80OVI1ZGFXYW0yS2VOTVJROCtnM01pWnZnMnRJL2ZSN2lCZDgrcTBzN29WR0FDMzdKc3FGMWNWMEhKVmVBRzN5T1hZeVc0RzBDRlQ2QXFxSmZNaXEwcmdTUkYyMzNtSTdWZ3BQc0t3THc3N2pxbUpmZmk5WkFCS1VzZ0JzR2RLK0VtVEdMWGJJSmEyWTJkVzFTY2wzaUpwRDVnVEpWd2ZacjJZSTNNS3ZmQUxHNXpIMG05THQyY0FmY0Nid2hEU2VWK043cEY3V2ZlbFYwSEhaZVVOOG1jTjJveTlTYUlZZ0x0TFY0UU1ENFZaSGNHSzF0MzVJNHpMVlluWDY0VytwS3hPOXJSTzVZQjFad0d4ZzBPam41WXdjaHJBRUovMnVYWHBGUVg4MjhDTEZYQ3VQQVI0UElSZWdJaTZUMHVxY01mWGx5ZFZLbXJXMlpzTm5hUmdVaVk0bkRPdElCTUZqRkZCcEp2UEEwV243MkxDREdYRDJSa1dmSjJna3VZa2pNdU1idG5veTVxVTVmTlhCVVBnK0xqTXdiSGtvMDhpK0tyMUhZa01POGJKRXFwMXdYQWJmYjZBSGdMVHBBRUQ0RzZDWmdsVTR5SUxNRG5odHhLZHZUZVhsdmRxUTA4RE81TUJ0a2dQWVpGczRYN2pwaGVOV3hZM2pJdXpCNWxMWC9sa1FVdDJjYW0xZVp4b09kd0VCNHZqRE8zYVB0VllOTEVkb00wOEFDYkhWQVE5Zy9KOXVvYThEQkJ1NmxNTnNLdUVrWTVYampkeUdFTDRjK3RleHZQZWJlaUtSR291N0NFR1RTak1Dd0R6Q2xOTCtNZ3gxZ0lMaFFNZkkyRGZVc1RuNC9ibERyeGQ1VHVhWjhYSDhQOHdPK3MrTVc5ckVseXQybUpvdEUvWEQ2MDdhZW5TcXppWlF1Y3lzMldhRjFFSitsNFRzNlZMdzI2ZXp2UFg0V1dvOWYwT3hsRFNGd3U5YitnZ2VCcGdNWHJZRjZGanQ1c3VyTnpVTmVVMituaXVDYWlKbGZwMlZ4TVRXR2NWOEpJS2RhcFU0ZUowVXFXaWRoMXdOd1BtYlczY252SFlkMXAzMGpLVUdDY0w2RDJaMlRMTnZyK1BmcmlBSHJiRTJ0dm00SVlmUFNZSVVIdWVTODVPc1g3R01tT3YweW1wdkp1SVNDNTBCYVhNTlFNSG5zTmRnemY5VStSVFV5eXZYVktFUFpROCtNckJIMExtUTRuUitZRWdad0VDWFRuOGJVZlluU3Jibm02ekY2SU0vaThVWWtqcStLWmdqeERSTnBzb0R6RXUxbmJ4NXhDcXNrWVJVTWdTNmRtMnVLNWlHVGc1aG9iZ1cxQS9qS2VRUWUvUU9iaWdFZlFDdXNSZytnbjA2MUJlSmQyQ3VzY2VhZ3NSN0V3RUxwSW1kUm5BVmVZU2JVSTg1YmlQL3BuWDlTZFUvZFNYaXdENFoxVXd3Zk1DOVRSZmI4U0k2YkNLYlkwNnNCVUI1MlVGckpVQ2hpb0UraVlCb09hZHRQT1BhOThFT29kcXkwMEF2bzUrNlhRY2FBZWhoUWNlSnRBRWVOeHozRjZqQlM5eHpqRmU1akpqOUdrUU40WE9vUnhNQzJnZFVadlFNQnJWTWJ5bGJxRlBXK3JYS1VxRzN1RUlabFlub0pwMW83N2poNzhjcXlHRWR3S1ZOMVhVNVh6UmxMZ0xidUd3Sm4rMXhvTVNXVHR0d3M0aGRLbGtUOElzMkVmSXVKQ1p5bW1Pd3pudFhEVkIzT3kzQ0VvT1FrdThWL3lDclVTSnNhZ3RNZkNESGFuVmlVbVJQMHF4Rm1JWDJlc3pEN0hHU3ZFV3dWd2dzL0xHcDhVRGJVSkR4aFhWOFJXK0hFTzFKYTdqUTkyNmNIYXU3UENzamc5S3RxTXFObUZycG1UUGg0bVF3Ykc0OGd1VXp4ZkFxOFZ2RlY2R1dnZXhjbXd1bFRrc2c0dUh5a05qdjhvaWJaZy9iZXdJR3NJbUI2K1duQlg1b2dTZUZHRVBMUSt4VHFBaEZ4eE92RmxYY2RNV2xEWkRDYkZyWDZTZ1RRaWY0aWErN09vTFlNNmgybEtMTXlYajBhNVlYVG5zWFNqWmxEQ2NWeFBvaWN3TW1FNkFQWE14N2RzUnNYRmNMZ1B5NTBQSFErUlE0eDI2NXJ0V0RycmFtenJhSEVJdlFMREcrenpYVHd1WHVLcEh2QmRhSXZhemdQRzdkMzVjTUNlaDdCQTdIUit2d3dadGhoTCtqNENyQnVCeGd6YTdtdHhHaFVienFRZ1kvSEdPeFNpN1gxVGVJbS9idjZiWEFsYTE2UnhvbXQ4NjBEbSswNDB4WGppL05OZFFZaGZKTFdTK2pqN2ttSmdYVlJoYkh1TGdtSnhEbC9DZDQvSm1SekdjbzkvbUhkbnExZ3pJaktDYXNnTFlTZFVvVUhjR1hXZzZrR0pOaW54UXNwTVVZUTgxTHhDL1JWVEd5SnhwOFVBczZFV1JvUUI1RjAzOWhpOWNtRGp1UThrWmdBOWIrRGRIKzFEK1ZaN3J6bjhsa2lLSFYrVUltOGRLZG4yWUUyUk1vS0g0OWUyNTh5VVNFWFJTSmY0aDFZSFBVMmdNN1pvem1Oeis2NGdoOGRUSUZ3Uklja01JQjl3Y1dyZ1FJZjhZeWs0TklZc3lNcFNNSldYNFE4eEh6T3pqTGljUCsvNE1PcXZEQitvZlFvL1R0c1RvU3NoTjRUaXQ2ai9hUngwNHkvbHlYTVVuMUp1a1BvWG1jVkxGSDFsSGlhZElZbFpKdys2RmttMEpzeDQ3eU9paS82VmRtVjdnWkE2ZFZPR2hqenIwRFhvQ3BhOTl5YnlQMk92WXZGYW5jbGxkc0x0RVdjakhIWHdreFUxMkNxWHdHUEpuQ1B3djc4N1dscncvSEVsZVZwTlRQcjVqUEVNUVBpYmU2UXZDbnNOWlB0YnFReDdCNkFxYWxCaWZJZjhRcXZuS3BjUlVZZllST0V3S1N5cG1nbC82djRTR0hOZk9HemYrRXBjaGpsT2txU0huc3pQM0VMek4zRW5WbzlJY1BJWHRxS3BOMWd2WVJ3L2d5ekh3RnpEVDF4aDJWSEN1WFVBVCtKUzR6RDZPNEdNR3U4ZFFIdnZraGZPRi81eHJndU9nUld0RFAwR1VydzA2MG5yT3ZZak9XeFUxVVZwTWlxRDd5anVxT2xBUmV3d25iL2ZsNkVEdG5vSy9TTU0zOEx0djgyZ1hMWlhIbmdSU21vT04raTFnSDMwYU1TNmgzNVd4RGlETm02a0V1b0F1TWRaNVZCZndPZ1dvMUZ2cVJwb0I4Z0tIbS9teVdmTnVXMmx0Nklkd213SGY2TmI5SU5iTzBYbnpNbVNseGFRTXZvLzhJOFNiVkRXTStEbWgrN3hhcnVwcUYvVzJqcFVtRG9EZkJPMkdzcGcxQ2FGcW00Y1lkN09xbFdVOXBUbDRDdnVSeEsyYUR0Ukh2QXVjUUNQb3E5QWhDemU1RlpSckFZK1VaUDEzOTU5Wld1VVF4eW1VeDZHdUorZndyZW1Icm1qYXZhaHM2SFFiZ3p6QzRTN1RJNWVYTU5HWFpURW9MU1psOEgza0h5SGVwS3BoeE04SnlQcERuWVJWUTJsYmo0dmFETnl0MmdMSjl1QjNndk1GOUliTTM4UDBYNEk3eGxsYmxPYmdLZXhIdFkyalFjQSt1Z2Q0K25RR3RTZGhJS0ZIS1gzdDJxTlBPMDFyL0d6TkdlRWdmT3hPUm5xOGgwbStIS252bmJnTmZsWXdOSU55UTd1cUVtUXpKNW5wK0R2WmMySTV6eFpqalRIdG95aUEvN3d6bndKL2p1TWQ2Qk9vU2JjTWNHN3pZcFA3MmVoRWJVTUhBVnpveDd3UThXSWtHbDBQOXVCdzJ0ZHptQjc3QlZ3VDlvSnQ1czRaOEJzamZjK2Q3OW54RWVJYjh6cXg3ZzdFd0FYL1lZQytpWW1aam9FcGtpRnMwSVRKSmdPY2MzenF0dGdzR2tlTzJvYk9jRUhFQlE3bjR3aDl3OHM1L0Y5dDVGcEdJUVBwb09lQ3d3M3Vxa2p3emR3UkNYNVBrQjdyWEhKaCtNY255RGoyTTBkOHpqN1NscHQ0cEI4UkZHTmdDWjBoK1FVb3VUTUp3OEJqd0I1eHprRlhZVXgwZzZxNm9hY3VjNUJ6NFJ1VG5LSWprekU1UEFSZjA4RS9neTlqNis4bTlEMUFvMW5IRTM2TWM2bU1XMjVJNUc5WlZtRnMrWWhsQVo5UEEvaDlGNXY2MU9IQ3poblNQT2NZTk5GbDRCVDhUcUNKTG13L2FPb2JPb2haSVpSaktDZndHT1FjUGtkamNIU0lQcWI5UFlOdis3elk4SjB2ZjdyQ3NkMlpDRzRmZFdZMGpDR3VCZHpNRjJIZyswTkZUQkdzaCtpZldFWUZPMHNvMTlVaktPOG9UZG94OEJETlh3S25VVHVZWWJWVzM5QVpIa2hhNGpDRGNpSVBXUjdDMS9tUUhSeURiK0J3QmVWaWN6b0dmMnY0eVBGN0I3R2QxR2lqV3BYY0FuQUdQVmNGN2c1c2J6ZHpRZUZjcExXU0wrTXVmV1BjWVR3azBBbU0zSUVPZlgyRmk0T1RSL0RvQ0J6T29NdkJlZGZTb1NBYk9uMENXUXNjWnRDaERyb0g4TzBZYXFMRUFQbzhBdFFSOUxFU1pKOHduUGljOUhHZlR0QTJmT0FGMHh6SmM1NlBTTWpoRkw1ekxkaGJTZU83RnlEQUNKdjZwQWdYTm1Qa3Mrd1UrZ1Jxc3AwQnJrbDN3QnZIWTdLOTZuaExnMjNvcEFURXVVMmRFM3RJY2c3ZmpxR3JJVG0xRDc2QTB3UnhUS0VoRnJpdUtEcEZISVBiaU9EVEhBVGNnWTVoQVQrSG43d2dXdUo0RlNSQ2tOdzBOSVgvRmtGY0JnaHVWOUFJNVJQb0tWVGJQaUJITCtUa0RuaWFRT1BSUjdNamdLQWJPbTJEUkxlcFA5amhTeGZGWEFqWnVmTXVqRjFWRytDWEM4MEo0aitDUGhvUkR3L2g2MHZ3UFJxcXovQXRobTh6NkZCNXplWVlmTDB5Rjh4cHJIUDBpN2Jjd2wzNmZCc29iVU1qNkFUMTdrQ0hPamJnV21mQ3VYeEVUcUJ4WjFaN05oUjhRMmQ4SUpRRDdoakpMMEE1NGZzUUR2TFpWZXJjUGtpV05zRjFBcDBpajR2TVkxazJzTFNiL0J3Znk0SDV0dUVPZkZ5a3ZQWTVuemI4UXNZRDZCUyt4VVdGKzU2SHVCUEVlQzlBbkdmWTFBK3I0Skw3ZEd3Y29mNDU5RW1WZG50U2g3R1MvNWZBQWVkeXNpZHhEVGNNRGt4b0RPMUtWakEwMTJLa0s2Yzd0RFBUNG1ZWER2c0J1dWd3dGwybUVsVG9MUDVkL0RRcGgvOWR6NmNpVGp2bHNjaUJCbmxSRTc1M3RVbjdZOW5BbjExTkxuYlpMaXBQL2VHOHU5aGxZTVRsTVh6bkRhTkpYd3lnQXlaUWRrUW9XUUk0Z2xhNnNxM0tReWhuZThTZFZZMWRxeDVpblVIWjk3elk2bG80THM2Z0U2MTRob0REZU5LNHV1U1VtOFNzNi9oaFUwT2lVSDdEdVdNTkJ3c3dXbTFhd0R1RXpxSHN0ekhMQ3M1ei9TRFBxdXQ3cURIUkZlNjFyZ3lWMlVHSFRGREdnVHFIYXZ5SEh3K0FjNEhITFRHTzZnSi8zMUVIN1Jmd3FNOUhVNkNUZlQrRDhuZ1RHa0llQVRTQjhuSGtJb1NCSVdHQzB6bjhJWit2QlBDTFhNWlF6ckVsanAyTDBodzhoZjlSS09maDR3V3d0ZmwvREV5KzBsaHArQTBmWjhEaE9PRlJZKzBGVERCNUNPUUV5bkczQ0dabDVNQzliK2lTUHd5d0NjNW5xVTV4ckRMSTJOSHM0SVNxTmRpQlZTandNU2tzR0cvbXlWQW1TTnIvN0hlbmgwamZxa0h0RTlUbFdGaW1tdUM0Q0QwbVlHT3draTdhTXpoSUphODNvSFdFODJzSlRhamdrdWxlQlRGRkNnNHdsa1FCcHhBQ1BuTHNuaFFXdHNzTXRxR0pzY0p4TW9GV1dYL2JSVlBjMm8yNUJZclpUenlhVkdEZ1dvVTZ2VlpKSndZSFdFNUNUc2FjSVRzWkJBTmw0eUIxN2twdjJuVTdDRnhPUkp0RHBLbVU1ZnJ2NVo4VjV0aEtuRnZ5Q2pLQXNjSzFsK05qbG9idmpzeHJ1dUh6S1EvSEZuVWhqa3VNdVNYT1RSb3lNUGdOdldGYzFzd1lNQWFNQVdPZ1F3WktMcnJ0WWtRMkVqRUFBQXltU1VSQlZMdkRQakJUeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeGtBRkJ2QmZFSDREbWttRkpwV3FaSUNYaVc5VWF0U3dFa3dFaWNHNUV4cWZkcnJreThXMWI4ZDk1bkNmWTl1M2NYaVY0bm1xYmJBWTJKLzBCbmVWMDArMnRUdjI5aURwYzlBZnBmcTVLdkUwYVZNRjErb1lBOGFBTVdBTWpKK0IxaHY2K0Nub0xZSXZ3ZkpIVXYxaVJTK2F0S2tJYmRXTWdYRXlnQXZkRjZHZkdhZjM1clV4b01lQWJlaDZYTlpGZWtNMGtHbVJ2WkdVOVdSNm82SmxHQVA3emdBMjhTOUN2NDA0ZndIOTZyN0hhL0VaQTdzWWVHWlhoVjNsMTY1ZCt5YnFYSlAxTU1uZUVlZmZSSjFQaVhOTFhqTHdXUng0Wjg2TitXOHZzM2IrYmRKbUo2aFZNQVpHeWdCZjNYMThwTDZiMjhhQU9nT3ROM1IxajY0SUlDNXl2b05RdVVGWGxpWnRLb05iUldQQUdEQUdqSUZSTTlETEkzZmN3TXV2b1BuWTdDUFFyMElwMmZ0a3BQbkIzVmVnMzRZNitRVVNyTHZ4WVoycmtCN1psdXB3Mlk1WUw1YjFHTW8rbnRablhRcnRmZ1pLSHpPUjdiUE15MFR1NjNGa3lUamxVNHRHWDFGdnc2TlBLT2U3UlByS2orMG9qcXV0ZHpHb1Y0dG5Gei9hRmZMbHlxc2VtOXF2Z2MveFJWN1lINjV2a1Z6M0wvTkx4OFEyRzJqSER4czV2bnpNN0gwdXltcHhpL3B5ekt4OVE5NlhvSzVQZWN6bVNKRi9LTi9wRjl1aEhzZTI5SCtOamJ6S2ZMQXV0UGFZUysyekxXT1Q4N3R3YnNzNFVaK2NjajdsMWdEbXBiTEJEL0tMT0NIWHBSK2tvcXh0Yk9SRnhrWitHUysvbmRrUTVrTzVScm0rUm5JOUh2anRqSWt4MEE4REhJVkNjcHNjUFVLWlhMVGtZc1ZtMldSRVdpNlVMUE1sTnhtOVF1SVdDU2ZZeG9LRlBDNXVaZmJrcEt5OE1RTlB4bG1wM1k0MjIvQzRHT1Q4eExrVFA2NWNuNkNTWCs3YXVXT081N1FQdC9HVnc5czFDdXZhUi8xU0hvcHNvYjY3cUhQeCtNZU5NZUZWOFBuaVFsL0dOWnZLRFQzSGhZZkwweHkzT0pleCtZdTdiUDRWUDFZVTF2R0wyR1d5d1lkdmkrZG8zR2JNOFdKd0d6YzVYcVI5dEZ0djZHWE9JMSt1SWVSRWNsclViQ05lVkFvWkcrUE9YV1R6SEZyR1IyNzhTUzRzYlF3RVp3QURVOHJHWUVTaG5HRCtJSmFUMFMxb1BQSnFWOTRKMEFiYlpwc3pNeXBLWm9Oa29BMG5yKzhISjduME00T1dCR2FabDRsY3JINzdLdTEydE1uNTQrSGx5b0REZUpnbnIvWnh1aGJmejdvOE4rWkwrdXpTOEtpdS9WeXNEcWZzQ0h6ZW5aRVBidXh1SE9Vd21DL2I0MXlLejFmUlprNDhxajhtVzhVbW5TaEkrM2VvbGZ3Q0RqbVF3b3RmNXNrNWtJdFpjdVBTcU85eldHbk1vUjAzV1RrdTZUZnQreGRldWZpRVhXNStqbXNrTTNGOWtGME1vTVQza2VlMHRaSHY4SGtzS0s4VG0rU1JhZkpMOWZPek8zV1V5ZGhaano1UzE5eEkzeXh0REhUS0FBYWhsSTJGQVlYK1pHSjl0Mmxua3hoNTJZQjNBU0NQazFtS3ZCdVMrVXl2RjJrY3VhQkw0WmV4bWFDQUUwZEt0cmdqazNlaU9ja2FJcEVyUUZ4ZVdTNU9yMHcyemRvaGMxdWJ3akswOGU5WXVBaklDeDF5S3lXelI1OVFVSmZueG54SkRseTZnZjFDSGh5ZWZ3UStONUNNRDFlT1BMbUkrbU1DeFpsa2ZDSEhIMHYwWlFOYjJLakxiUzQyWUsveGFRUHE5MlAyS0JabGxmeEtjZVRHSXVlUFA0NDJmQmR4K1hVcmp6bjRJTWVQejd1TWYrTXBoTFBQSTNCazNkd1RzTFRjOXpIM0pUemF5LzdINmVXVEZSejlkazFqSTZaY3ozeGMyWCtzNnlUTFQrTW9IVjhzTnpFR2dqTGdSbVY2ekJaRFp4VDV1WW1JODJ3RGRYWGNFV1c4RytUVnJkOEdXV3ZKMnJxTTlPZ3ZGSnlVbVRoOEhwRXBzZmtUbUp5Z2ZGdmJESk00c3FHSG0xdHdaQ1BaYmtjYjZXZUdoemJrUjRyL09JK2JnWlNjbi9RWmhYVjRsbnpVNGt2eUk5TTE3UmZ5SVBIOE5QREpBVGNTdHBWM2h6aTlGTm5HNWFYSGpDK2M1MnpqZk9kaWl6cDF1QzNGVDNGd3lLUzJYMmpwWDZDU0U2a1pPQkxabmE3a2htbVVOUjV6YUN2SEQrT1Y5bVg4UC9MdHluTzBrM1d6K2VEcXBMZzRaSks3UUVFdSswWEtlaU5GaGxac0cvNERXNDY5YkkzeTh1a1RMOTV5ODlqRlpVZGpvSXlCWjhvS3VzekgxOXRmTHJLSEFjMEpsbTNZUlhXMjVQbS8wL2JQWmRQc0tocVovUHJjbDIxdC9icDluT2NtZnZvMWZPWUh6dDhBbDltNW4yakFzN1RYbXE4Rzl2MFF0cDREbnhzVHg5TE96WGNyMEdXaEhDdjhTZWJXc2RFMk5vbVA5SStCVitaaVZiOXlteHJBY25lREh2ZzJ2dVFZT0lCdnVYRkF2N2Y0S3R2U2IrbTdkTUgzVlpaVlNlZHd5WjlzVk1Dbjg4c2QxOVZieEphemw5cG1ub3RMMnVFYUtKOUljTXp5cVF0L0Z2eDUzM2ZrbVJnREd3dzh0WkV6a0F3TVpBNW91Wm12QnpieTdEZnRpbjNVTjgraDdRT2ZpeWNYU3JjNWNVSDlHeWpIVWRYZi82TnFmUWtkVzMyUFJ0ZGk2OFZTZ0doNnM0Y05tMk9SUDJQMUx3SjRVY0luR203OEJnamJJUGVGZ2NGdTZDQllQdTc3TVFiOHB6am9vZHpZdFVYZVhmQWR2VDk1M0JYMUxydCtQUjluVi91bTVkSi9QZzdOM29zU0VPZStYOUpPRTU2bHZUWjgwWThtOXFYL3U5SVNuM1U1anI2Y2ppTi84ZHlGeFhJWk85K0pidXRqYWJ2TE1iek5Mei9tOTRPTE1pbDhjcGFTSkhtb08rWmtXL1pGbWJ5L1NvZHNxWk5iSzlCWHVUdDJuTXM3Wk1JNHY5eHhEWTE2ZGVhVHRPbmpFMC9tNWV5QWhLOUIveFIxdUxGTEhJNnhuQTg0TnpFR05oZ1k4b1l1QjM1MjVleFB5bzJJbW1YNGs0ZnYwTllMTlk1OFNyQnRRNVNUa3UvazFvdDQyazdHME15emFxMmtEMnhCLzllTEY0NzBQZmN4a0FjcGZhektjeHUrUFBPNUJhNnFmUjlqMjdtTWovVXlHMGpuRnZodElLSk14czVzZmxoVnRxbEwyNWxkMXpjQ1V5TloxUysvSHQvVmJ2aGZsT2M1MldiTVNSLzQvbnlqSHlyWXB6c1pwenhCRy9sRWoxblNEcy9sdkdiTThoRTN5MTE5cmRqVzMyMFFtSkw2SjdsMjluSVgzZW5HN2orSmxPMHVBZTJ2TWRBRkF4aTRVcklQZDV4dEZHNzltSVgxVUVkK09FTThManlja1BJTFhlWm5rNWduUW5KMmtWOXFFMlgreHpFQ1pqUHA0a2o5cEUrVnhHc24yMlMrSW5PYm45dktmTDRrdnArVzl2eDJWWGdtWDM0LytEYXljeG0zbjBhbEp2WkxlU2pBOS91SGJibUo1RERvckd6TGN5R1NyN0xZaVVjbEwrdU5IRWYxMklBcHBhbGZQaWZFZFA0N1hySjVKWG1SYWJUeDQ1TysrZWxkdnZKak1lZkQrc014YWFzb2pmcnN4eUxKZkVlaC95VTcrOGYxazJ5Yis1WUFCVTFqNHlZdVAzeWpEV0w1ZU5rSGNZd3RMV2M3OWczajh2M2V1T2dwNHNUeWpBRjFCakFZcFdRVDJSbENvVnMwMXZWY3ZqeWl3UDhhVjJMS3pVUk9YbGtuWnhjRlcyMmkzUC9aajhPaXJkd0U5ZnprQkpiK3VIWTg1aFpPcjUyc2wvbUt6RkkvZDVUeDBYZVpIMXhNcEMvU1htMmVHUWZ3eXZoQ1VYNmhsWEg3YWRTdGJSOXRTamtxd0MvYmdPbm50bjVsdVpPTUwrSWpjeHZYYkxOK1BNb2pUMHBFOXBVY3cxdGo4N0FhK1pYRzRHOFlIdlE3MjU3cXJHbEdnMjA4bEk2NTFENWZDMGdPZlBzOGwwODQxamJsSDVTWHpUM0pKK3ZrT0NXd0p4dXhvcnhOYk52YTBqUzV5V0pEZXRjTmhmOGtRZEpnYVdNZ1kyQ3dqOXo1MkFsZThsMlNmUHpGdkwrQzh1aEU1VkVVN1BHakZEN21LckxudjNkMHR2bDFMeC83MFNlMmQ0OEE2Uit4c2tkcVNBY1YrRUcvZlQvb3Qvc0F6UG1XODZNcHo0SXYyUmV1ZnlTSE9YditTVlA3UGs3Wk9mREpBZnVDdmprTzZKL2pCY2xMd2NKYWFTd0IwM0ZOREQvV3JNOUR4K2I4ZHNlcWZyRSs2bkp1ZlI0cWVXRVIrV0llZGFzSWUzTHM3eHh6QkVWYjhzVHh5dmYwUlJ3eW4xaWxBZ3oycDkrM2JPUDZlVDAvVVk5MVhLd09qM1VZNDJkUlRpNXlnanpYeDAxaVkxdStDL2ZIQi9QWDR5N0ZkemJwQytQTnhrNWF3SE4rNFU3ZlRZd0JZMENEQVN6MHVTdDhEVXpETUFhTUFXUEFHREFHTkJrWTdCMjZacENHWlF3WUE4YUFNV0FNN0RzRHRxSHZldzliZk1hQU1XQU1HQU5YZ2dIYjBLOUVOMXVReG9BeFlBd1lBL3ZPZ0czbys5N0RGcDh4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThhQU1XQU1HQVBHZ0RGZ0RCZ0R4b0F4WUF3WUE4YUFNV0FNR0FQR2dERmdEQmdEeG9BeFlBd1lBOGFBTVdBTUdBUEdnREZnREJnRHhvQXhZQXdZQThiQXVCbjRmL0lEQTd5eXFlVDNBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+'></a>
              </h1>
              <div class='left'>
                <p>Nit. 900.837.823</p>
                <p>Tu Respaldo Seguro S.A.S.</p>
                <p><a href='http://www.turespaldo.co/' target='_blank'>http://www.turespaldo.co</a></p>
              </div>
            </div>
            <div class='col-7'>
              <h2>SOLICITUD DE CRÉDITO, LIBRANZA Y SEGUROS</h2>
            </div>
            <div class='clear'></div>
          </div>
        </header>
        <section class='form'>
          <div class='sections sec1'>
            <div class='row p0 row-field'>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Ciudad</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Entidad pagadora</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Monto solicitado</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Plazo solicitado en meses</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec2'>
            <div class='row p0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>DATOS PERSONALES DEL TITULAR Y ASEGURADO</h3>
                </div>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Primer Apellido</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Segundo Apellido</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Primer Nombre</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Segundo Nombre</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-7 col-field'>
                <fieldset class='border-field'>
                  <label>Tipo de Documento de Identidad</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-5 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Número del documento de identidad</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Género</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Lugar de Nacimiento</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-5 col-field'>
                <fieldset class='border-field'>
                  <label>Fecha de Nacimiento (DD/MM/AAAA)</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Estado Civil</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Número de personas a cargo</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Nivel de Escolaridad</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Profesión</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <label>Ocupación</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <label>Dirección de Residencia</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Barrio</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Ciudad / Municipio</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Departamento</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Teléfono Celular</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Teléfono Residencia</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Tipo de Vivienda</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Estrato</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 col-field'>
                <fieldset class='border-field'>
                  <label>E-mail</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field'>El deudor expresamente acepta recibir la correspondencia, estado de cuenta,
                  reporte anual de costos y demás información relacionada con los productos de Tu Respaldo Seguro
                  S.A.S., a la dirección de correo
                  electrónico.</p>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec3'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>SI ES EMPLEADO, POR FAVOR DILIGENCIAR ESTE ESPACIO</h3>
                </div>
              </div>
              <div class='col-8 col-field'>
                <fieldset class='border-field'>
                  <label>Nombre de la empresa actual</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Tipo de empresa</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 col-field'>
                <fieldset class='border-field'>
                  <label>Dirección Oficina</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Barrio</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Ciudad / Municipio</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Departamento</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Teléfono Oficina</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-12 col-field'>
                <fieldset class='border-field'>
                  <label>E-mail Oficina</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>¿Es Funcionario Público?</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>¿Administra Recursos Públicos?</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>¿Goza de Reconocimiento Público?</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field'>Si respondió afirmativamente alguna de las preguntas anteriores usted es
                  considerado PEP, diligencie la tabla que aparece a continuación, con la información de la persona con
                  la cual tiene una sociedad conyugal, de hecho o de derecho, los datos de sus familiares hasta segundo
                  grado de consanguinidad, segundo de afinidad y primero civil.</p>
              </div>
              <div class='col-18 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Tipo de Identificación</label>
                </fieldset>
              </div>
              <div class='col-18 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Número de Identificación</label>
                </fieldset>
              </div>
              <div class='col-28 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-two-line'>Nombre Completo</label>
                </fieldset>
              </div>
              <div class='col-18 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-two-line'>Nacionalidad</label>
                </fieldset>
              </div>
              <div class='col-18 add-004px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-two-line'>Tipo de Relación</label>
                </fieldset>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-28 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-28 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-28 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-28 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-28 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-18 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec4'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>INFORMACIÓN DEL CÓNYUGE O COMPAÑERO (A) PERMANENTE</h3>
                </div>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Nombre completo</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>No. de Documento</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Celular</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>E-mail</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec5'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>INFORMACIÓN FINANCIERA (EN PESOS)</h3>
                </div>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-left'>Ingresos mensuales (salario, pensión, prestación de
                    servicios)</label>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-left text-two-line'>$var</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-left text-two-line'>Egresos Mensuales</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 text-left text-two-line'>$var</label>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <div class='field'>Otros Ingresos</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>Otros Egresos</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <div class='field'>¿Cuáles?</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>¿Cuáles?</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <div class='field'>Total Ingresos</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>Total Egresos</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec6'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>DESCRIPCIÓN DE ACTIVOS</h3>
                </div>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Tipo de inmueble</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Dirección</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Ciudad</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <label>Valor Comercial</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Tipo de vehículo</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <label>Placa</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label>Marca</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Modelo</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <label>Valor Comercial</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec7'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>REFERENCIAS</h3>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-12 col-field'>
                    <p class='border-field primary-color'>Referencias familiares (que no vivan con el Solicitante)</p>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <label class='border-b-0'>Nombre Completo</label>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Teléfono</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Celular</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Parentesco</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Ciudad</label>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-12 col-field'>
                    <p class='border-field primary-color'>Referencias personales (que no trabajen con el Solicitante)
                    </p>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <label class='border-b-0'>Nombre Completo</label>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Teléfono</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Celular</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Parentesco</label>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <label class='border-b-0'>Ciudad</label>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-9'>
                    <div class='row p0'>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='col-3 col-field'>
                        <fieldset class='border-field'>
                          <div class='field'>$var</div>
                        </fieldset>
                      </div>
                      <div class='clear'></div>
                    </div>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec8'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>INSTRUCCIONES PARA EL DESEMBOLSO</h3>
                </div>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Abono en cuenta</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Número de cuenta</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Entidad</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Ciudad</label>
                </fieldset>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec8'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>RELACIÓN DE CARTERAS A COMPRAR</h3>
                </div>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Tercero</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>NIT / CC</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>No. Obligación</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>Valor a Cancelar</label>
                </fieldset>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>1.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>2.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>3.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>4.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>5.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>6.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12'>
                <div class='row p0'>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'><b>7.</b> $var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-3 add-004px col-field'>
                    <fieldset class='border-field'>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec9'>
            <div class='row p0 border-t-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>SEGURO VOLUNTARIO</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field'>El Deudor manifiesta que le fue informado sobre el alcance y coberturas del
                  seguro voluntario, y con su aceptación expresa en esta sección y su firma de este documento,
                  manifiesta expresamente que desea
                  adquirir y pagar la póliza ofrecida vía el cobro de las cuotas periódicas del Crédito. El Deudor
                  manifiesta que el Acreedor le hizo entrega de la póliza con sus coberturas en o antes de la fecha de
                  desembolso del
                  Crédito. El Acreedor respecto de este seguro actuará como mero mandatario para el recaudo del valor de
                  la prima que paga el Deudor vía la cuota periódica, y el valor de la prima será entregada a la
                  aseguradora.
                  El Deudor SI <span class='low-bar'>$var</span> NO <span class='low-bar'>$var</span> manifiesta su
                  interés expreso de adquirir una póliza de seguro voluntario con la Aseguradora que le fuera ofrecida
                  por el Acreedor.
                </p>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec10'>
            <div class='row p0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>CONDICIONES DEL SEGURO</h3>
                </div>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Datos del asegurado: Estatura</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 col-field'>
                <fieldset class='border-field'>
                  <label>Datos del asegurado: Peso</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line'>$var</div>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>AMPAROS:</label>
                  <label class='border-b-0 label-2'>Muerte por cualquier causa</label>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <label>Datos del asegurado: Peso</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-6 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-5 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 label-1'>Periodicidad en el pago de la prima: <br> Mensual</label>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 label-1'>VALOR ASEGURADO: <br> Saldo insoluto del crédito</label>
                </fieldset>
              </div>
              <div class='col-3 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 label-1'>TIPO DE POLIZA: <br> Colectiva</label>
                </fieldset>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 label-1'>Fecha de inicio de vigencia</label>
                </fieldset>
              </div>
              <div class='col-1 col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-1 col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-1 col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0 label-1'>Valor total de tu prima</label>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Cuota mensual</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Plazo en meses</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Valor inicial del crédito</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-3 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Prima mensual</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Fecha de inicio de vigencia</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-001px  col-field'>
                <fieldset class='border-field'>
                  <label>Tiene otro crédito</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-4 add-002px  col-field'>
                <fieldset class='border-field'>
                  <label>Monto crédito anterior (otro crédito)</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>


              <div class='clear'></div>
            </div>
          </div>

          <div class='sections sec11'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>BENEFICIARIOS A TITULO GRATUITO</h3>
                </div>
              </div>
              <div class='col-4 add-002px col-field'>
                <p class='border-field text-center p-two-line'>Tomador de la póliza</p>
              </div>
              <div class='col-8 col-field'>
                <p class='border-field text-center'>La designación como beneficiario oneroso al Tomador no podrá ser
                  revocada ni modificada por el asegurado sin la previa y expresa autorización del mismo.</p>
              </div>
              <div class='clear'></div>
            </div>
          </div>

          <div class='sections sec12'>
            <div class='row p0 border-t-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>DECLARACIÓN DE ASEGURABILIDAD (para ser diligenciado únicamente pro el Asegurado)</h3>
                </div>
              </div>

              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>MARCA CON UNA X SEGUN CORRESPONDA</label>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>SI</label>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <label class='border-b-0'>NO</label>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>1. ¿Eres pensionado por Invalidez?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>2. ¿Te han detectado la presencia de anticuerpos contra el virus VIH positivo o te
                    han diagnosticado SIDA?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>3. ¿Has sufrido de algún accidente o evento violento, o tienes algún tipo de
                    incapacidad o limitación física o mental?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>4. ¿Estás tomando medicamentos o está bajo algún tipo de studio o tratamiento por
                    síntomas, manifestaciones, o molestias o cirugías pendientes?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>5. ¿Consumes bebidas alcohólicas más de tres veces por semana o consumes sustancias
                    psicoactivas?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>6. ¿Te han diagnosticado enfermedades de tipo congénito, neurológico, cardiovascular,
                    o enfermedad como infarto o enfermedades de las arterias coronarias, cáncer, leucemia, linfomas,
                    miopía, astigmatismo, cataratas, trombosis, derrames o eventos cerebrovasculares, anemias, enfisema
                    pulmonar, EPOC, artritis reumatoidea, cirrosis, insuficiencia renal, epilepsia, tumores, trastornos
                    inmunológicos o reumatológicos, fracturas (brazo, codo, rodilla), túnel del carpio, urolitialisis,
                    lupus, tabaquismo, glaucoma, hepatitis, enfermedades mentales, o te han hecho tratamiento quirúrgico
                    or obesidad?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>7. ¿Has padecido o padeces de: asma, diabetes, hipertensión arterial, histerectomía
                    y/o tiroides?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-8 add-001px col-field'>
                <fieldset class='border-field'>
                  <p class='field'>8. ¿Has padecido o padeces de cualquier otra enfermedad o lesión que no se haya
                    mencionado?</p>
                </fieldset>
              </div>
              <div class='col-2 add-001px col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-2 col-field'>
                <fieldset class='border-field'>
                  <div class='field field-two-line-center text-center'>$var</div>
                </fieldset>
              </div>
              <div class='col-12 col-field'>
                <fieldset class='border-field'>
                  <label class='text-left border-b-0 '>9. En caso de haber marcado 'Si' a alguna de las anteriores
                    preguntas diligencia los siguientes datos:</label>
                </fieldset>
              </div>
              <div class='col-12 col-field '>
                <div class='row p0 row-field'>
                  <div class='col-1 add-001px'><br></div>
                  <div class='col-11 border-field add-001px border-r-0 border-t-0 border-b-0'>
                    <div class='col-12 border-field border-r-0  border-t-0'>
                      <p class='field padding-field'>a) Nombre de la enfermedad o padecimiento: <span
                          class='spacie'></span> $var</p>
                    </div>
                    <div class='col-12 border-field border-r-0'>
                      <p class='field padding-field'>b) Fecha de diagnóstico: <span class='spacie'></span> $var</p>
                    </div>
                    <div class='col-12 border-field border-r-0'>
                      <p class='field padding-field'>c) Secuelas o condiciones: <span class='spacie'></span> $var</p>
                    </div>
                    <div class='col-12 border-field border-r-0'>
                      <p class='field padding-field'>d) Tratamientos médicos o cirugías realizadas: <span
                          class='spacie'></span> $var</p>
                    </div>
                    <div class='col-12 border-field border-r-0'>
                      <p class='field padding-field'>e) Tratamiento actual de la enfermedad o padecimiento: <span
                          class='spacie'></span> $var</p>
                    </div>
                    <div class='col-12 border-field border-r-0 border-b-0'>
                      <p class='field padding-field'>f) Observaciones o comentarios adicionales: <span
                          class='spacie'></span> $var</p>
                    </div>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>

              <div class='clear'></div>
            </div>
          </div>

          <div class='sections sec13'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>¿QUÉ NO CUBRE ESTE SEGURO? (EXCLUSIONES)</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field tertiary-b-color'>Para todoslos amparos de tu póliza, no tendrás cobertura si la
                  solicitud de indemnización es consecuencia de:
                  A. Patologías o enfermedades, físicas o mentales, congénitas o adquiridas que sean preexistentes, es
                  decir, que hayan sido diagnosticadas, o conocidas por el asegurado, o por la cual se haya recibido
                  tratamiento, y no hayan sido declaradas por el asegurado con anterioridad al inicio de vigencia
                  delseguro. B. Tu participación en actividades ilícitas. C. Suicidio o intento de suicidio,salvo el
                  cubierto una vez
                  transcurrido el periodo de carencia definido en las condiciones particulares. D. Enfermedades que
                  ocurran o se diagnostiquen como consecuencia del consumo de bebidas embriagantes o de drogastóxicas,
                  heroicas o alucinógenas. E. Guerra civil o internacional, motín, huelga, movimientos subversivos en
                  general, conmociones civiles de cualquier clase y actos terroristas.
                  ¡Ten Presente!: Existen exclusiones adicionales aplicables a cada uno de los amparos adicionales que
                  se te hayan sido otorgados, podrás consultarlas en su respectivo anexo.
                </p>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec14'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>IMPORTANTE</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field'>
                  1. Este documento es una solicitud de seguro, por lo tanto, su validez como certificado de seguro
                  requiere de la aceptación de la aseguradora. La vigencia de la cobertura individual para cada uno de
                  los asegurados corresponderá a un año a partir de la fecha de inicio de vigencia y será renovada
                  automáticamente por un periodo igual al inicialmente contratado. No obstante, dicha duración de
                  cobertura está limitada al período de vigencia del programa de seguros y a las disposiciones que se
                  adopten en relación con las primas impagadas que el tomador llegare a asumir.
                  <br>
                  2. Además de las causales de terminación contempladas en la ley, el presente seguro termina cuando: 1.
                  Por la falta de pago de la prima, vencido el plazo otorgado para tal fin. 2. Cuando Colmena te
                  indemnice por la cobertura de incapacidad total y permanente. 3. Cuando dejes de pertenecer al grupo
                  asegurado del Tomador. 4. Cuando cumplas la edad máxima de permanencia en cada uno de los amparos de
                  la póliza. 5. Al vencimiento del término de la vigencia de la póliza,si ésta no se renueva por
                  decisión del Tomador o Colmena. 6. Cuando tú con autorización del Tomador/Beneficiario oneroso
                  revoquen por escrito la póliza. 7. Cuando tu obligación crediticia con el Tomador se extinga
                  íntegramente.
                  <br>
                  3. En virtud de las disposiciones legales y normativas en materia de PROTECCIÓN AL CONSUMIDOR
                  FINANCIERO y TRATAMIENTO DE DATOS PERSONALES, recomendamos mantenerse informado al respecto
                  consultando de forma periódica nuestro portal web: <a class='primary-color'
                    href='http://www.colmenaseguros.com' target='_blank'>www.colmenaseguros.com</a>, ingresando a los
                  enlaces Servicio al cliente/Protección al consumidorfinanciero y Servicio al cliente/protección de
                  datos o en <a class='primary-color'
                    href='malito:defensordelconsumidorfinanciero@colmenaseguros.com'>defensordelconsumidorfinanciero@colmenaseguros.com</a>
                  <br>
                  4. Apreciado cliente te recomendamos consultar todas las condiciones generales de la presente póliza,
                  ingresando a través de <a class='primary-color' href='http://www.colmenaseguros.com'
                    target='_blank'>www.colmenaseguros.com</a>
                </p>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec15'>
            <div class='row p0  border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>DECLARACIONES</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <p class='border-field'>
                  Declaro:
                  <br>
                  PRIMERO - Autenticidad de los datos: Que lo anotado en esta solicitud de seguro es verídico.
                  <br>
                  SEGUNDO - Actividades Licitas: que las actividades a las que me dedico son licitas, las ejerzo dentro
                  de los marcoslegales y no generan ningún riesgo ni amenaza contra mi vida.
                  <br>
                  TERCERO - Vigencia delseguro: que entiendo que la duración de la vigencia delseguro respecto de cada
                  asegurado dependerá de la periodicidad de pago de la prima. Este seguro se renovará automáticamente
                  por el mismo periodo inicialmente contratado, siempre que se realice el pago de la prima, o podrá
                  rechazarse su renovación solicitando la revocación delseguro antes de que se renueve de conformidad
                  con lo
                  establecido en las condiciones de la póliza.
                  <br>
                  CUARTO - Que he leído, revisado, entendido y recibido todas y cada una de las condiciones de la
                  presente carátula y el clausulado de la póliza, que conozco su contenido, cualesson mis deberes,
                  obligaciones,
                  derechos, los costos y gastos que le son inherentes y sus consecuencias legales y con mi firma acepto
                  integralmente su contenido.
                  <br>
                  QUINTO - Compañía responsable delseguro: que entiendo y acepto que este seguro es un producto emitido
                  y administrado por Colmena Seguros S.A.
                </p>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec16'>
            <div class='row p0 border-t-0 border-b-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>AUTORIZACIONES</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <div class='border-field padding-field'>
                  <p>a. Autorizo al Tomador para que me incluya en la presente póliza de Vida Grupo Deudores.</p>
                  <p>b. Autorización Historia Clínica: Sin perjuicio de lo dispuesto en el artículo 34 de la Ley 23 de
                    1981 o cualquier otra norma que la desarrolle, complemente, amplíe, modifique o reemplace, autorizo
                    expresamente a Colmena Seguros o a cualquiera que esta designe, para verificar y/o solicitar ante
                    cualquier médico o institución clínica, médica u hospitalaria la información que sea necesaria,
                    incluyendo la historia clínic respectiva. Esta autorización comprende igualmente la facultad para
                    obtener copia certificada de mi historia clínica aún después de mi fallecimiento.</p>
                  <h4>AUTORIZACIONTRATAMIENTO DE DATOS PERSONALES</h4>
                  <p>En mi calidad de titular de mi información personal autorizo de manera expresa y previa a Colmena
                    Segurosidentificada con el NIT 800226175-3, ubicada en la Calle 72 No. 10-71 Piso 4, con teléfono
                    5141592 y a sus sucesores, cesionarios o a quien represente u ostente sus derechos, para que
                    directamente o a través de terceros, realicen el siguiente tratamiento sobre mi información
                    personal, a través de medios físicos o digitales o electrónicos:</p>
                  <h4>AUTORIZACIÓN TRATAMIENTO DATOS SENSIBLES</h4>
                  <p>Autorizo que mi huella digital sea capturada por la Aseguradora, mis datos morfológicos (los
                    obtenidos de fotografías, grabaciones de video o captura de iris, entre otros) así como datos de
                    salud se recolecten, almacenen, usen, circulen,supriman y, en general, se traten en procesos de
                    identificación de condiciones de asegurabilidad para brindar coberturas delseguro, para garantizar
                    la seguridad en susinstalaciones, y prevenir el fraude o suplantación.</p>
                  <p>Declaro que me han informado de manera adecuada y suficiente sobre las finalidades con las cuales
                    tratarán este dato sensible, y conozco que no me encuentro obligado a autorizar su tratamiento. Sin
                    embargo, entiendo que estos usos buscan dar más seguridad a mis datos en el desarrollo de mi
                    relación contractual y lo encuentro razonable.</p>
                  <h4>AUTORIZACIÓN TRATAMIENTO OTROS DATOS PERSONALES</h4>
                  <p>Autorizo a Colmena Seguros (Responsable), a quien represente sus derechos y a quien llegue a actuar
                    como cesionario de los mismos, de forma previa, expresa, inequívoca e irrevocable, a tratar mi
                    información personal, o la de mí representado, mientras se encuentren vigentes las siguientes
                    finalidades:</p>
                  <h4>FINALIDADES ESENCIALES</h4>
                  <p>1. Para cumplir con los derechos y exigir las obligaciones de la relación contractual existente,
                    directamente o a través de terceros contratados porla Aseguradora para ejercerlabores propias de su
                    objeto social (Encargados) (Ej.: la administración del seguro para envío de pólizas, información
                    sobre el seguro adquirido, intermediarios y reaseguradores, actividades de cobranza, entrega de
                    correspondencia, procesos operativos o de riesgos, proveedores de tecnología entre otros). Colmena
                    implementará medidas de seguridad destinadas a proteger la identidad del titular.</p>
                  <p>2. Para solicitarme directamente, o verificar con losOperadores de Información o las Agencias de
                    Información Comercial, nacionaleso del exterior, toda la información relacionada con mi
                    comportamiento financiero, comercial y crediticio, y el cumplimiento de mis obligaciones crediticias
                    y la proveniente de terceros países, incluyendo información relacionada con los aportesrealizados al
                    Sistema de Seguridad Social. También para consultarla, confirmarla, reportarla, analizarla,
                    actualizarla, conservarla y retirarla.</p>
                  <p>3. Para transferirla a Autoridades nacionales o internacionales en cumplimiento de las normas,
                    referidas a la prevención de actividadesilícitas y al intercambio o suministro de información para
                    efectos tributarios.</p>
                  <p>4. Para actualizar, conservar, procesar, recopilar y utilizar mi información personal, y/o la
                    documentación entregada en virtud de la relación contractual.</p>
                  <p>5. Para que me brinden asesoría o asistencia para administrar los productos y servicios de la
                    entidad.</p>
                  <p>6. Para enviarme a la dirección de correo electrónico y demás datos de contacto que registre, las
                    comunicaciones y reportes de tipo legal y comercial que se requieran.</p>
                  <p class='margin-b-15'>7. Para compartir mis datos de contacto y de titularidad de
                    productosfinancieros con las entidades que forman parte del Conglomerado Financiero al que Colmena
                    Seguros pertenece, para ofrecersus productos y servicios que son complementarios a los ofrecidos por
                    la Aseguradora. Las empresas que conforman el Conglomerado Financiero se encuentran publicadas en el
                    aviso de privacidad que podrá consultar en la página web de la Entidad: <a class='primary-color'
                      href='https://www.colmenaseguros.com/servicio-cliente/Paginas/Proteccion-de-datos.aspx'
                      target='_blank'>https://www.colmenaseguros.com/servicio-cliente/Paginas/Proteccion-de-datos.aspx</a>
                  </p>

                  <h4>FINALIDADES NO ESENCIALES</h4>
                  <p class='margin-b-15'>Autorizo para que mi información personalsea compartida con aliados de la
                    Aseguradora para lassiguientesfinalidades:</p>
                  <p class='margin-b-15'>1. Para realizar estudios sobre mis gustos, hábitos e intereses. <span
                      class='cube'>$var</span> SI <span class='cube'>$var</span> NO</p>
                  <p class='margin-b-15'>2. Para el ofrecimiento de bienes, productos o servicios financieros
                    complementarios a los adquiridos con la Aseguradora. <span class='cube'>$var</span> SI <span
                      class='cube'>$var</span> NO</p>
                  <p class='margin-b-15'>3. Para el ofrecimiento de bienes, productos y servicios que puedan ser de mi
                    interés, mediante la realización de campañas comerciales o el desarrollo de convenios de marca
                    compartida. <span class='cube'>$var</span> SI <span class='cube'>$var</span> NO</p>
                  <p>Con la firma de la presente autorización declaro que me fueron informadoslos aliados y terceros con
                    quienesse compartirá la información para cada una de las anterioresfinalidades y que se me informó
                    de manera clara que los podré consultar en la página web www.colmenaseguros.com y que dicha
                    información se actualizará cada vez que surjan cambios en los aliados y terceros.</p>
                  <h4>CON LA FIRMA DE LA PRESENTE AUTORIZACIÓN DECLARO QUE HE SIDO INFORMADO QUE:</h4>
                  <p>la ley, y siempre y cuando no exista ningún tipo de relación con la Aseguradora o no se encuentre
                    vigente algún producto o servicio derivado de esta autorización. 2. Me asisten los derechos a
                    consultar, actualizar, rectificar y suprimir o revocar el consentimiento, esto último cuando no
                    medie un deber legal o contractual que lo impida. 3. Que los canales dispuestos por Colmena para
                    ello son los establecidos en el aviso de privacidad que podrá consultar en <a class='primary-color'
                      href='https://www.colmenaseguros.com/servicio-cliente/Paginas/Proteccion-de-datos.aspx'
                      target='_blank'>https://www.colmenaseguros.com/servicio-cliente/Paginas/Proteccion-de-datos.aspx</a>
                    4. Que a través de dichos canales podré revocar el consentimiento otorgado respecto las “Finalidades
                    no esenciales”. 5. Que las Políticas bajo las cuales se tratarán mis Datos Personales se encuentran
                    a mi disposición en la página web de Colmena en el enlace: <a class='primary-color'
                      href='https://www.colmenaseguros.com/imagenescolmenaARP/contenido/proteccion-datos/Politica-de-proteccion-de-datos-personales.pdf'
                      target='_blank'>https://www.colmenaseguros.com/imagenescolmenaARP/contenido/proteccion-datos/Politica-de-proteccion-de-datos-personales.pdf</a>
                    6. Que usted podrá consultar el listado de los contratistas que la Entidad ha dispuesto para ejercer
                    las labores propias de su objeto social en la página web la Entidad.</p>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec17'>
            <div class='row p0 border-t-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>ESPACIO PARA OBSERVACIONES DEL ASESOR</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <div class='border-field padding-field min-height-60'>
                  <p>$var</p>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec18'>
            <div class='row p0'>
              <div class='col-5 logo-1'>
                <img
                  src='data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNDVFQjYwMzc4NTExRUQ4RTkxQTY0QUMyOTJFNEY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNDVFQjYxMzc4NTExRUQ4RTkxQTY0QUMyOTJFNEY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI0NUVCNUUzNzg1MTFFRDhFOTFBNjRBQzI5MkU0RjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI0NUVCNUYzNzg1MTFFRDhFOTFBNjRBQzI5MkU0RjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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'
                  alt='' srcset=''>
              </div>
              <div class='col-4 logo-2'>
                <img
                  src='data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEMTlDM0ZDMzc4QTExRUQ5NkM4QjlDRjlDREM2NTBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEMTlDM0ZEMzc4QTExRUQ5NkM4QjlDRjlDREM2NTBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQxOUMzRkEzNzhBMTFFRDk2QzhCOUNGOUNEQzY1MEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQxOUMzRkIzNzhBMTFFRDk2QzhCOUNGOUNEQzY1MEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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'
                  alt='' srcset=''>
              </div>
              <div class='col-3 logo-3'>
                <img
                  src='data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2QTYwNjBEMzc4NTExRUQ4MEQxODlCMDlFMDlDQzQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2QTYwNjBFMzc4NTExRUQ4MEQxODlCMDlFMDlDQzQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDZBNjA2MEIzNzg1MTFFRDgwRDE4OUIwOUUwOUNDNDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDZBNjA2MEMzNzg1MTFFRDgwRDE4OUIwOUUwOUNDNDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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'
                  alt='' srcset=''>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec19'>
            <div class='row p0 border-t-0 border-b-0  row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>AUTORIZACIÓN DE CONSULTAY REPORTE DE CENTRALES DE RIESGO E INFORMACIÓN</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <div class='border-field padding-field'>
                  <p>El Cliente declara que los recursos que girará o entregará en desarrollo del presente contrato no
                    provienen, ni provendrán actividades ilícitas contempladas en el Código Penal Colombiano y que
                    provienen de <span class='low-bar-3'>$var</span> Así mismo, declara que la información suministrada
                    en esta solicitud es real y verificable y asume plena responsabilidad por la información errónea,
                    falsa o inexacta que hubiere proporcionado en este documento o durante la vigencia del contrato,
                    información que se compromete a actualizar al menos una vez al año y cuando sea relevante para el
                    desarrollo del contrato.</p>
                  <p>Declaro que la información que he suministrado es verídica y doy mi consentimiento expreso e
                    irrevocable a TU RESPALDO SEGURO S.A.S., a sus cesionarios o a quien represente sus derechos para:
                    a) Consultar, en cualquier tiempo, en las centrales de riesgo toda la información relevante para
                    conocer mi desempeño como deudor, mi capacidad de pago o para valorar el riesgo futuro de concederme
                    un crédito y/o cualquier otro servicio financiero; b) Reportar en las centrales de riesgo,
                    directamente o por intermedio de las entidades públicas que ejercen funciones de vigilancia y
                    control, datos tratados o sin tratar, referidos a: (I) cumplimiento oportuno eincumplimiento, de mis
                    obligaciones crediticias, deberes constitucionales y legales de contenido patrimonial, de tal forma
                    que estas presentan una información veraz, pertinente, completa, actualizada y exacta de mi
                    desempeño como deudor después de haber cruzado y procesado diversos datos útiles para obtener una
                    información significativa; (II) mis solicitudes de crédito así como otros atinentes a mi relaciones
                    comerciales, financieras y en general socioeconómicas que yo haya entregado o que consten en
                    registros públicos, bases de datos públicas o documentos públicos; c) Conservar, tanto en TU
                    RESPALDO SEGURO S.A.S., como en las centrales de riesgos, con las debidas actualizaciones y durante
                    el período necesario señalado en sus reglamentos la información suministrada.</p>
                  <p>Reconozco y acepto que TU RESPALDO SEGURO S.A.S., no es responsable de los periodos de permanencia
                    de tal información en los bancos de datos, toda vez que su obligación es la actualización de los
                    reportes efectuados.</p>
                </div>
              </div>
              <div class='clear'></div>
            </div>
          </div>
          <div class='sections sec20'>
            <div class='row p0 border-t-0 row-field'>
              <div class='col-12 col-field'>
                <div class='border-field'>
                  <h3>ESPACIO PARA EL ASESOR COMERCIAL</h3>
                </div>
              </div>
              <div class='col-12 col-field'>
                <fieldset class='border-field'>
                  <label>Observaciones</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-12 col-field'>
                <div class='border-field padding-field'>
                  <p>En mi calidad de Asesor Comercial para TU RESPALDO SEGURO S.A.S., declaro que he asesorado y
                    entrevistado personalmente al solicitante. Así mismo, declaro que el solicitante diligenció en mi
                    presencia la solicitud adjunta y todos los anexos, que le tomé las huellas dactilares y verifiqué la
                    veracidad de los documentos que se adjuntan a la presente solicitud. Por lo anterior declaro que la
                    información de esta solicitud y anexos no será compartida, transferida o entregada a terceros</p>
                </div>
              </div>
              <div class='col-4 add-002px col-field'>
                <fieldset class='border-field'>
                  <label>Nombre del Asesor Comercial</label>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='col-8'>
                <div class='row p0'>
                  <div class='col-4 add-002px col-field'>
                    <fieldset class='border-field'>
                      <label>Firma</label>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-4 add-002px col-field'>
                    <fieldset class='border-field'>
                      <label>Fecha</label>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='col-4 col-field'>
                    <fieldset class='border-field'>
                      <label>Hora y Lugar</label>
                      <div class='field'>$var</div>
                    </fieldset>
                  </div>
                  <div class='clear'></div>
                </div>
              </div>
              <div class='col-12 col-field'>
                <fieldset class='border-field'>
                  <div class='field'>$var</div>
                </fieldset>
              </div>
              <div class='clear'></div>
            </div>
          </div>
        </section>
      </div>
      <div class='clear'></div>
    </div>
  </div>

</body>

</html>`