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
const SettingsCamera = (props) => {
  const [activeCamera, setActiveCamera] = useState({
    camera: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setActiveCamera({
      ...activeCamera,
      [event.target.name]: event.target.value
    });
  };

  const handleRequest = async () => {
    const {data} = await axios.get(`http://192.168.0.160:8080/GlassfishPiCamREST/api/changeActiveStatusCamera?camID=${camera}&addOrRemove=${confirm}`, {headers});
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
          subheader="Update camera"
          title="Camera"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Camera number"
            margin="normal"
            name="camera"
            onChange={handleChange}
            value={activeCamera.camera}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Active"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={activeCamera.confirm}
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
            onClick={async () => await handleRequest()}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsCamera;
