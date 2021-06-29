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
const SettingsPermission = (props) => {
  const [permissions, setPermissions] = useState({
    camId: '',
    email: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.value
    });
  };

  const handleRequest = async () => {
    const {data} = await axios.get(`http://192.168.0.160:8080/GlassfishPiCamREST/api/Permission?email=${email}&addOrRemove=${confirm}&camID=${camId}`, {headers});
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
          subheader="Update permission"
          title="Permission"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Camera ID"
            margin="normal"
            name="camId"
            onChange={handleChange}
            value={permissions.camId}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleChange}
            value={permissions.email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Active"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            value={permissions.confirm}
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

export default SettingsPermission;
