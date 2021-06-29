import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import customers from 'src/__mocks__/customers';
import axios from 'axios';
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
}
const CustomerList = () => {
  const [results, setResults] = useState([]);

  const getData = async () => {
    return axios.get('http://192.168.0.160:8080/GlassfishPiCamREST/api/cameras', {headers}).then(data => {
      return data || []
    })
  }
  useEffect(() => {
    setResults(getData())
  }, []);
  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar customers={results} setResults={setResults} />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={results} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
