export const fetchData =(url:string) => {
    return fetch(url, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "max-age=0",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "__qca=P0-645878217-1678836708504; euconsent-v2=CPoxMcAPoxMcAAKAuAESC8CsAP_AAH_AAAiQJTNd_H__bW9r-f5_aft0eY1P9_r77uQzDhfNk-4F3L_W_LwX52E7NF36tq4KmRYku1LBIUNlHNHUDVmwaokVryHsak2cpTNKJ6BEkHMZO2dYGF5vmxtj-QKY5_5_d3bx2D-t_9v-39z3z81Xn3d5_-_02PCdU5_9Dfn9fR_b89KP9_78v8v8_9_rk3_e__3_79_7_H9-cEowCTDVuIAuzLHBm0DCKBECMKwkIoFABBQDC0QEADg4KdlYBPrCJAAgFAEYEQIMAUYEAgAAEgCQiACQIsEAAAIgEAAIAEAiEADAwCCwAsBAIAAQDQMUQoABAkIMiIiKUwICoEggJbKhBKC6Q0wgCrLACgERsFAAiCQEVgACAsHAMESAlYsECTEG0QAjACgFEqFaik9NAQAA.YAAAAAAAAAAA; addtl_consent=1~39.4.3.9.6.9.13.6.4.15.9.5.2.11.1.7.1.3.2.10.3.5.4.21.4.6.9.7.10.2.9.2.18.7.20.5.20.6.5.1.4.11.29.4.14.4.5.3.10.6.2.9.6.6.9.4.4.29.4.5.3.1.6.2.2.17.1.17.10.9.1.8.6.2.8.3.4.146.8.42.15.1.14.3.1.18.25.3.7.25.5.18.9.7.41.2.4.18.21.3.4.2.7.6.5.2.14.18.7.3.2.2.8.20.8.8.6.3.10.4.20.2.13.4.6.4.11.1.3.22.16.2.6.8.2.4.11.6.5.33.11.8.1.10.28.12.1.3.21.2.7.6.1.9.30.17.4.9.15.8.7.3.6.6.7.2.4.1.7.12.13.22.13.2.12.2.10.1.4.15.2.4.9.4.5.4.7.13.5.15.4.13.4.14.10.15.2.5.6.2.2.1.2.14.7.4.8.2.9.10.18.12.13.2.18.1.1.3.1.1.9.25.4.1.19.8.4.5.3.5.4.8.4.2.2.2.14.2.13.4.2.6.9.6.3.2.2.3.5.2.3.6.10.11.6.3.16.3.11.3.1.2.3.9.19.11.15.3.10.7.6.4.3.4.6.3.3.3.3.1.1.1.6.11.3.1.1.11.6.1.10.5.2.6.3.2.2.4.3.2.2.7.15.7.14.1.3.3.4.5.4.3.2.2.5.4.1.1.2.9.1.6.9.1.5.2.1.7.10.11.1.3.1.1.2.1.3.2.6.1.12.5.3.1.3.1.1.2.2.7.7.1.4.1.2.6.1.2.1.1.3.1.1.4.1.1.2.1.8.1.7.4.3.2.1.3.5.3.9.6.1.15.10.28.1.2.2.12.3.4.1.6.3.4.7.1.3.1.1.3.1.5.3.1.3.4.1.1.4.2.1.2.1.2.2.2.4.2.1.2.2.2.4.1.1.1.2.2.1.1.1.1.2.1.1.1.2.2.1.1.2.1.2.1.7.1.2.1.1.1.2.1.1.1.1.2.1.1.3.2.1.1.8.1.1.6.2.1.6.2.3.2.1.1.1.2.2.3.1.1.4.1.1.2.2.1.1.4.3.1.2.2.1.2.1.2.3.1.1.2.4.1.1.1.5.1.3.6.3.1.5.2.3.4.1.2.3.1.4.2.1.2.2.2.1.1.1.1.1.1.11.1.3.1.1.2.2.5.2.3.3.5.1.1.1.4.2.1.1.2.5.1.9.4.1.1.3.1.7.1.4.5.1.7.2.1.1.1.2.1.1.1.4.2.1.12.1.1.3.1.2.2.3.1.2.1.1.1.2.1.1.2.1.1.1.1.2.4.1.5.1.2.4.3.8.2.2.9.7.2.2.1.2.1.4.6.1.1.6.1.1.2.6.3.1.2.201.300.100; _gid=GA1.2.446174307.1682119409; __cf_bm=KKdB16XA2R0ZAvPCRhC_mjPRoCk51AwPcRiyNq9_pxE-1682453253-0-AYviBBLfndJjWE0K+6vXgc7WwyOul0kaHa1ZO+Omlnii+W5TEmfUkUQCJLAaKxs08GHU4kxc5Px20NSFU9yI6bXiuU8d4eKuiRXU/IRiZM1I; XSRF-TOKEN=eyJpdiI6IjZwT2JMK0xSSDdQdGNEYXJqV1N3UVE9PSIsInZhbHVlIjoiL21BcEdhZi9DNkJtR0ZPVWlKZEdCUEdUY3VrYm9XRVphZjN6N08zNWtHWjArV2FPTGJjM3ZsOGZUdlJhZXJ5M0YyQzB0TlhabVVWZFBpbk9tVXdGNTVJdWMvcENYLytYOWdXSUJadmVkTzRIWjg2TmJNbDI2RkpoaFQzcjFDT2EiLCJtYWMiOiIwOGI2MzE4ZjY0MDU4MmNhMGU4Nzk3NDAwMmRlZWQ5OGNiZjk3ZDgyODQ5N2FiOWEyZDI5NmY5ZDAyNDcwYjE5IiwidGFnIjoiIn0%3D; lectormanga_session=eyJpdiI6IjNKcjdXL1piYVpZZGhxM3lxOGt4YWc9PSIsInZhbHVlIjoiOXVORGN1RmpaRnZYeTViOVhQU2RzcVo0QUdzdm1UZldqUG1YVTd2OVZRVm5ZZEZ0dXY2aFg4RHZCYUt3U2tBeE1qUks4bjY3MDljREdORU8rWThZNTlTSnhzcFlMZ0pSSHZ4R3VJMnRnVm5sanRXOWdYQWk5QkxxWTdjaVU2R1IiLCJtYWMiOiIxZTBlOTMzNWI5ZTdmZTUxMDc0ZmQyMmRhNThlNmI0ZDM2ZGY1NDA3ZTcwMzc3ZWNiMmI5ZDQwMDhhYzdhMjM1IiwidGFnIjoiIn0%3D; _ga_G2121VR49K=GS1.1.1682451300.45.1.1682453864.0.0.0; _ga=GA1.2.1200495464.1679943592; _gat_gtag_UA_125726140_1=1",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      cache:'no-cache',
      method: "GET",
    });
}
