import { v4 as uuid } from 'uuid';

export default [
  {
    camID: 1,
    camIP: '192.168.0.111',
    camPort: '8080',
    isActive: true,
    location: "Nadav's Office",
    type: 'PiCam'
  },
  {
    camID: 2,
    camIP: '192.168.0.200',
    camPort: '8080',
    isActive: false,
    location: 'Ninjas Team',
    type: 'PiCam'
  }
];
