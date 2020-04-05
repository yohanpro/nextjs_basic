export const getCookieFromReq = (req, cookieKey) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey}=`));
    if (!cookie) return undefined;

    return cookie.split('=')[1];
};
export const shortenText = (text, maxlength = 124) => {
    if (text && text.length > maxlength) {
        return text.subString(0, maxlength) + ' ...';
    }
    return text;
};