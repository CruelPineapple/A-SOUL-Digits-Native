import axios from 'axios';

const server = 'https://sakurajimama1.ltd';
// const server = "/api"

export function getFans(vmid: string) {
  return axios.get(server + '/asd/', {
    params: {
      vmid: vmid,
    },
  });
}

/**
 * @param name 对应 character 中的 key
 * @return res.data.lastweek
 */
export function getLastweek(name: string) {
  return axios.get(server + '/asd/w', {
    params: {
      name: name,
    },
  });
}

export function getYesterday(name: string) {
  return axios.get(server + '/asd/y', {
    params: {
      name: name,
    },
  });
}

export function getToday(name: string) {
  return axios.get(server + '/asd/t', {
    params: {
      name: name,
    },
  });
}

export function getCharacterData(vmid: string, name: string) {
  return Promise.all([
    getToday(name),
    getLastweek(name),
    getYesterday(name),
    getFans(vmid),
  ]);
}
