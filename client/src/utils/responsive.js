export const DeviceBreakPoint = {
    MobileMax: 767,
    TabletMax: 991,
};

export const getWindowDimension = () => {
    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    return { width, height };
};

export const getDeviceTypeInfo = (windowDimension = getWindowDimension()) => {
    const { width, height } = windowDimension

    const DeviceDetails = {
        deviceType: "",
        deviceOrientation: "",
        screenWidth: width,
        screenHeight: height
    };
    
    if (width <= DeviceBreakPoint.MobileMax){
        DeviceDetails.deviceType = "Mobile";
    } else if (DeviceBreakPoint.MobileMax < width && width <= DeviceBreakPoint.TabletMax ){
        DeviceDetails.deviceType = "Tablet"; 
    } else {
        DeviceDetails.deviceType = "Laptop"; 
    }

    if (height < width) {
        DeviceDetails.deviceOrientation = "Landscape";
    } else {
        DeviceDetails.deviceOrientation = "Portrait";
    }
    
    return DeviceDetails;
};

export const isMobileDevice = () => {
  const deviceInformation = getDeviceTypeInfo();
  return deviceInformation.deviceType === "Mobile";
};

export const isTabletDevice = () => {
  const deviceInformation = getDeviceTypeInfo();
  return deviceInformation.deviceType === "Tablet";
};

export const isLaptopDevice = () => {
  const deviceInformation = getDeviceTypeInfo();
  return deviceInformation.deviceType === "Laptop";
};