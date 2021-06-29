import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  TextField
} from '@material-ui/core';
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
}
const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    email: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleRequest = async () => {
    const {data} = await axios.get(`http://192.168.0.160:8080/GlassfishPiCamREST/api/changeActiveStatusUser?email=${email}&addOrRemove=${confirm}`, {headers});
    if(data.msg){
      alert('Camera updated')
    } else if (data.err) {
      alert(data.err)
    }
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update user"
          title="User"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Active"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            value={values.confirm}
            variant="outlined"
            select
          >
            <MenuItem value="ON">
              ON
            </MenuItem>
            <MenuItem value="OFF">
              OFF
            </MenuItem>
          </TextField>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={async () => handleRequest()}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
