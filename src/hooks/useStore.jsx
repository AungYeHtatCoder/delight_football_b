import { useState } from "react";


const useStore = (url, inputData) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(inputData)
      })
        .then(async response => {
          if (!response.ok) {
            setLoading(false);
            let errorData;
            try {
              errorData = await response.json();
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
      
            if (response.status === 422) {
              setErrMsg("");
              setError(errorData.errors);
              console.error(`Login failed with status ${response.status}:`, errorData);
            }else if (response.status === 401) {
              console.error(`Login failed with status ${response.status}:`, errorData);
              setError("");
              setErrMsg(errorData.message)
            }else{
              console.error(`Unexpected error with status ${response.status}`);
            }
      
            throw new Error('Login Failed');
          }
      
          return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setLoading(false);
          // console.log(data);
        //   if (data.data.token) {
        //     localStorage.setItem('token', data.data.token);
        //     navigate('/');
        //   } else {
        //     throw new Error('Token not found in response');
        //   }
        })
        .catch(error => {
          console.error('Login error:', error);
        });
        return { data, loading, error };
}
export default useStore;