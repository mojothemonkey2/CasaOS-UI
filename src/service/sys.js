/*
 * @Author: JerryK
 * @Date: 2021-09-18 21:32:13
 * @LastEditors: Jerryk jerry@icewhale.org
 * @LastEditTime: 2022-07-13 12:10:24
 * @Description: System HardWare Info API
 * @FilePath: /CasaOS-UI/src/service/sys.js
 */
import { api } from "./service.js";

const PREFIX = "/sys"

const sys = {

    // Get websocket port
    getSocketPort() {
        return api.get(`${PREFIX}/socket-port`);
    },

    // Check if need init
    guideCheck() {
        return api.get(`${PREFIX}/state`);
    },

    // check system version
    checkVersion() {
        return api.get(`${PREFIX}/version`);
    },
    getVersion() {
        return api.get(`${PREFIX}/version`);
    },

    // Hardware Info
    hardwareInfo() {
        return api.get(`${PREFIX}/hardware`)
    },

    // get cpu info
    getCpuInfo() {
        return api.get(`${PREFIX}/cpu`);
    },

    // get disk info
    getDiskInfo() {
        return api.get(`${PREFIX}/disk`);
    },

    // get memory info
    getMemoryInfo() {
        return api.get(`${PREFIX}/mem`);
    },

    // get network info
    getNetworkInfo() {
        return api.get(`${PREFIX}/network`);
    },

    // get logs
    getLogs() {
        return api.get(`${PREFIX}/logs`);
    },

    //Get Debug Info
    getDebugInfo() {
        return api.get(`${PREFIX}/debug`);
    },

    // get system utilization
    getUtilization() {
        return api.get(`${PREFIX}/utilization`);
    },

    // get casaos server port
    getServerPort() {
        return api.get(`${PREFIX}/port`);
    },

    // edit casaos server port
    editServerPort(data) {
        return api.put(`${PREFIX}/port`, data);
    },

    // get usb status
    getUsbStatus() {
        return api.get(`${PREFIX}/usb-auto-mount`);
    },

    // Toggle usb auto-mount
    toggleUsbAutoMount(data) {
        return api.put(`${PREFIX}/usb-auto-mount`, data);
    },

    // update CasaOS
    updateCasaOS() {
        return api.post(`${PREFIX}/update`);
    },

    // stop casaos
    stopCasaOS() {
        return api.post(`${PREFIX}/stop`);
    },

    //Check web ui Port
    checkUiPort(url) {
        return api.get(url);
    },
    

    // --------------------------------------------------------------------------


    // Set usb mount off
    setUsbMountOff() {
        return api.put(`${PREFIX}/usb/off`)
    },

    // Set usb mount on
    setUsbMountOn() {
        return api.put(`${PREFIX}/usb/on`)
    },

}
export default sys;
