import {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductListResults from 'src/components/customer/ProductListResults';
import ProductListToolbar from 'src/components/customer/ProductListToolbar';
import events from 'src/__mocks__/events';
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
}
const ProductList = () => {
  const [results, setResults] = useState([]);
  const getData = async () => {
    return axios.get('http://192.168.0.160:8080/GlassfishPiCamREST/api/resultsAll24Hours', {headers}).then(data => {
      return data || []
    })
  }
  useEffect(() => {
    console.log(getData())
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
        <ProductListToolbar customers={results} setResults={setResults} />
        <Box sx={{ pt: 3 }}>
          <ProductListResults customers={results} />
        </Box>
      </Container>
    </Box>
  </>)
};

export default ProductList;
