import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const getData = async () => {
    try {
      const response = await axios.post("/api/user/get-user-info-by-id", {}, {
        // With every API request (excepting login and registration), a header will be sent containing the token, for authorisation
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
}

export default Home;
