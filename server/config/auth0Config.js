import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://dev-4u25na4zxyvhfq1z.us.auth0.com/api/v2/",
    issuerBaseURL: "https://dev-4u25na4zxyvhfq1z.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
