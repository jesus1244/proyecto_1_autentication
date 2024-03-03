const sendEmailOtp = (name: string, otpCode: string) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>correo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet">
</head>

<body style="padding: 100px 0;background-color: #000;">
    <div style="width: 100%;display: block;text-align: center;">
        <div style="display: inline-block;text-align: center;width: 960px;max-width: 100%;background-color: #624988;padding-top: 15px;">
            <div style="width: 100%;display: block;padding-bottom: 50%;background-image: url(https://i.ibb.co/YpFTsg9/forgotpass.png);background-repeat: no-repeat, repeat;background-size: contain;background-position: center;"></div>
            <div style="width: 100%;display: block;text-align: center;background-image: url(https://i.ibb.co/Y06kH03/fondo.jpg);background-repeat: no-repeat;background-position: 0 40px;background-size: cover;">
                <div style="text-align: center;display: inline-block;padding: 3.13% 4.17%;width: 65%;max-width: 620px;border-radius: 15px;box-shadow: 30px 40px 100px rgba(0,0,0, 0.066604);background-color: #fff;margin-bottom: 50px;">
                    <img src="https://i.ibb.co/c2Vg7tN/xplorer-Go.png" alt="xplorer-Go" border="0" style="width: 300px;max-width: 100%;margin-bottom: 20px;height: auto;">
                    <h2 style="margin: 0;margin-bottom: 15px;opacity: 1;color: rgba(134,168,49,1);font-size: 25px;font-weight: 600;font-style: normal;letter-spacing: 0px;text-align: center;line-height: 28px;font-family: 'Poppins', sans-serif;">${name}</h2>
                    <p style="color: #000;margin: 0;font-family: 'Poppins', sans-serif;opacity: 1;font-size: 18px;font-weight: 500;font-style: normal;letter-spacing: 0px;text-align: center;line-height: 24px;max-width: 100%;display: inline-block;width: 290px;">Tu código de verificación para recuperar tu contraseña es:</p>
                    <div style="letter-spacing: 0;line-height: 0;padding: 20px 0 25px;text-align: center;">
                        ${otpCode.split('').map(code => `
                            <span style="max-width: calc((100% / 6 ) - 6px);border-radius: 6px;background-color: rgba(241,241,241, 1);text-align: center;display: inline-block;opacity: 1;color: rgba(0,0,0,1);font-size: 22px;font-weight: 500;font-style: normal;letter-spacing: 0px;width: 50px;line-height: 40px;height: 40px;font-family: 'Poppins', sans-serif;margin: 0 2px;">${code}</span>
                        `).join('')}
                    </div>
                    <div style="border-radius: 10px;opacity: 1;background-color: rgba(241,241,241, 0.5);padding: 30px 4.9%;">
                        <h3 style="margin: 0;margin-bottom: 25px;opacity: 1;color: rgba(134,168,49,1);font-family: 'Poppins', sans-serif;font-size: 18px;font-weight: 600;font-style: normal;letter-spacing: 0px;text-align: center;line-height: 24px;max-width: 100%;display: inline-block;width: 410px;">Para aclarar cualquier inquietud nos puedes contactar por los siguientes medios</h3>
                        <p style="color: #000;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;opacity: 1;font-size: 16px;font-weight: 500;font-style: normal;letter-spacing: 0px;line-height: 12px;"><a style="color: #000;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;opacity: 1;font-size: 16px;font-weight: 500;font-style: normal;letter-spacing: 0px;line-height: 20px;text-decoration: none;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;display: inline-block;max-width: 100%;line-height: 1;" target="_blank" href="malito:info@xplorer.com.ec"><img src="https://i.ibb.co/sQ7xfsC/email-xplorer.png" style="display: inline;width: 18px;margin-right: 5px;height: 14px;margin-bottom: 0px;"> info@xplorer.com.ec</a></p>
                        <p style="color: #000;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;opacity: 1;font-size: 16px;font-weight: 500;font-style: normal;letter-spacing: 0px;line-height: 20px;"><a style="color: #000;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;opacity: 1;font-size: 16px;font-weight: 500;font-style: normal;letter-spacing: 0px;line-height: 20px;text-decoration: none;" target="_blank" href="https://wa.me/+593980509033"><img src="https://i.ibb.co/s3w0QQj/whatsapp-xplorer.png" style="display: inline;margin-right: 5px;margin-bottom: -4px;width: 20px;height: 20px;"> Vía WhatsApp: (+593) 98-050-9033</a></p>
                    </div>
                </div>
            </div>
            <div style="opacity: 1; background-color: #634A8A;">
                <p style="color: #fff;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;line-height: 20px;padding: 5px 20px 3px;opacity: 1;font-size: 17px;font-weight: 600;font-style: normal;letter-spacing: 0px;">
                    <span style="color: #fff;margin: 0;font-family: 'Poppins', sans-serif;text-align: center;line-height: 20px;opacity: 1;font-size: 17px;font-weight: 600;font-style: normal;letter-spacing: 0px;margin: 10px 15px;display: inline-block;">Estamos Conectados</span>
                    <a style="color: #fff;font-family: 'Poppins', sans-serif;text-align: center;line-height: 20px;opacity: 1;font-size: 17px;font-weight: 600;font-style: normal;letter-spacing: 0px;text-decoration: none;margin: 7px 5px;display: inline-block;background-image: url(https://i.ibb.co/n3PKxyy/social-1-round-facebook.png);background-repeat: no-repeat;background-size: contain;background-position: left center;" target="_blank" href="https://www.facebook.com/XplorerEcuador/"><span style="display: inline-block;margin: 6px 0;padding: 0 0 0 40px;">XplorerEcuador</span></a>
                    <a style="color: #fff;font-family: 'Poppins', sans-serif;text-align: center;line-height: 20px;opacity: 1;font-size: 17px;font-weight: 600;font-style: normal;letter-spacing: 0px;text-decoration: none;margin: 7px 5px;display: inline-block;background-image: url(https://i.ibb.co/0nZ9GkX/social-1-round-instagram.png);background-repeat: no-repeat;background-size: contain;background-position: left center;"target="_blank" href="https://www.instagram.com/xplorerecuador/"><span style="display: inline-block;margin: 6px 0;padding: 0 0 0 40px;">@xplorerecuador</span></a>
                </p>
            </div>
        </div>
    </div>
</body>

</html>
  `
}

export { sendEmailOtp }
