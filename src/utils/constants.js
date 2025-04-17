export const IMG_URLS = {
    LOGO_URL: "/cinegpt-logo.png",
    AVTAR_URL: "https://occ-0-4110-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229",
    BACKGROUND_IMG: "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg",
    POSTER_BASE_PATH: 'https://image.tmdb.org/t/p/w500/',
    VIDEO_BACKGROUND_BASE_PATH: "https://www.youtube.com/embed/",
    VIDEO_BACKGROUND_FILTERS: "?&autoplay=1&mute=1"
}

export const FORM_FIELDS = {
    EMAIL: "email",
    PASSWORD: "password",
    NAME: "name"
}

export const SUPPORTED_LANGUAGES = [
    {
        "identifier": "en",
        "value": "English"
    },
    {
        "identifier": "hi",
        "value": "हिंदी"
    },
    {
        "identifier": "es",
        "value": "Español"
    },
    {
        "identifier": "fr",
        "value": "Français"
    },
    {
        "identifier": "mr",
        "value": "मराठी"
    },
]

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
}

export const TRAILER = "Trailer";