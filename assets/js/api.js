/**
 * @param {Object} params
 * @param {String} params.title
 * @param {String} params.first_name
 * @param {String} params.last_name
 * @param {String} params.address
 * @param {String} params.policy_start_date
 * @param {String} params.ern
 * @param {String} params.password
 * 
 * @return {Object} response
 * @return {String} response.ref
 * @return {Object} response.products
 * @return {Object} response.products.ProfessionalIndemnity
 * @return {Boolean} response.products.ProfessionalIndemnity.hasPolicy
 * @return {Number} response.products.ProfessionalIndemnity.price
 * @return {Number} response.products.ProfessionalIndemnity.startDate
 * @return {Number} response.products.ProfessionalIndemnity.endDate
 * @return {Object} response.products.CyberCrime
 * @return {Boolean} response.products.CyberCrime.hasPolicy
 * @return {Number} response.products.CyberCrime.price
 * @return {Number} response.products.CyberCrime.startDate
 * @return {Number} response.products.CyberCrime.endDate
 * @return {Object} response.products.BuildingsAndContents
 * @return {Boolean} response.products.BuildingsAndContents.hasPolicy
 * @return {Number} response.products.BuildingsAndContents.price
 * @return {Number} response.products.BuildingsAndContents.startDate
 * @return {Number} response.products.BuildingsAndContents.endDate
 * @return {Object} response.products.ManagementLiability
 * @return {Boolean} response.products.ManagementLiability.hasPolicy
 */
const createAccount = async(params) => {
    const response = await axios.post('https://dr-frontend-test-api.herokuapp.com/api/accounts', {
        title: params.title,
        first_name: params.first_name,
        last_name: params.last_name,
        address: params.address,
        policy_start_date: params.policy_start_date,
        ern: params.ern,
        password: params.password,
        ern_exempt: params.ern_exempt,
        password_confirmation: params.password_confirmation,
    })

    return response.data
}