const apiBaseUrl = "http://localhost:5000";

//gets all All Accomplishments
export const getAllAccomplishments = (onSuccess) => {
    try {
      const getUsersReq = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      };
      fetch(apiBaseUrl + "/accomplishments/getAll", getUsersReq)
        .then((response) => response.json())
        .then((data) => onSuccess(data));
    } catch (err) {
      console.log(`Error on getIncidents: ${err}`);
    }
  };
  