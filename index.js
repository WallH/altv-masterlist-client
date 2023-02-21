const axios = require("axios"); 


const getGeneralInfo = async() =>
{
    let response = await axios.get('https://api.alt-mp.com/servers');
    return response.data;
}

const getAllServersInfo = async() =>
{
    let response = await axios.get('https://api.alt-mp.com/servers/list');
    console.log(response.data);
    return response.data;
}

const getAllServerInfo = async(masterlist_id) =>
{
    let response = await axios.get(`https://api.alt-mp.com/server/${masterlist_id}`);
    console.log(response.data);
    return response.data;
}

module.exports = 
{
    getGeneralInfo,
    getAllServersInfo,
    getAllServerInfo
}